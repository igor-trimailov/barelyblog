import config from '../../configuration'
import { THEME } from '../../constants'

const themeLight = {
  background: {
    primary: '#6852A8',
  },
  color: {
    primary: 'white',
  },
}

const themeDark = {
  background: {
    primary: 'grey',
  },
  color: {
    primary: 'white',
  },
}

const theme = {
  [THEME.LIGHT]: themeLight,
  [THEME.DARK]: themeDark,
}

export default theme[config.theme]
