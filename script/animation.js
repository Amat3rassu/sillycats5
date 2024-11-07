
document.addEventListener("DOMContentLoaded", function () {
    const catImage = document.querySelector(".image-section img");

  
    catImage.addEventListener("mouseenter", function () {
        catImage.style.transform = "scale(1.2)";
    });


    catImage.addEventListener("mouseleave", function () {
        catImage.style.transform = "scale(1)";
    });
});
