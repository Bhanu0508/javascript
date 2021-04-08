// import { Book } from "./Book";
let list = document.getElementById("bl") as HTMLAnchorElement;
let Content = document.getElementById("content") as HTMLElement;
let Add = document.getElementById("add") as HTMLAnchorElement;
var table = document.getElementById("bookTable") as HTMLElement;
list.onclick = function contents() {
    Content.style.visibility = "visible";
    Add.style.visibility = "hidden";
}
let addBooks = document.getElementById("ad") as HTMLAnchorElement;
addBooks.onclick = function visibilityOfContent() {
    Add.style.visibility = "visible";
    Content.style.visibility="hidden";
};

class Book{
    id: String;
    title: String;
    author: String;
    rating: String;
    price: String;
    coverPhotoUrl?: String;
    constructor(id: String,title: String,author: String,rating: String,price: String,coverPhotoUrl?: String) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
        this.coverPhotoUrl = coverPhotoUrl;
}
};

let Books: Book[] = [];
var i = 0;
let data:any;
class bookManager {
     //Adding rows
    addBook = (e: Event) => {
        e.preventDefault();
        let id = (<HTMLInputElement>document.getElementById("Id")).value;
        let title = (<HTMLInputElement>document.getElementById("Title")).value;
        let author = (<HTMLInputElement>document.getElementById("Author")).value;
        let rating = (<HTMLInputElement>document.getElementById("Rating")).value;
        let price = (<HTMLInputElement>document.getElementById("Price")).value;
        Books.push(new Book(id, title, author, rating, price));
        localStorage.setItem("MyBooks", JSON.stringify(Books));
    };
    
     //book list
    bookList = () => {
        let Local: any = localStorage.getItem("MyBooks");
        data = JSON.parse(Local);
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
    };

//search By ID...
    searchById = (searchedBooks:Book[],searchInput:any) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Title...
    searchByTitle = (searchedBooks:Book[],searchInput:any) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].title == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Author...
    searchByAuthor = (searchedBooks:Book[],searchInput:any) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].author == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Price...
    searchByRating = (searchedBooks:Book[],searchInput:any) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].rating == searchInput) {
                searchedBooks.push(data[i]);
            }
        }
        return searchedBooks;
    }
    //search By Rating...
    searchByPrice = (searchedBooks:Book[],searchInput:any) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].price == searchInput) {
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

let book = new bookManager();
let add = document.getElementById("form") as HTMLFormElement;
add.addEventListener("submit", book.addBook);
list.addEventListener("click", book.bookList);
var tableEl = document.querySelector("table") as HTMLElement;
tableEl.addEventListener("click", book.deleteBook);


//search Results...
function searchResults(searchedBooks:Book[]){
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
        </tr>`
        table.innerHTML += row;
    }

}
let searchBtn = document.getElementById("search") as HTMLButtonElement;
    searchBtn.addEventListener('click', function (e: Event) {
    e.preventDefault();
    Content.style.visibility = "visible";
    Add.style.visibility = "hidden";
    let option = document.getElementById("choice") as HTMLInputElement;
    let optionValue = option.value;
    let search = document.getElementById("searchInput") as HTMLInputElement;
    let searchInput = search.value;
    let searchedBooks: Book[] = [];
    switch(optionValue)
    {
        case "id":
            if(searchInput!=null)
            {
                let searchedBooksById=book.searchById(searchedBooks,searchInput)
                searchResults(searchedBooksById);
            }
        case "title":
            if(searchInput!=null)
            {
                let searchedBooksByTitle=book.searchByTitle(searchedBooks,searchInput)
                searchResults(searchedBooksByTitle);
            }
        case "author":
            if(searchInput!=null)
            {
               let searchedBooksByAuthor=book.searchByAuthor(searchedBooks,searchInput)
                searchResults(searchedBooksByAuthor);
            }
         case "rating":
            if(searchInput!=null)
            {
                let searchedBooksByRating=book.searchByRating(searchedBooks,searchInput)
                searchResults(searchedBooksByRating);
            }
        case "price":
            if(searchInput!=null)
            {
                let searchedBooksByPrice=book.searchByPrice(searchedBooks,searchInput)
                searchResults(searchedBooksByPrice);
            }
    }

})

