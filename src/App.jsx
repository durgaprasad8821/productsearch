import './App.css'
import { IoCart } from "react-icons/io5";
import { FaAmazon,FaSearch } from "react-icons/fa";
import {useState, useEffect} from 'react';
import ProductCard from './componets/products/prducts';

function App(){
  const[products , setProducts] = useState([]);
  const[search , setSearch] = useState("");
  async function apicall(search = 'phone'){
    const responce = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const data = await responce.json()
    setProducts(data['products']);

  }
 
  function userInput(){
    apicall(search)
    setSearch("");
     
  }
  useEffect(() => {
    apicall()
  } ,[]);
  
  return(
    <div className='contianer'>
      <div className='nav'>
        <div className='logo'>
        <FaAmazon />
        </div>
        <div className='user-input'>
          <input type = 'text' value={search}  onChange={((event) =>{setSearch(event.target.value)})} />
          <FaSearch  className = "search" onClick =  {()=>{userInput()} }/>
        </div>
        <div className='cart'> 
        <IoCart />
        </div>
        </div> 
        <div className='main-body'>
          {
            products.map((event) => (
              <ProductCard  data = {event} key = {event.id}/>
            ))
          }
        </div>
        
    </div>
  )



     
}

export default App
