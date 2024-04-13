import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'
import CustomButton from './CustomButton'
import ClickCounter from './ClickCounter'
import ArticleList from './ArticleList';
import fetchArticlesWithTopic from './articles-api';


function App() {
  //==============ОБРОБНИК ПОДІЙ ПІД ЧАС КЛІКУ==============//
  // const handleClick = () => {
  //   alert ('I am a button')
  // }
  // return (

  //   <button onClick={handleClick}>Click me!</button>
  // )
  //=================ШНЛАЙНОВА ФУНКЦІЯ========================//
  // return (
  //   <button onClick={() => alert ('I am a button')}>Click me!</button>
  // )
  //============================================================//




  //===================Об'єкт події===================//
  //------------------Callback-функція, яка передається як обробник події------------------//
  // const handleClick = (evt) => {
  //   console.log(evt);
  // }
  // return (
  //   <>
  //     <button onClick={handleClick}>First</button>
  //     <button onClick={evt => console.log(evt)}>Click</button>
  //   </>

  // )


  //==============================Читання props=======================//
  // return (
  //   <>
  //   <CustomButton message='Playing music'>Play</CustomButton>
  //   <CustomButton message='Stop music'>Stop</CustomButton>
  //   </>
  // )



  //====================Реактивність=============================//
  // const [click, setClick] = useState(0);

  // const handleClick = () => {
  //   setClick(click + 1)
  // }

  // return (
  //   <button onClick={handleClick}>Click: {click}</button>
  // )


  //========================Декілька станів==========================//

  // const [click, setClick] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setClick(click + 1);
  // }

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // }
  // return (
  //   <>
  //     <button onClick={handleClick}>Click: {click}</button>
  //     <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
  //     {isOpen && <p>Now you can see me!</p>}
  //   </>
  // )



  //=================Ізоляція стану============//
  //   return (
  //     <>
  //       <ClickCounter />
  //       <ClickCounter/>
  //     </>
  // )


  //====================Оновлення об'єктів===========//

  // const [value, setValue] = useState({
  //   x: 0,
  //   y: 0
  // })

  // const updateX = () => {
  //   setValue({
  //     ...value,
  //     x: value.x + 1
  //   });
  // }

  // const updateY = () => {
  //   setValue({
  //     ...value,
  //     y: value.y + 1
  //   });
  // }

  // return (
  //   <>
  //     <button onClick={updateX}>X: {value.x}</button>
  //     <button onClick={updateY}>Y: {value.y}</button>
  //   </>
  // )




  //==============Хук useEffect========================//

  //   const [click, setClick] = useState(0);
  //   useEffect(() => {
  //     window.localStorage.setItem('saved', click);
  //     console.log(click);
  //   },[click]);
  //   const handleClick = () => {
  //     setClick(click + 1);
  //   }
  //   return (
  //     <>
  //     <button onClick={handleClick}>You clicked {click} times</button>
  //     <button onClick={()=>setClick(0)}>Reset</button>
  //     </>
  // )
  //===========================================================================//
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchArticles() {
      try {
      setLoading(true)
        const data = await fetchArticlesWithTopic("react");
      setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    }
    
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );

}

export default App
