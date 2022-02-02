import React from 'react';

const CandleWrapper = (props) => {
    const {
        job,
        counter
    } = props.data

    const heightPercentage = counter / props.highestCounter * 100
    const height = {
        height: heightPercentage
    }

    return (
        <div className='candle-wrapper'>

            <div>
                {counter}
            </div>

            <div className='candle-bar'>
                <div style={height} />
            </div>

            <div>
                {job}
            </div>

        </div>
    );
};

export default CandleWrapper;