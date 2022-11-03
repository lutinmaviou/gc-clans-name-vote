import { useState, useEffect } from 'react';
import axios from 'axios';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Bg from '../../public/img/bg.jpg';

const HomePage: NextComponentType = () => {
  const [ip, setIP] = useState('');

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
      <div className="question">
        <p>Dois-t'on changer le nom du clan ?</p>
        <div className="inputs">
          <div className="checkbox1">
            <label htmlFor="">OUI</label>
            <input type="checkbox" />
          </div>
          <div className="checkbox2">
            <label htmlFor="">NON</label>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
