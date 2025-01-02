import { useEffect,useState } from "react"
import { getNotes } from "../../../endpoints/api"

const Menu = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchNotes = async ()=>{
            const notes = await getNotes()
            setNotes(notes)
        }
        fetchNotes()
    })

  return (
    <h1>menu</h1>
  )
}

export default Menu;