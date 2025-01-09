import React, { useState } from 'react';

const ArtifactForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArtifactForm;
