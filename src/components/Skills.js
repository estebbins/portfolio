import { Container, Col } from "react-bootstrap"

const Skills = (props) => {
    let skillsArray = ["Epic Cadence", "Excel", "Avaya CMS", "Avaya AACC", "Lean", "Analytics", "GitHub", "Python", "Node", "Express", "Django", "LiquidJS", "React", "HTML", "CSS", "Bootstrap", "MongoDB", "JavaScript", "SQL", "UEFN", "Unreal Editor", "Verse", "Epic Cadence", "Excel", "Avaya CMS", "Avaya AACC", "Lean", "Analytics", "GitHub", "Python", "Node", "Express", "Django"
    ]
    // Need to put in "skill first" p below, the final skill before the looping. Loop with half of the main array (I think)
    // ["Python", "Node", "Express", "Django", "LiquidJS", "React", "HTML", "CSS", "Bootstrap", "MongoDB", "SQL", "JavaScript", "UEFN", "Verse", "Unreal Editor", "Epic Cadence", "Advanced Excel", "Avaya CMS", "Avaya AACC", "Lean", "Analytics", "GitHub", "Python", "Node", "Express", "Django", "LiquidJS", "React"]

    let skills = skillsArray.map((skill, i) => (
        <p key={i} className="skill text-center">{skill}</p>
    ))
    
    return (
        <>
            <Container className="skillbanner skilllist" fluid>
                <p className="skill first">Verse</p>
                {skills}
            </Container>
        </>
    )
}

export default Skills