import { Horizontal } from "../showcase-1/showcaseOneStyledElements";
import {
  SaveWorldSection,
  SaveWorldContainer,
  SaveWorldContent,
  SaveWorldRowGrid,
  SaveWorldColumnText,
  SaveWorldColumnImage,
  SaveWorldRowGridTwo,
  SaveWorldColumnImageTwo,
  SaveWorldColumnTextTwo,
  ImageText,
} from "./saveWorldStyledElements";
import Img1 from "../../images/mountains-lake-2.jpg";
import Img2 from "../../images/lake-clouds.jpg";

const SaveWorld = () => {
  return (
    <SaveWorldSection>
      <SaveWorldContainer>
        <SaveWorldContent>
          <h3>Save The World</h3>
          <Horizontal />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            pariatur fugit perspiciatis repellendus ullam impedit ex molestiae,
            magni unde rem, temporibus magnam nulla ea? Adipisci!
          </p>
        </SaveWorldContent>
        <SaveWorldRowGrid>
          <SaveWorldColumnText>
            <h4>
              "Though We Travel The World Over To Find The Beautiful, We Must
              Carry It With Us, Or We Find It Not."
            </h4>
            <p> - Author</p>
          </SaveWorldColumnText>
          <SaveWorldColumnImage>
            <img src={Img1} alt="" />
          </SaveWorldColumnImage>
        </SaveWorldRowGrid>
        <SaveWorldRowGridTwo>
          <SaveWorldColumnImageTwo>
            <img src={Img2} alt="" />
            <ImageText>
              <h5>The air smells sweeter</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum obcaecati mollitia minima perspiciatis modi rerum
                maiores ullam, atque exercitationem nemo!
              </p>
              <button>Read More</button>
            </ImageText>
          </SaveWorldColumnImageTwo>
          <SaveWorldColumnTextTwo>
            <h4>With Earth Day</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              deserunt eos qui nobis alias delectus!
            </p>
          </SaveWorldColumnTextTwo>
        </SaveWorldRowGridTwo>
      </SaveWorldContainer>
    </SaveWorldSection>
  );
};

export default SaveWorld;
