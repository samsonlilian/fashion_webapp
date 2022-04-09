import axios from 'axios'

export const token = localStorage.getItem('token')
export const remote_url = 'http://127.0.0.1:8000/api/'

export const getToken = () => {
	//

	return localStorage.getItem('token')
}

export const destroyToken = () => {
	//
	localStorage.removeItem('token')
	// localStorage.removeItem('fullname')
}
//

///get request function
export const getReq = async (url) => {
	try {
		const res = await axios.get(`${url}`)
		if (res.status === 200 || res.status === 201) {
			// console.log(res.data)
			return res.data
		}
	} catch (error) {
		return error.response === undefined
			? 'Network Error'
			: error.response.data.errors === undefined
			? error.response.data.message
			: error.response.data.errors
	}
}

///post request function
export const postReq = async (url, data) => {
	const options = {
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	}

	try {
		const res = await axios.post(`${url}`, data, options)
		if (res.status === 200 || res.status === 201) {
			return res.data
		}
	} catch (error) {
		return error.response === undefined
			? 'Network Error'
			: error.response.data.errors === undefined
			? error.response.data.message
			: error.response.data.errors
	}
}

//
export const postWithFileReq = async (url, postData, reset) => {
	const options = {
		headers: {
			'Content-type': 'multipart/form-data',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	}

	try {
		const res = await axios.post(`${url}`, postData, options)
		if (res.status === 200 || res.status === 201) {
			reset && reset()
			return res.data
		}
	} catch (error) {
		return error.response === undefined
			? 'Network Error'
			: error.response.data.errors === undefined
			? error.response.data.message
			: error.response.data.errors
	}
}
