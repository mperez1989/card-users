import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import "./styles/formUser.css"

const FormUser = ({ createUser, infoUpdate, updateUsers, setinfoUpdate, closeForm, setCloseForm}) => {

  const {handleSubmit, register, reset} = useForm()

  useEffect(() => {
    reset(infoUpdate)

  } , [infoUpdate])

  const submit = data => {
    if(infoUpdate) {
      updateUsers("/users", infoUpdate.id, data)
      setinfoUpdate()

    } else{
        createUser("/users" , data)
      }
      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
      })

  }

  const handleClose = () => {
    setCloseForm(true)
  }

  const handleStop = (e) => {
    e.stopPropagation()
  }


 return (
    <div onClick={handleClose} className={`formUser-container ${closeForm && "close-form"}` }>
      <form onClick={handleStop} onSubmit={handleSubmit(submit)} className="formUser">
      <h2 className="formUser__title">{infoUpdate ? "Update" : "New User"}</h2>
      <div onClick={handleClose} className="formUser__close">x</div>
      <div className="formUser__group">
        <label className="formUser__label"  htmlFor="email">Email</label>
        <input className="formUser__input" {...register("email")} type="email" id="email" placeholder="Email" />
      </div>
      <div className="formUser__group">
        <label className="formUser__label" htmlFor="password">Password</label>
        <input className="formUser__input" {...register("password")} type="password" id="password" placeholder="Password" />
      </div>
      <div className="formUser__group">
        <label className="formUser__label" htmlFor="first_name">First name</label>
        <input className="formUser__input" {...register("first_name")} type="text" id="first_name" placeholder="First Name" />
      </div>
      <div className="formUser__group">
        <label className="formUser__label" htmlFor="last_name">Last name</label>
        <input className="formUser__input" {...register("last_name")}  type="text" id="last_name"  placeholder="Last Name"/>
      </div>
      <div className="formUser__group">
        <label className="formUser__label" htmlFor="birthday">Birthday</label>
        <input className="formUser__input" {...register("birthday")} type="date" id="birthday" />
      </div>
      
      <button className="formUser__btn">{infoUpdate ? "update" : "Create New User"}</button>
    </form>
    </div>
  )
}

export default FormUser