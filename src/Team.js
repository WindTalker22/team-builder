import React from "react"

function Team(props) {
  return (
    <div>
      <div>{props.teamMember.name}</div>
      <div>{props.teamMember.email}</div>
      <div>{props.teamMember.role}</div>
      <button onClick={() => console.log("clicked")}>Edit</button>
    </div>
  )
}

export default Team
