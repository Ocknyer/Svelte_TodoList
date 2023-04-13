<script>
  import Header from './components/Header.svelte';
  import TodoInput from './components/TodoInput.svelte';
  import TodoList from './components/TodoList.svelte';

  let todos = [
    { id: 0, done: false, text: 'finish Svelte tutorial' },
    { id: 1, done: false, text: 'build an app' },
    { id: 2, done: false, text: 'world domination' },
  ];

  let handleCheck = (id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    todos[idx]['checked'] = !todos[idx]['checked'];
  };

  let handleRemove = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  let handleEdit = (id, text) => {
    const idx = todo.findIndex((todo) => todo.id === id);
    todo[idx]['text'] = text;
  };

  let todoInput = '';

  const handleAdd = () => {
    if (!todoInput) return;

    todos = [
      ...todos,
      { id: ++lastId, checked: false, text: todoInput },
    ];

    todoInput = '';
  };

  $: lastId = todos[todos.length - 1].id || 0;

  let handleKeyUp = (e) => {
    todoInput = e.target.value;

    if (e.keyCode === 13) {
      handleAdd();
    }
  };
</script>

<!-- {@debug todoList} -->
<section class="hero is-primary is-fullheight">
  <div class="hero-head"><Header /></div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="colums is-desktop">
        <div class="column" />
        <div class="column">
          <h1 class="title">Todo List</h1>
          <h2 class="subtitle">Built with Svelte, Bulma</h2>
          <TodoInput {todoInput} {handleKeyUp} {handleAdd} />
          <TodoList
            {todos}
            {handleCheck}
            {handleEdit}
            {handleRemove}
          />
        </div>
        <div class="column" />
      </div>
    </div>
  </div>
</section>

<style>
</style>
