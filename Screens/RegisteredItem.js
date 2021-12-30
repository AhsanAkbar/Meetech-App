// import React, {useState, useEffect} from 'react'
// import { StatusBar } from 'expo-status-bar';

// import {
//     StyledContainer,
//     InnerContainer,
//     PageTitle,
//     SubTitle,
//     StyledFormArea,
//     colors,
//     StyledButton,
//     ButtonText,
//     MsgBox,
//     Line,
//     ExtraView,
//     ExtraText,
//     TextLink,
//     TextLinkContent
// } from './../Components/Styles';

// import {Text, View , ActivityIndicator,SafeAreaView, ScrollView, StyleSheet,Image} from 'react-native';

// //colors
// const {brand,darkLight,primary} = colors;

// //API
// import axios from 'axios';

// const RegisteredItem = ({navigation}) => {
//     const [message, setMessage] = useState();
//     const [messageType, setMessageType] = useState();

//     const handleLogin = (credentials, setSubmitting) =>{
//         handleMessage(null);
//         const url = 'http://192.168.137.1:3000/login';
//         axios.post(url, credentials)
//         .then((response)=>{
//             const result = response.data;
//             const {message, status, data} = result;

//             if (status !== 'SUCCESS'){
//                 handleMessage(message, status);
//             }
//             else{
//                 navigation.navigate('Welcome', {...data[0]})
//             }
//             setSubmitting(false);

//         })
//         .catch(error =>{
//             console.log(error);
//             setSubmitting(false)
//             handleMessage("An error occured. Please check your internet and try again")
//         })
//     }

//     const handleMessage =(message, type = 'FAILED')=>{
//         setMessage(message);
//         setMessageType(type);
//     }
//     return (
//         <Formik
//         initialValues={{ItemName : '', ItemColor: '', PlaceName: '', Address:'', }}
//         onSubmit={(values, {setSubmitting}) =>{
//             // console.log(values);
//             // navigation.navigate("Welcome");
//             if(values.ItemName == '' || values.PlaceName == '' || values.Address == ''){
//                 handleMessage('please fill all the necessary fields');
//                 setSubmitting(false)
//             }
//             else{
//                 handleLogin(values, setSubmitting);
//             }
//         }}
//     >

//         {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=>(<StyledFormArea>
//         <StyledContainer>
//                 <StatusBar style="dark"/>
//                 <SafeAreaView>
//                         <ScrollView> 
//                 <InnerContainer>
//                     <PageTitle>Your Registered Item</PageTitle>
//                     {/* <SubTitle>Edit Your Registered Details</SubTitle> */}
//                     <Line/>
                    
                
//                    { /* card */}
//                 <View style={styles.card}>
//                 <Image source={{uri: 'uri'}} style={styles.cardImage} />
//                     <View style={styles.cardRight}>
//                     <Text style={styles.cardName}></Text>
//                     <Text style={styles.cardColor}></Text>
//                     <Text style={styles.cardPlace}></Text>
//                     </View>
//                     <StyledButton onPress={handleSubmit}>
//                             <ButtonText>Edit</ButtonText>
//                         </StyledButton>

//                         <StyledButton onPress={handleSubmit}>
//                             <ButtonText>Delete</ButtonText>
//                         </StyledButton>
//                 </View>

//                 <ExtraView>
//                             <ExtraText>Want to go back on welcome page?</ExtraText>
//                             <TextLink onPress={()=>navigation.navigate("Welcome")}>
//                                 <TextLinkContent> Click here</TextLinkContent>
//                             </TextLink>
//                 </ExtraView>
//                 </StyledFormArea>)}
                

//                 </InnerContainer>
//                 </ScrollView>
//                 </SafeAreaView>
//             </StyledContainer>
            
//     )
// }
// export default RegisteredItem;

// const styles= StyleSheet.create({
//     card: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         paddingHorizontal: 20,
//         paddingVertical: 15,
//         borderRadius: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#fff',
// elevation: 10
//     },
//     cardImage:{
//         width: 60,
//     height: 60,
//     borderRadius: 30
// },
//     cardRight:{
//         marginLeft: 15
//     },
//     cardName:{
//         fontSize: 18,
//         color: 'red'
//     },
//     cardColor:{
//         fontSize: 16,
//         color: 'green'
//     },
//     cardPlace:{
//         fontSize: 16,
//         color: '#ccc'
//     },
// })