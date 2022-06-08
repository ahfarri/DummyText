import React from 'react'
import hello from '../images/hello.png'
import there from '../images/there.png'
import profile from '../images/profilepic.png'

function About() {

    return (
        <div>
            <div style={{display:'flex'}}>
                <div className='mx-auto'>
                    <img src={hello} alt="Hello" className='rheaders'/>
                    <img src={there} alt="there!" className='rheaders'/>
                </div>
            </div>
            <div className="filltxt">
                <img src={profile} alt="profile pic" className='rheaders pfpic'/>
                <p className='pftxt'>Hi! My name is Alexandra and I'm new to this. I am a full stack developer, extremely passionate about solving problems and crafting applications that grab users’ attention!
I found my skills and personality type are a great fit for a successful developer. I love to solve problems and am very analytical, but I also have a creative side that allows me to think outside the box and to find solutions through different angles. My passion for design and creativity led me to a coding bootcamp where I could bring my design skills and analytical experience to create full stack projects in 3 different languages. This is an example of a project in one of those languages. </p>
            </div>
        </div>
    )
}

export default About
