const navToolsList = document.querySelectorAll(".nav-tools-list");
let v =
  '<a href="#" class="flex gap-2 flex-col items-center"><div class="avatar"><div class="w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2"><img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /></div></div><span class="userName w-14 text-xs overflow-hidden">shubhxm_dhiman</span></a>';

const story_section = document.querySelector("#story-section");
const storyScrollBtns = document.querySelectorAll(".storyScrollBtns");
const leftScrollBtn = document.querySelector("#left-scroll-btn");
const rightScrollBtn = document.querySelector("#right-scroll-btn");

let speed = 20;

navToolsList[0].classList.add("bg-[#1A1A1A]", "font-semibold"); // Large screen home
navToolsList[8].classList.add("bg-[#1A1A1A]", "font-semibold"); // Small screen home

navToolsList.forEach((navList) => {
  navList.addEventListener("click", function (evt) {
    evt.preventDefault();
    navToolsList.forEach(function (list) {
      list.classList.remove("bg-[#1A1A1A]", "font-semibold");
    });
    this.classList.add("bg-[#1A1A1A]", "font-semibold");
  });
});

leftScrollBtn.addEventListener("click", () => {
  story_section.scrollLeft += speed;
});

rightScrollBtn.addEventListener("click", () => {
  story_section.scrollLeft += -speed;
});


let r = 0;
for (let i = 97; i <= 122; i++) {
  story_section.innerHTML += v;
  let val = document.querySelectorAll(".userName");
  val[r].textContent = String.fromCharCode(i);
  r++;
}