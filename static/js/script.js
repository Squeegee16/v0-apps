// Snowfall effect
function createSnowflake() {
  const snowflake = document.createElement("div")
  snowflake.classList.add("snowflake")
  snowflake.style.left = Math.random() * window.innerWidth + "px"
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"
  snowflake.style.opacity = Math.random()
  snowflake.innerHTML = "❄"
  document.querySelector(".snowfall").appendChild(snowflake)

  setTimeout(() => {
    snowflake.remove()
  }, 5000)
}

setInterval(createSnowflake, 100)

// Simple carousel functionality
const carousel = document.querySelector(".carousel")
let isDown = false
let startX
let scrollLeft

carousel.addEventListener("mousedown", (e) => {
  isDown = true
  startX = e.pageX - carousel.offsetLeft
  scrollLeft = carousel.scrollLeft
})

carousel.addEventListener("mouseleave", () => {
  isDown = false
})

carousel.addEventListener("mouseup", () => {
  isDown = false
})

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - carousel.offsetLeft
  const walk = (x - startX) * 3
  carousel.scrollLeft = scrollLeft - walk
})

