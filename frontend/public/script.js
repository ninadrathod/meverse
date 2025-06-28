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
   
    
    

   
   
   