const scrollButon = document.querySelector('.scroll-to-top');

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollButon.style.display = "block";
    }
    else
    {
        scrollButon.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}