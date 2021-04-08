let table = document.getElementById("bookTable");
let Books = localStorage.getItem("MyBooks");
let data = JSON.parse(Books);
export class bookManager {
    constructor() {
        //book list
        this.bookList = () => {
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
            let content = document.getElementById("content");
            content.style.visibility = "visible";
            let bl = document.getElementById("bl");
            bl.style.visibility = "hidden";
        };
        //search By ID...
        this.searchById = (searchedBooks) => {
            var searchInput = document.getElementById("searchInput").value;
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Title...
        this.searchByTitle = (searchedBooks) => {
            var searchInput = document.getElementById("searchInput").value;
            for (let i = 0; i < data.length; i++) {
                if (data[i].title == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Author...
        this.searchByAuthor = (searchedBooks) => {
            var searchInput = document.getElementById("searchInput").value;
            for (let i = 0; i < data.length; i++) {
                if (data[i].author == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Rating...
        this.searchByRating = (searchedBooks) => {
            var searchInput = document.getElementById("searchInput").value;
            for (let i = 0; i < data.length; i++) {
                if (data[i].rating == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Price...
        this.searchByPrice = (searchedBooks) => {
            var searchInput = document.getElementById("searchInput").value;
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
// var data = JSON.parse(window.localStorage.getItem("MyBooks"));
// console.log(data);
