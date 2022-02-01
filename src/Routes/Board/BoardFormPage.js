import { DeleteForever } from "@material-ui/icons";
import { Box, Button, Divider, Paper, TextField, Grid, Typography, CardMedia, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { boardStyles } from "./Board.styles";

const useStyles = makeStyles(boardStyles);

export const BoardFormPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({
    title: "",
    content: "",
    date: "",
    writer: "관리자관리자관리자",
    count: 0,
    like: 0,
    comments: [],
    attachment: ""
  })
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [attachment, setAttachment] = useState("");
  
  useEffect(() => {
    if (state) {
      const eData = {...state.editData}      
      setData(() => eData)
    }
    console.log('useEffect 안에서', data)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false)
    setContentError(false)
    if (data.title === '') {
      setTitleError(true)
    }

    if (data.content === '') {
      setContentError(true)
    }
    const dateData = new Date().toISOString()
    axios({
      url: 'http://localhost:8000/boardList',
      method: 'POST',
      data: {
        title: data.title,
        content: data.content,
        date: `${dateData.slice(0, 10)} ${dateData.slice(11, 19)}`,
        writer: data.writer,
        // count: data.count,
        // like: data.like,
        // comments: data.comments,
        attachment: data.attachment
      }
    })
      .then(res => {
        alert('작성 성공!')
        console.log(res.data)
        navigate(`/board/${res.data.id}`)
      })
      .catch(err => alert('작성 실패!'))
    
    
  }
   // 첨부한 이미지 파일을 string으로 저장하기, 
   const onFileChange = (event) => {
    const {target: {files}} = event;
    const theFile = files[0];        // input 태그의 file은 한개
    const reader = new FileReader(); // FileReader 객체는 파일(이미지 등)의 내용을 읽어서 문자열로 저장해줌.
    
    reader.onloadend = (finishedEvent) => {  // 읽기 동작이 끝났을 때 onloadend 이벤트 발생
      const {currentTarget: {result}} = finishedEvent;
      setAttachment(result);
    };
    if (theFile) {
      reader.readAsDataURL(theFile);
    };    
  };
  const handle = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  console.log('state 검토', state)
  console.log('data 검토', data.title, data.content)
  return (
    <Paper style={{ padding: "20px, 5px", width: 'auto'}}>
      <form noValidate onSubmit={handleSubmit} style={{ padding: '40px 60px 40px 80px'}}>
        <Grid container>          
          <Grid item xs={1.2}>
            <Typography className={classes.label}>제목</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              onChange={(e) => {
                if (data.title) {setTitleError(false)}
                handle(e)
              }}
              value={data.title}              
              // label="제목"
              id="title" 
              fullWidth
              required
              error={titleError}
              className={[classes.smallInput, classes.field].join(' ')}
              sx={{flexGrow: 2}}
            >            
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1.2}>
            <Typography className={classes.label}>내용</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField 
              onChange={(e) => {
                if (data.content) {setContentError(false)}
                handle(e)
              }}
              id="content" 
              // label="내용"
              fullWidth
              required
              multiline={true}
              rows={15}
              error={contentError}
              className={classes.field}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ }}>
          <Grid item xs={1.2}>
            <Typography className={classes.label}>파일 첨부</Typography>
          </Grid>
          <Grid item xs={8.6}>            
            <TextField value={attachment} className={[classes.smallInput, classes.field].join(' ')} disabled fullWidth />
          </Grid>
          <Grid item xs={1}>
            <TextField
                style={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={onFileChange}                
              />            
            <label htmlFor="upload-photo" >  
              <Box sx={{ mt: 2.5, 
                    ml: 1.3 }}>                                 
                <Button component="span" className={[classes.attBtn, classes.attBtnText].join(' ')}>                  
                  첨부하기
                </Button>
              </Box>              
            </label>            
          </Grid>
          <Grid item xs={1} />

          {/* 첨부한 이미지 미리보기 */}
          {attachment && 
            <>
              <ImageListItem sx={{mt: 2, ml: 14}}>
                <CardMedia
                component="img"
                sx={{ width: 100, height: 100 }}
                image={attachment}
                alt="Live from space album cover"
              />
              <ImageListItemBar              
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',                    
                  }}
                  position="top"
                  actionIcon={
                    <IconButton
                      onClick={() => setAttachment("")}
                      sx={{ color: 'white' }}                  
                    >
                      <DeleteForever />
                    </IconButton>
                  }
                  actionPosition="right"
                />                
              </ImageListItem>              
            </>            
          }
        </Grid>
        <Divider sx={{ mt: 2}} />
        <Grid container sx={{mt: 2, justifyContent: 'space-between'}}>
          {/* <Grid item xs={2}/> */}
          <Grid item>
            <Link to={'/community'}>
              <Button className={classes.btn} >목록으로</Button>
            </Link>
          </Grid>
          <Grid item sx={{ ml: 1}}>
            <Button className={classes.btn} type="submit" >작성하기</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
};