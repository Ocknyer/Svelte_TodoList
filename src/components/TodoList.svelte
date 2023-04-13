<script>
  import TodoItem from './TodoItem.svelte';

  export let todos;
  export let handleCheck;
  export let handleEdit;
  export let handleRemove;

  $: remaining = todos.filter((t) => !t.done).length;
</script>

<div>
  {#if remaining}
    <p>할 일이 {remaining}개 남았어요</p>
  {:else}
    <p>할 일을 모두 마쳤어요!</p>
  {/if}

  <br />

  {#each todos as todo (todo.id)}
    <TodoItem {todo} {handleCheck} {handleEdit} {handleRemove} />
  {/each}
</div>
