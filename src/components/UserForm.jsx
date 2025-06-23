import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import './UserForm.css'; 

export default function UserForm() {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputName.trim() === '') return;
    setName(inputName);
    window.history.pushState({}, '', '/quiz');
    window.dispatchEvent(new PopStateEvent('popstate'));
    setInputName('');
  };
  
  return (
    <div className="form-container">
      <h2 className="form-title">Bienvenue !</h2>
      <p className="form-subtitle">Entrez votre prénom pour commencer le quiz</p>

      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre prénom"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Commencer</button>
      </form>
    </div>
  );
}
