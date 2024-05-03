const menuOpen = document.getElementById('menuOpen');
const navcontainer = document.getElementById('navcontainer');
const nav = document.getElementById('nav');


// Attach click event listener
menuOpen.addEventListener('click', function(){
    // Check current display type
    if (navcontainer.style.display === 'none') {
        // If it's hidden, show it
        navcontainer.style.display = 'block';
    } else {
        // If it's visible, hide it
        navcontainer.style.display = 'none';
    }

    
});


nav.addEventListener('click', function() {

    if (navcontainer.style.display === 'block'){ 
        navcontainer.style.display = 'none';
    }


});