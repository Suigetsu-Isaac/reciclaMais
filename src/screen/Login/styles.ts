import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    container:{
        width: "100%",
        height: "95%",
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    imageView:{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%'
    },
    imageLogo:{
        width: 200,
        height: 200,
    },
    h1:{
        fontSize: 36,
        color: 'black',
        alignSelf: 'center',
    },
    content:{
        
        justifyContent: 'space-around',
        alignSelf: 'center',
        height: '50%',
        width: '90%',
        color: 'white',
    },
    input:{
        backgroundColor: '#D3d3d3',
        padding: 15,
        textAlign: 'center',
        borderRadius: 4 ,
        fontSize: 18,
        
    },
    text:{
        
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    button:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8
    },
    touchView:{
        justifyContent: 'center',
        
        height: '10%',
        marginLeft: 15,
        marginBottom: 20,

    },
    cadastroText :{
        
        fontSize: 18
    },
    
})

export default styles;