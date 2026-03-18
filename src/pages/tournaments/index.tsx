import { Route, Routes } from "react-router-dom";

import CreateTournament from "./create";
import { MyTournament } from './myTournaments';
import { Tournament } from './tournament';

export const TournameRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-12 h-12 bg-blue-500 rounded-full animate-bounce" />
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-white rotate-45" />
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-400 rounded-full" />
          <div className="absolute bottom-1/3 right-20 w-16 h-16 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="relative flex-1 flex flex-col p-4 pb-24">
        <Routes>
          <Route path="/create" element={<CreateTournament />} />
          <Route path="/my/:id" element={<MyTournament />} />
          <Route path="/:id/participants" element={<Tournament />} />
          <Route path="/:id/levels" element={<Tournament />} />
          <Route path="/:id" element={<Tournament />} />
        </Routes>
      </div>
    </div>
  );
};