import axiosClient from 'utils/axios';

const endPoint = '/auth';

async function signIn(payload) {
	const { username, password } = payload;

	const path = `${endPoint}/login`;

	const response = await axiosClient.post(path, { username, password });

	return response.data;
}

async function refreshToken(payload) {
	const { token } = payload;

	const path = `${endPoint}/refresh`;

	const response = await axiosClient.post(path, { token });

	return response.data;
}

export default {
signIn, refreshToken
};
