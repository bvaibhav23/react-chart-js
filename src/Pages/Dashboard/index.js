import React, { useEffect, useState, useContext } from 'react';
import { Grid, Skeleton, Typography } from '@mui/material';

// import { fetchCart, fetchProducts } from '../../Dynamic Data/DynamicData';
import { productContext } from '../../Dynamic Data/dataContext';
import Cards from './Cards';
import DashboardTable from './DashboardTable';
import RevenueChart from './RevenueChart';
import {
    Chart as ChartJS, Title, Tooltip, Legend, //Common

    CategoryScale, LinearScale, //Line & Bar Chart

    BarElement,//Bar Chart

    PointElement, LineElement, Filler, //Line Chart & Area Chart

    ArcElement, //Pie Chart
} from "chart.js";
import RatingChart from './RatingChart';
import PriceVsDiscount from './DiscountChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement, LineElement, Filler,
    ArcElement,
);

const Dashboard = () => {
    useEffect(() => { document.title = "Admin | Dashboard" }, []);
    //destructure according to index[products, setProducts, carts, setCarts, filteredProducts, setFilteredProducts]
    const [products, , , , filteredProducts] = useContext(productContext);

    // const [carts, setCarts] = useState();
    // const [products, setProducts] = useState();
    const [orders, setOrders] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        if (products) {
            let revenue = filteredProducts.reduce((accumulator, object) => {
                return accumulator + object.price;
            }, 0);
            setRevenue(revenue);
            setOrders(products.length);
            setLoader(false);
        }
    },
        // eslint-disable-next-line
        [filteredProducts]);
    // console.log(products);

    return (<>
        <Grid container gap={5} spacing={1} justifyContent="space-evenly" alignItems="center">
            <Grid item xs={12} sm={12} md={7}  >
                <Cards orders={orders} inventory={products} customers={30} revenue={revenue} />
            </Grid>
            <Grid item xs={12} sm={8} md={5}  >
                <Typography variant="h5" align='center' mb={2} borderBottom={1} >Revenue </Typography>
                <RevenueChart chartsData={filteredProducts} />
            </Grid>
            <Grid item xs={12} sm={8} md={5}  >
                <Typography variant="h5" align='center' mb={2} borderBottom={1} >Price VS DiscountedPrice </Typography>
                <PriceVsDiscount chartsData={filteredProducts} />
            </Grid>
            <Grid item xs={12} sm={8} md={5} >
                <><Typography variant="h5" align='center' mb={2} borderBottom={1} >Recent Orders</Typography>
                    {loader ? <Skeleton variant="rectangular" width="100%">
                        <div style={{ paddingTop: '57%' }} />
                    </Skeleton> :
                        <DashboardTable orders={filteredProducts} />
                    }</>
            </Grid>
            <Grid item xs={12} sm={8} md={5}  >
                <Typography variant="h5" align='center' mb={2} borderBottom={1} >Product Rating </Typography>
                <RatingChart chartsData={filteredProducts} />
            </Grid>
        </Grid></>)
}

export default Dashboard;