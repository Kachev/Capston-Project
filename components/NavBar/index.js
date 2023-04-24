import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const StyledFooter = styled.footer`
  text-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 60px;
  background-color: #7cc592;
  box-shadow: 0 2px 8px #848687;
  z-index: 1;
  opacity: 0.9;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  margin-left: -7px;
  
`;
const StyledLink = styled(Link)`
  margin-right: 10px;
`;
const StyledImage = styled(Image)`
  margin-bottom: 2px;
  margin-left: 10px;
  margin-top:3px;
  padding:2px;
`;
export default function SavedReports() {
  return (
    <StyledFooter>
      <StyledLink href="/NewWorkReport" rel="Add new report">
        <StyledImage src="/new.png" width={55} height={55} alt="Add icon" />
      </StyledLink>
      <StyledLink href="/ReportsList" rel="To saved reports">
        <StyledImage
          src="/ordner.png"
          width={55}
          height={55}
          alt="Folder icon"
        />
      </StyledLink>
    </StyledFooter>
  );
}
