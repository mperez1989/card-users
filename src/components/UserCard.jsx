import { useState } from "react"
import "./styles/userCard.css"

const UserCard = ({ user, deleteUsers, setinfoUpdate, handleModle}) => {

  const [closeDelete, setCloseDelete] = useState(true)

  const handleDelete = () => {
        deleteUsers("/users", user.id)
        

  }
  const handleOpenDelete = () => {
    setCloseDelete(false)

  }
  const handleCloseDelete = () => {
    setCloseDelete(true)

  }

  const handleEdit = ()=> {
        setinfoUpdate(user)
        handleModle()

  }
  return (
    <div className="userCard_Container">
      <article className="userCard">
      <h3 className="userCard__text">{`${user.first_name} ${user.last_name}`}</h3>
      <ul className="userCard__list">
        <li><span className="userCard__items">Email </span><br /><span className="second-text-card">{user.email}</span></li>
        <li><span className="userCard__items">Birthday </span ><br /><span className="second-text-card">🎈{user.birthday}</span></li>
      </ul>
      <h4 className="userCard__id">#{`${user.id}`}</h4>
      <button className="userCard__btn__delete" onClick={handleOpenDelete}></button>
      <button  className="userCard__btn__edit" onClick={handleEdit}></button>
    </article>
    <div onClick={handleCloseDelete} className={`card_conteiner ${closeDelete && `card_conteiner_close`}`}>
    <div onClick={ e => e.stopPropagation()} className="delete_card">
      <h3>Delete User</h3>
      <div onClick={handleCloseDelete}>X</div>
      <p className="delete_text">{`User ${user.first_name} ${user.last_name} has was delete`}</p>
      <button onClick={handleDelete} className="delete_btn">Agree</button>
    </div>
    </div>

    </div>
  )
}

export default UserCard