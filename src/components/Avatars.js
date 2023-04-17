import axios from "axios"
import {useState, useEffect} from "react"

const Avatars = () => {
    const [avatars, setavatars] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/avatars")
        .then((res) => {
            setavatars(res.data)
        })
    },[])

    const selectAvatar = (URL) => {
        axios.patch("http://localhost:4000/selectavatar", {
          url: URL
        }).then((res) => {
          console.log(res)
        }).catch((err) => console.log(err))
    }
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Select your Avatar</h1>
        <div className="grid grid-cols-3 gap-4">
          {avatars.map((avatar) => {
            return (
              <div key={avatar._id}className="rounded-lg overflow-hidden shadow-lg">
                <img onClick={() => selectAvatar(avatar.avatar_url)} className="h-48 w-full object-cover" src={avatar.avatar_url} alt={avatar.avatar_alt} />
              </div>
            )
          })}
        </div>
      </div>
      
    )
}

export default Avatars