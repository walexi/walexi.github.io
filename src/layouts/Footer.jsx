import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 1rem;
  height: fit-content;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 1rem;
  text-align: left;
  padding-left: 2rem;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Olawale Onabola - (c) {new Date().getFullYear()}
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
