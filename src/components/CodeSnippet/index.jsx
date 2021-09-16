import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Normal, InsideProps, NoWrap } from "./styles";

const CodeSnippet = ({ name, value }) => {
  return (
    <Wrapper>
      <Normal color="pink">{name}</Normal>
      <Normal>{" = {"}</Normal>
      <br />
      <InsideProps>
        {Object.keys(value).map((v) => {
          return (
            <>
              <NoWrap key={v}>
                <Normal>{`"${v}": `}</Normal>
                <Normal color="lightBlue">{`"${value[v]}"`}</Normal>
              </NoWrap>
              <br />
            </>
          );
        })}
      </InsideProps>
      <Normal>{"}"}</Normal>
    </Wrapper>
  );
};

CodeSnippet.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
};

export default CodeSnippet;
