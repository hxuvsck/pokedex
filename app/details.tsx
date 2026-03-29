import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Details() {
    const params = useLocalSearchParams()

    // console.log(params.name); -- Check if clicked pokemon params is routed

    useEffect(() => { }, [])

    // async function fetchPokemonByName(name: string) {
    //     try { } catch ()
    // }

    return (
        <>
            <Stack.Screen options={{ title: params.name as string }} />
            <ScrollView
                contentContainerStyle={{
                    gap: 16,
                    padding: 16,
                    backgroundColor: 'yellow',
                }}>
                <Text>{params.name}</Text>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

});
