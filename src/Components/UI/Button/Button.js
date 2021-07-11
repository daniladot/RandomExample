import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
    return(
        <div className={classes.Button}
             onClick={() => props.click()}
        >{props.text}</div>
    )
}

export default Button