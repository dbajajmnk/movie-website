import React from 'react';

export default function MovieTrailer(props) {
  return (
    <div>
        <iframe data-testid="trailer" src={props.embeddedLink} width={850} height={330}></iframe>
    </div>
  )
}