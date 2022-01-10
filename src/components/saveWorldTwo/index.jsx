import { Horizontal } from "../showcase-1/showcaseOneStyledElements";
import {
  SaveWorldTwoSection,
  SaveWorldTwoContainer,
  SaveWorldTwoContent,
  SaveWorldIconsRow,
  TitleIconWrapper,
} from "./saveWorldTwoStyledElements";
import { GiCampingTent as Tent } from "react-icons/gi";
import { BsSpeakerFill as Speaker } from "react-icons/bs";
import { CgNotes as Notes } from "react-icons/cg";
import { BiSupport as Support } from "react-icons/bi";

const SaveWorldTwo = () => {
  return (
    <SaveWorldTwoSection>
      <SaveWorldTwoContainer>
        <SaveWorldTwoContent>
          <h3>Save The World</h3>
          <Horizontal />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            pariatur fugit perspiciatis repellendus ullam impedit ex molestiae,
            magni unde rem, temporibus magnam nulla ea? Adipisci!
          </p>
        </SaveWorldTwoContent>
        <SaveWorldIconsRow>
          <TitleIconWrapper>
            <Tent size="6rem" style={{ color: "#74AE2D" }} />
            <p>Discover</p>
          </TitleIconWrapper>
          <TitleIconWrapper>
            <Speaker size="6rem" style={{ color: "#74AE2D" }} />
            <p>Promote</p>
          </TitleIconWrapper>
          <TitleIconWrapper>
            <Notes size="6rem" style={{ color: "#74AE2D" }} />
            <p>Investigate</p>
          </TitleIconWrapper>
          <TitleIconWrapper>
            <Support size="6rem" style={{ color: "#74AE2D" }} />
            <p>Support</p>
          </TitleIconWrapper>
        </SaveWorldIconsRow>
      </SaveWorldTwoContainer>
    </SaveWorldTwoSection>
  );
};

export default SaveWorldTwo;
