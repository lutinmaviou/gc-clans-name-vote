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
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="App">
      <h1>Team France 974</h1>
      <h2>Oté zot tout !</h2>
      <div className="bg">
        <Image src={Bg} fill alt="Fond d'écran golfeur" />
      </div>
      <form className="question">
        <p>Dois-t'on changer le nom du clan ?</p>
        <div className="inputs">
          <div className="checkbox1">
            <label htmlFor="yes">OUI</label>
            <input type="checkbox" name="yes" id="yes" />
          </div>
          <div className="checkbox2">
            <label htmlFor="no">NON</label>
            <input type="checkbox" name="no" id="no" />
          </div>
          <button onClick={handleSubmit}>Valider</button>
        </div>
      </form>
    </section>
  );
};

export default HomePage;
