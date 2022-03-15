function searchPics() {
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  
  let gallery = document.getElementsByTagName("a");

  for (i = 0; i < gallery.length; i++) {
    let caption = gallery[i].getAttribute("data-caption");
    caption = caption.toLowerCase();
    console.log(caption);
    if (caption.includes(input)) {
      gallery[i].style.display = "";
    } else {
      gallery[i].style.display = "none";
    }
  }
}