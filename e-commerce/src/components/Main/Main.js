import React from 'react'
import './Main.css'
import MainImg from '../Assets/ganbaru.jpg'

export default function Main(){
    return(
        <div>
            <img className ='main-img' src={MainImg} alt ='logo'/>
        </div>
    )
}