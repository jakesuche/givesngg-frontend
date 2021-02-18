import anime from 'animejs'
export function cardAnime(el){
    anime({
        targets:el,
        easing:'easeInOutElastic',
        translateY:['4vw', '5vw'],
        scale:[0.7,0.8],
        delay:1000
    })
}


export function createBtn(el){
    anime({
        targets:el,
        easing:'easeOutExpo',
        scale:[2,1],
        opacity:[0,1],
        delay:1000
    })
}
export function heading(el){
    anime({
        targets:el,
        translateX:['-100vw', '0vw'],
        easing:'easeOutExpo',
        delay:1100
    })
}

export function col4md(el){
    anime({
        targets:el,
        translateX:['0vw', '5vw'],
        easing:'easeOutExpo',
        delay:1100
    })
}
export function jumbotron(el){
    anime({
        targets:el,
        opacity:[0,1],
        delay:1000,
    
        easing:'easeOutExpo'

    })
}
export function translate(el){
    anime({
        targets:el,
        scale:[0.8,0.9],
        opacity:[0,1],
        easing:'easeOutExpo'
    })
}

export function authAnime(el){
    anime({
        targets:el,
        scaleY: [
            { value: 0.9, duration: 170 },
            { value: 1, duration: 170, delay: 120 }
          ],
          translateY: [
            { value: -20, duration: 170, delay: 170 },
            { value: 0, duration: 170, delay: 220 }
          ],
          loop: false,
          
          easing: "linear"
    })
}


  
export function logoAnime(el){
    anime({
        targets: el,
        
        keyframes: [
            { rotate: -10 },
            { rotate: 10 },
            { rotate: 0 },
            { rotate: 0 },
            { rotate: 0 },
            { rotate: 0 },
            { rotate: 0 },
            { rotate: 0 },
            { rotate: 0 },
            { rotate: 0 }
          ],
          
          loop: true,
          easing: "linear",
          duration: 1200
        });
        
      
}


export function pageNotFound(el, el1,el2){
    anime({
        targets: el, el1,
        translateY: 10,
        autoplay: true,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate'
      });
      
      anime({
        targets: el2,
        translateX: 10,
        autoplay: true,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
        scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
          rotateY: {value: '+=180', delay: 200},
      });

    
      
      
      
}

