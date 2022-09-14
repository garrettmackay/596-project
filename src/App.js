import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndustryPage from './pages/industry';
import ThreatPage from './pages/threat';
import TeamPage from './pages/team';
import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './components/header'
import Box from '@mui/material/Box';
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} style={{margin:15}}>
          <BrowserRouter>
            <Routes>
              <Route index element={<IndustryPage />} />
              <Route path='industry' element={<IndustryPage />} />
              <Route path='team' element={<TeamPage />} />
              <Route path='threats' element={<ThreatPage />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Box>
    </>
  );
}

export default App;
