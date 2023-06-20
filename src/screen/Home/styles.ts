import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itensContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    button:{
        backgroundColor: '#d3d3d3',
        marginTop: 10,
        borderRadius: 8,
        height: '8%',
        width: '60%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text:{
        fontSize: 18,
        color: 'blue',

    },
    container :{
        flexDirection: 'column',
        flex: 1,
        
        width: '90%',
        marginTop: '20%',
        
    }
  });
  
export default styles;