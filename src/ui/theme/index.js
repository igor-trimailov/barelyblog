import config from '../../configuration'
import { THEME } from '../../constants'

// will describe colors here, they will be populated in each component
// TODO: shared components should live in jsx of their own
// TODO: overrides of specific shared components? is there a way to merge css?
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
    primary: '#ccc',
  },
}

const theme = {
  [THEME.LIGHT]: themeLight,
  [THEME.DARK]: themeDark,
}

export default theme[config.theme]
