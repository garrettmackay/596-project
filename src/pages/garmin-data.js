import React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Container, Grid } from '@mui/material';
import data1 from '../data/garmin.json';
const garminData = data1['Raw Data'].map((r,i)=>{return {id:i,...r}});
const columnNames = Object.getOwnPropertyNames(garminData[0])
const columns = columnNames.map(r => { return { "field": r } });

const GarminDataPage = () => {
    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 4,
        maxColumns: 6,
    });
    console.log(columns);
    return (
        <Container maxWidth='xl'>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <h1 >Shodan: Garmin ELD Data</h1>
            </Grid>

            <div style={{ height: 600, width: '100%' }}>
                <DataGrid columns={columns} rows={garminData} loading={loading} components={{ Toolbar: GridToolbar }} />
            </div>
        </Container>);
}
export default GarminDataPage;