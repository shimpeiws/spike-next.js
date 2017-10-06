import React from "react";

export default class Items extends React.Component {
  render() {
    console.info("this.props.url.query", this.props.url.query);
    return (
      <div>
        <h2>
          itemx details {this.props.url.query.id}
        </h2>
      </div>
    );
  }
}
