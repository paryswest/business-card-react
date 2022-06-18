import React from "react"

export default function Info() {
    return (
        <main className="main--sec" >
            <div className="image--container">
                <img className="main--image" src="./images/parys.jpg" />
            </div>   
            <h1 className="main--name">Parys West</h1>
            <span className="main--heading">Full-Stack Developer</span>
            <span className="website">www.therealparyswest.com</span>
            <div className="but-1-cont">
                <button type="button" className="button1"><img className="mail" src="./images/mail.png" />Email</button>
            </div>
            <div className="but-2-cont">
            <button type="button" className="button2"><img className="in" src="./images/linkedin.png" />LinkedIn</button>
            </div>
        </main>  
     ) 
}