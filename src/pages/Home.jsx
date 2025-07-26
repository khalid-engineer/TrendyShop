import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState(['all']);
  const [selectedCat, setSelectedCat] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const categoryNames = [
          ...new Set(data.map((item) => item.category.name)),
        ];
        setCats(['all', ...categoryNames]);
        setLoading(false);
      });
  }, []);

  const filtered =
    selectedCat === 'all'
      ? products
      : products.filter((p) => p.category.name === selectedCat);

  const styles = {
    container: { padding: '2rem', fontFamily: 'Segoe UI, sans-serif' },
    btn: {
      margin: '0.25rem',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      border: '1px solid #333',
      background: '#f3f3f3',
      cursor: 'pointer',
    },
    activeBtn: { background: '#2563eb', color: 'white' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      marginTop: '1rem',
    },
    card: {
      background: '#fff',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
    },
    img: {
      height: '150px',
      objectFit: 'cover',
      marginBottom: '0.5rem',
      width: '100%',
      borderRadius: '6px',
    },
    banner: {
      position: 'relative',
      backgroundImage: 'url("https://images.pexels.com/photos/7156888/pexels-photo-7156888.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      borderRadius: '12px',
      marginBottom: '2rem',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '1rem',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '2rem',
      borderRadius: '12px',
    },
    bannerHeading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    bannerText: {
      fontSize: '1rem',
      maxWidth: '500px',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.container}>
      {/* 🖼️ Hero Banner */}
      <div style={styles.banner}>
        <div style={styles.overlay}>
          <h1 style={styles.bannerHeading}>Welcome to TrendyShop 🛍️</h1>
          <p style={styles.bannerText}>
            Discover the latest fashion, electronics, and more. Scroll down and start shopping from our wide collection.
          </p>
        </div>
      </div>

      {/* 🔘 Category Buttons */}
      <div>
        {cats.map((c) => (
          <button
            key={c}
            style={{
              ...styles.btn,
              ...(selectedCat === c ? styles.activeBtn : {}),
            }}
            onClick={() => setSelectedCat(c)}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🛍️ Product Cards */}
      {loading ? (
        <p>Loading...</p>
      ) : filtered.length > 0 ? (
        <div style={styles.grid}>
          {filtered.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                ...styles.card,
              }}
            >
              <img src={p.images[0]} alt={p.title} style={styles.img} />
              <h4>{p.title}</h4>
              <p>${p.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default Home;
