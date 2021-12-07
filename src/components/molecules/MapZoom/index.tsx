import React from 'react'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

import { MapZoomContainer, IconButton } from './style.mapZoom'

interface MapZoomProps {
  onZoomIn: () => void
  onZoomOut: () => void
}

export const MapZoom: React.FC<MapZoomProps> = props => {
  const { onZoomIn, onZoomOut } = props

  return (
    <MapZoomContainer>
      <IconButton onClick={() => onZoomIn()}>
        <AddIcon />
      </IconButton>
      <IconButton onClick={() => onZoomOut()}>
        <RemoveIcon />
      </IconButton>
    </MapZoomContainer>
  )
}
