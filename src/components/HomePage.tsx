import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Bg from '../../public/img/bg.jpg';

const HomePage: NextComponentType = () => {
  const [ip, setIP] = useState('');
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="App ms-500">
      <h1>Team France 974</h1>
      <h2>Oté zot tout !</h2>
      <div className="bg">
        <Image src={Bg} fill alt="Fond d'écran golfeur" />
      </div>
      <form className="question">
        <p>Dois-t'on changer le nom du clan ?</p>
        <div className="inputs">
          <div className="checkbox">
            <label htmlFor="no">NON</label>
            <input type="checkbox" name="no" id="no" onChange={handleCheckbox} />
          </div>
          <button onClick={handleSubmit}>Valider</button>
        </div>
      </form>
      <hr />
      <p className="purpose">Sinon fais ta proposion ! (16 caractères max)</p>
      <hr />
      <form className="else">
        <div className="inputs2">
          <div className="clansName">
            <label htmlFor="clansName">Nom du clan</label>
            <input type="text" name="clansName" id="clansName" />
          </div>
          <button onClick={handleSubmit} id="submit">Valider</button>
        </div>
      </form>
    </section>
  );
};

export default HomePage;
