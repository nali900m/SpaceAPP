import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

const PostRockets = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () =>{ 
        fetch('https://api.spacexdata.com/v4/rockets')
        .then(response=>response.json())
        .then(data=>{
            data = data[1]
            setPosts(data.name)
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
                <FlatList 
                data={posts}
                keyExtractor={({id}) => id}
                renderItem={({ item}) => (
                    <Text>{`${posts}\n`}</Text>
                )}
                />
            )}
        </View>
    );
};

export default PostRockets;