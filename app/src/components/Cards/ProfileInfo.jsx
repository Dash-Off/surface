import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({userInfo, onLogout}) => {

  const checkNameNull = (userInfo) => {
    if (!userInfo) {
      return ''
    } else {
      // console.log(userInfo)
      // console.log('you are here')
      return userInfo.fullName
    }
  }

  // console.log('userInfo ==> ', userInfo , checkNameNull(userInfo))
  // console.log(userInfo.userInfo.fullName)
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-gray-400'>
            {getInitials(checkNameNull(userInfo))}
        </div>
        
        <div>
            <p className='text-sm font-medium'>{getInitials(checkNameNull(userInfo))}</p>
            
            <button className='text-sm text-slate-700 underline' onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo 