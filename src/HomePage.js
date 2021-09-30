import React from "react";
import styled from "styled-components";
import ClassProject from "../ClassProject/ClassProject";
import Portfolio from "../Portfolio/Portfolio";
import { HeaderBar } from "./HeaderBar";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import VideoSection from "./VideoSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

export const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderBar />
        <HeroSection />
        <ServiceSection />
        <VideoSection />
        <ContactSection />
        <FooterSection />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  font-family: Poppins;
`;
const Wrapper = styled.div``;
