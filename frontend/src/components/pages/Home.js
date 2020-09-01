import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import auth from "../auth/auth-helper";
import orc from "../../images/Orc.svg";
import king from "../../images/King.svg";

const Home = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <Typography type="headline" component="h2" className={classes.title}>
          Welcome to the LOAN APP
          {auth.isAuthenticated()
            ? " " + auth.isAuthenticated().user.name + "!"
            : ""}
        </Typography>
        {auth.isAuthenticated() ? (
          <CardMedia
            className={classes.media}
            image={king}
            title="Auth with MERN"
          />
        ) : (
          <CardMedia
            className={classes.media}
            image={orc}
            title="Auth with MERN"
          />
        )}

        <CardContent>
          <Typography type="body1" component="p">
            This is a demo application that uses a Node + MongoDB API for user
            authentication. Built With React + Material UI. Backend runs on
            localhost:4000.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing() *
      2}px`,
    color: theme.palette.text.secondary,
    fontSize: 24,
  },
  media: {
    minHeight: 450,
  },
});
export default withStyles(styles)(Home);
