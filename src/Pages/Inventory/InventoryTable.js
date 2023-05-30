import React, { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { productContext } from '../../Dynamic Data/dataContext';

const InventoryTable = () => {
    //destructure according to index [products, setProducts, carts, setCarts, filteredProducts, setFilteredProducts]
    const [, , , , filteredProducts,] = useContext(productContext)
    const [rowData, setRowData] = useState();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        if (filteredProducts)
            setRowData(filteredProducts)
    }, [filteredProducts]);

    const columns = [
        { id: 'id', label: 'Sr No.', width: 3 + "rem" },
        { id: 'title', label: 'Title', align: 'left', width: 7 + "rem" },
        { id: 'stock', label: 'Stock', align: 'center', width: 5 + "rem" },
        {
            id: 'price',
            label: 'Price',
            width: 5 + "rem",
            align: 'center',
            format: (value) => value.toLocaleString(),
        }
    ];

    const handleChangePage = (event, newPage) => {
        if (event.target.getAttribute("data-testid") === "KeyboardArrowRightIcon")
            setPage(newPage + 1);
        else if (event.target.getAttribute("data-testid") === "KeyboardArrowLeftIcon")
            setPage(newPage - 1);
        else
            setPage(newPage);
        // console.log(event.target.getAttribute("data-testid"), newPage)
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (<>{rowData && <>
        <TableContainer sx={{ height: 65 + "vh", boxShadow: 1 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead >
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ fontWeight: 'bold', width: column.width }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow bgcolor='white' hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 100]}
            component="div"
            count={rowData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e) => handleChangePage(e, page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
                padding: 0, bgcolor: "lightcoral", margin: 0
            }}
        />
    </>} </>
    );
}

export default InventoryTable;