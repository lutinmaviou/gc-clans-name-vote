import { useState, useEffect } from 'react';
import axios from 'axios';
import { NextComponentType } from 'next';

const HomePage: NextComponentType = () => {
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="App">
      <h1>Team France 974</h1>
      <p>Oté zot tout !</p>
      <p>{ip}</p>
    </section>
  );
};

export default HomePage;
