import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { RawHTML } from "../components/";

const TwoColumnRightSidebar = ({ header, sidebar, footer, children }) => (
  <Container maxWidth="lg">
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box component="div" style={{ height: "70px" }}>
          <RawHTML
            html={`<div style="background-color: #e2e2e2; padding: 10px 20px; border-radius: 4px; text-align: center;"><h2>Fill up the form below</h2></div>`}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {children}
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {sidebar}
      </Grid>
      <Grid item xs={12}>
        {footer}
      </Grid>
    </Grid>
  </Container>
);

export default TwoColumnRightSidebar;
