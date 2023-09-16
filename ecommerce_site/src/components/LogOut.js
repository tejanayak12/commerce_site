import React, { useEffect } from 'react'
import { useUser } from '../ProductContext/UserProvider'

function LogOut() {
    const {LogOut} = useUser();

    useEffect(() => {
      localStorage.clear();
        LogOut();
    } , [])

  return (
    null
  )
}

export default LogOut