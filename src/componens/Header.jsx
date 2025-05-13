import {useState} from "react";
import './Style/_header.css';

export const Header = () =>{
    return(
        <>
            <header className='navbar'>
                <nav className='nav'>
                    <h2 className='logo'>Rmarkacz</h2>
                    <ul className='nav-list'>
                        <li className='nav-item'><a href='/'>Konto osobiste</a></li>
                        <li className='nav-item'><a href='#'>Konto firmowe</a></li>
                        <li className='nav-item'><a href='smarkacz'>Rmarkacz  +18</a></li>
                        <li className='nav-item'><a href='smarkacz'>Rmarkacz</a></li>
                    </ul>
                    <button className='btn-login'>Zaloguj się</button>
                    <button className='btn-register'>Zarejestruj się</button>
                </nav>
            </header>
    </>
    )
}