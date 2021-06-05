import { atom, selector } from 'recoil';

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [],
});

export const filterTodoListState = atom({
  key: 'filterTodoListState',
  default: 'all'
})

export const filterTodoSelector = selector({
  key: 'filterTodoSelector',
  get: ({ get }) => {
    const filter = get(filterTodoListState);
    const list = get(todoListState);

    if (filter === 'completed') {
      return list.filter(item => item.isCompleted);
    }
    return list;
  }
})
