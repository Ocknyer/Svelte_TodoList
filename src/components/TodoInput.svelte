<script>
  export let todoInput = '';
  export let handleKeyUp;
  export let handleAdd;
</script>

<div class="field has-addons">
  <div class="control" style="width: 100%;">
    <input
      type="text"
      class="input"
      placeholder="할 일을 입력해주세용"
      on:keyup={(e) => handleKeyUp(e)}
      bind:value={todoInput}
    />
  </div>

  <div class="control">
    <button class="button is-info" on:click={() => handleAdd}>
      추가하기
    </button>
  </div>
</div>
