import { apiClient } from '../request';

export const getTournaments = async () => {
  const res = await apiClient.get('/game/tournaments');
  return res.data.data;
};

export const getMyTournaments = async () => {
  const res = await apiClient.get('/game/tournaments/my');
  return res.data.data;
};

export const getTournament = async (tournamentId: any) => {
  const res = await apiClient.get(`/game/tournaments/${tournamentId}`);
  return res.data.data;
};

export const getTournamentBy = async (type: any) => {
  const res = await apiClient.get(`/game/tournaments/by?type=${type}`);
  return res.data.data;
};

export const createTournament = async (tournament: any) => {
  const res = await apiClient.post(`/game/tournaments`, tournament);
  return res.data.data;
};

export const getTournamentMyStats = async (tournamentId: any) => {
  const res = await apiClient.get(`/game/tournaments/${tournamentId}/my-stats`);
  return res.data.data;
}

export const registerTournament = async (body: any) => {
  const res = await apiClient.get(`/game/tournaments/register`, body);
  return res.data.data;
}

export const getLevels = async (tournamentId: number) => {
  const res = await apiClient.get(`/game/tournaments/${tournamentId}/levels`);
  return res.data.data;
}

export const getParticipants = async (tournamentId: number) => {
  const res = await apiClient.get(`/game/tournaments/${tournamentId}/participants`);
  return res.data.data;
}