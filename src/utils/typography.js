import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import twinPeaksTheme from 'typography-theme-twin-peaks'
import sternGroveTheme from 'typography-theme-stern-grove'

const theme = sternGroveTheme 
theme.baseFontSize = '14px'

theme.overrideThemeStyles = () => ({
  a: {
    textShadow: 'none',
  },
})



const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
