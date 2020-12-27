import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 57px;
    left: 0px;
    top: 0px;

    background: #FAF8F4;
`;
function Header() {
    return (
        <HeaderDiv></HeaderDiv>
    );
}

export default Header;