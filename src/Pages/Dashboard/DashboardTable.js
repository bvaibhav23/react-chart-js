import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DashboardTable = ({ orders }) => {
    const [row, setRow] = useState(null);
    useEffect(() => {
        if (orders) {
            setRow(orders.slice(0, 5));
        }
    }, [orders])

    function BasicTable() {
        return (<>
            <TableContainer sx={{ boxShadow: 5, height: 20 + "rem" }} component={Paper}>
                <Table size='large' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Title</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Quantity</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row &&
                            row.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.title}</TableCell>
                                    <TableCell align="center">{item.quantity}</TableCell>
                                    <TableCell align="center">{item.price}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
        );
    }
    return (
        <BasicTable />
    )
}

export default DashboardTable;
