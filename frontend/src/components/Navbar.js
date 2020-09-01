import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import auth from "./auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

const drawerWidth = 150;

const Navbar = withRouter(({ history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={0} direction="row" alignItems="center">
            <Grid item xs={3} sm={2} md={1} lg={1} align="center">
              <Link to="/" className={classes.link}>
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                  <Home />
                </IconButton>
              </Link>
              {auth.isAuthenticated() && (
                <IconButton
                  aria-label="Menu"
                  style={openStyle(open)}
                  onClick={() => setOpen(!open)}
                >
                  <Menu />
                </IconButton>
              )}
            </Grid>
            <Grid item xs={3} sm={6} md={8} lg={9}>
              <Typography noWrap type="title" color="inherit">
                Enter/Edit Loan Number: N1234MW (DATA1234) - Application
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} align="center">
              {!auth.isAuthenticated() && (
                <span>
                  <Link to="/signup" className={classes.link}>
                    <Button style={isActive(history, "/signup")}>
                      Sign up
                    </Button>
                  </Link>
                  <Link to="/signin" className={classes.link}>
                    <Button style={isActive(history, "/signin")}>
                      Sign In
                    </Button>
                  </Link>
                </span>
              )}
              {auth.isAuthenticated() && (
                <span>
                  <Link
                    to={"/user/" + auth.isAuthenticated().user._id}
                    className={classes.link}
                  >
                    <Button
                      style={isActive(
                        history,
                        "/user/" + auth.isAuthenticated().user._id
                      )}
                    >
                      {auth.isAuthenticated().user.name}
                    </Button>
                  </Link>
                  <Link to={"/"} className={classes.link}>
                    <Button
                      style={isActive(
                        history,
                        "/" + auth.isAuthenticated().user._id
                      )}
                      color="inherit"
                      onClick={() => {
                        auth.signout(() => history.push("/"));
                      }}
                    >
                      Sign out
                    </Button>
                  </Link>
                </span>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {auth.isAuthenticated() &&
        open && (
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            onClick={() => setOpen(!open)}
          >
            <Toolbar />
            {/* <List>
            <ListItem button>Item 1</ListItem>
            <ListItem button>Item 1</ListItem>
            <ListItem button>Item 1</ListItem>
            </List>
            <Divider /> */}
          </Drawer>
        )}
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
});

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {
      // padding: 5,
      color: "#2c7ac9",
    };
  else
    return {
      // padding: 5,
      color: "#ffffff",
    };
};
const openStyle = (o) => {
  if (o)
    return {
      // padding: 5,
      color: "#2c7ac9",
    };
  else
    return {
      // padding: 5,
      color: "#ffffff",
    };
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // lineHeight: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    minHeight: 5,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    // padding: 5,
  },
  icon: {
    paddingLeft: 15,
  },
}));

export default Navbar;
// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Grid from "@material-ui/core/Grid";
// import Home from "@material-ui/icons/Home";
// import Button from "@material-ui/core/Button";
// import auth from "./auth/auth-helper";
// import { Link, withRouter } from "react-router-dom";

// const isActive = (history, path) => {
//   if (history.location.pathname === path)
//     return {
//       padding: 5,
//       color: "#2c7ac9",
//     };
//   else
//     return {
//       padding: 5,
//       color: "#ffffff",
//     };
// };

// const style = {
//   root: {
//     lineHeight: 0,
//   },
//   toolbar: {
//     minHeight: 5,
//     padding: 0,
//   },
//   link: {
//     textDecoration: "none",
//     color: "#ffffff",
//     padding: 5,
//   },
//   icon: {
//     paddingLeft: 15,
//   },
// };

// const Menu = withRouter(({ history }) => (
//   <AppBar position="static">
//     <Toolbar style={style.toolbar}>
//       <Grid container spacing={0} direction="row" alignItems="center">
//         <Grid item xs={2} sm={1} md={1} lg={1} align="center">
//           <Link to="/">
//             <IconButton aria-label="Home" style={isActive(history, "/")}>
//               <Home />
//             </IconButton>
//           </Link>
//         </Grid>
//         <Grid item xs={4} sm={7} md={8} lg={9}>
//           <Typography noWrap type="title" color="inherit">
//             Enter/Edit Loan Number: N1234MW (DATA1234) - Application
//           </Typography>
//         </Grid>
//         <Grid item xs={6} sm={4} md={3} lg={2} align="center">
//           {!auth.isAuthenticated() && (
//             <span>
//               <Link to="/signup" style={style.link}>
//                 <Button style={isActive(history, "/signup")}>Sign up</Button>
//               </Link>
//               <Link to="/signin" style={style.link}>
//                 <Button style={isActive(history, "/signin")}>Sign In</Button>
//               </Link>
//             </span>
//           )}
//           {auth.isAuthenticated() && (
//             <span>
//               <Link
//                 to={"/user/" + auth.isAuthenticated().user._id}
//                 style={style.link}
//               >
//                 <Button
//                   style={isActive(
//                     history,
//                     "/user/" + auth.isAuthenticated().user._id
//                   )}
//                 >
//                   {auth.isAuthenticated().user.name}
//                 </Button>
//               </Link>
//               <Link to={"/"} style={style.link}>
//                 <Button
//                   style={isActive(
//                     history,
//                     "/" + auth.isAuthenticated().user._id
//                   )}
//                   color="inherit"
//                   onClick={() => {
//                     auth.signout(() => history.push("/"));
//                   }}
//                 >
//                   Sign out
//                 </Button>
//               </Link>
//             </span>
//           )}
//         </Grid>
//       </Grid>
//     </Toolbar>
//   </AppBar>
// ));

// export default Menu;
