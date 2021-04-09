import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import React from 'react';
import Main from './page/Main/Index';
import TreeHole from './page/TreeHole/Index';

import './App.less';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/love-yin-bao/main/">
                        <Main />
                    </Route>
                    <Route path="/love-yin-bao/treehole/">
                        <TreeHole />
                    </Route>
                    <Route path="/love-yin-bao/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;