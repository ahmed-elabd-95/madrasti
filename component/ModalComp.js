import React, {Children} from 'react';
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {Button} from './Button';
export const ModalComp = props => {
  const {
    headerTitle,
    onClose,
    children,
    buttonTitle,
    visibleModal,
    openModal,
    title
  } = props;
  return (
    <Modal animationType="fade" transparent visible={visibleModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 20,
            borderRadius: 15,
            width: 343,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Text>{title || 'Forget password'}</Text>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require('../images/icon-close.png')}
                style={{width: 14.21, height: 14.21}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#F9F9F9',
              paddingTop: 2,
            }}></View>
          <Text style={{marginTop: 10, alignSelf: 'center'}}>
            {' '}
            {headerTitle}{' '}
          </Text>
          <View style={{alignItems: 'center', marginTop: 10}}>
            {children}
            <Button onpress={openModal} title={buttonTitle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
