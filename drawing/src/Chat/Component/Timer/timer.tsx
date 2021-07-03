import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() =>
  createStyles({
    clockStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em'
    },
    clockStyleDanger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      color: '#ff1744'
    }
  })
);

type TimerProps = {
  tmMinutes: string;
  tmSeconds: string;
  danger: boolean;
};

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  const { tmMinutes = '', tmSeconds = '', danger = false } = props;
  const styles = useStyle();

  return (
    <Paper className={styles.clockStyle}>
      {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
    </Paper>
  );
};

export default Timer;
