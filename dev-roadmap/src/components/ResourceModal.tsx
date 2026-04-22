import { X, Play, FileText, ExternalLink, Youtube, Globe, Code } from 'lucide-react'
import type { Phase } from '../types'

interface ResourceModalProps {
  phase: Phase
  onClose: () => void
}

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'video': return <Play className="w-4 h-4" />
    case 'playlist': return <Youtube className="w-4 h-4" />
    case 'article': return <FileText className="w-4 h-4" />
    case 'practice': return <Code className="w-4 h-4" />
    default: return <Globe className="w-4 h-4" />
  }
}

const getResourceColor = (type: string) => {
  switch (type) {
    case 'video': return 'bg-red-500/20 text-red-400 border-red-500/30'
    case 'playlist': return 'bg-red-500/20 text-red-400 border-red-500/30'
    case 'article': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    case 'practice': return 'bg-green-500/20 text-green-400 border-green-500/30'
    default: return 'bg-white/10 text-white border-white/20'
  }
}

const getLanguageBadge = (lang: string) => {
  return lang === 'hindi' 
    ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
}

export default function ResourceModal({ phase, onClose }: ResourceModalProps) {
  // Group resources by type
  const videos = phase.resources.filter(r => r.type === 'video' || r.type === 'playlist')
  const articles = phase.resources.filter(r => r.type === 'article')
  const practice = phase.resources.filter(r => r.type === 'practice')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 z-10 p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
              <p className="text-white/80 text-sm mt-1">{phase.duration}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Video/Playlist Resources */}
          {videos.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-400" />
                Video Courses & Playlists
              </h3>
              <div className="grid gap-3">
                {videos.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className={`p-3 rounded-lg border ${getResourceColor(resource.type)}`}>
                      {getResourceIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white truncate group-hover:text-indigo-400 transition-colors">
                        {resource.name}
                      </h4>
                      {resource.creator && (
                        <p className="text-sm text-white/50">by {resource.creator}</p>
                      )}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getLanguageBadge(resource.language)}`}>
                      {resource.language === 'hindi' ? 'हिंदी' : 'English'}
                    </span>
                    <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Practice Resources */}
          {practice.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                Practice Platforms
              </h3>
              <div className="grid gap-3">
                {practice.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className={`p-3 rounded-lg border ${getResourceColor(resource.type)}`}>
                      {getResourceIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white truncate group-hover:text-green-400 transition-colors">
                        {resource.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Articles & Documentation */}
          {articles.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Articles & Documentation
              </h3>
              <div className="grid gap-3">
                {articles.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className={`p-3 rounded-lg border ${getResourceColor(resource.type)}`}>
                      {getResourceIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white truncate group-hover:text-blue-400 transition-colors">
                        {resource.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Kunal Kushwaha Highlight */}
          <section className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/30">
                <Youtube className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Recommended: Kunal Kushwaha</h3>
                <p className="text-white/70 text-sm mb-3">
                  For Java, DSA, and System Design, Kunal Kushwaha's playlists are excellent resources 
                  available in Hindi. His teaching style is clear, practical, and job-oriented.
                </p>
                <a
                  href="https://www.youtube.com/@KunalKushwaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                >
                  Visit Kunal's Channel
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-4 bg-white/5 border-t border-white/10 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors font-medium"
          >
            Close Resources
          </button>
        </div>
      </div>
    </div>
  )
}
