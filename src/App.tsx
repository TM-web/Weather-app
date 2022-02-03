import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import {Layout} from "components"

import routes from "./routes";

const App = () => {

    return (
        <div className="App">
            <Layout>
                <Suspense fallback={"loading..."}>
                    <Switch>
                        {routes.map(({path, exact, component}, key) => (
                            <Route {...{key, exact, path, component}} />
                        ))}
                    </Switch>
                </Suspense>
            </Layout>

        </div>
    );
};

export default App;
