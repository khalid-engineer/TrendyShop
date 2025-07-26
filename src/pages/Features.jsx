import { useState } from 'react';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const styles = {
    container: {
      padding: '2rem',
      background: 'linear-gradient(135deg, #dbeafe, #f0fdf4)',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#1e3a8a',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      background: '#ffffff',
      padding: '1.5rem',
      borderRadius: '16px',
      boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '0.5rem',
    },
    description: {
      fontSize: '0.95rem',
      color: '#6b7280',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      maxWidth: '450px',
      width: '90%',
      fontFamily: 'Segoe UI',
      textAlign: 'center',
    },
    modalImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '1rem',
    },
    closeBtn: {
      marginTop: '1.5rem',
      padding: '0.5rem 1.2rem',
      border: 'none',
      background: '#3b82f6',
      color: 'white',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };

  const features = [
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and reliability using React’s virtual DOM.',
      details: 'With efficient rendering and lazy loading, we ensure snappy interactions even on slower devices.',
      image:'	https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Responsive Design',
      description: 'Seamless experience across mobile, tablet, and desktop devices.',
      details: 'Our layout adapts fluidly to screen sizes using modern CSS and Flex/Grid techniques.',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Secure Code',
      description: 'Built with best practices to prevent vulnerabilities.',
      details: 'Includes input validation, token-based auth, and security headers to protect users.',
      image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fbf57?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'API Integration',
      description: 'Easily connects with external APIs for real-time data.',
      details: 'Fetches and syncs data from RESTful APIs with error handling and caching.',
      image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Dark Mode Ready',
      description: 'Supports both light and dark themes for user preference.',
      details: 'Toggle between dark/light UI for comfort with localStorage preference memory.',
      image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Component Reusability',
      description: 'Highly modular code using reusable components and hooks.',
      details: 'Boosts dev speed and consistency across the app via shared UI elements and logic.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🚀 App Features</h2>

      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
            }}
            onClick={() => setSelectedFeature(feature)}
          >
            <img src={feature.image} alt={feature.title} style={styles.image} />
            <div style={styles.title}>{feature.title}</div>
            <div style={styles.description}>{feature.description}</div>
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div style={styles.modalOverlay} onClick={() => setSelectedFeature(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              style={styles.modalImage}
              referrerPolicy="no-referrer"
            />
            <h3>{selectedFeature.title}</h3>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>{selectedFeature.details}</p>
            <button style={styles.closeBtn} onClick={() => setSelectedFeature(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
