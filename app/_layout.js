import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';



const Layout = () => {

    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    return(
    <Stack />
    )
}

export default Layout;