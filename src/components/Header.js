import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/stabondlogo.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={logo} alt="" style={{height: 30, width: 'auto', verticalAlign:'middle'}} /></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
