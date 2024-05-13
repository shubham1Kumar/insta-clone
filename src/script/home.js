import { homeHtml } from "./html/home.js";
const feedSection = document.querySelector("#feed-section");
for (let i = 1; i <= 10; i++) {
  feedSection.innerHTML += homeHtml;
}

const readMoreBtns = document.querySelectorAll(".readMore");
const caption = document.querySelectorAll(".caption");
const likeCounts = document.querySelectorAll(".like-count");
let isDrawerOn = false;

const likeBtns = document.querySelectorAll(".likeBtn");
const saveBtns = document.querySelectorAll(".saveBtn");

likeBtns.forEach((likeBtn,index) => {
  likeBtn.addEventListener("click", () => {
    let likeBtnParent = likeBtn.parentElement;
    if (likeBtn.classList.contains("fa-regular")) {
      likeBtn.classList.remove("fa-regular");
      likeBtn.classList.add("fa-solid");
      likeBtnParent.setAttribute("data-tip", "Liked");
      likeBtn.style.color = "red";
      addLike(index);
    } else if (likeBtn.classList.contains("fa-solid")) {
      likeBtn.classList.remove("fa-solid");
      likeBtn.classList.add("fa-regular");
      likeBtn.style.color = "white";
      likeBtnParent.setAttribute("data-tip", "Like");
      removeLike(index);
      
    }
    function addLike(i) {
      likeCounts[i].innerText++;
      console.log(likeCounts[i].innerText);
    }
    function removeLike(i) {
      likeCounts[i].innerText--;
      console.log(likeCounts[i].innerText);
    }
  });
});

saveBtns.forEach((saveBtn) => {
  saveBtn.addEventListener("click", () => {
    saveBtn.classList.toggle("fa-regular");
    saveBtn.classList.toggle("fa-solid");

    let saveBtnParent = saveBtn.parentElement;

    saveBtn.classList.contains("fa-regular")
      ? saveBtnParent.setAttribute("data-tip", "Save")
      : saveBtnParent.setAttribute("data-tip", "Saved");
  });
});

readMoreBtns.forEach((readMoreBtn, index) => {
  var isOverflowed = caption[index].scrollHeight > caption[index].clientHeight;
  readMoreBtn.addEventListener("click", () => {
    if (isDrawerOn == false) {
      caption[index].classList.remove("h-4");
      readMoreBtn.textContent = "read less";
      isDrawerOn = true;
    } else {
      caption[index].classList.add("h-4");
      readMoreBtn.textContent = "read more";
      isDrawerOn = false;
    }

    if (isOverflowed) {
      readMoreBtn.classList.remove("hidden");
    } else {
      readMoreBtn.classList.add("hidden");
    }
  });
});
