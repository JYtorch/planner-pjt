import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuItem, Divider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {    
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



export default function MoreBtn({ editData }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
// 게시글 삭제
  const deletePost = (id) => {    
    const ok = window.confirm('삭제하겠습니까?') 
    if (ok) {
      axios({
        url: `http://localhost:8000/boardList/${id}`,
        method: 'DELETE'})
        .then(res => {        
          alert('삭제되었습니다.')
          navigate('/community')
        })
        .catch(err => {
          alert('삭제할 수 없습니다.')
        })
    }    
  }
// 게시글 수정
  const updatePost = () => {       
    navigate(`/board-form`, {state: editData})
  }

  return (
    <div>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableelevation="true"
        onClick={handleClick}
        endicon={<KeyboardArrowDownIcon />}
      >
        <MoreVert />
      </IconButton>
      <StyledMenu
        
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={updatePost} disableRipple>
          <EditIcon />
          수정
        </MenuItem>
        <MenuItem onClick={() => deletePost(editData.id)} disableRipple>
          <DeleteIcon />
          삭제
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FlagIcon />
          신고
        </MenuItem>        
        {/* <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </StyledMenu>
    </div>
  );
}