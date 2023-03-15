import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { Wrapper, Normal, InsideProps, NoWrap, TextEditor } from "./styles";

const CodeSnippet = ({ name, value, easterEgg = false, delay }) => {
  const [eeKey, setEeKey] = useState("");
  const [eeVal, setEeVal] = useState("");
  const easterEggUsed = useRef(false);
  const keys = Object.keys(value);

  const easterEggBuild = useCallback(() => {
    let editorPosition = <TextEditor delay={delay} />;
    if (eeKey)
      editorPosition = (
        <>
          <br />
          <Normal>{eeKey}</Normal>
          <Normal color="lightBlue">{eeVal}</Normal>
          <TextEditor delay={delay} />
        </>
      );

    return editorPosition;
  }, [eeKey, eeVal]);

  const startEasterEgg = useCallback(() => {
    if (easterEggUsed.current || !easterEgg) return;

    const keyObj = `"nickname": `;
    const valObj = `"Pxon"`;

    let incr = 0;
    for (let i = 0; i < keyObj.length; i++) {
      const randomNumber = 120 + Math.random() * 80;
      incr += randomNumber;
      setTimeout(() => {
        setEeKey((p) => p + keyObj[i]);
      }, incr);
    }

    for (let i = 0; i < valObj.length; i++) {
      const randomNumber = 160 + Math.random() * 40;
      incr += randomNumber;
      setTimeout(() => {
        setEeVal((p) => p + valObj[i]);
      }, incr);
    }

    easterEggUsed.current = true;
  }, []);

  return (
    <Wrapper onClick={startEasterEgg}>
      <Normal color="pink">{name}</Normal>
      <Normal>{" = {"}</Normal>
      <br />
      <InsideProps>
        {keys.map((v) => {
          return (
            <div key={v}>
              <NoWrap>
                <Normal>{`"${v}": `}</Normal>
                <Normal color="lightBlue">{`"${value[v]}"`}</Normal>
                <Normal> ,</Normal>
              </NoWrap>
              {easterEgg && v === keys[keys.length - 1] && easterEggBuild()}
              <br />
            </div>
          );
        })}
      </InsideProps>
      <Normal>&#125;</Normal>
      {!easterEgg && <TextEditor delay={delay} />}
    </Wrapper>
  );
};

CodeSnippet.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  easterEgg: PropTypes.bool,
  delay: PropTypes.bool,
};

export default CodeSnippet;
