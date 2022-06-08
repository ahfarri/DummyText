import React from 'react'
import { Link } from 'react-router-dom';
import CustomBtn from './CustomBtn'
import logo from '../initials.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          },
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        width: "200px"
    },
    flex: {
        display: "flex"
    },
    menuItem: {
        cursor: "pointer",
        margin: "15px",
        "&:hover": {
            color:  "#FFA400"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
    
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
            <Link to="/"><img src={logo} className={classes.logo}/></Link>
            <div className={classes.flex}>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/about" className='text-decoration-none text-reset'>About</Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/contactus" className='text-decoration-none text-reset'>Contact Us</Link>
                </Typography>
            </div>
        </Toolbar>
    )
}

export default NavBar
