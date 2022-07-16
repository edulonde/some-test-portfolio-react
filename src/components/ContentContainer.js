import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( () => ({
    contentContainer:{
        padding: '0 72px',
        width: '70%'
    }
}));

const ContentContainer = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.contentContainer}>
            {props.children}
        </div>
    )
}

export default ContentContainer;