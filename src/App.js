import Brand from './components/Brand'
import Contact from './components/Contact'
import Greeting from './components/Greeting'
import Links from './components/Links'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { Container } from 'react-bootstrap'


import './App.css'

function App() {
    return (
        <>
            <Container fluid className="home">
                <Container className="greeting"><Greeting /></Container>
                <Container className="skills"><Skills /></Container>
                <Container className="brand"><Brand  /></Container>
                <Container className="links"><Links  /></Container>
                <Container className="contact"><Contact /></Container>
                <Container className="portfolio"><Portfolio  /></Container>
            </Container>
        </>
    )
}

export default App
