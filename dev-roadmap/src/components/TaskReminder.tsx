import { useState, useEffect } from 'react'
import { Clock, AlertCircle, CheckCircle, ChevronRight, Bell, Sparkles } from 'lucide-react'
import type { Phase } from '../types'

interface TaskReminderProps {
  currentPhase: Phase
  dayProgress: number
}

export default function TaskReminder({ currentPhase, dayProgress }: TaskReminderProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [nextTaskIndex, setNextTaskIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Determine next task based on time of day
    const hour = currentTime.getHours()
    if (hour < 11) setNextTaskIndex(0)
    else if (hour < 15) setNextTaskIndex(1)
    else setNextTaskIndex(2)
  }, [currentTime])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good Morning, Keshav!'
    if (hour < 17) return 'Good Afternoon, Keshav!'
    return 'Good Evening, Keshav!'
  }

  const schedule = currentPhase?.dailySchedule?.breakdown || [
    { task: 'Core Java / OOP Learning', time: '1.5 hrs' },
    { task: 'DSA Practice (LeetCode)', time: '1 hr' },
    { task: 'Mini Projects / Exercises', time: '0.5 hr' }
  ]

  return (
    <section className="mb-8">
      <div className="glass-card p-6 border-l-4 border-indigo-400">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              {getGreeting()}
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Current Phase: <span className="text-indigo-400 font-semibold">{currentPhase?.title || 'Loading...'}</span>
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4" />
              <span className="text-lg font-mono">{formatTime(currentTime)}</span>
            </div>
            <p className="text-xs text-white/50 mt-1">Stay consistent!</p>
          </div>
        </div>

        {/* Today's Focus */}
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-400/30">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-indigo-400 mt-0.5 animate-bounce" />
            <div>
              <h3 className="font-semibold text-white mb-1">Next Task</h3>
              <p className="text-indigo-300">
                {schedule[nextTaskIndex]?.task || 'Continue learning'}
              </p>
              <p className="text-white/50 text-sm mt-1">
                Target duration: {schedule[nextTaskIndex]?.time || '1 hour'}
              </p>
            </div>
          </div>
        </div>

        {/* Full Schedule */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide">
            Today's Complete Schedule
          </h3>
          
          {schedule.map((item, index) => {
            const isNext = index === nextTaskIndex
            const isPast = index < nextTaskIndex
            
            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                  isNext 
                    ? 'bg-indigo-500/20 border border-indigo-400/30' 
                    : isPast 
                      ? 'bg-white/5 opacity-50'
                      : 'bg-white/5'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isNext 
                    ? 'bg-indigo-500 text-white' 
                    : isPast 
                      ? 'bg-green-500/30 text-green-400'
                      : 'bg-white/10 text-white/50'
                }`}>
                  {isPast ? <CheckCircle className="w-4 h-4" /> : <span className="text-sm font-bold">{index + 1}</span>}
                </div>
                
                <div className="flex-1">
                  <p className={`font-medium ${isNext ? 'text-white' : 'text-white/70'}`}>
                    {item.task}
                  </p>
                </div>
                
                <span className={`text-sm font-medium ${
                  isNext ? 'text-indigo-400' : 'text-white/50'
                }`}>
                  {item.time}
                </span>
                
                {isNext && (
                  <ChevronRight className="w-5 h-5 text-indigo-400 animate-pulse" />
                )}
              </div>
            )
          })}
        </div>

        {/* Motivation */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <p className="text-white/70 text-sm">
              {dayProgress === 3 
                ? "🎉 All daily tasks complete! You're crushing it!" 
                : dayProgress === 2 
                  ? "Almost there! Complete your final task to finish strong." 
                  : dayProgress === 1 
                    ? "Good progress! Keep the momentum going." 
                    : "Start your day strong! Complete your first task to build momentum."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
