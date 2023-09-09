import React, { useEffect } from 'react'
import { useUser } from '../ProductContext/UserProvider'

function LogOut() {
    const {LogOut} = useUser();

    useEffect(() => {
        LogOut();
    } , [])

  return (
    null
  )
}

export default LogOut