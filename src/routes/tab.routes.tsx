import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import CadMaterial from "../screen/CadMaterial";
import Home from "../screen/Home";
import {MaterialIcons} from '@expo/vector-icons';
import Profile from "../screen/Profile";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes(){

    return(
        
        <Navigator 
        
        screenOptions={
            {
                headerShown: false,
                
            }
        }
        
        >
            <Screen
            name="Home"
            
            component={Home}
            
            options={
                {
                    tabBarIcon : ({color,size})=>(
                        <MaterialIcons
                        name="home"
                        color={color}
                        size={size}
                        />
                    ),
                }

            }

            />
            <Screen
            name="Materias"
            component={CadMaterial}
            options={
                {
                    tabBarIcon : ({color,size})=>(
                        <MaterialIcons
                        name="add"
                        color={color}
                        size={size}
                        />
                    ),
                    tabBarActiveTintColor:"green"
                }
                

            }
            />
            <Screen
            name="Profile"
            component={Profile}
            options={
                {
                    tabBarIcon : ({color,size})=>(
                        <MaterialIcons
                        name="person"
                        color={color}
                        size={size}
                        />
                    ),
                    tabBarActiveTintColor:"red"
                }

            }
            />
        </Navigator>
    )
}