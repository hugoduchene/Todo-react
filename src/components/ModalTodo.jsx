import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalTodo = (props) => {
    return(<div className={props.class}>
        <form className="form_modal">
            <input 
            type="text" 
            placeholder="Titre" 
            className="form-control" 
            value={props.value_title}
            onChange={props.action_title}/>
            
            <textarea 
            cols="30" 
            rows="10" 
            className="form-control" 
            placeholder="Description,..." 
            value={props.value_description}
            onChange={props.action_description}
            ></textarea>
            
            <button className="btn-add-todo" onClick={props.action_add}>Ajouter</button>
        </form>
    </div>)
}

export default ModalTodo;