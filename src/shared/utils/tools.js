import { notification } from 'antd';

export const showSuccess = (message) => notification.success({
  message,
});

export const getError = (err) => err.response?.data.error?.message || err.message;
