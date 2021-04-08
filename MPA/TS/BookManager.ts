import { Book } from "./Book.js";
let table = document.getElementById("bookTable") as HTMLTableElement;
let Books: any = localStorage.getItem("MyBooks");
let data = JSON.parse(Books);
export class bookManager {
     //book list
    bookList = () => {
        for (let i = 0; i < data.length;i++)
        {
            var row = `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].author}</td>
            <td>${data[i].rating}</td>
            <td>${data[i].price}</td>
            <td><a href="#" style="text-decoration:none; margin-left:35px;" ></> <i class="fas fa-trash-alt delete" ></i></a></td>
            </tr>`
            table.innerHTML += row;
        }
        let content = document.getElementById("content") as HTMLElement;
        content.style.visibility = "visible";
        let bl = document.getElementById("bl") as HTMLAnchorElement;
        bl.style.visibility="hidden"
    };

    //search By ID...
    searchById = (searchedBooks: Book[]) => {
        var searchInput=(<HTMLInputElement>document.getElementById("searchInput")).value
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Title...
    searchByTitle = (searchedBooks: Book[]) => {
        var searchInput=(<HTMLInputElement>document.getElementById("searchInput")).value
        for (let i = 0; i < data.length; i++) {
            if (data[i].title == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Author...
    searchByAuthor = (searchedBooks: Book[]) => {
        var searchInput=(<HTMLInputElement>document.getElementById("searchInput")).value
        for (let i = 0; i < data.length; i++) {
            if (data[i].author == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Rating...
    searchByRating = (searchedBooks: Book[]) => {
        var searchInput=(<HTMLInputElement>document.getElementById("searchInput")).value
        for (let i = 0; i < data.length; i++) {
            if (data[i].rating == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Price...
    searchByPrice = (searchedBooks: Book[]) => {
        var searchInput=(<HTMLInputElement>document.getElementById("searchInput")).value
        for (let i = 0; i < data.length; i++) {
            if (data[i].price==searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //deleting Books...
     deleteBook = (e:any) => {
      if (!e.target.classList.contains("delete")) {
        return;
      }
      var Delete = e.target;
         Delete.closest("tr").remove();
    };
}


// var data = JSON.parse(window.localStorage.getItem("MyBooks"));
// console.log(data);
