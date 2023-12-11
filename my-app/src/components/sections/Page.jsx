import React from 'react'
import './index.scss'
import Header from '../elements/Header/Header.jsx'
import Menu from '../elements/Menu/Menu.jsx'

function Page() {
    return (
        <div className='main'>
            <Header />
            <Menu />
        </div>
    )
}

export default Page