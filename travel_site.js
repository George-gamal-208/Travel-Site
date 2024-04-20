let search_btn=document.querySelector("#btn");
let search_form=document.querySelector(".search")
let login_btn=document.querySelector(".login_form")
let vidbtn=document.querySelectorAll(".video_btn")

function showbar(){
    search_btn.classList.toggle("fa-times")
    search_form.classList.toggle("active")
}

function showloginform(){
    login_btn.classList.add("active")
}
function closeform(){
    login_btn.classList.remove("active")
}
vidbtn.forEach(slide =>{
    slide.addEventListener("click",function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src=slide.getAttribute("data-src");
        document.querySelector("#video_slider").src=src;
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween :20,
    loop:true,
    autoplay:{
        delay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});