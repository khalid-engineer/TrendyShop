import { useState } from 'react';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const styles = {
    container: {
      padding: '2rem',
      background: '#f9fafb',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
    },
    header: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    section: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      marginBottom: '2rem',
    },
    missionText: {
      fontSize: '1.1rem',
      color: '#374151',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1.5rem',
    },
    memberCard: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem auto',
    },
    name: {
      fontWeight: '600',
      fontSize: '1rem',
    },
    role: {
      color: '#6b7280',
      fontSize: '0.9rem',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    modalContent: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      maxWidth: '400px',
      width: '90%',
      fontFamily: 'Segoe UI',
    },
    closeBtn: {
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      border: 'none',
      background: '#3b82f6',
      color: 'white',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };

 const team = [
  {
    name: 'Khalid Hussain',
    role: 'Frontend Developer',
    details: 'Khalid specializes in building responsive, user-friendly interfaces using React and Tailwind CSS. He ensures the app is sleek, fast, and accessible.',
  },
  {
    name: 'Ali Raza',
    role: 'Backend Developer',
    details: 'Ali manages server-side logic, APIs, and database integration. He ensures high performance and security of backend operations.',
  },
  {
    name: 'Usman Ghani',
    role: 'UI/UX Designer',
    details: 'Usman focuses on crafting intuitive user experiences and clean interfaces. He designs wireframes, prototypes, and style guides.',
  },
  {
    name: 'Ahmed Nadeem',
    role: 'Project Manager',
    details: 'Ahmed leads the team, manages timelines, and ensures the project meets client expectations. He coordinates between developers and stakeholders.',
  },
];


  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🏢 About Us</h2>

      <div style={styles.section}>
        <p style={styles.missionText}>
          We’re a passionate team of developers focused on crafting high-quality web apps using React, APIs, and clean UI principles. Our mission is to build user-first digital experiences.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={{ ...styles.header, fontSize: '1.5rem' }}>🚀 Our Mission</h3>
        <p style={styles.missionText}>
          To provide scalable and intuitive digital solutions using modern technologies — from UI design to deployment — with speed, creativity, and care.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={{ ...styles.header, fontSize: '1.5rem' }}>👨‍💻 Our Team</h3>
        <div style={styles.teamGrid}>
          {team.map((member, index) => (
            <div
              key={index}
              style={styles.memberCard}
              onClick={() => setSelectedMember(member)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={styles.avatar}>{getInitials(member.name)}</div>
              <div style={styles.name}>{member.name}</div>
              <div style={styles.role}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>

     {selectedMember && (
  <div style={styles.modalOverlay} onClick={() => setSelectedMember(null)}>
    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <h3 style={{ marginBottom: '0.5rem' }}>{selectedMember.name}</h3>
      <p style={{ marginBottom: '0.5rem' }}>
        <strong>Role:</strong> {selectedMember.role}
      </p>
      <p style={{ lineHeight: '1.5' }}>{selectedMember.details}</p>
      <button
        style={styles.closeBtn}
        onClick={() => setSelectedMember(null)}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default About;
