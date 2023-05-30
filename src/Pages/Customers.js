import { Container } from '@mui/material';
import React, { useEffect } from 'react';


const Customers = () => {
    useEffect(() => { document.title = "Admin | Customers" }, []);

    return (
        <Container>Customers</Container>
    )
}

export default Customers;