import axios from "axios";
import {QueryClient} from "react-query";
export const UserAPI = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});
export const request = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		common: {
			Authorization: "Bearer " + localStorage.getItem("token")
		}
	},
});

//
// request.interceptors.response.use((response) => {
// 	return response;
// }, (error) => {
//
// 	if(error.response.status === 401){
// 		console.log("error Token")
// 	}
// 	return Promise.reject(error.message);
// });


export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});
