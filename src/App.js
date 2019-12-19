import React, { useState } from "react"

import "./App.css"
import Form from "./Form"
import Team from "./Team"

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      name: "Steve",
      email: "email@email.com",
      role: "Full Stack Web Developer"
    }
  ])

  const [memberToEdit, setMemberToEdit] = useState([])

  const editMember = item => {}

  console.log(teamMember)
  return (
    <div className="App">
      <Form teamMember={teamMember} setTeamMember={setTeamMember} />
      {teamMember.map(item => {
        return <Team teamMember={item} />
      })}
    </div>
  )
}

export default App
