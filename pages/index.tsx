import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import HomePage from '../src/components/HomePage';
import { useEffect } from 'react';
import axios from 'axios';

type Props = {
  ip: string;
};

export async function getServerSideProps(/* context */) {
  try {
    await clientPromise;
    // Load ip address from the API
    const res = await axios.get('https://geolocation-db.com/json/');
    const ip = res.data.IPv4;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise;
    const db = client.db('portfolio');
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    const data = await db.collection<Document>('gc-clansname-vote').find().toArray();
    const properties = JSON.parse(JSON.stringify(data));
    if (db.collection<Document>('gc-clansname-vote').find({ ip: { exists: false } }) === true) {
      const insert = await db
        .collection<Props>('gc-clansname-vote')
        .insertOne({ ip: ip });
    }

    return {
      props: { isConnected: true, properties },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  properties,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(properties);
  return (
    <>
      <Head>
        <title>Golf Clash Vote Nom de Clan</title>
      </Head>
      <HomePage />
    </>
  );
}
