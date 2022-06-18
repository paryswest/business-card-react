import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import "./style.css"

function BusinessCard() {
    return (
        <div className="main">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div> 
    ) 
}

ReactDOM.render(<BusinessCard />, document.getElementById('root'))
