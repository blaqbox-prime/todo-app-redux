import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './App.css';
import Banner from './components/bg_Banner/Banner';
import {setTheme} from './theme'
import TodoList from './components/TodoList/TodoList';

function App() {

 
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    setTheme(theme);
  }, [theme])
  


  return (
    <section className="App">
      <Banner/>
      <TodoList />
    </section>
  );
}

export default App;
