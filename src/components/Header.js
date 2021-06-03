import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Container>
            <Nav>
                <Name>
                    An E-commerce site
                </Name>
                <Wrap>
                    <Link className="home" to="/" >
                        <img src="/images/home-icon.svg" alt="Home" />
                        <span>Home</span>
                    </Link>
                </Wrap>
                <div></div>
                <Wrap>
                    <Link className="home" to="/" >
                        <img src="/images/shopping-cart-solid.svg" alt="Home" />
                        <span>Cart</span>
                    </Link>
                </Wrap>
                
                <Wrap>
                    <Link className="home" to="/" >
                        <img src="/images/sign-in-alt-solid.svg" alt="Login" />
                        <span>Login/Register</span>
                    </Link>
                </Wrap>
            </Nav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #2e3440;
`

const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr minmax(0, 50%) 1fr 1fr;
    grid-template-rows: 100%;
    place-items: center;
    a {
        padding: 0 10px;
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 5px;
        font-size: 1.2em;
        color: #d8dee9;
    img {
        height: 20px;
    }}
`
const Name = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 16px;
    color: #d8dee9;
`

const Wrap = styled.div`

`