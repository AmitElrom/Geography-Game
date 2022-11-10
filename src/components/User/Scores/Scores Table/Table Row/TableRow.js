import React from 'react'
import TableDataCell from '../Table Data Cell/TableDataCell';

import classes from './TableRow.module.css';

const TableRow = ({ userDetails, userScore, rank, theUser }) => {

    const { firstName, lastName } = userDetails;
    const { beginner, amateur, medium, hard, expert } = userScore;

    let trClasses = classes.tr;
    if (theUser) {
        trClasses = classes["tr-user"];
    }


    return (
        <tr className={trClasses} >
            <TableDataCell className={classes["rank-cell"]} cellData={rank} />
            <TableDataCell cellData={firstName} />
            <TableDataCell cellData={lastName} />
            <TableDataCell cellData={beginner} />
            <TableDataCell cellData={amateur} />
            <TableDataCell cellData={medium} />
            <TableDataCell cellData={hard} />
            <TableDataCell cellData={expert} />
        </tr>
    )
}

export default TableRow