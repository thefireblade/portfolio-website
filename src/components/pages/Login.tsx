import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: any)=>({
}));

interface LoginProps {
    darkmode: boolean
}

const Login = (props: LoginProps) => {
    const classes = useStyles();
    return (
        <div>
            HI There
        </div>
    );
};


export default Login;