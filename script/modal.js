var closeModalButtons = document.getElementsByClassName("modal-close");

// Make all close modal buttons close all modals
for( var i = 0; i < closeModalButtons.length; ++i )
{
    closeModalButtons[i].onclick = CloseAllModals;
}

// Clicking next to any modal should close the modal
var modalOverlays = document.getElementsByClassName("modal");
window.onclick = function(event)
{
    for( var i = 0; i < modalOverlays.length; ++i)
    {
        if(event.target == modalOverlays[i])
        {
            CloseAllModals();
            return;
        }
    };
}

async function OpenModalByid(name)
{
    var modal = document.getElementById(name);
    if ( modal.className != "modal" ) { return; }

    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

function CloseAllModals()
{
    var modals = document.getElementsByClassName("modal");
    for ( var j = 0; j < modals.length; ++j )
    {
        modals[j].style.visibility = "hidden";
        modals[j].style.opacity = "0";
    }
}

window.addEventListener("keyup", function(event)
    { 
        if(event.key == "Escape")
        {
            CloseAllModals();
        }
    })

//-------------------------------------------------------------


/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};