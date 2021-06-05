import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory  } from 'react-router-dom';

import { todoListState } from '../recoil/todo';

const CreateTodo = () => {
  const history = useHistory();
  const [newTodo, setNewTodo] = useState('');
  const [list, setList] = useRecoilState(todoListState);

  const addTodo = () => {
    const id = (list[list.length - 1]?.id ?? 0) + 1;
    setList([...list, { id, todo: newTodo, isCompleted: false }]);
    setNewTodo('');
    history.push('/');
  }

  return (
    <>
      <h1>TODO</h1>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>追加</button>
    </>
  )
}

export default CreateTodo;
