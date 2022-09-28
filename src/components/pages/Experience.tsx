import React, { useState, Component } from "react";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Grid, Typography } from "@mui/material";


interface ExperienceProps {
    darkmode: boolean
}

const Experience = (props: ExperienceProps) => {
    const theme = useTheme();
    const md_match = useMediaQuery(theme.breakpoints.up('md'));
    const lg_match = useMediaQuery(theme.breakpoints.up('lg'));
    
    const useStyles = makeStyles((theme: any)=>({
        page: {
            width: '100%',
            height: '1150px',
			backgroundColor: props.darkmode ? "#384347" : "#6f7475",
			color: props.darkmode ? "#a4bfcb" : "#01090d",
            justifyContent: 'center',
            textAlign: 'center'   
        },
        content:{
            padding: '20px',
            textAlign: 'center'
        },
        bodyP: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
        },
        image: {
            padding: '20px',
            marginTop: lg_match ? '40px !important' : md_match ? '60px !important' : '80px !important',
            width: lg_match ? '220px' : md_match ? '150px ' : '100px',
            height: lg_match ? '299px' : md_match ? '224px ' : '149px',
        },
        anchor: {
            position: 'absolute',
            marginTop: '-60px',
        }
    }));
    const classes = useStyles();
    return (
        <Grid container className={classes.page}>
            <div id="experience" className={classes.anchor}></div>
            <Grid item xs={12}>
                <Typography className={classes.content} variant={lg_match ? 'h3': md_match ? 'h4' : 'h5'}>My Experience Timeline</Typography>
            </Grid>
            <Grid item xs={12}>
                <Timeline position="alternate" className={classes.bodyP}>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">September 2022 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Telsa</Typography>
                    <Typography variant="body2">Part-time Full Stack Software Engineering Intern</Typography>
                    <Typography variant="caption">
                        + Working in Tesla's FleetNet Vehicle Software team (Same team). <br/>
                    </Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">May 2022 - August 2022</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Telsa</Typography>
                    <Typography variant="body2">Full Stack Software Engineering Intern</Typography>
                    <Typography variant="caption">
                        + Worked in Tesla's FleetNet Vehicle Software team. <br/>
                        + Wrote programs in Go, Ruby, and JavaScript. <br/>
                    </Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">January 2022</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">RBC Capital Markets</Typography>
                    <Typography variant="body2">Winter Analyst</Typography>
                    <Typography variant="caption">
                        + Wrote container deployment scripts utilizing site reliability engineering principles for Kubernetes and Docker. <br/>
                        + Designed core components using React and Material UI to display down time in server statuses. <br/>
                        + Constructed database Object Relational Models and REST APIs to manage down time server data. <br/>
                    </Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">September 2021 - December 2021</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Flight Health</Typography>
                    <Typography variant="body2">Part-time Software Engineer</Typography>
                    <Typography variant="caption">
                        + Developed and maintained React plugins controlling phone line connections for call center agents <br/>
                        + Created RESTful APIs on the main backend server that managed patient and agent data and communications.<br/>
                        + Managed AWS Route 53 DNS for client practices and maintained client practice websites.<br/>
                    </Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">August 2021 - May 2021</Typography>
                    </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Flight Health</Typography>
                    <Typography variant="body2">Technology Intern</Typography>
                    <Typography variant="caption"> 
                        + Designed web pages and RESTful APIs for the patient and practice linking web application.<br/>
                        + Conducted Search Engine Optimizations on internal and client practice websites. <br/>
                        + Created and maintained a Practice Patient call center and agent SSO. <br/>
                    </Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">December 2020 - May 2021</Typography>
                    </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Girihlet Inc.</Typography>
                    <Typography variant="body2">Data Engineering Intern</Typography>
                    <Typography variant="caption"> 
                        + Developed querying and processing algorithm to evaluate DNA sequence data through PostGRESql.<br/>
                        + Created an analysis table to evaluate DNA sequence data and search for correlation.<br/>
                        + Horizontally scaled production servers through sharding to maintain DNA sequence data.<br/>
                    </Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color='secondary'>
                    <Typography variant="caption">2018 - 2019</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Typography variant="h6">SyncIoT Technologies</Typography>
                    <Typography variant="body2">Full Stack Software Engineering Intern</Typography>
                    <Typography variant="caption"> 
                        + Developed processing algorithms for Pycom sensor and analyzed sequence data through graphs.<br/>
                        + Created management system to that connected all sensors to the backend server through the MQTT protocol.<br/>
                        + Made RESTful APIs to manage sensor data data and frontended the company website.<br/>
                    </Typography> 
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
            </Grid>
      </Grid>
    );
};


export default Experience;