import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', justifyContent: 'center',
      alignItems: 'center', background: '#f3f4f6'
    }}>
      <form onSubmit={handleRegister} style={{
        background: '#fff', padding: '2rem', borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '400px'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>📝 Register</h2>
        <input
          type="text"
          placeholder="Choose a Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Choose a Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <button type="submit" style={{
          width: '100%', padding: '10px', background: '#22c55e',
          color: '#fff', border: 'none', borderRadius: '8px'
        }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
