// Expand Header

$(document).ready(function(){
    $('.burger').click(function(){
        $('header').toggleClass('header-expand');
        $('.burger').toggleClass('burger-rotate');
    })
})

// Shrink Header

window.onscroll = function() { 
    scrollFunction() 
}; 

function scrollFunction() { 
    if (document.body.scrollTop > 90 || 
        document.documentElement.scrollTop > 90) 
    { 
        document.getElementById("header").classList.add('header-shrink');
    } 
    else { 
        document.getElementById("header").classList.remove('header-shrink');
    } 
} 

// Header onHover

const headeronHover = () => {

    $(".services").mouseover(function()
    { 
        $("header").css({'overflow':'visible'});
    });

    $(".services").mouseout(function()
    { 
        $("header").removeAttr("style");
    });

}
headeronHover();

// Animate on scroll

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

Array.prototype.forEach.call(elementsToShow, function(element){
if (isElementInViewport(element)) {
element.classList.add('is-visible');
} else {
element.classList.remove('is-visible');
}
});

scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
(rect.top <= 0
&& rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
rect.top <= (window.innerHeight || document.documentElement.clientHeight))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}

// const headerActive = () => {

//     const burger = document.querySelector('.burger');
//     const header = document.querySelector('header');

//     burger.addEventListener('click', () => {
//         header.classList.toggle('header-expand');
//         burger.classList.toggle('burger-rotate');
//     });

// }
// headerActive();