import React, { useState, Component } from "react";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Typist from 'react-typist';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from "@mui/material";
import image from '../../assets/smaller_image_of_myself_centered.png';


interface AboutProps {
    darkmode: boolean
}

const About = (props: AboutProps) => {
    const theme = useTheme();
    const md_match = useMediaQuery(theme.breakpoints.up('md'));
    const lg_match = useMediaQuery(theme.breakpoints.up('lg'));
    
    const useStyles = makeStyles((theme: any)=>({
        page: {
            width: '100%',
            height: '550px',
			backgroundColor: props.darkmode ? "#384347" : "#6f7475",
			color: props.darkmode ? "#a4bfcb" : "#01090d",
            justifyContent: 'center',
            textAlign: 'center'   
        },
        contentTitle:{
            padding: '20px',
            paddingTop: '40px'
        },
        contentHeader: {
            paddingLeft: '10px'
        },
        contentSum: {
            marginTop: lg_match ? '20px !important' : md_match ? '15px !important' : '10px !important',
            padding: '10px'
        },
        social: {
            marginTop: lg_match ? '30px !important' : md_match ? '20px !important' : '10px !important'
        },
        photo: {
            marginLeft: '60px',
            marginTop: lg_match ? '40px !important' : md_match ? '60px !important' : '80px !important',
            width: lg_match ? '200px' : md_match ? '150px ' : '100px',
            height: lg_match ? '299px' : md_match ? '224px ' : '149px',
        },
        anchor: {
            position: 'absolute',
            marginTop: '-30px',
        }
    }));
    const classes = useStyles();
    return (
        <Grid className={classes.page}>
            <div id="about" className={classes.anchor}></div>
            <Grid item xs={12} className={classes.contentTitle} container>
                <Grid item xs={8}  container>
                    <Typist avgTypingDelay={5} cursor={{show: false}}>
                        <br/>
                        <Typography className={classes.contentHeader} variant={lg_match ? 'h3': md_match ? 'h4' : 'h5'}>About Me</Typography>
                        <Typography className={classes.contentSum} variant={lg_match ? 'h5': md_match ? 'h6' : 'body1'}>I am currently pursuing a Master's degree in Computer Science at Columbia University. I received my undergraduate degree at the Honors College of Stony Brook University double majoring in Computer Science and Applied Mathematics and Statistics. I have various interests in development stacks including systems, databases, frontend, and backend, devops, and machine learning.</Typography>
                        <br/>
                        <Button className={classes.social} variant="contained" startIcon={<GitHubIcon/>} target="_blank" href='https://github.com/thefireblade'>Github Repositories</Button>               
                        <br/>   
                        <Button className={classes.social} variant="contained" startIcon={<LinkedInIcon/>} target="_blank" href='https://www.linkedin.com/in/jhuang6625/'>LinkedIn Profile</Button>
                    </Typist>
                </Grid>
                <Grid item xs={4} container>
                    <img alt="Photo of me" src={image} className={classes.photo}/>
                </Grid>
            </Grid>
        </Grid>
    );
};


export default About;