const { ref, watchEffect, createApp } = Vue;

const updateStorage = (value) =>
  localStorage.setItem("todos", JSON.stringify(value));

const App = {
  setup() {
    const todo = ref("");
    const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);

    const addTodo = () => {
      todos.value.push({ text: todo.value });
      todo.value = "";
    };

    const deleteTodo = (target) => {
      todos.value = todos.value.filter((todo) => todo !== target);
    };

    watchEffect(() => updateStorage(todos.value));

    return {
      todo,
      todos,
      addTodo,
      deleteTodo,
    };
  },
};

createApp(App).mount("#app");
