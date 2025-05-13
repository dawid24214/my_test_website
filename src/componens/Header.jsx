import {useState} from "react";
import './Style/_header.css';

export const Header = () =>{
    return(
        <>
            <header className='navbar'>
                <nav className='nav'>
                    <h2 className='logo'>Smarkacz</h2>
                    <ul className='nav-list'>
                        <li className='nav-item'><a href='/'>Konto osobiste</a></li>
                        <li className='nav-item'><a href='#'>Konto firmowe</a></li>
                        <li className='nav-item'><a href='smarkacz'>Smarkacz  +18</a></li>
                        <li className='nav-item'><a href='smarkacz'>Smarkacz</a></li>
                    </ul>
                    <button>Zaloguj się</button>
                    <button>Zarejestruj się</button>
                </nav>
            </header>
    </>
    )
}