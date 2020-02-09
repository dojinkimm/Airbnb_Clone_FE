import React from 'react';
import { useStyles } from './style';

export default function NotFound(): React.ReactElement {
  const classes = useStyles();
  console.log('HERE');
  return (
    <React.Fragment>
      <div className={classes.bgPurple}>
        <div className={classes.stars}>
          <div className={classes.centralBody}>
            <img
              className={classes.image404}
              src="http://salehriaz.com/404Page/img/404.svg"
              alt=""
            />
            <a href="http://localhost:3000/" className={classes.buttonGoHome}>
              GO BACK HOME
            </a>
          </div>

          <div>
            <div>
              <img
                className={classes.objectEarth}
                src="http://salehriaz.com/404Page/img/earth.svg"
                alt=""
              />
              <img
                className={classes.objectMoon}
                src="http://salehriaz.com/404Page/img/moon.svg"
                alt=""
              />
            </div>

            <img
              className={classes.objectAstronaut}
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
