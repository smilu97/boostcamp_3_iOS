import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const IconContainer = styled.View`
  margin-right: 10px;
`;

function OrderSettingIcon() {
  return (
    <IconContainer>
      <Ionicons name="ios-settings" size={40} color="#333" />
    </IconContainer>
  );
}

export default OrderSettingIcon;
