import React, { setGlobal } from "reactn";
import { toast } from "react-toastify";
import axios from "axios";
// import Unsplash from "unsplash-js";
import { rootState } from "Reducers";
import { Notify } from "Components";

export const Http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 45000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
  },
});
// const unsplash = new Unsplash({ accessKey: `${process.env.ACCESS_KEY}` });
// const accessKey = process.env.PIC_ACCESS_KEY;

// export const Http = new Unsplash({
//   accessKey: `iUe4tL0SCYwQgI3Q2SJ36iDEu-DUntwbHv1aqYZOKLE`,
//   // Optionally you can also configure a custom header to be sent with every request
//   headers: {
//     "X-Custom-Header": "foo",
//   },
//   // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
//   timeout: 500, // values set in ms
// });

// Http.photos.listPhotos(2, 15, "latest").then((json) => {
//   console.log(json);
// });
Http.interceptors.request.use((config) => {
  const url = config?.url?.split("/") || [];

  if (!["login", "forgotten"].includes(url[1]))
    config.headers[
      "Authorization"
    ] = `Client-ID iUe4tL0SCYwQgI3Q2SJ36iDEu-DUntwbHv1aqYZOKLE`;

  return config;
});

Http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status) {
      if (error.response.status === 401) {
        setGlobal(rootState);
      }

      if (error.response.status === 500) {
        toast(<Notify body="A server error occured" type="error" />);
      }
    }

    return Promise.reject(error);
  }
);

export default Http;
