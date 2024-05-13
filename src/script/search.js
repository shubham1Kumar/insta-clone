import { searchedResult } from "./html/search.js";
const searchedResultContainer = document.querySelector(
  "#searchedResultContainer"
);
for (let i = 1; i <= 10; i++) {
  searchedResultContainer.innerHTML += searchedResult;
}

const searchInput = document.querySelector("#searchInput");
const searchInputIcon = document.querySelector("#searchInputIcon");
const dltSearchInputValue = document.querySelector("#dltSearchInputValue");
const searchIcon = document.querySelector("#searchIcon");
const searchSection = document.querySelector(".searchSection");
let isSectionOn = false;

searchIcon.addEventListener("click", (evt) => {
  evt.stopPropagation(); // Prevents the event from bubbling up to the document
  toggleSearchSection();
});

function toggleSearchSection() {
  if (!isSectionOn) {
    openSearchSection();
  } else {
    closeSearchSection();
  }
}

function openSearchSection() {
  searchSection.style.left = "210px";
  isSectionOn = true;
}

function closeSearchSection() {
  searchSection.style.left = "-400px";
  isSectionOn = false;
}

document.addEventListener("click", (evt) => {
  if (
    isSectionOn &&
    evt.target !== searchIcon &&
    !searchSection.contains(evt.target)
  ) {
    closeSearchSection();
  }
});

searchInput.addEventListener("click", () => {
  searchInputIcon.classList.add("hidden");
  searchInput.addEventListener("input", () => {
    dltSearchInputValue.classList.remove("hidden");
  });
});

dltSearchInputValue.addEventListener("click", () => {
  if (searchInput.value !== "") {
    searchInput.value = "";
    dltSearchInputValue.classList.add("hidden");
  }
});

searchInput.addEventListener("blur", () => {
  searchInputIcon.classList.remove("hidden");
});
