import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

const ForOFourPage = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    style={{ minHeight: "90vh" }}
  >
    <Grid item xs={12}>
      <Typography variant="h3" color="secondary" align="center">
        404
      </Typography>
      <Typography variant="h4" align="center">
        You seems to be lost!
      </Typography>
      <Typography variant="h5" align="center">
        You can start over <Link to="/">here</Link>.
      </Typography>
    </Grid>
  </Grid>
);

export default ForOFourPage;
