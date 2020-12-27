import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
    display:flex;
    align-items: center; 
    justify-content: center;
    width: 100%;
    height: 257px;
    left: 0px;
    top: 51px;

    background: #D0D0D0;
`;
const SearchBox=styled.div`
    width: 48%;
    height: 12%;

    background: #FFFFFF;
    border-radius: 50px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align:center;

    color: #6A6768;

`;
function Search() {
    return (
        <SearchDiv>
            <SearchBox>Cookie Search</SearchBox>
        </SearchDiv>
    );
}

export default Search;