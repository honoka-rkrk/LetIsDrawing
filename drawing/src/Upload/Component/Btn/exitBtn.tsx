import React, { useCallback, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CfmDialog from '../../../Utils/Container/Dialog/cfmDialog';

const useStyle = makeStyles(() =>
  createStyles({
    exit: {
      gridColumn: 3
    }
  })
);

type ExitBtnProps = {
  cfmOpen: boolean;
  setCfmOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  clickOK: () => void;
};

const ExitBtn: React.FC<ExitBtnProps> = (props: ExitBtnProps) => {
  const {
    cfmOpen = false,
    setCfmOpen = () => undefined,
    onClick = () => undefined,
    clickOK = () => undefined
  } = props;
  const styles = useStyle();
  return (
    <>
      <Button
        className={styles.exit}
        onClick={onClick}
        variant='outlined'
        color='primary'
      >
        {'退出'}
      </Button>
      {cfmOpen ? (
        <CfmDialog
          cfmOpen={cfmOpen}
          title={'Attention!'}
          msg={'この操作は取り消せません。よろしいでしょうか？'}
          clickOK={clickOK}
          clickNG={() => setCfmOpen(false)}
        />
      ) : null}
    </>
  );
};

export default ExitBtn;
