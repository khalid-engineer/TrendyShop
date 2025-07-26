import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
    window.location.reload(); // Optional: forces full reload to reset state
  };

  const styles = {
    nav: {
      background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
      padding: '15px 30px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '25px',
      margin: 0,
      padding: 0,
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 500,
      transition: 'all 0.3s ease',
    },
    logout: {
      cursor: 'pointer',
      color: '#ff6363',
      fontSize: '1.1rem',
      fontWeight: 500,
      border: 'none',
      background: 'none',
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>🏠 Home</Link></li>
        <li><Link to="/about" style={styles.link}>📖 About</Link></li>
        <li><Link to="/features" style={styles.link}>⚙️ Features</Link></li>
        <li><Link to="/contact" style={styles.link}>📞 Contact</Link></li>
        <li><button onClick={handleLogout} style={styles.logout}>🚪 Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
