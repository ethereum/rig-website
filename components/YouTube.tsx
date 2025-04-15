"use client"

import LiteYouTubeEmbed from "react-lite-youtube-embed"

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

/**
 * YouTube component that handles various YouTube URL formats
 * 
 * Supported URL formats:
 * - Regular videos: https://www.youtube.com/watch?v=VIDEO_ID
 * - Live videos: https://www.youtube.com/live/VIDEO_ID
 * - Playlists: https://www.youtube.com/playlist?list=PLAYLIST_ID
 * - Embedded videos: https://www.youtube.com/embed/VIDEO_ID
 * - Short URLs: https://youtu.be/VIDEO_ID
 * 
 * @param {url} Full YouTube URL
 * @param {start} Optional start time in seconds
 * @param {title} Optional title for accessibility
 * @returns Embedded YouTube video/playlist component
 */
type YouTubeProps = {
  url: string
  start?: string
  title?: string
}

/**
 * Parses YouTube URL to extract video ID and/or playlist ID
 */
const parseYouTubeUrl = (url: string): { videoId: string; playlistId?: string; startTime?: string } => {
  // For short URLs (youtu.be)
  const youtubeShortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (youtubeShortMatch) {
    const videoId = youtubeShortMatch[1];
    
    // Check for timestamp in short URL
    const timeMatch = url.match(/[?&]t=(\d+)/);
    const startTime = timeMatch ? timeMatch[1] : undefined;
    
    // Check for playlist parameter in short URL
    const listMatch = url.match(/[?&]list=([^&]+)/);
    const playlistId = listMatch ? listMatch[1] : undefined;
    
    return { videoId, playlistId, startTime };
  }
  
  // For playlist URLs
  const playlistMatch = url.match(/youtube\.com\/playlist\?list=([^&]+)/);
  if (playlistMatch) {
    return { videoId: "videoseries", playlistId: playlistMatch[1] };
  }
  
  // For video IDs in different formats
  let videoId = "";
  
  // Regular watch URLs
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) {
    videoId = watchMatch[1];
  }
  
  // Embed URLs
  const embedMatch = url.match(/youtube\.com\/embed\/([^/?]+)/);
  if (embedMatch) {
    videoId = embedMatch[1];
  }
  
  // Live URLs
  const liveMatch = url.match(/youtube\.com\/live\/([^/?]+)/);
  if (liveMatch) {
    videoId = liveMatch[1];
  }
  
  // Check for playlist parameter in video URLs
  const listMatch = url.match(/[?&]list=([^&]+)/);
  const playlistId = listMatch ? listMatch[1] : undefined;
  
  // Check for timestamp in standard URL
  const timeMatch = url.match(/[?&]t=(\d+)|[?&]start=(\d+)/);
  const startTime = timeMatch ? (timeMatch[1] || timeMatch[2]) : undefined;
  
  return { videoId, playlistId, startTime };
}

const YouTube = ({ url, start = "0", title = "YouTube" }: YouTubeProps) => {
  const { videoId, playlistId, startTime } = parseYouTubeUrl(url);
  
  // Use the provided start time or the one from the URL
  const startParam = startTime || start;
  
  const params = new URLSearchParams();
  
  // Add start time if provided and greater than 0
  if (+startParam > 0) {
    params.set("start", startParam);
  }
  
  // Add playlist if available
  if (playlistId) {
    params.set("list", playlistId);
  }
  
  return (
    <figure className="my-8 max-w-3xl">
      <LiteYouTubeEmbed
        aspectHeight={9}
        aspectWidth={16}
        id={videoId}
        title={title}
        params={params.toString()}
        noCookie
      />
    </figure>
  )
}

export default YouTube
