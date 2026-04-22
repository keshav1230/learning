import type { Phase } from '../types';

export const phases: Phase[] = [
  {
    id: 1,
    title: 'Month 1: Java + Flutter + SQL Basics',
    duration: 'Month 1',
    description: 'Learn Java fundamentals, Flutter basics, and SQL database concepts together. Build simple apps with database connectivity.',
    topics: [
      'Java Basics - Variables, Data Types, Operators',
      'Java Control Flow - If/Else, Loops, Switch',
      'Dart Basics for Flutter',
      'Flutter Setup & First App',
      'Flutter Widgets - Text, Button, Container',
      'SQL Basics - SELECT, INSERT, UPDATE, DELETE',
      'SQL - CREATE TABLE, Data Types',
      'Simple Java + JDBC + MySQL Connection',
      'Build Calculator App (Java)',
      'Build Todo UI (Flutter)'
    ],
    resources: [
      {
        name: 'Kunal Kushwaha - Java Basics (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_B7KpS3j_JQlaedHL9zP1',
        language: 'hindi',
        creator: 'Kunal Kushwaha'
      },
      {
        name: 'Hitesh Choudhary - Flutter Beginners (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLRAV98dHFLQOEOE6hC0_0XyO2Z3_1b4dF',
        language: 'hindi',
        creator: 'Hitesh Choudhary'
      },
      {
        name: 'CodeWithHarry - MySQL (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q',
        language: 'hindi',
        creator: 'CodeWithHarry'
      },
      {
        name: 'Anuj Bhaiya - SQL (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLUcsUUZ3YKy9PmsESKhq6n1XwuO_jAvkU',
        language: 'hindi',
        creator: 'Anuj Bhaiya'
      }
    ],
    dailySchedule: {
      hours: 3,
      breakdown: [
        { task: 'Java Basics (Kunal Kushwaha)', time: '1 hr' },
        { task: 'Flutter Basics (Hitesh Choudhary)', time: '1 hr' },
        { task: 'SQL Basics (CodeWithHarry/Anuj)', time: '1 hr' }
      ]
    },
    grade: { completed: 0, total: 10, score: '-' }
  },
  {
    id: 2,
    title: 'Month 2: Java OOP + Flutter UI + SQL Advanced',
    duration: 'Month 2',
    description: 'Master Java OOP concepts, build Flutter UI screens, and learn advanced SQL with JOINs and relationships.',
    topics: [
      'Java OOP - Classes, Objects, Constructors',
      'Java OOP - Inheritance, Polymorphism',
      'Java OOP - Encapsulation, Abstraction',
      'Flutter - Row, Column, Stack layouts',
      'Flutter - ListView, GridView',
      'Flutter - Forms, TextField, Validation',
      'SQL - WHERE, ORDER BY, GROUP BY',
      'SQL - JOINs (INNER, LEFT, RIGHT)',
      'SQL - Foreign Keys, Relationships',
      'Build Note App (Flutter + SQLite)'
    ],
    resources: [
      {
        name: 'Kunal Kushwaha - Java OOP (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqgzAz1qvyTlhr9uAjfSvV',
        language: 'hindi',
        creator: 'Kunal Kushwaha'
      },
      {
        name: 'Codepur - Flutter UI (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLFyjjoCPOtx9PGrhAxYjnFEpPug1rduVU',
        language: 'hindi',
        creator: 'Codepur'
      },
      {
        name: 'Chirag Mittal - SQL Advanced (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLavw5C92dz9E3_1S6L_8x0L1x3A4w2n8',
        language: 'hindi',
        creator: 'Chirag Mittal'
      },
      {
        name: 'W3Schools SQL Practice',
        type: 'practice',
        url: 'https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all',
        language: 'english'
      }
    ],
    dailySchedule: {
      hours: 3,
      breakdown: [
        { task: 'Java OOP Concepts', time: '1 hr' },
        { task: 'Flutter UI Building', time: '1 hr' },
        { task: 'SQL Advanced + Practice', time: '1 hr' }
      ]
    },
    grade: { completed: 0, total: 10, score: '-' }
  },
  {
    id: 3,
    title: 'Month 3: Spring Boot + DSA Basics',
    duration: 'Month 3',
    description: 'Learn Spring Boot basics and start DSA with Arrays and Strings. Build REST APIs.',
    topics: [
      'Spring Boot Setup & First App',
      'Spring Boot - REST Controllers',
      'Spring Boot - CRUD Operations',
      'Spring Boot - JPA & Hibernate',
      'DSA - Arrays Basics',
      'DSA - Strings Basics',
      'DSA - Simple Patterns',
      'Build REST API with Spring Boot',
      'Connect Flutter to Spring API',
      'Complete Full Stack Mini Project'
    ],
    resources: [
      {
        name: 'CodeDurgesh - Spring Boot (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL0zysOflRCelRbmq8a8E19puZQP0ldFZY',
        language: 'hindi',
        creator: 'Durgesh'
      },
      {
        name: 'Kunal Kushwaha - DSA Java (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_B7KpS3j_JQlaedHL9zP1',
        language: 'hindi',
        creator: 'Kunal Kushwaha'
      },
      {
        name: 'LeetCode Easy Problems',
        type: 'practice',
        url: 'https://leetcode.com/problemset/all/?difficulty=EASY',
        language: 'english'
      }
    ],
    dailySchedule: {
      hours: 3,
      breakdown: [
        { task: 'Spring Boot Learning', time: '1.5 hrs' },
        { task: 'DSA Arrays/Strings', time: '1 hr' },
        { task: 'Practice Problems', time: '0.5 hr' }
      ]
    },
    grade: { completed: 0, total: 10, score: '-' }
  },
  {
    id: 4,
    title: 'Months 4-6: Spring Boot Advanced + DSA',
    duration: 'Months 4-6',
    description: 'Master Spring Boot with security, JWT, and advanced DSA topics.',
    topics: [
      'Spring Security & JWT',
      'Spring Boot - MySQL Integration',
      'Spring Boot - Exception Handling',
      'DSA - Linked List, Stack, Queue',
      'DSA - Trees & BST',
      'DSA - Recursion & Backtracking',
      'Build Full E-commerce Backend',
      'Build Flutter E-commerce App'
    ],
    resources: [
      {
        name: 'CodeDurgesh - Spring Security (Hindi)',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL0zysOflRCelRbmq8a8E19puZQP0ldFZY',
        language: 'hindi'
      },
      {
        name: 'Kunal Kushwaha - DSA Bootcamp',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqgzAz1qvyTlhr9uAjfSvV',
        language: 'hindi'
      }
    ],
    dailySchedule: {
      hours: 3,
      breakdown: [
        { task: 'Spring Boot Advanced', time: '1.5 hrs' },
        { task: 'DSA Practice', time: '1 hr' },
        { task: 'Project Work', time: '0.5 hr' }
      ]
    },
    grade: { completed: 0, total: 8, score: '-' }
  },
  {
    id: 5,
    title: 'Months 7-9: Flutter Advanced + System Design',
    duration: 'Months 7-9',
    description: 'Advanced Flutter with state management, Firebase, and basic system design.',
    topics: [
      'Flutter State Management (Provider)',
      'Flutter - API Integration',
      'Firebase Auth & Firestore',
      'Flutter - Push Notifications',
      'System Design Basics',
      'Database Design Principles',
      'API Design Best Practices',
      'Build Chat App (Flutter + Firebase)'
    ],
    resources: [
      {
        name: 'Hitesh Choudhary - Flutter Advanced',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLRAV98dHFLQOEOE6hC0_0XyO2Z3_1b4dF',
        language: 'hindi'
      },
      {
        name: 'Kunal Kushwaha - System Design',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqgzAz1qvyTlhr9uAjfSvV',
        language: 'hindi'
      }
    ],
    dailySchedule: {
      hours: 3,
      breakdown: [
        { task: 'Flutter Advanced', time: '1.5 hrs' },
        { task: 'System Design', time: '1 hr' },
        { task: 'Project Work', time: '0.5 hr' }
      ]
    },
    grade: { completed: 0, total: 8, score: '-' }
  },
  {
    id: 6,
    title: 'Months 10-12: Microservices + Interview Prep',
    duration: 'Months 10-12',
    description: 'Microservices, Docker, Kubernetes, and full interview preparation.',
    topics: [
      'Microservices Architecture',
      'Docker & Containerization',
      'Kubernetes Basics',
      'Message Queues (RabbitMQ)',
      'Advanced DSA Patterns',
      'LeetCode Top 150',
      'System Design Case Studies',
      'Mock Interviews'
    ],
    resources: [
      {
        name: 'Kunal Kushwaha - DevOps Bootcamp',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqgzAz1qvyTlhr9uAjfSvV',
        language: 'hindi'
      },
      {
        name: 'NeetCode - Interview Prep',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLot-Xpze53lfQmTEyzb3A4jJhHbaWrHOi',
        language: 'english'
      }
    ],
    dailySchedule: {
      hours: 3,
      breakdown: [
        { task: 'Microservices/DevOps', time: '1 hr' },
        { task: 'DSA Interview Prep', time: '1.5 hrs' },
        { task: 'System Design', time: '0.5 hr' }
      ]
    },
    grade: { completed: 0, total: 8, score: '-' }
  }
];

export const getPhaseGrade = (completed: number, total: number): Phase['grade']['score'] => {
  const percentage = (completed / total) * 100;
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  if (percentage > 0) return 'F';
  return '-';
};
