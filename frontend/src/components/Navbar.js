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

const AuthButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AuthButton = styled.button`
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;

const UsernameDisplay = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  margin-right: 15px;
  font-size: 1em;
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

    const token = localStorage.getItem('token');
    let role = null;
    let user = null;
    // const user = localStorage.getItem('username'); // We'll store this after login

    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      role = decodedToken.role; // Extract the role from the decoded token
      user = decodedToken.email; // You can extract more info if needed, like email or username
    }

    const handleLogin = () => {
      navigate('/login');
    };
  
    const handleSignup = () => {
      navigate('/signup');
    };

    const handleLogout = () => {
      // Clear token and user info
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/');
    };

    const goToTeacherPage = () => {
      navigate('/teacher');
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
                {token ? (
                  <>
                    <UsernameDisplay>{user}</UsernameDisplay>
                    {role === 'teacher' && (
                      <IconButton onClick={goToTeacherPage}>👩‍🏫</IconButton> // Teacher icon
                    )}
                    <AuthButton onClick={handleLogout}>Sign Out</AuthButton>
                  </>
                ) : (
                  <AuthButtonsContainer>
                    <AuthButton onClick={handleLogin}>Login</AuthButton>
                    <AuthButton onClick={handleSignup}>Sign Up</AuthButton>
                  </AuthButtonsContainer>
                )}
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
