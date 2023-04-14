import axios from "axios"
import {useState} from "react"
import { TextField, Button} from "@mui/material"

const AddItem = () => {
    const [item, setItem] = useState("")
    const [price, setPrice] = useState("")

    const addItem = () => {
     axios.post("http://localhost:4000/add-item", {
        item: item,
        price: price
     }).then((res) => {
      setItem("")
      setPrice("")
      alert(res.data.message)
        console.log(res)
     }).catch((err) => {
          console.log(err)
         alert(err.response.data.message)

     
     })
    }
    return (
      <div className="flex flex-col w-full h-screen items-center">
    <h1>Add Item</h1>

  <TextField 
  onChange={e => setItem(e.target.value)}
  value={item}
  className="w-[200px] mt-2"
  variant="outlined" label="Item"/>
  <TextField 
    onChange={e => setPrice(e.target.value)}
    value={price}
    type="number"
  className="w-[200px] mt-2"
  variant="outlined" label="Price"/>
  <Button
  onClick={addItem}
  className="bg-black text-white w-[200px] mt-2"
  >Add Item</Button>

</div>
    )
}

export default AddItem;