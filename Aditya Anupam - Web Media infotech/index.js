
let windowWidth = window.innerWidth;
window.addEventListener('resize', ()=>{
    windowWidth = window.innerWidth;
});

let nav = document.querySelector(".navbar-mobile")
console.log(nav);

let showNav = false

function navbarMobile(){
    windowWidth = window.innerWidth;
    if(windowWidth>451){
        return
    }

    if(showNav==false){
        nav.style.left="0vw"
        showNav=true
    }
    else{
        nav.style.left="-100vw"
        showNav=false

    }

}
