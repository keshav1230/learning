import { useState } from 'react'
import { Clock, BookOpen, ExternalLink, ChevronDown, ChevronUp, Play } from 'lucide-react'
import type { Phase } from '../types'

interface PhaseCardProps {
  phase: Phase
  index: number
  isActive: boolean
  completedTopics: number
  onViewResources: () => void
  onUpdateProgress: (completed: number) => void
}

export default function PhaseCard({ 
  phase, 
  index, 
  isActive, 
  completedTopics,
  onViewResources,
  onUpdateProgress 
}: PhaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(isActive)
  const [localCompleted, setLocalCompleted] = useState<number[]>([])

  const toggleTopic = (topicIndex: number) => {
    const newCompleted = localCompleted.includes(topicIndex)
      ? localCompleted.filter(i => i !== topicIndex)
      : [...localCompleted, topicIndex]
    
    setLocalCompleted(newCompleted)
    onUpdateProgress(newCompleted.length)
  }

  const getGradeColor = () => {
    const percentage = (completedTopics / phase.topics.length) * 100
    if (percentage >= 90) return 'text-green-400'
    if (percentage >= 80) return 'text-blue-400'
    if (percentage >= 70) return 'text-yellow-400'
    if (percentage >= 60) return 'text-orange-400'
    return 'text-red-400'
  }

  const colors = [
    'from-indigo-500 to-purple-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-pink-500 to-rose-600'
  ]

  return (
    <div className={`glass-card overflow-hidden transition-all duration-300 ${
      isActive ? 'ring-2 ring-indigo-400' : ''
    }`}>
      {/* Card Header */}
      <div 
        className={`p-6 bg-gradient-to-br ${colors[index]} cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="text-white/80 text-sm font-medium">
            {phase.duration}
          </span>
          {isActive && (
            <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-semibold animate-pulse">
              ACTIVE
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          {phase.title}
        </h3>
        
        <p className="text-white/80 text-sm line-clamp-2">
          {phase.description}
        </p>
        
        {/* Grade Display */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">Grade:</span>
            <span className={`text-2xl font-bold ${getGradeColor()}`}>
              {phase.grade.score}
            </span>
          </div>
          <button className="text-white/60 hover:text-white transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 animate-fade-in">
          {/* Daily Schedule */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              Daily Schedule ({phase.dailySchedule.hours} hours)
            </h4>
            <div className="space-y-2">
              {phase.dailySchedule.breakdown.map((item, i) => (
                <div 
                  key={i}
                  className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-white/80 text-sm">{item.task}</span>
                  <span className="text-indigo-400 text-sm font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Checklist */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Topics to Master ({completedTopics}/{phase.topics.length})
            </h4>
            <div className="space-y-2">
              {phase.topics.map((topic, i) => (
                <label 
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <input
                    type="checkbox"
                    className="checkbox-custom"
                    checked={localCompleted.includes(i)}
                    onChange={() => toggleTopic(i)}
                  />
                  <span className={`text-sm ${localCompleted.includes(i) ? 'text-white/50 line-through' : 'text-white/80'}`}>
                    {topic}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onViewResources}
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              View Resources
            </button>
            <a
              href={phase.resources.find(r => r.type === 'playlist')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
