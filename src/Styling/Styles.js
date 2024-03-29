// Styles.js
import {theme} from './Colours';

export const styles = {
    container: {
      backgroundColor: theme.background,
      padding: 20,
      justifyContent: 'center',
      flex: 1,
    },
    button: {
      margin: 10,
      flexDirection:'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.buttoncolour,
      borderColor: theme.buttontext,
      borderWidth: 1,
      borderRadius: 20, 
      width: '90%',
    },
    Header: {
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'monospace',
      color: theme.headertext,
      width: '100%',
      textAlign: 'center'
    },
    icon: {
      padding: 5,
      fontSize: 50,
      color: theme.buttontext,
      borderColor: theme.buttontext,
      borderWidth: 2,
      borderRadius: 10,
    },
    input: {
      borderColor: theme.buttontext,
      backgroundColor: theme.buttoncolour,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: theme.buttontext,
      fontSize: 20,
    },
    item: {
      flex: 1,
      margin: 10, 
      fontSize: 30,
      color: theme.buttontext,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    question: {
      margin: 10,
      flexDirection:'column',
      padding: 10,
    },
  keypadNumber: {
    color: theme.buttontext,
    padding: 10,
    flex: 1,
    borderRadius: 50,
    margin: 10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.button,
    borderColor: 'black',
    borderWidth: 2,
    width: '10%',
  },
    questionfont: {
      color: theme.headertext,
      fontSize: 20,
      marginBottom: 10,
      fontWeight: '400',
    },
    text: {
      color: theme.buttontext,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    selectedButton: {
      backgroundColor: theme.secondary,
    },
    bottomNav: {
      backgroundColor: theme.secondary,
      width: '100%',
      justifyContent: 'flex-end',
    },
    headerfont: {
      color: theme.headertext,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    pickerstyle: {
      inputIOS: {
        borderColor: theme.buttontext,
        borderRadius: 5,
        backgroundColor: theme.buttoncolour,
        borderColor: theme.buttontext,
        borderWidth: 5,
      },
      inputAndroid: {
        backgroundColor: theme.buttoncolour,
        borderColor: theme.buttontext,
        color: theme.buttontext,
        borderRadius: 5,
        borderColor: theme.buttontext,
        borderWidth: 5,
      }
    },
  };


