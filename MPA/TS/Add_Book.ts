import { Book } from "./Book.js";
var Books:any = [];
var addBook = (e: Event) => {
        e.preventDefault();
        let id = (<HTMLInputElement>document.getElementById("Id")).value;
        let title = (<HTMLInputElement>document.getElementById("Title")).value;
        let author = (<HTMLInputElement>document.getElementById("Author")).value;
        let rating = (<HTMLInputElement>document.getElementById("Rating")).value;
        let price = (<HTMLInputElement>document.getElementById("Price")).value;
        Books.push(new Book(id, title, author, rating, price));
        localStorage.setItem("MyBooks", JSON.stringify(Books));
};
    
var add = document.getElementById("form") as HTMLFontElement;
add.addEventListener("submit",addBook)