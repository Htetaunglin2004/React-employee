import React, { Component } from 'react';
import {useLocation,useNavigate} from 'react-router-dom';

class EditPost extends Component {
    constructor(props){
        super(props)
        const post = this.props.state.state.post
        console.log(post)
        this.state = {
            id:post.id,
            title:post.title,
            des:post.des
        }
    }

    updatePost(e){
        e.preventDefault()
        this.props.update(this.state)
    }

     

    render(){
        

        return(
              <div className='card bg-black text-white px-3 py-3'>
                <form onSubmit={this.updatePost.bind(this)}>
  <div className="mb-3">
    <label htmlFor="postTilte" className="form-label">Post Title</label>
    <input type="text" className="form-control rounded-0" id="postTitle" onChange={(e) =>this.setState({title:e.target.value})} value={this.state.title} />
  </div>
  <div className="mb-3">
    <label htmlFor="postDescription" className="form-label">Post Description</label>
    <input type="text" className="form-control rounded-0" id="postDesc" onChange={(e) =>this.setState({des:e.target.value}) } value={this.state.des}/>
  </div>
  <button type="submit" className="btn btn-primary btn-sm float-end">Submit</button>
</form>
            </div>
        )
    }
}

export default (props) => {
     const nav =useNavigate()
     const state = useLocation()

     return <EditPost {...props} navigator={nav} state={state}></EditPost>
}