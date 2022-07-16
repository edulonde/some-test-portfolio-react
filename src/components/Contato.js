import React from "react";
import Grid from "@material-ui/core/Grid";
import PageHeader from "./PageHeader";
import ContentContainer from "./ContentContainer";

const Contato = () => {
    return (
        <ContentContainer>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <PageHeader title="Contato" />
                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <p>e-mail telefone etc</p>
                </Grid>
            </Grid>
        </ContentContainer>
    )
}

export default Contato;