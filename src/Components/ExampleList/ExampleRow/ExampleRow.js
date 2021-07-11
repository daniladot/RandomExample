import React from 'react'
import classes from './ExampleRow.module.scss'
import {connect} from 'react-redux'

const ExampleRow = (props) => {

    const changeInput = (e, index) => {
        let payloadObject = {value: e, index: index}
        props.onChangeRow(payloadObject)
    }

    return (
        <div className={classes.ExampleRow}
            data-check={props.statusAnswer}
        >
            <div className={classes.Example}>{props.example}</div>
            <div className={classes.Sign}>=</div>
            <input className={classes.Answer}
                   type="text"
                   onChange={(e) => changeInput(e.target.value, props.index)}
            />
        </div>
    )
}

export default connect(state => ({
        store: state
    }),
    dispatch => ({
        onChangeRow: store => dispatch({type: "ON_CHANGE_ROW", payload: store})
    })
)(ExampleRow)


