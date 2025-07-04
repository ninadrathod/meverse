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
   console.log(splittedText);

   // Creating text clutter
   var clutter="";
   let cntr = 0
   splittedText.forEach(function(elem){
    if(cntr < 2){clutter += `<span class="roboto-me text-[5vh] md:text-[7vh] lg:text-[10vh] tracking-tighter">${elem}</span>`;}
    else{clutter += `<span class="roboto-verse text-[5vh] md:text-[7vh] lg:text-[10vh] tracking-tighter">${elem}</span>`;}
    cntr++;
   });

   title.innerHTML = clutter;
   console.log(title);

   gsap.from("#title-container span", {
    y:-50,
    opacity:0,
    delay:0.2,
    duration:1,
    stagger:0.1,
    ease:"bounce.out"
   });
   
  // --------------------------- subtite animation ----------------------------------
  
    gsap.from("#cursor", {
        delay: 2,
        opacity:0,
        repeat:-1,
        yoyo:true,
        duration:0.5,
        ease:"power2.inOut",
        paddingLeft:"1%"
      });

      gsap.to("#subtitle-prefix", {
        duration:1,
        delay:2,
        text: "Showcase your"
      });

    const Subtitle = document.getElementById("subtitle");
    let tl = gsap.timeline({repeat: -1, delay:4, repeatDelay:0});

    tl.to(Subtitle, {duration:1.5, text: "Innovation", repeat:1, yoyo:true,  repeatDelay: 2})
      .to(Subtitle, {duration:1.5, text: "Skill", repeat:1, yoyo:true,  repeatDelay: 2})
      .to(Subtitle, {duration:1.5, text: "Passion", repeat:1, yoyo:true,  repeatDelay: 2})
      .to(Subtitle, {duration:1.5, text: "Journey", repeat:1, yoyo:true,  repeatDelay: 2})

    