import { Container, Col } from "react-bootstrap"

const Skills = (props) => {
    let skillsArray = ["Python", "Node", "Express", "Django", "LiquidJS", "React", "HTML", "CSS", "Bootstrap", "MongoDB", "SQL", "JavaScript", "Python", "Node", "Express", "Django", "LiquidJS", "React"]

    let skills = skillsArray.map((skill, i) => (
        <p key={i} className="skill text-center">{skill}</p>
    ))
    
    return (
        <>
            <Container className="skillbanner skilllist" fluid>
                <p className="skill first">JavaScript</p>
                {skills}
            </Container>
        </>
    )
}

export default Skills