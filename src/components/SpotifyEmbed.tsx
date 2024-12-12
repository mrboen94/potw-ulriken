import { useSpotifyEmbed } from '@/lib/useSpotifyEmbed.ts';
import { SkeletonSpotifyCard } from '@/components/SkeletonSpotifyCard.tsx';


export const SpotifyEmbed: React.FC<{ link: string }> = ({ link }) => {
  const { html, isLoading, error } = useSpotifyEmbed(link);

  if (isLoading) return <SkeletonSpotifyCard/>;
  if (error) return <div>Error: {error.message}</div>;
  if (!html) return <div>No embed found</div>;

  return <div dangerouslySetInnerHTML={{ __html: html }}/>;
}