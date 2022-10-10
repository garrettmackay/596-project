import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/header';
import DataPage from './pages/data';
import GarminDataPage from './pages/garmin-data';
import IndustryPage from './pages/industry';
import TeamPage from './pages/team';
import ThreatPage from './pages/threat';
const styles = {
  alert: {
    mt: 3, mb: 1
  },
  pages: {
    flexGrow: 1
  }
}

function App() {


  return (
    <>

      <ResponsiveAppBar />
      <Container maxWidth='xl'>
        <Alert severity="warning" sx={{ ...styles.alert }}>
          <AlertTitle>Disclaimer</AlertTitle> All content on this site is for educational purposes only.
        </Alert>
        <Routes>
          <Route index path='' element={<IndustryPage />} />
          <Route path='industry' element={<IndustryPage />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='threats' element={<ThreatPage />} />
          <Route path='data' element={<DataPage />} />
          <Route path='data/garmin' element={<GarminDataPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
