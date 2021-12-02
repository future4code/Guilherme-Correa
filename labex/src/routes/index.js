import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage} from '../pages/ListTripsPage'
import { ApplicationFormPage } from '../pages/ApplicationFormPage'
import { LoginPage } from "../pages/LoginPage"
import { AdminHomePage } from '../pages/AdminHomePage'
import { CreateTripPage } from '../pages/CreateTripPage'

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/trips/list">
                        <ListTripsPage/>
                    </Route>
                    <Route exact path="/trips/application">
                        <ApplicationFormPage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path='/admin/trips/list'>
                        <AdminHomePage/>
                    </Route>
                    <Route exact path='/admin/trips/create'>
                        <CreateTripPage/>
                    </Route>
                    {/* <Route exact path='/admin/trips/:id'>
                        <HomePage/>
                    </Route> */}
                </Switch>
            </BrowserRouter>
     </div>
    )
}