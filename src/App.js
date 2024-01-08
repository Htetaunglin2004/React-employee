import React,{useState , useEffect} from 'react';
import Post from './components/posts/post';
import AddPost from './components/posts/Addpost';
import PostDetail from './components/posts/PostDetail';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import EditPost from './components/posts/EditPost';

function App(){
 const END_POINT = 'http://localhost:7000'
 let [posts,setPost] = useState([]);
 
const addpost = async(data) => {
  await fetch(`${END_POINT}/posts` , {
    method:'POST',
    body:JSON.stringify({
      title:data.title,
      des:data.des
    }),
    headers:{
      'content-type':'application/json'
    }
  })
  


   setPost([data,...posts])
   
}

useEffect( () => {

  const fetchData = async () => {
    try {
      let responeData = await fetch(`${END_POINT}/posts`) //get
      let posts = await responeData.json();
      setPost(posts)
    }catch(error){
      console.log(error)
    }
  }
 
  fetchData()
    
}, [])





const postDeleteHandler = async(id) => {

  await fetch(`${END_POINT}/posts/${id}`, {
    method:"DELETE"
  })


  
  setPost(posts.filter(post => post.id != id))
  
 
}


const updatePostHandler = async(updatePost) => {

  await fetch(`${END_POINT}/posts/${updatePost.id}`,{
    method:'PATCH',
    body:JSON.stringify(updatePost),
    headers:{
      'content-type':'application/json'
    }
  })
  setPost(posts.map(post => post.id === updatePost.id? updatePost : post))

}


  return(
    <div className='container'>
      <h1 className='text-center text-info my-5'>Posts</h1>

      <Router>
        <Routes>
          <Route path='/' element={<Post data={posts} removePost={postDeleteHandler}></Post>}></Route>
          <Route path='/add' element={<AddPost addpost={addpost} ></AddPost>}></Route>
          <Route path='/post/edit/:id' element={<EditPost update={updatePostHandler} ></EditPost>}></Route>
          <Route path='/post/:id' element={<PostDetail></PostDetail>}></Route>
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App;