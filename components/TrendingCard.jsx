import { View, Text,Image, TouchableOpacity,Platform, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES} from '../constants'
import { BlurView } from '@react-native-community/blur'

const RecipeCardDetails = ({recipeItem}) =>{
    return(
        <View style={{
            flex:1
        }}>
           <View style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between'
           }}>
            <Text style={{width:"70%", color:COLORS.white,...FONTS.h3, fontSize:18}}>{recipeItem.name}</Text>
            <Image source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark} style={{
            width:20, height:20, marginRight:SIZES.base, tintColor:COLORS.darkGreen}}/>

           </View>
           <Text style={{color:COLORS.lightGray2,
            ...FONTS.body4}}>
                {recipeItem.duration} | {recipeItem.serving} Servings
            </Text>
        </View>
    )
}
const RecipeCardInfo = ({recipeItem})=>{
    if(Platform.OS === 'ios'){
        return(
            <BlurView blurType='dark'
            style={styles.recipesContainer}>
                <RecipeCardDetails recipeItem={recipeItem}/>
            </BlurView>
        )
    }else{
        return(
            <View style={{
                ...styles.recipesContainer,
                backgroundColor:COLORS.transparentDarkGray
            }}>
                <RecipeCardDetails recipeItem={recipeItem}/>
            </View>
        )
    }
}
const TrendingCard = ({containerStyle, recipeItem, onPress}) => {
  return (
    <TouchableOpacity style={{
        width:250,
        height:350,
        marginTop:SIZES.radius,
        marginRight:20,
        borderRadius:SIZES.radius,
        ...containerStyle
    }} onPress={onPress}>
        <Image source={recipeItem.image}
        resizeMode='cover' style={{
        width:250,
        height:350,
        borderRadius:SIZES.radius}}/>
        <View style={{
            position:'absolute',
            top:20,
            left:15,
            paddingHorizontal:SIZES.radius,
            paddingVertical:5,
            backgroundColor:COLORS.transparentGray,
            borderRadius:SIZES.radius
        }}>
            <Text style={{
                color:COLORS.white,
                ...FONTS.h4
            }}>{recipeItem.category}</Text>
        </View>
        <RecipeCardInfo recipeItem={recipeItem}/>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    recipesContainer:{
        position:'absolute',
        bottom:10,
        left:10,
        right:10,
        height:100,
        paddingVertical:SIZES.radius,
        paddingHorizontal:SIZES.base,
        borderRadius:SIZES.radius
    }
})
export default TrendingCard 