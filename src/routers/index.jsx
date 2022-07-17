import { useRoutes } from "react-router-dom";
import menus from './menus'

export default function Routes(){
  const route = useRoutes(menus)
  return route
}