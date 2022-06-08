import React, {useState} from 'react'
import axios from 'axios';
import blsky from '../images/bluesky.jpg'
import addheader from '../images/addheader.png'


const Addresses = () => {

    const [allAddresses, setAllAddresses] = useState([])
    const [size, setSize] = useState(0)

    const clickHandlerAddress =(e)=> {
        e.preventDefault();
        axios.get(`https://random-data-api.com/api/address/random_address?size=${size}`)
        .then(response => {
            console.log(response);
            setAllAddresses(response.data);
            console.log(allAddresses);
        }).catch(err=>{
            console.log(err);
        });
        }

    const changeHandler =(e) => {
        setSize(e.target.value)
        console.log(size)
    }


    return (
        <div style={{display:'flex'}}>
            <div className="filltxt">
                <img src={addheader} alt="#ofAddresses" className='rheaders'/>
                <form onSubmit={(e)=>clickHandlerAddress(e)}>
                    <input type="number" className='numfld' name="size" value={size} onChange={(e)=>changeHandler(e)}/>
                    <input type="submit" value="Get Addresses" className='btn'/>
                </form>
                <div>
                    <div className='boxes' style={{backgroundImage:`url(${blsky})`}}>
                        <div className='section2'>
                            <h4 className='header'>Street Address</h4>
                            {
                            allAddresses.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.street_address}</p>
                                </div>
                            </div>
                        })
                        }
                        </div>
                        <div className='section2'>
                            <h4 className='header'>City</h4>
                            {
                            allAddresses.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.city}</p>
                                </div>
                            </div>
                        })
                        }
                        </div>
                        <div className='section2'>
                            <h4 className='header'>State</h4>
                            {
                            allAddresses.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.state}</p>
                                </div>
                            </div>
                        })
                        }
                        </div>
                        <div className='section2'>
                            <h4 className='header'>Zip Code</h4>
                            {
                            allAddresses.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.zip_code}</p>
                                </div>
                            </div>
                        })
                        }
                        </div>
                        <div className='section'>
                            <h4 className='header'>Full Address</h4>
                            {
                            allAddresses.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.full_address}</p>
                                </div>
                            </div>
                        })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses;
