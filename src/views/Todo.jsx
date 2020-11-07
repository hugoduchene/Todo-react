import React, {useState} from 'react';

import CardTodo from '../components/CardTodo'
import FormText from '../components/FormText'
import ButtonEdit from '../components/ButtonEdit'
import ButtonCreateTodo from '../components/ButtonCreateTodo'
import ModalTodo from '../components/ModalTodo'

import styles from '../assets/css/todo.css'

const Todo = () => {
    const [todoitems, setTodoItems] = useState([])
    const [inputValue, setInputValue] = useState({})
    const [class_modal, setClassModal] = useState("modal_todo none")
    
    const changetitle = (e) => {
        setInputValue({...inputValue, title:e.target.value})
    }

    const changedescription = (e) => {
        setInputValue({...inputValue, description: e.target.value})
    }

    const show_modal = (e) => {
        setClassModal("modal_todo")
    }

    const addcard = (e) => {
        e.preventDefault()
        setTodoItems([...todoitems, inputValue])
        setClassModal("modal_todo none")
        setInputValue({...inputValue, description: "", title: ""})
    }

    return (<div>
        <div className="container box_todo">
            <div className="entire_width sub_box_todo">
                <div className="head_card_todo">
                    <h1>Reminders</h1>
                    <ButtonEdit class="edit"/>
                </div>

                <div className="box_content_todo">
                    {todoitems.map((array, i) => <CardTodo 
                    delete={() => {
                        setTodoItems([...todoitems.splice(i, i)])
                    }}
                    key={i}
                    content={array.title} 
                    description={array.description} 
                    />)}
                </div>
            </div>

            <ButtonCreateTodo action={show_modal}/>
        </div>
        <ModalTodo 
        class={class_modal}
        value_description={inputValue.description}
        value_title={inputValue.title || ""}
        action_title={changetitle}
        action_description={changedescription}
        action_add={addcard}
        />
    </div>
    )
}

export default Todo;