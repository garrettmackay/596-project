import { Grid, Card, Box, Typography, CardMedia, CardContent, Button } from '@mui/material';
import React from 'react';
import shodan from '../images/shodan.png'
import { useNavigate } from 'react-router-dom';

const styles = {
    head: {
        bgcolor: "#333f50",
        p: 4,
        color: 'white',
        mb: 1
    },
    textCard: {
        p: 3, mb: 1, mr: '5%', ml: '5%'
    }
}


const DataPage = () => {
    const navigate = useNavigate();

    return (<Grid container sx={{ mb: 3 }}>
        <Card sx={{ width: '100%' }}>
            <Box sx={{ ...styles.head }} >
                <Typography variant='h4'>
                    Shodan: Garmin ELD
                </Typography>
                <Button variant="outlined" style={{ color: 'white' }} onClick={() => { navigate("/data/garmin") }}>View Data</Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CardMedia component='img' image={shodan} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                <CardContent>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            Shodan is a database of publicly accessible IP addresses.  The database is used by security experts to analyze vulnerabilities on public facing infrastructure.  Shodan is a search engine much like Google, it can find anything with public IP addresses such as IoT devices and Microsoft Exchange servers.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            Shodan crawls the web 24/7 using using a global network of servers and computer to keep their databases up to date in real time.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            The transportation industry uses many IoT devices within their fleet of trucks.  Having publicly accessible IoT devices should make any cybersecurity expert nervous.  To reduce risk, you can simply limit your devices to local only connections or block unsecure ports with a firewall, use secure logins, and limit information displayed on service banners.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            We used Shodan to research vulneraries found within Garmin's Electronic Logging Devices, commonly used with trucks to communicate with the back office.
                        </Typography>
                    </Card>
                </CardContent>
            </Box>
        </Card>
        <Card sx={{ width: '100%' }}>
            <Box sx={{ ...styles.head }} >
                <Typography variant='h4'>
                    HCR: Garmin ELD: Controller Area Network Dataset
                </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CardContent sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} >
                    <Typography variant='h2'>
                        HCR Lab
                    </Typography>
                </CardContent>
                <CardContent>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            HCR Lab is a research group founded in 2010 whose research is focused on data-driven security based on machine learning and data mining methods.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            HCR Lab developed an intrusion detection system (IDS) for the automotive industry context. The system is based on the Controller Area Network (CAN) data analysis.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            Datasets are constructed by logging CAN traffic via the OBD-II port from a real vehicle while performing the message injection attacks.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            Modern vehicles consist of multiple interconnected computers called Electronic Control Units (ECUs). CAN is a common in-vehicle network protocol allowing for ECUs to communicate with one another, but also provides numerous access points or vulnerabilities to the bad actors.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            Through such vulnerabilities, adversaries can install infected apps, malware, or malicious code within the vehicle system, not only gaining access to the vehicle or even personal information, but also to the means to affect vehicle controls themselves, therefore imposing physical safety threats.
                        </Typography>
                    </Card>
                    <Card sx={{ ...styles.textCard }}>
                        <Typography variant='p'>
                            We used HCR Lab car-hacking datasets which include DoS attack, Fuzzy attack, Spoofing the drive gear, and Spoofing the RPM gauge to better understand the various message injection attacks and their impacts on vehicle malfunction.
                        </Typography>
                    </Card>
                </CardContent>
            </Box>
        </Card>

    </Grid>)
}

export default DataPage;