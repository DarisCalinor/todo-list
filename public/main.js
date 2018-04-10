// Check off specific todo by click
const todo = document.querySelector("ul");
todo.addEventListener("click", function(e) {
  e.target.classList.toggle("completed");
});

// Delete specific todo by clicking thrash bin
todo.addEventListener("click", function(e) {
  const parent = e.target.parentNode;
  if (parent.nodeName === "SPAN") {
    const child = parent.parentNode;
    child.parentNode.removeChild(child);
  } else if (parent.nodeName === "LI") {
    const child = parent;
    child.parentNode.removeChild(child);
  }
});

// Add new todo
const inputField = document.querySelector("input[type='text']");
inputField.addEventListener("keypress", function(e) {
  if (e.which === 13) {
    const todoText = e.target.value;
    e.target.value = "";

    const newTodo = document.createElement("li");
    newTodo.innerHTML = `<span><i class='fa fa-trash' aria-hidden='true'></i></span> ${todoText}`;
    todo.appendChild(newTodo);
  }
});
