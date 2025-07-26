import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/');
    }
  }, [navigate]);

 const handleLogin = (e) => {
  e.preventDefault();

  const savedUser = 'khalid';
  const savedPass = '0011';

  if (username === savedUser && password === savedPass) {
    localStorage.setItem('isLoggedIn', 'true');
    onLogin(); // Let App know you're logged in
    navigate('/');
  } else {
    alert('Invalid credentials.');
  }
};


  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f3f4f6'
    }}>
      <form onSubmit={handleLogin} style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>🔐 Login</h2>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
