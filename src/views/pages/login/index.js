import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { TwoColumnRightSidebar } from "../../layouts";
import { authActions } from "../../../state/auth";

class LoginPage extends Component {
  state = {
    formData: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    const { login } = this.props;
    e.preventDefault();
    login(this.state.formData);
  };

  handleCheckStatus = () => {
    const { checkStatus } = this.props;
    checkStatus();
  };

  componentDidUpdate() {
    const { history, logInCompleted } = this.props;
    if (logInCompleted) {
      history.push("/profile");
    }
  }

  render() {
    return (
      <TwoColumnRightSidebar>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <label htmlFor="email" style={{ marginRight: 10 }}>
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label htmlFor="password" style={{ marginRight: 10 }}>
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <Button type="submit" color="primary">
              Login
            </Button>
          </form>
          <Button onClick={this.handleCheckStatus}>Check Status</Button>
        </div>
      </TwoColumnRightSidebar>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token,
    isLoggingIn: auth.isLoggingIn,
    logInCompleted: auth.logInCompleted
  };
};

const mapActionsToProps = {
  login: authActions.login,
  checkStatus: authActions.checkStatus
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(LoginPage));
