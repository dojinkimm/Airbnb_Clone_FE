import React from 'react';
import { useStyles } from './style';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


interface Props {
  FormInputs: {
    imageHandler: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    },
    imageView: string[];
  }
}


export function FormStepThree({ FormInputs }: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        이미지를 업로드 하세요
      </Typography>
      <Card elevation={0} className={classes.imageCard}>
        <CardContent>
          <div>
            {(FormInputs.imageView || []).map((url: any) => (
              <img key={url} src={url} alt="..." className={classes.images} />
            ))}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              className={classes.formControl}
              multiple
              {...FormInputs.imageHandler}
            />
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
