import Contact from "./Contact"
import { Modal, Button } from "react-bootstrap"
import { useState } from 'react'

const Links = (props) => {
    const [ show, setShow ] = useState(false)
    return (
        <>
            <a href="https://www.linkedin.com/in/emilyastebbins/"><img className="LI-Logo" src="./LI-In-Bug.png" alt="LinkedIn Logo"/></a>
            <a href="https://github.com/estebbins"><img className="LI-Logo" src="./github-mark.png" alt="GitHub Logo"/></a>
            <a href="https://www.fortnite.com/@ghost.mouse" target="_blank"><img className="fortnite" src="./fortnite_icon.png" alt="Created in Fortnite icon"/></a>
            <a href="./Emily_Stebbins_Resume_072024.pdf" target="_blank"><img className="resume" src="./resume-icon.png" alt="resume icon"/></a>
            {/* <Button className="contact-btn"><img className="resume" src="https://cdn-icons-png.flaticon.com/512/3771/3771518.png" alt="Flaticon resume"/></Button>
            <Modal show={show}>
                <Contact />
            </Modal> */}
        </>
    )
}

export default Links