import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import daniel from '../images/daniel-braker.jpg';
import yana from '../images/yana-almeida.png';
import michael from '../images/michael-adelin.jpg'
import person from '../images/person.png';
import baskar from '../images/baskar-naga.jpeg';
import garrett from '../images/garrett-mackay.jpeg';
import { Avatar, CardActions, CardHeader } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const teamInfo = [
    {
        name: "Daniel Braker",
        image: daniel,
        bio: "Research trucking industry specific cybersecurity resources, threats, and general information",
        role: "Lead, Researcher",
        url: "",
    },
    {
        name: 'Yana Almeida',
        image: yana,
        bio: "Determine critical cybersecurity assets and threat vectors",
        role: "Analyst, Critical Assets",
        url: "https://www.linkedin.com/in/yana-almeida/",
    },
    {
        name: "Michael Edelin",
        image: michael,
        bio: "Responsible for achieving executive buy-in for cybersecurity investment",
        role: "Executive Advisor, Cybersecurity",
        url: "https://www.linkedin.com/in/michaeledelinjr/"
    },
    {
        name: "Garrett MacKay",
        image: garrett,
        bio: "Trucking industry member and website developer",
        role: "Engineer, Trucking Industry",
        url: "https://www.linkedin.com/in/garrettmackay/"
    },
    {
        name: "Baskar Rao",
        image: baskar,
        bio: "Uses critical asset analysis to create diamond models",
        role: 'Data Scientist, Cybersecurity Modeling'
    }
];
const styles = {
    card: {
        main: { display: 'flex', m: 2, p: 1 },
        box: { display: 'flex', flexDirection: 'column', width: '300px' },
        avatar: { width: 125, height: 125, mt: 1.5 }
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
                        <CardHeader title={p.name} subheader={p.role} sx={{ mb: -4 }} />
                        <CardContent >
                            <p>{p.bio}</p>
                        </CardContent>
                        <CardActions>
                            {p.url && (
                                <IconButton onClick={()=>window.open(p.url,'_blank')}>
                                    <LinkedInIcon  />
                                </IconButton>
                            )}
                        </CardActions>
                    </Box>
                    <Avatar src={p.image} sx={{ ...styles.card.avatar }} />
                </Card>
            ))}
        </Box>
    </Container>)
}
export default TeamPage;