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




const App = () => {	
	const [darkmode, setDarkmode] = useState(false);
	
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
  
  return (
	<div className={classes.main}>
		<BrowserRouter>
	
        <Grid container className={classes.page}>
            <Grid item xs={5} md={3} lg={2}>
                <Navbar darkmode={darkmode}/>
            </Grid>
			<Grid item xs={7} md={9} lg={8}>
				<Routes>
					<Route path="/experience" element={<Experience darkmode={darkmode}/>}/>
					<Route path="/education" element={<Education darkmode={darkmode}/>}/>
					<Route path="/about" element={<About darkmode={darkmode}/>}/>
					<Route path="/" element={<Home darkmode={darkmode}/>} />
					<Route path="/:anything" element={<Home darkmode={darkmode}/>} />
					<Route path="/:anything/:anything" element={<Home darkmode={darkmode}/>} />
				</Routes>
			</Grid>
        </Grid>
		</BrowserRouter>
		<DarkModeSwitch checked={darkmode} onClick={() => {
			localStorage.setItem('darkmode', !darkmode ? 'true' : 'false');
			setDarkmode(!darkmode);
		}}/>
	</div>
  );  
}

export default App;
