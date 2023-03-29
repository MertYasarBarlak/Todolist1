/*
<li class="list-group-item d-flex justify-content-between align-items-center">
    Text
    <a href="#">
        <i class="fa-solid fa-xmark" style="color: #6f7276">
    </a>
</li>

*/

let ulDOM = document.querySelector("#MainUL");
let btnAdd = document.querySelector("#AddListButton");
let inputtext = document.querySelector("#ListInput");
let alertDOM = document.querySelector("#alert");
let CardBody = document.querySelector(".card-body");
function eventlistener() {
  btnAdd.addEventListener("click", addList);
  CardBody.addEventListener("click", removeTodo);
}

function addList() {
  let liDOM = document.createElement("li");
  let aDOM = document.createElement("a");
  let iDOM = document.createElement("i");
  if (inputtext.value == "") {
    alertDOM.innerHTML = alerthatalı;
  } else {
    liDOM.classList.add(
      "listLi",
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    iDOM.classList.add("fa-solid", "fa-xmark", "color1");
    //   liDOM.innerHTML = inputtext.value; //inputta yazan değeri li içine ekler
    liDOM.innerHTML = `${inputtext.value}<a href="#">
      <i class="fa-solid fa-xmark" style="color: #6f7276">
    </a>`;
    ulDOM.appendChild(liDOM);
    inputtext.value = ""; //Ekledikten sonra input sıfırlar
  }
}

function removeTodo(e) {
  if (e.target.className == "fa-solid fa-xmark") {
    //
    const todo = e.target.parentElement.parentElement;
    todo.remove();
  }
}

alerthatalı = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Hatalı!! </strong> Lütfen Bir eylem giriniz
<button
  type="button"
  class="close"
  data-dismiss="alert"
  aria-label="Close"
>
  <span aria-hidden="true">&times;</span>
</button>
</div>`;

eventlistener();
