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