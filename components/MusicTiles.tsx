import React from 'react'
import { TilesContainer } from './App.style'
import { TilePlayer } from './TilePlayer'
import ActiveSounds from './ActiveSounds'
import { RootState } from '../store'
import { useSelector } from 'react-redux'
import { MusicType } from 'types'

interface MusicTilesProp {
  musicList: MusicType[]
}

const MusicTiles = ({ musicList }: MusicTilesProp) => {
  const store = useSelector((state: RootState) => state.lofiMusic)

  return (
    <div>
      <ActiveSounds activeSounds={store.playing.length} />
      <TilesContainer>
        {musicList.map((music: MusicType) => (
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
            isPlaying={
              store.playing.findIndex((item) => item == music.src) != -1
            }
            masterVolume={store.masterVolume}
          />
        ))}
      </TilesContainer>
    </div>
  )
}

export default MusicTiles
