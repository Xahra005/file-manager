
import { Container, Aside, Main } from "./resume.styles";

import Education from "./components/Education/education";
import Skills from "./components/Skills/skills";
import Certification from "./components/Certification/certification"
import Contacts from "./components/Contacts/contacts";
import Profile from "./components/Profile/profile";
import Work from "./components/Work/work";
const Resume = (props) => {
    return (

        <Container>
            <Aside>
                <img src={props.img} alt="hijabi-1"
                    style={{ width: "100%", }} />
                <Education />
               <Skills/>
               <Certification/>

            </Aside>
            <Main>
                <div className= "description">
                    <h1 className="herotext">LAURA CAITLYN</h1>
                    <p>Your Professional Title</p>

                </div>
               <Contacts/>
               <Profile/>
               <Work/>
            </Main>
        </Container>
    )
}
export default Resume;