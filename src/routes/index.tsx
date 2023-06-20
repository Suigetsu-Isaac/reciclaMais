import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from './stack.routes'
import { TabRoutes } from "./tab.routes";


interface HomeRouterProps{
    toHome : boolean
}


export function Routes(props : HomeRouterProps){

    return(
        
        <NavigationContainer>

            
            {
                props.toHome?  <TabRoutes /> :  <StackRoutes /> 
            }

            

        </NavigationContainer>
    )


}