import type { DSAQuestion } from '../types';

// NOOB FRIENDLY - Start super easy and gradually increase difficulty
// First month: Only VERY EASY problems (Arrays, Strings, Basic loops)
// Second month: Easy problems
// Third month onwards: Easy-Medium mix

const topicsByMonth: Record<number, string[]> = {
  1: ['Very Easy Arrays', 'Very Easy Strings', 'Basic Loops'],
  2: ['Easy Arrays', 'Easy Strings', 'Simple Math'],
  3: ['Arrays', 'Strings', 'Basic HashMap'],
  4: ['Two Pointers', 'Sliding Window', 'Binary Search'],
  5: ['Linked List', 'Stack', 'Queue'],
  6: ['Trees', 'BST', 'DFS'],
  7: ['BFS', 'Heap', 'Priority Queue'],
  8: ['Dynamic Programming', 'Memoization'],
  9: ['Graph', 'Advanced Trees'],
  10: ['Backtracking', 'Bit Manipulation'],
  11: ['Advanced DP', 'Trie'],
  12: ['System Design', 'Hard Patterns']
};

// NOOB LEVEL - Very easy problems for first 60 days
const questionTemplates: Record<string, Array<{ title: string; difficulty: 'Easy' | 'Medium' | 'Hard'; leetCodeId: string }>> = {
  // MONTH 1: ABSOLUTE BEGINNER
  'Very Easy Arrays': [
    { title: 'Two Sum', difficulty: 'Easy', leetCodeId: '1' },
    { title: 'Contains Duplicate', difficulty: 'Easy', leetCodeId: '217' },
    { title: 'Best Time to Buy/Sell Stock', difficulty: 'Easy', leetCodeId: '121' },
    { title: 'Plus One', difficulty: 'Easy', leetCodeId: '66' },
    { title: 'Move Zeroes', difficulty: 'Easy', leetCodeId: '283' },
    { title: 'Remove Duplicates', difficulty: 'Easy', leetCodeId: '26' },
    { title: 'Single Number', difficulty: 'Easy', leetCodeId: '136' },
    { title: 'Majority Element', difficulty: 'Easy', leetCodeId: '169' },
    { title: 'Missing Number', difficulty: 'Easy', leetCodeId: '268' },
    { title: 'Intersection of Two Arrays', difficulty: 'Easy', leetCodeId: '349' }
  ],
  'Very Easy Strings': [
    { title: 'Valid Anagram', difficulty: 'Easy', leetCodeId: '242' },
    { title: 'Valid Palindrome', difficulty: 'Easy', leetCodeId: '125' },
    { title: 'Reverse String', difficulty: 'Easy', leetCodeId: '344' },
    { title: 'Length of Last Word', difficulty: 'Easy', leetCodeId: '58' },
    { title: 'Add Strings', difficulty: 'Easy', leetCodeId: '415' },
    { title: 'First Unique Char', difficulty: 'Easy', leetCodeId: '387' },
    { title: 'Ransom Note', difficulty: 'Easy', leetCodeId: '383' },
    { title: 'Isomorphic Strings', difficulty: 'Easy', leetCodeId: '205' },
    { title: 'Longest Common Prefix', difficulty: 'Easy', leetCodeId: '14' },
    { title: 'Implement strStr', difficulty: 'Easy', leetCodeId: '28' }
  ],
  'Basic Loops': [
    { title: 'Fizz Buzz', difficulty: 'Easy', leetCodeId: '412' },
    { title: 'Palindrome Number', difficulty: 'Easy', leetCodeId: '9' },
    { title: 'Sqrt(x)', difficulty: 'Easy', leetCodeId: '69' },
    { title: 'Count Primes', difficulty: 'Easy', leetCodeId: '204' },
    { title: 'Power of Three', difficulty: 'Easy', leetCodeId: '326' },
    { title: 'Fibonacci Number', difficulty: 'Easy', leetCodeId: '509' },
    { title: 'Add Digits', difficulty: 'Easy', leetCodeId: '258' },
    { title: 'Happy Number', difficulty: 'Easy', leetCodeId: '202' },
    { title: 'Ugly Number', difficulty: 'Easy', leetCodeId: '263' },
    { title: 'Perfect Number', difficulty: 'Easy', leetCodeId: '507' }
  ],
  // MONTH 2: EASY LEVEL
  'Easy Arrays': [
    { title: 'Rotate Array', difficulty: 'Easy', leetCodeId: '189' },
    { title: 'Contains Nearby Duplicate', difficulty: 'Easy', leetCodeId: '219' },
    { title: 'Summary Ranges', difficulty: 'Easy', leetCodeId: '228' },
    { title: 'Third Max Number', difficulty: 'Easy', leetCodeId: '414' },
    { title: 'Find All Numbers Disappeared', difficulty: 'Easy', leetCodeId: '448' },
    { title: 'Assign Cookies', difficulty: 'Easy', leetCodeId: '455' },
    { title: 'Keyboard Row', difficulty: 'Easy', leetCodeId: '500' },
    { title: 'Relative Ranks', difficulty: 'Easy', leetCodeId: '506' },
    { title: 'Array Partition', difficulty: 'Easy', leetCodeId: '561' },
    { title: 'Reshape Matrix', difficulty: 'Easy', leetCodeId: '566' }
  ],
  'Easy Strings': [
    { title: 'Reverse Vowels', difficulty: 'Easy', leetCodeId: '345' },
    { title: 'Detect Capital', difficulty: 'Easy', leetCodeId: '520' },
    { title: 'Reverse Words III', difficulty: 'Easy', leetCodeId: '557' },
    { title: 'Buddy Strings', difficulty: 'Easy', leetCodeId: '859' },
    { title: 'Goat Latin', difficulty: 'Easy', leetCodeId: '824' },
    { title: 'Reverse Only Letters', difficulty: 'Easy', leetCodeId: '917' },
    { title: 'Shortest Distance to Char', difficulty: 'Easy', leetCodeId: '821' },
    { title: 'To Lower Case', difficulty: 'Easy', leetCodeId: '709' },
    { title: 'Repeated Substring Pattern', difficulty: 'Easy', leetCodeId: '459' },
    { title: 'Valid Palindrome II', difficulty: 'Easy', leetCodeId: '680' }
  ],
  'Simple Math': [
    { title: 'Roman to Integer', difficulty: 'Easy', leetCodeId: '13' },
    { title: 'Excel Sheet Column Number', difficulty: 'Easy', leetCodeId: '171' },
    { title: 'Factorial Trailing Zeroes', difficulty: 'Easy', leetCodeId: '172' },
    { title: 'Power of Two', difficulty: 'Easy', leetCodeId: '231' },
    { title: 'Water Bottles', difficulty: 'Easy', leetCodeId: '1518' },
    { title: 'Self Dividing Numbers', difficulty: 'Easy', leetCodeId: '728' },
    { title: 'Baseball Game', difficulty: 'Easy', leetCodeId: '682' },
    { title: 'Minimum Moves to Equal Array', difficulty: 'Easy', leetCodeId: '453' },
    { title: 'Valid Perfect Square', difficulty: 'Easy', leetCodeId: '367' },
    { title: 'Find Complement', difficulty: 'Easy', leetCodeId: '476' }
  ],
  // MONTH 3 onwards: Standard topics
  'Arrays': [
    { title: 'Two Sum', difficulty: 'Easy', leetCodeId: '1' },
    { title: 'Best Time to Buy/Sell Stock', difficulty: 'Easy', leetCodeId: '121' },
    { title: 'Contains Duplicate', difficulty: 'Easy', leetCodeId: '217' },
    { title: 'Product of Array Except Self', difficulty: 'Medium', leetCodeId: '238' },
    { title: 'Maximum Subarray', difficulty: 'Medium', leetCodeId: '53' },
    { title: '3Sum', difficulty: 'Medium', leetCodeId: '15' },
    { title: 'Merge Intervals', difficulty: 'Medium', leetCodeId: '56' },
    { title: 'Container With Most Water', difficulty: 'Medium', leetCodeId: '11' },
    { title: 'Trapping Rain Water', difficulty: 'Hard', leetCodeId: '42' }
  ],
  'Strings': [
    { title: 'Valid Anagram', difficulty: 'Easy', leetCodeId: '242' },
    { title: 'Valid Palindrome', difficulty: 'Easy', leetCodeId: '125' },
    { title: 'Reverse String', difficulty: 'Easy', leetCodeId: '344' },
    { title: 'Group Anagrams', difficulty: 'Medium', leetCodeId: '49' },
    { title: 'Longest Substring Without Repeating', difficulty: 'Medium', leetCodeId: '3' },
    { title: 'Longest Repeating Character', difficulty: 'Medium', leetCodeId: '424' },
    { title: 'Valid Parentheses', difficulty: 'Easy', leetCodeId: '20' },
    { title: 'Min Window Substring', difficulty: 'Hard', leetCodeId: '76' }
  ],
  'Basic HashMap': [
    { title: 'Two Sum', difficulty: 'Easy', leetCodeId: '1' },
    { title: 'Happy Number', difficulty: 'Easy', leetCodeId: '202' },
    { title: 'Isomorphic Strings', difficulty: 'Easy', leetCodeId: '205' },
    { title: 'Contains Duplicate II', difficulty: 'Easy', leetCodeId: '219' },
    { title: 'Logger Rate Limiter', difficulty: 'Easy', leetCodeId: '359' },
    { title: 'Subarray Sum Equals K', difficulty: 'Medium', leetCodeId: '560' }
  ],
  'Linked List': [
    { title: 'Reverse Linked List', difficulty: 'Easy', leetCodeId: '206' },
    { title: 'Merge Two Sorted Lists', difficulty: 'Easy', leetCodeId: '21' },
    { title: 'Linked List Cycle', difficulty: 'Easy', leetCodeId: '141' },
    { title: 'Remove Nth Node From End', difficulty: 'Medium', leetCodeId: '19' },
    { title: 'Add Two Numbers', difficulty: 'Medium', leetCodeId: '2' },
    { title: 'Copy List with Random Pointer', difficulty: 'Medium', leetCodeId: '138' }
  ],
  'Stack': [
    { title: 'Valid Parentheses', difficulty: 'Easy', leetCodeId: '20' },
    { title: 'Min Stack', difficulty: 'Medium', leetCodeId: '155' },
    { title: 'Daily Temperatures', difficulty: 'Medium', leetCodeId: '739' },
    { title: 'Largest Rectangle in Histogram', difficulty: 'Hard', leetCodeId: '84' }
  ],
  'Queue': [
    { title: 'Implement Queue using Stacks', difficulty: 'Easy', leetCodeId: '232' },
    { title: 'Sliding Window Maximum', difficulty: 'Hard', leetCodeId: '239' }
  ],
  'Two Pointers': [
    { title: 'Valid Palindrome II', difficulty: 'Easy', leetCodeId: '680' },
    { title: '3Sum', difficulty: 'Medium', leetCodeId: '15' },
    { title: 'Container With Most Water', difficulty: 'Medium', leetCodeId: '11' }
  ],
  'Sliding Window': [
    { title: 'Best Time to Buy/Sell Stock', difficulty: 'Easy', leetCodeId: '121' },
    { title: 'Longest Substring Without Repeating', difficulty: 'Medium', leetCodeId: '3' },
    { title: 'Longest Repeating Character', difficulty: 'Medium', leetCodeId: '424' }
  ],
  'Binary Search': [
    { title: 'Binary Search', difficulty: 'Easy', leetCodeId: '704' },
    { title: 'Search Insert Position', difficulty: 'Easy', leetCodeId: '35' },
    { title: 'First and Last in Sorted Array', difficulty: 'Medium', leetCodeId: '34' },
    { title: 'Search in Rotated Sorted Array', difficulty: 'Medium', leetCodeId: '33' }
  ],
  'Trees': [
    { title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', leetCodeId: '104' },
    { title: 'Same Tree', difficulty: 'Easy', leetCodeId: '100' },
    { title: 'Invert Binary Tree', difficulty: 'Easy', leetCodeId: '226' },
    { title: 'Binary Tree Level Order', difficulty: 'Medium', leetCodeId: '102' },
    { title: 'Validate BST', difficulty: 'Medium', leetCodeId: '98' }
  ],
  'BST': [
    { title: 'Search in BST', difficulty: 'Easy', leetCodeId: '700' },
    { title: 'Insert into BST', difficulty: 'Medium', leetCodeId: '701' },
    { title: 'Lowest Common Ancestor of BST', difficulty: 'Easy', leetCodeId: '235' }
  ],
  'DFS': [
    { title: 'Number of Islands', difficulty: 'Medium', leetCodeId: '200' },
    { title: 'Clone Graph', difficulty: 'Medium', leetCodeId: '133' },
    { title: 'Course Schedule', difficulty: 'Medium', leetCodeId: '207' }
  ],
  'BFS': [
    { title: 'Rotting Oranges', difficulty: 'Medium', leetCodeId: '994' },
    { title: 'Word Ladder', difficulty: 'Hard', leetCodeId: '127' }
  ],
  'Dynamic Programming': [
    { title: 'Climbing Stairs', difficulty: 'Easy', leetCodeId: '70' },
    { title: 'House Robber', difficulty: 'Medium', leetCodeId: '198' },
    { title: 'Coin Change', difficulty: 'Medium', leetCodeId: '322' },
    { title: 'Longest Increasing Subsequence', difficulty: 'Medium', leetCodeId: '300' }
  ],
  'Memoization': [
    { title: 'Fibonacci Number', difficulty: 'Easy', leetCodeId: '509' },
    { title: 'Word Break', difficulty: 'Medium', leetCodeId: '139' },
    { title: 'Decode Ways', difficulty: 'Medium', leetCodeId: '91' }
  ],
  'Graph': [
    { title: 'Find if Path Exists', difficulty: 'Easy', leetCodeId: '1971' },
    { title: 'Number of Provinces', difficulty: 'Medium', leetCodeId: '547' },
    { title: 'Course Schedule II', difficulty: 'Medium', leetCodeId: '210' }
  ],
  'Backtracking': [
    { title: 'Subsets', difficulty: 'Medium', leetCodeId: '78' },
    { title: 'Combination Sum', difficulty: 'Medium', leetCodeId: '39' },
    { title: 'Permutations', difficulty: 'Medium', leetCodeId: '46' }
  ],
  'Bit Manipulation': [
    { title: 'Single Number', difficulty: 'Easy', leetCodeId: '136' },
    { title: 'Counting Bits', difficulty: 'Easy', leetCodeId: '338' },
    { title: 'Number of 1 Bits', difficulty: 'Easy', leetCodeId: '191' }
  ],
  'Heap': [
    { title: 'Kth Largest Element', difficulty: 'Medium', leetCodeId: '215' },
    { title: 'Top K Frequent Elements', difficulty: 'Medium', leetCodeId: '347' }
  ],
  'Priority Queue': [
    { title: 'Merge K Sorted Lists', difficulty: 'Hard', leetCodeId: '23' },
    { title: 'Task Scheduler', difficulty: 'Medium', leetCodeId: '621' }
  ],
  'Trie': [
    { title: 'Implement Trie', difficulty: 'Medium', leetCodeId: '208' },
    { title: 'Word Search II', difficulty: 'Hard', leetCodeId: '212' }
  ],
  'Advanced DP': [
    { title: 'Burst Balloons', difficulty: 'Hard', leetCodeId: '312' },
    { title: 'Russian Doll Envelopes', difficulty: 'Hard', leetCodeId: '354' }
  ],
  'Advanced Trees': [
    { title: 'Binary Tree Max Path Sum', difficulty: 'Hard', leetCodeId: '124' },
    { title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', leetCodeId: '297' }
  ],
  'System Design': [
    { title: 'LRU Cache', difficulty: 'Medium', leetCodeId: '146' },
    { title: 'Design HashMap', difficulty: 'Easy', leetCodeId: '705' }
  ],
  'Hard Patterns': [
    { title: 'Regular Expression Matching', difficulty: 'Hard', leetCodeId: '10' },
    { title: 'Edit Distance', difficulty: 'Hard', leetCodeId: '72' }
  ]
};

// Generate questions for all 365 days
export const generateDSAQuestions = (): DSAQuestion[] => {
  const questions: DSAQuestion[] = [];
  let idCounter = 1;

  for (let month = 1; month <= 12; month++) {
    const daysInMonth = month === 2 ? 28 : [4, 6, 9, 11].includes(month) ? 30 : 31;
    const monthTopics = topicsByMonth[month];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayTopics = [
        monthTopics[(day - 1) % monthTopics.length],
        monthTopics[day % monthTopics.length],
        monthTopics[(day + 1) % monthTopics.length]
      ];

      dayTopics.forEach((topic) => {
        const templates = questionTemplates[topic] || questionTemplates['Very Easy Arrays'];
        // For first 2 months, only pick from first 5 easy questions
        const templateIndex = month <= 2 
          ? Math.min((day - 1) % 5, templates.length - 1)  // Only easy ones
          : Math.min(Math.floor((day / daysInMonth) * templates.length), templates.length - 1);
        const template = templates[templateIndex] || templates[0];

        questions.push({
          id: idCounter++,
          title: template.title,
          difficulty: template.difficulty,
          topic: topic,
          link: `https://leetcode.com/problems/${template.title.toLowerCase().replace(/\s+/g, '-')}/`,
          completed: false,
          day: day,
          month: month
        });
      });
    }
  }

  return questions;
};

export const dsaQuestions = generateDSAQuestions();

export const getTodayQuestions = (startDate: Date = new Date('2026-01-01')): DSAQuestion[] => {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const startIndex = (diffDays - 1) * 3;
  return dsaQuestions.slice(startIndex, startIndex + 3);
};

export const getQuestionsByDay = (day: number, month: number): DSAQuestion[] => {
  return dsaQuestions.filter(q => q.day === day && q.month === month);
};
