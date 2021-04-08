//showing details
let info = document.getElementById("info");
info.addEventListener("click", getInfo);
function getInfo() {
  URL = "deatils.html";
  fetch(URL)
    .then(Response => {
      return Response.text();
    })
    .then(data => {
      document.getElementById("bodyBlock").innerHTML = data;
    });
}
