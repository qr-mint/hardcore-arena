import { apiClient } from '../request';

export const getLevels = async () => {
  const res = await apiClient.get('/game/levels');
  return res.data.data;
};

export const getLevel = async (levelId: any) => {
  const res = await apiClient.get(`/game/levels/${levelId}`);
  return res.data.data;
};

export const startLevel = async (levelId: any) => {
  const res = await apiClient.post(`/game/levels/${levelId}/start`);
  return res.data.data;
};

interface FinishParams {
  time: any;
  success: boolean;
  tournament_id?: number;
}

export const finishLevel = async (levelId: any, body: FinishParams) => {
  const res = await apiClient.post(`/game/levels/${levelId}/finish`, body);
  return res.data.data;
};

export const getCompanies = async () => {
  const res = await apiClient.get('/game/levels/companies');
  return res.data.data;
};

export const getLevelsByCompanyId = async (levelId: number) => {
  const res = await apiClient.get(`/game/levels/companies/${levelId}/levels`);
  return res.data.data;
};


export const getLevelStats = async (levelId: number) => {
  const res = await apiClient.get(`/game/levels/${levelId}/stats`);
  return res.data.data;
};