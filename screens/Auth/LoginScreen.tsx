import React,{ useState } from "react"
import { KeyboardAvoidingView,Platform, SafeAreaView,StyleSheet,Text,TextInput,TouchableHighlight,View} from "react-native"
import { Shadow } from "react-native-shadow-2"
import { Color } from "../../typography/Styles"

const LoginForm=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#ffffff"}}>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.viewCenter}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.title}> Login to your account</Text>
                    <View>
                        <TextInput
                            placeholder="Email Id"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.emailInput}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            style={styles.passwordInput}
                        />
                    </View>
                    <Text style={styles.text}>Forget password?</Text>
                    <View>
                        <Text style={styles.button}>LOGIN</Text>
                    </View>
                        <Text style={{textAlign:"center",color:Color.darkBlack,paddingTop:20,fontFamily:"QuattrocentoSans-Bold"}}>Or Continue with</Text>
                        <View>

                        </View>
                        <View style={styles.textFlex}>
                            <Text style={{fontFamily:"QuattrocentoSans-Bold",color:Color.darkBlack}}>Don't have an account ? </Text>
                            <TouchableHighlight>
                                <Text style={{color:Color.red,fontFamily:"QuattrocentoSans-Bold"}}>Sign Up</Text>
                            </TouchableHighlight>
                        </View>
                </View>
            </KeyboardAvoidingView> 
       </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    viewCenter:{
        top:"30%",
    },
    title:{
        color:"#000000",
        fontFamily:"RobotoCondensed-Regular",
        fontSize:28,
        alignSelf: 'center',
    },
   
    emailInput:{ 
        backgroundColor:'white',
        fontFamily:"RobotoCondensed-Medium",
        color:"#999595",
        fontSize:14,
        width:"80%",
        justifyContent:"center",
        alignSelf:"center",
        marginTop:50,
        marginBottom:15,borderRadius:8, shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10
    },
    passwordInput:{
        backgroundColor:'white',
        fontFamily:"RobotoCondensed-Medium",
        color:"#999595",
        fontSize:14,
        width:"80%",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:8, shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10
    },
    text:{
        textAlign:"right",
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold",
        marginHorizontal:35,
        marginVertical:10,
        fontSize:12,
        marginBottom:50
    },
    button:{
        alignSelf:"center",
        backgroundColor:Color.red,
        color:Color.white,
        padding:12,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:15,
        paddingHorizontal:110,
        borderRadius:8,
    },
    textFlex:{
        flexDirection:"row",
        alignSelf:"center",
        marginVertical:60
    }
 
   
})

export default LoginForm