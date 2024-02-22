let textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
  textarea.style.height = "auto";
  let shheight = e.target.scrollHeight;
  textarea.style.height = `${shheight}px`;
});
