import React, { useEffect, useState } from 'react';
import { getJobsPopularity } from '../../server/db-queries';
import CandleWrapper from './CandleWrapper';

const ChartContainer = () => {

    const [chartData, setChartData] = useState(null)
    const [highestCounter, setHighestCounter] = useState(null)

    const handleHighestCounter = (data) => {
        let highest = 0
        data.forEach(element => {
            if (element.counter > highest) highest = element.counter
        });
        setHighestCounter(highest)
    }


    useEffect(() => {
        getJobsPopularity().then(data => {
            if (data) {
                handleHighestCounter(data)
                setChartData(data)
            }
        })
    }, [])


    return (
        <div className='chart-container' >
            {
                !!chartData &&
                chartData.map((data, i) => {
                    return <CandleWrapper key={i} data={data} highestCounter={highestCounter} />
                })
            }
        </div >
    );
};

export default ChartContainer;