import { apiClient } from '../request';
import { getQueryParams } from '../../utils/getQueryParams';

export const getGameUser = async () => {
  const code = getQueryParams('tgWebAppStartParam');
  console.log(code, 'tgWebAppStartParam');
	const paramQuery = code ? `?invite_code=${code}` : '';
  const res = await apiClient.get(`/game${paramQuery}`);
  return res.data.data;
};
