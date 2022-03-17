function handleSearch(event) {
  const currentValue = event.target.value.toLowerCase()
  const imageAnchors = document.querySelectorAll('a.photo')

  for (const image of imageAnchors) {
    if (image.dataset.caption.includes(currentValue)) {
      image.classList.remove("hidden")
    }else{
      image.classList.add("hidden")
    }
  }
}
const searchElement = document.getElementById('search')
searchElement.addEventListener('keyup', handleSearch)

