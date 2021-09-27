import { findByLabelText } from '@testing-library/dom';
import React from 'react'
import styled from "style-components"
import { HeaderBuild } from './HeaderBuild';

export const HomeScreen = () => {
    return (
        <Container>
            <wrapper> Header</wrapper>
        </Container>
    );
};

export default HomeScreen;

const Container = styled.div'
    width: 100%;
    display: flex:
    flex-direction 