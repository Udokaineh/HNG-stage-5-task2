const allBottons = document.querySelectorAll("button");
const imageBox = document.querySelector(".image-div");
const innerDiv = document.querySelector(".inner-div");
const overlay = document.querySelector(".overlay");


let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

window.addEventListener("resize", () => {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
});

const bottonExplanation = [
  { content: "Click to watch cartoons" },
  { content: "Click to plan your travels?" },
  { content: "Click to go stream a movie" },
  { content: "Click to follow me on twitter" },
  { content: "Click to see my portfolio" },
  { content: "Click to go shopping" },
];

const imageContainer = imageBox.getBoundingClientRect();

allBottons.forEach((btn, index) => {
  const myBtn = btn.getBoundingClientRect();
  // myBtn.right;
  btn.addEventListener("mouseover", () => {
    // add exolanation based on the index on the array
   
    innerDiv.textContent = bottonExplanation[index].content;

    // // make the overlay visible if it isnt already is
    // if (!overlay.classList.contains("active")) overlay.classList.add("active");

    // move the avatar box to a position near the button that was clicked
    imageBox.style.bottom = `${winHeight - myBtn.bottom - imageContainer.height - 80}px`;
    imageBox.style.right = `${winWidth - myBtn.left - imageContainer.width}px`;
  });
  btn.addEventListener("mouseleave", () => {
    imageBox.style.bottom = "10px";
    imageBox.style.right = "10px";
    overlay.classList.remove("active");
    innerDiv.textContent = "Hello, I am your assistant!"

  });
});

overlay.addEventListener("click", () => {
  imageBox.style.bottom = "10px";
  imageBox.style.right = "10px";
  overlay.classList.remove("active");
  innerDiv.textContent = "Hello, I am your assistant!"

});

