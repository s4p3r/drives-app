import axios from 'axios';

const data = {
  DataGuid: "60c1d23c-8859-4420-aa9e-0d6e9e90f25e",
  DataType: "UserProfile_Info",
  UserID: "60c1d23c-8859-4420-aa9e-0d6e9e90f25e",
}

export const getUsers = () => {
  return dispatch => {
    return axios.post(`ZHJP.WebApp.ServiceProxy.svc/GetData`, data);
  }
}
