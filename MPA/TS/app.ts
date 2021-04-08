import { bookManager } from "./BookManager.js";
import { Book } from "./Book.js";

let book = new bookManager();
let list = document.getElementById("bl") as HTMLAnchorElement;
list.addEventListener("click", book.bookList);
var tableEl = document.querySelector("table") as HTMLTableElement;
tableEl.addEventListener("click", book.deleteBook);


//search Results...
function searchResults(searchedBooks: Book[]) {
    let table = document.getElementById("bookTable") as HTMLTableElement;
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
       <td><a href="#" style="text-decoration:none;margin-left:35px;" ></> <i class="fas fa-trash-alt delete" ></i></a></td>
        </tr>`
        table.innerHTML += row;
    }

}
let searchBtn = document.getElementById("search") as HTMLButtonElement;
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let option = document.getElementById("choice") as HTMLSelectElement;
    let optionValue = option.value;
    let search = document.getElementById("searchInput") as HTMLInputElement;
    let searchInput = search.value;
    let searchedBooks: Book[] = [];
    switch(optionValue)
    {
        case "id":
            if(searchInput!=null)
            {
                let searchedBooksById=book.searchById(searchedBooks)
                searchResults(searchedBooksById);
            }
        case "title":
            if(searchInput!=null)
            {
                let searchedBooksByTitle=book.searchByTitle(searchedBooks)
                searchResults(searchedBooksByTitle);
            }
        case "author":
            if(searchInput!=null)
            {
               let searchedBooksByAuthor=book.searchByAuthor(searchedBooks)
                searchResults(searchedBooksByAuthor);
            }
         case "rating":
            if(searchInput!=null)
            {
                let searchedBooksByRating=book.searchByRating(searchedBooks)
                searchResults(searchedBooksByRating);
            }
        case "price":
            if(searchInput!=null)
            {
                let searchedBooksByPrice=book.searchByPrice(searchedBooks)
                searchResults(searchedBooksByPrice);
            }
    }

})
