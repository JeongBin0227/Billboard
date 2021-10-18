import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${(props) => props.color || 'gray'};
  background: ${(props) => props.background || 'white'};

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

function CS() {
  return <Section>Cs</Section>;
}

export default CS;
