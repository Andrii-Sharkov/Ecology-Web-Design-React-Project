import { HeroSection, HeroContent, HeroSmallText, HeroTitle, HeroButton } from "./heroStyledElements";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroSmallText>
          Green is the prime color of the world
        </HeroSmallText>
        <HeroTitle>The beauty of nature</HeroTitle>
        <HeroButton>Read More</HeroButton>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero;