import { useState, useEffect, useCallback } from 'react';
import { Clock, CheckCircle, XCircle, RotateCcw, Trophy, AlertCircle } from 'lucide-react';

const examQuestions = [
  {
    id: 1,
    question: "Quel service AWS permet de créer et gérer des machines virtuelles dans le cloud ?",
    options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "Amazon Lambda"],
    correct: 1,
    domain: "Compute"
  },
  {
    id: 2,
    question: "Quel est le principal avantage du modèle de tarification 'Pay-as-you-go' d'AWS ?",
    options: ["Coûts fixes prévisibles", "Pas de coûts initiaux élevés", "Tarifs réduits garantis", "Support technique inclus"],
    correct: 1,
    domain: "Billing"
  },
  {
    id: 3,
    question: "Amazon S3 est principalement utilisé pour :",
    options: ["Le calcul haute performance", "Le stockage d'objets", "Les bases de données relationnelles", "Les réseaux privés virtuels"],
    correct: 1,
    domain: "Storage"
  },
  {
    id: 4,
    question: "Qu'est-ce qu'une région AWS ?",
    options: ["Un seul data center", "Un groupe de zones de disponibilité", "Un service cloud spécifique", "Un type d'instance EC2"],
    correct: 1,
    domain: "Global Infrastructure"
  },
  {
    id: 5,
    question: "Quel service AWS permet de surveiller les ressources et applications ?",
    options: ["Amazon CloudWatch", "Amazon Inspector", "AWS Config", "Amazon GuardDuty"],
    correct: 0,
    domain: "Monitoring"
  },
  {
    id: 6,
    question: "AWS Lambda est un service de :",
    options: ["Stockage de fichiers", "Informatique sans serveur", "Base de données", "Réseau de diffusion de contenu"],
    correct: 1,
    domain: "Compute"
  },
  {
    id: 7,
    question: "Quel service AWS offre un réseau de diffusion de contenu (CDN) ?",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "Amazon VPC"],
    correct: 1,
    domain: "Networking"
  },
  {
    id: 8,
    question: "La responsabilité de la sécurité physique des centres de données AWS incombe à :",
    options: ["Le client", "AWS", "Les deux parties", "Un tiers prestataire"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 9,
    question: "Amazon RDS est utilisé pour :",
    options: ["Le stockage d'objets", "Les bases de données relationnelles", "Le calcul sans serveur", "La diffusion de contenu"],
    correct: 1,
    domain: "Database"
  },
  {
    id: 10,
    question: "Quel est l'avantage principal du cloud computing par rapport à l'infrastructure sur site ?",
    options: ["Sécurité renforcée", "Élasticité et mise à l'échelle", "Coûts toujours plus bas", "Contrôle total du matériel"],
    correct: 1,
    domain: "Cloud Concepts"
  },
  {
    id: 11,
    question: "AWS Identity and Access Management (IAM) permet de :",
    options: ["Stocker des fichiers", "Gérer les accès et permissions", "Surveiller les performances", "Créer des réseaux"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 12,
    question: "Quelle est la durée minimale de facturation pour une instance EC2 ?",
    options: ["1 minute", "1 heure", "1 jour", "1 mois"],
    correct: 0,
    domain: "Billing"
  },
  {
    id: 13,
    question: "Amazon VPC permet de :",
    options: ["Créer un réseau virtuel privé", "Stocker des données", "Exécuter du code", "Surveiller les applications"],
    correct: 0,
    domain: "Networking"
  },
  {
    id: 14,
    question: "Quel service AWS offre une sauvegarde automatique pour les bases de données ?",
    options: ["Amazon S3", "Amazon RDS", "Amazon EC2", "Amazon Lambda"],
    correct: 1,
    domain: "Database"
  },
  {
    id: 15,
    question: "Le modèle de responsabilité partagée AWS signifie que :",
    options: ["AWS gère tout", "Le client gère tout", "Les responsabilités sont partagées", "Seule la sécurité est partagée"],
    correct: 2,
    domain: "Security"
  },
  {
    id: 16,
    question: "Amazon CloudFormation permet de :",
    options: ["Surveiller les ressources", "Déployer l'infrastructure comme code", "Gérer les utilisateurs", "Stocker des fichiers"],
    correct: 1,
    domain: "Management"
  },
  {
    id: 17,
    question: "Quel service AWS permet l'analyse de données en temps réel ?",
    options: ["Amazon S3", "Amazon Kinesis", "Amazon EC2", "Amazon VPC"],
    correct: 1,
    domain: "Analytics"
  },
  {
    id: 18,
    question: "Les zones de disponibilité AWS sont :",
    options: ["Des régions différentes", "Des data centers isolés dans une région", "Des services cloud", "Des types d'instances"],
    correct: 1,
    domain: "Global Infrastructure"
  },
  {
    id: 19,
    question: "AWS Trusted Advisor fournit :",
    options: ["Des recommandations d'optimisation", "Du stockage de fichiers", "Des machines virtuelles", "Des bases de données"],
    correct: 0,
    domain: "Support"
  },
  {
    id: 20,
    question: "Amazon DynamoDB est une base de données :",
    options: ["Relationnelle", "NoSQL", "En mémoire", "Graphique"],
    correct: 1,
    domain: "Database"
  },
  {
    id: 21,
    question: "Le principe de moindre privilège en sécurité AWS signifie :",
    options: ["Donner tous les accès", "Donner le minimum d'accès nécessaire", "Refuser tous les accès", "Donner des accès temporaires"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 22,
    question: "Amazon EBS fournit :",
    options: ["Du stockage en bloc", "Du stockage d'objets", "Des bases de données", "Des réseaux"],
    correct: 0,
    domain: "Storage"
  },
  {
    id: 23,
    question: "AWS Auto Scaling permet de :",
    options: ["Réduire les coûts uniquement", "Ajuster automatiquement la capacité", "Surveiller les applications", "Gérer les utilisateurs"],
    correct: 1,
    domain: "Compute"
  },
  {
    id: 24,
    question: "Quel service AWS permet de créer des API ?",
    options: ["Amazon S3", "Amazon API Gateway", "Amazon EC2", "Amazon RDS"],
    correct: 1,
    domain: "Application Integration"
  },
  {
    id: 25,
    question: "La haute disponibilité dans AWS est obtenue grâce à :",
    options: ["Une seule zone de disponibilité", "Plusieurs zones de disponibilité", "Un seul data center", "Des instances plus puissantes"],
    correct: 1,
    domain: "Architecture"
  },
  {
    id: 26,
    question: "AWS Support propose combien de niveaux de support ?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    domain: "Support"
  },
  {
    id: 27,
    question: "Amazon SNS est utilisé pour :",
    options: ["Le stockage", "Les notifications", "Le calcul", "Les bases de données"],
    correct: 1,
    domain: "Application Integration"
  },
  {
    id: 28,
    question: "L'Elastic Load Balancer (ELB) distribue :",
    options: ["Les données", "Le trafic réseau", "Les utilisateurs", "Les coûts"],
    correct: 1,
    domain: "Networking"
  },
  {
    id: 29,
    question: "AWS CloudTrail enregistre :",
    options: ["Les performances", "Les activités API", "Les erreurs", "Les coûts"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 30,
    question: "Amazon Glacier est optimisé pour :",
    options: ["L'accès fréquent", "L'archivage long terme", "Les bases de données", "Le calcul haute performance"],
    correct: 1,
    domain: "Storage"
  },
  {
    id: 31,
    question: "AWS Well-Architected Framework comprend combien de piliers ?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    domain: "Architecture"
  },
  {
    id: 32,
    question: "Amazon Route 53 est un service de :",
    options: ["Stockage", "DNS", "Calcul", "Base de données"],
    correct: 1,
    domain: "Networking"
  },
  {
    id: 33,
    question: "AWS Cost Explorer permet de :",
    options: ["Créer des ressources", "Analyser les coûts", "Gérer les utilisateurs", "Surveiller les performances"],
    correct: 1,
    domain: "Billing"
  },
  {
    id: 34,
    question: "Amazon SQS est un service de :",
    options: ["Base de données", "File d'attente de messages", "Stockage", "Calcul"],
    correct: 1,
    domain: "Application Integration"
  },
  {
    id: 35,
    question: "Le chiffrement au repos dans AWS peut être géré par :",
    options: ["Le client uniquement", "AWS uniquement", "AWS ou le client", "Un tiers uniquement"],
    correct: 2,
    domain: "Security"
  },
  {
    id: 36,
    question: "Amazon Redshift est optimisé pour :",
    options: ["Les transactions OLTP", "L'analyse de données (OLAP)", "Le stockage d'objets", "Le calcul distribué"],
    correct: 1,
    domain: "Analytics"
  },
  {
    id: 37,
    question: "AWS Organizations permet de :",
    options: ["Créer des instances", "Gérer plusieurs comptes AWS", "Stocker des fichiers", "Analyser les performances"],
    correct: 1,
    domain: "Management"
  },
  {
    id: 38,
    question: "L'avantage des Reserved Instances est :",
    options: ["Plus de performances", "Réduction des coûts", "Plus de stockage", "Meilleure sécurité"],
    correct: 1,
    domain: "Billing"
  },
  {
    id: 39,
    question: "Amazon ElastiCache fournit :",
    options: ["Du stockage persistant", "De la mise en cache en mémoire", "Des bases de données relationnelles", "Du calcul sans serveur"],
    correct: 1,
    domain: "Database"
  },
  {
    id: 40,
    question: "AWS Direct Connect offre :",
    options: ["Une connexion Internet publique", "Une connexion réseau dédiée", "Du stockage en nuage", "Des instances virtuelles"],
    correct: 1,
    domain: "Networking"
  },
  {
    id: 41,
    question: "Le tag en AWS permet de :",
    options: ["Améliorer les performances", "Organiser et gérer les ressources", "Chiffrer les données", "Créer des sauvegardes"],
    correct: 1,
    domain: "Management"
  },
  {
    id: 42,
    question: "Amazon EMR est utilisé pour :",
    options: ["Le stockage d'objets", "Le traitement de big data", "Les bases de données relationnelles", "La diffusion de contenu"],
    correct: 1,
    domain: "Analytics"
  },
  {
    id: 43,
    question: "AWS Shield protège contre :",
    options: ["Les virus", "Les attaques DDoS", "Les accès non autorisés", "La perte de données"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 44,
    question: "Amazon WorkSpaces fournit :",
    options: ["Du stockage cloud", "Des bureaux virtuels", "Des bases de données", "Du calcul haute performance"],
    correct: 1,
    domain: "End User Computing"
  },
  {
    id: 45,
    question: "AWS Config permet de :",
    options: ["Créer des instances", "Auditer la configuration des ressources", "Gérer les coûts", "Stocker des fichiers"],
    correct: 1,
    domain: "Management"
  },
  {
    id: 46,
    question: "La facturation AWS est basée sur :",
    options: ["L'utilisation réelle", "Des forfaits mensuels", "Le nombre d'utilisateurs", "La taille de l'entreprise"],
    correct: 0,
    domain: "Billing"
  },
  {
    id: 47,
    question: "Amazon Cognito gère :",
    options: ["Les instances EC2", "L'authentification des utilisateurs", "Le stockage de fichiers", "Les réseaux virtuels"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 48,
    question: "AWS X-Ray permet de :",
    options: ["Stocker des données", "Tracer et déboguer les applications", "Gérer les utilisateurs", "Créer des réseaux"],
    correct: 2,
    domain: "Developer Tools"
  },
  {
    id: 49,
    question: "Amazon Athena permet de :",
    options: ["Créer des bases de données", "Analyser des données avec SQL", "Gérer des instances", "Surveiller les applications"],
    correct: 1,
    domain: "Analytics"
  },
  {
    id: 50,
    question: "AWS Batch est utilisé pour :",
    options: ["Le stockage en lot", "Le traitement par lots", "La sauvegarde", "La surveillance"],
    correct: 1,
    domain: "Compute"
  },
  {
    id: 51,
    question: "Amazon Macie détecte :",
    options: ["Les erreurs de configuration", "Les données sensibles", "Les attaques réseau", "Les problèmes de performance"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 52,
    question: "AWS Step Functions orchestre :",
    options: ["Les utilisateurs", "Les workflows d'applications", "Les réseaux", "Les coûts"],
    correct: 1,
    domain: "Application Integration"
  },
  {
    id: 53,
    question: "Amazon QuickSight est un outil de :",
    options: ["Développement", "Business Intelligence", "Sécurité", "Sauvegarde"],
    correct: 1,
    domain: "Analytics"
  },
  {
    id: 54,
    question: "AWS Systems Manager permet de :",
    options: ["Créer des applications", "Gérer l'infrastructure", "Analyser les coûts", "Stocker des fichiers"],
    correct: 1,
    domain: "Management"
  },
  {
    id: 55,
    question: "Amazon Lightsail offre :",
    options: ["Des instances complexes", "Des solutions cloud simplifiées", "Uniquement du stockage", "Des bases de données avancées"],
    correct: 1,
    domain: "Compute"
  },
  {
    id: 56,
    question: "AWS Personal Health Dashboard affiche :",
    options: ["Les coûts personnalisés", "L'état de santé des services AWS", "Les performances des applications", "Les configurations de sécurité"],
    correct: 1,
    domain: "Support"
  },
  {
    id: 57,
    question: "Amazon Inspector effectue :",
    options: ["Des sauvegardes", "Des évaluations de sécurité", "De la surveillance réseau", "De l'analyse de coûts"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 58,
    question: "AWS Fargate permet de :",
    options: ["Gérer des serveurs", "Exécuter des conteneurs sans serveur", "Stocker des données", "Analyser des logs"],
    correct: 1,
    domain: "Compute"
  },
  {
    id: 59,
    question: "Amazon Connect est un service de :",
    options: ["Réseau", "Centre de contact cloud", "Base de données", "Stockage"],
    correct: 1,
    domain: "Customer Engagement"
  },
  {
    id: 60,
    question: "AWS Transit Gateway connecte :",
    options: ["Les utilisateurs", "Les VPCs et réseaux on-premises", "Les applications", "Les bases de données"],
    correct: 1,
    domain: "Networking"
  },
  {
    id: 61,
    question: "Amazon DocumentDB est compatible avec :",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    correct: 1,
    domain: "Database"
  },
  {
    id: 62,
    question: "AWS DataSync permet de :",
    options: ["Synchroniser les utilisateurs", "Transférer des données", "Gérer les coûts", "Surveiller les applications"],
    correct: 1,
    domain: "Storage"
  },
  {
    id: 63,
    question: "Amazon Forecast utilise :",
    options: ["L'intelligence artificielle", "L'apprentissage automatique", "Les deux", "Aucun des deux"],
    correct: 2,
    domain: "Machine Learning"
  },
  {
    id: 64,
    question: "AWS Control Tower aide à :",
    options: ["Développer des applications", "Configurer un environnement multi-comptes", "Analyser les performances", "Gérer les coûts"],
    correct: 1,
    domain: "Management"
  },
  {
    id: 65,
    question: "Le Free Tier AWS inclut :",
    options: ["Tous les services", "Certains services avec des limites", "Uniquement EC2", "Uniquement S3"],
    correct: 1,
    domain: "Billing"
  },
  {
    id: 66,
    question: "Amazon Neptune est une base de données :",
    options: ["Relationnelle", "NoSQL", "Graphique", "En mémoire"],
    correct: 2,
    domain: "Database"
  },
  {
    id: 67,
    question: "AWS Secrets Manager gère :",
    options: ["Les coûts", "Les secrets et mots de passe", "Les performances", "Les sauvegardes"],
    correct: 1,
    domain: "Security"
  },
  {
    id: 68,
    question: "Amazon Textract extrait :",
    options: ["Des métriques de performance", "Du texte et des données de documents", "Des logs d'application", "Des configurations"],
    correct: 1,
    domain: "Machine Learning"
  },
  {
    id: 69,
    question: "AWS Glue est un service de :",
    options: ["Stockage", "ETL (Extract, Transform, Load)", "Calcul", "Surveillance"],
    correct: 1,
    domain: "Analytics"
  },
  {
    id: 70,
    question: "Amazon Polly convertit :",
    options: ["Images en texte", "Texte en parole", "Parole en texte", "Données en graphiques"],
    correct: 1,
    domain: "Machine Learning"
  }
];

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


  // Timer
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
  }, [gameState, timeLeft]);

  // Formater le temps
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Sélectionner une réponse
  const selectAnswer = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
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
      if (selectedAnswers[question.id] === question.correct) {
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
              {questionBank.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${index === currentQuestion
                    ? 'bg-blue-600 text-white shadow-lg'
                    : selectedAnswers[questionBank[index]?.id] !== undefined
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {index + 1}
                </button>
              ))}
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
                  {currentQ.options.map((option, index) => (
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
                  ))}
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