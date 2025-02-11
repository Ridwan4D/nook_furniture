const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".tab_content");
let line = document.querySelector(".line");

tabs.forEach((tab, idx) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[idx].classList.add("active");
  });
});
