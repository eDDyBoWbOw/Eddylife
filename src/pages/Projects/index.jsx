import "./style.css"
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SNAPI from '../../assets/SNAPI.png';
import pressedbytoree from '../../assets/pressbytoree.png';
import WeatherApp from '../../assets/weatherapp.png';
import notetaker from '../../assets/notetaker.png';
import habittracker from '../../assets/habittracker.png';

function Projects() {
  const projects = [
    { title: 'Social Network API', imgSrc: SNAPI, text: 'Backend API', repoLink: 'https://github.com/eDDyBoWbOw/Eddy-Social-Network-API' },
    { title: 'Pressedbytoree', imgSrc: pressedbytoree, text: 'Ecommerce website', repoLink: 'https://github.com/eDDyBoWbOw/PressedByToree' },
    { title: 'WeatherApp', imgSrc: WeatherApp, text: 'weather reporting app', repoLink: 'https://eddybowbow.github.io/Weatherreport/' },
    { title: 'Notetaker', imgSrc: notetaker, text: 'personal journal', repoLink: 'https://github.com/eDDyBoWbOw/Notetakeretc' },
    { title: 'HabbitTracker', imgSrc: habittracker, text: 'health tracker', repoLink: 'https://github.com/Kgran12/GroupFiveHabbitTracker' },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {projects.map((project, index) => (
          <Col key={index} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Button href={project.repoLink} variant="primary" target="_blank" rel="noopener noreferrer">
                  Repo Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
