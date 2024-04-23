import React, {useEffect, useState} from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, ScrollView, Button } from 'react-native';

const PostCompany = () => {
    const [companies, setCompany] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () =>{ 
        fetch('https://api.spacexdata.com/v4/company')
        .then(response=>response.json())
        .then(data=>{
            setCompany(data)
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

                            <>
                            <Card.Title> {companies.name} </Card.Title>
                            <Card.Divider/>
                            <Text>Fondateur : {companies.ceo}</Text>                          
                            </>
            )}
            </ScrollView>
    );
}


export default PostCompany;
