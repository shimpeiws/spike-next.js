import React from "react";
import styles from "./style";

export default function StyledComponents(props) {
  const { MessageWrapper, Message } = styles;
  return (
    <MessageWrapper>
      <Message>This Is Styled!!!</Message>
    </MessageWrapper>
  );
}
