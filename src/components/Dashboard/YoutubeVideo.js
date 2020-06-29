import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

const YoutubeVideo = ({
  videoId,
  shouldPause,
  lastPosition,
  setLastPosition
}) => {
  const [player, setPlayer] = useState(null)

  const options = {
    height: '400px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

  useEffect(() => {
    if (player && shouldPause) player.pauseVideo()
  }, [shouldPause, player])

  const onPlayerReady = e => {
    setPlayer(e.target)
    e.target.seekTo(lastPosition)
    e.target.seekTo(lastPosition)
    e.target.pauseVideo()
  }
  const onPlayerPaused = e =>
    setLastPosition(parseInt(e.target.getCurrentTime()))

  const onPlayResume = e => {
    // console.log('play')
    if (shouldPause) e.target.pauseVideo()
  }
  const onPlayEnd = e => {
    // console.log('end')
  }

  return (
    <>
      <Youtube
        onReady={onPlayerReady}
        onPause={onPlayerPaused}
        onPlay={onPlayResume}
        onEnd={onPlayEnd}
        videoId={videoId}
        opts={options}
      />
    </>
  )
}

export default YoutubeVideo
