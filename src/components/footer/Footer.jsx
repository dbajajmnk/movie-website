import React, { Component } from 'react'
import Box from '@mui/material/Box'
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from  '@mui/material/Typography'
import '../footer/footer.scss'

export class Footer extends Component {
  render() {
    return (
      <Box>
        <AppBar position='static'>
          <Toolbar variant='regular' >
          <Typography variant="h5" color="inherit" component="div"  data-testid="footer-id" className='footer'> 
            @Copyright 2021 - 2022
          </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default Footer