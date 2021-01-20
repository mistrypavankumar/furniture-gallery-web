import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { auth } from "../../firebase/config"

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import {
  EventSeat,
  Home,
  KingBed,
  Tv,
  Weekend,
  PowerSettingsNew,
  LabelImportant
} from "@material-ui/icons";
import useFirestore from "../../hooks/useFirestore";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeFragment from "../../fragments/homeFragment/HomeFragment";


const drawerWidth = 240;
const themeColor = "rgb(252, 52, 52)";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
  },
  appBar: {
    backgroundColor: themeColor,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DashBoard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState("");
  const history = useHistory();


  const _collection = "beds";
  const { docs } = useFirestore(_collection);

  async function handleLogout() {
    setError("")

    try
    {
      await auth.signOut()
        .history.push("/adminlogin")
    } catch {
      setError("Failed to log out")
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <KingBed />
            </ListItemIcon>
            <ListItemText primary="Beds" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <Weekend />
            </ListItemIcon>
            <ListItemText primary="Sofas" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <LabelImportant />
            </ListItemIcon>
            <ListItemText primary="Dinning Tables" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <EventSeat />
            </ListItemIcon>
            <ListItemText primary="Charis" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <Tv />
            </ListItemIcon>
            <ListItemText primary="Tv Stands" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <LabelImportant />
            </ListItemIcon>
            <ListItemText primary="Dressing Tables" />
          </ListItem>

          <Divider />
          <ListItem button onClick={handleLogout} >
            <ListItemIcon>
              <PowerSettingsNew />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Toolbar /> */}
        <HomeFragment />
      </main>
    </div>
  );
}