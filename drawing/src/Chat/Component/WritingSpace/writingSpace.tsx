import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    input: {
      gridRow: 2,
      gridColumn: 2
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridRow: 2,
      gridColumn: 3
    },
    button: {
      width: '50%',
      height: '75%',
      display: 'block',
      backgroundColor: '#ffea00',
      '&:hover': {
        backgroundColor: '#008394'
      }
    }
  })
);

type WritingSpaceProps = {
  handleContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  submitError: boolean;
  message: string;
};

const WritingSpace: React.FC<WritingSpaceProps> = (props: WritingSpaceProps) => {
  const styles = useStyle();
  const {
    handleContentChange = () => undefined,
    submitError = false,
    message = ''
  } = props;
  return (
    <>
      {submitError ? (
        <TextField
          className={styles.input}
          onChange={handleContentChange}
          margin='dense'
          id='message'
          label='内容'
          fullWidth
          autoFocus
          multiline
          rows={3}
          value={message}
          error
          helperText={'メッセージが入力されていません'}
        />
      ) : (
        <TextField
          className={styles.input}
          onChange={handleContentChange}
          margin='dense'
          id='message'
          label='内容'
          fullWidth
          autoFocus
          multiline
          rows={3}
          value={message}
        />
      )}
      <Box className={styles.buttonBox}>
        <Button className={styles.button}>{'送信'}</Button>
      </Box>
    </>
  );
};

export default WritingSpace;
