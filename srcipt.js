const btnAddTodo = document.querySelector(".add-todo");
const inputAddTodo = document.querySelector(".todo-input");
const todos = document.querySelector(".todos-container");
const todosheader = document.querySelector(".todolisten-header");

class todoliste {
  key = 0;

  todoHinzufügen() {
    let inputValue = inputAddTodo.value;

    // Beschränkung der eingabe auf 25 Zeichen
    if (inputAddTodo.value.length > 25) {
      inputAddTodo.value = "";
      inputAddTodo.value = "Todo zu lang";
    } else {
      // Key vergabe und speichern
      const key = 0;
      localStorage.setItem(`${key + localStorage.length}`, `${inputValue}`);
      inputAddTodo.value = "";

      window.location.reload();
    }
  }

  todoDisplay() {
    // Todos werden in die liste hinzugefügt und dem Btn wird der key hintelegt
    for (this.key; this.key < localStorage.length; this.key++) {
      const todoMarkup = `
      <div class="todo" >
      
      <div class="todo-texst">${localStorage.getItem(`${this.key}`)}</div>
      <button  class="todo-button" data-key="${
        this.key
      }"><ion-icon name="close-outline"></ion-icon></button>
      </div>`;
      todos.insertAdjacentHTML("afterbegin", todoMarkup);
    }
  }

  todoLöschen(key) {
    let todos = [];
    // das ausgewählte todo wird gelöscht und neue keys werden vergeben
    for (let keys = 0; keys < localStorage.length; keys++) {
      todos.push(localStorage.getItem(keys));
    }
    localStorage.clear();

    todos.splice(key, 1);

    todos.forEach((todos, key) => {
      localStorage.setItem(`${key}`, todos);
    });
    window.location.reload();
  }
}
const Todoliste = new todoliste();
// ------EventListener-----//
btnAddTodo.addEventListener("click", (e) => {
  Todoliste.todoHinzufügen();
});

todos.addEventListener("click", (e) => {
  const btndelet = e.target.closest(".todo-button");
  let key = Number(btndelet.dataset.key);
  Todoliste.todoLöschen(key);
});

Todoliste.todoDisplay();
