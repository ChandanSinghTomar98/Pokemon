import './App.css';
import React from 'react';
import { useState } from 'react';
import pikachu from "./images/pokemon.png"
import Maintable from './components/Maintable';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import API_URL from './service'
import {addData} from './store/action/action'
function App() {
  
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name,setname]=useState("")
  const [breed,setbreed]=useState("")
  const [description,setdescription]=useState("")

  const handlename=(e)=>{
    setname(e.target.value)
  }

  const handlebreed=(e)=>{
    setbreed(e.target.value)
  }

  const handledescription=(e)=>{
    setdescription(e.target.value)
  }
  
  function handleAddcountry() {
    
      const data = {
        name: name,
        breed: breed,
        description: description,
       
      };
      dispatch(addData(API_URL, data));
      
      setname("");
      setbreed("");
      setdescription("");
      handleClose();
    }
 //start dialog box code
 

 const handleClickOpen = () => {
  console.log("clicked") 
  setOpen(true);

 };

 const handleClose = () => {
   setOpen(false);
 };
//end dialog box code
  return (
    <div className="App container-fluid min-vh-100 min-vw-100 mb-4">
        <div className='d-flex justify-content-around align-items-center'>
          <div><img src={pikachu} style={{borderRadius:"50%", height:'100px'}}/>  <span style={{color:"white",fontSize:"26px",fontWeight:"660"}}>PokeMon</span> </div>
          <div className='mt-3'> <button  className="btn btn-primary" style={{ backgroundColor: '#00308F', color: 'white' }} onClick={handleClickOpen} >Add pokemon</button></div>
        </div>

        <div> <Maintable/></div>
   
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ Width: 'lg' }} 
    >
      <h5 className='m-2'>Add Information</h5>
     <DialogContent>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="name"
            
            value={name}
            onChange={handlename}
            aria-label="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">
            Breed
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="breed"
            value={breed}
            onChange={handlebreed}
            aria-label="Breed"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={handledescription}
            className="form-control form-control-lg"
            id="description"
            aria-label="Description"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddcountry} variant="contained" color="success"  startIcon={<AddIcon/>} autoFocus>
          Add
        </Button>
        <Button onClick={handleClose} variant="contained" color="error" startIcon={<CloseIcon/>}>
          Close
        </Button>
       
      </DialogActions>
    </Dialog>

    </div>
  );
}

export default App;
