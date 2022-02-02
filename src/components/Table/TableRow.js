import React, { useEffect, useState } from 'react';
import { getHighestSalary } from '../../server/db-queries';

const TableRow = (props) => {

    const {
        job,
        salary
    } = props.data

    const [personName, setPersonName] = useState(null)

    useEffect(() => {
        getHighestSalary(job).then(data => {
            if (data) {
                setPersonName(data.person_name)
            }
        })
    }, [job])


    return (
        <div className='table-row'>
            <div>{job}</div>
            <div>{salary}</div>
            {personName ?
                <div>{personName}</div>
                :
                <div>Loading...</div>
            }
        </div>
    );
};

export default TableRow;