/* ----------------------------------------------------------
     section 1: Loading background grid
   ---------------------------------------------------------- */

   const svg = document.querySelector('.grid');

   // Vertical lines
   for (let i = 2; i < 100; i += 2) {
     const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
     line.setAttribute('x1', `${i}%`);
     line.setAttribute('x2', `${i}%`);
     line.setAttribute('y1', '0');
     line.setAttribute('y2', '100%');
     svg.appendChild(line);
   }
   
   // Horizontal lines
   for (let i = 4; i < 100; i += 4) {
     const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
     line.setAttribute('x1', '0');
     line.setAttribute('x2', '100%');
     line.setAttribute('y1', `${i}%`);
     line.setAttribute('y2', `${i}%`);
     svg.appendChild(line);
   }
   
   /* ----------------------------------------------------------
        section 2: GSAP animations for page content
      ---------------------------------------------------------- */
   
  // --------------------------- title animation ------------------------------------
   
   var title = document.querySelector("#title-container")
   var titleText = title.textContent;
   var splittedText = titleText.split("");
   // Creating text clutter
   var clutter="";
   let cntr = 0
   splittedText.forEach(function(elem){
    if(cntr < 2){clutter += `<span class="roboto-me text-[4vh] md:text-[5.5vh] lg:text-[7.5vh] tracking-tighter">${elem}</span>`;}
    else{clutter += `<span class="roboto-verse text-[4vh] md:text-[5.5vh] lg:text-[7.5vh] tracking-tighter">${elem}</span>`;}
    cntr++;
   });

   title.innerHTML = clutter;

   gsap.timeline()
    .from("#title-container span", {
      y: -36,
      opacity: 0,
      duration: 0.42,
      stagger: 0.04,
      ease: "power3.out",
    })
    .add(showSubdomains, 0.22);
   
  // --------------------------- subtite animation ----------------------------------
  
    gsap.from("#cursor", {
        delay: 0.55,
        opacity:0,
        repeat:-1,
        yoyo:true,
        duration:0.5,
        ease:"power2.inOut",
        paddingLeft:"1%"
      });

    // Get the subtitle element once
const Subtitle = document.getElementById("subtitle");

// Create the main timeline. This one will NOT repeat infinitely.
let masterTl = gsap.timeline(); // Removed repeat: -1 from here

// Add the initial #subtitle-prefix animation to the master timeline
masterTl.to("#subtitle-prefix", {
    duration: 0.65,
    delay: 0.75,
    text: "Showcase your"
});

// Create a sub-timeline for the repeating #subtitle animation.
// This timeline IS set to repeat infinitely.
let subtitleRepeatTl = gsap.timeline({
    repeat: -1, // This timeline will repeat infinitely
    repeatDelay: 0 // No delay between repeats of this sub-timeline
});

subtitleRepeatTl.to(Subtitle, { duration: 1, text: "Innovation", repeat: 1, yoyo: true, repeatDelay: 1.25 })
    .to(Subtitle, { duration: 1, text: "Skill", repeat: 1, yoyo: true, repeatDelay: 1.25 })
    .to(Subtitle, { duration: 1, text: "Passion", repeat: 1, yoyo: true, repeatDelay: 1.25 })
    .to(Subtitle, { duration: 1, text: "Journey", repeat: 1, yoyo: true, repeatDelay: 1.25 });

// Add the subtitleRepeatTl to the masterTl.
// It will start immediately after the "#subtitle-prefix" animation finishes.
masterTl.add(subtitleRepeatTl);

/* ----------------------------------------------------------
     section 3: Subdomain portal animations
   ---------------------------------------------------------- */

gsap.set("#subdomains", { opacity: 0 });

function showSubdomains() {
  gsap.set("#subdomains", { opacity: 1 });

  gsap.from(".subdomain-section-title", {
    opacity: 0,
    y: 10,
    duration: 0.45,
    stagger: 0.08,
    ease: "power2.out"
  });

  gsap.from(".subdomain-card", {
    y: 20,
    opacity: 0,
    duration: 0.48,
    stagger: { amount: 0.5, from: "start" },
    ease: "power2.out",
    clearProps: "transform"
  });
}
    