import React, { Fragment } from 'react'
import './TableDataCell.css';

const TableDataCell = ({ cellData, isTableHead, className }) => {
    return (
        <Fragment>
            {isTableHead ? <th >{cellData}</th> : <td className={className} >{cellData}</td>}
        </Fragment>
    )
}

export default TableDataCell