import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import { Skeleton, Box } from '@mui/material';

const RatingChart = ({ chartsData }) => {
    const [ratingData, setRatingData] = useState({
        labels: [],
        datasets: [],
    });
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (chartsData) {
            // const counts = {};    
            // for (const num of arr) {
            //     counts[num] = counts[num] ? counts[num] + 1 : 1;    //occurrence counter
            // }
            const counts = { "4.75 to 5": 0, "4.5 to 4.75": 0, "4.25 to 4.5": 0, "4 to 4.25": 0, "Below 4": 0 };
            for (const num of chartsData) {
                if (num.rating <= 5 && num.rating >= 4.75)
                    counts["4.75 to 5"] = counts["4.75 to 5"] + 1;
                else if (num.rating < 4.75 && num.rating >= 4.5)
                    counts["4.5 to 4.75"] = counts["4.5 to 4.75"] + 1;
                else if (num.rating < 4.5 && num.rating >= 4.25)
                    counts["4.25 to 4.5"] = counts["4.25 to 4.5"] + 1;
                else if (num.rating < 4.25 && num.rating >= 4)
                    counts["4 to 4.25"] = counts["4 to 4.25"] + 1;
                else
                    counts["Below 3"] = counts["Below 3"] + 1;

                // counts[num.rating] = counts[num.rating] ? counts[num.rating] + 1 : 1;
            }

            const data = Object.values(counts);
            const ratingLabels = Object.keys(counts);
            // console.log("Rating", counts)
            const dataSource = {
                labels: ratingLabels,
                datasets: [
                    {
                        label: 'Rating',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)'],
                    },
                ],
            };
            setRatingData(dataSource);
            setLoader(false);
        }
    }, [chartsData]);

    const options = {
        responsive: true,
        circumference: 360
    };

    return (
        <> {loader ?
            <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton> :
            <Box display="flex"
                justifyContent="center"
                alignItems="center" sx={{ boxShadow: 5, height: 20 + "rem", padding: 1 + "rem", backgroundColor: "white" }}>
                <Pie data={ratingData} options={options} />
            </Box>}
        </>
    )
}

export default RatingChart;