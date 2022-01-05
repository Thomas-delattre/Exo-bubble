let score = 0;
let totalClick = 0;

function bubbleMaker() {
    const bubble = document.createElement("span");
    document.body.appendChild(bubble);

    let size = Math.random() * 200 + 50 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 80 + 60 + "%";
    bubble.style.left = Math.random() * 100 + "%"

    setTimeout(() => {
        bubble.remove()
    }, 10000);

    bubble.addEventListener("click", () => {
        score++;
        scoreContainer.textContent = score;
        bubble.remove();

    })
}

setInterval(bubbleMaker, 200);

document.body.addEventListener("click", () => {
    totalClick++;
    console.log(score / totalClick * 100 + "%");
})