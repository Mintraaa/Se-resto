let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () =>{
    console.log("clicked");
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}

//Hide search form
let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}

//Swiper function
var swiper = new Swiper(".home-slider" , {
    spaceBetween: 30,
        centerSlides: true,
        autoplay: {
            delay: 3000, //เวลาในการเลื่อนสไลด์ (millisecond)
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true
});