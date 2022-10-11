import Switch from './switchTheme';

function Header({ dark, setDark }) {

  return (
    <nav>
      <ul>
        <li>My Todo List</li>
        <Switch dark={dark} setDark={setDark}/>
      </ul>
    </nav>
  );
}

export default Header;