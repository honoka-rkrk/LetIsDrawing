import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Chat from "../Container/chat";

const useStyle = makeStyles(() =>
  createStyles({
    display:{
        gridRow:4,
        gridColumn:2
    },
    writingSpace:{
        display:'grid',
        gridTemplateRows:'2% 96% 2%',
        gridTemplateColumns:'2% 68% 28% 2%',
        width:'100%',
        gridRow:6,
        gridColumn:2,
        borderColor:'#00695f'
    }
  })
);

const Chat: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.display}>
      <Chat />
    </Box>
    <Box className={styles.writingSpace}
  );
};

export default Chat;
