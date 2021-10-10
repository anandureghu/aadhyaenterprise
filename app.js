$(document).ready(() => {
  $(".about-section").waypoint((direction) => {
    if (direction === "down") {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });

  $(".about-section").waypoint(
    (direction) => {
      $(".about-section").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "85%",
    }
  );

  $(".services-section").waypoint(
    (direction) => {
      $(".services-section").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "85%",
    }
  );

  $(".works-section").waypoint(
    (direction) => {
      $(".works-section").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "85%",
    }
  );

  $(".contact-section").waypoint(
    (direction) => {
      $(".contact-section").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "85%",
    }
  );

  $(".team-section").waypoint(
    (direction) => {
      $(".team-section").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "85%",
    }
  );
});

const work_1 = document.querySelector(".work-button-1");
const work_2 = document.querySelector(".work-button-2");
const close_popup = document.querySelector(".close-popup");
const works_popup = document.querySelector(".works-popup");
const carousel_1 = document.querySelector(".carousel-work-1");
const carousel_2 = document.querySelector(".carousel-work-2");

work_1.addEventListener("click", (e) => {
  works_popup.style.display = "block";
  carousel_1.style.display = "block";
  carousel_2.style.display = "none";
});

work_2.addEventListener("click", (e) => {
  works_popup.style.display = "block";
  carousel_2.style.display = "block";
  carousel_1.style.display = "none";
});

close_popup.addEventListener("click", (e) => {
  works_popup.style.display = "none";
  carousel_1.style.display = "none";
  carousel_2.style.display = "none";
});
