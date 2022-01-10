import {
  Heading,
  HeaderContainer,
  HeaderLogo,
  MobileMenu,
} from "./headerStyledElements";

const Header = () => {
  return (
    <Heading>
      <HeaderContainer>
        <HeaderLogo>Ecology</HeaderLogo>
        <MobileMenu />
      </HeaderContainer>
    </Heading>
  );
};

export default Header;
