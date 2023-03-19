import React, { useState, useEffect} from "react";
import DarkModeSwitch from "./components/buttons/DarkModeSwitch";
import './App.css';
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, responsiveFontSizes, makeStyles } from "@material-ui/core/styles";
import About from "./components/pages/About";
import Navbar from "./components/navigation/Navbar";
import { Grid, Typography } from "@material-ui/core";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import { Button } from "@mui/material";
import MiniDrawer from "./components/navigation/MiniDrawer";
import { Fade } from "react-awesome-reveal";

const App = () => {	
	const [darkmode, setDarkmode] = useState(true);
	const [navOpen, setNavOpen] = useState(false);
	
	useEffect(() => {
		let darkmodeSetting = localStorage.getItem('darkmode');
		if(darkmodeSetting){
			setDarkmode(darkmodeSetting.toLowerCase() == 'true' ? true : false);
		} 
	}, []);

	let theme = createTheme({
		palette: {
			primary: {
				main: "#6aabc4",
			},
			secondary: {
				main: "#de614b",
			},
			type: darkmode ? "dark" : "light"
		}
	});

	theme = responsiveFontSizes(theme);
	const useStyles = makeStyles((theme: any) => ({
		main : {
			height: "100%" ,
			minHeight : '100vh',
			width: "100%",
			margin: 0,
			backgroundColor: darkmode ? "#030f15" : "#ede1df",
			color: darkmode ? "#a4bfcb" : "#01090d"   
		},
		page: {
			width: '100%',
			height: '100%',
			minHeight : '100vh',
		},
		contentBody:{
		}
	}));
	const classes = useStyles();

	const toggleNav = () => {
		setNavOpen(!navOpen)
	}

	return (
		<div className={classes.main}>
			<Grid container className={classes.page}>
				<MiniDrawer darkmode={darkmode}>
					<Fade direction="left" delay={100} duration={800} triggerOnce>
						<Home darkmode={darkmode}/>
						<About darkmode={darkmode}/>
						<Education darkmode={darkmode}/>
						<Experience darkmode={darkmode}/>
						<Skills darkmode={darkmode}/>
					</Fade>
				</MiniDrawer>
			</Grid>
			<DarkModeSwitch checked={darkmode} onClick={() => {
				localStorage.setItem('darkmode', !darkmode ? 'true' : 'false');
				setDarkmode(!darkmode);
			}}/>
		</div>
	);  
}

export default App;
