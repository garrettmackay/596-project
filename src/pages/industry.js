import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import trucking2 from '../images/truck-2.jpg'
import trucking1 from '../images/truck-1.jpg'
import trucking3 from '../images/truck-3.jpg'
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
    textCard: {
        p: 3, mb: 1, mr: '5%', ml: '5%'
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
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Many fleets now track their trucks using IoT technology to track location and performance.  Drivers are even required to complete regulatory requirements within the cab of their trucks and digitally submit them to back-office systems.  This is proprietary information any organization wants to keep secure.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                IoT devices are helping improve fuel efficacy, control driver behavior, optimize routes, and addressing minor maintenance issues before before they become big issues.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                IoT devices are helping to lower insurance premiums.  Traditional calculators are based on industry norms, but onboard sensors provide more accurate information to reward safer driver behaviors.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                All these fantastic modernizations increase the potential for a cyber security attack.
                            </Typography>
                        </Card>
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{ width: '100%', mt: 5 }}>
                <Box sx={{ ...styles.head }} >
                    <Typography variant='h4'>
                        Key Exploits Targeting the Industry
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia component='img' image={trucking3} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Imagine having warehouses full of goods and trucks ready to depart on their journey to deliver these goods but they don’t know where to go.  Ransomware is becoming more prevalent, and the scenario outlined is becoming more common.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Social engineering, malware, and phishing are amongst the most popular tools cyber criminals use to exploit proprietary company information for competitive advantage.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Gaining access to a truck to be used as weapon.  Assistant U.S. Attorney General John Carlin told Trucks.com that the federal government was worried that an increasing array of autonomous driving features in trucks and cars could turn them into terrorist weapons
                            </Typography>
                        </Card>
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{ width: '100%', mt: 5 }}>
                <Box sx={{ ...styles.head }} >
                    <Typography variant='h4'>
                        Ransomware
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia component='img' image={ransom} sx={{ width: 250, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
                    <CardContent>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Ransomware gangs are choosing targets for profit using easily purchase Ransomware-as-a-Service (RaaS).
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Ransomware has evolved beyond encrypting critical data.  More sophisticated attacks target backup systems making it impossible for victims to simple restore their data.  The supply chain has been a target in warfare for as far back as Napoleon.
                            </Typography>
                        </Card>
                        <Card sx={{ ...styles.textCard }}>
                            <Typography variant='p'>
                                Technology has made it possible for Ransomware gangs to shut down oil pipelines with software purchased over the dark web.  RaaS has made it possible for low skilled criminals to conduct high tech crimes with a big impact.  These gangs can be shut down but quickly bounce back under a new brand.  RaaS has become so sophisticated that they operate like professional software companies with subscription packages, software updates, and even reviews.
                            </Typography>
                        </Card>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}
export default IndustryPage;