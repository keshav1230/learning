import { Target, Flame, Trophy } from 'lucide-react'

interface HeaderProps {
  currentDay: number
  streak: number
  overallProgress: number
}

export default function Header({ currentDay, streak, overallProgress }: HeaderProps) {
  return (
    <header className="relative z-10">
      {/* Top Stats Bar */}
      <div className="glass-card mx-4 mt-4 p-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            <span className="text-sm text-white/70">Day</span>
            <span className="font-bold text-white">{currentDay}/365</span>
          </div>
          
          <div className="flex items-center gap-2 streak-active">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-sm text-white/70">Streak</span>
            <span className="font-bold text-orange-400">{streak} days</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-white/70">Progress</span>
            <span className="font-bold text-green-400">{overallProgress}%</span>
          </div>
        </div>
        
        {/* Overall Progress Bar */}
        <div className="mt-3 progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          <span className="gradient-text">Keshav's</span>
          <br />
          <span className="text-white">Developer Journey</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto animate-slide-up">
          From Java & DSA to Full Stack Mastery. 
          <br />
          <span className="text-indigo-400 font-semibold">365 days. 3 hours daily. 1095 DSA problems.</span>
        </p>
        
        {/* Motivational Quote */}
        <div className="mt-8 glass-card inline-block px-8 py-4 animate-pulse-slow">
          <p className="text-white/80 italic">
            "Consistency beats intensity. Show up every day."
          </p>
        </div>
      </div>
    </header>
  )
}
