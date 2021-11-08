const backdrop = document.getElementById("backdrop");
const modalDeleteCard = document.getElementById("delete-modal");
const addMovieMainBtn = modalDeleteCard.nextElementSibling.lastElementChild;
const modalAddCard = document.getElementById("add-modal");
const addMovieListBtn = document.querySelector(".btn--success");
const modalAddCardTitle = modalAddCard.querySelector("#title");
const modalAddCardImageUrl = modalAddCard.querySelector("#image-url");
const modalAddCardRating = modalAddCard.querySelector("#rating");
const movieList = document.getElementById("movie-list");
const cancelButton = document.querySelector(".btn--passive");
const addingMoviesInputs = modalAddCard.querySelectorAll("input");
const movies = [];

let titleTextContent = "";
let imageUrlTextContent = "";
let ratingTextContent = "";
let trueOrFalse = true;

const toggleModalVisibility = () => {
  modalAddCard.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};

const validateInputsHandler = () => {
  if (
    titleTextContent.trim() === "" ||
    imageUrlTextContent.trim() === "" ||
    ratingTextContent.trim() === ""
  ) {
    alert("please fill out all the inputs");
    trueOrFalse = false;
  }
  if (ratingTextContent < 1 || ratingTextContent > 10) {
    alert("Rating should be between 1 and 10");
    trueOrFalse = false;
  }
  return trueOrFalse;
};

const renderingMovieList = () => {
  let movieElement = document.createElement("li");
  movieElement.className = "movie-element";
  movieElement.innerHTML = `
  <div class = "movie-element__image">
  <img src = ${imageUrlTextContent}></img>
  </div>
  <div class = "movie-element__info">
    <h2>${titleTextContent}</h2>
    <p>Movie Rating ${ratingTextContent}/10</p>
  </div>
  `;
  movieList.insertAdjacentElement("beforeend", movieElement);

  // let movieElement = document.createElement("li");
  // movieElement.className = "movie-element";
  // movieList.insertAdjacentElement("beforeend", movieElement);

  // let movieImageDiv = document.createElement("div");
  // movieImageDiv.className = "movie-element__image";
  // movieElement.insertAdjacentElement("beforeend", movieImageDiv);

  // let movieImage = document.createElement("img");
  // movieImage.src = imageUrlTextContent;
  // movieImageDiv.insertAdjacentElement("beforeend", movieImage);

  // let movieInfoDiv = document.createElement("div");
  // movieInfoDiv.className = "movie-element__info";
  // movieElement.insertAdjacentElement("beforeend", movieInfoDiv);

  // let movieTitle = document.createElement("h2");
  // movieTitle.textContent = titleTextContent;
  // movieInfoDiv.insertAdjacentElement("beforeend", movieTitle);

  // let movieRating = document.createElement("p");
  // movieRating.textContent = `Movie Rating ${ratingTextContent}/10`;
  // movieInfoDiv.insertAdjacentElement("beforeend", movieRating);
};

const clearInputs = () => {
  for (const input of addingMoviesInputs) {
    input.value = "";
  }
};

const pushingMoviesToArray = () => {
  const newMovie = {
    title: titleTextContent,
    image: imageUrlTextContent,
    rating: ratingTextContent,
  };
  movies.push(newMovie);
  console.log(movies);
};

const removeMovie = ()=>{
  
}

const addMovieToList = () => {
  titleTextContent = modalAddCardTitle.value;
  imageUrlTextContent = modalAddCardImageUrl.value;
  ratingTextContent = modalAddCardRating.value;

  if (validateInputsHandler()) {
    renderingMovieList();
    pushingMoviesToArray();
    toggleModalVisibility();
    clearInputs();
    removeMovie();
  }
  trueOrFalse = true;
  return;
};

addMovieMainBtn.addEventListener("click", toggleModalVisibility);
addMovieListBtn.addEventListener("click", addMovieToList);
backdrop.addEventListener("click", toggleModalVisibility);
cancelButton.addEventListener("click", toggleModalVisibility);
