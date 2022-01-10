import {
  BenefitsSection,
  BenefitsContainer,
  BenefitsCards,
  BenefitsCard,
  CardTitle,
} from "./benefitsStyledElements";
import { BenefitsData } from "./benefitsData";

const Benefits = () => {
  return (
    <BenefitsSection>
      <BenefitsContainer>
        <BenefitsCards>
          {BenefitsData.map((elem, id) => {
            return (
              <BenefitsCard key={elem.id}>
                <CardTitle>
                  <span>{elem.number}</span>
                  <h3>{elem.title}</h3>
                </CardTitle>
                <p>{elem.description}</p>
                <button>{elem.button}</button>
              </BenefitsCard>
            );
          })}
        </BenefitsCards>
      </BenefitsContainer>
    </BenefitsSection>
  );
};

export default Benefits;
