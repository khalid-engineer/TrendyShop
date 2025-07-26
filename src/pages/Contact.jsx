import { useState } from 'react';

const Contact = () => {
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      width: '100%',
    },
    header: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      margin: '0.5rem 0',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
      transition: 'background-color 0.3s ease',
    },
    success: {
      marginTop: '1rem',
      color: '#16a34a',
      textAlign: 'center',
      fontWeight: '500',
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('contacts')) || [];
    existing.push(formData);
    localStorage.setItem('contacts', JSON.stringify(existing));

    setSubmitted(true);

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000); // remove success msg after 3s
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.header}>📬 Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{ ...styles.input, resize: 'none' }}
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
        {submitted && <div style={styles.success}>✅ Message saved successfully!</div>}
      </form>
    </div>
  );
};

export default Contact;
