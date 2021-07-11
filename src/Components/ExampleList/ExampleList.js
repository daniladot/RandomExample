import React from 'react'
import classes from './ExampleList.module.scss'
import ExampleRow from './ExampleRow/ExampleRow'
import {connect} from 'react-redux'
import Button from '../UI/Button/Button'

const ExampleList = (props) => {

    const clickNext = () => {
        props.onNullifyCountAnswer()
        let flagAnswer = true
        props.store.mathematicExample.forEach(elem => {
            if (elem.answerUser === '') {
                flagAnswer = false
            }
        })

        if (flagAnswer) {
            props.store.mathematicExample.forEach((elem, index) => {
                if (+elem.answerUser === elem.answer) {
                    props.onCheckGoodClick({statusAnswer: true, index: index, good: true})
                } else {
                    props.onCheckBadClick({statusAnswer: false, index: index, bad: true})
                }
            })
        } else {
            props.onSpaceAnswer()
        }
    }

    return (
        <div className={classes.ExampleList}>
            {props.store.mathematicExample.map((elem, index) => (
                <ExampleRow
                    key={index}
                    example={elem.example}
                    statusAnswer={elem.statusAnswer}
                    index={index}
                />
            ))}
            {
                (props.store.spaceAnswer === false)
                    ? <div className={classes.SpaceAnswer}>{props.store.name}. Все ответы должны быть заполнены!</div>
                    : (props.store.countGoodAnswer === 10)
                    ? <div className={classes.GoodAnswer}>{props.store.name}, Вы Молодец! <span>Количество правильных
                        ответов: {props.store.countGoodAnswer}.</span> <span>Количество неверных
                        ответов: {props.store.countBadAnswer}</span></div>
                    : (props.store.countBadAnswer !== 0)
                        ? <div className={classes.BadAnswer}>{props.store.name}, Вы Молодец, но есть над чем работать!
                            <span>Количество правильных ответов: {props.store.countGoodAnswer}.</span> <span>Количество неверных
                            ответов: {props.store.countBadAnswer}</span></div>
                        : null

            }
            <Button
                click={clickNext}
                text='Далее'
            />
        </div>
    )
}

export default connect(
    state => (
        {
            store: state
        }
    ),
    dispatch => (
        {
            onCheckGoodClick: store => {
                dispatch({type: 'ON_CHECK_GOOD_ANSWER', payload: store})
            },
            onCheckBadClick: store => {
                dispatch({type: 'ON_CHECK_BAD_ANSWER', payload: store})
            },
            onSpaceAnswer: store => {
                dispatch({type: 'ON_SPACE_ANSWER', payload: store})
            },
            onNullifyCountAnswer: store => {
                dispatch({type: 'ON_NULLIFY_COUNT_ANSWER', payload: store})
            }
        }
    )
)
(ExampleList)

