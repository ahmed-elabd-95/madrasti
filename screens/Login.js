import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Input} from '../component/Input';
import {Button} from '../component/Button';
import {ModalComp} from '../component/ModalComp';
export class Login extends React.Component {
  state = {
    phoneModal: false,
    codeModal: false,
    passModal: false,
    loading:true,
    pass: '',
    error: '',
  };
  async validateLogin({passwordError}) {
    if (passwordError) {
      this.setState({error: 'pass'});
    }   
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading:false})
    }, 1000);

  
  }
  
  render() {
    const {phoneModal, codeModal, passModal, pass, error,loading} = this.state;
    const passwordError = pass.length < 6;
    const isPassError = error == 'pass';

    return (
      <ImageBackground
        source={require('../images/1.png')}
        style={{width: '100%', height: '100%'}}>
        <ModalComp
          visibleModal={phoneModal}
          onClose={() => this.setState({phoneModal: false})}
          headerTitle="phone number"
          buttonTitle="reset password"
          openModal={() => this.setState({phoneModal: false, codeModal: true})}>
          <View>
            <Input
              iconstyle={{width: 13.26, height: 21.82}}
              icon={require('../images/phoneIcon.png')}
              type="phone-pad"
              placeholder="Phone Number"
            />
          </View>
        </ModalComp>
        <ModalComp
          visibleModal={codeModal}
          onClose={() => this.setState({codeModal: false})}
          headerTitle="Insert your code"
          buttonTitle="next"
          openModal={() => this.setState({codeModal: false, passModal: true})}>
          <View>
            <Input type="phone-pad" placeholder="Code" />
          </View>
        </ModalComp>
        <ModalComp
          visibleModal={passModal}
          onClose={() => this.setState({passModal: false})}
          buttonTitle="change password"
          openModal={() => this.setState({passModal: false})}>
          <View>
            <Input secure={true} placeholder="New password" />
            <Input secure={true} placeholder="confirm new password" />
          </View>
        </ModalComp>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          {loading && <ActivityIndicator size='large' color='red' />}
          <Image
            style={{width: 120.03, height: 153.24, marginTop: 100}}
            source={require('../images/logo.png')}
          />
          <Text style={{marginTop: 30, marginBottom: 30, color: '#B5B5B5'}}>
            Welcome to madrasti App
          </Text>
          <Input
            iconstyle={{width: 13.26, height: 21.82}}
            icon={require('../images/phoneIcon.png')}
            type="phone-pad"
            placeholder="Phone Number"
          />

          <Input
            iconstyle={{width: 14, height: 16}}
            icon={require('../images/lock.png')}
            secure={true}
            placeholder="password"
            onChangeText={pass => this.setState({pass, error: ''})}
            errorMessage={isPassError && 'your pass is wrong'}
          />

          <TouchableOpacity
            style={{marginBottom: 10}}
            onPress={() => this.setState({phoneModal: !phoneModal})}>
            <Text style={{marginTop: 10, marginBottom: 20, color: '#B5B5B5'}}>
              Forget password?
            </Text>
          </TouchableOpacity>
          <Button
            onpress={() => this.validateLogin({passwordError})}
            uni={require('../images/union.png')}
            title="login"
          />
          <View style={{flexDirection: 'row', marginTop: 40}}>
            <Text style={{color: '#B5B5B5'}}>Have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={{color: '#B5B5B5'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
