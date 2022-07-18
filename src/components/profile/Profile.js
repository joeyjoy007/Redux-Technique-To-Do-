import React from 'react'
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';
import Demo from '../Comments/Comments';
const Profile = (props) => {
  const history = useHistory()

  const click = ()=>{
    history.push('/updateUser')
  }

    return (
        <div>
        <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300,marginLeft:"3vmax" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>


  <button className="btn-primary" onClick={click}>Update User</button>
          
        </div>
    )
}

export default Profile
