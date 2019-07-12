import React, { useState } from "react"

const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
  (e: React.ChangeEvent<any>,) => setter(e.target.value)

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault()
  console.log("mail sent")
}  

const MailFrom: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  const handleChanges = {
    name: handleChange(setName),
    email: handleChange(setEmail),
    content: handleChange(setContent)
  }

  return (
  <form>
    <h1>
      Contact Me
    </h1>
    <div>
      <label 
        htmlFor="for-name"
      >
        Name:
      </label>
      <input 
        type="text"
        name="form-name"
        onChange={handleChanges.name}
        value={name}
      />
    </div>

    <div>
      <label 
        htmlFor="for-email"
      >
        Email:
      </label>
      <input 
        type="email"
        name="form-email"
        onChange={handleChanges.email}
        value={email}
      />
    </div>
    <div>
      <label 
        htmlFor="for-content"
      >
        Content:
      </label>
      <textarea 
        name="form-content"
        onChange={handleChanges.content}
        value={content}
      ></textarea>
    </div>

    <button
      onClick={handleSubmit}
    >
      Submit
    </button>

  </form>
  )
}

export default MailFrom