import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Options = styled.div`
  position: absolute;
  background-color: #263238;
  width: 100%;
  min-height: 100px;
  border: 2px solid black;
  z-index: 100;
  border-radius: 6px;
`;

const Option = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: #6c757d;
  }

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }
`;

const Dropdown = ({ btnProps, options, setOption }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdown = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  const handleClickOutside = (event) => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const chooseOption = (value) => {
    setShowOptions(false);
    setOption(value);
  };

  return (
    <Container ref={dropdown}>
      <Button {...btnProps} onClick={() => setShowOptions(!showOptions)}>
        {btnProps.label}
      </Button>
      {showOptions && (
        <Options>
          {options.map((item, i) => (
            <Option key={i} onClick={() => chooseOption(item.value)}>
              {item.label}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Dropdown;
