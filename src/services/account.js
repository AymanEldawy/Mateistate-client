import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleAccount = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/${id}`, {
    signal,
  });
};

export const getAllAccounts = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_ACCOUNT, {
    signal,
  });
};

export const createAccount = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_ACCOUNT, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateAccount = (AccountId, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/${AccountId}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const deleteAccount = (AccountId) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/${AccountId}`
  );
};
