import { Container } from '@mui/material';
import React, { useEffect } from 'react'

const Orders = () => {
    useEffect(() => {
        document.title = "Admin | Orders";
    },
        // eslint-disable-next-line
        []);


    return (
        <Container>Orders</Container>
    )
}

export default Orders;