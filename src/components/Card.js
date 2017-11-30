import React from 'react';
import styled from 'styled-components';

export const Card = ({ className, children }) => {
  return <BaseCard className={className}>{children}</BaseCard>;
};

export const BaseCard = styled.div`
  color: white;
  background-color: #DA9962;
  width: 200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledCard = styled(Card)`
  color: white;
  background-color: rgb(249, 38, 114);
`;
