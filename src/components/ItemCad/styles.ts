import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    container:{
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        
        marginVertical: 8,
        marginLeft: 30,
        verticalAlign: 'middle'
        
    },
    text:{
        alignSelf: 'center',
        fontSize: 18,
    
    },
    input : {
        backgroundColor: "#d3d3d3",
        width: 150,
        height: 40,
        borderRadius: 4,
        textAlign: 'center',
        color: 'black',
    }
})

export default styles;