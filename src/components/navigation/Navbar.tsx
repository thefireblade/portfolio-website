import React, { useState} from "react";
import {Grid, Typography, Avatar, Button} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import image from '../../assets/smaller_image_of_myself_centered.png';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

interface NavProps {
    darkmode: boolean,
    toggleOpen(): any,
}

interface NavButtonProps {
    text: string,
    link: string,
    icon: typeof HomeIcon,
}

const NavButton = (props: NavButtonProps) => {
    const useStyles = makeStyles((theme: any)=>({
        button: {
            borderRadius: '0 !important',
            width: '100%'
        }
    }));
    
    const classes = useStyles();
    return (
        <Button color="inherit" startIcon={<props.icon/>}
            className={classes.button}
            href={props.link}>
            <Typography variant='body1'>{props.text}</Typography>
        </Button>
    );
}

export default function Navbar(props: NavProps) {
    const [open, setOpen] = useState(false);
    const useStyles = makeStyles((theme: any)=>({
        navbar: {
            height: '100%',
            paddingTop: '10%',
            backgroundColor: props.darkmode ? "#04040d" : "#c5c5ed",
            justifyContent: 'center'
        },
        button: {
            borderRadius: '0 !important',
            width: '100%'
        },
        gridItem: {
            marginTop: '10px !important'
        },
        name: {
            textAlign: 'center',
            marginBottom: '20px !important',
        },
        footer: {
            marginTop: '20px !important',
            textAlign: 'center'
        },
        image: {
            
        }
    }));
    const classes = useStyles();
    return (
        <Grid direction='column' className={classes.navbar}>
            <Grid item xs={12} container>
               <Button className={classes.button}>
               </Button>
            </Grid>
            <Grid item xs={12} container justifyContent='center' className={classes.name}>
                <Avatar src={image}/>
            </Grid>
            <Grid item xs={12} container justifyContent='center' className={classes.name}>
                <Grid item xs={12}>
                    <Typography variant="h4">Jason</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">Huang</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <NavButton icon={HomeIcon} text='Home' link='/'/>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <NavButton icon={PersonIcon} text='About' link='/about'/>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <NavButton icon={PersonIcon} text='Education' link='/education'/>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <NavButton icon={PersonIcon} text='Experience' link='/experience'/>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <NavButton icon={PersonIcon} text='Skills' link='/skills'/>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <Button color="inherit" className={classes.button} startIcon={<WorkIcon/>} 
                        endIcon={open ? <ExpandLess /> : <ExpandMore />}
                        onClick={() => {setOpen(!open)}}> 
                        <Typography variant='body1'>Projects</Typography> 
                        </Button>
            </Grid>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid item xs={12} direction='column' container>
                    <Grid item xs={12} className={classes.gridItem}>
                        <NavButton icon={VolunteerActivismIcon} text='Mixtape Matchmaker' link='https://mixtape-matchmaker.web.app/login'/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <NavButton icon={CoronavirusIcon} text='Pandemic Solver' link='https://pandemic-activity-problem.web.app/'/>
                    </Grid>
                </Grid>
            </Collapse>
            <Grid item xs={12} className={classes.footer}>
                <Typography variant="caption">Jason Huang © 2021</Typography>
            </Grid>
        </Grid>
    );
}