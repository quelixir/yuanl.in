import Head from 'next/head';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuanlin</title>
      </Head>

      <Container className="pt-5">
        <Jumbotron>
          <Row>
            <Col>
              <h1>Yuanlin</h1>
              <h5>园林</h5>
            </Col>

            <Col>
              <h2>private financial group</h2>
              <h5>私人金融集团</h5>
            </Col>
          </Row>
        </Jumbotron>

        <Container className="pb-5">
          <h3 className="pb-1">Divisions / 部门</h3>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Partners / 合股人
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Yuanlin has expertise in a vast array of professional
                  services, including accounting, financial statement
                  preparation, graphic design, website creation, and worldwide
                  corporate structure consulting.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Holdings / 资产持
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Yuanlin makes world-class investments.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>

        <Container className="pb-3">
          <h3 className="pb-1">Contact / 部门</h3>
          <h5>General / 一般</h5>
          <a href="mailto:hello@yuanl.in">hello@yuanl.in</a>

          <h5 className="pt-3">
            Yuanlin Discretionary Trust / 园林酌情信託受託人之园林资产持有限公司
          </h5>
          <a href="mailto:trust@yuanl.in">trust@yuanl.in</a>
        </Container>

        <br />
        <small>园林资产持有限公司</small>
      </Container>
    </>
  );
}
