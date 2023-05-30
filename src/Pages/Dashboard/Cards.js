import React from 'react';
import DashboardCard from './DashboardCard';

import { Stack } from '@mui/material';
const Cards = ({ orders = 0, inventory = 0, customers = 0, revenue = 0 }) => {

    const cardsLog = [{ title: "Orders", value: orders }, { title: "Inventory", value: inventory.length }, { title: "Customers", value: customers }, { title: "Revenue", value: revenue.toLocaleString() }]
    //const formattedNumber = number.toLocaleString("en-US");
    return (
        <Stack spacing={{ xs: 3, sm: 4, md: 5 }} direction="row" justifyContent="center" useFlexGap flexWrap="wrap">
            {/* useFlexGap helps in wrap */}
            {cardsLog.map((ele, index) => (<DashboardCard key={index} ele={ele} index={index} />))}
        </Stack>
    )
}

export default Cards;