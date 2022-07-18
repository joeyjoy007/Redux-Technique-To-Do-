import React from 'react'
import { Button } from 'antd'
const EditGossip = () => {
    return (
        <div>
      
       
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
  <label for="floatingTextarea2">Gossips</label>
</div>

<div style={{display:"flex",justifyContent:'space-evenly'}}>
<Button type="primary" htmlType="submit" className="my-5">
  Update
</Button>
<Button type="danger" htmlType="submit" className="my-5 m-5">
  Delete
</Button>
</div>

        </div>
    )
}

export default EditGossip
