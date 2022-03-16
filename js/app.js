// set const to get the value of the elementID of "search"
const searchBar = document.getElementById("search").value;

// take the above value, and force lowercase
input = searchBar.toLowerCase();

// set const to select all the "a" elements
const anchor = document.querySelectorAll("a");

function handleSearch(event) {
  const currentValue = event.target.value
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

