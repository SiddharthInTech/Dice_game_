import styled from "styled-components";

const RoleDice = ({currentDice , roleDice}) => {



    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice${currentDice}.png`} alt={`dice_${currentDice}`} />
            </div>
            <p>Click on dice to roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
    }

    img {
        height: var(--dice-size, 200px);
        width: var(--dice-size, 200px);
        object-fit: contain; 
    }

    p {
        font-weight: 700;
    }
`;

