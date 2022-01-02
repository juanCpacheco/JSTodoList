//Primero se añade el addEventListener que indica que cuando cargue todo el documento html ejecute una funcion
//Como funcion añadiremos todo el codigo para asegurarnos que no intente ejecutar algo antes de que cargue el documento completamente
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btn = document.getElementById("add");
  let id = 1;

  function removeTodo(id) {
    document.getElementById(id).remove();
  }

  function aniadirElemento() {
    const row = table.insertRow();
    row.setAttribute("id", id++);
    row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
              <input type="checkbox">
            </td>
            <td class="text-right">
              <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
              </button>
            </td>
        `;
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger", "mb-1", "ml-1");
    btnEliminar.innerHTML = `<i class="fa fa-trash"></i>`;
    btnEliminar.onclick = function (event) {
      removeTodo(row.getAttribute("id"));
    };
    row.children[3].appendChild(btnEliminar);
  }

  function addTodo() {
    if (title.value === "" || description.value === "") {
      console.error("Title and description are required");
      //Si deseo saber que funciones puedo utilizar en la consola de la pagina escribir
      //document.getElementById('el elemento'). y automaticamente muestra las opciones
      alert.classList.remove("d-none");
      alert.innerText = "Title and description are required";
    } else {
      console.log("Title:", title.value);
      console.log("Description:", description.value);
      alert.classList.add("d-none");
      aniadirElemento();
    }
  }

  btn.onclick = addTodo;
});
