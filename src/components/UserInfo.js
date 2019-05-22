import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {getUsers} from '../actions/users';

function Info({getUsers}) {
   const [users, setUsers] = useState({})
   const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = () => {
      getUsers().then(
       (response) => {
         console.log('start')
         setUsers(JSON.parse(response.data)[0])
         setLoading(false)
       }
     )
     .catch((error) => {
     })
    }

    fetchUser();
  }, [getUsers])


    const InfoData = 
    <div className="container">
    {
      Object.keys(users).map(key => (
        <p key={key}>
          <span>{key}:</span>
          <span>{users[key]}</span>
        </p>
      ))
      }
    </div>

    return (
      loading ? <div>Loading...</div> : InfoData
    )
}

export default connect(null, {getUsers})(Info)
