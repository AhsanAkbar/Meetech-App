import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';
// import KeyboardSpacer from 'react-native-keyboard-spacer';

//kyeboard avoiding
import {KeybaordAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../Components/Styles';

import {Text, View , ActivityIndicator} from 'react-native';

//colors
const {brand,darkLight,primary} = colors;

//keyboard avoiding view
// import {KeyboardAvoidingWrapper} from './../Components/KeyboardAvoidingWrapper';
// const KeyboardAvoidingWrapper = require('./../Components/KeyboardAvoidingWrapper');

//API
import axios from 'axios';

const EditYourRegisteredItem = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials, setSubmitting) =>{
        handleMessage(null);
        const url = 'http://192.168.137.1:3000/login';
        axios.post(url, credentials)
        .then((response)=>{
            const result = response.data;
            const {message, status, data} = result;

            if (status !== 'SUCCESS'){
                handleMessage(message, status);
            }
            else{
                navigation.navigate('Welcome', {...data[0]})
            }
            setSubmitting(false);

        })
        .catch(error =>{
            console.log(error);
            setSubmitting(false)
            handleMessage("An error occured. Please check your internet and try again")
        })
    }

    const handleMessage =(message, type = 'FAILED')=>{
        setMessage(message);
        setMessageType(type);
    }
    return (
        <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageTitle>Edit Item</PageTitle>
                    <SubTitle>Edit Your Registered Details</SubTitle>
                    <Line/>
                    <Formik
                        initialValues={{ItemName : '', ItemColor: '', PlaceName: '', Address:'', }}
                        onSubmit={(values, {setSubmitting}) =>{
                            // console.log(values);
                            // navigation.navigate("Welcome");
                            if(values.ItemName == '' || values.PlaceName == '' || values.Address == ''){
                                handleMessage('please fill all the necessary fields');
                                setSubmitting(false)
                            }
                            else{
                                handleLogin(values, setSubmitting);
                            }
                        }}
                    >
                    {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=>(<StyledFormArea>
                    
                        <MyTextInput 
                            label= "Item Name"
                            icon= "briefcase"
                            placeholder = "Item Name"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('ItemName')}
                            onBlur = {handleBlur('ItemName')}
                            value = {values.ItemName}
                        />
                         <MyTextInput 
                            label= "Item Color"
                            icon= "tag"
                            placeholder = "Item Color"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('ItemColor')}
                            onBlur = {handleBlur('ItemColor')}
                            value = {values.ItemColor}
                        />
                        <MyTextInput 
                            label= "Place Item Found In"
                            icon= "location"
                            placeholder = "Place Name"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('PlaceName')}
                            onBlur = {handleBlur('PlaceName')}
                            value = {values.PlaceName}
                        />
                        <MyTextInput 
                            label= "Complete Address"
                            icon= "home"
                            placeholder = "Address item found in"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('Address')}
                            onBlur = {handleBlur('Address')}
                            value = {values.Address}
                        />
                        {/* <Picker
                        style={{
                            height: 50,
                            width: 200,
                        }}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Laptop" value="Laptop" />
                        <Picker.Item label="Keys" value="Keys" />
                        <Picker.Item label="Bag" value="Bag" />
                        <Picker.Item label="Documents" value= "Documents" />
                        <Picker.Item label="Other" value= "Other" />
                        </Picker> */}
                       
                    
                        <MsgBox type={messageType}>{message}</MsgBox>
                        {!isSubmitting &&<StyledButton onPress={handleSubmit}>
                            <ButtonText>Update Item</ButtonText>
                        </StyledButton>}

                        {isSubmitting &&<StyledButton disabled = {true}>
                            <ActivityIndicator size="large" color={primary}/>
                        </StyledButton>}
                        <ExtraView>
                            <ExtraText>Want to go back on welcome page?</ExtraText>
                            <TextLink onPress={()=>navigation.navigate("Welcome")}>
                                <TextLinkContent> Click here</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                    </Formik>
                </InnerContainer>
            </StyledContainer>
    )
}

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View>
             <LeftIcon>
                 <Octicons name={icon} size={30} colors = {brand}/>
             </LeftIcon>
             <StyledInputLabel>{label}</StyledInputLabel>
             <StyledTextInput {...props}/>
        </View>
    )
} ;
export default EditYourRegisteredItem;
