import React from 'react'
import contact from '../images/contact.png'

function Contact() {

    return (
        <div style={{display:'flex'}}>
            <div className="filltxt">
                <img src={contact} alt="contactme" className='mheaders'/>
                <form className='w-75 mx-auto mb-3'>
                    <p className='text-start fs-5'>First Name:</p>
                    <input type="text" name="fname" className='form-control' /><br/>
                    <p className='text-start fs-5'>Last Name:</p>
                    <input type="text" name="lname" className='form-control'/><br/>
                    <p className='text-start fs-5'>Email:</p>
                    <input type="email" name="email" className='form-control'/><br/>
                    <p className='text-start fs-5'>Comment:</p>
                    <textarea name='comment' className='form-control'/><br/>
                    <input type="submit" value="Send Message" className='btn fs-5'/>
                </form>
            </div>
        </div>
        
    )
}

export default Contact
