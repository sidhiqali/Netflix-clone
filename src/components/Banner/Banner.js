import React, { useEffect, useState } from 'react'
import "./Banner.css"
import { imgUrl } from '../constants/constant'
import axios from '../../axios'
import {originals} from '../../url'

function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => { 
    axios.get(originals).then((response)=>{
      console.log(response.data.results);
      let random = Math.floor(Math.random() * 10);
      console.log(random);
      setmovie(response.data.results[random])
    })
  
  
  }, [])
  

  return (
    <div 
    style={{backgroundImage: `url(${movie? imgUrl+movie.backdrop_path:null})`}}
         className='banner'>
            <div className='content fade_top' >
                <h1 className='title'>{movie?movie.name:''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1  className='description'>{movie?movie.overview:null}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner