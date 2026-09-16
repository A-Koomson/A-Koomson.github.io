import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import type { Video } from '../types'
import { duration, easeOut } from '../utils/motion'
import { extractYouTubeId, youtubeThumbnail, youtubeWatchUrl } from '../utils/youtube'

interface VideoCardProps {
  video: Video
  index?: number
  featured?: boolean
}

export function VideoCard({ video, index = 0, featured = false }: VideoCardProps) {
  const id = extractYouTubeId(video.youtubeUrl)
  const [quality, setQuality] = useState<'maxresdefault' | 'hqdefault'>('maxresdefault')

  if (!id) {
    return (
      <article className="video-card video-card--invalid">
        <h3>{video.title || 'Video'}</h3>
        <p>This YouTube URL could not be read. Check the link in the videos data file.</p>
      </article>
    )
  }

  const href = youtubeWatchUrl(id)
  const thumbnail = youtubeThumbnail(id, quality)

  return (
    <motion.article
      className={`video-card${featured ? ' video-card--featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.22, ease: easeOut } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration.slow, delay: Math.min(index * 0.06, 0.24), ease: easeOut }}
    >
      <a className="video-card__media" href={href} target="_blank" rel="noreferrer noopener">
        <img
          src={thumbnail}
          alt=""
          width={featured ? 1280 : 640}
          height={featured ? 720 : 360}
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => {
            if (quality === 'maxresdefault') setQuality('hqdefault')
          }}
        />
        <span className="video-card__play" aria-hidden="true">
          <Play size={featured ? 28 : 22} fill="currentColor" />
        </span>
      </a>
      <div className="video-card__body">
        {video.publishedDate ? <p className="video-card__date">{video.publishedDate}</p> : null}
        <h3>
          <a href={href} target="_blank" rel="noreferrer noopener">
            {video.title || 'Untitled video'}
          </a>
        </h3>
        {video.description ? <p>{video.description}</p> : null}
        <a className="video-card__cta" href={href} target="_blank" rel="noreferrer noopener">
          Watch on YouTube
        </a>
      </div>
    </motion.article>
  )
}
