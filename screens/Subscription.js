import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {SubcriptionList} from '../component/SubcriptionList';
import {Button} from '../component/Button';
import {ModalComp} from '../component/ModalComp';
export class Subscription extends React.Component {
  state = {
    packageModal: false,
  };
  render() {
    const {freeView, freehead} = styles;
    const {packageModal} = this.state;

    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ModalComp
          visibleModal={packageModal}
          title="free trial"
          onClose={() => this.setState({packageModal: false})}
          buttonTitle="packages"
          openModal={() => {this.setState({packageModal:false})
          this.props.navigation.navigate('Logedsubscription')}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 83, height: 83}}
              source={require('../images/check.png')}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#6650D0',
                marginBottom: 10,
              }}>
              You're now with free trial
            </Text>
          </View>
        </ModalComp>
        <View style={{paddingBottom: 20}}></View>
        <Text
          style={{
            color: '#464646',
            fontSize: 14,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          Choose from alot of our packages
        </Text>
        <Text
          style={{
            color: '#464646',
            fontSize: 11,
            fontWeight: 'normal',
            paddingLeft: 10,
            paddingBottom: 20,
          }}>
          We have alot of our packages
        </Text>
        <View>
          <FlatList
            data={packagesdata}
            horizontal
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <SubcriptionList onpress={()=> this.props.navigation.navigate('Logedsubscription')} item={item} />}
          />
        </View>
        <View style={freeView}>
          <Text style={freehead}>Start your free</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#B5B5B5'}}>
              for 7 days
            </Text>
            <Button
              onpress={() => this.setState({packageModal: !packageModal})}
              title="start now"
              buttonstyle={{width: 122.33, height: 35}}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  freeView: {
    width: 324.65,
    height: 104.37,
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 40,
    marginLeft: 10,
    alignSelf: 'center',
  },
  freehead: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#21368D',
    marginLeft: 20,
    marginTop: 20,
  },
});

const packagesdata = [
  {
    title: 'first package',
    noSub: 'number of subject: 3',
    time: 'time: 3 monthes',
    price: 'price: 100L.E',
  },
  {
    title: 'second package',
    noSub: 'number of subject: 4',
    time: 'time: 4 monthes',
    price: 'price: 200L.E',
  },
  {
    title: 'third package',
    noSub: 'number of subject: 5',
    time: 'time: 5 monthes',
    price: 'price: 300L.E',
  },
  {
    title: 'fourth package',
    noSub: 'number of subject: 6',
    time: 'time: 6 monthes',
    price: 'price: 400L.E',
  },
];
