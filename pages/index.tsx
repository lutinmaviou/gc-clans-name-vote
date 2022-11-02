import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import HomePage from '../src/components/HomePage';

export async function getServerSideProps(/* context */) {
  try {
    await clientPromise;
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
    <div className="container">
      <Head>
        <title>Golf Clash Vote Nom de Clan</title>
      </Head>
      <HomePage />
    </div>
  );
}
