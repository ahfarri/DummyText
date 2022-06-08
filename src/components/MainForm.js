import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import CustomBtn from './CustomBtn';
import person from '../images/person.png';
import info from '../images/info.png';
import welcome from '../images/Welcome.png';
import sky from '../images/sky.jpg';
import people from '../images/people.jpg';
import location from '../images/location.jpg'

function MainForm() {



    return (
        <div>
            <img src={welcome} alt="Welcome" className='welcome'></img>
            <div style={{backgroundImage:`url(${sky})`}} className="main">
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className='routes'>
                        <img src={people} alt="people" className='icon'></img>
                        <Link to="/names" style={{textDecoration:"none"}}><CustomBtn txt="Random Names"></CustomBtn></Link>
                    </div>
                    <div className='routes'>
                        <img src={location} alt="location"className='icon'></img>
                        <Link to="/addresses" style={{textDecoration:"none"}}><CustomBtn txt="Random Addresses"></CustomBtn></Link>
                    </div>
                </div>
            </div>
            <p className='maintext mx-auto'>This website is for all my fellow coders, testers, and anyone else needing quick access to random names and addresses for a project.</p>
            <p className='maintext mx-auto'>Enjoy!</p>
        </div>


    )
}

export default MainForm
