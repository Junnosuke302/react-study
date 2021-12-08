import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLaout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefaultLaout>
                        <Top />
                    </DefaultLaout>
                </Route>
                <Route path="/users">
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};