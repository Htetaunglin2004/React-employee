import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

class AddPost extends Component {
    state = {
        title:'',
        des:''
    }

    addUser = (e) => {
        e.preventDefault()
        this.props.addpost({id:uuidv4(),...this.state})
        this.state = {
            title:'',
            des:''
        }
        this.props.navigate('/')
    }

    
    render(){
        const {navigate} = this.props
        return(
            <div className='card bg-black text-white px-3 py-3'>
                <form onSubmit={this.addUser}>
  <div className="mb-3">
    <label htmlFor="postTilte" className="form-label">Post Title</label>
    <input type="text" className="form-control rounded-0" id="postTitle" onChange={(e) =>this.setState({title:e.target.value}) } value={this.state.title} />
  </div>
  <div className="mb-3">
    <label htmlFor="postDescription" className="form-label">Post Description</label>
    <input type="text" className="form-control rounded-0" id="postDesc" onChange={(e) => this.setState({des:e.target.value})} value={this.state.des}/>
  </div>
  <button type="submit" className="btn btn-primary btn-sm float-end">Submit</button>
</form>
            </div>
        )
    }
}

//export default AddPost;

export default (props) => {
    const Navigater = useNavigate()
    return <AddPost {...props} navigate={Navigater}></AddPost>
    
}