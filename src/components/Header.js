import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: linear-gradient(90deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.accent} 100%);
    color: #fff;
    padding: 2rem 1rem 1.5rem 1rem;
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(30,60,114,0.15);

    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1.1rem;
        color: #e0e0e0;
    }
`;

const Header = () => (
    <StyledHeader>
        <h1> 🎵Mi Biblioteca Musical</h1>
        <p>Descubre y organiza tu musica favorita</p>
    </StyledHeader>
);

export default Header;