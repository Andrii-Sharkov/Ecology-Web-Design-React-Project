import {
  AuthorSayingSection,
  AuthorSayingContainer,
  AuthorSayingContent,
  SocialIcons,
} from "./authorSayingStyledElements";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AuthorSaying = () => {
  return (
    <AuthorSayingSection>
      <AuthorSayingContainer>
        <AuthorSayingContent>
          <p>
            “Our task must be to free ourselves… by widening our circle of
            compassion to embrace all living creatures and the whole of nature
            and its beauty.” –Albert Einstein
          </p>
        </AuthorSayingContent>
        <SocialIcons>
          <FaFacebook size="2rem" style={{ color: "white" }} />
          <FaTwitter size="2rem" style={{ color: "white" }} />
          <FaInstagram size="2rem" style={{ color: "white" }} />
          <FaLinkedin size="2rem" style={{ color: "white" }} />
        </SocialIcons>
      </AuthorSayingContainer>
    </AuthorSayingSection>
  );
};

export default AuthorSaying;
