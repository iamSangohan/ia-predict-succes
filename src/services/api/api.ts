

import axios from "axios";
import WebClient from "../../config/webClient";
// const URL = 'http://localhost:8070/'
//const authToken = getToken();

const getCSRFToken = () => {
  const csrfCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='));
  if (csrfCookie) {
    // console.log('crsfCookie', csrfCookie.split('=')[1])
    return csrfCookie.split('=')[1];
  }
  return null;
};

const csrfToken = getCSRFToken(); 

const config = {
  headers: {
    // Authorization: `Bearer ${authToken}`,
    'X-CSRFToken': csrfToken,
  },
  withCredentials: true,
}



export const api = {


  // register:async (data:IRegister)=>{
  //     // console.log(`data${data.login}`)
  //     return await axios.post(`permis/users`,{...data} )
  // },
  // registerCourse:async (data:ICours)=>{

  //     return await axios.post(`permis/cours`,{...data} )
  // }
  // ,
  // getAllUsers:async ()=>{
  //     return await axios.get(`permis/users`)
  // },
  // getAllCourses:async ()=>{
  //     return await axios.get(`permis/cours`)
  // },
  getAllStudent: async () => {
    return await WebClient.get(`student-info/`, config);
  },
  getAllDemande: async () => {
    return await WebClient.get(`cabinet/demandes/`, config);
  },

  getAllUser: async () => {
    return await WebClient.get(`users/users/`, config);
  },

  predireResult: async (id?:number) => {
    return await axios.get(`test.yes-ivoire.com/recommandation/${id}`);
  }

  
};
