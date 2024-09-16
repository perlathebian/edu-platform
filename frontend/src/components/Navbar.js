import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; 
  top: 0;
  z-index: 1000;
`;

const NavTitle = styled.h1`
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  flex-grow: 1; 
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5em;
  cursor: pointer;
  margin: 0 30px;
`;

const HomeIconButton = styled(IconButton)`
  margin-right: 10px; /* Add margin for spacing */
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  padding: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')}; 
  z-index: 999;
`;

export const Navbar = ({ toggleTheme, theme, menuItems = [], showHomeIcon = false, onHomeClick}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };  

    const handleMenuItemClick = (item) => {
        if (item.path) {
          navigate(item.path); // Navigate to the specified path
        }
        setMenuOpen(false); // Close the menu after clicking
    };
    
    return (
        <>    
            <NavbarContainer>
                {/* Conditionally render the Home icon */}
                {showHomeIcon && (
                  <HomeIconButton onClick={onHomeClick}>🏠</HomeIconButton>
                )}
                <IconButton onClick={handleMenuToggle}>☰</IconButton> 
                <NavTitle>Aptara.</NavTitle>
                <IconButton onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</IconButton>
            </NavbarContainer>

            <MenuDropdown show={isMenuOpen}>
                {menuItems.map((item, index) => (
                    <p key={index} onClick={() => handleMenuItemClick(item)}>
                        {item.name}
                    </p>
                    ))}
            </MenuDropdown>
        </>
    );
};
