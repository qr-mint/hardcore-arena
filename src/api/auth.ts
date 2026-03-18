import { apiClient } from './request';

export const auth = async (publicKey: string) => {
	const res = await apiClient.post(`/auth/telegram?${window.Telegram.WebApp.initData}`, {}, {
		headers: {
			'x-public-key': publicKey
		}
	});
	return res.data.data;
};

export const refreshToken = async () => {
	const res = await apiClient.post('/auth/refresh');
	return res.data.data;
};

export const logout = async () => {
	const res = await apiClient.get('/auth/logout');
	return res.data.data;
};