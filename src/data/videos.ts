import type { Video } from '../types'

/**
 * Add a video by pasting a YouTube URL.
 * Thumbnails are generated automatically from the video ID.
 *
 * Example:
 * {
 *   title: 'Video title',
 *   youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
 *   description: 'Short description of the video.',
 *   publishedDate: '15 Sep 2026',
 * }
 */
export const videos: Video[] = [
  {
    title: 'SQL vs NoSQL Explained: Choosing the Right Database for Your System',
    youtubeUrl: 'https://www.youtube.com/watch?v=IMPRjEt6K0o',
    description:
      'A practical look at relational and non-relational databases, with examples for when each fits a system’s needs.',
    publishedDate: '15 Sep 2026',
  },
  {
    title: 'The Backbone of Every Modern App | Databases Explained | Part 1',
    youtubeUrl: 'https://www.youtube.com/watch?v=kWOEkARuIFw',
    description:
      'What a database is, why applications depend on it, and how systems store and retrieve data.',
    publishedDate: '29 May 2026',
  },
  {
    title: 'HTTP Status Codes Explained in 5 Minutes',
    youtubeUrl: 'https://www.youtube.com/watch?v=zQ8XgpuKiIU',
    description:
      'The five HTTP status categories and the response codes every backend engineer should recognize.',
    publishedDate: '18 May 2026',
  },
  {
    title: 'Why Your Database Is Slow (And How Indexing Fixes It)',
    youtubeUrl: 'https://www.youtube.com/watch?v=aEr-BOGl3qE',
    description:
      'Indexing from first principles — full table scans, query speed, index types, and the trade-offs involved.',
    publishedDate: '7 May 2026',
  },
  {
    title: 'Caching Explained Simply',
    youtubeUrl: 'https://www.youtube.com/watch?v=UTK6MZqonvM',
    description:
      'Cache invalidation, stale data, and memory limits — the three challenges that show up in real systems.',
    publishedDate: '22 Apr 2026',
  },
  {
    title: 'NoSQL Explained With a Storage Room Analogy',
    youtubeUrl: 'https://www.youtube.com/watch?v=q-MNzHtC_YM',
    description: 'A short analogy for how NoSQL stores flexible data.',
    publishedDate: '15 Sep 2026',
  },
  {
    title: "Don't Choose a Database Because It's Popular",
    youtubeUrl: 'https://www.youtube.com/watch?v=ik03TvpXYGw',
    description: 'A brief reminder to match database choice to system requirements.',
    publishedDate: '15 Sep 2026',
  },
  {
    title: 'Relational Databases Explained',
    youtubeUrl: 'https://www.youtube.com/watch?v=x_XkCjRA0vE',
    description: 'A short introduction to relational database concepts.',
    publishedDate: '15 Sep 2026',
  },
]
