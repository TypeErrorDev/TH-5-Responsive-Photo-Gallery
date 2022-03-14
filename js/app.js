const searchBar = document.getElementById('search').value;
const anchor = document.querySelectorAll("a");


anchor.forEach( (e, i) =>{
        let anchorAttr = e.getAttribute("data-caption");
        if (anchorAttr.includes(searchBar)) {
           console.log(anchorAttr[i]);
        } else {
            anchorAttr[i].style.display = "none";
        }
    });



























// // Declare Variables
// const search = new Filter("search", "data-caption");



// // Set Arrays for photo Title
// var captions = [
//   "Hay Bales",
//   "Lake",
//   "Canyon",
//   "Iceberg",
//   "Desert",
//   "Fall",
//   "Plantation",
//   "Dunes",
//   "Countryside Lane",
//   "Sunset",
//   "Cave",
//   "Bluebells",
// ];

// search = document.getElementById("search");

// var render_lists = (lists) => {
//     var searchBar = "";
//     for (index in lists) {
//         search += "<a>" + lists[index] + "</a>";
//     }
//     search.innerHTML = searchBar;
// };

// render_lists(captions);

// search = document.getElementById("search");

// var filterUsers = (e) => {
//     keyword = input.value.toLowerCase();
//     filtered_photos = users.filter(function (user) {
//         user = user.toLowerCase();
//         return user.indexOf(keyword) > -1;
//     });

//     render_lists(filtered_users);
// };

// searchBar.addEventListener("keyup", filterUsers);
