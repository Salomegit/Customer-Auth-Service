import { useEffect,useState } from "react"
import { getNotes,logout } from "../../../endpoints/api"
import { useNavigate } from "react-router-dom"


const Menu = () => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    const handleLogout = async () =>{
        const success = await logout()
        if (success){
            navigate('/login')
        }
    }

    useEffect(() => {
        const fetchNotes = async ()=>{
            const notes = await getNotes()
            setNotes(notes)
        }
        fetchNotes()
    }, [])

  return (
    <>
   <div className="min-h-screen bg-gray-100 p-6">
   <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome Back User</h2>

  <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Notes</h1>
  
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {notes.map((note) => (
      <div 
        key={note.id} 
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">{note.title}</h2>
        <p className="text-gray-600">{note.description}</p>
      </div>
    ))}
  </div>
  
  <button
    className="mt-8 w-full md:w-auto bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 block mx-auto"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>
</>
  )
}

export default Menu;