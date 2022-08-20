import React from 'react'
import Box from '@mui/material/Box'
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from  '@mui/material/Typography'

function Header(props) {
  return (
    <Box>
        <AppBar position='static'>
          <Toolbar variant='dense' >
          <Typography variant="h3" color="inherit" component="div" data-testid="header-id"> 
            {props.title}
          </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Header