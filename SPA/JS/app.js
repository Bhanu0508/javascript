// import { bookManager } from "./BookManager.js";
let list = document.getElementById("bl");
let Content = document.getElementById("content");
let Add = document.getElementById("add");
var table = document.getElementById("bookTable");
list.onclick = function contents() {
    Content.style.visibility = "visible";
    Add.style.visibility = "hidden";
};
let addBooks = document.getElementById("ad");
addBooks.onclick = function visibilityOfContent() {
    Add.style.visibility = "visible";
    Content.style.visibility = "hidden";
};
let book = new bookManager();
let add = document.getElementById("form");
add.addEventListener("submit", book.addBook);
list.addEventListener("click", book.bookList);
var tableEl = document.querySelector("table");
tableEl.addEventListener("click", book.deleteBook);
//search Results...
function searchResults(searchedBooks) {
    let tablerows = document.querySelectorAll('tbody');
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
       <td><a href = "#" style = "font-size:10px; ">Details</a><i style = "padding:0 1px;" class="fal fa-grip-lines-vertical" ><a href="#" style="text-decoration:none;" ></> <i class="fas fa-trash-alt delete" ></i></a></td>
        </tr>`;
        table.innerHTML += row;
    }
}
let searchBtn = document.getElementById("search");
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    Content.style.visibility = "visible";
    Add.style.visibility = "hidden";
    let option = document.getElementById("choice");
    let optionValue = option.value;
    let search = document.getElementById("searchInput");
    let searchInput = search.value;
    let searchedBooks = [];
    switch (optionValue) {
        case "id":
            if (searchInput != null) {
                let searchedBooksById = book.searchById(searchedBooks, searchInput);
                searchResults(searchedBooksById);
            }
        case "title":
            if (searchInput != null) {
                let searchedBooksByTitle = book.searchByTitle(searchedBooks, searchInput);
                searchResults(searchedBooksByTitle);
            }
        case "author":
            if (searchInput != null) {
                let searchedBooksByAuthor = book.searchByAuthor(searchedBooks, searchInput);
                searchResults(searchedBooksByAuthor);
            }
        case "rating":
            if (searchInput != null) {
                let searchedBooksByRating = book.searchByRating(searchedBooks, searchInput);
                searchResults(searchedBooksByRating);
            }
        case "price":
            if (searchInput != null) {
                let searchedBooksByPrice = book.searchByPrice(searchedBooks, searchInput);
                searchResults(searchedBooksByPrice);
            }
    }
});
export {};
