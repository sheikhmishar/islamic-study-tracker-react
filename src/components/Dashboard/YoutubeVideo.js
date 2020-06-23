import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

const YoutubeVideo = ({ videoId, shouldPause, startTime, setStartTime }) => {
  const [player, setPlayer] = useState(null)

  const opts = {
    height: '400px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

  useEffect(() => {
    if (player) player.pauseVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldPause])

  // useEffect(() => {
  //   console.log('mounting', player ? player.getCurrentTime() : '')
  //   return () => {
  //     console.log('unmounting', player ? player.getCurrentTime() : '')
  //   }
  // }, [])

  return (
    <>
      <Youtube
        onReady={e => {
          setPlayer(e.target)
          e.target.seekTo(startTime)
          e.target.seekTo(startTime)
          e.target.pauseVideo()
        }}
        onPause={e => {
          // console.log('paused', e.target.getCurrentTime())
          setStartTime(parseInt(e.target.getCurrentTime()))
        }}
        onPlay={e => {
          // console.log('play')
          if (shouldPause) e.target.pauseVideo()
        }}
        onEnd={e => {
          // console.log('end')
        }}
        videoId={videoId}
        opts={opts}
      />
    </>
  )
}

export default YoutubeVideo
