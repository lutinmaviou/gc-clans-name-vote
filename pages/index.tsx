import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import HomePage from '../src/components/HomePage';
import axios from 'axios';

type Props = {
  ip: string;
  haveVoted: boolean;
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
    const collection = db.collection<Document>('gc-clansname-vote');
    const data = await collection.find().toArray();
    const properties = JSON.parse(JSON.stringify(data));

    /*  await collection.updateOne(
      {
        ip: ip,
        haveVoted: false,
      },
      { $setOnInsert: { ip: ip } },
      { upsert: true }
    ); */
    return {
      props: { isConnected: true, properties, ip },
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
  ip,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(properties);
  console.log(ip);
  return (
    <>
      <Head>
        <title>Golf Clash Vote Nom de Clan</title>
      </Head>
      <HomePage />
    </>
  );
}
