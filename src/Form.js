import React, { useState } from "react"

function Form(props) {
  console.log(props)

  const [newTeamName, setNewTeamName] = useState("")
  const [newTeamEmail, setNewTeamEmail] = useState("")
  const [newTeamRole, setNewTeamRole] = useState("")

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          props.setTeamMember([
            { name: newTeamName, email: newTeamEmail, role: newTeamRole },
            ...props.teamMember
          ])
        }}
      >
        <label>
          Name:
          <input
            onChange={e => {
              setNewTeamName(e.target.value)
            }}
            value={newTeamName}
          />
        </label>
        <label>
          E-mail:
          <input
            onChange={e => {
              setNewTeamEmail(e.target.value)
            }}
            value={newTeamEmail}
          />
        </label>
        <label>
          Role:
          <input
            onChange={e => {
              setNewTeamRole(e.target.value)
            }}
            value={newTeamRole}
          />
          <button value="submit">Submit</button>
        </label>
      </form>
    </div>
  )
}

export default Form
