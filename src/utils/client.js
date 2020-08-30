import axios from "axios";
import { get } from "lodash";
import storage from "./storage";
import { USER_TOKEN_KEY } from "../components/Auth/utils";
import { showNotification } from "../utils/notify";

const host = process.env.REACT_APP_HOST;

class Client {
  constructor(config = {}) {
    this.defaultConfig = config;
  }

  get(url, config) {
    return this.getResponse("get", url, config);
  }

  delete(url, config) {
    return this.getResponse("delete", url, config);
  }

  patch(url, body, config = {}) {
    return this.getResponse("patch", url, {
      data: body,
      ...config,
    });
  }

  put(url, body, config = {}) {
    return this.getResponse("put", url, {
      data: body,
      ...config,
    });
  }

  post(url, body, config = {}) {
    return this.getResponse("post", url, {
      data: body,
      ...config,
    });
  }

  filePost(url, body, config = {}) {
    config.headers = config.headers || {};
    config.headers["content-type"] = "multipart/form-data";
    return this.getResponse("post", url, {
      data: body,
      ...config,
    });
  }

  getResponse(method, url, config) {
    return this.getMergedConfig(method, url, config).then((c) => {
      return axios(c)
        .then((response) => response.data)
        .catch((e) => {
          if (get(e, "response.status") !== 404) {
            showNotification(
              "error",
              "Error",
              c.error || get(e, "response.data.message", "Some Error Occurred")
            );
          }
          throw e;
        });
    });
  }

  async getMergedConfig(method, url, config = {}) {
    const mergedConfig = {
      method,
      url: host + url,
      ...config,
      ...this.defaultConfig,
    };
    const token = (await storage.get(USER_TOKEN_KEY))[USER_TOKEN_KEY];
    mergedConfig.headers = mergedConfig.headers || {};
    if (token) {
      mergedConfig.headers.Authorization =
        mergedConfig.headers.Authorization || "Basic " + token;
    }
    return mergedConfig;
  }
}

const client = new Client();

export default client;
export { Client };
