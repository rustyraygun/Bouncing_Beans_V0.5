anime({
        targets: ['.sliderContainer'],
        opacity: 1,
        duration: 1300,
        loop: false,
        translateY: 8,
        delay: 450,
         elasticity: 600,
        easing: "easeOutElastic"
    
});

anime({
  targets: ['.bunnyBody', '.bunnyHand', '.st1'],
    opacity: 1,
    translateY: [10, -90],
	duration: 1300,
	loop: true,
	direction: 'alternate',
    easing: 'easeInOutExpo',

});  


anime({
  targets: ['.canBody1', '.canBody2', '.canTop'],
    opacity: 1,
    translateY: [10, -92],
	duration: 1300,
	loop: true,
	direction: 'alternate',
    easing: 'easeInOutExpo',

}); 


anime({
        targets: ['.courseIcon'],
        opacity: 1,
        duration: 300,
        loop: false,
        translateX: [-38, 0],
        delay: 450,
         elasticity: 300,
         easing: "easeOutElastic",
    

});

anime({
 targets: ['.tree', 'feTurbulence', 'feDisplacementMap'],
  points: '64 128 8.574 96 8.174 62 64 0 169.426 32 119.426 96',
  baseFrequency: 0.99,
  scale: 0.99,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo'
});
/*
anime({
        targets: ['.lisa_stickman', '.lisa_stickman_face'],
        opacity: 1,
        duration: 2300,
        loop: false,
        translateX: [5, 260],
       translateY: [5, -160],
        delay: 1450,
         elasticity: 700,
        easing: "easeOutElastic"


});   */



var btn = document.getElementById('colTwoID');
btn.onclick = function() {
const boxesAnimation = window.anime({
  targets: ['.lisa_stickman', '.lisa_stickman_face'],
  opacity: 1,
        duration: 5300,
        loop: false,
    
       translateX: [10, 290],
      translateY: [10, -160],
     
        delay: 10,
         elasticity: 400,
        easing: "easeOutElastic",

  fillColor: (el, i, t) => {
    const r = 0 + (i * 12);
    const g = 3 + (i * 12);
    const b = 225;
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
  },
                              
});
}


