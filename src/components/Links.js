import Contact from "./Contact"
import { Modal, Button } from "react-bootstrap"
import { useState } from 'react'

const Links = (props) => {
    const [ show, setShow ] = useState(false)
    return (
        <>
            <a href="https://www.linkedin.com/in/emilyastebbins/"><img className="LI-Logo" src="./LI-Logo.png" alt="LinkedIn Logo"/></a>
            <a href="https://github.com/estebbins"><img className="LI-Logo" src="./github-mark.png" alt="GitHub Logo"/></a>
            <a href="./Emily_Stebbins_Resume_032023.pdf" target="_blank"><img className="resume" src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Flaticon resume"/></a>
            <Button className="contact-btn"><img className="resume" src="https://cdn-icons-png.flaticon.com/512/3771/3771518.png" alt="Flaticon resume"/></Button>
            <Modal show={show}>
                <Contact />
            </Modal>
        </>
    )
}

export default Links