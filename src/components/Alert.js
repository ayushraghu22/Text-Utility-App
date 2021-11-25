import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }

    return (
        <div style={{height:'45px'}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}!</strong> {props.alert.message}
            </div>}
        </div>
    )
}
