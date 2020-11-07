import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { propTypes } from 'react-bootstrap/esm/Image';

const ButtonCreateTodo = (props) => {

    return(
        <div className="btn-plus" onClick={props.action}>
            <FontAwesomeIcon icon={faPlus} />
        </div>
    )
}

export default ButtonCreateTodo;