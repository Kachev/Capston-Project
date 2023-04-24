import Link from "next/link";
import styled from "styled-components";
import Heading from "../Heading";
import Image from "next/image";
const StyledLink = styled(Link)`
  box-shadow: 9px 9px 10px rgb(0, 0, 0, 0.5);
  border-radius: 10px;
  border:1px solid black;
  padding: 10px;
  background-color: #73CA8E;
  text-decoration: none;
  font-weight: bold;
  color: black;
  position: relative;
  top: 5rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const StyledButtonParagraph = styled.p`
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: #f7f6e2;
  border-radius: 10px;
`;
const StyledImage = styled(Image)`
  margin-left:2px;
  margin-top:2px;
  
`;
const StyledParagraph = styled.p`
font-size:25px;
font-weight:700;
text-shadow:5px 5px 15px rgb(0,0,0,0.5);
`;
const StyledLinkParagraph = styled.p`
font-size:20px;
margin:0px;
`;
export default function StartPage() {
  return (
    <>
      <StyledSection>
        <StyledParagraph>Erstelle deinen Arbeitsbericht schell und unkompliziert</StyledParagraph>
        <StyledImage src="/article.png" width={250} height={250} />

        <StyledLink href="/NewWorkReport" alt="To create a new report">
          <StyledLinkParagraph>Los geht`s!</StyledLinkParagraph>
          <StyledImage
            src="/icons8-construction-50.png"
            width={30}
            height={30}
          />
        </StyledLink>
      </StyledSection>
    </>
  );
}
