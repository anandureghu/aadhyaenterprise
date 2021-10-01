$(document).ready(() => {
    $(".about-section").waypoint(direction=>{
        if(direction==="down"){
            $("nav").addClass("sticky-nav");
        }else{
            $("nav").removeClass("sticky-nav");
        }
    });

    $(".about-section").waypoint(direction=>{
        $(".about-section").addClass("animate__animated animate__fadeInUp");
    },{
        offset:"85%"
    });

    $(".services-section").waypoint(direction=>{
        $(".services-section").addClass("animate__animated animate__fadeInUp");
    },{
        offset:"85%"
    });

    $(".works-section").waypoint(direction=>{
        $(".works-section").addClass("animate__animated animate__fadeInUp");
    },{
        offset:"85%"
    });
});

const work = document.querySelector('.work-button-1');