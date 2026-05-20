import React, { useState } from 'react';
function Nadvar() {
  const [activeItem, setActiveItem] = useState('Inicio');
  const [search, setSearch] = useState('');
  const menuItems = ['Inicio', 'Películas', 'Series', 'Mi Lista'];
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 2rem',
    background: 'linear-gradient(to bottom, #000000 80%, rgba(13, 13, 13, 0.95))',
    borderBottom: '1px solid #2a2a2a',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  };
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
  };
  const logoTextStyle = {
    fontFamily: "'Outfit', 'Cinzel', serif",
    fontWeight: '800',
    fontSize: '1.4rem',
    letterSpacing: '0.05em',
    background: 'linear-gradient(45deg, #c8a96e, #f0ece4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  };
  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
  };
  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: '#161616',
    border: '1px solid #2a2a2a',
    borderRadius: '20px',
    padding: '0.4rem 0.8rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };
  const searchInputStyle = {
    background: 'transparent',
    border: 'none',
    color: '#f0ece4',
    marginLeft: '0.5rem',
    outline: 'none',
    fontSize: '0.85rem',
    width: '160px',
    transition: 'width 0.3s',
  };
  return (
    <nav style={navbarStyle}>
      <a href="/" style={logoStyle}>
        <span style={{ fontSize: '1.5rem', color: '#c8a96e' }}>🪐</span>
        <h1 style={logoTextStyle}>FORCEPLAY</h1>
      </a>
      <ul style={navListStyle}>
        {menuItems.map((item) => {
          const isActive = activeItem === item;
          return (
            <li key={item}>
              <button
                onClick={() => setActiveItem(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#c8a96e' : '#a0a0a0',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? '600' : '400',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'color 0.3s',
                }}
              >
                {item}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: '#c8a96e',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px #c8a96e',
                    }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div style={searchContainerStyle}>
        <span style={{ fontSize: '0.9rem', color: '#c8a96e' }}>🔍</span>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInputStyle}
          onFocus={(e) => {
            e.currentTarget.parentElement.style.borderColor = '#c8a96e';
            e.currentTarget.parentElement.style.boxShadow = '0 0 10px rgba(200, 169, 110, 0.2)';
            e.target.style.width = '200px';
          }}
          onBlur={(e) => {
            e.currentTarget.parentElement.style.borderColor = '#2a2a2a';
            e.currentTarget.parentElement.style.boxShadow = 'none';
            e.target.style.width = '160px';
          }}
        />
      </div>
    </nav>
  );
}
export default Nadvar;
export { Nadvar };