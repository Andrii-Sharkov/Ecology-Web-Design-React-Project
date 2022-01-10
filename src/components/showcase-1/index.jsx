import {
  ShowcaseOneSection,
  ShowcaseOneContainer,
  RowOneWrapper,
  ColumnLeft,
  ColumnRight,
  Horizontal,
  Quotes,
  RowTwoWrapper,
  TextColumnLeft,
  ImageColumnCenter,
  TextColumnRight,
  RowThreeWrapper,
  RowThreeContentLeft,
  RowThreeContentCenter,
  RowThreeContentRight,
} from "./showcaseOneStyledElements";
import image1 from "../../images/big-tree.jpg";
import image2 from "../../images/small-tree.jpg";
import image3 from "../../images/mountain-lake-2.jpg";
import image4 from "../../images/mountains-lake.jpg";

const ShowcaseOne = () => {
  return (
    <ShowcaseOneSection>
      <ShowcaseOneContainer>
        <RowOneWrapper>
          <ColumnLeft>
            <img src={image1} alt="tree" />
          </ColumnLeft>
          <ColumnRight>
            <h2>the sky, the mountain, the tree...</h2>
            <Horizontal />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              totam laboriosam explicabo nisi facere cum, praesentium et, cumque
              reiciendis in iusto, vitae veritatis eaque sequi temporibus
              perspiciatis perferendis doloribus adipisci maxime officiis
              libero! Amet, minima possimus eligendi exercitationem sunt
              delectus voluptates consequatur, aspernatur placeat repellendus
              blanditiis reprehenderit veniam, iusto atque.
            </p>
          </ColumnRight>
        </RowOneWrapper>
        <RowTwoWrapper>
          <TextColumnLeft>
            <Quotes />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quo dolorum saepe.
            </p>
          </TextColumnLeft>
          <ImageColumnCenter>
            <img src={image2} alt="mountains view" />
          </ImageColumnCenter>
          <TextColumnRight>
            <h2>Unseen Beauty</h2>
            <Horizontal />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel
              similique, a corporis nihil pariatur dolorum sed nesciunt.
            </p>
          </TextColumnRight>
        </RowTwoWrapper>
        <RowThreeWrapper>
          <RowThreeContentLeft>
            <h2>9 Things You Can Do to Save The Environment</h2>
            <Horizontal />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              aperiam fugit saepe doloribus aspernatur optio magni numquam,
              itaque ipsam corrupti quis atque debitis velit molestiae suscipit
              quaerat eos odio autem perspiciatis eligendi similique explicabo!
              Sequi totam illum dignissimos cupiditate perspiciatis.
            </p>
          </RowThreeContentLeft>
          <RowThreeContentCenter>
            <img src={image3} alt="mountain lake" />
          </RowThreeContentCenter>
          <RowThreeContentRight>
            <img src={image4} alt="mount" />
          </RowThreeContentRight>
        </RowThreeWrapper>
      </ShowcaseOneContainer>
    </ShowcaseOneSection>
  );
};

export default ShowcaseOne;
