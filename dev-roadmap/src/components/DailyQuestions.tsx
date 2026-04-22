import { useState, useEffect } from 'react'
import { Check, ExternalLink, Trophy, Brain, Target, Zap } from 'lucide-react'
import type { DSAQuestion } from '../types'

interface DailyQuestionsProps {
  questions: DSAQuestion[]
  completedQuestions: number[]
  onToggleComplete: (id: number) => void
  currentDay: number
}

export default function DailyQuestions({ 
  questions, 
  completedQuestions, 
  onToggleComplete,
  currentDay 
}: DailyQuestionsProps) {
  const [showCelebration, setShowCelebration] = useState(false)
  const todayCompleted = questions.filter(q => completedQuestions.includes(q.id)).length
  const allCompletedToday = todayCompleted === questions.length && questions.length > 0

  useEffect(() => {
    if (allCompletedToday) {
      setShowCelebration(true)
      const timer = setTimeout(() => setShowCelebration(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [allCompletedToday])

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return <Target className="w-4 h-4 text-green-400" />
      case 'Medium': return <Brain className="w-4 h-4 text-yellow-400" />
      case 'Hard': return <Zap className="w-4 h-4 text-red-400" />
      default: return <Target className="w-4 h-4" />
    }
  }

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'difficulty-easy'
      case 'Medium': return 'difficulty-medium'
      case 'Hard': return 'difficulty-hard'
      default: return 'difficulty-easy'
    }
  }

  return (
    <section className="mb-8">
      {/* Celebration Banner */}
      {showCelebration && (
        <div className="mb-4 glass-card p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 animate-pulse-glow">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">
              Amazing! All 3 DSA questions completed for Day {currentDay}!
            </span>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      )}

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-400" />
              Today's DSA Challenge
            </h2>
            <p className="text-white/60 mt-1">
              Day {currentDay} • {todayCompleted}/3 completed • Keep the streak alive!
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-indigo-400">
              {todayCompleted}<span className="text-white/40">/3</span>
            </div>
            <span className="text-sm text-white/50">completed</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar h-3 mb-6">
          <div 
            className="progress-bar-fill h-3 transition-all duration-500"
            style={{ width: `${(todayCompleted / 3) * 100}%` }}
          ></div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {questions.map((question, index) => {
            const isCompleted = completedQuestions.includes(question.id)
            return (
              <div
                key={question.id}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Question Number */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-indigo-500/20 text-indigo-400'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
                  </div>

                  {/* Question Info */}
                  <div className="flex-1">
                    <h3 className={`font-semibold ${isCompleted ? 'text-green-400 line-through' : 'text-white'}`}>
                      {question.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyClass(question.difficulty)}`}>
                        {question.difficulty}
                      </span>
                      <span className="text-white/50 text-sm flex items-center gap-1">
                        {getDifficultyIcon(question.difficulty)}
                        {question.topic}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={question.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                      title="Open in LeetCode"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => onToggleComplete(question.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        isCompleted
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-white/10 text-white/70 hover:bg-indigo-500 hover:text-white'
                      }`}
                      title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Motivation Footer */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            {allCompletedToday 
              ? "🎉 Outstanding work! You're building unstoppable momentum!" 
              : todayCompleted === 2 
                ? "💪 Just one more! You're almost there!" 
                : todayCompleted === 1 
                  ? "🔥 Great start! Keep the momentum going!" 
                  : "🚀 Start with the easiest problem to build confidence!"}
          </p>
        </div>
      </div>
    </section>
  )
}
