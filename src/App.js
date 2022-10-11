import './App.scss';
import Header from './components/layout/Header';
import Todo from './components/TodoList/Todo';
import { useState } from 'react';

function App() {

  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "darkTheme" : "lightTheme"}>
      <Header dark={dark} setDark={setDark}/>
      <div className="mainContent">
        <Todo />
      </div>
    </div>
  );
}

export default App;
