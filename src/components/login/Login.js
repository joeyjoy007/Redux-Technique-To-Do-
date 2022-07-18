import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux/actions';
import { Success,Error } from '../../utils/showMessgae';

const Login = () => {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log('Success:', values);
    Success("user loginned")
    dispatch(LoginUser(values))
  };

  const onFinishFailed = (error) => {
    console.log('Failed:', error);
    Error("user not loginned")
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
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

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;