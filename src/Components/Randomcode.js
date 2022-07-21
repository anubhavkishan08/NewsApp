import React, { useState } from 'react'
import axios from 'axios'
import './news.css';

function Randomcode() {

const[code,setCode]=useState([])

    const fetchCode =()=>{
        console.log("clicked")
       axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=493675789294418cbfa28bfe7099a32a")
        .then((response)=>{
        console.log(response.data.articles)
         setCode(response.data.articles)
        })
    }
  return (
    <>
    <div className='randombtn'>
        <button onClick={fetchCode}>FetchNews</button>
        </div>
        <div className="users">
        <ul class="list-group list-group-flush">
        {code.map((value) => (
        <div className="user">
      
        <li className="list-group-item2"><h1>{value.title}</h1></li>
  <li className="list-group-item1"><h1>{value.description}</h1></li>
  <div className='img'>
  <img src={value.urlToImage}/>
  </div>
        </div>
      ))}
  
</ul>
    </div>
        </>
  )
}

export default Randomcode