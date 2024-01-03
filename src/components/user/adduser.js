import React, { useState } from 'react';

function AddUser(props) {

    let [image,setImage] = useState('')
    let [name,setName] = useState('')
    let [phone,setPhone] = useState('')
    let [cell,setCell] = useState('')
    let [uuid,setUuid] = useState('')

    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const phoneChangeHandler = (event) => {
        setPhone(event.target.value)
    }

    const cellChangeHandler = (event) => {
        setCell(event.target.value)
    }

    const uuidChangeHandler = (event) => {
        setUuid(event.target.value)
    }
 
    const submitChangeHandler = (event) => {
         event.preventDefault();
         let user = {
            uuid:uuid,
            name:name,
            phone:phone,
            cell:cell,
            image:image
         }
        props.addUser(user)
    }
    return(
        <div className="card px-2 my-5 bg-black text-white">
            <form onSubmit={submitChangeHandler}>
            <div className="mb-3">
    <label htmlFor="image" className="form-label">Image</label>
    <input type="text" className="form-control" id="image" onChange={imageChangeHandler}></input>
    </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={nameChangeHandler}></input>
    </div>
    <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="tel" className="form-control" id="phone" onChange={phoneChangeHandler}></input>
    </div>
    <div className="mb-3">
    <label htmlFor="cell" className="form-label">Cell</label>
    <input type="tel" className="form-control" id="cell" onChange={cellChangeHandler}></input>
    </div>
    <div className="mb-3">
    <label htmlFor="uuid" className="form-label">Uuid</label>
    <input type="text" className="form-control" id="uuid" onChange={uuidChangeHandler}></input>
    </div>
  <button type="submit" className="btn btn-primary float-end btn-sm">Create</button>
</form>
        </div>
    )
}

export default AddUser;