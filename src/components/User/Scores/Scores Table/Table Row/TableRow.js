import React from 'react'
import TableDataCell from '../Table Data Cell/TableDataCell';

import classes from './TableRow.module.css';

const TableRow = ({ userDetails, userScore, rank, isTableHead, theUser }) => {

    const { firstName, lastName } = userDetails;
    const { beginner, amateur, medium, hard, expert } = userScore;

    let trClasses = classes.tr;
    if (isTableHead) {
        trClasses = classes["tr-header"];
    }
    if (theUser) {
        trClasses = classes["tr-user"];
    }


    return (
        <tr className={trClasses} >
            <TableDataCell className={classes["rank-cell"]} isTableHead={isTableHead ? true : false} cellData={rank} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={firstName} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={lastName} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={beginner} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={amateur} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={medium} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={hard} />
            <TableDataCell isTableHead={isTableHead ? true : false} cellData={expert} />
        </tr>
    )
}

export default TableRow