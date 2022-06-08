import React from 'react'
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#B77B82",
        color: "#fff",
        transform: "none",
        fontSize: "large",
        boxShadow: "2px 2px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#F7BCAC"
          }
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function CustomBtn(props) {
    return (
        <StyledButton className="mx-auto">{props.txt}</StyledButton>
    )
}

export default CustomBtn
