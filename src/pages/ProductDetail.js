import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/')} style={styles.backButton}>
        ← Back to Home
      </button>

      <div style={styles.card}>
        <img src={product.images[0]} alt={product.title} style={styles.image} />
        <div>
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.price}>💲{product.price}</p>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.category}>Category: {product.category.name}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
  },
  backButton: {
    marginBottom: '1rem',
    background: '#3b82f6',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  card: {
    display: 'flex',
    gap: '2rem',
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '300px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    marginBottom: '1rem',
    lineHeight: '1.5',
  },
  category: {
    fontStyle: 'italic',
    color: '#555',
  },
};

export default ProductDetail;
