import React, { useState } from "react";

const RandomWordGenerator = () => {
  const subjects = [
    // People
    "The teacher",
    "My friend",
    "The student",
    "The doctor",
    "The chef",
    "The artist",
    "The musician",
    "The writer",
    "The engineer",
    "The scientist",
    "The athlete",
    "The actor",
    "The dancer",
    "The programmer",
    "The photographer",
    "The pilot",
    "The farmer",
    "The nurse",
    "The architect",
    "The dentist",
    "The lawyer",
    "The mechanic",
    "The painter",
    "The poet",
    "The designer",
    "The baker",
    "The carpenter",
    "The plumber",
    "The electrician",
    "The gardener",
    // Family members
    "My mother",
    "My father",
    "My sister",
    "My brother",
    "My grandmother",
    "My grandfather",
    "My aunt",
    "My uncle",
    "My cousin",
    "My niece",
    // Animals
    "The dog",
    "The cat",
    "The bird",
    "The fish",
    "The hamster",
    "The rabbit",
    "The horse",
    "The elephant",
    "The lion",
    "The tiger",
    // Groups
    "The team",
    "The class",
    "The family",
    "The group",
    "The band",
    "The orchestra",
    "The choir",
    "The committee",
    "The council",
    "The crew",
  ];

  const adverbs = [
    // Manner
    "quickly",
    "slowly",
    "carefully",
    "carelessly",
    "quietly",
    "loudly",
    "gently",
    "roughly",
    "smoothly",
    "awkwardly",
    "gracefully",
    "clumsily",
    "eagerly",
    "reluctantly",
    "happily",
    "sadly",
    "angrily",
    "cheerfully",
    "poorly",
    "well",
    // Time
    "immediately",
    "eventually",
    "finally",
    "already",
    "recently",
    "lately",
    "suddenly",
    "previously",
    "currently",
    "presently",
    // Frequency
    "always",
    "usually",
    "normally",
    "often",
    "sometimes",
    "occasionally",
    "rarely",
    "seldom",
    "never",
    "frequently",
    // Degree
    "completely",
    "partially",
    "totally",
    "entirely",
    "absolutely",
    "almost",
    "nearly",
    "hardly",
    "barely",
    "scarcely",
  ];

  const objects = [
    // Physical Objects
    "the book",
    "the phone",
    "the computer",
    "the chair",
    "the table",
    "the desk",
    "the bed",
    "the door",
    "the window",
    "the clock",
    "the lamp",
    "the television",
    "the radio",
    "the camera",
    "the bicycle",
    "the car",
    "the bus",
    "the train",
    "the plane",
    "the boat",
    // Food and Drinks
    "the apple",
    "the banana",
    "the orange",
    "the sandwich",
    "the pizza",
    "the burger",
    "the salad",
    "the soup",
    "the pasta",
    "the rice",
    // Places
    "the house",
    "the apartment",
    "the office",
    "the school",
    "the hospital",
    "the store",
    "the restaurant",
    "the library",
    "the park",
    "the garden",
    // Abstract Objects
    "the idea",
    "the thought",
    "the dream",
    "the memory",
    "the story",
    "the song",
    "the movie",
    "the picture",
    "the painting",
    "the photograph",
  ];

  const [currentSubject, setCurrentSubject] = useState("");
  const [currentAdverb, setCurrentAdverb] = useState("");
  const [currentObject, setCurrentObject] = useState("");
  const [exampleSentence, setExampleSentence] = useState("");

  const generateNewWords = () => {
    const newSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const newAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    const newObject = objects[Math.floor(Math.random() * objects.length)];

    setCurrentSubject(newSubject);
    setCurrentAdverb(newAdverb);
    setCurrentObject(newObject);
    setExampleSentence("");
  };

  const showExampleSentence = () => {
    if (currentSubject && currentAdverb && currentObject) {
      const verbs = [
        "read",
        "opened",
        "watched",
        "finished",
        "studied",
        "examined",
        "observed",
        "investigated",
        "analyzed",
        "reviewed",
        "inspected",
        "considered",
        "evaluated",
        "found",
        "noticed",
        "saw",
        "heard",
      ];
      const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
      setExampleSentence(
        `${currentSubject} ${randomVerb} ${currentAdverb} ${currentObject}.`
      );
    }
  };

  React.useEffect(() => {
    if (!currentSubject) {
      generateNewWords();
    }
  }, [currentSubject]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        ESL Sentence Builder
      </h2>

      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-bold text-sm text-gray-500 mb-2">SUBJECT</h3>
            <p className="text-lg font-medium text-blue-800">
              {currentSubject}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="font-bold text-sm text-gray-500 mb-2">ADVERB</h3>
            <p className="text-lg font-medium text-green-800">
              {currentAdverb}
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-bold text-sm text-gray-500 mb-2">OBJECT</h3>
            <p className="text-lg font-medium text-purple-800">
              {currentObject}
            </p>
          </div>
        </div>
      </div>

      {exampleSentence && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-md">
          <h3 className="font-bold text-sm text-gray-500 mb-2">
            EXAMPLE SENTENCE
          </h3>
          <p className="text-lg italic">{exampleSentence}</p>
        </div>
      )}

      <div className="flex space-x-4">
        <button
          onClick={generateNewWords}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex-1 transition duration-200"
        >
          Generate New Words
        </button>

        <button
          onClick={showExampleSentence}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md flex-1 transition duration-200"
          disabled={!currentSubject}
        >
          Show Example
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2">
          <strong>Instructions:</strong> Generate random words and create your
          own sentences using these words. Click "Generate New Words" for new
          options.
        </p>
        <p>
          Example pattern:{" "}
          <span className="italic">
            [Subject] + [verb] + [adverb] + [object]
          </span>
        </p>
      </div>
    </div>
  );
};

export default RandomWordGenerator;
