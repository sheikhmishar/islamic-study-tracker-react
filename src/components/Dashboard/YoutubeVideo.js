import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

const YoutubeVideo = props => {
  const { videoId, shouldPause, lastPosition, setLastPosition } = props
  const [player, setPlayer] = useState(null)

  const options = {
    frameborder: 0,
    playerVars: {
      autoplay: 0,
      cc_lang_pref: 'en',
      cc_load_policy: 1,
      controls: 1
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
        className='embed-responsive embed-responsive-16by9'
        containerClassName='embed-responsive-item'
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
