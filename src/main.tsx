import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '@/components/layout/Layout.tsx';
import LastPlaylistHero from '@/components/layout/LastPlaylistHero.tsx';
import PlaylistTable from '@/components/PlaylistTable.tsx';
import { data, SpotifyData } from '@/data/data.ts';
import UserChart from '@/components/UserChart.tsx';

const rawData: SpotifyData[] = data;
const spotifyData: SpotifyData[] = [];

// Remove future dates
rawData.forEach((playlist) => {
  if (new Date(playlist.date) < new Date()) {
    spotifyData.push(playlist);
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <LastPlaylistHero spotifyData={spotifyData[0]}/>
      <UserChart spotifyData={spotifyData}/>
      <PlaylistTable spotifyData={spotifyData.slice(1)}/>
    </Layout>
  </StrictMode>
  ,
)
