import React, { Component } from 'react';
import UserImage from '../../images/user.png';
import { Link } from 'react-router-dom';
class PostCard extends Component {

    

    Delete() {
        this.props.deletePost(this.props.uuid)
    }

    render(){
        
        return(
            <div className='card'>
                <div className='row'>
                    <div className='col-2 mt-2 '>
                        <img src={UserImage} width='50px' height='50px' />
                    </div>
                    <div className='col-5'>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='col-5 mt-4'>
                        <Link to={`post/${this.props.uuid}`} state={{post:this.props.data}}>
                         <button className='btn btn-primary btn-sm me-2'><i className='fa fa-eye '></i></button>
                        </Link>
                        <Link to={`post/edit/${this.props.uuid}`} state={{post:this.props.data}}>
                        <button className='btn btn-warning btn-sm me-2'><i className='fa fa-edit '></i></button>
                        </Link>
                       
                        <button className='btn btn-danger btn-sm'><i className='fa fa-trash ' onClick={this.Delete.bind(this)}></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;