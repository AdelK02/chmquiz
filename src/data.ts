export interface PhrasalVerbOption {
  verb: string;
  explanation: string;
}

export interface Question {
  id: number;
  paragraph: string; // Use placeholders like [[a]], [[b]], etc.
  options: PhrasalVerbOption[];
  correctAnswers: { [key: string]: string }; // key is 'a', 'b', etc., value is the verb
}

export interface PageData {
  id: number;
  title: string;
  subtitle: string;
  questions: Question[];
}

const question1: Question = {
  id: 1,
  paragraph: "When the truth [[a]], Hauchecome [[b]] to tell his story everywhere. But villagers only laughed and [[c]] insults. At the market, events [[d]] against him, and he was told to [[e]], leaving him humiliated and broken.",
  options: [
    { verb: "come out", explanation: "'Come out' means to become known or revealed. In this context, the truth was revealed." },
    { verb: "set out", explanation: "'Set out' means to begin a journey or an undertaking. Here, he began his task of telling the story." },
    { verb: "call out", explanation: "'Call out' means to shout or speak loudly. The villagers shouted insults at him." },
    { verb: "turn out", explanation: "'Turn out' means to result or end up in a particular way. Events resulted in a negative way for him." },
    { verb: "get out", explanation: "'Get out' means to leave a place. He was told to leave the market." },
    { verb: "put out", explanation: "'Put out' means to extinguish or annoy, which doesn't fit the blanks here." }
  ],
  correctAnswers: {
    a: "come out",
    b: "set out",
    c: "call out",
    d: "turn out",
    e: "get out"
  }
};

const question2: Question = {
  id: 2,
  paragraph: "On market day at Goderville, peasants crowded the square. Hauchecome arrived, [[a]] a piece of string and rolled it [[b]] quietly. Ashamed when Malandain noticed him, he pretended to [[c]] something else and [[d]] the market as people [[e]] around him.",
  options: [
    { verb: "pick up", explanation: "'Pick up' means to lift something from a surface. He lifted the string from the ground." },
    { verb: "up", explanation: "'Roll up' is a phrasal verb meaning to fold or wrap something into a cylinder. (Note: 'roll it up' uses 'up' as the particle)." },
    { verb: "look for", explanation: "'Look for' means to search for something. He pretended to search for something else to hide his shame." },
    { verb: "run to", explanation: "'Run to' means to move quickly towards something. He hurried into the market." },
    { verb: "call out", explanation: "'Call out' means to shout. People were shouting in the crowded market." },
    { verb: "shut up", explanation: "'Shut up' means to stop talking or to close something, which doesn't fit the context of his movement." }
  ],
  correctAnswers: {
    a: "pick up",
    b: "up",
    c: "look for",
    d: "run to",
    e: "call out"
  }
};

const question3: Question = {
  id: 3,
  paragraph: "After the crowd began to [[a]], Hauchecome [[b]] for the tavern. When the public crier [[c]] the announcement, fear seemed to [[d]] of the villagers’ hearts, as the news of the lost pocketbook threatened to [[e]] the peace of the market.",
  options: [
    { verb: "go away", explanation: "'Go away' means to leave. The crowd started to disperse and leave." },
    { verb: "set out", explanation: "'Set out' means to start a journey. He started walking towards the tavern." },
    { verb: "draw out", explanation: "'Draw out' can mean to prolong or elicit. Here, the crier made the announcement public (eliciting attention)." },
    { verb: "fall out", explanation: "'Fall out' can mean to drop out or happen. Here, it suggests the feeling leaving their hearts." },
    { verb: "take away", explanation: "'Take away' means to remove. The news threatened to remove the peaceful atmosphere." },
    { verb: "mix up", explanation: "'Mix up' means to confuse, which is less precise than 'take away' for peace." }
  ],
  correctAnswers: {
    a: "go away",
    b: "set out",
    c: "draw out",
    d: "fall out",
    e: "take away"
  }
};

const question4: Question = {
  id: 4,
  paragraph: "Though the truth finally [[a]], the villagers told Hauchecome to [[b]]. They [[c]] his innocence with suspicion. Shamed and hurt, he [[d]] repeating his story and [[e]] proving himself, though no one was ready to believe him.",
  options: [
    { verb: "come out", explanation: "'Come out' means to be revealed. The truth was finally known." },
    { verb: "shut up", explanation: "'Shut up' means to stop talking. The villagers wanted him to stop his story." },
    { verb: "mix up", explanation: "'Mix up' means to confuse. They confused his claims of innocence with lies." },
    { verb: "keep on", explanation: "'Keep on' means to continue doing something. He continued repeating his story." },
    { verb: "take to", explanation: "'Take to' means to begin a habit or activity. He began the habit of trying to prove himself." },
    { verb: "roll up", explanation: "'Roll up' doesn't fit the context of speaking or proving innocence." }
  ],
  correctAnswers: {
    a: "come out",
    b: "shut up",
    c: "mix up",
    d: "keep on",
    e: "take to"
  }
};

const question5: Question = {
  id: 5,
  paragraph: "After the news [[a]] the tavern, a gendarme appeared and ordered Hauchecome to [[b]] and meet the Mayor. As he [[c]], the truth slowly [[d]] to be twisted by suspicion, while Malandain watched him [[e]], accusing him falsely.",
  options: [
    { verb: "spread through", explanation: "'Spread through' means to reach every part of a place. The news reached everyone in the tavern." },
    { verb: "go along", explanation: "'Go along' means to accompany or proceed. He was told to go with the gendarme." },
    { verb: "pass by", explanation: "'Pass by' means to go past. As he walked past, people watched him." },
    { verb: "turn out", explanation: "'Turn out' means to result in. The truth resulted in being a twisted version of reality." },
    { verb: "get out", explanation: "'Get out' means to leave. Malandain watched him leave or move away." },
    { verb: "keep on", explanation: "'Keep on' means to continue, which doesn't fit the action of being watched while moving." }
  ],
  correctAnswers: {
    a: "spread through",
    b: "go along",
    c: "pass by",
    d: "turn out",
    e: "get out"
  }
};

const question6: Question = {
  id: 6,
  paragraph: "Passengers stranded at Fabriano continued their journey by a local train. At dawn, a mourning woman was [[a]], followed by her weak husband. He [[b]] to comfort her, but she [[c]] her collar in grief. The war was [[d]] their only son, for whom they had [[e]] their home.",
  options: [
    { verb: "hoist in", explanation: "'Hoist in' means to lift or raise something into a place. The woman was lifted into the train carriage." },
    { verb: "turn round", explanation: "'Turn round' means to rotate or change direction. The husband turned around to offer comfort." },
    { verb: "pull up", explanation: "'Pull up' means to draw something upwards. She pulled up her collar to hide her face in grief." },
    { verb: "take away", explanation: "'Take away' means to remove or carry off. The war had taken their son from them." },
    { verb: "break up", explanation: "'Break up' means to disintegrate or destroy. The loss of their son had destroyed their home life." },
    { verb: "belong to", explanation: "'Belong to' means to be the property of, which doesn't fit the action of entering a train or grieving." }
  ],
  correctAnswers: {
    a: "hoist in",
    b: "turn round",
    c: "pull up",
    d: "take away",
    e: "break up"
  }
};

const question7: Question = {
  id: 7,
  paragraph: "The grieving woman felt no one pitied her sorrow. Fellow passengers spoke of sons who had [[a]] wounded and were [[b]] to war. They argued that parents must bravely [[c]] their children, who [[d]] the nation. A stout traveller angrily rejected selfish grief and [[e]] his intense belief in sacrifice.",
  options: [
    { verb: "come back", explanation: "'Come back' means to return. Some sons had returned from the war wounded." },
    { verb: "send back", explanation: "'Send back' means to return something to its origin. The wounded sons were being sent back to the front lines." },
    { verb: "see off", explanation: "'See off' means to go to a station or airport to say goodbye. Parents had to say goodbye to their children." },
    { verb: "belong to", explanation: "'Belong to' means to be a part of. The children were considered to belong to the nation." },
    { verb: "show off", explanation: "'Show off' means to display something proudly. The traveller displayed his belief in sacrifice." },
    { verb: "take away", explanation: "'Take away' means to remove, which doesn't fit the context of returning or belonging." }
  ],
  correctAnswers: {
    a: "come back",
    b: "send back",
    c: "see off",
    d: "belong to",
    e: "show off"
  }
};

const question8: Question = {
  id: 8,
  paragraph: "The travellers listened as one father said children [[a]] the country. A stout man opposed him, claiming parents belong to their children and must accept sacrifice. Urging others to [[b]] courage, he tried to [[c]] his calm. Yet when emotions overwhelmed him, he [[d]] laughter and finally [[e]] a sob-like cry.",
  options: [
    { verb: "belong to", explanation: "'Belong to' means to be a part of. The father claimed children are the property of the state." },
    { verb: "join in", explanation: "'Join in' means to participate. He urged others to participate in the collective feeling of courage." },
    { verb: "show off", explanation: "'Show off' means to display proudly. He tried to display a sense of calm he didn't fully feel." },
    { verb: "break into", explanation: "'Break into' means to suddenly start doing something. He suddenly started laughing hysterically." },
    { verb: "break down", explanation: "'Break down' means to lose control of one's emotions. He finally lost control and cried." },
    { verb: "turn to", explanation: "'Turn to' means to start doing or using something, which is less specific than 'break into' for laughter." }
  ],
  correctAnswers: {
    a: "belong to",
    b: "join in",
    c: "show off",
    d: "break into",
    e: "break down"
  }
};

const question9: Question = {
  id: 9,
  paragraph: "Listening quietly, the woman sought strength to accept a son being [[a]] by war. The traveller’s words made her rethink her grief and [[b]] her son bravely, as others had. Hearing how his son had died, she realised many families were [[c]]. When she asked the truth, the father [[d]], his sorrow [[e]] uncontrollably.",
  options: [
    { verb: "take away", explanation: "'Take away' means to remove. Her son was being removed from her life by the war." },
    { verb: "see off", explanation: "'See off' means to say goodbye. She tried to find the strength to say goodbye to her son." },
    { verb: "break up", explanation: "'Break up' means to disintegrate. Many families were being destroyed by the conflict." },
    { verb: "pull up", explanation: "'Pull up' can mean to stop oneself. The father stopped his speech as he was overwhelmed." },
    { verb: "break down", explanation: "'Break down' means to lose emotional control. His sorrow caused him to lose control completely." },
    { verb: "come back", explanation: "'Come back' means to return, which doesn't fit the context of loss and grief." }
  ],
  correctAnswers: {
    a: "take away",
    b: "see off",
    c: "break up",
    d: "pull up",
    e: "break down"
  }
};

const question10: Question = {
  id: 10,
  paragraph: "Bablu had once [[a]] of school to [[b]] his family and later [[c]] responsibilities at home. After his arranged marriage, he [[d]] one morning looking for Gowri and [[e]] that women used rags instead of sanitary napkins, which deeply disturbed him.",
  options: [
    { verb: "drop out", explanation: "'Drop out' means to stop attending school or a course. Bablu left school early." },
    { verb: "help out", explanation: "'Help out' means to assist someone. He left school to assist his family financially." },
    { verb: "take over", explanation: "'Take over' means to assume control or responsibility. He assumed responsibilities at home." },
    { verb: "saunter out", explanation: "'Saunter out' means to walk out in a slow, relaxed manner. He walked out one morning." },
    { verb: "come to know", explanation: "'Come to know' means to discover or learn something. He discovered the truth about the rags." },
    { verb: "make out", explanation: "'Make out' means to discern or understand, which is less fitting than 'come to know' for discovering a fact." }
  ],
  correctAnswers: {
    a: "drop out",
    b: "help out",
    c: "take over",
    d: "saunter out",
    e: "come to know"
  }
};

const question11: Question = {
  id: 11,
  paragraph: "On his way home, Bablu decided to [[a]] to a small store and buy a napkin. He [[b]] the pad, [[c]] the cotton on his palm to judge its weight, [[d]] the pad in the packet, and later [[e]] the gift to Gowri at home.",
  options: [
    { verb: "go back", explanation: "'Go back' means to return to a place. He returned to a store he had passed." },
    { verb: "pulled out", explanation: "'Pull out' means to extract or remove something from a container. He removed the pad from its packaging." },
    { verb: "spread out", explanation: "'Spread out' means to extend or unfold something. He unfolded the cotton to examine it." },
    { verb: "put back", explanation: "'Put back' means to return something to its original place. He returned the pad to the packet." },
    { verb: "handed over", explanation: "'Hand over' means to give something to someone. He gave the gift to his wife." },
    { verb: "give up", explanation: "'Give up' means to stop trying, which doesn't fit the sequence of actions here." }
  ],
  correctAnswers: {
    a: "go back",
    b: "pulled out",
    c: "spread out",
    d: "put back",
    e: "handed over"
  }
};

const question12: Question = {
  id: 12,
  paragraph: "Bablu continued his experiments to help poor women. He [[a]] materials and [[b]] cotton to test new ideas but could not [[c]] a perfect pad. Seeing little girls [[d]] barefoot strengthened his resolve, and he refused to [[e]] his mission despite many difficulties.",
  options: [
    { verb: "pulled out", explanation: "'Pull out' means to extract. He extracted various materials for his tests." },
    { verb: "spread out", explanation: "'Spread out' means to unfold or lay out. He laid out the cotton to test it." },
    { verb: "make out", explanation: "'Make out' can mean to create or discern. Here, it means he couldn't successfully create a perfect pad." },
    { verb: "run around", explanation: "'Run around' means to move about quickly or aimlessly. The girls were running around without shoes." },
    { verb: "give up", explanation: "'Give up' means to abandon a task. He refused to abandon his mission." },
    { verb: "help out", explanation: "'Help out' means to assist, which is his goal, but 'give up' fits the 'refused to' structure better." }
  ],
  correctAnswers: {
    a: "pulled out",
    b: "spread out",
    c: "make out",
    d: "run around",
    e: "give up"
  }
};

const question13: Question = {
  id: 13,
  paragraph: "Bablu, who had once [[a]] to [[b]] his family, faced strong opposition to his experiments. Though villagers mocked him, he refused to stop. He [[c]] materials, [[d]] cotton, and tried to [[e]] a solution by experimenting on himself.",
  options: [
    { verb: "dropped out", explanation: "'Drop out' means to leave school. He had left school earlier in life." },
    { verb: "help out", explanation: "'Help out' means to assist. He left school to assist his family." },
    { verb: "pulled out", explanation: "'Pull out' means to extract. He extracted materials for his self-experiments." },
    { verb: "spread out", explanation: "'Spread out' means to lay out. He laid out cotton to examine it." },
    { verb: "make out", explanation: "'Make out' means to discern or create. He tried to create a working solution." },
    { verb: "turn out", explanation: "'Turn out' means to result in, which doesn't fit the personal action verbs here." }
  ],
  correctAnswers: {
    a: "dropped out",
    b: "help out",
    c: "pulled out",
    d: "spread out",
    e: "make out"
  }
};

const question14: Question = {
  id: 14,
  paragraph: "Frightened, the narrator slumped by the larder as the officer questioned him. On learning he was a pianist, the officer decided to [[a]] the next room. [[b]] the idea of music, he asked him to [[c]] the piano. He urged him to [[d]], promising not to [[e]] his anger.",
  options: [
    { verb: "go into", explanation: "'Go into' means to enter a room or area. The officer entered the next room." },
    { verb: "bring up", explanation: "'Bring up' means to mention or introduce a topic. The officer introduced the topic of music." },
    { verb: "try out", explanation: "'Try out' means to test or demonstrate something. He asked the narrator to test/play the piano." },
    { verb: "hang on", explanation: "'Hang on' can mean to wait or persist. He urged him to persist or wait for a moment." },
    { verb: "take out", explanation: "'Take out' means to remove. The officer promised not to vent or 'take out' his anger on him." },
    { verb: "look out", explanation: "'Look out' means to be careful or to watch, which doesn't fit the action of entering or mentioning." }
  ],
  correctAnswers: {
    a: "go into",
    b: "bring up",
    c: "try out",
    d: "hang on",
    e: "take out"
  }
};

const question15: Question = {
  id: 15,
  paragraph: "The officer inspected the attic and chose a safe loft for hiding. He promised to [[a]] food and told him not to [[b]]. The man [[c]] courage to ask a question. Ashamed yet kind, the officer tried to [[d]] his fear and asked him to [[e]] carefully.",
  options: [
    { verb: "fetch down", explanation: "'Fetch down' means to go and get something from a higher place (or simply to bring). He promised to bring food." },
    { verb: "venture out", explanation: "'Venture out' means to go out into a dangerous place. He was told not to leave the hiding spot." },
    { verb: "put on", explanation: "'Put on' can mean to assume an expression or quality. The man summoned or 'put on' courage." },
    { verb: "put out", explanation: "'Put out' can mean to extinguish or alleviate. The officer tried to alleviate the man's fear." },
    { verb: "look out", explanation: "'Look out' means to watch or be vigilant. He was told to watch carefully." },
    { verb: "go on", explanation: "'Go on' means to continue, which is less specific than 'venture out' for leaving a hideout." }
  ],
  correctAnswers: {
    a: "fetch down",
    b: "venture out",
    c: "put on",
    d: "put out",
    e: "look out"
  }
};

const question16: Question = {
  id: 16,
  paragraph: "From the attic, Szpilman [[a]] and saw the building surrounded by Polish soldiers. A woman [[b]] her heels as soldiers [[c]] the stairs. Fearing death, he [[d]] shouting his identity. After checking him, the soldiers believed him and let him [[e]] safely for food and rest.",
  options: [
    { verb: "look out", explanation: "'Look out' means to watch from a window or opening. He watched from the attic." },
    { verb: "take to", explanation: "'Take to' can mean to start a habit or move towards. Here, the woman 'took to her heels' (idiom for running away)." },
    { verb: "rush up", explanation: "'Rush up' means to move quickly upwards. The soldiers hurried up the stairs." },
    { verb: "go on", explanation: "'Go on' means to continue. He continued shouting to make himself known." },
    { verb: "come down", explanation: "'Come down' means to move downwards. He was allowed to descend from the attic safely." },
    { verb: "go on out", explanation: "'Go on out' is a variation of leaving, but 'come down' fits the attic context better." }
  ],
  correctAnswers: {
    a: "look out",
    b: "take to",
    c: "rush up",
    d: "go on",
    e: "come down"
  }
};

const question17: Question = {
  id: 17,
  paragraph: "Dressed like a ragpicker, the old winged man looked miserable; age and mud [[a]] any grandeur. Pelayo and Elisenda [[b]] him closely, [[c]] courage, and spoke. He answered strangely. They assumed he was a castaway [[d]] from a wreck and [[e]] a neighbour for help.",
  options: [
    { verb: "take away", explanation: "'Take away' means to remove. The harsh conditions had removed any sense of grandeur from the man." },
    { verb: "look at", explanation: "'Look at' means to direct one's gaze. They examined him closely." },
    { verb: "get up", explanation: "'Get up' can mean to summon or collect. They summoned the courage to speak to him." },
    { verb: "come back", explanation: "'Come back' means to return. They thought he was a survivor returning from a shipwreck." },
    { verb: "call in", explanation: "'Call in' means to ask someone to come and help. They asked their neighbour for advice." },
    { verb: "go out", explanation: "'Go out' means to leave, which doesn't fit the context of summoning courage or returning from a wreck." }
  ],
  correctAnswers: {
    a: "take away",
    b: "look at",
    c: "get up",
    d: "come back",
    e: "call in"
  }
};

const question18: Question = {
  id: 18,
  paragraph: "News of the angel spread fast, [[a]] peace. Crowds were [[b]] by troops. Pelayo fenced the yard, [[c]] entry, and charged visitors. Invalids came seeking cures. Exhausted but rich, the couple kept [[d]] late, while pilgrims were [[e]] in endless lines for days together.",
  options: [
    { verb: "knock down", explanation: "'Knock down' can mean to destroy or demolish. The sudden fame destroyed the quiet peace of their lives." },
    { verb: "watch over", explanation: "'Watch over' means to guard or monitor. Troops were called to monitor the large crowds." },
    { verb: "lock up", explanation: "'Lock up' means to secure or restrict. Pelayo restricted entry to the yard to charge money." },
    { verb: "go to bed", explanation: "'Go to bed' means to retire for the night. They stayed awake late due to the visitors." },
    { verb: "drag out", explanation: "'Drag out' means to prolong or extend. The lines of pilgrims stretched out for long periods." },
    { verb: "call in", explanation: "'Call in' means to request assistance, which was already used for the neighbour." }
  ],
  correctAnswers: {
    a: "knock down",
    b: "watch over",
    c: "lock up",
    d: "go to bed",
    e: "drag out"
  }
};

const question19: Question = {
  id: 19,
  paragraph: "The child [[a]] healthy, and pity replaced fear. They planned to send the angel away, but hope [[b]] mercy. The angel was [[c]] in a coop. At dawn they [[d]] and saw crowds. Visitors [[e]] a show, treating him like a circus animal.",
  options: [
    { verb: "woke up", explanation: "'Woke up' means to stop sleeping. The child recovered and woke up in good health." },
    { verb: "took away", explanation: "'Took away' means to remove. Their hope for profit removed their sense of mercy." },
    { verb: "locked up", explanation: "'Locked up' means to confine. The angel was confined in a chicken coop." },
    { verb: "went out", explanation: "'Went out' means to leave the house. They stepped outside at dawn." },
    { verb: "put on", explanation: "'Put on' means to stage or present. The situation became a public spectacle or 'show'." },
    { verb: "look at", explanation: "'Look at' means to observe, which is less specific than the actions of waking up or confining." }
  ],
  correctAnswers: {
    a: "woke up",
    b: "took away",
    c: "locked up",
    d: "went out",
    e: "put on"
  }
};

export const pages: PageData[] = [
  {
    id: 1,
    title: "PHRASAL VERBS",
    subtitle: "A Piece of the String",
    questions: [question1, question2, question3, question4, question5]
  },
  {
    id: 2,
    title: "THE WAR",
    subtitle: "Complete the paragraph using appropriate forms of the phrasal verbs",
    questions: [question6, question7, question8, question9]
  },
  {
    id: 3,
    title: "PHRASAL VERBS - Padman",
    subtitle: "Complete the paragraph using appropriate forms of the phrasal verbs",
    questions: [question10, question11, question12, question13]
  },
  {
    id: 4,
    title: "THE WAR - The Pianist",
    subtitle: "Complete the paragraph using appropriate forms of the phrasal verbs",
    questions: [question14, question15, question16]
  },
  {
    id: 5,
    title: "A Very Old Man with Enormous Wings",
    subtitle: "Complete the paragraph using appropriate forms of the phrasal verbs",
    questions: [question17, question18, question19]
  }
];
