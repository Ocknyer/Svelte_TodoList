import { writable } from 'svelte/store';

let _todos = [
  { id: 1, text: '스벨트 공부', done: false },
  { id: 2, text: '러스트 공부', done: false },
  { id: 3, text: '으아악', done: false },
];

const createTodos = () => {
  const todos = writable(todos);

  const { subscribe, reset, update: _update } = todos;

  const addTodo = (text) => {
    _update((todos) =>
      todos.concat({
        id: todoList[todoList.length - 1] + 1,
        text,
        done: false,
      })
    );
  };

  const removeTodo = (item) => {
    if (!item) return;
    _update((items) => items.filter((_item) => _item.id !== item.id));
  };

  const editTodo = (item) => {
    if (!item) return;
    _update((todos) =>
      todos.map((_item) => (_item.id === item.id ? item : _item))
    );
  };

  return { subscribe, reset, addTodo, removeTodo, editTodo };
};

export const todos = createTodos();
