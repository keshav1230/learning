import { BookOpen, Code, Layers, Zap, Award } from 'lucide-react'
import type { Phase } from '../types'

interface ProgressOverviewProps {
  phases: Phase[]
  currentPhase: number
  phaseProgress: Record<number, number>
  completedQuestions: number
  totalQuestions: number
}

const phaseIcons = [BookOpen, Code, Layers, Zap, Award]

export default function ProgressOverview({ 
  phases, 
  currentPhase, 
  phaseProgress, 
  completedQuestions, 
  totalQuestions 
}: ProgressOverviewProps) {
  const getGradeClass = (grade: string) => {
    switch (grade) {
      case 'A': return 'grade-a'
      case 'B': return 'grade-b'
      case 'C': return 'grade-c'
      case 'D': return 'grade-d'
      case 'F': return 'grade-f'
      default: return 'bg-white/10'
    }
  }

  const getGradeFromProgress = (completed: number, total: number): string => {
    const percentage = (completed / total) * 100
    if (percentage >= 90) return 'A'
    if (percentage >= 80) return 'B'
    if (percentage >= 70) return 'C'
    if (percentage >= 60) return 'D'
    if (percentage > 0) return 'F'
    return '-'
  }

  return (
    <section className="mb-12">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Your Progress Dashboard</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {phases.map((phase, index) => {
            const Icon = phaseIcons[index]
            const completed = phaseProgress[phase.id] || 0
            const grade = getGradeFromProgress(completed, phase.topics.length)
            const isActive = currentPhase === phase.id
            
            return (
              <div 
                key={phase.id}
                className={`relative p-4 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? 'border-indigo-400 bg-indigo-500/20' 
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-white/50'}`} />
                  <span className={`text-xs font-semibold ${isActive ? 'text-indigo-300' : 'text-white/50'}`}>
                    Phase {phase.id}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-white mb-2 line-clamp-1">
                  {phase.title.split(':')[0]}
                </p>
                
                {/* Progress */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">{completed}/{phase.topics.length}</span>
                    <span className="text-white/60">
                      {Math.round((completed / phase.topics.length) * 100)}%
                    </span>
                  </div>
                  <div className="progress-bar h-1.5">
                    <div 
                      className="progress-bar-fill h-1.5"
                      style={{ width: `${(completed / phase.topics.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Grade Badge */}
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold text-white ${getGradeClass(grade)}`}>
                  {grade}
                </div>
                
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* DSA Progress Summary */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/70">DSA Problems Solved</span>
            <span className="text-white font-bold">
              {completedQuestions} / {totalQuestions}
            </span>
          </div>
          <div className="progress-bar h-3">
            <div 
              className="progress-bar-fill h-3"
              style={{ width: `${(completedQuestions / totalQuestions) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-white/50 mt-2">
            {Math.round((completedQuestions / totalQuestions) * 100)}% completed • 
            {totalQuestions - completedQuestions} remaining
          </p>
        </div>
      </div>
    </section>
  )
}
