import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

function Favorites(){
    const [favorites,setFavorites] = useState([]);
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){ setFavorites(JSON.parse(response)); }
        });
    }
    useFocusEffect(() => { loadFavorites(); });
    
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos" />
            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;