import React from "react";

function User(props) {
   const removeUser = () => {
        props.remove(props.data.uuid)
    }

    return (
        <div className="card mb-2">
         <div className="row">
         <div className="col-2">
          <img src={props.data.image} width={'50px'} height={'50px'}></img>
         </div>
         <div className="col-5">
          <strong>Ph: {props.data.phone}</strong><br/>
          <strong>Cell: {props.data.cell}</strong>
         </div>
         <div className="col-3 mt-2">{props.data.name}</div>
         <div className="col-2">
          <button className='btn btn-danger btn-sm mt-2' onClick={removeUser}>
            <i className="fa fa-trash"></i>
          </button>
         </div>
         </div>
        </div>
    )
}

export default User;