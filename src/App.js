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
import Container from '@mui/material/Container';
import background from './images/background-1.jpg'
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
        <Grid container direction='column'>
          <Alert severity="warning" sx={{ ...styles.alert }}>
            <AlertTitle>Disclaimer</AlertTitle> All content on this site is for educational purposes only.
          </Alert>
          <Box sx={{ ...styles.pages }} >
            <Routes>
              <Route index path='' element={<TeamPage />} />
              <Route path='industry' element={<IndustryPage />} />
              <Route path='team' element={<TeamPage />} />
              <Route path='threats' element={<ThreatPage />} />
            </Routes>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default App;
