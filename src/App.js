import React,{useState,useEffect} from 'react';
import User from './components/user/user';
import AddUser from './components/user/adduser';

function App() {
  let [users,setUsers] = useState([]) 
  let [toShow,Show] = useState(false)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        let rawUsers = data.results;
        let filteredUsers = rawUsers.map(usr => ({
          uuid: usr.login.uuid,
          name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
          phone: usr.phone,
          cell: usr.cell,
          image: usr.picture.thumbnail
        }));
        console.log(filteredUsers);
        setUsers(filteredUsers);
      })
      .catch(err => console.log(err));
  }, []); // Empty dependency array to run once

  const userRemoveHandler = (uuid) => {
    alert('are you sure to do this?')
    let remainUsers=users.filter(urs => urs.uuid != uuid)
    setUsers(remainUsers);
  }
  
  const showHandler = () => {
    Show(!toShow)
  }

  const userAddHandler = (user) => {
    let newusers =  [user,...users]
    setUsers(newusers)
    Show(!toShow)
  }

  return (
      <div className='container my-5'>
        <h1 className='text-center text-info my-5'>Our Employee</h1>
        <button className='btn btn-primary btn-sm my-5' onClick={showHandler}>Add user</button>
        {toShow && <AddUser addUser={userAddHandler}></AddUser>}
        {
          users.map(usr => <User key={usr.uuid} data={usr} remove={userRemoveHandler}></User>)
        }
      </div>
        
     

  )
    
        

       
}

export default App;


