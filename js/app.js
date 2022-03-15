// set const to get the value of the elementID of "search"
const searchBar = document.getElementById("search").value;

// take the above value, and force lowercase
input = searchBar.toLowerCase();

// set const to select all the "a" elements
const anchor = document.querySelectorAll("a");

function logKey(e) {
  for (let i = 0; i < anchor.length; i++) {
    let caption = anchor[i].getAttribute("data-caption");
    if (caption.includes(input)) {
      anchor[i].style.display = "block";
    } else {
      anchor[i].style.display = "none";
      
    }
  }
}

const searchInput = document.getElementById("search")
searchInput.addEventListener('keyup', console.log);