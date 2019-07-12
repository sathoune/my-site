import React, { useState } from "react"

interface MailFormState {
  name: string,
  email: string,
  content: string
}

const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => (
    setter(e.target.value)
  )

const handleSubmit = (values: MailFormState) => 
(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(values)
  console.log("mail sent")
}  

const MailFrom: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  const handleChanges = {
    name: handleChange(setName),
    email: handleChange(setEmail),
    content: handleChange(setContent),
    submit: handleSubmit({name, email, content})
  }


  return (
  <form
    onSubmit={handleChanges.submit}
  >
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

    <button> Submit </button>
  </form>
  )
}

export default MailFrom