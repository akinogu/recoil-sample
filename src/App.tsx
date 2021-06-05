import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/todo/add'>
          <CreateTodo />
        </Route>
        <Route path='/'>
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;