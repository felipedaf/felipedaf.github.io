import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ContentContainer,
  SelectContainer,
  SelectOption,
  Wrapper,
} from "./styles";

const TextSelector = ({ options }) => {
  const [selected, setSelected] = useState(Object.keys(options)[0]);

  return (
    <Wrapper>
      <SelectContainer>
        {Object.keys(options).map((k) => {
          return (
            <SelectOption
              onClick={() => setSelected(k)}
              chose={selected === k}
              key={k}
            >
              {k}
            </SelectOption>
          );
        })}
      </SelectContainer>
      <ContentContainer>{options[selected].text.join("\n\n")}</ContentContainer>
    </Wrapper>
  );
};

TextSelector.propTypes = {
  options: PropTypes.object.isRequired,
};

export default TextSelector;
