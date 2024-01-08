import React from 'react';
import { Component } from 'react';
import PostCard from './postCard';
import { Link } from 'react-router-dom';
class Post extends Component {

    removeUser(id) {
        this.props.removePost(id)
    }

    render(){
        
        return(
            <div>
                <Link to="/add"><button className='btn btn-primary btn-sm float-end '><i className='fa fa-add'></i> Add Post</button><br></br><br></br></Link>
                
                {
                    this.props.data.map(post => <PostCard key={post.id} data={post}  uuid={post.id} title={post.title} description={post.des} deletePost={this.removeUser.bind(this)}></PostCard>)
                    
                }
            </div>
        )
    }
}

export default Post;