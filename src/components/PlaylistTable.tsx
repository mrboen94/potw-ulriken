import { SpotifyData } from '@/data/data.ts';
import PlaylistDrawer from '@/components/PlaylistDrawer.tsx';
import { Badge } from '@/components/ui/badge.tsx';

interface PlaylistTableProps {
  spotifyData: SpotifyData[];
}

export default function PlaylistTable({ spotifyData }: PlaylistTableProps) {
  return (
    <div className="border-t border-background/10 pt-11 max-w-7xl mx-auto">

      <table className="mt-6 mx-auto sm:mx-12 whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12"/>
          <col className="lg:w-4/12"/>
          <col className="lg:w-2/12"/>
          <col className="lg:w-1/12"/>
        </colgroup>
        <thead className="border-b border-white/10 text-sm/6 text-foreground">
        <tr className="text-background bg-foreground border-b">
          <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
            Navn
          </th>
          <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
            Tittel/Tema
          </th>
          <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
            Dato
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold sm:table-cell">
            Mer info
          </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-foreground/10">
        {spotifyData.map((spotify) => (
          <tr key={spotify.submittedBy + spotify.spotifyLink}>
            <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-x-4">
                {/*<img alt="" src={spotify.user.imageUrl} className="size-8 rounded-full bg-gray-800" />*/}
                <div className="truncate text-sm/6 font-medium text-foreground">{spotify.submittedBy}</div>
              </div>
            </td>
            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
              <div className="flex gap-x-3">
                {spotify?.theme && <Badge>{spotify.theme}</Badge>}
              </div>
            </td>
            <td
              className="hidden sm:table-cell font-mono py-4 pl-0 pr-4 text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
              {spotify.date.toLocaleDateString()}
            </td>
            <td className="py-4 pl-0 pr-4 text-sm/6 sm:pr-8 lg:pr-20">
              <PlaylistDrawer spotifyData={spotify}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}