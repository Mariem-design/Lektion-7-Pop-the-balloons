const balloon_container = document.querySelector(".dots");
const balloon = document.querySelectorAll(".dot");

balloon.forEach((dot) => {
  dot.addEventListener("mouseover", (event) => {
    event.target.textContent = "pop!";
    event.target.style.backgroundColor = "white";
    event.target.classList.add("popped");
    if (document.querySelectorAll(".popped").length === 24) {
      const h1 = document.createElement("h1");
      h1.textContent = "YAY!!";
      balloon_container.innerHTML = "";
      balloon_container.appendChild(h1);
    }
  });
});
