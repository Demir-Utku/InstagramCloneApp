import React, { useState, useEffect, useReducer } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { getFeed } from '../../actions'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
import { Input } from '../../components';

const Feed = (props) => {

    useEffect(() => {
        props.getFeed()
    }, [])

    const renderItem = ({ item }) => (
        <View style={{marginVertical: height * 0.02}}>
            <View style={{flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: width * 0.01,
              marginBottom: height * 0.01}}>

                <Image style={{height: width * 0.1,
                  width: width * 0.1,
                  borderRadius: 50,
                  borderColor: '#D92D7B',
                  borderWidth: 2}}
                  source={{
                    uri: item.image != null ? item.image : 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
                }} />

                <View style={{flexDirection: 'column',marginLeft: width * 0.03}}>
                    <Text style={{fontWeight: 'bold',}}>{item.name}</Text>
                    <Text >{item.gender}</Text>
                </View>

            </View>

            <Image style={{alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'center',
              height: height * 0.6}}
              source={{
                uri: item.image != null ? item.image : 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            }} />

            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginVertical: height * 0.01}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Image style={{height: width * 0.075, width: width * 0.075, marginHorizontal: width * 0.01}} source={require('../../image/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{height: width * 0.075, width: width * 0.075, marginHorizontal: width * 0.01}} source={require('../../image/comment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{height: width * 0.075, width: width * 0.075, marginHorizontal: width * 0.01}} source={require('../../image/share.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginLeft: width * 0.02}}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{fontWeight: 'bold'}}>{props.list.length} </Text>
                    <Text>kişi beğendi</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: width * 0.02, flexDirection: 'row', marginVertical: height * 0.01}}>
                <TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>{item.name} </Text>
                </TouchableOpacity>
                <Text>{item.type != "" ? item.type : "lorem ipsum dolor sit amet"}</Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: width * 0.02}}>
                <Text>{props.list.length} </Text>
                <Text>yorumun tümünü gör</Text>
            </TouchableOpacity>
            <View style={{marginLeft: width * 0.02, flexDirection: 'row', marginVertical: height * 0.01, justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{ flexDirection: 'row',marginTop:height*0.01 }}>
                    <Image style={{height: width * 0.1, width: width * 0.1, borderRadius: 50,
                      flexDirection: 'row', alignItems: 'center'}} 
                      source={{
                        uri: item.image != null ? item.image : 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
                    }} />
                    <Input placeholder={'Yorum ekle...'} style={{ backgroundColor: 'white', fontSize: 15, height: height * 0.063, paddingLeft: 10, width: width * 0.4 }} />
                </View>
                <View style={{flexDirection: 'row',}}>
                    <TouchableOpacity style={{marginHorizontal: width * 0.02}}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../image/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: width * 0.02}}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../image/add.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (

        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <FlatList style={{ flex: 1 }}
                    data={props.list}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};
export default connect(mapStateToProps, { getFeed })(Feed);