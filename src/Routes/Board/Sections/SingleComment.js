import { Avatar, Button, CardActions, CardContent, CardHeader, Divider, Grid, TextField } from "@mui/material"
import { Box } from "@mui/system"
import MoreBtn from "../../../Components/MoreBtn";
import { makeStyles } from '@mui/styles';
import { boardStyles } from "../Board.styles";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles(boardStyles)

export const SingleComment = ({comment, addCommentLike, addComment}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const openCommentForm = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  };
  
  return (
    <Box className={classes.comments} key={comment.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">              
          </Avatar>
        }
        action={
          <MoreBtn />
        }
        title={comment.writer}
        subheader={comment.date}
        className={classes.commentDateText}
      />         
      <CardContent>
        <p className={classes.commentContent}>
          {comment.content}
        </p>
      </CardContent>
      <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'space-between'}}>
        <span>
          <Button className={classes.botText} onClick={openCommentForm} component="span">답글쓰기</Button>
          <Button className={classes.botText} onClick={() => addCommentLike(comment)} component="span"> 좋아요 {comment.like}</Button>
        </span>            
      </CardActions>      
      <Divider />   
      {/* 대댓글 작성창 */}
      {open &&
        <form
          onSubmit={(e) => {
          e.preventDefault();
          addComment(content, comment.id)
          setContent("")
          setOpen(false)
          }}
        >
          <TextField className={classes.field} onChange={(e) => setContent(e.target.value)} value={content} fullWidth multiline={true} rows={3} placeholder='답글을 달아주세요.' sx={{mt: 2}}/>
          <Grid container sx={{justifyContent: 'end'}}>
            <Button type="submit" className={classes.btn} sx={{my: 1}}>작성</Button>
            <Grid item xs={0.1} />
          </Grid>
        </form>
      }   
    </Box>    
  )
}