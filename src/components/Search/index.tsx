import React from 'react';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


export function Search(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.card}>
          <CardHeader title="특색 있는 숙소와 즐길 거리를 예약하세요." />
          <CardContent>
            <Container component="main" maxWidth="xs">
              <CssBaseline />

                <form className={classes.form}>
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="destination"
                        placeholder="모든 위치"
                        label="목적지"
                        name="destination"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="checkin"
                        variant="outlined"
                        required
                        fullWidth
                        id="checkin"
                        placeholder="년/월/일"
                        label="체크인"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        placeholder="년/월/일"
                        label="체크아웃"
                        name="checkout"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        select
                        required
                        fullWidth
                        id="people"
                        placeholder="인원"
                        label="인원"
                        name="people"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>

                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    검색
                  </Button>
                </form>
            </Container>
          </CardContent>
        </Card>
    </React.Fragment>
  );
}
