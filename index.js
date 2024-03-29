window.addEventListener("scroll", function () {
  const header = document.querySelector("header")
  const btn = document.querySelector("#nav-button")
  if (window.scrollY > 200) {
    // Change the value (100) to the desired scroll position
    header.style.backgroundColor = "white" // Change the color when scrolled
    btn.style.backgroundColor = "green"
  } else {
    header.style.backgroundColor = "#FFC017"
    btn.style.backgroundColor = "black" // Reset the color when not scrolled
  }
})
