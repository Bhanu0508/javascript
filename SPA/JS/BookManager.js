"use strict";
// import { Book } from "./Book";
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
class Book {
    constructor(id, title, author, rating, price, coverPhotoUrl) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
        this.coverPhotoUrl = coverPhotoUrl;
    }
}
;
let Books = [];
var i = 0;
let data;
class bookManager {
    constructor() {
        //Adding rows
        this.addBook = (e) => {
            e.preventDefault();
            let id = document.getElementById("Id").value;
            let title = document.getElementById("Title").value;
            let author = document.getElementById("Author").value;
            let rating = document.getElementById("Rating").value;
            let price = document.getElementById("Price").value;
            Books.push(new Book(id, title, author, rating, price));
            localStorage.setItem("MyBooks", JSON.stringify(Books));
        };
        //book list
        this.bookList = () => {
            let Local = localStorage.getItem("MyBooks");
            data = JSON.parse(Local);
            for (let i = 0; i < data.length; i++) {
                var row = `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].author}</td>
            <td>${data[i].rating}</td>
            <td>${data[i].price}</td>
            <td><a href="#" style="text-decoration:none; margin-left:35px;" ></> <i class="fas fa-trash-alt delete" ></i></a></td>
            </tr>`;
                table.innerHTML += row;
            }
        };
        //search By ID...
        this.searchById = (searchedBooks, searchInput) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Title...
        this.searchByTitle = (searchedBooks, searchInput) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].title == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Author...
        this.searchByAuthor = (searchedBooks, searchInput) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].author == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Price...
        this.searchByRating = (searchedBooks, searchInput) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].rating == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Rating...
        this.searchByPrice = (searchedBooks, searchInput) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].price == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //deleting Books...
        this.deleteBook = (e) => {
            if (!e.target.classList.contains("delete")) {
                return;
            }
            var Delete = e.target;
            Delete.closest("tr").remove();
        };
    }
}
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
