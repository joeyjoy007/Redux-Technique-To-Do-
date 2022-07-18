import { Form, message,Space ,Input, Button, Checkbox } from 'antd';
import {Error, Success} from '../../utils/showMessgae'
import { useDispatch } from 'react-redux';
import {  RegisterUser } from '../../redux/actions';
 import { useHistory } from 'react-router-dom'
const Register = () => {

  // const success = (msg)=>{
  //   message.success(msg);
  // }

  const history = useHistory()

  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(RegisterUser(values))
    console.log('Success:', values);
  history.push('/login')
  Success("user registered")

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    Error("user not registered")
  };

  




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
      <Form.Item
        label="Username"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
     

    {  /*<Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>*/}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;