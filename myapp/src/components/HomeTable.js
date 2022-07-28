import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(name,present,absent,pertiontage) {
    return { name,present,absent,pertiontage };
  }
  const row =[
      createData('ADA',2,1,66),
      createData('ADA',2,1,66),
      createData('ADA',2,1,66),
      createData('ADA',2,1,66),
      createData('ADA',2,1,66),

  ];


export default function HomeTable(){
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell align="right">present</TableCell>
                        <TableCell align="right">absent</TableCell>
                        <TableCell align="right">pertiontage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.present}</TableCell>
                    <TableCell align="right">{row.absent}</TableCell>
                    <TableCell align="right">{row.pertiontage}</TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}