import { message} from 'antd';


export const Success = async(msg) => {
   await message.success(msg);
  };
  
export const Error = async(msg) => {
   await message.error(msg);
  };