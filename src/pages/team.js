import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import daniel from '../images/daniel-braker.jpg';
import yana from '../images/yana-almeida.png';
import michael from '../images/michael-adelin.jpg'
import person from '../images/person.png';
import baskar from '../images/baskar-naga.jpeg';
import garrett from '../images/garrett-mackay.jpeg';
import { Avatar, CardHeader } from '@mui/material';
const teamInfo = [
    {
        name: "Daniel Braker",
        image: daniel,
        bio: "lorem ipsum",
        role: "Lead, Researcher"
    },
    {
        name: 'Yana Almeida',
        image: yana,
        bio: "lorem ipsum",
        role: "Analyst, Critical Assets"
    },
    {
        name: "Michael Edelin",
        image: michael,
        bio: "lorem impsum",
        role: "Executive Advisor, Cybersecurity"
    },
    {
        name: "Garrett MacKay",
        image: garrett,
        bio: "lorem impsum",
        role: "Engineer, Trucking Industry"
    },
    {
        name: "Baskar Rao",
        image: baskar,
        bio: "lorem impsum",
        role: 'Data Scientist, Cybersecurity Modeling'
    }
];
const styles = {
    card: {
        main: { display: 'flex', m: 2, p: 1},
        box: { display: 'flex', flexDirection: 'column', width: '300px' },
        avatar: { width: 125, height: 125,mt:1.5}
    }

}
const TeamPage = () => {
    return (<Container maxWidth='xl'>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <h1 >Meet the Team</h1>
        </Grid>
        <Box sx={{
            display: 'flex', flexWrap: 'wrap'
        }}>
            {teamInfo.map(p =>
            (
                <Card sx={{ ...styles.card.main }} key={p.name}>
                    <Box sx={{ ...styles.card.box }}>
                        <CardHeader title={p.name} subheader={p.role} sx={{mb:-4}}/>
                        <CardContent >
                            {/* <Typography component='div' variant='p'> */}
                            <p>{p.bio}</p>
                            {/* </Typography> */}
                        </CardContent>
                    </Box>
                    <Avatar src={p.image} sx={{ ...styles.card.avatar }} />

                </Card>
            ))}
        </Box>
    </Container>)
}
export default TeamPage;