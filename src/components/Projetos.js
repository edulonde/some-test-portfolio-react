import React from "react";
import Grid from "@material-ui/core/Grid";
import PageHeader from "./PageHeader";
import ContentContainer from "./ContentContainer"
import ProjetoCard from "./ProjetoCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({
    projectsContainer: {
        display: 'flex'
    }
}));

const Projetos = (data) => {
    const classes = useStyles();
    return (
        <ContentContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.projectsContainer}>
                    <PageHeader title="Projetos" />
                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    {data.data.projetos.map((projeto, i) => {
                        const {name,link} = projeto;
                        return (
                            <Grid item xs={4}>
                            <ProjetoCard name={name} link={link}/>
                    </Grid>
                    )
                    })}
                </Grid>
            </Grid>
        </ContentContainer>
    )
}

export default Projetos;