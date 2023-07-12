import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        switch (route.layout) {
                            case "main":
                                return (
                                    <Route exact path={route.path} key={index}>
                                        <Main>
                                            <route.component />
                                        </Main>
                                    </Route>
                                );
                            case "auth":
                                return (
                                    <Route exact path={route.path} key={index}>
                                        <Auth>
                                            <route.component />
                                        </Auth>
                                    </Route>
                                );
                            default:
                                return null;
                        }
                    })}
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
