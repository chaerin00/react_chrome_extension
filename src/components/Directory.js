import React from 'react';
import styled from 'styled-components';

const DirectoryDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin:50px;
`;
const Dir1=styled.div`
    margin: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`;
const Dir2=styled.div`
    margin:20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #C8C5C5;


`;
function Directory() {
    return (
        <DirectoryDiv>
            <Dir1>All cookies</Dir1>
            <Dir2>Directory</Dir2>
        </DirectoryDiv>
    );
}

export default Directory;