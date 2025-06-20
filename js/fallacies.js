const FALLACIES = [
  {
    "name": "Ad Hominem",
    "group": "Attacks on the Person",
    "definition": "An ad hominem fallacy occurs when someone attacks a person\u2019s character instead of engaging with the substance of their argument.",
    "example": "You're wrong about climate change because you're not a scientist.",
    "tip": "Challenge arguments with evidence and logic, not personal attacks.",
    "see_also": [
      "Tu Quoque",
      "Poisoning the Well"
    ],
    "number": 1
  },
  {
    "name": "Appeal to Authority",
    "group": "Authority and Status",
    "definition": "This fallacy occurs when someone claims a statement is true because an authority says it is, without evidence.",
    "example": "It must be correct because a Nobel laureate said so.",
    "tip": "Even experts can be wrong. Always look for supporting evidence.",
    "see_also": [
      "Appeal to Celebrity"
    ],
    "number": 2
  },
  {
    "name": "Appeal to Popularity",
    "group": "Popularity and Common Practice",
    "definition": "Claims an idea is true because many people believe it.",
    "example": "Most people use this brand, so it must be the best.",
    "tip": "Popularity doesn't guarantee correctness. Examine the logic.",
    "see_also": [
      "Bandwagon"
    ],
    "number": 3
  },
  {
    "name": "Appeal to Ignorance",
    "group": "Lack of Evidence",
    "definition": "Asserts something is true because it hasn\u2019t been proven false, or vice versa.",
    "example": "No one has proven aliens don\u2019t exist, so they must be real.",
    "tip": "Lack of evidence isn\u2019t proof of anything. Demand support.",
    "see_also": [
      "Burden of Proof"
    ],
    "number": 4
  },
  {
    "name": "Strawman",
    "group": "Misrepresentation",
    "definition": "Misrepresents someone's argument to make it easier to attack.",
    "example": "'You want to cut military spending? You must want to leave us defenseless!'",
    "tip": "Respond to what was actually said, not a distorted version.",
    "see_also": [
      "Red Herring"
    ],
    "number": 5
  },
  {
    "name": "False Dilemma",
    "group": "Black-and-White Thinking",
    "definition": "Presents two choices as the only possibilities, when more exist.",
    "example": "You're either with us or against us.",
    "tip": "Look for alternative options being excluded.",
    "see_also": [
      "Strawman"
    ],
    "number": 6
  },
  {
    "name": "Circular Reasoning",
    "group": "Unfounded Assumptions",
    "definition": "The conclusion is assumed in the premise.",
    "example": "The Bible is true because it says it's the word of God.",
    "tip": "Watch for arguments that prove themselves using themselves.",
    "see_also": [
      "Begging the Question"
    ],
    "number": 7
  },
  {
    "name": "Slippery Slope",
    "group": "Causal Fallacies",
    "definition": "Argues that one small step will inevitably lead to extreme outcomes.",
    "example": "If we allow this policy, soon the government will control everything!",
    "tip": "Demand evidence for each causal step claimed.",
    "see_also": [
      "False Cause"
    ],
    "number": 8
  },
  {
    "name": "Red Herring",
    "group": "Distraction",
    "definition": "Introduces irrelevant information to distract from the real issue.",
    "example": "Why worry about climate change when we have homeless people to feed?",
    "tip": "Stay focused on the core issue.",
    "see_also": [
      "Strawman",
      "Whataboutism"
    ],
    "number": 9
  },
  {
    "name": "Tu Quoque",
    "group": "Hypocrisy Accusations",
    "definition": "Rejects criticism by accusing the other party of hypocrisy.",
    "example": "You smoke too! So don\u2019t lecture me on health.",
    "tip": "Hypocrisy doesn't invalidate a true statement.",
    "see_also": [
      "Ad Hominem"
    ],
    "number": 10
  },
  {
    "name": "Hasty Generalization",
    "group": "Faulty Induction",
    "definition": "Draws a conclusion from insufficient evidence.",
    "example": "One rude tourist from France? French people must be rude.",
    "tip": "Use large, representative samples.",
    "see_also": [
      "Anecdotal"
    ],
    "number": 11
  },
  {
    "name": "Post Hoc Ergo Propter Hoc",
    "group": "Causal Fallacies",
    "definition": "Assumes that because B followed A, A caused B.",
    "example": "I wore my lucky socks and we won \u2014 the socks did it!",
    "tip": "Correlation does not imply causation.",
    "see_also": [
      "False Cause"
    ],
    "number": 12
  },
  {
    "name": "Appeal to Tradition",
    "group": "Status Quo Bias",
    "definition": "Argues something is good or correct because it\u2019s traditional.",
    "example": "We've always done it this way.",
    "tip": "Question whether tradition still holds merit today.",
    "see_also": [
      "Appeal to History"
    ],
    "number": 13
  },
  {
    "name": "Appeal to Novelty",
    "group": "Innovation Bias",
    "definition": "Assumes something is better because it\u2019s new.",
    "example": "This must be better \u2014 it\u2019s the latest model.",
    "tip": "Newness isn't always progress. Evaluate claims critically.",
    "see_also": [
      "Appeal to Tradition"
    ],
    "number": 14
  },
  {
    "name": "Anecdotal",
    "group": "Evidence Problems",
    "definition": "Uses a personal experience or isolated example instead of sound reasoning.",
    "example": "Vaccines are bad \u2014 my cousin got sick after hers.",
    "tip": "Anecdotes are not data. Look for broader evidence.",
    "see_also": [
      "Hasty Generalization"
    ],
    "number": 15
  },
  {
    "name": "Equivocation",
    "group": "Language and Ambiguity",
    "definition": "Uses ambiguous language to mislead or misrepresent.",
    "example": "Feathers are light. What is light cannot be dark. Therefore, feathers cannot be dark.",
    "tip": "Identify shifting word meanings mid-argument.",
    "see_also": [
      "Amphiboly"
    ],
    "number": 16
  },
  {
    "name": "Begging the Question",
    "group": "Circular Logic",
    "definition": "The conclusion is assumed in the premise.",
    "example": "Reading is fundamental because it is essential.",
    "tip": "Demand that claims be supported, not assumed.",
    "see_also": [
      "Circular Reasoning"
    ],
    "number": 17
  },
  {
    "name": "Appeal to Emotion",
    "group": "Manipulation",
    "definition": "Uses emotion instead of reason to win an argument.",
    "example": "Think of the children!",
    "tip": "Emotions may be valid, but they aren\u2019t evidence.",
    "see_also": [
      "Appeal to Fear",
      "Appeal to Pity"
    ],
    "number": 18
  },
  {
    "name": "Appeal to Fear",
    "group": "Emotion and Manipulation",
    "definition": "Scares people into accepting a claim.",
    "example": "If you don\u2019t vote for me, terrorists will win.",
    "tip": "Demand evidence, not threats or doomsday claims.",
    "see_also": [
      "Appeal to Emotion"
    ],
    "number": 19
  },
  {
    "name": "Appeal to Pity",
    "group": "Emotion and Manipulation",
    "definition": "Tries to win support by making people feel sorry.",
    "example": "I deserve an A because I tried really hard.",
    "tip": "Sympathy shouldn\u2019t override facts or logic.",
    "see_also": [
      "Appeal to Emotion"
    ],
    "number": 20
  },
  {
    "name": "False Cause",
    "group": "Causal Fallacies",
    "definition": "Assumes a real or perceived relationship between things means one caused the other.",
    "example": "More people drowned when ice cream sales went up \u2014 ice cream causes drowning.",
    "tip": "Consider third variables or coincidence. Correlation isn\u2019t causation.",
    "see_also": [
      "Post Hoc",
      "Slippery Slope"
    ],
    "number": 21
  },
  {
    "name": "Burden of Proof",
    "group": "Evidence Problems",
    "definition": "Shifts the burden of disproof to others rather than proving one\u2019s own claim.",
    "example": "Prove that ghosts don\u2019t exist.",
    "tip": "The one making the claim must provide the evidence.",
    "see_also": [
      "Appeal to Ignorance"
    ],
    "number": 22
  },
  {
    "name": "Gambler's Fallacy",
    "group": "Probability Misuse",
    "definition": "Believes past events affect the probability of future random events.",
    "example": "I\u2019ve flipped 5 heads \u2014 the next must be tails!",
    "tip": "Independent events stay independent.",
    "see_also": [
      "Hot Hand Fallacy"
    ],
    "number": 23
  },
  {
    "name": "Middle Ground",
    "group": "False Compromises",
    "definition": "Claims the middle between two extremes must be correct.",
    "example": "Some say vaccines work, others say they don\u2019t \u2014 the truth must be somewhere in the middle.",
    "tip": "The truth isn\u2019t always a compromise.",
    "see_also": [
      "False Balance"
    ],
    "number": 24
  },
  {
    "name": "Composition",
    "group": "Part-to-Whole Errors",
    "definition": "Assumes what's true of parts is true of the whole.",
    "example": "Each part of the machine is light, so the whole machine is light.",
    "tip": "Check whether the whole behaves differently than its parts.",
    "see_also": [
      "Division"
    ],
    "number": 25
  },
  {
    "name": "Division",
    "group": "Whole-to-Part Errors",
    "definition": "Assumes what's true of the whole is true of its parts.",
    "example": "The company is wealthy, so every employee must be wealthy.",
    "tip": "Don\u2019t assume characteristics transfer from group to individuals.",
    "see_also": [
      "Composition"
    ],
    "number": 26
  },
  {
    "name": "No True Scotsman",
    "group": "Purity Tests",
    "definition": "Dismisses counterexamples by redefining terms to protect a claim.",
    "example": "'No Scotsman would do that!' \u2014 'But Angus did.' \u2014 'Then he's not a true Scotsman.'",
    "tip": "Changing definitions to dodge criticism is dishonest.",
    "see_also": [
      "Moving the Goalposts"
    ],
    "number": 27
  },
  {
    "name": "Loaded Question",
    "group": "Presupposition",
    "definition": "A question that contains a controversial assumption.",
    "example": "Have you stopped cheating on tests?",
    "tip": "Call out the embedded assumption before answering.",
    "see_also": [
      "Complex Question"
    ],
    "number": 28
  },
  {
    "name": "Black-or-White",
    "group": "False Dilemma",
    "definition": "Presents limited options when more exist.",
    "example": "You\u2019re either pro-science or anti-progress.",
    "tip": "Always look for other possibilities.",
    "see_also": [
      "False Dilemma"
    ],
    "number": 29
  },
  {
    "name": "Appeal to Nature",
    "group": "Assumed Goodness",
    "definition": "Claims something is good because it\u2019s 'natural'.",
    "example": "This herb is safe because it\u2019s natural.",
    "tip": "Natural isn\u2019t always good \u2014 arsenic is natural.",
    "see_also": [
      "Appeal to Tradition"
    ],
    "number": 30
  },
  {
    "name": "Appeal to Wealth",
    "group": "Status Fallacies",
    "definition": "Assumes wealth means correctness or value.",
    "example": "He\u2019s rich, so he must know what\u2019s right.",
    "tip": "Money doesn\u2019t equal wisdom or truth.",
    "see_also": [
      "Appeal to Authority"
    ],
    "number": 31
  },
  {
    "name": "Appeal to Poverty",
    "group": "Status Fallacies",
    "definition": "Assumes poverty implies wisdom or truth.",
    "example": "He\u2019s poor, so he must be more honest.",
    "tip": "Neither poverty nor wealth guarantees truth.",
    "see_also": [
      "Appeal to Wealth"
    ],
    "number": 32
  },
  {
    "name": "Genetic Fallacy",
    "group": "Source-Based Bias",
    "definition": "Judges a claim based on its origin rather than its merits.",
    "example": "That idea came from a political group I dislike, so it must be wrong.",
    "tip": "Evaluate the claim, not where it came from.",
    "see_also": [
      "Ad Hominem"
    ],
    "number": 33
  },
  {
    "name": "False Analogy",
    "group": "Faulty Comparisons",
    "definition": "Draws a comparison between two unlike things and treats them as the same.",
    "example": "Employees are like nails \u2014 you have to hit them to get them to work.",
    "tip": "Check that the comparison holds under scrutiny.",
    "see_also": [
      "Faulty Comparison"
    ],
    "number": 34
  },
  {
    "name": "Appeal to Consequences",
    "group": "Manipulative Reasoning",
    "definition": "Argues something must be true or false based on the consequences of it being so.",
    "example": "If we accept evolution, people will lose their morals. So evolution must be false.",
    "tip": "Truth isn\u2019t determined by outcomes or convenience.",
    "see_also": [
      "Appeal to Emotion"
    ],
    "number": 35
  },
  {
    "name": "Wishful Thinking",
    "group": "Emotion and Bias",
    "definition": "Believes something is true because we want it to be.",
    "example": "I just know things will work out because they have to.",
    "tip": "Hopes and reality aren\u2019t the same.",
    "see_also": [
      "Appeal to Consequences"
    ],
    "number": 36
  },
  {
    "name": "Special Pleading",
    "group": "Double Standards",
    "definition": "Applies standards to others while exempting oneself without justification.",
    "example": "Sure, lying is wrong \u2014 but I had no choice!",
    "tip": "Apply rules consistently unless there's a rational basis.",
    "see_also": [
      "No True Scotsman"
    ],
    "number": 37
  },
  {
    "name": "Ambiguity",
    "group": "Language Tricks",
    "definition": "Uses vague language to mislead or avoid clarity.",
    "example": "I never said I stole the money.",
    "tip": "Clarify all key terms to avoid deception.",
    "see_also": [
      "Equivocation"
    ],
    "number": 38
  },
  {
    "name": "Moving the Goalposts",
    "group": "Rhetorical Tactics",
    "definition": "Changes the criteria for success after they've been met.",
    "example": "Sure, you showed evidence \u2014 but not the kind I wanted!",
    "tip": "Call out shifting expectations mid-argument.",
    "see_also": [
      "No True Scotsman"
    ],
    "number": 39
  },
  {
    "name": "Bandwagon",
    "group": "Groupthink",
    "definition": "Encourages adoption of a belief because others do.",
    "example": "Everyone is investing in this stock, so I should too.",
    "tip": "Group behavior doesn\u2019t justify correctness.",
    "see_also": [
      "Appeal to Popularity"
    ],
    "number": 40
  },
  {
    "name": "Whataboutism",
    "group": "Distraction Tactics",
    "definition": "Responds to criticism by bringing up another issue, avoiding the original topic.",
    "example": "What about your country\u2019s human rights issues?",
    "tip": "Stay on topic. Address one claim at a time.",
    "see_also": [
      "Red Herring",
      "Tu Quoque"
    ],
    "number": 41
  },
  {
    "name": "Hot Hand Fallacy",
    "group": "Probability Errors",
    "definition": "Believes that past success increases the likelihood of future success in random events.",
    "example": "He made 3 baskets in a row \u2014 he can\u2019t miss now!",
    "tip": "Treat each event independently unless there's causation.",
    "see_also": [
      "Gambler\u2019s Fallacy"
    ],
    "number": 42
  },
  {
    "name": "Appeal to Flattery",
    "group": "Manipulation",
    "definition": "Uses compliments or praise to gain support or acceptance of an argument.",
    "example": "You're so smart \u2014 surely you agree with me.",
    "tip": "Watch for praise used to sway logic.",
    "see_also": [
      "Appeal to Emotion"
    ],
    "number": 43
  },
  {
    "name": "Appeal to Ridicule",
    "group": "Mockery",
    "definition": "Mocks an argument rather than addressing it logically.",
    "example": "Only an idiot would believe that!",
    "tip": "Mocking doesn\u2019t invalidate a point. Analyze it seriously.",
    "see_also": [
      "Ad Hominem"
    ],
    "number": 44
  },
  {
    "name": "Appeal to Spite",
    "group": "Emotion",
    "definition": "Uses resentment or bitterness to persuade.",
    "example": "Why should we help them? They never help us.",
    "tip": "Base arguments on fairness, not spite.",
    "see_also": [
      "Appeal to Emotion"
    ],
    "number": 45
  },
  {
    "name": "Appeal to Force",
    "group": "Coercion",
    "definition": "Uses threats to compel agreement rather than logic.",
    "example": "Agree with me or lose your job.",
    "tip": "Fear and threats aren\u2019t valid arguments.",
    "see_also": [
      "Appeal to Fear"
    ],
    "number": 46
  },
  {
    "name": "Complex Question",
    "group": "Presupposition",
    "definition": "A question that implies something not established.",
    "example": "Why do you always lie?",
    "tip": "Break down the assumptions before answering.",
    "see_also": [
      "Loaded Question"
    ],
    "number": 47
  },
  {
    "name": "Suppressed Evidence",
    "group": "Cherry Picking",
    "definition": "Ignores important facts that contradict an argument.",
    "example": "This diet worked for one person \u2014 so it\u2019s great!",
    "tip": "Always consider the full picture.",
    "see_also": [
      "Hasty Generalization"
    ],
    "number": 48
  },
  {
    "name": "False Balance",
    "group": "Equivalence Errors",
    "definition": "Presents two sides of an argument as equally valid, even when one lacks evidence.",
    "example": "Let\u2019s hear both sides: scientists and flat-earthers.",
    "tip": "Not all sides are equally supported by facts.",
    "see_also": [
      "Middle Ground"
    ],
    "number": 49
  },
  {
    "name": "Double Bind",
    "group": "False Dilemma",
    "definition": "Presents two choices where both are problematic.",
    "example": "If I speak up, I\u2019m rude. If I don\u2019t, I\u2019m weak.",
    "tip": "Explore whether the premise truly limits your choices.",
    "see_also": [
      "Black-or-White"
    ],
    "number": 50
  },
  {
    "name": "Moral Equivalence",
    "group": "False Comparisons",
    "definition": "Compares minor offenses to major ones to downplay wrongdoing.",
    "example": "Littering is just as bad as stealing.",
    "tip": "Distinguish severity and context in comparisons.",
    "see_also": [
      "False Analogy"
    ],
    "number": 51
  },
  {
    "name": "Reductio ad Hitlerum",
    "group": "Guilt by Association",
    "definition": "Dismisses ideas by associating them with something Hitler or the Nazis did.",
    "example": "Hitler supported vegetarianism, so vegetarians are suspect.",
    "tip": "Association isn\u2019t argument. Focus on the claim itself.",
    "see_also": [
      "Ad Hominem"
    ],
    "number": 52
  },
  {
    "name": "Historian\u2019s Fallacy",
    "group": "Chronological Errors",
    "definition": "Judges past actions with modern knowledge as if actors knew the future.",
    "example": "They should have known that would happen!",
    "tip": "Interpret past actions based on information available at the time.",
    "see_also": [
      "Presentism"
    ],
    "number": 53
  },
  {
    "name": "Presentism",
    "group": "Chronological Bias",
    "definition": "Interprets historical events with modern values or standards.",
    "example": "They were wrong for not thinking like we do today.",
    "tip": "Understand historical context before judging past actions.",
    "see_also": [
      "Historian\u2019s Fallacy"
    ],
    "number": 54
  },
  {
    "name": "False Equivalence",
    "group": "Comparison Errors",
    "definition": "Assumes two situations are equivalent when they are not.",
    "example": "Not recycling is just as bad as littering in the ocean.",
    "tip": "Weigh the context and severity of each side.",
    "see_also": [
      "False Balance"
    ],
    "number": 55
  },
  {
    "name": "Appeal to Celebrity",
    "group": "Authority and Influence",
    "definition": "Uses a celebrity's opinion to support an argument.",
    "example": "A famous actor endorses this product \u2014 it must be great.",
    "tip": "Fame isn\u2019t expertise. Demand subject-specific knowledge.",
    "see_also": [
      "Appeal to Authority"
    ],
    "number": 56
  },
  {
    "name": "Appeal to History",
    "group": "Tradition",
    "definition": "Claims something is right or inevitable because it has always happened that way.",
    "example": "War has always existed, so it\u2019s natural.",
    "tip": "Just because something happened before doesn\u2019t mean it should continue.",
    "see_also": [
      "Appeal to Tradition"
    ],
    "number": 57
  },
  {
    "name": "Continuum Fallacy",
    "group": "Precision Bias",
    "definition": "Dismisses claims because a line or distinction can't be clearly defined.",
    "example": "You can\u2019t define when a heap becomes a heap, so there\u2019s no such thing as a heap.",
    "tip": "Vagueness doesn\u2019t make distinctions meaningless.",
    "see_also": [
      "Sorites Paradox"
    ],
    "number": 58
  },
  {
    "name": "Fallacy of Composition",
    "group": "Part-to-Whole Errors",
    "definition": "Assumes that what\u2019s true for a part is true for the whole.",
    "example": "Each part of the airplane is light, so the plane must be light.",
    "tip": "Evaluate wholes independently from their parts.",
    "see_also": [
      "Division"
    ],
    "number": 59
  },
  {
    "name": "Fallacy of Division",
    "group": "Whole-to-Part Errors",
    "definition": "Assumes what's true for the whole applies to individual parts.",
    "example": "The cake is sweet, so the flour must be sweet too.",
    "tip": "Properties don\u2019t always transfer between scales.",
    "see_also": [
      "Composition"
    ],
    "number": 60
  },
  {
    "name": "Relative Privation",
    "group": "Minimization",
    "definition": "Dismisses an issue by pointing to more important problems.",
    "example": "Why care about student debt when children are starving?",
    "tip": "Multiple problems can matter. Don\u2019t use one to silence another.",
    "see_also": [
      "Whataboutism"
    ],
    "number": 61
  },
  {
    "name": "Argument from Incredulity",
    "group": "Ignorance",
    "definition": "Claims something must be false because it's hard to understand or believe.",
    "example": "I can't imagine how the universe started \u2014 so it must have been created.",
    "tip": "Difficulty understanding doesn\u2019t equal falsehood.",
    "see_also": [
      "Appeal to Ignorance"
    ],
    "number": 62
  },
  {
    "name": "Fallacy of the Single Cause",
    "group": "Oversimplification",
    "definition": "Attributes an outcome to a single cause when there are many.",
    "example": "He failed because he didn't study.",
    "tip": "Look for multiple contributing factors.",
    "see_also": [
      "Post Hoc"
    ],
    "number": 63
  },
  {
    "name": "Cherry Picking",
    "group": "Data Misuse",
    "definition": "Selects only evidence that supports a position while ignoring the rest.",
    "example": "These three studies show it's safe (ignores 12 that show harm).",
    "tip": "Seek comprehensive evidence, not selective examples.",
    "see_also": [
      "Suppressed Evidence"
    ],
    "number": 64
  },
  {
    "name": "False Attribution",
    "group": "Misuse of Authority",
    "definition": "Uses an irrelevant or fabricated source to support a claim.",
    "example": "Einstein believed in astrology!",
    "tip": "Check the accuracy and relevance of citations.",
    "see_also": [
      "Appeal to Authority"
    ],
    "number": 65
  },
  {
    "name": "Poisoning the Well",
    "group": "Preemptive Attack",
    "definition": "Discredits a person in advance to undermine their argument.",
    "example": "Before my opponent speaks, remember he's a known liar.",
    "tip": "Judge arguments on merit, not preloaded bias.",
    "see_also": [
      "Ad Hominem"
    ],
    "number": 66
  },
  {
    "name": "Fallacy Fallacy",
    "group": "Argument Evaluation",
    "definition": "Assumes a claim is false because it was poorly argued or contains a fallacy.",
    "example": "They used a slippery slope, so their entire point must be wrong.",
    "tip": "Even flawed arguments can have true conclusions.",
    "see_also": [
      "Strawman"
    ],
    "number": 67
  },
  {
    "name": "Appeal to Silence",
    "group": "Argument from Lack",
    "definition": "Claims that silence or lack of evidence proves something.",
    "example": "No one denied it, so it must be true.",
    "tip": "Silence isn\u2019t evidence \u2014 look for real support.",
    "see_also": [
      "Appeal to Ignorance"
    ],
    "number": 68
  },
  {
    "name": "Faulty Comparison",
    "group": "Analogy Errors",
    "definition": "Uses inappropriate comparisons to support a conclusion.",
    "example": "Running a country is like managing a family budget.",
    "tip": "Be sure your comparisons are valid and relevant.",
    "see_also": [
      "False Analogy"
    ],
    "number": 69
  },
  {
    "name": "Argument by Repetition",
    "group": "Rhetorical Tactics",
    "definition": "Repeats a claim often enough to persuade, rather than proving it.",
    "example": "This product works. This product works. This product works!",
    "tip": "Repetition isn\u2019t proof. Look for logic and evidence.",
    "see_also": [
      "Appeal to Popularity"
    ],
    "number": 70
  },
  {
    "name": "Reification",
    "group": "Abstract Misuse",
    "definition": "Treats an abstract concept as if it were a concrete thing.",
    "example": "Justice demands we take action!",
    "tip": "Watch for vague appeals to abstractions as arguments.",
    "see_also": [
      "Appeal to Emotion"
    ],
    "number": 71
  }
];
