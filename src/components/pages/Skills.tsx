import React, { useState, Component } from "react";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import python from '../../assets/Python_logo_icon.png';
import javascript from '../../assets/javascript_logo.png';
import typescript from '../../assets/1_MjkBcGkCPD1Z-wwIP1h-zg.png';
import reactLogo from '../../assets/react.df70b005.png';
import android from '../../assets/android.png';
import apacheserver from '../../assets/apacheserver.png';
import apachespark from '../../assets/apachespark.png';
import azure from '../../assets/azure.jpg';
import bash from '../../assets/bash.jpg';
import csharp from '../../assets/c#.png';
import cplusplus from '../../assets/C++.jpg';
import cprogramming from '../../assets/Cprogramming.png';
import shell from '../../assets/shell.jpg';
import swift from '../../assets/swift.png';
import tensorflow from '../../assets/tensorflow.jpg';
import unity from '../../assets/unity.png';
import vscode from '../../assets/vscode.png';
import mysql from '../../assets/mysql.jpg';
import neo4j from '../../assets/neo4j.png';
import node from '../../assets/node.png';
import numpy from '../../assets/numpy.png';
import postgres from '../../assets/postgresql.png';
import docker from '../../assets/docker.png';
import firebase from '../../assets/firebase.png';
import hadoop from '../../assets/hadoop.jpg';
import java from '../../assets/java.jpg';
import mongodb from '../../assets/mongodb.jpg';
import aws from '../../assets/aws.png';



const skills = [
    {name: 'Python',
     icon: python},
    {name: 'JavaScript',
     icon: javascript},
    {name: 'TypeScript',
     icon: typescript},
    {name: 'React',
     icon: reactLogo},
    {name: 'AWS',
     icon: aws},
    {name: 'Android',
     icon: android},
    {name: 'Apache Server',
     icon: apacheserver},
    {name: 'Spark',
     icon: apachespark},
    {name: 'Azure',
     icon: azure},
    {name: 'Bash',
     icon: bash},
    {name: 'C#',
     icon: csharp},
    {name: 'C++',
    icon: cplusplus},
    {name: 'C',
    icon: cprogramming},
    {name: 'Shell',
    icon: shell},
    {name: 'Swift',
    icon: swift},
    {name: 'TensorFlow',
    icon: tensorflow},
    {name: 'Unity',
    icon: unity},
    {name: 'VSCode',
    icon: vscode},
    {name: 'MySQL',
    icon: mysql},
    {name: 'Neo4j',
    icon: neo4j},
    {name: 'Node',
    icon: node},
    {name: 'Numpy',
     icon: numpy},
    {name: 'PostgreSQL',
     icon: postgres},
    {name: 'Docker',
     icon: docker},
    {name: 'MongoDB',
     icon: mongodb},
    {name: 'Hadoop',
     icon: hadoop},
    {name: 'Java',
    icon: java},
    {name: 'Firebase',
    icon: firebase}
];

const sortedSkills = skills.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1; 
    }
    if (nameA > nameB) {
      return 1; 
    }
    return 0;  
  });

interface SkillsProps {
    darkmode: boolean
}

const Skills = (props: SkillsProps) => {
    const [searchQuery, setSearchQuery] = useState('')
    const theme = useTheme();
    const md_match = useMediaQuery(theme.breakpoints.up('md'));
    const lg_match = useMediaQuery(theme.breakpoints.up('lg'));
    
    const useStyles = makeStyles((theme: any)=>({
        content: {
            padding: '20px'
        },
        griditem: {
            margin: '10px'
        },
        pageTitle: {
            padding: '20px',
            paddingTop: '40px',
            textAlign: 'center'
        },
        searchLabel: {
            padding: '20px'
        },
        searchfield: {
			color: props.darkmode ? "#a4bfcb !important" : "#01090d !important",
            backgroundColor: props.darkmode ? "#01090d !important":  "#a4bfcb !important",
            width: '100%',
            margin: '20px'
        },
        iconImage: {
            width: '100px',
            height: '100px'
        },
        cardSkill: {
            textAlign: 'center',
        },
        card: {
            padding: '20px',
            paddingTop: '0',
			color: props.darkmode ? "#a4bfcb !important" : "#01090d !important",
            backgroundColor: props.darkmode ? "#1f3640 !important":  "#a4bfcb !important",
        }
    }));
    const classes = useStyles();
    return (
    <Grid>
        <Grid item xs={12} justifyContent='center'>
            <Typography variant="h3" className={classes.pageTitle}>My Skills</Typography>
        </Grid>
        <Grid item xs={12} container>
            <Grid item xs={4} container justifyContent='flex-end'>
                <Typography variant="body1" className={classes.searchLabel}>Search Skills</Typography>
            </Grid>
            <Grid item xs={7} container>
                <input
                    value={searchQuery}
                    onChange={(e)=>{setSearchQuery(e.target.value);}}
                    className={classes.searchfield} 
                    />
            </Grid>
        </Grid>
        <Grid justifyContent='center' container className={classes.content} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {sortedSkills.map(skill => {
                 if (skill.name.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1) {
                    return (
                        <Grid item xs={4} md={3} lg={2} container justifyContent='center'> 
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant='h6' className={classes.cardSkill}>{skill.name}</Typography>
                                </CardContent>
                                <CardMedia
                                    className={classes.iconImage}
                                    component="img"
                                    image={skill.icon}
                                    alt="Skill Logo"
                                />
                            </Card>
                        </Grid>
                    );
                 } else {
                     return null;
                 }
            })
            }
        </Grid>
    </Grid>
    );
};


export default Skills;