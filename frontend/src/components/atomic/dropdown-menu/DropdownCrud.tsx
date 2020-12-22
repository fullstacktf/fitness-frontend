import {
  Button,
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
} from '@material-ui/core';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const DropdownCrud: React.FC = () => {
  const history = useHistory();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      color: {
        background: '#ce3131',
        margin: theme.spacing(1),
        '&:hover': {
          background: 'white',
          color: '#ce3131',
        },
      },
    })
  );

  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            className={classes.color}
            {...bindTrigger(popupState)}
          >
            CRUDs
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => history.push('/userCrud')}>Users</MenuItem>
            <MenuItem onClick={() => history.push('/baseRoutineCrud')}>
              Base Routines
            </MenuItem>
            <MenuItem onClick={() => history.push('/baseExerciseCrud')}>
              Base Exercises
            </MenuItem>
            <MenuItem onClick={() => history.push('/muscleCrud')}>
              Muscles
            </MenuItem>
            <MenuItem onClick={() => history.push('/exerciseCategoryCrud')}>
              Exercise Categories
            </MenuItem>
            <MenuItem onClick={() => history.push('/routineCategoryCrud')}>
              Routine Categories
            </MenuItem>
            <MenuItem onClick={() => history.push('/permissionCrud')}>
              Permissions
            </MenuItem>
            <MenuItem onClick={() => history.push('/roleCrud')}>Roles</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
