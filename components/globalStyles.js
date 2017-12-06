import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  text: {
    fontFamily: 'Avenir',
  },
  headerText: {
    fontFamily: 'Avenir',
    fontSize: 36
  },
  container: {
    paddingTop: 40,         // start below status bar
  },
  toolbar:{
      backgroundColor:'steelblue',
      paddingTop:20,
      paddingBottom:10,
      marginBottom: 15,
      flexDirection:'row'    //Step 1
  },
  toolbarButton:{
    paddingTop:10,
      width: 50,            //Step 2
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      fontFamily:'Avenir',
      fontSize: 28,
      flex:1                //Step 3
  }
});