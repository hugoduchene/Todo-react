import React, {useState} from 'react';

const FormText = (props) => {

    return(<div>
            <form className="form">
                <input type="text" onChange={props.changeform} value={props.inputValue}/>
                <button onClick={props.addcard}>Ajouter</button>
            </form>
        </div>

    )
}

export default FormText;