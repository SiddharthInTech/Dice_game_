import styled from "styled-components";

const TotalScore = ({ Score }) => {
  return (
    <ScoreContainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 70px; /* Reduce font size for tablets */
    }
    p {
      font-size: 20px; /* Adjust paragraph font size */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 50px; /* Further reduce font size for mobile */
    }
    p {
      font-size: 18px; /* Adjust paragraph font size for mobile */
    }
  }
`;
