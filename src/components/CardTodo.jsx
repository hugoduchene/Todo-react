import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CardTodo = (props) => {

    return (<div className="row">
        <div className="col-10">
            <h1 className="title_card">{props.content}</h1>
            <p>{props.description}</p>
        </div>

        <div className="col-2 flex_align">
            <div className="btn_trash" onClick={props.delete}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    </div>
    )
}

export default CardTodo