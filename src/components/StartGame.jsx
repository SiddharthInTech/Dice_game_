import React from 'react';
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <>
      <Container>
        <div>
          <img src="/images/dices.png" alt="Dices" />
        </div>
        <div>
          <h1 className="content">Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1182px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;

  .content {
    font-size: 76px;
    white-space: nowrap;
  }

  img {
    max-width: 50%;
    height: auto;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .content {
      font-size: 48px;
    }
  }

  @media (max-width: 480px) {
    .content {
      font-size: 36px; 
    }
  }
`;

const Button = styled.button`
  width: 220px;
  height: auto;
  padding: 10px 18px;
  border-radius: 5px;
  font-weight: 900;
  gap: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }

  @media (max-width: 768px) {
    width: 180px;
    font-size: 16px; 
    padding: 8px 16px; 
  }

  @media (max-width: 480px) {
    width: 150px;
    font-size: 14px; 
    padding: 6px 14px; 
  }
`;

