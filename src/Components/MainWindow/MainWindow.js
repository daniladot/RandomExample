import React from 'react'
import classes from './MainWindow.module.scss'
import FormName from '../FormName/FormName'
import {connect} from 'react-redux'
import ExampleList from '../ExampleList/ExampleList'

const MainWindow = (props) => {

    return (
        <div className={classes.MainWindow}>
            {props.store.changeWindow === 1
                ? <FormName/>
                : <ExampleList/>
            }
        </div>
    )
}


export default connect(state => ({
    store: state
}))(MainWindow)