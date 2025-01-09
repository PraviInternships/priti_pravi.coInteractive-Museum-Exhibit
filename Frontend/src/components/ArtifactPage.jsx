import React, { useEffect, useState } from 'react';
import styles from '../styles/ArtifactPage.module.css';

const ArtifactPage = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    fetch('/api/artifacts') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setArtifacts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Artifacts</h1>
      <div className={styles.list}>
        {artifacts.map((artifact) => (
          <div key={artifact.id} className={styles.card}>
            <h2>{artifact.title}</h2>
            <img src={artifact.image} alt={artifact.title} />
            <p>{artifact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtifactPage;
