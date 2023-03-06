import Admin from "./Pages/Admin"
import Account from "./Pages/Account"
import Auth from "./Pages/Auth"
import Contacts from "./Pages/Contacts"
import MainScreen from "./Pages/MainScreen"
import Raspisanie from "./Pages/Raspisanie"
import Service from "./Pages/Services"
import Treners from "./Pages/Treners"
import Main from "./Pages/Main"
import { ACCOUNT_ROUTE, ADMIN_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, MAINS_ROUTE, MAIN_ROUTE, RASPISANIE_ROUTE, REGISTRATION_ROUTE, SERVICE_ROUTE, TRENERS_ROUTE } from "./utils/consts"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE + '/:id',
        Component: Account
    },
    {
        path: RASPISANIE_ROUTE,
        Component: Raspisanie
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: MAIN_ROUTE,
        Component: MainScreen
    },
    {
        path: SERVICE_ROUTE,
        Component: Service
    },
    {
        path: TRENERS_ROUTE,
        Component: Treners
    },
    {
        path: MAINS_ROUTE,
        Component: Main
    }

]