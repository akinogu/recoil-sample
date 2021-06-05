import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { todoListState, filterTodoListState, filterTodoSelector } from '../recoil/todo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [list, setList] = useRecoilState(todoListState);
  const filteredList = useRecoilValue(filterTodoSelector);
  const [filterState, setFilterState] = useRecoilState(filterTodoListState);

  const removeTodo = (id: number) => {
    setList(list.filter(i => i.id !== id));
  }

  const changeTodoStatus = (id: number) => {
    const index = list.findIndex(i => i.id === id);
    if (index < 0) {
      return
    }
    setList([...list.slice(0, index), { ...list[index], isCompleted: !list[index].isCompleted }, ...list.slice(index + 1)]);
  }

  const filterList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterState(e.target.value)
  }

  return (
    <>
      <div>TODO LIST</div>
      <Link to='/todo/add'>TODOを追加する</Link>
      <div>
        <select name='filter' id='filter' value={filterState} onChange={filterList}>
          <option value='all'>すべて</option>
          <option value='completed'>完了のみ</option>
        </select>
        <ul>
          {filteredList.map((item) => (
            <li key={item.id}>
              <TodoItem
                todoItem={item}
                onChangeStatus={() => changeTodoStatus(item.id)}
                onRemove={() => removeTodo(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;