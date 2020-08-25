import React, { useState } from 'react'
import { Text, View, Image, SafeAreaView, ScrollView, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { Input, Button, CheckBox } from '../../components'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackActions } from '@react-navigation/native';
import { login } from '../../actions'
import { LOCAL_AUTH_ID, USER } from '../../actions/types'
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from '../../RootNavigation';

const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const [email, setEmail] = useState('Test51@test.com')
  const [password, setPassword] = useState('123456')
  const [isShowPassword, setIsShowPassword] = useState(false)

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    AsyncStorage.getItem(LOCAL_AUTH_ID).then((token) =>{
      if(token) {
        console.log('Gelen Token Data', token);
        USER.token = token
        RootNavigation.replace('Home')
      } 
      
      else {
        setLoading(false)
      }
    })
  }, [])

  return (
    <ScrollView>
      {
        loading ? <ActivityIndicator size='large' /> :

        <View style={{
            alignItems: 'center',
            paddingTop: 30,
            flex: 1
        }}>

          {/* Logo Image */}
          <View style={[styles.subContainer, { flex: 1.5 }]}>
            <Image
              source={require('../../image/logo.png')}
              style={styles.logo}
            />
          </View>

          {/* Form */}
          <View style={[styles.subContainer, { flex: 3 }]}>

            <Input
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />

            <Input
              placeholder={'Password'}
              secureTextEntry={isShowPassword}
              keyboardType={'numeric'}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />

            <View style={{
              flexDirection: 'row',
              width: width*0.9,
              marginBottom: 40,
              marginTop: 10,
              justifyContent: 'space-between'
            }}>

              <CheckBox
                text='Hide Password'
                value={isShowPassword}
                status={isShowPassword}
                onPress={(value) => setIsShowPassword(!value)}
              />

              <TouchableOpacity>
                <Text style={[styles.blueText, { fontSize: 16, marginLeft: 15 }]}>Forgot Password</Text>
              </TouchableOpacity>

            </View>

            <Button
              text={'Login'}
              onPress={() => {
                let obj = {
                  email: email.toLowerCase(),
                  password
                }
                props.login(obj);
              }}
            />

            <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>
              <View style={styles.line} />
              <Text style={{ fontSize: 20, color: 'gray', margin: 20, }}>OR</Text>
              <View style={styles.line} />
            </View>

          </View>

          {/* Login With Facebook */}
          <View style={[styles.subContainer, { flex: 1.5, flexDirection: 'row' }]}>
            <Image
              source={require('../../image/facebook.png')}
              style={styles.facebook}
            />
            <Text style={[styles.blueText, { fontSize: 20, marginLeft: 15 }]}>Log In with Facebook</Text>
          </View>

          <View style={styles.formView}>
            <Button style={styles.forgotPasswordButton} text={'Forgot password ?'} textStyle={{ color: '#3E99ED' }} />
          </View>

          {/* Bottom */}
          <View style={[styles.subContainer, { flex: 0.5, borderTopWidth: 0.5, borderTopColor: 'gray' }]}>

            <Text style={styles.mainText}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Register')}  
            >
              <Text style={styles.blueText}>  Sign Up!</Text>
            </TouchableOpacity>

          </View>

        </View>  

      }
    </ScrollView>
  )
}

const styles = {
  mainText: { color: 'gray' },
  blueText: { color: '#4495cb', fontWeight: 'bold' },
  subContainer: { alignItems: 'center', justifyContent: 'center', },
  logo: { width: 200, height: 100, },
  facebook: { width: 30, height: 30 },
  line: { width: '35%', height: 0.5, backgroundColor: 'gray' },
  formView: { marginTop: height * 0.025 },
  forgotPasswordButton: {
    marginTop: height * 0.05,
    backgroundColor: 'white'
  },
}

const mapStateToProps = ({ authResponse }) => {
  const { loading, user } = authResponse;
  return { loading, user };
};

export default connect(mapStateToProps, { login })(Login);