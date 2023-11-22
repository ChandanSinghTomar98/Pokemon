import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState ,useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import {readAllData,deletedata,updateData} from '../store/action/action'
import API_URL from '../service'

const Maintable = () => {

  const dispatch = useDispatch();
  const Data = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [tabledata,settabledata]=useState([])
  const [name,setname]=useState("")
  const [breed,setbreed]=useState("")
  const [description,setdescription]=useState("")
  const [id, setId] = useState(null);
  console.log("id aaygi",id)
  const handlename=(e)=>{
    setname(e.target.value)
  }

  const handlebreed=(e)=>{
    setbreed(e.target.value)
  }

  const handledescription=(e)=>{
    setdescription(e.target.value)
  }
  
  useEffect(() => {
    if (Data !== null && Data !== undefined) {
      if (

        Data.readAllPokemon !== null &&
        Data.readAllPokemon !== undefined
      ) {
        
        if (
          Data.readAllPokemon.data !== null &&
          Data.readAllPokemon.data !== undefined
        ) {
          console.log("Data.readAllPokemon.data",Data.readAllPokemon.data)
          settabledata(Data.readAllPokemon.data);
          setname(Data.readAllPokemon.data.name)
          
          setbreed(Data.readAllPokemon.data.breed)
          setdescription(Data.readAllPokemon.data.description)
          //setFarmerListData(Data.getAllData.data);
        }
      }
    }
  }, [Data]);

  useEffect(() => {
    dispatch(readAllData(API_URL));
  }, [dispatch]);

  const handleSetId = (id,item) => {
    console.log("gff",item.name)
     setId(id);
    //setIdedit(item.id);
    setname(item.name)     
    setbreed(item.breed)
    setdescription(item.description)
  };


  const handleDelete = (inputid) => {
    // Handle delete action here
   
    const data = inputid
  
  

    dispatch(deletedata(API_URL, data));
  
  };

  function handleAdd() {
    const ids=id
    const data = {

      name: name,
      breed: breed,
      description: description,
     
    };
    dispatch(updateData(API_URL, ids,data));
    
    setname("");
    setbreed("");
    setdescription("");
    handleClose();
  }
 // start table code
 function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// end table code 

//start dialog box code
 

const handleClickOpen = (item) => {
  console.log("clicked",item.name) 
    setOpen(true);
    setname(item.name)     
    setbreed(item.breed)
    setdescription(item.description)

 };

 const handleClose = () => {
   setOpen(false);
 };
//end dialog box code
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='col-8'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Breed</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.breed}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              
              <TableCell align="right"onClick={(e) => handleSetId(row._id,row)}><span  onClick={(e) => handleClickOpen(row)}><EditIcon/></span></TableCell>
              <TableCell align="right"><span  onClick={(e) => handleDelete(row._id)}><DeleteForeverIcon/></span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ Width: 'lg' }} 
    >
    <h5 className='m-2'>Update Information</h5>
     <DialogContent>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
          
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
        <Button onClick={handleAdd}  variant="contained" color="success" startIcon={<AddIcon/>} autoFocus>
          Update
        </Button>
        <Button onClick={handleClose} variant="contained" color="error" startIcon={<CloseIcon/>}>
          Close
        </Button>
       
      </DialogActions>
    </Dialog>
      
    </div>
  )
}

export default Maintable
