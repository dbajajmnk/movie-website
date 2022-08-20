import React, {useState}  from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import './MovieModal.scss'
import MovieTrailer from '../movieTrailer/MovieTrailer'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    height: 330,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

function MovieModal(props) {
    

  return (
    <div>
      <Modal
        open={props.modalState}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MovieTrailer embeddedLink={props.selectedMovieId}/>
        </Box>
      </Modal>
    </div>
  )
}

export default MovieModal