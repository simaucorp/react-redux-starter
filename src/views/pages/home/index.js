import React, { Component } from "react";
import { TwoColumnRightSidebar } from "../../layouts";
import { RoundedButton } from "../../components";

class HomePage extends Component {
  render() {
    return (
      <TwoColumnRightSidebar>
        <h3>Form title</h3>
        <RoundedButton variant="contained" color="primary">
          Test
        </RoundedButton>
      </TwoColumnRightSidebar>
    );
  }
}

export default HomePage;
