export const boardStyles = {
  field: {
    marginTop: 20,
    // marginBottom: 20,
    // display: 'block',
    // flexGrow: 1,
    background: '#FFFFFF',
    border: '2px solid #E5E5E5',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px'    
  },
  smallInput: {
    '& .MuiOutlinedInput-root': {
      height: 40,      
    }
  },
  label: {
    paddingTop: 20,    
    marginRight: 20,
    textAlign: 'end',
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '44px',
    // textAlign: 'right',
    color: '#5F5F5F'
  },
  btn: {
    background: 'rgba(149, 149, 149, 0.1)',
    border: '2px solid #959595',
    boxSsizing: 'border-box',
    borderRadius: '10px',
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '16px',    
    /* identical to box height */
    width: '100px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    color: '#959595',
    '&:hover': {
      backgroundColor: '#F6F6F6'
    }
  },
  attBtn: {
    background: '#FFFFFF',
    border: '1px solid #7B8C8C',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    color: "#7B8C8C",
    position: "relative",
    display: "inline-block",
    width: '110px',
    // float: 'right'
  },
  attBtnText: {
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#7B8C8C'
  },
  contanier: {
    width: '1000px',
    height: 'auto',
    
  },
  card: {
    // width: 'auto',
    height: 'auto',    
    padding: '50px 100px',
    textAlign: 'start',    
    minWidth: '100%',
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.05em',
    color: '#000000',
    marginTop: '30px'
  },
  content: {
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '36px',
    letterSpacing: '0.05em',
    color: '#000000',
    marginTop: '30px'
  },
  botText: {
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: 'auto',
    color: '#959595',
    marginTop: '0px'
  },
  dateText: {
    '& .MuiCardHeader-subheader': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '21px',
      color: '#C4C4C4'
    },
    '& .MuiCardHeader-title': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      color: '#000000'
    }
  },
  usernameText: {
    '& .MuiCardHeader-title': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      lineHeight: '28px',
      color: '#000000'
    }
  },
  comments: {
    width: '97%',
    marginLeft: '3%'
  },
  commentContent: {
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.05em',
    color: '#000000'
  },
  commentDateText: {
    '& .MuiCardHeader-subheader': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '21px',
      color: '#C4C4C4'
    },
    '& .MuiCardHeader-title': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '28px',
      color: '#000000',
      padding: '0 0 0 0'
    }
  },
  nestedComment: {
    width: '94%',
    marginLeft: '6%'    
  },
  replyIcon: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '28px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.05em',
    color: '#808080'
  },
  textField: {
    '& .MuiListItemText-root': {
      whiteSpace: 'nowrap', 
      overflow: 'hidden'
    }
  }
};