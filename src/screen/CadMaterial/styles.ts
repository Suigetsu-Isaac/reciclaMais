import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itensContainer: {
      width: 600,
      marginRight: 10,
      
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    h1:{

      alignSelf:'center',

      margin: 40,

      fontSize: 24,


    },
    button:{
        backgroundColor: '#d3d3d3',
        borderRadius: 4,
        
        
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonsCotainer:{
      
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      
      

      width: '70%',
      height: '20%',
      justifyContent: 'space-around'
     
    },
    text:{
        fontSize: 18,
        color: 'blue',

    },
    container :{
        flexDirection: 'column',
        flex: 1,
        backgroundColor:"#fff",
        width: '100%',
        marginTop: '20%',
        justifyContent: 'center',
        
        
        
    },
    small:{
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20
  }
  });
  
export default styles;