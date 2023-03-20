import Brand from './components/Brand'

import Greeting from './components/Greeting'
import Links from './components/Links'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { Container, Col, Row } from 'react-bootstrap'


import './App.css'

function App() {
    return (
        <>
            <Container className="home vh-100" fluid>
                <Row className="h-100">
                    <Col xs={5} className="d-flex flex-column align-items-end">
                        <Container className="greeting"><Greeting /></Container>
                        <Container className="skills"><Skills /></Container>
                        <Container className="brand"><Brand  /></Container>
                        <Container className="links d-flex justify-content-between"><Links  /></Container>
                    </Col>
                    <Col xs={7}>
                        <Container className="portfolio vh-100"><Portfolio  /></Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
