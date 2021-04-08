//searching bookList

fetch("http://localhost:3000/books")
  .then(resolve => resolve.json())
  .then(data => {
    //search By ID...
    searchById = searchedBooks => {
      var searchInput = document.getElementById("searchInput").value;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == searchInput) {
          searchedBooks.push(data[i]);
        }
      }
      return searchedBooks;
    };
    //search By Title...
    searchByTitle = searchedBooks => {
      var searchInput = document.getElementById("searchInput").value;
      for (let i = 0; i < data.length; i++) {
        if (data[i].title == searchInput) {
          searchedBooks.push(data[i]);
        }
      }
      return searchedBooks;
    };
    //search By Author...
    searchByAuthor = searchedBooks => {
      var searchInput = document.getElementById("searchInput").value;
      for (let i = 0; i < data.length; i++) {
        if (data[i].author == searchInput) {
          searchedBooks.push(data[i]);
        }
      }
      return searchedBooks;
    };
    //search By Rating...
    searchByRating = searchedBooks => {
      var searchInput = document.getElementById("searchInput").value;
      for (let i = 0; i < data.length; i++) {
        if (data[i].rating == searchInput) {
          searchedBooks.push(data[i]);
        }
      }
      return searchedBooks;
    };
    //search By Price...
    searchByPrice = searchedBooks => {
      var searchInput = document.getElementById("searchInput").value;
      for (let i = 0; i < data.length; i++) {
        if (data[i].price == searchInput) {
          searchedBooks.push(data[i]);
        }
      }
      return searchedBooks;
    };
  });

//search Results...
function searchResults(searchedBooks) {
  let table = document.getElementById("bookTable");
  let tablerows = document.querySelectorAll("tbody");
  for (const row of tablerows) {
    row.remove();
  }
  for (const b of searchedBooks) {
    var row = `<tr>
        <td>${b.id}</td>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.rating}</td>
        <td>${b.price}</td>
       <td><a href="#" style="text-decoration:none;margin-left:35px;" ></> <i class="fas fa-trash-alt delete" ></i><i class="fal fa-grip-lines-vertical"></i><i class="fad fa-info-circle"></i></a></td>
        </tr>`;
    table.innerHTML += row;
  }
}
let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", function () {
  event.preventDefault();
  let option = document.getElementById("choice");
  let optionValue = option.value;
  let search = document.getElementById("searchInput");
  let searchInput = search.value;
  let searchedBooks = [];
  switch (optionValue) {
    case "id":
      if (searchInput != null) {
        let searchedBooksById = searchById(searchedBooks);
        searchResults(searchedBooksById);
      }
      break;
    case "title":
      if (searchInput != null) {
        let searchedBooksByTitle = searchByTitle(searchedBooks);
        searchResults(searchedBooksByTitle);
      }
      break;
    case "author":
      if (searchInput != null) {
        let searchedBooksByAuthor = searchByAuthor(searchedBooks);
        searchResults(searchedBooksByAuthor);
      }
      break;
    case "rating":
      if (searchInput != null) {
        let searchedBooksByRating = searchByRating(searchedBooks);
        searchResults(searchedBooksByRating);
      }
      break;
    case "price":
      if (searchInput != null) {
        let searchedBooksByPrice = searchByPrice(searchedBooks);
        searchResults(searchedBooksByPrice);
      }
      break;
  }
});
