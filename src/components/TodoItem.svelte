<script>
  export let todo;
  export let handleCheck;
  export let handleEdit;
  export let handleRemove;
</script>

<div class="field" />
<div
  class="control has-icons-left has-icons-right todo-item"
  class:todo-item--checked={todo.done}
>
  <input
    type="text"
    class="input"
    placeholder="할 일을 입력해 주세요 :)"
    bind:value={todo.text}
    on:keyup={(e) => handleEdit(todo.id, e.target.value)}
  />
  <span
    class="icon is-small is-left"
    on:click={() => handleCheck(todo.id)}
  >
    <i class="fas fa-check" />
  </span>
  <span
    class="icon is-small is-right"
    on:click={() => handleRemove(todo.id)}
  >
    <i class="fas fa-trash" />
  </span>
</div>

<style lang="scss">
  .control.has-icons-left,
  .control.has-icons-right {
    & .icon {
      pointer-events: inherit;
      transition: color 0.5s;
      cursor: pointer;

      &:hover {
        color: #363636;
      }
    }

    & .input:focus ~ .icon {
      color: #dbdbdb;
    }
  }

  .todo-item {
    &--checked {
      opacity: 0.4;
    }
  }
</style>
