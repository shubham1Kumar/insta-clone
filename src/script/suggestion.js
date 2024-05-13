const data = document.querySelector(".dara");
var htmlCode = ` <li>
  <a>
      <img class="h-12 w-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/MZcVw_uqMRXrrCdbi3wOUlSNxfZBENpSMzqYwLyE28c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw"
          alt="">
      <span>
          <p class="text-[12px] w-24 overflow-scroll text-nowrap mb-1">Shubham Kumar</p>
          <p class="opacity-70 text-[10px] leading-none">shubhxm_dhiman</p>
      </span>
      <sl-button variant="primary" outline size="small">Follow</sl-button>
  </a>
</li>`;

let r = 0;
for (let i = 1; i <= 5; i++) {
  data.innerHTML += htmlCode;
}
