import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Navbar from "../navigation/Navbar";

const useStyles = makeStyles((theme: any)=>({
    page: {
        width: '100%'
    },
    contentBody:{
    }
}));

interface HomeProps {
    darkmode: boolean
}

const Home = (props: HomeProps) => {
    const classes = useStyles();
    return (
        <Grid className={classes.page}>
            <Typography>HELLO</Typography>
        </Grid>
    );
};


export default Home;