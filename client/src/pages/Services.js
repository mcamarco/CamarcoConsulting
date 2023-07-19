import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col, Card } from 'react-bootstrap';

const ModalComponent = ({ show, onHide, title, content }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Services = () => {
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const toggleModal3 = () => {
    setShowModal3(!showModal3);
  };

  const toggleModal4 = () => {
    setShowModal4(!showModal4);
  };

  const toggleModal5 = () => {
    setShowModal5(!showModal5);
  };

  return (
    <Container>
      <section className='text-center'>
        <br></br>
        <h2>Our Services</h2>
        <p>
          We are committed to empowering businesses and driving success. Our team of experienced consultants understands the importance of personalized advice and recommendations. Whether you seek to improve efficiency, implement new technologies, or enhance your overall business strategy, we're here to provide guidance tailored to your objectives. Through collaborative discussions, we'll identify potential solutions and determine if we're the right fit for your requirements. We prioritize building strong partnerships with our clients, ensuring that our services align with their objectives for long-term success.
        </p>
        <br></br>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='rounded bg-white text-black'>
              <Card.Body>
                <Card.Title>Process Transformation</Card.Title>
                <Card.Text>
                  Optimize and streamline your company's workflows and operations.
                </Card.Text>
                <Button variant="primary" onClick={toggleModal2}>Find out more</Button>
              </Card.Body>
            </Card>
            <ModalComponent
              show={showModal2}
              onHide={toggleModal2}
              title="Business Process Transformation"
              content="Our business process transformation service aims to optimize and streamline your company's workflows and operations. We work closely with your team to analyze existing processes, identify bottlenecks, and implement efficient solutions. Through process mapping, automation, and workflow redesign, we help you achieve greater productivity and cost-effectiveness."
            />
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='rounded bg-white text-black'>
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Full-stack web development services for seamless functionality and an exceptional user experience.
                </Card.Text>
                <Button variant="primary" onClick={toggleModal3}>Find out more</Button>
              </Card.Body>
            </Card>
            <ModalComponent
              show={showModal3}
              onHide={toggleModal3}
              title="Full Stack Web Development"
              content="Our full-stack web development services encompass front-end and back-end development, ensuring seamless functionality and an exceptional user experience. We utilize modern technologies and frameworks to create responsive, interactive, and visually appealing websites and web applications. Whether you need a simple website, a complex web application, or an e-commerce platform, our full-stack web development services can bring your vision to life. We prioritize clean code, scalability, security, and performance to deliver solutions that meet your business requirements and exceed your expectations."
            />
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='rounded bg-white text-black'>
              <Card.Body>
                <Card.Title>Nintex Training</Card.Title>
                <Card.Text>
                  Comprehensive training programs to help your team leverage the Nintex platform's full potential.
                </Card.Text>
                <Button variant="primary" onClick={toggleModal4}>Find out more</Button>
              </Card.Body>
            </Card>
            <ModalComponent
              show={showModal4}
              onHide={toggleModal4}
              title="Nintex Training"
              content="Our Nintex training service provides comprehensive training programs to help your team harness the full potential of the Nintex platform. We offer tailored training sessions that cover various aspects of Nintex, including workflow automation, forms design, and process optimization. Our experienced trainers will guide your team through hands-on exercises and real-world scenarios to ensure practical understanding and skill development. Whether you're new to Nintex or looking to enhance your existing expertise, our training programs can empower your team to leverage Nintex effectively."
            />
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='rounded bg-white text-black'>
              <Card.Body>
                <Card.Title>Nintex Support</Card.Title>
                <Card.Text>
                  Ongoing assistance and troubleshooting for your Nintex implementations.
                </Card.Text>
                <Button variant="primary" onClick={toggleModal5}>Find out more</Button>
              </Card.Body>
            </Card>
            <ModalComponent
              show={showModal5}
              onHide={toggleModal5}
              title="Nintex Support"
              content="Our Nintex support service is designed to provide ongoing assistance and troubleshooting for your Nintex implementations. We understand that technology issues can arise, and our dedicated support team is here to help you resolve them efficiently. When you encounter any challenges or problems with your Nintex workflows, forms, or other related issues, our experts will work closely with you to identify and resolve them. Our support process involves thoroughly analyzing the reported issue to understand its root cause, providing step-by-step guidance and best practices to help you address the problem, utilizing our expertise and experience to troubleshoot and resolve the issue directly, and ensuring clear and timely communication throughout the resolution process. In cases where the issue requires further assistance, we have direct channels to connect with Nintex support to escalate and resolve complex problems. Our goal is to ensure the smooth functioning of your Nintex processes and help you overcome any obstacles along the way."
            />
          </Col>
        </Row>
        <br></br>
      </section>
    </Container>
  );
};

export default Services;
