import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "./7.png";
const FooterSection = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Title>Community</Title>
          <Sub>
            <List>Project1</List>
            <List>Project2</List>
            <List>Project3</List>
            <List>Project4</List>
            <List>Project5</List>
          </Sub>
        </Section>
        <Section>
          <Title>Service</Title>
          <Sub>
            <List>Project1</List>
            <List>Project2</List>
            <List>Project3</List>
            <List>Project4</List>
            <List>Project5</List>
          </Sub>
        </Section>
        <Section>
          <Title>Interest</Title>
          <Sub>
            <List>Project0</List>
            <List>Project1</List>
            <List>Project2</List>
            <List>Project3</List>
            <List>Project4</List>
            <List>Project5</List>
          </Sub>
        </Section>
      </Wrapper>

      <Last>
        <Image src={logo} />
        <Text>This platform is developed by Students</Text>
        <Social>
          <F
            href="https://www.facebook.com/chukwusah.o.peter"
            rel=""
            target="_blank"
          >
            <FacebookIcon />
          </F>
          <F
            href="https://www.facebook.com/chukwusah.o.peter"
            rel=""
            target="_blank"
          >
            <TwitterIcon />
          </F>
        </Social>
      </Last>
    </Container>
  );
};

export default FooterSection;

const F = styled.a`
  color: black;
  font-weight: bold;

  .MuiSvgIcon-root {
    font-size: 60px;
    color: #0357d6;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 40px;
  background-color: red;
  object-fit: contain;
  margin-left: 20px;
  border-radius: 5px;
`;
const Text = styled.div``;
const Social = styled.div`
  width: 200px;
  height: 60px;
  /* background-color: lightgray; */
  object-fit: contain;
  margin-right: 20px;
`;

const Last = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  margin-left: 30px;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
`;
const Sub = styled.div``;
const List = styled.div`
  margin: 4px 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
  background-color: #1a1a1a;
  color: white;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
`;
