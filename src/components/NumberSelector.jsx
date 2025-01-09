import styled from "styled-components";

const NumberSelector = ({ Error, SelectedNumber, setSelectedNumber }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="Error">{Error}</p>
      <div className="flex">
        {arrayNumber.map((value, index) => (
          <Box
            isSelected={value === SelectedNumber}
            key={index}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items on smaller screens */
  margin: 10px;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    justify-content: center; /* Center the boxes */
  }

  .Error {
    color: red;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    p {
      font-size: 20px; /* Smaller font size for tablets */
    }

    .flex {
      gap: 16px; /* Reduce gap between boxes on tablets */
    }

    .Box {
      height: 60px;
      width: 60px;
      font-size: 28px; /* Smaller font size for boxes on tablets */
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 18px; /* Smaller font size for mobile */
    }

    .flex {
      gap: 12px; /* Further reduce gap between boxes on mobile */
    }

    .Box {
      height: 50px;
      width: 50px;
      font-size: 24px; /* Further reduce font size for boxes on mobile */
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 600;
  transition: 0.2s background ease-in;
  background: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 0.2s background ease-in;
  }

  /* Adjust box size and font for smaller screens */
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 24px;
  }
`;
