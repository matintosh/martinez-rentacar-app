import { constants } from "../styles/base";

export default {
  Text: {
    style: {
      color: '#fff',
    },
  },
  Avatar: {
    size: 'medium',
    containerStyle: {
      borderWeight: 1,
      borderWidth: 2,
      borderColor: constants.colors.primary,
      borderStyle: 'solid',
      shadowColor: '#fff',
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.63,
      shadowRadius: 0,

      elevation: 4,
    },
  },
  Icon: {
    raised: false,
    color: constants.colors.white,
    iconStyle: {
      fontSize: 18,
      width: 18,
      textAlign: 'center',
    },
  },
  Button: {
    buttonStyle: {
      backgroundColor: '#ffffff20',
      alignSelf: 'flex-start',
      borderRadius: 50,
      paddingHorizontal: 12,
      paddingVertical: 12,
      margin: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      fontWeight: 'bold',
      fontSize: 11,
    },
  },
};
