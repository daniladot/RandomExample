import React from 'react'
import classes from './FormName.module.scss'
import {connect} from 'react-redux'
import Button from "../UI/Button/Button";


const FormName = (props) => {

    const changeInput = (e) => {
        props.onChangeName(e)
    }

    const clickNext = () => {
        props.onNextClick(generateExample())
    }

    const generateExample = () => {
        let arrayExample = []
        let sign
        for (let i = 0; i < 10; i++) {
            let num1 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
            let num2 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
            let signNumber = Math.floor(Math.random()*(4))
            if (signNumber === 0)
                sign = '+'
            else if (signNumber === 1)
                sign = '-'
            else if (signNumber === 2)
                sign = '*'
            else if (signNumber === 3)
                sign = '/'

            if (num2 === 0 && sign === '/') {
                i--
            } else {
                let answer = Math.floor(eval(`${num1}
                ${sign}
                ${num2}`) * 100) / 100
                arrayExample.push({example: `${num1} ${sign} ${num2}`, answer: answer, answerUser: '', statusAnswer: ''})
            }
        }

        return arrayExample
    }

    return (
        <div className={classes.FormName}>
            <label>Введите имя: </label>
            <input type="text"
                   onChange={(e) => changeInput(e.target.value)}
            />
            <Button
                click={clickNext}
                text='Далее'
            />
        </div>
    )
}


export default connect(
    state => {
        return state
    },
    dispatch => ({
        onChangeName: store => {
            dispatch({type: 'CHANGE_NAME', payload: store})
        },
        onNextClick: store => {
            dispatch({type: 'EXAMPLE_WINDOW', payload: store})
        }
    })
)(FormName)
