const navToolsList = document.querySelectorAll(".nav-tools-list");

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
