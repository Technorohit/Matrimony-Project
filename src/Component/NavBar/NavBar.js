import React from 'react'
import './Style.css'
import UserImg from '../../Assets/user-img.png'
export default function NavBar() {
    return (
        <nav>
            <div className="logo"><img src="https://img2.shaadi.com/assests/2016/images/logos/shaadi-logo-v1.png" alt="" />
            </div>
            <div className="nav_links">
                <a href="##">My Shadi</a>
                <a href="##">Matches</a>
                <a href="##">Search</a>
                <a href="##">Inbox</a>
            </div>
            <div className="upgrade">
                <img className="upgrade_icon" src="https://cdn.icon-icons.com/icons2/2485/PNG/512/premium_quality_icon_150034.png" alt="" />
                <span> Upgrade Now</span>
            </div>
       
            <div className="user_control">
                <div className="help">Help</div>
                <img className="user" src={UserImg} alt="" /></div></nav>
    )
}
