import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    container:{
        width: "100%",
        height: "95%",
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
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
        alignItems: 'center',
        height: '90%',
        
        color: 'white',
    },
    input:{
        backgroundColor: '#D3d3d3',
        padding: 15,
        borderRadius: 8,
        textAlign: 'center',
        width: '85%',
        fontSize: 18,
        
    },
    text:{
        
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    button:{
        backgroundColor: 'red',
        alignSelf: 'center',
        width: '85%',
        padding: 10,
        borderRadius: 8,
    },
    touchView:{
        
        alignContent: 'center',
        height: '10%',
        width: '100%',
        marginTop: '5%',
        

    },
    comeback:{
        top: 10,
        width: "80%",
        
      
    },
    comebackText :{
        color: 'blue',
        fontSize: 18
    },
    
})

export default styles;