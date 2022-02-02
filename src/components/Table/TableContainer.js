import React, { useEffect, useState } from 'react';
import { getAvgSalaries } from '../../server/db-queries';
import TableRow from './TableRow';

const TableContainer = () => {

    const [tableData, setTableData] = useState(null)


    useEffect(() => {
        getAvgSalaries().then(data => {
            if (data) {
                setTableData(data)
            }
        })
    }, [])


    return (

        <div className='table-container' >

            {!!tableData &&
                <div key={'main'} id="main-row" className='table-row'>
                    <div>Job</div>
                    <div>Avg salary</div>
                    <div>Person name with the highest salary in this job</div>
                </div>
            }

            {!!tableData &&
                tableData.map((data, i) => {
                    return <TableRow key={i} data={data} />
                })
            }


        </div >
    );
};

export default TableContainer;