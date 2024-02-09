import React from 'react';
import { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,Image,SafeAreaView, TextInput, FlatList
} from 'react-native';
import { COLORS, FONTS, icons, SIZES, dummyData,images} from '../constants';
import { CategoryCard,TrendingCard } from '../components';

const Home = ({ navigation }) => {

     // Getting Current time
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

// Based on the time of the day,  a greeting message is returned
useEffect(() => {
  const currentHour = currentTime.getHours();

  if (currentHour >= 1 && currentHour < 12) {
    setGreeting('Morning');
  } else if (currentHour >= 12 && currentHour < 18) {
    setGreeting('Afternoon');
  } else {
    setGreeting('Evening');
  }
}, [currentTime]);

    function renderHeader(){
        return(
            <View style={{
                flexDirection:'row',
                marginHorizontal:SIZES.padding,
                alignItems:'center',
                height:80
            }}>
                <View style={{
                    flex:1
                }}>
                    <Text style={{color:COLORS.darkGreen, ...FONTS.h2}}>Hello,Ntokozo 👋</Text>
                    <Text style={{marginTop:3, color:COLORS.gray,...FONTS.body3}}>What do you want to cook this {greeting}?</Text>
                </View>

                {/* Top Image */}
                <TouchableOpacity onPress={()=>console.log('profile')}>
                    <Image source={images.profile} style={{width:40, height:40, borderRadius:20}}/>
                </TouchableOpacity>
            </View>
        )
    }
    function renderSearchBar(){
        return(
            <View 
            style={{
                flexDirection: 'row',
                alignItems:'center',
                height:50,
                marginHorizontal:SIZES.padding,
                paddingHorizontal:SIZES.radius,
                borderRadius:10,
                backgroundColor:COLORS.lightGray
            }}>
                <Image source={icons.search} 
                style={{
                    width:15,
                    height:15,
                    tintColor:COLORS.gray
                }}
                />
                <TextInput 
                style={{
                    marginLeft:SIZES.radius,
                    ...FONTS.body3
                }}
                placeholderTextColor={COLORS.gray}
                placeholder='...'
                />
                
            </View>
        )
    }
    function renderSeeRecipeCard(){
        return(
            <View style={{
                flexDirection:'row',
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding,
                borderRadius:10,
                backgroundColor:COLORS.lightGreen
                }}
            >
                <View style={{
                    width:100,
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <Image source={images.recipe} style={{
                        width:80,
                        height:80
                    }}/>

                </View>

                <View style={{
                    flex:1,
                    paddingVertical:SIZES.radius
                }}>
                    <Text style={{width:'70%', ...FONTS.body4}}>New 12+ recipes that you haven't tried yet.</Text>
                    <TouchableOpacity style={{
                        marginTop:10
                    }}onPress={()=>console.log('See Recipes')}>
                        <Text style={{color:COLORS.darkGreen, textDecorationLine:'underline',...FONTS.h4}}>See Recipes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderTrendingSection(){
        return(
            <View style={{
                marginTop:SIZES.padding
            }}>
                <Text style={{
                    marginHorizontal:SIZES.padding,
                    ...FONTS.h2
                }}>
                    Trending Recipes
                </Text>
                <FlatList 
                data={dummyData.trendingRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item, index})=>{
                    return(
                       <TrendingCard 
                       containerStyle={{
                        marginLeft:index==0 ? SIZES.padding : 0
                       }}
                       recipeItem={item}
                       onPress={() => navigation.navigate('Recipe',{recipe: item})}
                       />
                    )
                }}/>
            </View>
        )
    }
    function renderCategoryHeader(){
        return(
            <View style={{flexDirection:'row', alignItems:'center', marginTop:20, marginHorizontal:SIZES.padding}}>
                <Text style={{flex:1, ...FONTS.h2}}>Categories</Text>

                <TouchableOpacity>
                    <Text style={{color:COLORS.gray, ...FONTS.body4}}>View All</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:COLORS.white
        }}>
             <FlatList 
             data ={dummyData.categories}
             keyExtractor={item => `${item.id}`}
             keyboardDismissMode='on-drag'
             showsVerticalScrollIndicator={false}
             ListHeaderComponent={
                <View>
                    {/* HEADER */}
                    {renderHeader()}
                    {/* SEARCH BAR */}
                    {renderSearchBar()}
                    {/* RECIPE CARD */}
                    {renderSeeRecipeCard()}
                    {/* TRENDING SECTION */}
                    {renderTrendingSection()}
                    {/* CATEGORY HEADER */}
                    {renderCategoryHeader()}
                </View>
             }
             renderItem={({item})=>{
                return(
                    <CategoryCard
                        containerStyle={{
                            marginHorizontal:SIZES.padding
                        }}
                        categoryItem={item}
                        onPress={() => navigation.navigate('Recipe', {recipe: item})}
                    />
                )
             }}
             ListFooterComponent={
                <View
                    style={{
                        marginBottom: 100
                    }}>

                </View>
             }
             />
        </SafeAreaView>
    )
}

export default Home;