import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MuiListItem from "@material-ui/core/ListItem";
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import {Drawer, ListItemText} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Home,Sobre, Contato, Projetos, Experiencia} from './components';
import data from './data';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    drawerPaper: {
        width: 'inherit',
        backgroundColor: '#47423E',
        colorAdjust: 'exact'
    },
    logoWrapper: {
        padding: '10px 0px 10px 18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        '& a': {
            padding: '0 10px 0 0',
            color: '#FFF',
            fontFamily: 'Arial',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: 30,
        }
    },
    link: {
        textDecoration: 'none',
        color: '#FBF9F8',
        colorAdjust: '#fff'
    },
    navLink: {
        '& span': {
            fontFamily: 'Arial',
            fontSize: 16,
            fontWeight: 700
        }
    },
    drawerWidth: {
        width: '240px'
    },
    responsiveMainNav: {
        display: 'none',
    },
    responsiveMainNavColor: {
        backgroundColor: '#47423E'
    },
    '@media screen and (max-width: 992px)': {
        responsiveMainNav: {
            display: 'inline',
        }
    }

}));

const ListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: 'rgba(255, 255, 255, 0.04',
            color: '#FFFFFF',
            borderleft: '3px solid #5F7D4F',
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        },
        "&$selected:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.04',
            color: '#FFFFFF',
            borderleft: '3px solid #5F7D4F',
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        },
        "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.04',
            color: '#FFFFFF',
            borderleft: '3px solid #5F7D4F',
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        }
    }
})(MuiListItem);

function App() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.mainContainer}>
                <div className={classes.mainContainer}>
                    <Box className={classes.responsiveMainNav} sx={{flexGrow: 1}}>
                        <AppBar position="static" classes={{root: classes.responsiveMainNavColor}}>
                            <Toolbar>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Drawer
                        anchor = "left"
                        variant = "permanent"
                        classes={{paper: classes.drawerPaper, docked: classes.drawerWidth}}>

                        <List>
                            <div className={classes.logoWrapper}>
                                <div className={classes.logo}>
                                    <a href="/" > Edu </a>
                                </div>
                            </div>
                            {data && data.navigation.map((item, i) =>
                            <NavLink
                                exact
                                className= {classes.link}
                                activeClassName = "selected"
                                key={i}
                                to={`${item.path}`}>
                                <ListItem button >
                                    <ListItemText className={classes.navLink}>
                                        {item.label}
                                    </ListItemText>
                                </ListItem>
                            < /NavLink>
                            )}

                        </List>
                    </Drawer>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/sobre">
                            <Sobre />
                        </Route>
                        <Route exact path="/experiencia">
                        <Experiencia data={data}/>
                    </Route>
                        <Route exact path="/projetos">
                        <Projetos data={data}/>
                    </Route>
                        <Route exact path="/contato">
                        <Contato />
                    </Route>
                    </Switch>
                </div>
            </div>


        </Router>
    );
}

export default App;
