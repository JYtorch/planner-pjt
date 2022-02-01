import { Button, Grid, TextField } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { boardStyles } from "../Board.styles";

const useStyles = makeStyles(boardStyles)

export const BoardCommentForm = ({addComment, id}) => {
  const classes = useStyles()
  const [content, setContent] = useState("");
  
  return (    
    <form onSubmit={(e) => {
      e.preventDefault();
      addComment(content, 'root')
      setContent("")
    }}>
      <TextField className={classes.field} value={content} onChange={(e) => setContent(e.target.value)} id="comment" fullWidth multiline={true} rows={3} placeholder='댓글을 달아주세요.' sx={{ml: 5, width: "95%"}}/>
      <Grid container sx={{justifyContent: 'end'}}>
        <Button type="submit" className={classes.btn} sx={{my: 1}}>작성</Button>
        <Grid item xs={0.2} />
      </Grid>
    </form>  
  )}