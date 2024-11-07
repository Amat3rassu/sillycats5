// Я голодний, тому і суп
document.addEventListener("DOMContentLoaded", function () {
    const supButton = document.getElementById("supButton");
    let clickCount = 0;

    const soupSound = new Audio("../sounds/soup.mp3");
    

    supButton.addEventListener("click", function () {
        clickCount++;
        soupSound.play();

        const soup = document.createElement("img");
        soup.src = "../img/new-silly-cat.png"; 
        soup.style.position = "absolute";
        soup.style.transition = "transform 1s ease";
    
        if (clickCount % 2 !== 0) { 
            soup.style.top = "150%";
            soup.style.left = "50%";
            soup.style.transform = "translate(-50%, -30%)";

            setTimeout(() => {
                soup.style.transform = "translate(-50%, -230%)";
            }, 50);
        } else {
            soup.style.top = "50%";
            soup.style.left = "150%";
            soup.style.transform = "translate(-30%, -50%)"; 

            setTimeout(() => {
                soup.style.transform = "translate(-350%, -50%)";
            }, 50);
        }

        document.body.appendChild(soup);
        setTimeout(() => {
            soup.remove();
        }, 2000);
    });
});
