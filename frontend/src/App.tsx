import React from 'react';
import './App.css';
import { Landing } from './components/layout/landing/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/layout/login/Login';
import { Register } from './components/layout/register/Register';
import { Profile } from './components/layout/profile/Profile';
import { UserCrud } from './components/layout/user-crud/UserCrud';
import { BaseRoutineCrud } from './components/layout/base-routine-crud/BaseRoutineCrud';
import { BaseExerciseCrud } from './components/layout/base-exercise-crud/BaseExerciseCrud';
import { ExerciseCategoryCrud } from './components/layout/exercise-category-crud/ExerciseCategoryCrud';
import { RoutineCategoryCrud } from './components/layout/routine-category-crud/RoutineCategoryCrud';
import { PermissionCrud } from './components/layout/permission-crud/PermissionCrud';
import { MuscleCrud } from './components/layout/muscle-crud/MuscleCrud';
import { RoleCrud } from './components/layout/role-crud/RoleCrud';
import { UserCrudPanel } from './components/layout/user-crud-panel/UserCrudPanel';
import { ExercisePage } from './components/layout/exercise-page/ExercisePage';
import { RoutinePage } from './components/layout/routine-page/RoutinePage';
import { ExerciseItem } from './components/layout/exercise-item/ExerciseItem';
import { RoutineItem } from './components/layout/routine-item/RoutineItem';
import { RoutineCrudPanel } from './components/layout/routine-crud-panel/RoutineCrudPanel';
import { ContactPage } from './components/layout/contact-page/ContactPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
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
          <Route exact path="/userCrudPanel" component={UserCrudPanel} />
          <Route
            exact
            path="/baseRoutineCrudPanel/"
            component={RoutineCrudPanel}
          />
          <Route exact path="/exercises" component={ExercisePage} />
          <Route exact path="/exercise/:id" component={ExerciseItem} />
          <Route exact path="/routines" component={RoutinePage} />
          <Route exact path="/routine/:id" component={RoutineItem} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
