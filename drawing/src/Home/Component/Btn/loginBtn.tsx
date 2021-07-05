import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    button: {
      width: '70%',
      height: '75%'
    }
  })
);

const LoginBtn: React.FC = () => {
  const styles = useStyle();
  return (
    <Button className={styles.button} variant='outlined' color='primary'>
      {'ログイン'}
    </Button>
  );
};

export default LoginBtn;
