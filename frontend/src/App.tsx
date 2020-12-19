import React from 'react';
import './App.css';
import { Landing } from './components/layout/landing/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/layout/login/Login';
import { Register } from './components/layout/register/Register';
import { UserCrud } from './components/layout/user-crud/UserCrud';
import { BaseRoutineCrud } from './components/layout/base-routine-crud/BaseRoutineCrud';
import { BaseExerciseCrud } from './components/layout/base-exercise-crud/BaseExerciseCrud';
import { ExerciseCategoryCrud } from './components/layout/exercise-category-crud/ExerciseCategoryCrud';
import { RoutineCategoryCrud } from './components/layout/routine-category-crud/RoutineCategoryCrud';
import { PermissionCrud } from './components/layout/permission-crud/PermissionCrud';
import { MuscleCrud } from './components/layout/muscle-crud/MuscleCrud';
import { RoleCrud } from './components/layout/role-crud/RoleCrud';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/userCrud" component={UserCrud} />
          <Route exact path="/baseRoutineCrud" component={BaseRoutineCrud} />
          <Route exact path="/baseExerciseCrud" component={BaseExerciseCrud} />
          <Route exact path="/muscleCrud" component={MuscleCrud} />
          <Route
            exact
            path="/exerciseCategoryCrud"
            component={ExerciseCategoryCrud}
          />
          <Route
            exact
            path="/routineCategoryCrud"
            component={RoutineCategoryCrud}
          />
          <Route exact path="/permissionCrud" component={PermissionCrud} />
          <Route exact path="/roleCrud" component={RoleCrud} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
