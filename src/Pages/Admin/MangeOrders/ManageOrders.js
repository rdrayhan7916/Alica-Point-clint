import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { Alert } from '@mui/material';

const ManageOrders = () => {
    const [confirm, setConfirm] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch(`https://guarded-temple-07884.herokuapp.com/manageorders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDelete = (id) => {
        const url = `https://guarded-temple-07884.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setConfirm(true)
            })
    }
    return (
        <div>
            <h1> Mange All Orders</h1>
            {confirm && <Alert severity="success">Delete successfully!</Alert>}
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Bike Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.bikeName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right"><button onClick={() => handleDelete(row._id)} className="btn btn-danger">Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};

export default ManageOrders;