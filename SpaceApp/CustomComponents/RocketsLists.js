import React, {useEffect, useState} from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, ScrollView, Button } from 'react-native';

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
            <ScrollView>
            {loading ? (
                <ActivityIndicator />
            ) : (
                rockets.map((rocket) => {
                    return(
                            <>
                            <Card.Title> {rocket.name} </Card.Title>
                            <Card.Divider/>
                            <Image
                            style={{width:200,height:150}}
                            resizeMode="contain"
                            source={{ uri: rocket.flickr_images[0] }}
                            />
                            <Button title = "Voir plus"/>
                            </>
                    )
                })
            )}
            </ScrollView>
    );
};

export default PostRockets;