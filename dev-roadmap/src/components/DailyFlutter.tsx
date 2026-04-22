import { Smartphone, Play, Check, BookOpen, Code } from 'lucide-react'
import { useState } from 'react'

const flutterTopics = [
  { day: 1, topic: 'Introduction to Flutter & Dart', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8', practice: 'Setup Flutter environment' },
  { day: 2, topic: 'Dart Basics - Variables & Types', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE', practice: 'Write first Dart program' },
  { day: 3, topic: 'Dart Control Flow & Functions', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=1200', practice: 'Build calculator logic' },
  { day: 4, topic: 'Dart OOP Concepts', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=3600', practice: 'Create classes for app' },
  { day: 5, topic: 'Dart Collections & Null Safety', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=5400', practice: 'Work with lists and maps' },
  { day: 6, topic: 'Flutter Widgets Intro', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=600', practice: 'Create Container widgets' },
  { day: 7, topic: 'Text, Row & Column', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=1200', practice: 'Build profile layout' },
  { day: 8, topic: 'Images & Assets', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=2400', practice: 'Add images to app' },
  { day: 9, topic: 'Buttons & Icons', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=3600', practice: 'Create button screen' },
  { day: 10, topic: 'ListView Builder', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=4800', practice: 'Build list screen' },
  { day: 11, topic: 'Card & ListTile', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=6000', practice: 'Create contact list' },
  { day: 12, topic: 'AppBar & Scaffold', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=7200', practice: 'Build app structure' },
  { day: 13, topic: 'Forms & TextField', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=8400', practice: 'Login form UI' },
  { day: 14, topic: 'Navigation Basics', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=9600', practice: 'Multi-screen app' },
  { day: 15, topic: 'Stateless vs Stateful', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8', practice: 'Counter app' },
  { day: 16, topic: 'setState & State Management', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=1200', practice: 'Todo app UI' },
  { day: 17, topic: 'GestureDetector & InkWell', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=2400', practice: 'Interactive buttons' },
  { day: 18, topic: 'Bottom Navigation Bar', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=3600', practice: 'Multi-tab app' },
  { day: 19, topic: 'Drawer Navigation', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=4800', practice: 'Side menu app' },
  { day: 20, topic: 'Tabs & TabBar', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=6000', practice: 'Tab-based layout' },
  { day: 21, topic: 'GridView & Staggered', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE', practice: 'Photo gallery app' },
  { day: 22, topic: 'Stack & Positioned', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=1200', practice: 'Overlapping widgets' },
  { day: 23, topic: 'Hero Animation', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=2400', practice: 'Smooth transitions' },
  { day: 24, topic: 'PageView & PageController', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=3600', practice: 'Onboarding screens' },
  { day: 25, topic: 'Slivers & CustomScroll', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=4800', practice: 'Collapsing app bar' },
  { day: 26, topic: 'HTTP Requests & API', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=6000', practice: 'Fetch data from API' },
  { day: 27, topic: 'JSON Parsing', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=7200', practice: 'Parse JSON data' },
  { day: 28, topic: 'Future & Async/Await', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=8400', practice: 'Async operations' },
  { day: 29, topic: 'Error Handling', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=9600', practice: 'Try-catch blocks' },
  { day: 30, topic: 'Loading States', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=10800', practice: 'Progress indicators' },
  { day: 31, topic: 'SharedPreferences', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=12000', practice: 'Local data storage' },
  { day: 32, topic: 'SQFlite Database', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=13200', practice: 'CRUD operations' },
  { day: 33, topic: 'Firebase Setup', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=14400', practice: 'Connect Firebase' },
  { day: 34, topic: 'Firebase Auth', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=15600', practice: 'Login/Signup' },
  { day: 35, topic: 'Firestore Database', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=16800', practice: 'Cloud database' },
  { day: 36, topic: 'Firebase Storage', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=18000', practice: 'Image uploads' },
  { day: 37, topic: 'Provider State Management', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=19200', practice: 'App-wide state' },
  { day: 38, topic: 'GetX Package', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=20400', practice: 'Simple state mgmt' },
  { day: 39, topic: 'Bloc Pattern Intro', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=21600', practice: 'Event-driven state' },
  { day: 40, topic: 'Streams & RxDart', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=22800', practice: 'Reactive programming' },
  { day: 41, topic: 'Animations Intro', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=24000', practice: 'Tween animations' },
  { day: 42, topic: 'AnimatedBuilder', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=25200', practice: 'Custom animations' },
  { day: 43, topic: 'Custom Painter', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=26400', practice: 'Draw custom shapes' },
  { day: 44, topic: 'Custom Clipper', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=27600', practice: 'Curved designs' },
  { day: 45, topic: 'Theme & Dark Mode', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=28800', practice: 'Theming app' },
  { day: 46, topic: 'Responsive Design', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=30000', practice: 'Multi-device support' },
  { day: 47, topic: 'Platform Channels', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=31200', practice: 'Native code' },
  { day: 48, topic: 'Notifications', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=32400', practice: 'Push notifications' },
  { day: 49, topic: 'Maps Integration', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=33600', practice: 'Google Maps' },
  { day: 50, topic: 'Location Services', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=34800', practice: 'GPS tracking' },
  { day: 51, topic: 'Camera & Gallery', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=36000', practice: 'Image picker' },
  { day: 52, topic: 'Video Player', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=37200', practice: 'Video streaming' },
  { day: 53, topic: 'Audio Player', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=38400', practice: 'Music app' },
  { day: 54, topic: 'PDF & Files', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=39600', practice: 'File handling' },
  { day: 55, topic: 'Charts & Graphs', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=40800', practice: 'Data visualization' },
  { day: 56, topic: 'WebView', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=42000', practice: 'In-app browser' },
  { day: 57, topic: 'Payment Gateway', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=43200', practice: 'Razorpay integration' },
  { day: 58, topic: 'Social Login', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=44400', practice: 'Google/Facebook login' },
  { day: 59, topic: 'App Release - Android', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=45600', practice: 'Generate APK/AAB' },
  { day: 60, topic: 'App Release - iOS', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=46800', practice: 'App Store deployment' },
]

export default function DailyFlutter() {
  const [completedDays, setCompletedDays] = useState<number[]>([])
  const today = new Date().getDate() // Simple day for demo
  const currentDay = Math.min(today, 60)

  const toggleComplete = (day: number) => {
    setCompletedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    )
  }

  const todaysTopic = flutterTopics.find(t => t.day === currentDay) || flutterTopics[0]
  const isCompleted = completedDays.includes(currentDay)

  return (
    <section className="mb-8">
      <div className="glass-card p-6 border-l-4 border-cyan-400">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-cyan-400" />
              Daily Flutter (Hindi)
            </h2>
            <p className="text-white/60 mt-1">
              Day {currentDay}/60 • Learn Flutter step by step in Hindi
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-cyan-400">
              {completedDays.length}<span className="text-white/40">/60</span>
            </div>
            <span className="text-sm text-white/50">days completed</span>
          </div>
        </div>

        {/* Today's Topic */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 rounded bg-cyan-500/30 text-cyan-300 text-xs font-semibold">
              TODAY
            </span>
            <span className="text-white/50 text-sm">Day {currentDay}</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{todaysTopic.topic}</h3>
          
          <div className="flex flex-wrap gap-3">
            <a
              href={todaysTopic.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch Video (Hindi)
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLRAV98dHFLQOEOE6hC0_0XyO2Z3_1b4dF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Full Playlist
            </a>
            <button
              onClick={() => toggleComplete(currentDay)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isCompleted
                  ? 'bg-green-500/30 text-green-400'
                  : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
              }`}
            >
              <Check className="w-4 h-4" />
              {isCompleted ? 'Completed' : 'Mark Done'}
            </button>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-white/5">
            <p className="text-sm text-white/70 flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">Practice:</span> {todaysTopic.practice}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar h-3 mb-4">
          <div 
            className="progress-bar-fill h-3 bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{ width: `${(completedDays.length / 60) * 100}%` }}
          ></div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <a
            href="https://www.youtube.com/playlist?list=PLRAV98dHFLQOEOE6hC0_0XyO2Z3_1b4dF"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
          >
            <Smartphone className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <span className="text-xs text-white/70">Hitesh Choudhary</span>
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLFyjjoCPOtx9PGrhAxYjnFEpPug1rduVU"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
          >
            <Smartphone className="w-5 h-5 text-purple-400 mx-auto mb-2" />
            <span className="text-xs text-white/70">Codepur</span>
          </a>
          <a
            href="https://docs.flutter.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
          >
            <BookOpen className="w-5 h-5 text-blue-400 mx-auto mb-2" />
            <span className="text-xs text-white/70">Official Docs</span>
          </a>
          <a
            href="https://dartpad.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
          >
            <Code className="w-5 h-5 text-green-400 mx-auto mb-2" />
            <span className="text-xs text-white/70">DartPad</span>
          </a>
        </div>
      </div>
    </section>
  )
}
