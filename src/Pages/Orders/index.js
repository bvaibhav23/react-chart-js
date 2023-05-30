import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { fetchCart, fetchProducts } from '../../Dynamic Data/DynamicData';

// import { productContext } from '../../Dynamic Data/dataContext';

const Orders = () => {
    // const [products, setProducts, carts, setCarts] = useContext(productContext)
    useEffect(() => {
        document.title = "Admin | Orders";
        console.log(products, carts);

    }, []);
    const [carts, setCarts] = useState();
    const [products, setProducts] = useState();
    const [orders, setOrders] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {// setTimeout used to test loader
            fetchCart().then((res) => {
                setCarts(res);
                let orders = res.carts.reduce((accumulator, object) => {
                    // console.log(accumulator)
                    return accumulator + object.totalQuantity;
                }, 0);
                setOrders(orders);

                let revenue = res.carts.reduce((accumulator, object) => {
                    return accumulator + object.discountedTotal;
                }, 0);;
                setRevenue(revenue);
            });
            fetchProducts().then((res) => {
                setProducts(res);
                // console.log("products", res,products);
            });
            setLoader(false);
        }, 500);
    },
        // console.log("cart", carts, "products", products, "orders: ", orders, " inventory: ", products.total, " customers: ", carts.total, " revenue: ", revenue);
        // eslint-disable-next-line
        []);


    return (
        <Container>Orders</Container>
    )
}

export default Orders;