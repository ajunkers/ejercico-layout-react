import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid={true}>
        <Row as={"header"} className="cabecera">
          <Col as={"h1"}>Título</Col>
        </Row>
        <Row as={"main"} >
          <Col as={"section"} className="contenido" sm={12} md={9}>
            <h2>Titular de la noticia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores libero aliquam vero,maioresab.Voluptati busas sumenda porro nihil voluptatum quam ad tempora, accusantium quos quaerat fugiat incidunt sequi nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores libero aliquam vero,maioresab.Voluptati busas sumenda porro nihil voluptatum quam ad tempora, accusantium quos quaerat fugiat incidunt sequi nemo.</p>
          </Col>
          <Col as={"section"} className="sidebar" sm={12} md={3}>
            <h2>Categorías</h2>
            <ul>
              <li>Noticias de deporte</li>
              <li>Noticias de ocio</li>
              <li>Noticias de política</li>
              <li>Noticias de espectáculos</li>
            </ul>
            <h2>Otras cosas</h2>
            <ul>
              <li>Nosequé</li>
              <li>Nosecuánto</li>
              <li>Talycual</li>
            </ul>
          </Col>
        </Row>
        <Row as={"footer"} className="pie">
          <p >Texto del footer</p>
        </Row>
      </Container>
    </>
  );
}

export default App;
