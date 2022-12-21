import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  
  const getDatos =  ()=>{ 
  axios.get('https://peliculas-back-production-91ac.up.railway.app/peliculas')
   .then((resp) =>{
    setData(resp.data[0])
    console.log(resp)
  })
  }

  useEffect(() =>{
    getDatos()
  },[])
  return (
    
    <Box 
    sx={{
      width: 900,
      height: 600,
      backgroundColor: 'danger',
      m: "auto"
    }}>
      <h1>Peliculas</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Categoria</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.categoria}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default App;
