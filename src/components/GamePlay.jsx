import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
   const [Score, setScore] = useState(0);
   const [SelectedNumber, setSelectedNumber] = useState();
   const [currentDice, setcurrentDice] = useState(1);
   const [Error, setError] = useState("");

   const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
   };

   const roleDice = () => {
      if (!SelectedNumber) {
         setError("You have not selected any number");
         return;
      }
      setError("");
      const randomNumber = generateRandomNumber(1, 7);
      setcurrentDice((prev) => randomNumber);

      if (SelectedNumber === randomNumber) {
         setScore((prev) => prev + randomNumber);
      } else {
         setScore((prev) => prev - 2);
      }
      setSelectedNumber(undefined);
   };

   return (
      <MainContainer>
         <div className="top_section">
            <TotalScore Score={Score} />
            <NumberSelector
               Error={Error}
               SelectedNumber={SelectedNumber}
               setSelectedNumber={setSelectedNumber}
            />
         </div>
         <RoleDice currentDice={currentDice} roleDice={roleDice} />
      </MainContainer>
   );
};

export default GamePlay;

const MainContainer = styled.main`
   margin-top: 70px;
   padding: 20px;

   .top_section {
      display: flex;
      justify-content: space-around;
      align-items: center;
   }

   @media (max-width: 768px) {
      .top_section {
         flex-direction: column;
         gap: 20px;
      }
   }

   @media (max-width: 480px) {
      .top_section {
         flex-direction: column;
         gap: 15px;
         padding: 10px;
      }
   }
`;
