import React from "react";
import Grid from "@material-ui/core/Grid";
import PageHeader from "./PageHeader";
import ContentContainer from "./ContentContainer";

const Home = () => {
    return (
        <ContentContainer>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <PageHeader title="Home" />
                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <p>Aqui o conteúdo da HomePage</p>
                </Grid>
            </Grid>
        </ContentContainer>
    )
}

export default Home;