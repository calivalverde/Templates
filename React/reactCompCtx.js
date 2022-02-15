import { useContext } from "react"

// Context
import { CompContext } from "../../context/compContext"

export default function Comp() {
  const context = useContext(CompContext)
  return (
    <div>
      <h1>New Comp</h1>
    </div>
  )
}
