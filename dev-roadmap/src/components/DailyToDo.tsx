import { useState } from 'react'
import { CheckCircle, Circle, Clock, BookOpen, Code, Database, Smartphone, Play } from 'lucide-react'

// Daily tasks for first 2 months - Java + Flutter + SQL together
const dailyTasks: Record<number, {
  day: number
  java: { topic: string; video: string; practice: string }
  flutter: { topic: string; video: string; practice: string }
  sql: { topic: string; video: string; practice: string }
}> = {
  1: {
    day: 1,
    java: { topic: 'Java Installation & First Program', video: 'https://www.youtube.com/watch?v=7WkY3sQ7U9c', practice: 'Write Hello World program' },
    flutter: { topic: 'Flutter Installation & Setup', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8', practice: 'Run flutter doctor' },
    sql: { topic: 'MySQL Installation & Basics', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', practice: 'Create first database' }
  },
  2: {
    day: 2,
    java: { topic: 'Variables & Data Types', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE', practice: 'Declare different variable types' },
    flutter: { topic: 'Dart Basics - Variables', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE', practice: 'Create variables in Dart' },
    sql: { topic: 'CREATE TABLE & Data Types', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=300', practice: 'Create student table' }
  },
  3: {
    day: 3,
    java: { topic: 'Operators in Java', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=900', practice: 'Build calculator with operators' },
    flutter: { topic: 'Flutter Widgets Intro', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=600', practice: 'Create Container widget' },
    sql: { topic: 'INSERT INTO Statement', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=600', practice: 'Insert 5 records' }
  },
  4: {
    day: 4,
    java: { topic: 'If-Else Statements', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=1800', practice: 'Number guess game' },
    flutter: { topic: 'Text & Button Widgets', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=1200', practice: 'Build login UI' },
    sql: { topic: 'SELECT Statement', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=900', practice: 'Query all records' }
  },
  5: {
    day: 5,
    java: { topic: 'Switch Case', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=2400', practice: 'Day calculator' },
    flutter: { topic: 'Row & Column Layouts', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=1800', practice: 'Profile layout' },
    sql: { topic: 'WHERE Clause', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=1200', practice: 'Filter records' }
  },
  6: {
    day: 6,
    java: { topic: 'For Loops', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=3000', practice: 'Print patterns' },
    flutter: { topic: 'Images & Assets', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=2400', practice: 'Display images' },
    sql: { topic: 'UPDATE & DELETE', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=1500', practice: 'Modify records' }
  },
  7: {
    day: 7,
    java: { topic: 'While & Do-While', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=3600', practice: 'Number series' },
    flutter: { topic: 'ListView Builder', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=4800', practice: 'List of items' },
    sql: { topic: 'ORDER BY & LIMIT', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=1800', practice: 'Sort data' }
  },
  8: {
    day: 8,
    java: { topic: 'Methods/Functions', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=4200', practice: 'Calculator methods' },
    flutter: { topic: 'Forms & TextField', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=8400', practice: 'Input forms' },
    sql: { topic: 'AND, OR, NOT Operators', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=2100', practice: 'Complex filters' }
  },
  9: {
    day: 9,
    java: { topic: 'Arrays Basics', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=4800', practice: 'Array operations' },
    flutter: { topic: 'Card & ListTile', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=6000', practice: 'Contact list UI' },
    sql: { topic: 'LIKE & Wildcards', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=2400', practice: 'Search queries' }
  },
  10: {
    day: 10,
    java: { topic: 'Arrays Methods', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=5400', practice: 'Sort & search' },
    flutter: { topic: 'Navigation Basics', video: 'https://www.youtube.com/watch?v=VPvVD8t02U8&t=9600', practice: 'Multi-screen app' },
    sql: { topic: 'Aggregate Functions', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=2700', practice: 'COUNT, SUM, AVG' }
  },
  11: {
    day: 11,
    java: { topic: 'Strings in Java', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=6000', practice: 'String methods' },
    flutter: { topic: 'Stateful Widgets', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8', practice: 'Counter app' },
    sql: { topic: 'GROUP BY & HAVING', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=3000', practice: 'Group data' }
  },
  12: {
    day: 12,
    java: { topic: 'StringBuilder', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=6600', practice: 'String manipulations' },
    flutter: { topic: 'setState & State Management', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=1200', practice: 'Todo app state' },
    sql: { topic: 'INNER JOIN', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=3300', practice: 'Join two tables' }
  },
  13: {
    day: 13,
    java: { topic: 'Classes & Objects', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=7200', practice: 'Student class' },
    flutter: { topic: 'GestureDetector', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=2400', practice: 'Tap gestures' },
    sql: { topic: 'LEFT & RIGHT JOIN', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=3600', practice: 'All joins' }
  },
  14: {
    day: 14,
    java: { topic: 'Constructors', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=7800', practice: 'Multiple constructors' },
    flutter: { topic: 'Bottom Navigation', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=3600', practice: 'Tab navigation' },
    sql: { topic: 'Self JOIN', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=3900', practice: 'Hierarchy data' }
  },
  15: {
    day: 15,
    java: { topic: 'Inheritance', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=8400', practice: 'Animal hierarchy' },
    flutter: { topic: 'Drawer Navigation', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=4800', practice: 'Side menu' },
    sql: { topic: 'UNION & UNION ALL', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=4200', practice: 'Combine results' }
  },
  16: {
    day: 16,
    java: { topic: 'Polymorphism', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=9000', practice: 'Method overriding' },
    flutter: { topic: 'Tabs & TabBar', video: 'https://www.youtube.com/watch?v=h4xJ71grhA8&t=6000', practice: 'Tab layout' },
    sql: { topic: 'Subqueries', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=4500', practice: 'Nested queries' }
  },
  17: {
    day: 17,
    java: { topic: 'Encapsulation', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=9600', practice: 'Getters/setters' },
    flutter: { topic: 'GridView', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE', practice: 'Photo gallery' },
    sql: { topic: 'Primary & Foreign Keys', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=4800', practice: 'Relationships' }
  },
  18: {
    day: 18,
    java: { topic: 'Abstraction', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=10200', practice: 'Abstract class' },
    flutter: { topic: 'Stack & Positioned', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=1200', practice: 'Overlapping UI' },
    sql: { topic: 'Normalization', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=5100', practice: '1NF 2NF 3NF' }
  },
  19: {
    day: 19,
    java: { topic: 'Interfaces', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=10800', practice: 'Implement interface' },
    flutter: { topic: 'Hero Animation', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=2400', practice: 'Transitions' },
    sql: { topic: 'Indexes', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=5400', practice: 'Speed up queries' }
  },
  20: {
    day: 20,
    java: { topic: 'Packages & Access Modifiers', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=11400', practice: 'Organize code' },
    flutter: { topic: 'PageView', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=3600', practice: 'Onboarding' },
    sql: { topic: 'Views', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=5700', practice: 'Virtual tables' }
  },
  21: {
    day: 21,
    java: { topic: 'Exception Handling', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=12000', practice: 'Try-catch' },
    flutter: { topic: 'Slivers & AppBar', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=4800', practice: 'Collapsing bar' },
    sql: { topic: 'Stored Procedures', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=6000', practice: 'Create procedure' }
  },
  22: {
    day: 22,
    java: { topic: 'Try-Catch-Finally', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=12600', practice: 'File reading' },
    flutter: { topic: 'HTTP Requests', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=6000', practice: 'Fetch API' },
    sql: { topic: 'Triggers', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=6300', practice: 'Auto actions' }
  },
  23: {
    day: 23,
    java: { topic: 'File I/O Basics', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=13200', practice: 'Read file' },
    flutter: { topic: 'JSON Parsing', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=7200', practice: 'Parse JSON' },
    sql: { topic: 'Transactions', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=6600', practice: 'COMMIT ROLLBACK' }
  },
  24: {
    day: 24,
    java: { topic: 'ArrayList & LinkedList', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=13800', practice: 'Dynamic arrays' },
    flutter: { topic: 'Future & Async', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=8400', practice: 'Async operations' },
    sql: { topic: 'ACID Properties', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=6900', practice: 'Data integrity' }
  },
  25: {
    day: 25,
    java: { topic: 'HashMap & HashSet', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=14400', practice: 'Key-value pairs' },
    flutter: { topic: 'Loading States', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=9600', practice: 'Progress indicators' },
    sql: { topic: 'Backup & Restore', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=7200', practice: 'Export import' }
  },
  26: {
    day: 26,
    java: { topic: 'Collections Framework', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=15000', practice: 'All collections' },
    flutter: { topic: 'SharedPreferences', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=10800', practice: 'Local storage' },
    sql: { topic: 'JDBC Connection', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=7500', practice: 'Java + MySQL' }
  },
  27: {
    day: 27,
    java: { topic: 'Comparable & Comparator', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=15600', practice: 'Sorting objects' },
    flutter: { topic: 'SQFlite Database', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=12000', practice: 'SQLite in Flutter' },
    sql: { topic: 'Prepared Statements', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=7800', practice: 'Secure queries' }
  },
  28: {
    day: 28,
    java: { topic: 'Generics', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=16200', practice: 'Type safety' },
    flutter: { topic: 'Firebase Setup', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=13200', practice: 'Connect Firebase' },
    sql: { topic: 'Connection Pooling', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=8100', practice: 'Optimize' }
  },
  29: {
    day: 29,
    java: { topic: 'Lambda Expressions', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=16800', practice: 'Functional style' },
    flutter: { topic: 'Firebase Auth', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=14400', practice: 'Login/Signup' },
    sql: { topic: 'Performance Tuning', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=8400', practice: 'EXPLAIN' }
  },
  30: {
    day: 30,
    java: { topic: 'Streams API', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=17400', practice: 'Filter map reduce' },
    flutter: { topic: 'Firestore CRUD', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=15600', practice: 'Cloud DB' },
    sql: { topic: 'Final Project Setup', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=8700', practice: 'Schema design' }
  },
  // MONTH 2 - Advanced topics
  31: {
    day: 31,
    java: { topic: 'Java OOP Review', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE', practice: 'Revise all OOP' },
    flutter: { topic: 'Provider State Management', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=16800', practice: 'App-wide state' },
    sql: { topic: 'Complex Queries Review', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', practice: 'Join practice' }
  },
  32: {
    day: 32,
    java: { topic: 'Multithreading Basics', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=18000', practice: 'Threads' },
    flutter: { topic: 'GetX Package', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=18000', practice: 'State mgmt' },
    sql: { topic: 'Window Functions', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=9000', practice: 'ROW_NUMBER' }
  },
  33: {
    day: 33,
    java: { topic: 'Synchronization', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=18600', practice: 'Thread safety' },
    flutter: { topic: 'Animations Intro', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=19200', practice: 'Tween' },
    sql: { topic: 'CTEs (Common Table Expr)', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=9300', practice: 'WITH clause' }
  },
  34: {
    day: 34,
    java: { topic: 'Executor Service', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=19200', practice: 'Thread pool' },
    flutter: { topic: 'Custom Painter', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=20400', practice: 'Draw shapes' },
    sql: { topic: 'Recursive Queries', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=9600', practice: 'Hierarchy' }
  },
  35: {
    day: 35,
    java: { topic: 'JDBC Deep Dive', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=19800', practice: 'Database connection' },
    flutter: { topic: 'Custom Clipper', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=21600', practice: 'Curves' },
    sql: { topic: 'Full Text Search', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=9900', practice: 'Search engine' }
  },
  36: {
    day: 36,
    java: { topic: 'Design Patterns Intro', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=20400', practice: 'Singleton' },
    flutter: { topic: 'Theme & Dark Mode', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=22800', practice: 'Theming' },
    sql: { topic: 'Partitioning', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=10200', practice: 'Split tables' }
  },
  37: {
    day: 37,
    java: { topic: 'Factory Pattern', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=21000', practice: 'Object creation' },
    flutter: { topic: 'Responsive Design', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=24000', practice: 'All screens' },
    sql: { topic: 'Replication', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=10500', practice: 'Master-slave' }
  },
  38: {
    day: 38,
    java: { topic: 'Observer Pattern', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=21600', practice: 'Event handling' },
    flutter: { topic: 'Maps Integration', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=25200', practice: 'Google Maps' },
    sql: { topic: 'Sharding', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=10800', practice: 'Scale out' }
  },
  39: {
    day: 39,
    java: { topic: 'Builder Pattern', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=22200', practice: 'Complex objects' },
    flutter: { topic: 'Location Services', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=26400', practice: 'GPS' },
    sql: { topic: 'NoSQL Basics', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=11100', practice: 'MongoDB intro' }
  },
  40: {
    day: 40,
    java: { topic: 'SOLID Principles', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=22800', practice: 'Clean code' },
    flutter: { topic: 'Camera & Gallery', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=27600', practice: 'Image picker' },
    sql: { topic: 'Redis Intro', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=11400', practice: 'Caching' }
  },
  41: {
    day: 41,
    java: { topic: 'Unit Testing JUnit', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=23400', practice: 'Write tests' },
    flutter: { topic: 'Video Player', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=28800', practice: 'Stream video' },
    sql: { topic: 'Elasticsearch', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=11700', practice: 'Search index' }
  },
  42: {
    day: 42,
    java: { topic: 'Mockito', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=24000', practice: 'Mock objects' },
    flutter: { topic: 'Audio Player', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=30000', practice: 'Music app' },
    sql: { topic: 'Data Warehousing', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=12000', practice: 'OLAP' }
  },
  43: {
    day: 43,
    java: { topic: 'Integration Testing', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=24600', practice: 'End-to-end' },
    flutter: { topic: 'PDF Handling', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=31200', practice: 'PDF viewer' },
    sql: { topic: 'ETL Processes', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=12300', practice: 'Data pipeline' }
  },
  44: {
    day: 44,
    java: { topic: 'Maven Build Tool', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=25200', practice: 'Dependencies' },
    flutter: { topic: 'Charts & Graphs', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=32400', practice: 'Data viz' },
    sql: { topic: 'Data Migration', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=12600', practice: 'Import export' }
  },
  45: {
    day: 45,
    java: { topic: 'Gradle Build Tool', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=25800', practice: 'Build scripts' },
    flutter: { topic: 'Notifications', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=33600', practice: 'Push notify' },
    sql: { topic: 'Security Best Practices', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=12900', practice: 'SQL injection' }
  },
  46: {
    day: 46,
    java: { topic: 'Logging SLF4J', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=26400', practice: 'Logback' },
    flutter: { topic: 'WebView', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=34800', practice: 'In-app browser' },
    sql: { topic: 'Encryption', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=13200', practice: 'Data security' }
  },
  47: {
    day: 47,
    java: { topic: 'Spring Boot Intro', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=27000', practice: 'First Spring app' },
    flutter: { topic: 'Payment Gateway', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=36000', practice: 'Razorpay' },
    sql: { topic: 'Auditing', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=13500', practice: 'Track changes' }
  },
  48: {
    day: 48,
    java: { topic: 'Spring Boot REST API', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=27600', practice: 'Controllers' },
    flutter: { topic: 'Social Login', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=37200', practice: 'Google login' },
    sql: { topic: 'Time-Series Data', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=13800', practice: 'Timestamps' }
  },
  49: {
    day: 49,
    java: { topic: 'Spring Boot JPA', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=28200', practice: 'Hibernate' },
    flutter: { topic: 'Deep Links', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=38400', practice: 'App links' },
    sql: { topic: 'Graph Databases', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=14100', practice: 'Neo4j intro' }
  },
  50: {
    day: 50,
    java: { topic: 'Spring Boot MySQL', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=28800', practice: 'Database' },
    flutter: { topic: 'App Release Android', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=39600', practice: 'APK/AAB' },
    sql: { topic: 'Document Databases', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=14400', practice: 'MongoDB CRUD' }
  },
  51: {
    day: 51,
    java: { topic: 'Spring Boot Security', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=29400', practice: 'Basic auth' },
    flutter: { topic: 'App Release iOS', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=40800', practice: 'App Store' },
    sql: { topic: 'NewSQL', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=14700', practice: 'CockroachDB' }
  },
  52: {
    day: 52,
    java: { topic: 'Spring Boot JWT', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=30000', practice: 'Token auth' },
    flutter: { topic: 'Flutter Web', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=42000', practice: 'Web app' },
    sql: { topic: 'Distributed SQL', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=15000', practice: 'Citus' }
  },
  53: {
    day: 53,
    java: { topic: 'Spring Boot Exception Handling', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=30600', practice: 'Global handler' },
    flutter: { topic: 'Flutter Desktop', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=43200', practice: 'Windows/Mac' },
    sql: { topic: 'CAP Theorem', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=15300', practice: 'Consistency' }
  },
  54: {
    day: 54,
    java: { topic: 'Spring Boot Validation', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=31200', practice: 'Bean validation' },
    flutter: { topic: 'Performance Optimization', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=44400', practice: 'Speed up' },
    sql: { topic: 'Event Sourcing', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=15600', practice: 'CQRS' }
  },
  55: {
    day: 55,
    java: { topic: 'Spring Boot Testing', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=31800', practice: 'TestRestTemplate' },
    flutter: { topic: 'Memory Management', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=45600', practice: 'Optimize memory' },
    sql: { topic: 'Saga Pattern', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=15900', practice: 'Transactions' }
  },
  56: {
    day: 56,
    java: { topic: 'Microservices Intro', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=32400', practice: 'Architecture' },
    flutter: { topic: 'Platform Channels', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=46800', practice: 'Native code' },
    sql: { topic: 'Event Streaming', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=16200', practice: 'Kafka intro' }
  },
  57: {
    day: 57,
    java: { topic: 'Service Discovery', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=33000', practice: 'Eureka' },
    flutter: { topic: 'Plugin Development', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=48000', practice: 'Custom plugin' },
    sql: { topic: 'Stream Processing', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=16500', practice: 'KSQL' }
  },
  58: {
    day: 58,
    java: { topic: 'API Gateway', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=33600', practice: 'Spring Cloud Gateway' },
    flutter: { topic: 'CI/CD for Flutter', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=49200', practice: 'GitHub Actions' },
    sql: { topic: 'Change Data Capture', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=16800', practice: 'Debezium' }
  },
  59: {
    day: 59,
    java: { topic: 'Circuit Breaker', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE&t=34200', practice: 'Resilience4j' },
    flutter: { topic: 'App Architecture', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE&t=50400', practice: 'Clean arch' },
    sql: { topic: 'Data Governance', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=17100', practice: 'GDPR' }
  },
  60: {
    day: 60,
    java: { topic: 'Final Project Review', video: 'https://www.youtube.com/watch?v=S0uU2TqO7ZE', practice: 'Complete project' },
    flutter: { topic: 'Final Project Review', video: 'https://www.youtube.com/watch?v=AxQHjze7zKE', practice: 'Polish app' },
    sql: { topic: 'Final Project Review', video: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', practice: 'Optimize DB' }
  }
}

export default function DailyToDo({ currentDay }: { currentDay: number }) {
  const [completedTasks, setCompletedTasks] = useState<number[]>([])
  
  const tasks = dailyTasks[currentDay] || dailyTasks[1]
  
  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    )
  }

  const isCompleted = (taskId: number) => completedTasks.includes(taskId)

  return (
    <section className="mb-8">
      <div className="glass-card p-6 border-l-4 border-green-400">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Clock className="w-6 h-6 text-green-400" />
          Daily To-Do (Day {currentDay})
        </h2>
        <p className="text-white/60 text-sm mb-4">
          Learn Java + Flutter + SQL together - 1 hour each
        </p>

        <div className="space-y-4">
          {/* Java Task */}
          <div className={`p-4 rounded-xl border transition-all ${
            isCompleted(1) ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/5 border-white/10'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Java (1 hour)</h3>
                <p className={`text-sm ${isCompleted(1) ? 'text-orange-400 line-through' : 'text-white/70'}`}>
                  {tasks.java.topic}
                </p>
              </div>
              <button
                onClick={() => toggleTask(1)}
                className={`p-2 rounded-lg transition-colors ${
                  isCompleted(1) ? 'bg-green-500 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'
                }`}
              >
                {isCompleted(1) ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex gap-2">
              <a
                href={tasks.java.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/30 transition-colors"
              >
                <Play className="w-3 h-3" />
                Watch Video
              </a>
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-white/50 text-xs">
                <Code className="w-3 h-3" />
                {tasks.java.practice}
              </span>
            </div>
          </div>

          {/* Flutter Task */}
          <div className={`p-4 rounded-xl border transition-all ${
            isCompleted(2) ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-white/5 border-white/10'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Flutter (1 hour)</h3>
                <p className={`text-sm ${isCompleted(2) ? 'text-cyan-400 line-through' : 'text-white/70'}`}>
                  {tasks.flutter.topic}
                </p>
              </div>
              <button
                onClick={() => toggleTask(2)}
                className={`p-2 rounded-lg transition-colors ${
                  isCompleted(2) ? 'bg-green-500 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'
                }`}
              >
                {isCompleted(2) ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex gap-2">
              <a
                href={tasks.flutter.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/30 transition-colors"
              >
                <Play className="w-3 h-3" />
                Watch Video
              </a>
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-white/50 text-xs">
                <Code className="w-3 h-3" />
                {tasks.flutter.practice}
              </span>
            </div>
          </div>

          {/* SQL Task */}
          <div className={`p-4 rounded-xl border transition-all ${
            isCompleted(3) ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">SQL (1 hour)</h3>
                <p className={`text-sm ${isCompleted(3) ? 'text-blue-400 line-through' : 'text-white/70'}`}>
                  {tasks.sql.topic}
                </p>
              </div>
              <button
                onClick={() => toggleTask(3)}
                className={`p-2 rounded-lg transition-colors ${
                  isCompleted(3) ? 'bg-green-500 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'
                }`}
              >
                {isCompleted(3) ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex gap-2">
              <a
                href={tasks.sql.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/30 transition-colors"
              >
                <Play className="w-3 h-3" />
                Watch Video
              </a>
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-white/50 text-xs">
                <Database className="w-3 h-3" />
                {tasks.sql.practice}
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white/60">Today's Progress</span>
            <span className="text-white font-medium">{completedTasks.length}/3 tasks</span>
          </div>
          <div className="progress-bar h-2">
            <div 
              className="progress-bar-fill h-2 bg-gradient-to-r from-green-400 to-emerald-500"
              style={{ width: `${(completedTasks.length / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
