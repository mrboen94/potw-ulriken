import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '@/components/layout/Layout.tsx';
import LastPlaylist from '@/components/LastPlaylist.tsx';
import PlaylistTable from '@/components/PlaylistTable.tsx';
import { data, SpotifyData } from '@/data/data.ts';
import UserChart from '@/components/UserChart.tsx';

const spotifyData: SpotifyData[] = data;

// Remove future dates
spotifyData.forEach((playlist) => {
  if (new Date(playlist.date) > new Date()) {
    playlist.date = new Date();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <LastPlaylist spotifyData={spotifyData[0]}/>
      <UserChart spotifyData={spotifyData}/>
      <PlaylistTable spotifyData={spotifyData.slice(1)}/>
    </Layout>
  </StrictMode>
  ,
)
