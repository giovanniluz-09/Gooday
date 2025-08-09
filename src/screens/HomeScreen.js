import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/casual_dog.png")} />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>
            
            <TouchableOpacity style={styles.button1}>
                <Image style={styles.google} source={require("../../assets/Google.png")} />
                <Text style={styles.textButton1}>Como deseja acessar?</Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={styles.button2}>
                <Text>Outras opções</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '35%',
        width: 370,
    },
    title: {
        fontSize: 36,
        margin: 10,
        fontWeight: 400
    },
    subtitle: {
        marginBottom: 40,
    },
    textButton1: {
        color: '#fff',
    },
    google: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: 30,
        height: 30,
        padding: 10
    },
    button1: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#43d384',
        borderRadius: 6,
        width: 300,
        height: 60,
        padding: 10,
        gap: 38
    },
    button2: {
        borderWidth: 1,
        borderColor: '#43d384',
        width: 300,
        margin: 10,
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})