const { notification } = require("antd");

export const showNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
