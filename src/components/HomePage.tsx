import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Bg from '../../public/img/bg.jpg';

const HomePage: NextComponentType = () => {
  const [ip, setIP] = useState('');
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yes: HTMLInputElement | null = document.querySelector('#yes');
    const no: HTMLInputElement | null = document.querySelector('#no');
    if (yes != null && no != null && no.checked === true) {
      yes.checked = false;
    } else if (no != null && yes != null && yes.checked === true) {
      no.checked = false;
    }
  };
  return (
    <div className="App ms-500">
      <div className="bg">
        <Image src={Bg} fill alt="Fond d'écran golf" />
      </div>
      <main>
        <section className="title">
          <h1>Team France 974</h1>
          <h2>Oté zot tout !</h2>
        </section>
        <section className="question">
          <form>
            <p>Est-ce qu'on change le nom du clan ?</p>
            <div className="checkbox-container">
              <div className="checkbox">
                <label htmlFor="no">NON</label>
                <input
                  type="checkbox"
                  name="no"
                  id="no"
                />
              </div>
              <button id="checkbox-button" onClick={handleSubmit}>
                Valider
              </button>
            </div>
          </form>
        </section>
        <section className="suggestion-container">
          <div className="separation">
            <hr />
            <p>Sinon fais ta proposition ! (16 caractères max)</p>
            <hr />
          </div>
          <form>
            <div className="suggestion-wrapper">
              <div className="suggestion-field">
                <label htmlFor="clan-name">Nom du clan</label>
                <input type="text" name="clan-name" id="suggestion-input" />
              </div>
              <button onClick={handleSubmit} id="submit">
                Ajouter
              </button>
            </div>
          </form>
        </section>
        <section className="list">
          <h3>Noms de clans proposés :</h3>
          <ul className="clans-list">
            <li>hdhbhb</li>
            <li>erhhrher</li>
            <li>jhjtehhr</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
