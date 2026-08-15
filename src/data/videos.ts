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
 *   publishedDate: '2026-01-15',
 * }
 */
export const videos: Video[] = []
