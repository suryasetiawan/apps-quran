import { StyleSheet } from 'react-native'
import { colors, fonts } from 'theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 0.7,
    borderBottomColor: '#D9D9D9',
    backgroundColor: 'white'
  },
  text1: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 15,
    color: colors.pinkLava,
    fontFamily: fonts.nunitoSansRegular,
    marginLeft: 15
  },
  text2: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 15,
    color: colors.blackCheese,
    fontFamily: fonts.nunitoSansRegular,
    marginRight: 30
  }
})
