import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import CadMaterial from "../screen/CadMaterial";
import Home from "../screen/Home";
import { MaterialIcons } from '@expo/vector-icons';
import Profile from "../screen/Profile";
import { useEffect } from "react";

const { Screen, Navigator } = createBottomTabNavigator();


interface admProps{

    

}

export function HomeTabRoute(props){

    useEffect(()=>{

        console.log("o adm está logado: "+ props.route.params.adm)

    },[])

    return(

        <Navigator
        
        screenOptions={
            {
                headerShown: false,

            }
        }
        
        >
            
            {props.route.params.adm? 
            <Screen
            name="AdmHome"
            component={CadMaterial}
            options={
                {
                    title: "Adicionar",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="add"
                            color={color}
                            size={size}
                        />
                    )
                }


            }
        />           
             : 
             <Screen
                name="UserHome"

                component={Home}

                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        ),
                    }

                }

            />
         }
 

            <Screen
                name="Profile"
                component={Profile}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="person"
                                color={color}
                                size={size}
                            />
                        ),
                        tabBarActiveTintColor: "red"
                    }

                }
            />

        </Navigator>

        
        

    )

}