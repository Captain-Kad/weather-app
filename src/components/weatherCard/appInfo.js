import React from "react";
import styled from "@emotion/styled";

const AppInfo = () => {
  return (
    <InfoSection>
      <Info>Welcome to my Weather App made using React.</Info>
      <Info>
        To change the location, simply mouse over and click on the current city,
        enter your desired city then click on the search button.
      </Info>
      <Info>Please enter the city followed by the country's two-letter country code. For example: <strong>Lagos, ng</strong> displays the weather info for the city of Lagos in the country of Nigeria</Info>
    </InfoSection>
  );
};

export default AppInfo;

const InfoSection = styled.div``;

const Info = styled.p`
  font-size: 22px;
  margin-top: 1%;
  font-family: "Fira Sans", sans-serif;
`;
