import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import trucking2 from '../images/truck-2.jpg'
import trucking1 from '../images/truck-1.jpg'

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
    textCard: {
        p: 3, mb: 1, mr:'5%',ml:'5%'
    }
}
const IndustryPage = () => {
    return (
        <Grid container sx={{ mb: 3 }}>

            <Card sx={{ width: '100%' }}>
                <Box sx={{ ...styles.head }} >
                    <Typography variant='h4'>
                        Transportation: Moving our Economy
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia component='img' image={trucking2} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                In 2019, on average 79.2 million tons of goods were moved per day equating to freight valued at $22.4 trillion for the year 2019 (BTS)
                            </Typography>
                        </Card>

                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                The trend over the last decade is just above 1.4% growth in tonnage annually, but the forecast for the next decade is a total of 28%, or 2.8% annually -- double that of the previous decade (ATA, 2021).
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                There are 3.5 million truck drivers in the United States, accounting for about 2% of the country’s total workforce. In total, 7.95 million people work in the logistics field accounting for 5.8% of the United States overall workforce (ALLTRUCKING).
                            </Typography>
                        </Card>

                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                In 2019, on average 79.2 million tons of goods were moved per day equating to freight valued at $22.4 trillion for the year 2019 (BTS)
                            </Typography>
                        </Card>
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{ width: '100%', mt: 5 }}>
                <Box sx={{ ...styles.head }} >
                    <Typography variant='h4'>
                        Technology Advancements
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia component='img' image={trucking1} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />


                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                With Today’s requirements to communicate a trucks analytic information and regulatory requirements to back-office systems and the coming widespread use of automated tractor-trailers and current IoT devices on-board, the amount of threat vectors into the transportation industry will expand significantly.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Trucks and other automobiles have tightly integrated functions within them operated through a Controller Area Network or CAN Bus opening the potential to hack engine and brake operations.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Government representatives are concerned that today’s modernized trucks and future autonomous trucks could be turned into terrorist weapons.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Cybersecurity engineering ISO/SAE21434 specifies requirements for risk management regarding these threats.
                            </Typography>
                        </Card>
                    </CardContent>

                </Box>
            </Card>
        </Grid>
    )
}
export default IndustryPage;