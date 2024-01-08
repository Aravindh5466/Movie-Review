let movieReviewsContainerEl = document.getElementById("movieReviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");
let addBtnEl = document.getElementById("addBtn");
let reviewsContainerEl = document.getElementById("reviewsContainer");

let movietitleEl = document.createElement("h1");
movietitleEl.classList.add("movie-title");
reviewsContainerEl.appendChild(movietitleEl);

let reviewEl = document.createElement("p");
reviewsContainerEl.appendChild(reviewEl);

function onAddReview() {
    if (titleInputEl.value === "") {
        alert("Please enter movie name")
    } else if (reviewTextareaEl.value === "") {
        alert("Please enter the review")
    } else {
        movietitleEl.textContent = "Movie Title :" + titleInputEl.value;
        reviewEl.textContent = "Review :" + reviewTextareaEl.value
    }
}