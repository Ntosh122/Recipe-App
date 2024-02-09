import React from 'react';
import {View,Text,TouchableOpacity,StatusBar, ImageBackground} from 'react-native';
import { images,COLORS ,SIZES, FONTS} from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import {CustomButton} from '../components'
import { useFonts } from 'expo-font';

const Login = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'RethinkSans-regular': require('../assets/fonts/RethinkSans-Regular.ttf'),
        'RethinkSans-medium': require('../assets/fonts/RethinkSans-Medium.ttf'),
        'RethinkSans-emibold': require('../assets/fonts/RethinkSans-SemiBold.ttf'),
        'RethinkSans-bold': require('../assets/fonts/RethinkSans-Bold.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }
    
    function renderHeader(){
        return(
            <View style={{
                    height:SIZES.height > 700 ? "65%" : "60%"
                }}>
                <ImageBackground source={images.loginBackground} style={{
                    flex:1,
                    justifyContent:'flex-end'
                }} 
                resizeMode='cover'
                >
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[
                        COLORS.transparent,
                        COLORS.black
                    ]}
                    style={{
                        height:200,
                        justifyContent: 'flex-end',
                        paddingHorizontal:SIZES.padding
                    }}
                    >
                        <Text style={{
                            width:'80%', color:COLORS.white, lineHeight:45, fontFamily:'RethinkSans-bold',fontSize: 40
                            }}>
                                Creating delicious meals has never been easier.
                        </Text>
                </LinearGradient>
                </ImageBackground>
            </View>
        )
    }
    function renderDetail(){
        return(
            <View style={{
                flex:1,
                paddingHorizontal:SIZES.padding,
                
                
            }}>
                {/* DESCRIPTION */}
                <Text style={{
                    marginTop:SIZES.radius,
                    width:"70%",
                    color:COLORS.gray,
                    ...FONTS.body4
                }}>
                    Discover more than 1000+ food recipes in your hands and cooking it easily
                </Text>

                <View style={{
                    flex:1,
                    justifyContent:'center'
                }}
                >
                    {/* Login */}
                    <CustomButton
                    buttonText="Get Started"
                    buttonContainerStyle={{
                        paddingVertical:18,
                        borderRadius:50,
                        fontFamily:'RethinkSans-regular'
                    }}
                    colors={[COLORS.darkGreen, COLORS.lime]}
                    onPress={() => navigation.replace("Home")}
                    />

                    {/* <CustomButton */}
                    {/* // buttonText="Sign Up" */}
                    {/* // buttonContainerStyle={{ */}
                        {/* // marginTop:SIZES.radius, */}
                        {/* // paddingVertical:18, */}
                        {/* // borderRadius:20, */}
                        {/* // borderColor:COLORS.darkLime, */}
                        {/* // borderWidth:1 */}
                    {/* // }} */}
                    {/* // colors={[]} */}
                    {/* // onPress={() => navigation.replace("Home")} */}
                    {/* // /> */}
                </View>
            </View>
        )
    }
    return (
        <View style={{flex:1, backgroundColor:COLORS.black}}>
            <StatusBar barStyle='light-content'/>
            {/* Header */}
            {renderHeader()}

            {/* DETAILS */}
            {renderDetail()}
        </View>
    )
}

export default Login;