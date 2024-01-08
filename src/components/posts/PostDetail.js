import react, { Component } from 'react'
import image from '../../images/user.png'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
class PostDetail extends Component{
    
    render(){
        let post = this.props.state.state.post
        return(
            <div>
                <Link to="/">
                <button className='btn btn-primary'><i className='fa fa-arrow-left'></i></button>
                </Link>
               
                <div className="card" >
  <img src={image} className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.des}</p>
    
  </div>
</div>
            </div>
        )
    }

}

export default (props) => {
    const state = useLocation()
    return <PostDetail {...props} state={state}></PostDetail>
}