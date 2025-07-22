// Toggle review article function
function toggleReviewArticle() {
  const content = document.getElementById("review-content")
  const arrow = document.getElementById("review-arrow")

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden")
    arrow.classList.add("rotate-180")

    // Smooth scroll to show the expanded content
    setTimeout(() => {
      content.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }, 100)
  } else {
    content.classList.add("hidden")
    arrow.classList.remove("rotate-180")
  }
}
