//showing form
let addBook = document.getElementById("ad");
addBook.addEventListener("click", getForm);
function getForm() {
  URL = "addBook.html";
  fetch(URL)
    .then(Response => {
      return Response.text();
    })
    .then(data => {
      document.getElementById("bodyBlock").innerHTML = data;
    });
}

//adding books
async function addBooks() {
  let id = document.getElementById("ID").value;
  let author = document.getElementById("Author").value;
  let price = document.getElementById("Price").value;
  let title = document.getElementById("Title").value;
  let rating = document.getElementById("Rating").value;
  let book = {
    id: id,
    title: title,
    author: author,
    rating: rating,
    price: price,
  };
  let response = await fetch("http://localhost:3000/books", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  // console.log(response);
  getList();
}

//showing booklist
let bookList = document.getElementById("bl");
bookList.addEventListener("click", getList);
function getList() {
  URL = "bookList.html";
  fetch(URL)
    .then(Response => {
      return Response.text();
    })
    .then(data => {
      document.getElementById("bodyBlock").innerHTML = data;
    });

  let bookList = [];
  fetch("http://localhost:3000/books")
    .then(resolve => resolve.json())
    .then(data => {
      bookList = data;
      let tablebody = document.getElementById("tbody");
      let row = "";
      for (let i = 0; i < bookList.length; i++) {
        row += `<tr>
                    <td>${bookList[i].id}</td>       
                    <td>${bookList[i].title}</td>
                    <td>${bookList[i].author}</td>
                    <td>${bookList[i].price}</td>
                    <td>${bookList[i].rating}</td>
                    <td>
                       <span><a href="#" style="text-decoration:none;margin: 0 10px;"><i onclick="deleteBook();" id="${bookList[i].id}" class="fas fa-trash-alt"></i></a><i class="fal fa-grip-lines-vertical"></i><a href="#" style="text-decoration:none;margin-left:10px"><i id="info" class="fad fa-info-circle"></i></a></span>
                    </td>
                    </tr>`;
      }
      tablebody.innerHTML = row;
      // console.log(bookList);
    });
}

//deleting book
async function deleteBook() {
  console.log(event.target.id);
  let deleteBookId = event.target.id;
  let result = await fetch(`http://localhost:3000/books/${deleteBookId}`, {
    method: "DELETE",
    mode: "cors",
  });
  console.log(result);
  let data = result.json();
  getList();
}
