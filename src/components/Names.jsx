import React, {useState} from 'react'
import axios from 'axios';
import sand from '../images/sand.jpg'
import namesheader from '../images/namesheader.png'


function Names() {
    const [allNames, setAllNames] = useState([])
    const [size, setSize] = useState(0)

    const clickHandlerNames =(e)=> {
        e.preventDefault();
        axios.get(`https://random-data-api.com/api/name/random_name?size=${size}`)
        .then(response => {
            console.log(response);
            setAllNames(response.data);
            console.log(allNames);
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
                <img src={namesheader} alt="#ofNames" className='rheaders'/>
                <form onSubmit={(e)=>clickHandlerNames(e)}>
                    <input type="number" className='numfld' name="size" value={size} onChange={(e)=>changeHandler(e)}/>
                    <input type="submit" value="Get Names" className='btn'/>
                </form>
                <div className="boxes" style={{backgroundImage:`url(${sand})`}}>
                    <div className='section'>
                        <h4 className='header'>First Name</h4>
                            {
                            allNames.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.first_name}</p>
                                </div>
                            </div>
                        })
                        }
                    </div>
                    <div className='section'>
                        <h4 className='header'>Last Name</h4>
                            {
                            allNames.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.last_name}</p>
                                </div>
                            </div>
                        })
                        }
                    </div>
                    <div className='section'>
                        <h4 className='header'>Full Name</h4>
                            {
                            allNames.map((info, idx)=>{
                                return <div key = {idx}>
                                <div>
                                    <p>{info.name}</p>
                                </div>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Names
