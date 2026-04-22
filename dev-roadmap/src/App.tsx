import { useState, useEffect } from 'react'
import { phases } from './data/roadmap'
import { dsaQuestions, getQuestionsByDay } from './data/dsaQuestions'
import type { Phase, UserProgress } from './types'
import Header from './components/Header'
import ProgressOverview from './components/ProgressOverview'
import PhaseCard from './components/PhaseCard'
import DailyQuestions from './components/DailyQuestions'
import TaskReminder from './components/TaskReminder'
import ResourceModal from './components/ResourceModal'
import YouTubeChannels from './components/YouTubeChannels'
import DailyFlutter from './components/DailyFlutter'
import DailyToDo from './components/DailyToDo'

function App() {
  const [currentPhase, setCurrentPhase] = useState(1)
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null)
  const [showResources, setShowResources] = useState(false)
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([])
  const [phaseProgress, setPhaseProgress] = useState<Record<number, number>>({})
  const [startDate, setStartDate] = useState<Date | null>(null)
  const today = new Date()

  // Calculate current day based on start date (starts from Day 1)
  const getCurrentDay = () => {
    if (!startDate) return 1
    const diffTime = today.getTime() - startDate.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return Math.max(1, diffDays + 1) // Day 1 on start date
  }

  const currentDayOfYear = getCurrentDay()
  const currentMonth = today.getMonth() + 1
  const currentDay = today.getDate()

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userProgress')
    if (saved) {
      const progress: UserProgress = JSON.parse(saved)
      setCompletedQuestions(progress.completedTasks || [])
      setCurrentPhase(progress.currentPhase || 1)
      if (progress.startDate) {
        setStartDate(new Date(progress.startDate))
      }
    } else {
      // First time user - set start date to today
      const today = new Date()
      setStartDate(today)
      const progress: UserProgress = {
        currentDay: 1,
        currentPhase: 1,
        completedTasks: [],
        dsaStreak: 0,
        lastActive: today.toISOString(),
        startDate: today.toISOString()
      }
      localStorage.setItem('userProgress', JSON.stringify(progress))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userProgress')
    const existing = saved ? JSON.parse(saved) : {}
    const progress: UserProgress = {
      ...existing,
      currentDay: currentDayOfYear,
      currentPhase,
      completedTasks: completedQuestions,
      dsaStreak: calculateStreak(),
      lastActive: new Date().toISOString(),
      startDate: existing.startDate || startDate?.toISOString() || new Date().toISOString()
    }
    localStorage.setItem('userProgress', JSON.stringify(progress))
  }, [completedQuestions, currentPhase, currentDayOfYear, startDate])

  const calculateStreak = () => {
    // Simple streak calculation - count consecutive days with completed questions
    return Math.floor(completedQuestions.length / 3)
  }

  const toggleQuestionComplete = (id: number) => {
    setCompletedQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(q => q !== id)
        : [...prev, id]
    )
  }

  const updatePhaseProgress = (phaseId: number, completed: number) => {
    setPhaseProgress(prev => ({ ...prev, [phaseId]: completed }))
  }

  const getTodayQuestions = () => {
    return getQuestionsByDay(currentDay, currentMonth)
  }

  const getCurrentPhaseFromDate = () => {
    if (currentMonth <= 3) return 1
    if (currentMonth <= 6) return 2
    if (currentMonth <= 9) return 3
    if (currentMonth <= 11) return 4
    return 5
  }

  const overallProgress = Math.round(
    (completedQuestions.length / dsaQuestions.length) * 100
  )

  return (
    <div className="min-h-screen relative overflow-x-hidden">

      <Header 
        currentDay={currentDayOfYear}
        streak={calculateStreak()}
        overallProgress={overallProgress}
      />

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Daily To-Do: Java + Flutter + SQL - Main Feature */}
        <DailyToDo currentDay={currentDayOfYear} />

        {/* Phase Cards - Simplified */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Your 6-Month Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.slice(0, 3).map((phase, index) => (
              <div key={phase.id} className="glass-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    getCurrentPhaseFromDate() === phase.id ? 'bg-green-500 text-white' : 'bg-white/10 text-white/60'
                  }`}>
                    {phase.id}
                  </span>
                  <h3 className="font-semibold text-white text-sm">{phase.title}</h3>
                </div>
                <p className="text-xs text-white/50">{phase.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Resource Modal */}
      {showResources && selectedPhase && (
        <ResourceModal
          phase={selectedPhase}
          onClose={() => setShowResources(false)}
        />
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-white/50">
        <p>Keep pushing Keshav! You're building an amazing future 🚀</p>
      </footer>
    </div>
  )
}

export default App
