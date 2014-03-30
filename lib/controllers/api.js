'use strict';

/**
 * Get awesome things
 */
exports.questions = function (req, res) {
  res.json([{
    question: 'Which three measures are needed to establish how usable a product is?',
    alternatives: [{
      text: 'Product Responsiveness, Stability and Consistency'
    }, {
      text: 'User Effectiveness, Efficiency and Satisfaction',
      correct: true
    }, {
      text: 'Style guide conformance, Fault tolerance, Size of manual'
    }, {
      text: 'User Happiness, Competence, Motivation'
    }]
  }, {
    question: 'Which of the following is most important in user-centered design?',
    alternatives: [{
      text: 'An object-oriented development process'
    }, {
      text: 'Iterative design and user testing',
      correct: true
    }, {
      text: 'Regular design demonstrations'
    }, {
      text: 'Including every function each user wants'
    }]
  }, {
    question: 'What technique involves having an experienced evaluator apply a set of guidelines or principles in examining an interface?',
    alternatives: [{
      text: 'Experience Summary'
    }, {
      text: 'Usability Test'
    }, {
      text: 'Cognitive Walkthrough'
    }, {
      text: 'Heuristic Evaluation',
      correct: true
    }]
  }, {
    question: 'Usability as defined in the International Standard, ISO 9241 pt 11 is defined generally as:',
    alternatives: [{
      text: 'Clicks, Time and Completion'
    }, {
      text: 'There is no international usability standard'
    }, {
      text: 'Effectiveness, Efficiency and Satisfaction',
      correct: true
    }, {
      text: 'Satisfaction, Net Promoters and Ergonomics'
    }]
  }, {
    question: 'The evaluator effect can best be described as:',
    alternatives: [{
      text: 'The effect an evaluator has on a participant in a usability study'
    }, {
      text: 'The tendency for different evaluators to identify different problems when testing the same interface'
    }, {
      text: 'The tendency for different evaluators to identify the same problems when testing the same interface',
      correct: true
    }, {
      text: 'The effect on the usability test facilitator when being observed by stakeholders'
    }]
  }, {
    question: 'In the earliest stages of interface design, the best strategy for the use of color is:',
    alternatives: [{
      text: 'Use color to focus attention and show relationships'
    }, {
      text: 'Use only a few colors'
    }, {
      text: 'Avoid saturated reds and blues'
    }, {
      text: 'Use no color at all',
      correct: true
    }]
  }, ]);
};
