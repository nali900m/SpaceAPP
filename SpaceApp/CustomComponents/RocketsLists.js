import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, ScrollView } from 'react-native';

const PostRockets = () => {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () =>{ 
        fetch('https://api.spacexdata.com/v4/rockets')
        .then(response=>response.json())
        .then(data=>{
            setRockets(data)
        })
        .catch(e=>{
            console.log(e)
        })
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <View>
            {loading ? (
                <ActivityIndicator />
            ) : (
                rockets.map((rocket) => {
                    return(
                        <ScrollView>
                            <Text>{rocket.name}</Text>
                        </ScrollView>
                    )
                    
                })
            )}
        </View>
    );
};

export default PostRockets;