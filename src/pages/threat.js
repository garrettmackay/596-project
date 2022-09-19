import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import it1 from '../images/it-1.jpg'
import diamond1 from '../images/diamond.jpg'
import phishingDiamond from '../images/diamond-phishing.png'
import dosDiamond from '../images/diamond-dos.png'
import ccDiamond from '../images/diamond-cc.png'
import fakeDiamond from '../images/diamond-fake.png'
import ransomDiamond from '../images/diamond-ransome.png'
import phishing from '../images/phishing.jpg'
import fraud from '../images/fraud.jpg'
import gas from '../images/gas.jpg'
import ransom from '../images/ransom.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader, Typography } from '@mui/material';
const styles = {
    head: {
        bgcolor: "#333f50",
        p: 4,
        color: 'white',
        mb: 1
    },
    subhead: {
        bgcolor: "#707884",
        p: 2,
        color: 'white',
        mb: 1
    },
    sub: {
        display: 'flex',
        mb: 4
    },
    textCard: {
        p: 3, mb: 1, mr: '5%', ml: '5%'
    }
}
const ThreatPage = () => {
    return (
        <Grid container sx={{ mb: 3 }}>

            <Card sx={{ width: '100%', mb: 5 }}>
                <Box sx={{ ...styles.head }} >
                    <Typography variant='h4'>
                        Critical Assets
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia component='img' image={it1} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Computer Hardware' />
                            <CardContent>
                                <Typography variant='p'>
                                    The ultimate asset in the trucking industry is the fleet itself, therefore visibility of the fleet's current state and especially location is paramount. To make that information, available, trucks are equipped with a variety of telematic devices that significantly expand the range of the hardware assets to be managed and protected, compared to non-transportation industries.

                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Networks' />
                            <CardContent>
                                <Typography variant='p'>
                                    Networks are an essential part of the complex infrastructure ecosystem in the trucking industry. Among other things, networks enable data exchange between the back-office Transportation Management Systems (TMS) and the devices or sensors installed on trucks providing data, e.g., location, fuel levels, and vehicle maintenance, leading to the need for 'always-on' network capabilities.

                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Transportation Management Systems and ELDs' />
                            <CardContent>
                                <Typography variant='p'>
                                    Transportation Management Systems (TMS) offer capabilities in planning transportation models and schedules, optimizing vehicle load and routes, monitoring and managing fleet ‘health’ and real-time transportation tracking. They are further enabled by GPS and Electronic Logging Devices (ELDs) as well as numerous IoT devices and communication modules.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Data' />
                            <CardContent>
                                <Typography variant='p'>
                                    Critical data assets include information on what is being hauled, especially any sensitive materials or chemicals; fleet location data; data from the ELDs and fleet sensors, including speed, vehicle status and other metrics used for real-time monitoring, risk or issue identification, management and compliance.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='IoT' />
                            <CardContent>
                                <Typography variant='p'>
                                    IoT technologies and sensors are used broadly within the trucking industry enabling real-time tracking of information i.e., location, cargo temperature (in the case of food or pharmaceutical supplies transportation), fuel levels, vehicle mechanical, and maintenance state, including vibration and temperature analysis, driving habits (e.g., idle time, travel speed, and rate of acceleration/deceleration), which is often used for alerts and notifications, delivery optimizations or predictive maintenance.
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{ width: '100%' }}>
                <Box sx={{ ...styles.head }} >
                    <Typography variant='h4'>
                        Diamond Models
                    </Typography>
                </Box>
                <Box sx={{ ...styles.sub }}>
                    <CardMedia component='img' image={phishing} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Phishing' sx={{ ...styles.subhead }} />
                            <CardMedia component='img' image={phishingDiamond} />
                        </Card>
                    </CardContent>
                </Box>
                <Box sx={{ ...styles.sub }}>
                    <CardMedia component='img' image={diamond1} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Denial of Service' sx={{ ...styles.subhead }} />
                            <CardMedia component='img' image={dosDiamond} />
                        </Card>
                    </CardContent>
                </Box>
                <Box sx={{ ...styles.sub }}>
                    <CardMedia component='img' image={gas} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Credit Card Fraud' sx={{ ...styles.subhead }} />
                            <CardMedia component='img' image={ccDiamond} />
                        </Card>
                    </CardContent>
                </Box>
                <Box sx={{ ...styles.sub }}>
                    <CardMedia component='img' image={fraud} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Fake Orders' sx={{ ...styles.subhead }} />
                            <CardMedia component='img' image={fakeDiamond} />
                        </Card>
                    </CardContent>
                </Box>
                <Box sx={{ ...styles.sub }}>
                    <CardMedia component='img' image={ransom} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <CardHeader title='Ransomware' sx={{ ...styles.subhead }} />
                            <CardMedia component='img' image={ransomDiamond} />
                        </Card>
                    </CardContent>
                </Box>
            </Card>
        </Grid>)
}
export default ThreatPage;