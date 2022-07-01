import React from 'react'
import {GetRoomDataProvider} from './roomAPI'

const ApiConsumer = ({children}) => {
  return (
    <GetRoomDataProvider>
        {children}
    </GetRoomDataProvider>
  )
}

export default ApiConsumer