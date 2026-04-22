import { Youtube, Play, ExternalLink } from 'lucide-react'

// Flutter-specific Hindi channels
const flutterChannels = [
  {
    name: 'Hitesh Choudhary',
    description: 'Complete Flutter in Hindi',
    url: 'https://www.youtube.com/@HiteshChoudharydotcom',
    playlist: 'https://www.youtube.com/playlist?list=PLRAV98dHFLQOEOE6hC0_0XyO2Z3_1b4dF',
    color: 'from-cyan-500 to-blue-600',
    language: 'Hindi',
    category: 'Flutter'
  },
  {
    name: 'Codepur',
    description: 'Flutter Hindi tutorials',
    url: 'https://www.youtube.com/@codepur',
    playlist: 'https://www.youtube.com/playlist?list=PLFyjjoCPOtx9PGrhAxYjnFEpPug1rduVU',
    color: 'from-purple-500 to-pink-600',
    language: 'Hindi',
    category: 'Flutter'
  },
  {
    name: 'Akshit Madan',
    description: 'Flutter projects in Hindi',
    url: 'https://www.youtube.com/@AkshitMadan',
    playlist: 'https://www.youtube.com/playlist?list=PLz8QZRV_z0fT4eg1dS6CsFW1wG5h5zD5w',
    color: 'from-teal-500 to-green-600',
    language: 'Hindi',
    category: 'Flutter'
  }
]

const channels = [
  {
    name: 'Kunal Kushwaha',
    description: 'Best for Java + DSA in Hindi',
    url: 'https://www.youtube.com/@KunalKushwaha',
    playlist: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_B7KpS3j_JQlaedHL9zP1',
    color: 'from-red-500 to-pink-600',
    language: 'Hindi'
  },
  {
    name: 'CodeWithHarry',
    description: 'Java basics in Hindi',
    url: 'https://www.youtube.com/@CodeWithHarry',
    playlist: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q',
    color: 'from-blue-500 to-cyan-600',
    language: 'Hindi'
  },
  {
    name: 'Anuj Bhaiya',
    description: 'DSA explanations in Hindi',
    url: 'https://www.youtube.com/@AnujBhaiya',
    playlist: 'https://www.youtube.com/playlist?list=PLUcsUUZ3YKy8aP5C5KYJaiua0dR0hBDaQ',
    color: 'from-green-500 to-emerald-600',
    language: 'Hindi'
  },
  {
    name: 'Programming with Mosh',
    description: 'Java course in English',
    url: 'https://www.youtube.com/@programmingwithmosh',
    playlist: 'https://www.youtube.com/watch?v=eIrMbAQSU34',
    color: 'from-purple-500 to-violet-600',
    language: 'English'
  },
  {
    name: 'NeetCode',
    description: 'DSA patterns in English',
    url: 'https://www.youtube.com/@NeetCode',
    playlist: 'https://www.youtube.com/playlist?list=PLot-Xpze53lfQmTEyzb3A4jJhHbaWrHOi',
    color: 'from-orange-500 to-amber-600',
    language: 'English'
  },
  {
    name: 'Striver (TakeUForward)',
    description: 'SDE sheet & DSA',
    url: 'https://www.youtube.com/@takeUforward',
    playlist: 'https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ8ZXxP7',
    color: 'from-indigo-500 to-blue-600',
    language: 'English'
  }
]

export default function YouTubeChannels() {
  return (
    <section className="mb-8">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Youtube className="w-6 h-6 text-red-500" />
          Quick YouTube Access
        </h2>

        {/* Flutter Section - Hindi */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-cyan-500/20 text-xs">Daily Flutter</span>
            Flutter in Hindi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {flutterChannels.map((channel, index) => (
              <div 
                key={index}
                className="group p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center flex-shrink-0`}>
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm truncate group-hover:text-cyan-400 transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-xs text-white/50">{channel.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <a
                    href={channel.playlist}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors text-xs font-medium"
                  >
                    <Play className="w-3 h-3" />
                    Watch
                  </a>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel, index) => (
            <div 
              key={index}
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center flex-shrink-0`}>
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate group-hover:text-red-400 transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-white/50">{channel.description}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs bg-white/10 text-white/70">
                    {channel.language}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <a
                  href={channel.playlist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm font-medium"
                >
                  <Play className="w-4 h-4" />
                  Start Learning
                </a>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
                  title="Visit Channel"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
