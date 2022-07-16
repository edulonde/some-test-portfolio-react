import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 0',
        alignItems: 'center'
    },
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerDetail: {
        paddingRight: 40,
        '& h2': {
            marginTop: 0,
            fontFamily: 'Georgia',
            fontSize: 40,
            color: '#000',
            '&:after': {
                content: '""',
                backgroundColor: "#F0CC71",
                position: 'relative',
                width: 36,
                height: 4,
                top: 15,
                display: 'block'


            }
        }
    }
}));

const PageHeader = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div className={classes.headerWrapper}>
                <div className={classes.headerDetail}>
                    <h2> {props.title}</h2>

                </div>
            </div>
        </div>
    )
}
export default PageHeader;