import React from 'react'
import Address from './Profile/Address'
import FullName from './Profile/FullName'
import ProfilePhoto from './Profile/ProfilePhoto'

const Profile = () => {
  return (
    <div>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
   
    </div>
  )
}

export default Profile
