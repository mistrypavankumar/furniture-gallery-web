import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../../firebase/config"

import { makeStyles } from '@material-ui/core/styles';
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


const drawerWidth = 240;
const appBarHeight = 70;
const themeColor = "rgb(252, 52, 52)";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: appBarHeight,
    backgroundColor: themeColor,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  logoutBtn: {
    backgroundColor: themeColor,
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function Dashboard() {
  const [error, setError] = useState("");
  const history = useHistory();
  const classes = useStyles();

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar display="flex">
          <Typography variant="h5" Wrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
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
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

      </main>
    </div>
  );
}