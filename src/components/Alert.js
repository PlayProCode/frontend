import React from 'react'

function Alert(props) {
    const camelCase=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <b>{camelCase(props.alert.type)}</b>: {props.alert.msg}
    </div>
  )
}

export default Alert
