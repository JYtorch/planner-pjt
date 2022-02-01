import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Divider, Box, Button, TextField, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import MoreBtn from '../../Components/MoreBtn';
import { boardStyles } from './Board.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BoardCommentForm } from './Sections/BoardCommentForm';
import { DetailBody } from './Sections/DetailBody';
import { SingleComment } from './Sections/SingleComment';
import { ReplyComment } from './Sections/ReplyComment';

const useStyles = makeStyles(boardStyles)

export const BoardDetailPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [loading, isLoading] = useState(true);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  // const [nestedComments, setNestedComments] = useState({});
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [image, setImage] = useState("");

  // const [like, setLike] = useState(0);
  // const [commentLike, setCommentLike] = useState(0);
  // const [nestedCommentLike, setNestedCommentLike] = useState(0);


  // console.log(comments)
  // 임시 API
  useEffect(() => {    
    axios(`http://localhost:8000/boardList/${id}`, {method: 'GET'})
     .then(res => {       
       setPost(() => res.data)
       isLoading(false)      
      })
     .catch(err => console.log(err))    
    
    axios(`http://localhost:8000/comments?postId=${id}`, {method: 'GET'})
    .then(res => {       
      console.log(res.data)
      setComments(res.data)
      isLoading(false)            
    })
    .catch(err => console.log(err))

  }, [])

  
  const addLike = () => {
    axios(`http://localhost:8000/boardlist/${id}`, {
      method: 'PATCH',
      data: {like: post.like + 1}
    })
      .then(res => {
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }

  const addComment = (newComment, parentCommentId) => {
    let commentId = -1
    if (parentCommentId !== 'root') commentId = parentCommentId
    const dateData = new Date().toISOString()
    const commentData = {
      content: newComment,
      writer: '테스트 유저',
      date: `${dateData.slice(0, 10)} ${dateData.slice(11, 19)}`,
      like: 0,
      postId: post.id,
      responseTo: commentId
    }
    axios(`http://localhost:8000/comments`, {
      method: 'POST',
      data: commentData
    }).then(res => 
      setComments(comments.concat(res.data)) 
      )
      .catch(err => console.log(err.message))
  }  

  const addCommentLike = (_comment) => {
    axios(`http://localhost:8000/comments/${_comment.id}`, {
      method: 'PATCH',
      data: {like: _comment.like + 1}
    })
      .then(res => {
        const newCommentsData = comments.map(comment => {
          if (comment.id === _comment.id) {
            comment.like ++
            return comment
          } else {
            return comment
          }
        })
        setComments(newCommentsData)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
    {loading && <div>Loading...</div>}
    {post &&
      <Card className={classes.card}>
        <DetailBody post={post} addLike={addLike} />

        <Divider />

        <Typography component="div" variant="h5" sx={{ padding: 3}}> 댓글 {comments && comments.length}</Typography>
        
        
        {/* 댓글 작성창 */}
        <BoardCommentForm id={post.id} addComment={addComment} /> 
        {/* 댓글 박스 */}       
        {comments && comments.map(comment => {           
            return (
            <div key={comment.id}>
              {comment.responseTo === -1 &&
              <>
                <SingleComment            
                comment={comment}
                addComment={addComment}
                addCommentLike={addCommentLike}
                />
                <ReplyComment addCommentLike={addCommentLike} commentList={comments} parentCommentId={comment.id} />
              </>
              }
            </div>
        )})}               
      </Card>
     }
    
    </>
  );
}