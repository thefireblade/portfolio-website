import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { DrawerProps as MuiDrawerProps  } from '@mui/material/Drawer';

import { Toolbar, Drawer as MuiDrawer, AppBar as MuiAppBar, List, Typography, Divider, IconButton, CssBaseline, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import WorkIcon from '@mui/icons-material/Work';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import image from '../../assets/smaller_image_of_myself_centered.png';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { DarkMode } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CONTENTS = ['home', 'about', 'education', 'experience', 'skills']
const HEADER_TITLES: { [id: string]: string; } = {
  'home': 'Jason\'s Website',
  'about': 'About Jason Huang',
  'education': 'Jason\'s Education History',
  'experience': 'Jason\'s Work History',
  'skills': 'Jason\'s Accumulated Skills'
}
interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open'})
  <DrawerProps>(
  ({ theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface MiniDrawerProps {
  children?: React.ReactNode;
  darkmode?: boolean;
}

export default function MiniDrawer(props: MiniDrawerProps) {
  const useStyles = makeStyles((theme: any)=>({
    navbar: {
      backgroundColor: `${props.darkmode ? "#04040d" : "#c5c5ed"} !important`,
    },
    list: {
      backgroundColor: `${props.darkmode ? "#04040d" : "#c5c5ed"} !important`,
      color: props.darkmode ? '#a4bfcb' : '#1f211f'
    },
    icon: {
      color: props.darkmode ? '#a4bfcb !important' : '#1f211f !important'
    },
    divider: {
      backgroundColor: props.darkmode ? '#a4bfcb' : '#1f211f'
    },
    credits: {
      paddingTop: '20px',
      textAlign: 'center'
    },
    header: {
      color: props.darkmode ? '#a4bfcb' : '#1f211f',
      position: 'absolute',
      left: '20px',
      textAlign: 'center',
      fontWeight: 'bolder'   
    },
    toolbar: {
      backgroundColor: `${props.darkmode ? "#04040d" : "#c5c5ed"} !important`,
      color: props.darkmode ? '#a4bfcb' : '#1f211f',
    },
    toolBarTitle: {
      fontWeight: 'bolder',
      textAlign: 'center',
      width: '100%',
      fontSize: '2rem'
    },
    boxContainer: {
      padding: '0 !important'
    }
  }));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
  
    const scrolled = winScroll;
  
    setScrollPos(scrolled)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const determineLocation = () => {
    const getOffset = (el: HTMLElement | null) => {
      const rect = el?.getBoundingClientRect();
      if(rect === undefined) return 0;
      return rect.top + window.scrollY;
    }

    for (let i = 0; i < CONTENTS.length; i++) {
      if(scrollPos < getOffset(document.getElementById(CONTENTS[i]))) {
        return CONTENTS[Math.max(0, i - 1)];
      }
    }
    return CONTENTS[CONTENTS.length - 1];
  }

  const matchID = determineLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.toolBarTitle}>
            {HEADER_TITLES[matchID]}
          </span>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} classes={{ paper: classes.navbar }}>
        <DrawerHeader>
          <span className={classes.header}>
            Jason (TheFireBlade)
          </span>
          <IconButton onClick={handleDrawerClose} className={classes.icon}>
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider className={classes.divider}/>
        <List className={classes.list}>
          <ListItem key={'Home'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={()=>{scrollTo('home')}}
              style={{
                backgroundColor: matchID === 'home' ? '#384346' : 'inherit'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
                >
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'Home'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'About'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={()=>{scrollTo('about')}}
              style={{
                backgroundColor: matchID === 'about' ? '#384346' : 'inherit'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
              >
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary={'About'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Education'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={()=>{scrollTo('education')}}
              style={{
                backgroundColor: matchID === 'education' ? '#384346' : 'inherit'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
              >
                <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary={'Education'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'Experience'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={()=>{scrollTo('experience')}}
              style={{
                backgroundColor: matchID === 'experience' ? '#384346' : 'inherit'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
                >
                <WorkOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary={'Experience'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'Skills'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={()=>{scrollTo('skills')}}
              style={{
                backgroundColor: matchID === 'skills' ? '#384346' : 'inherit'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
                >
                <CarpenterIcon/>
              </ListItemIcon>
              <ListItemText primary={'Skills'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider className={classes.divider}/>
        <List className={classes.list}>
          <ListItem key={'Mixtape Matchmaker'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component="a"
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              target="_blank"
              href="https://mixtape-matchmaker.web.app/login"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
                >
                <VolunteerActivismIcon/>
              </ListItemIcon>
              <ListItemText primary={'Mixtape Matchmaker'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Pandemic Solver'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component="a"
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              target="_blank"
              href="https://pandemic-activity-problem.web.app/"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                className = {classes.icon}
                >
                <CoronavirusIcon/>
              </ListItemIcon>
              <ListItemText primary={'Pandemic Solver'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Credits'} disablePadding sx={{ display: 'block' }}>
              <ListItemText primary={'Jason Huang © 2022'} sx={{ opacity: open ? 1 : 0 }} className={classes.credits} />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className={classes.boxContainer}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}
