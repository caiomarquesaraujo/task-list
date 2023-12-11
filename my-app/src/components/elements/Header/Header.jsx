import './index.scss'
import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='header__org'><h1>Organização</h1></div>
            <div className='header__todo'><h2>Tarefas</h2></div>

        </div>
    )
}

export default Header