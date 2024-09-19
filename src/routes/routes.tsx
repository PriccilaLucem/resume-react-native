import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home.page";
import { NavigationContainer } from '@react-navigation/native';
import Skills from "../pages/skills.page";

const { Screen, Navigator } = createStackNavigator();

const Routes = () => {

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="about me" component={Home}/>
                <Screen name="skills" component={Skills}/>
            </Navigator>
        </NavigationContainer>
    )

}

export default Routes;