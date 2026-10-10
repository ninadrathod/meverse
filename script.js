/* ----------------------------------------------------------
     section 1: Tabs — Projects / Tutorials
   ---------------------------------------------------------- */

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const indicator = document.querySelector(".tab-indicator");
const hasGsap = typeof gsap !== "undefined";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Entry counts next to each tab label
document.querySelectorAll("[data-count-for]").forEach(function (el) {
  const panel = document.getElementById(el.dataset.countFor);
  el.textContent = String(panel.querySelectorAll(".entry").length).padStart(2, "0");
});

function moveIndicator(tab) {
  const label = tab.querySelector(".tab-label");
  indicator.style.width = `${label.offsetWidth}px`;
  indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
}

function selectTab(tab, { focus = false, animate = true } = {}) {
  tabs.forEach(function (t) {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
  });

  if (focus) tab.focus();
  moveIndicator(tab);
  history.replaceState(null, "", `#${tab.id.replace("tab-", "")}`);

  if (animate && hasGsap && !reduceMotion) {
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    gsap.fromTo(panel.querySelectorAll(".entries > li"),
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.035, ease: "power3.out", clearProps: "transform,opacity" }
    );
  }
}

tabs.forEach(function (tab, i) {
  tab.addEventListener("click", function () {
    if (tab.getAttribute("aria-selected") !== "true") selectTab(tab);
  });

  tab.addEventListener("keydown", function (e) {
    let next = null;
    if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
    if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
    if (e.key === "Home") next = tabs[0];
    if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      selectTab(next, { focus: true });
    }
  });
});

// Open the tab named in the URL hash (#projects / #tutorials)
const initialTab = document.getElementById(`tab-${location.hash.slice(1)}`) || tabs[0];
selectTab(initialTab, { animate: false });

window.addEventListener("resize", function () {
  moveIndicator(tabs.find(function (t) { return t.getAttribute("aria-selected") === "true"; }));
});
document.fonts && document.fonts.ready.then(function () {
  moveIndicator(tabs.find(function (t) { return t.getAttribute("aria-selected") === "true"; }));
});

/* ----------------------------------------------------------
     section 2: Intro
   ---------------------------------------------------------- */

document.getElementById("year").textContent = new Date().getFullYear();

if (hasGsap && !reduceMotion) {
  gsap.timeline()
    .from(".wordmark > span", { yPercent: 60, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power4.out" })
    .from(".tabs", { opacity: 0, y: 14, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .from(".panel:not([hidden]) .entries > li", {
      y: 18, opacity: 0, duration: 0.45, stagger: 0.04, ease: "power3.out", clearProps: "transform,opacity"
    }, "-=0.25");
}
