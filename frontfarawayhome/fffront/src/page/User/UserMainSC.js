import styled from "styled-components";

export const DivSC = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : 50vh;

    & button {
        margin : 1em;
        width : 30%;
        height : 20%;
    }
`