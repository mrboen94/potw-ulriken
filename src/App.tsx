import { useEffect, useState } from 'react'
import './App.css'
import { data, SpotifyData } from './data/data.ts';

const groupDataByDate = (data: SpotifyData[]) => {
  return data.reduce((acc, item) => {
    const date = item.date.toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {} as { [key: string]: SpotifyData[] });
};

function App() {
  const [spotifyData] = useState(data.reverse());
  const [spotifyOembedData, setSpotifyOembedData] = useState<JSX.Element[]>([]);
  const fetchOembedData = async (link: string) => {
    let response = await fetch(`https://open.spotify.com/oembed?url=${link}`);
    let json = await response.json();
    return json.html;
  }

  const getSpotifyCard = async (item: any, idx: number, showDate: boolean) => {
    const html = await fetchOembedData(item.spotifyLink);
    return (
      <div key={idx + item.spotifyLink}>
        {showDate && <h1 className={"text-2xl"}>{item.submittedBy}</h1>}
        {showDate && <h3 className={"text-xl"}>{item.date.toLocaleDateString()}</h3>}
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      const groupedData = groupDataByDate(spotifyData);
      const cards= [];
      for (const date in groupedData) {
        const items = groupedData[date];
        for (let i = 0; i < items.length; i++) {
          const card = await getSpotifyCard(items[i], i, i === 0);
          cards.push(card);
        }
      }
      setSpotifyOembedData(cards);
    };
    fetchData();
  }, [spotifyData]);

  return (
    <>
        <div className={"flex flex-col items-center"}>
          <h1 className={"text-4xl"}>Ulriken Playlist Of The Week</h1>
          <div className={"flex flex-col items-center"}>
            {spotifyOembedData}
          </div>
        </div>
    </>
  )
}

export default App
