import React, { useState } from 'react'

import { Form, Input, InputNumber, Button } from 'antd';

import { useDispatch } from 'react-redux'
import { post } from '../../redux/actions'
import { Error, Success } from '../../utils/showMessgae';
const PostGossip = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  

  const onFinish = (values) => {
    dispatch(post(values))
    console.log('Success:', values);
    Success("post sent")


  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    Error("post not sent")
  };

  const dispatch = useDispatch()

  const [text, setText] = useState({post:""})



const Change = (e)=>{
 const names = e.target.name
 const value = e.target.value
setText({...text,[names]:value})
 
}

const submitPost = ()=>{
  

  console.log(text.post);
  dispatch(post(text.post))
 

}

  
    return (
      <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <Form.Item name="post" label="Post"  rules={[
      {
        required: true,
        message: 'Write post',
      },
    ]}>
    <Input.TextArea />
  </Form.Item>
  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    )
}

export default PostGossip
