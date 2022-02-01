import { Avatar, Box, Button, CardActions, CardContent, CardHeader, Divider } from "@mui/material"
import { grey } from "@mui/material/colors"
import MoreBtn from "../../../Components/MoreBtn"
import { boardStyles } from "../Board.styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(boardStyles);



export const ReplyComment = ({commentList, parentCommentId, addCommentLike}) => {
  const classes = useStyles();

  return (
    // 대댓글 박스
    <>
      {commentList && commentList.map(comment => {
        if (comment.responseTo === parentCommentId) {
          return (
            <Box className={classes.nestedComment} key={comment.id}>
              <CardHeader
              avatar={
                <>
                  <span 
                  className={classes.replyIcon}
                  style={{ position: 'relative', left: '-30px'}}
                  >ㄴ</span>
                  <Avatar sx={{ bgcolor: grey[500], right: '25.2px' }} aria-label="recipe">              
                  </Avatar>
                </>
                }
                action={
                  <MoreBtn />
                }
                title={comment.writer}
                subheader={comment.date}
                className={classes.commentDateText}
                sx={{'& .MuiCardHeader-content': {position: 'relative', right: '25px'}}}
              />
              <CardContent>
                <p className={classes.commentContent}>
                  {comment.content}
                </p>
              </CardContent>
              <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'space-between'}}>
                <span>                
                  <Button className={classes.botText} onClick={() => addCommentLike(comment)} component="span"> 좋아요 {comment.like}</Button>
                </span>            
              </CardActions>
            </Box>
          )
        }
      })}
      <Divider className={classes.comments} />
    </>
  )
}