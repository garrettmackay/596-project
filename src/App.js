import { Routes, Route } from 'react-router-dom';
import IndustryPage from './pages/industry';
import ThreatPage from './pages/threat';
import TeamPage from './pages/team';
import './App.css';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './components/header'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle'
function App() {
  return (
    <>

      <ResponsiveAppBar />
      <Alert severity="warning" ><AlertTitle>Disclaimer</AlertTitle> All content on this site is for educational purposes only.</Alert>

      <div style={{ height: "calc(100vh - 170px)" }}>
      <Box sx={{ flexGrow: 1,padding:4 }} >
        <Grid container spacing={2}>
          <Routes>
            <Route index path='' element={<IndustryPage />} />
            <Route path='industry' element={<IndustryPage />} />
            <Route path='team' element={<TeamPage />} />
            <Route path='threats' element={<ThreatPage />} />
          </Routes>
        </Grid>

      </Box>
      </div>

      <div style={{ textAlign: 'right', marginRight: '20px', fontSize: '.1em' }}>
        App: {process.env.REACT_APP_NAME} {process.env.REACT_APP_VERSION}
      </div>
    </>
  );
}

export default App;
