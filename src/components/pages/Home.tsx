import React, { useState, Component } from "react";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Tooltip from '@mui/material/Tooltip';

import Typist from 'react-typist';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, TextField } from "@mui/material";
import image from '../../assets/IMG_8930(2).jpg';
import { width } from "@mui/system";


interface HomeProps {
    darkmode: boolean
}

const Home = (props: HomeProps) => {
    const theme = useTheme();
    const md_match = useMediaQuery(theme.breakpoints.up('md'));
    const lg_match = useMediaQuery(theme.breakpoints.up('lg'));
    const defaultString = "TXkgZXhwZXJpZW5jZSBpbiB3ZWIgZGV2ZWxvcG1lbnQgbWFpbmx5IHBlcnRhaW5zIHRvIHVzaW5nIHRoZSBNRVJOIHN0YWNrIHRvIGRldmVsb3Agd2ViIGFwcGxpY2F0aW9ucy4gRHVlIHRvIG15IGV4cGVyaWVuY2UgYXMgYSBGdWxsIFN0YWNrIERldmVsb3BlciBJbnRlcm4gYXQgU3luY0lvVCBUZWNobm9sb2dpZXMsIEkgaGF2ZSBleHBlcmllbmNlIGNyZWF0aW5nIHBhZ2VzIHVzaW5nIGEgTm9kZS5qcyBzZXJ2ZXIuIEFsdGhvdWdoIHRoZSBwYWdlIGlzIGRvd24sIEkgaGF2ZSBjcmVhdGVkIG1vc3Qgb2YgdGhlIHBhZ2VzIG9mIHRoZSB3ZWJzaXRlOiBzeW5jaW90LmlvLiBJbiBhZGRpdGlvbiwgSSBoYXZlIGRldmVsb3BlZCBtYW55IFJFU1QgQVBJcyB0byBnZW5lcmF0ZSBkYXRhIGFuYWx5dGljcy4gSSBoYXZlIGFsc28gY28tYXV0aG9yZWQgdGhlIHdlYiBzZXJ2aWNlLCBNaXh0YXBlIE1hdGNobWFrZXIsIGEgc29jaWFsIG11c2ljIHBsYXRmb3JtIHRoYXQgdXNlcyBUZW5zb3JGbG93LmpzIHRvIGdlbmVyYXRlIG1hdGNoZXMuIExhc3RseSwgSSB3YXMgdGhlIHByaW1hcnkgZGV2ZWxvcGVyIG9mIHRoZSBDYW1wIEFiaWxpdGllcyBQcm9ncmVzc2l2ZSBXZWIgQXBwbGljYXRpb24gdGhhdCBoZWxwcyBsb2cgYW5kIHRyYWNrIGRhdGEgb2YgdmlzdWFsbHkgaW1wYWlyZWQgY2hpbGRyZW4uCgpNeSBleHBlcmllbmNlIGluIGxvdy1sZXZlbCBwcm9ncmFtbWluZyBhbmQgc3lzdGVtcyBjb21lcyBmcm9tIHNtYWxsIHByb2plY3RzIHdyaXR0ZW4gaW4gTUlQUyBhbmQgQy4gSSBoYXZlIHdyaXR0ZW4gcHJvZ3JhbXMgdGhhdCBoYXZlIHBlcmZvcm1lZCBlbmNyeXB0aW9uIGFuZCBkZWNyeXB0aW9uIHVzaW5nIHRoZSByZWdpc3RlcnMgYW5kIG9wZXJhdGlvbnMgb2YgTUlQUyBhbmQgZGVzaWduZWQgaG9tZXdvcmsgYXNzaWdubWVudHMgYW5kIGV4YW0gcXVlc3Rpb25zIHJlZ2FyZGluZyBNSVBTIGFzIFRlYWNoaW5nIEFzc2lzdGFudCBpbiBteSBTeXN0ZW1zIEZ1bmRhbWVudGFscyBjbGFzcy4gSSBoYXZlIGFsc28gZG9uZSBtZW1vcnkgbWFuYWdlbWVudCBpbiBDIGFuZCBkZXNpZ25lZCBwcm9ncmFtcyB0aGF0IGNvbXByZXNzIGZpbGVzLiAKCk15IGV4cGVyaWVuY2UgaW4gYWxnb3JpdGhtcyBjb21lcyBmcm9tIG15IHJlc2VhcmNoIHdvcmsgd2l0aCBDb21wdXRlciBTY2llbmNlIFJlc2VhcmNoZXIgSm9zZXBoIE1pdGNoZWxsIGF0IFN0b255IEJyb29rIFVuaXZlcnNpdHkuIE15IGFsZ29yaXRobSB3b3JrIHJlbGF0ZXMgdG8gcmVkdWNpbmcgdGhlIHNwcmVhZCBvZiBjb250YWdpb24gaW4gYW4gYWN0aXZpdHktcGVyc29uIG1vZGVsLiBUbyByZXNvbHZlIHRoaXMgaXNzdWUsIEnigJl2ZSB1c2VkIG1ldGhvZHMgc3VjaCBhcyBJbnRlZ2VyIFByb2dyYW1taW5nLCBTcGVjdHJhbCBQYXJ0aXRpb25pbmcsIGNvbW11bml0eSBzZWFyY2gvc2NhbiwgYW5kIEdyZWVkeSBBbGdvcml0aG1zLiBJ4oCZdmUgbWFkZSBhIHdlYiBhcHBsaWNhdGlvbiB0aGF0IHZpc3VhbGx5IGRpc3BsYXlzIHRoaXMgcmVzZWFyY2ggd29yayBvbiB0aGUgZm9sbG93aW5nIHNpdGU6IHBhbmRlbWljLWFjdGl2aXR5LXByb2JsZW0ud2ViLmFwcC4gCg==";
    const useStyles = makeStyles((theme: any)=>({
        page: {
            width: '100%',
            height: '550px',
			backgroundColor: props.darkmode ? "#030f15" : "#ede1df",
			color: props.darkmode ? "#a4bfcb" : "#01090d",
            justifyContent: 'center',
            textAlign: 'center'           
        },
        content:{
            padding: '20px',
            paddingLeft: '60px',
            paddingTop: '40px'
        },
        bodyP: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
            width: '80%',
			color: props.darkmode ? "#a4bfcb !important" : "#01090d !important",
            backgroundColor: props.darkmode ? "#01090d !important":  "#a4bfcb !important" 
        },
        image: {
            padding: '20px',
            marginTop: lg_match ? '40px !important' : md_match ? '60px !important' : '80px !important',
            width: lg_match ? '220px' : md_match ? '150px ' : '100px',
            height: lg_match ? '299px' : md_match ? '224px ' : '149px',
        },
        anchor: {
            position: 'absolute',
            top: '0',
        }
    }));
    const classes = useStyles();
    return (
        <Grid className={classes.page}>
            <div id="home" className={classes.anchor}></div>
            <Typography className={classes.content} variant={lg_match ? 'h3': md_match ? 'h4' : 'h5'}>Welcome to my website!</Typography>
            <Grid container>
                <Grid item md={8} sm={12} container justifyContent="center">
                    <Tooltip title="Hint: base 64 decode">
                        <textarea
                            disabled
                            className={classes.bodyP}
                            rows={20}
                            defaultValue={defaultString}
                        />
                    </Tooltip>
                </Grid>
                {md_match ? 
                    <Grid item md={4} container >
                        <img className={classes.image} alt="Photo of me" src={image}/>
                    </Grid> : null
                }
            </Grid>
        </Grid>
    );
};


export default Home;