import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import KeyBoard from "../Components/KeyBoard";

class LoginPage extends Component {
  state = {
    loginID: "",
  };

   

  render() {
    return (
      <>
        <Wrapper>
          <KeyBoard />
        </Wrapper>
      </>
    );
  }
}

export default LoginPage;
