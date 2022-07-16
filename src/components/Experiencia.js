import React from "react";
import Grid from "@material-ui/core/Grid";
import PageHeader from "./PageHeader";
import ContentContainer from "./ContentContainer"
import ProjetoCard from "./ProjetoCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    projectsContainer: {
        display: 'flex'
    }
}));

const Experiencia = (data) => {
    const classes = useStyles();
    return (
        <ContentContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.projectsContainer}>
                    <PageHeader title="Experiencia"/>
                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    {data.data.experiencia.map((job, i) => {
                        const {company, title, about} = job;
                        return (
                            <Grid item xs={4}>
                                {company}, {title}, {about}
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </ContentContainer>
    )
}

export default Experiencia;