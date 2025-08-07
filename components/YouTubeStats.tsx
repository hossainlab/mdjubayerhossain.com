import React, { useState, useEffect } from 'react';

interface YouTubeStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

interface YouTubeStatsProps {
  channelId?: string;
  apiKey?: string;
}

const YouTubeStatsComponent: React.FC<YouTubeStatsProps> = ({ 
  channelId = "@hossainlab", // @hossainlab channel handle
  apiKey = import.meta.env.VITE_YOUTUBE_API_KEY
}) => {
  const [stats, setStats] = useState<YouTubeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatCount = (count: string): string => {
    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      if (!apiKey) {
        setStats({
          subscriberCount: "2500",
          videoCount: "150",
          viewCount: "350000"
        });
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${encodeURIComponent(channelId)}&key=${apiKey}`
        );
        
        if (!response.ok) {
          console.error('YouTube API response not ok:', response.status, response.statusText);
          throw new Error(`Failed to fetch YouTube data: ${response.status}`);
        }

        const data = await response.json();
        console.log('YouTube API response:', data);
        
        if (data.items && data.items.length > 0) {
          const statistics = data.items[0].statistics;
          setStats({
            subscriberCount: statistics.subscriberCount || "0",
            videoCount: statistics.videoCount || "0",
            viewCount: statistics.viewCount || "0"
          });
        } else {
          console.error('No channel data found:', data);
          throw new Error('Channel not found');
        }
      } catch (err) {
        console.error('YouTube API error:', err);
        setError(err instanceof Error ? err.message : 'Failed to load YouTube stats');
        // Show demo data as fallback
        setStats({
          subscriberCount: "2500",
          videoCount: "150", 
          viewCount: "350000"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeStats();
  }, [channelId, apiKey]);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            YouTube Channel Stats
          </h3>
        </div>
        <div className="animate-pulse">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white text-center">
          <span className="hidden sm:inline">YouTube Channel Stats</span>
          <span className="sm:hidden">YouTube Stats</span>
        </h3>
      </div>
      
      {error && (
        <p className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 mb-4 text-center px-2">
          Showing demo data. {error}
        </p>
      )}

      <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="text-center p-2 sm:p-3">
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-600 dark:text-red-400 mb-1 sm:mb-2">
            {formatCount(stats.subscriberCount)}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
            <span className="hidden sm:inline">Subscribers</span>
            <span className="sm:hidden">Subs</span>
          </div>
        </div>
        
        <div className="text-center p-2 sm:p-3">
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-600 dark:text-red-400 mb-1 sm:mb-2">
            {formatCount(stats.viewCount)}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
            <span className="hidden sm:inline">Total Views</span>
            <span className="sm:hidden">Views</span>
          </div>
        </div>
        
        <div className="text-center p-2 sm:p-3">
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-600 dark:text-red-400 mb-1 sm:mb-2">
            {formatCount(stats.videoCount)}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
            Videos
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 text-center">
        <a
          href="https://www.youtube.com/@hossainlab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="hidden sm:inline">Visit Channel</span>
          <span className="sm:hidden">Visit</span>
        </a>
      </div>
    </div>
  );
};

export default YouTubeStatsComponent;