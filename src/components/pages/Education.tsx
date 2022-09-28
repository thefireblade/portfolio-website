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


interface EducationProps {
    darkmode: boolean
}

const Education = (props: EducationProps) => {
    const theme = useTheme();
    const md_match = useMediaQuery(theme.breakpoints.up('md'));
    const lg_match = useMediaQuery(theme.breakpoints.up('lg'));
    
    const useStyles = makeStyles((theme: any)=>({
        page: {
            width: '100%',
            height: '1200px',
			backgroundColor: props.darkmode ? "#030f15" : "#ede1df",
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
            <div id="education" className={classes.anchor}></div>
            <Grid item xs={12}>
                <Typography className={classes.content} variant={lg_match ? 'h3': md_match ? 'h4' : 'h5'}>My Education Timeline</Typography>
            </Grid>
            <Grid item xs={12}>
                <Timeline position="alternate" className={classes.bodyP}>
                <TimelineItem>
                    <TimelineOppositeContent color='secondary'>
                        <Typography variant="caption">January 2023 - Beyond</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>¯\_(ツ)_/¯ </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color='secondary'>
                        <Typography variant="caption">August 2021 - December 2022</Typography>
                        </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">Columbia University</Typography>
                        <Typography variant="body2">Masters of Science</Typography>
                        <Typography variant="body2">Computer Science Major</Typography>
                        <Typography variant="caption">GPA: 3.54 / 4.0</Typography>
                        <br/>
                        <Typography variant="caption">
                        - Analysis of Algorithms<br/>
                        - Computational Aspects of Robotics<br/>
                        - Databases<br/>
                        - Natural Language Processing<br/>
                        - Articial Intelligence<br/>
                        - Cloud Computing & Big Data<br/>
                        - Neural Networks & Deep Learning <br/>
                        - Computational Complexity<br/></Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color='secondary'>
                        <Typography variant="caption">August 2017 - May 2021</Typography>
                        </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">Stony Brook University</Typography>
                        <Typography variant="body2">Bachelors of Science</Typography>
                        <Typography variant="body2">Computer Science & Applied Mathematics and Statistics Double Major</Typography>
                        <Typography variant="caption">GPA: 3.9 / 4.0</Typography>
                        <br/>
                        <Typography variant="caption">
                            - Analysis of Algorithms<br/>
                            - Computational Geometry<br/>
                            - Introduction to Databases <br/>
                            - Data Structures in Java<br/>
                            - Linear Algebra<br/>
                            - Operations Research I<br/>
                            - Principles of Programming Languages<br/>
                            - Probability and Statistics<br/>
                            - Systems Programming in C<br/>
                            - Systems Programming in MIPS<br/>
                            - Theory of Computation<br/>
                            - Web Development<br/></Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color='secondary'>
                        <Typography variant="caption">August 2013 - June 2017</Typography>
                    </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Brooklyn Technical High School</Typography>
                    <Typography variant="body2">High School Diploma</Typography>
                    <Typography variant="body2">Electrical Engineering Major</Typography>
                    <Typography variant="caption">GPA: 4.0 / 4.0</Typography>
                    <br/>
                    <Typography variant="caption">
                        - AP Calculus BC <br/>
                        - AP Economics<br/>
                        - AP Physics I<br/>
                        - AP Physics II<br/>
                        - AP Statistics<br/>
                        - Digital System Design<br/>
                        - Computer Aided Design & Manufacturing<br/></Typography>
                </TimelineContent>
                </TimelineItem>
                </Timeline>
            </Grid>
      </Grid>
    );
};


export default Education;