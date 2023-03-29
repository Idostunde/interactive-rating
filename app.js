const btns = document.querySelector("role button");
const submitButton = document.getElementById("submit");
const feedbackBox = document.getElementById("feedback-box");
const thankyouBox = document.getElementById('thank-you-box');
const selectRating = document.getElementById("selected-rating");
const rates = document.querySelector("btn")

submitButton.addEventventListener("click", () => {
    thankyouBox.classList.remove ("hidden")
    mainBox.style.display = "none"
})

rateAgain.addEventventListener("click", () => {
    thankyouBox.classList.add("hidden")
    mainBox.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventventListener("click", () => {
        console.log(rate.innerHTML)
    })
})