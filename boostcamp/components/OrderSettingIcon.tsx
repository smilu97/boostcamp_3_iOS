import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector';
import { fetchMovies } from '../reducers/global/actions';

const IconContainer = styled.View`
  margin-right: 10px;
`;

const data = [
  { key: 0, label: '예매율' },
  { key: 1, label: '큐레이션' },
  { key: 2, label: '개봉일' },
];

function OrderSettingIcon() {
  const dispatch = useDispatch();
  const handleOrderChange = useCallback(option => {
    dispatch(fetchMovies(option.key));
  }, []);
  return (
    <ModalSelector data={data} onChange={handleOrderChange}>
      <IconContainer>
        <Ionicons name="ios-settings" size={40} color="#333" />
      </IconContainer>
    </ModalSelector>
  );
}

export default OrderSettingIcon;
