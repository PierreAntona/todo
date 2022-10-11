const Switch = ({ dark, setDark }) => {
  return (
    <button onClick={() => setDark(!dark)} className="switch">
      {dark ? (
        <img src="/sun.svg"/>
      ) : (
        <img src="/moon.svg"/>
      )}
    </button>
  );
};

export default Switch;
