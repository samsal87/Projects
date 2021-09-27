import React from 'react'
import style from "styled-components"


const Projects = () => {
    return (
        <Container>
            <Wrapper> 
                <ContainerBox>
                    <Content> Content
                        <Image />
                    </Content>
                </ContainerBox>
            </Wrapper>
        </Container>

    )
}

export default Projects

const ContainerBox = style.div`
margin-left: auto;
min-height: 
width: 320%;
height: 500px;
`;
const Content = style.div`

`;
const Imange = style.img`

`;

const Container = style.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url("proj.img");
background-size: cover;
background-position: centre;
background-repeat: no-repeat;
`;
const Wrapper = style.div`
display: flex;
justify-content: centre;
align-items: centre;


`;