import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Nav.css'
import logo from '../Assets/ganbarulogo.png'

export default function Nav(){
    return(
        <div className ="nav-bar">
                <ul className ="nav-menu">
                    <ul className ="nav-links">
                        <li className ="links">
                            <Link to="/"> <img className ="logo" src={logo} alt="logo"></img> </Link>
                            <Link to="/" style={{textDecoration:'none', color:'black', paddingLeft:'18px'}}> Shop </Link>
                            <Link to="/" style={{textDecoration:'none', color:'black', paddingLeft:'18px'}}> Men </Link>
                            <Link to="/" style={{textDecoration:'none', color:'black', paddingLeft:'18px'}}> Women </Link>
                            <Link to="/" style={{textDecoration:'none', color:'black', paddingLeft:'18px'}}> New </Link>
                        </li>
                    </ul>
                    <li className ="icons">
                        <FavoriteBorderIcon />
                        <ShoppingCartOutlinedIcon />
                    </li>
                    
                
                </ul>

        
        </div>
    )
}