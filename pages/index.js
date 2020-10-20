import Head from 'next/head';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuanlin</title>
      </Head>

      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Yuanlin</h1>
          <h3>private financial group</h3>
        </Jumbotron>
      </Container>
    </>
  );
}
