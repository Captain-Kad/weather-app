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
