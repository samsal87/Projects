import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Image />
        <Content>
          <Title>Peter Oti</Title>
          <Desc>
            {" "}
            most complete freelancer marketplace theme in the world. Build your
            freelancer website with the best template. Finest written code and
            awesome customer support!{" "}
          </Desc>
          <Div>
            <Button>View CV</Button>
            <Button>Contact</Button>
          </Div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Image = styled.img`
  width: 350px;
  height: 500px;
  background-color: white;
  object-fit: cover;
  margin: 0 20px;
`;
const Content = styled.div`
  margin: 0 20px;
  width: 350px;
  padding-bottom: 40px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 10px 0;
`;

const Desc = styled.div`
  margin-bottom: 30px;
`;

const Div = styled.div`
  margin-top: 80px;
`;

const Button = styled.button`
  margin: 0 10px;
  width: 120px;
  height: 50px;
  color: black;
  font-weight: bold;
  border: 4px solid white;
  outline: none;
  border-radius: 3px;
  background-color: transparent;
  transition: all 350ms;
  transform: scale(1);
  color: white;

  :hover {
    cursor: pointer;
    border: 4px solid #4e1a01;
    transform: scale(1.05);
    background-color: white;
    color: #4e1a01;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  background-image: url("scaled.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  font-family: Poppins;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  /* height: 100% */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 40px;
`;
