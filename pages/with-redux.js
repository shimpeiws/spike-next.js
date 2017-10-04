import React from "react";
import { initStore, startClock, addCount, serverRenderClock } from "../store";
import withRedux from "next-redux-wrapper";

class WithRedux extends React.Component {
  render() {
    return <h2>with-redux.js</h2>;
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRedux(initStore, null, mapDispatchToProps)(WithRedux);
