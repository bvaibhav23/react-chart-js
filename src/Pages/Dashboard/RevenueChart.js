import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { Skeleton, Box } from '@mui/material';

const RatingChart = ({ chartsData }) => {
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
            const data = chartsData.map((product) => {
                return product.price;
            });

            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Order Revenue',
                        data: data,
                        fill: true,
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        tension: 0.4,
                        pointStyle: "circle"
                    },
                ],
            };

            setRevenueData(dataSource);
            setLoader(false);
        }
    }, [chartsData]);

    const options = {
        type: "line",
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: false,
                text: "Order Revenue",
            },
            tooltip: {
                titleColor: "#fff",
                cornerRadius: 15
            }
        },
    };

    return (
        <> {loader ?
            <Skeleton variant="rectangular" width="100%" animation="pulse">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton> :
            <Box display="flex"
                justifyContent="center"
                alignItems="center" sx={{ boxShadow: 5, height: 20 + "rem", padding: 1 + "rem", backgroundColor: "white" }}>
                <Line data={revenueData} options={options} />
            </Box>}
        </>
    )
}

export default RatingChart;