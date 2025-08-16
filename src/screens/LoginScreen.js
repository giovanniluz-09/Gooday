import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text>com E-mail e senha</Text>

            <View style={{marginTop: 40}}>
            <Text>E-mail</Text>
            <TextInput style={styles.inputs} placeholder="Digite seu E-mail"/>

            <Text>Senha</Text>
            <TextInput style={styles.inputs} placeholder="Digite sua senha" secureTextEntry={true} />
            </View>

            <TouchableOpacity style={styles.checkbox}/>
            <Text>Lembrar senha</Text>
            <Text>Esqueci minha senha</Text>
            <TouchableOpacity>
                <Text>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <Text>-----------------Ou continue com-------------------</Text>
            <Image source={require("../../assets/Google.png")}/>
            <Image source={require("../../assets/Facebook.png")}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 30
    },
    checkbox: {
        width: 20, 
        borderColor: "#0f0", 
        height: 20, 
        borderWidth: 2, 
        borderRadius: 5,
    },
    title: {
        fontSize: 39
    },
    inputs: {
        justifyContent: 'center',
        backgroundColor: '#bec3c7',
        width: 330,
        height: 60,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 2,
    }
})