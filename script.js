const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".tab_content");
let line = document.querySelector(".line");
const counts = document.querySelectorAll(".futura_bottom_info");
const speed = 100;

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


counts.forEach((counter) => {
  function updateData() {
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;

    const increment = target / speed;
    // console.log(increment)

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target + " +";
        clearInterval(interval);
      } else {
        counter.innerText = Math.floor(count) + " +";
      }
    }, 8);
  }

  updateData();
});