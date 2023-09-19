
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setinfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)
  

  const baseUrl = `https://users-crud.academlo.tech`

  const [users, getUsers, createUser ,deleteUsers, updateUsers] = useFetch(baseUrl, setCloseForm)
  

  useEffect(() => {
    getUsers("/users")
  }, [])

  const handleModle = ()=> {
    setCloseForm(false)

  }

  return (
    <div>
      <h1 className='title'>Users</h1>
      <button onClick={handleModle} className='formUser__btn__principal'> + Creat New User</button>
        <FormUser
          createUser={createUser}
          infoUpdate={infoUpdate}
          updateUsers={updateUsers}
          setinfoUpdate={setinfoUpdate}
          closeForm={closeForm}
          setCloseForm={setCloseForm}
        ></FormUser>
      <div className='card__conteiner'>
        {
          users?.map(user=> (
            <UserCard
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setinfoUpdate={setinfoUpdate}
              handleModle={handleModle}              
            ></UserCard>

          ))
        }
      </div>
    </div>
  )
  
}

export default App
