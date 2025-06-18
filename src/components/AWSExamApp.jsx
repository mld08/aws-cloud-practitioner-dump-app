import { useState, useEffect, useCallback } from 'react';
import { Clock, CheckCircle, XCircle, RotateCcw, Trophy, AlertCircle } from 'lucide-react';
import { examQuestions } from '../data/examQuestions3';

const EXAM_DURATION = 120 * 60; // 2 heures en secondes
const TOTAL_QUESTIONS = 65;
const PASSING_SCORE = 75;

export default function AWSExamApp() {
  const [gameState, setGameState] = useState('start'); // start, exam, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [questionBank, setquestionBank] = useState([]);
  const [score, setScore] = useState(0);

  // Générer des questions aléatoires
  const generateRandomQuestions = useCallback(() => {
    const shuffled = [...examQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, TOTAL_QUESTIONS);
  }, []);

  // Démarrer l'examen
  const startExam = () => {
    const randomQuestions = generateRandomQuestions();
    setquestionBank(randomQuestions); // ← utilise les 65 sélectionnées
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(EXAM_DURATION);
    setGameState('exam');
  };


  //Timer
  useEffect(() => {
    if (gameState === 'exam' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Temps écoulé, soumettre automatiquement
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState, timeLeft ]);

  // Formater le temps
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Sélectionner une réponse
  /*const selectAnswer = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };*/
  // Sélectionner une réponse (supporte plusieurs réponses)
  const selectAnswer = (questionId, answerIndex) => {
    const question = questionBank.find(q => q.id === questionId);
    const maxAnswers = question.maxAnswers || 1; // Par défaut 1

    setSelectedAnswers(prev => {
      const current = prev[questionId] || [];
      // Si la question n'autorise qu'une seule réponse
      if (maxAnswers === 1) {
        return {
          ...prev,
          [questionId]: [answerIndex]
        };
      }
      // Si déjà sélectionné, on retire
      if (current.includes(answerIndex)) {
        return {
          ...prev,
          [questionId]: current.filter(idx => idx !== answerIndex)
        };
      }
      // Si pas encore atteint la limite, on ajoute
      if (current.length < maxAnswers) {
        return {
          ...prev,
          [questionId]: [...current, answerIndex]
        };
      }
      // Si limite atteinte, on ignore ou on remplace le plus ancien (optionnel)
      return prev;
    });
  };

  // Navigation
  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const nextQuestion = () => {
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Soumettre l'examen
  const submitExam = () => {
    let correctAnswers = 0;
    questionBank.forEach(question => {
      /*if (selectedAnswers[question.id] === question.correct) {
        correctAnswers++;
      }*/
      const selected = selectedAnswers[question.id] || [];
      const correct = question.correct || [];

      if (
        Array.isArray(correct) &&
        Array.isArray(selected) &&
        correct.length === selected.length &&
        correct.every(ans => selected.includes(ans))
      ) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / TOTAL_QUESTIONS) * 100);
    setScore(finalScore);
    setGameState('results');
  };

  // Redémarrer
  const restartExam = () => {
    setGameState('start');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(0);
    setTimeLeft(EXAM_DURATION);
  };

  // Initialiser les questions
  useEffect(() => {
    setquestionBank(questionBank);
  }, []);

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              AWS Cloud Practitioner
            </h1>
            <p className="text-xl text-gray-600">Simulateur d'Examen</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conditions d'examen</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Durée: 2 heures</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">65 questions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Score requis: 75%</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Questions aléatoires</span>
              </div>
            </div>
          </div>

          <button
            onClick={startExam}
            className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:from-orange-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Commencer l'examen
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    const passed = score >= PASSING_SCORE;
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${passed ? 'bg-green-100' : 'bg-red-100'
              }`}>
              {passed ?
                <CheckCircle className="w-12 h-12 text-green-600" /> :
                <XCircle className="w-12 h-12 text-red-600" />
              }
            </div>

            <h1 className={`text-4xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-red-600'
              }`}>
              {passed ? 'Félicitations !' : 'Échec'}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {passed ? 'Vous avez réussi l\'examen !' : 'Vous devez réviser et repasser l\'examen.'}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="text-6xl font-bold text-gray-800 mb-2">{score}%</div>
            <div className="text-gray-600 mb-4">
              {Math.round((score / 100) * TOTAL_QUESTIONS)} / {TOTAL_QUESTIONS} questions correctes
            </div>
            <div className={`text-sm font-medium ${passed ? 'text-green-600' : 'text-red-600'
              }`}>
              Score requis: {PASSING_SCORE}%
            </div>
          </div>

          <button
            onClick={restartExam}
            className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:from-orange-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <RotateCcw className="w-5 h-5 inline mr-2" />
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questionBank[currentQuestion];
  const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">AWS Cloud Practitioner</h1>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className={`font-mono text-lg font-semibold ${timeLeft < 600 ? 'text-red-600' : 'text-gray-700'
                }`}>
                {formatTime(timeLeft)}
              </span>
            </div>

            <div className="text-gray-600">
              Question {currentQuestion + 1} / {TOTAL_QUESTIONS}
            </div>

            <div className="text-gray-600">
              Répondues: {answeredCount} / {TOTAL_QUESTIONS}
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="max-w-6xl mx-auto mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-4 gap-6">
        {/* Navigation des questions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-4 sticky top-6">
            <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {questionBank.map((_ ,index)=>{
                const correct = questionBank[index]?.correct || [];
                const selected = selectedAnswers[questionBank[index]?.id] || []
                // console.log({"correct": correct} , {"selected" :selected})
                const red = correct.length > 0 && selected.length > 0 && !correct.every(ans => selected.includes(ans));
                console.log({"red": red})
                // const checked = false
                return (

                <button
                  key={index}
                  onClick={() => goToQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${index === currentQuestion
                    ? 'bg-blue-600 text-white shadow-lg'
                    : selectedAnswers[questionBank[index]?.id] !== undefined && !red
                      ? `  ' bg-green-100 text-green-700 hover:bg-green-200 ' `
                      : `${!red ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}
                      `
                    }`}
                >
                  {index + 1}
                </button>
              )
              })}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span className="text-gray-600">Question actuelle</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border-2 border-green-200 rounded"></div>
                <span className="text-gray-600">Répondue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-100 border-2 border-gray-200 rounded"></div>
                <span className="text-gray-600">Non répondue</span>
              </div>
            </div>

            <button
              onClick={submitExam}
              className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg"
            >
              Terminer l'examen
            </button>
          </div>
        </div>

        {/* Question principale */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {currentQ && (
              <>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {currentQ.domain}
                    </span>
                    <span className="text-gray-500 text-sm">
                      Question {currentQuestion + 1} sur {TOTAL_QUESTIONS}
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 leading-relaxed">
                    {currentQ.question}
                  </h2>
                </div>

                <div className="space-y-4 mb-8">

                  {/* {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => selectAnswer(currentQ.id, index)}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${selectedAnswers[currentQ.id] === index
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswers[currentQ.id] === index
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                          }`}>
                          {selectedAnswers[currentQ.id] === index && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </div>
                    </button>
                    // ...existing code...

                  ))} */}
                  {currentQ.options.map((option, index) => {
                    const isSelected = (selectedAnswers[currentQ.id] || []).includes(index);

                    return (
                      <button
                        key={index}
                        onClick={() => selectAnswer(currentQ.id, index)}
                        className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${isSelected
                            ? 'border-blue-500 bg-blue-50 text-blue-800'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                          }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                              }`}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span className="font-medium">
                            {String.fromCharCode(65 + index)}. {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}

                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    ← Précédent
                  </button>

                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestion === questionBank.length - 1}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Suivant →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}