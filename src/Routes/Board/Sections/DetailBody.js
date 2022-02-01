import { Avatar, CardActions, CardContent, CardHeader, Divider, IconButton } from "@mui/material"
import { grey } from "@mui/material/colors"
import MoreBtn from "../../../Components/MoreBtn"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { boardStyles } from "../Board.styles";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(boardStyles);

export const DetailBody = ({post, addLike }) => {
  const classes = useStyles();
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">              
          </Avatar>
        }
        action={
          <MoreBtn editData={post} />
        }
        title={post.writer}
        subheader={post.date}
        className={classes.dateText}
      />
      <Divider />
      {/* {image && <CardMedia
        component="img"
        height="194"
        image={image}
        alt="image"
      />} */}
      <CardContent>
        <h1 className={classes.title}>
          {post.title}
        </h1>
        <p className={classes.content}>
          {post.content}
        </p>
      </CardContent>
      
      <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'space-between'}}>
        <span className={classes.botText}>조회수 {post.count}{post.like ? <>{`, 좋아요 ${post.like}`}</>: null } </span>
        <div>
          <IconButton onClick={addLike}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>          
      </CardActions>
    </>
  )
}