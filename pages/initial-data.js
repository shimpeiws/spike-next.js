import React from "react";
import axios from "axios";
import Link from "next/link";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await axios.get("https://httpbin.org/uuid");
    console.info("res", res.data.uuid);
    return { uuid: res.data.uuid };
  }

  render() {
    console.info("render props", this.props);
    return (
      <div>
        Hello World {this.props.uuid}
        <Link href="/hello">
          <a>here</a>
        </Link>
      </div>
    );
  }
}
