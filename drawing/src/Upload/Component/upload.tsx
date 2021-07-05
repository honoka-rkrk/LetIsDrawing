import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Timer from '../Container/timer';
import ExitBtn from '../Container/Btn/exitBtn';
import UploadBtn from '../Container/Btn/uploadBtn';

const useStyle = makeStyles(() =>
  createStyles({
    timerDisp: {
      gridRow: 2,
      gridColumn: 2,
      height: '100%'
    },
    buttonBox: {
      justifyContent: 'center',
      gridRow: 4,
      gridColumn: 2,
      gridTemplateColumns: '40% 20% 40%'
    }
  })
);

const Upload: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <Box className={styles.timerDisp}>
        <Timer />
      </Box>
      <Box className={styles.buttonBox}>
        <ExitBtn />
        <UploadBtn />
      </Box>
    </>
  );
};

export default Upload;
