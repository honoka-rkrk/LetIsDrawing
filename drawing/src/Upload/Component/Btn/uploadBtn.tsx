import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    uploadBtn: {
      gridColumn: 1
    }
  })
);

const UploadBtn: React.FC = () => {
  const styles = useStyle();
  return (
    <Button className={styles.uploadBtn} variant='outlined' color='primary'>
      {'アップロード'}
    </Button>
  );
};

export default UploadBtn;
