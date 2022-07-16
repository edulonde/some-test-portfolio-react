import React from "react";
import Grid from "@material-ui/core/Grid";
import PageHeader from "./PageHeader";
import ContentContainer from "./ContentContainer";

const Sobre = () => {
    return (
        <ContentContainer>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <PageHeader title="Sobre" />
                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <p>Sobre: site para aprendizagem de React</p>
                </Grid>
            </Grid>
        </ContentContainer>
    )
}

export default Sobre;