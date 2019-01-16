import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import twinPeaksTheme from 'typography-theme-twin-peaks'

twinPeaksTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(twinPeaksTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
