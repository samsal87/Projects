import React from 'react'

export const Projects2 = () => {
    return (
        <Container>
            <Wrapper> Button </Wrapper>
            
        </Container>
    )
}

export default Projects2;

const Container = styled.div`
background-color: $(({ bg}) => (bg ? "yellow" : "blue"));
padding: 10px;
border-radius: 3px;
transition: all 350ms;
transform: scale(1);

`;
const Wrapper = styled.div`

`;