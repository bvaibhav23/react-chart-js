import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { Box, Skeleton } from '@mui/material';

const PriceVsDiscount = ({ chartsData }) => {
    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets: [],
    });
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        if (chartsData) {
            // console.log("chartsData", chartsData)
            const labels = chartsData.map((product) => {
                return `User-${product.id}`;
            });
            const discountData = chartsData.map((product) => {
                let discountedValue = product.price * (1 - product.discountPercentage / 100);
                return discountedValue;
            });
            const PriceData = chartsData.map((product) => {
                return product.price;
            });
            const dataSource = {
                labels,
                datasets: [
                    {
                        label: "DiscountedPrice",
                        data: discountData,
                        backgroundColor: "rgba(255, 0, 0, 0.51)",
                        borderRadius: 10,
                        order: 0,
                        categoryPercentage: 0.75
                    },
                    {
                        label: "Price",
                        data: PriceData,
                        backgroundColor: "rgba(0, 0, 0, 0.41)",
                        borderRadius: 10,
                        order: 1,
                        categoryPercentage: 0.76
                    },
                ],
            };
            setRevenueData(dataSource);
            setLoader(false);
        }

    }, [chartsData]);

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
            },
        },
        legend: {
            display: false
        },
    }

    return (<>
        {loader ? <Skeleton variant="rectangular" width="100%" animation="pulse">
            < div style={{ paddingTop: '57%' }
            } />
        </Skeleton > :
            <Box display="flex"
                justifyContent="center"
                alignItems="center" sx={{ boxShadow: 5, height: 20 + "rem", padding: 1 + "rem", backgroundColor: "white" }}>

                <Bar options={options} data={revenueData} />
            </Box>}
    </>
    )
}

export default PriceVsDiscount;