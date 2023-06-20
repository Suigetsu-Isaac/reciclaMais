import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Registro from "../screen/Registro";

import { TabRoutes } from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){

    return(
        
        <Navigator>
            <Screen
            name="Login"
            options={
                {
                    headerShown: false
                }
            }
            component={Login}
            />
            <Screen
            name="Registro"
            options={
                {
                    headerTransparent: true,
                    title: null
                }
            }
            component={Registro}
            />
            
        </Navigator>
    )
}