import React from "react"

export default function Info(){
    return(
        <div className="info--container">
            <img className ="info--img" src="profile-dashag.png" alt=""/>
                <div className="info--profile">
                    <h1>Dasha Gaytan</h1>
                    <h3>Web Developer</h3>
                    <h4>dashagaytan.website</h4>
                <div className="info--btn">
                    <a href="https://www.linkedin.com/feed/" className="email"><ion-icon name="mail-outline"></ion-icon><span>Email </span></a>
                    <a href="https://www.linkedin.com/feed/" className="linkedin"><ion-icon name="logo-linkedin"></ion-icon><span>LinkedIn </span></a>
                </div>
            </div>
        </div>
    )
}