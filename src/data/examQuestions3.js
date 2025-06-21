export const examQuestions = [
  {
    "id": 1,
    "question": "Une entreprise prévoit d'utiliser un appareil Amazon Snowball Edge pour transférer des fichiers vers le cloud AWS. Quelles activités liées à un appareil Snowball Edge sont disponibles gratuitement pour l'entreprise ?",
    "options": [
      "Utilisation de l'appareil Snowball Edge pendant une période de 10 jours",
      "Le transfert de données hors d'Amazon S3 vers l'appliance Snowball Edge",
      "Le transfert de données de l'appliance Snowball Edge vers Amazon S3",
      "Utilisation quotidienne de l'appareil Snowball Edge après 10 jours"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 2,
    "question": "Une entreprise a déployé des applications sur des instances Amazon EC2. Elle doit évaluer les vulnérabilités de ses applications et identifier les déploiements d'infrastructure non conformes aux bonnes pratiques. Quel service AWS peut-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 3,
    "question": "Une entreprise dispose d'un groupe centralisé d'utilisateurs dont les besoins en stockage de fichiers volumineux dépassent l'espace disponible sur site. Elle souhaite étendre ses capacités de stockage de fichiers pour ce groupe tout en conservant les avantages du partage de contenu local en termes de performances. Quelle est la solution AWS la plus performante sur le plan opérationnel pour ce scénario ?",
    "options": [
      "Créez un compartiment Amazon S3 pour chaque utilisateur. Montez chaque compartiment à l'aide d'un utilitaire de montage de système de fichiers S3.",
      "Configurez et déployez une passerelle de fichiers AWS Storage Gateway. Connectez le poste de travail de chaque utilisateur à la passerelle de fichiers.",
      "Déplacez l'environnement de travail de chaque utilisateur vers Amazon WorkSpaces. Créez un compte Amazon WorkDocs pour chaque utilisateur.",
      "Déployez une instance Amazon EC2 et attachez-lui un volume IOPS provisionné Amazon Elastic Block Store (Amazon EBS). Partagez le volume EBS directement avec les utilisateurs."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 4,
    "question": "Conformément aux meilleures pratiques de sécurité, comment une instance Amazon EC2 doit-elle avoir accès à un compartiment Amazon S3 ?",
    "options": [
      "Codez en dur la clé secrète et la clé d'accès d'un utilisateur IAM directement dans l'application, puis téléchargez le fichier.",
      "Stockez la clé secrète et la clé d'accès de l'utilisateur IAM dans un fichier texte sur l'instance EC2, lisez les clés, puis téléchargez le fichier.",
      "Demandez à l’instance EC2 d’assumer un rôle pour obtenir les privilèges nécessaires au téléchargement du fichier.",
      "Modifiez la politique du compartiment S3 afin que n’importe quel service puisse y télécharger à tout moment."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 5,
    "question": "Quelle option est une perspective qui inclut les capacités fondamentales de l’AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Durabilité",
      "Efficacité des performances",
      "Gouvernance",
      "Fiabilité"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 6,
    "question": "Une entreprise exploite et gère son propre environnement Docker sur des instances Amazon EC2. Elle recherche une alternative pour gérer la taille des clusters, la planification et la maintenance de l'environnement. Quel service AWS répond à ces exigences ?",
    "options": [
      "AWS Lambda",
      "Amazon RDS",
      "AWS Fargate",
      "Amazon Athena"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 7,
    "question": "Une entreprise souhaite exploiter une base de données NoSQL sur des instances Amazon EC2. Quelle tâche incombe à AWS dans ce scénario ?",
    "options": [
      "Mettre à jour le système d’exploitation invité des instances EC2.",
      "Maintenir une haute disponibilité au niveau de la couche de base de données.",
      "Corrigez l’infrastructure physique qui héberge les instances EC2.",
      "Configurer le pare-feu du groupe de sécurité."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 8,
    "question": "Quels services ou outils AWS peuvent identifier les opportunités de dimensionnement des instances Amazon EC2 ? (Choisissez deux options.)",
    "options": [
      "AWS Cost Explorer",
      "AWS Billing Conductor",
      "Amazon CodeGuru",
      "Amazon SageMaker", 
      "AWS Calcul Optimizer"
    ],
    "correct": [
      0, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 9,
    "question": "Parmi les avantages suivants, lesquels sont liés à l'utilisation d'AWS Trusted Advisor ? (Choisissez deux options.)",
    "options": [
      "Fournir une orchestration de conteneurs hautes performances",
      "Création et rotation des clés de chiffrement",
      "Détecter les ressources sous-utilisées pour réduire les coûts",
      "Améliorer la sécurité en surveillant de manière proactive l'environnement AWS",
      "Mise en œuvre du balisage forcé sur les ressources AWS"
    ],
    "correct": [
      2,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 10,
    "question": "Lequel des éléments suivants constitue un avantage dont bénéficient les utilisateurs lorsqu’ils déplacent des charges de travail sur site vers le cloud AWS ?",
    "options": [
      "Élimination des dépenses d'exploitation et de maintenance des centres de données",
      "Des remises de prix identiques à celles des fournisseurs de matériel",
      "Distribution de tous les contrôles opérationnels à AWS",
      "Élimination des dépenses opérationnelles"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 11,
    "question": "Une entreprise souhaite gérer ses services informatiques déployés et gouverner ses modèles d'infrastructure en tant que code (IaC). Quel service AWS répondra à cette exigence ?",
    "options": [
      "AWS Resource Explorer",
      "AWS Service Catalog",
      "AWS Organisations",
      "AWS Systems Manager"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 12,
    "question": "Quel service ou outil AWS aide les utilisateurs à visualiser, comprendre et gérer leurs dépenses et leur utilisation au fil du temps ?",
    "options": [
      "AWS Organizations",
      "Calculateur de prix AWS",
      "AWS Cost Explorer",
      "AWS Service Catalog"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 13,
    "question": "Une entreprise utilise une plateforme de données centralisée pour gérer plusieurs types de données pour ses clients. Elle souhaite utiliser les services AWS pour découvrir, transformer et visualiser les données. Quelle combinaison de services AWS l'entreprise devrait-elle utiliser pour répondre à ces besoins ? (Choisissez deux réponses.)",
    "options": [
      "AWS Glue",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Redshift",
      "Amazon QuickSight", 
      "Base de données Amazon Quantum Ledger (Amazon QLDB)"
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 14,
    "question": "Une entreprise internationale souhaite migrer ses applications tierces vers le cloud AWS. Elle souhaite bénéficier de l'aide d'une équipe internationale d'experts pour réaliser cette migration plus rapidement et de manière plus fiable, conformément aux bonnes pratiques internes  d'AWS. Quel service ou ressource AWS répondra à ces exigences ?",
    "options": [
      "Assistance AWS",
      "Services professionnels AWS",
      "Assistant de lancement AWS",
      "Services gérés AWS (AMS)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 15,
    "question": "Une plateforme d'apprentissage en ligne doit exécuter une application pendant deux mois par an. L'application sera déployée sur des instances Amazon EC2. Toute interruption de service doit être évitée pendant ces deux mois. Quelle option d'achat EC2 répondra le mieux à ces exigences ?",
    "options": [
      "Reserved Instances",
      "Dedicated Hosts",
      "Spot Instances",
      "On-Demand Instances"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 16,
    "question": "Un développeur souhaite déployer rapidement une application sur AWS sans créer manuellement les ressources nécessaires. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS CodeBuild",
      "Amazon Personalize"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 17,
    "question": "Une entreprise stocke des données clients sensibles dans un compartiment Amazon S3. Elle souhaite protéger ces données contre toute suppression ou écrasement accidentel. Quelle fonctionnalité S3 doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Règles du cycle de vie S3",
      "Gestion des versions S3",
      "Politiques de compartiment S3",
      "Cryptage côté serveur S3"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 18,
    "question": "Quel service AWS offre la possibilité de gérer l’infrastructure en tant que code ?",
    "options": [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS Direct Connect",
      "AWS CloudFormation"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 19,
    "question": "Une entreprise de jeux en ligne doit choisir une option d'achat pour exploiter ses instances Amazon EC2 pendant un an. Le trafic web est constant et toute augmentation de trafic est prévisible. Les instances EC2 doivent être en ligne et disponibles sans interruption. Quelle option d'achat d'instance EC2 répondra le mieux à ces exigences ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Spot Fleet"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 20,
    "question": "Quel service ou fonctionnalité AWS permet à un utilisateur d’établir une connexion réseau dédiée entre le centre de données sur site d’une entreprise et le cloud AWS ?",
    "options": [
      "AWS Direct Connect",
      "VPC Peering",
      "VPN AWS",
      "Amazon Route 53"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 21,
    "question": "Quelle option est un emplacement physique de l’infrastructure mondiale AWS ?",
    "options": [
      "AWS DataSync",
      "Région AWS",
      "Amazon Connect",
      "AWS Organizations"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 22,
    "question": "Une entreprise souhaite protéger ses informations, systèmes et actifs AWS Cloud tout en évaluant et en atténuant les risques. Quel pilier du cadre AWS Well-Architected est soutenu par ces objectifs ?",
    "options": [
      "Fiabilité",
      "Sécurité",
      "Excellence opérationnelle",
      "Efficacité des performances"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 23,
    "question": "Quel est l’intérêt d’avoir une passerelle Internet au sein d’un VPC ?",
    "options": [
      "Pour créer une connexion VPN au VPC",
      "Pour permettre la communication entre le VPC et Internet",
      "Imposer des contraintes de bande passante sur le trafic Internet",
      "Pour équilibrer la charge du trafic provenant d'Internet sur les instances Amazon EC2"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 24,
    "question": "Une entreprise exploite une application monolithique sur site, peu évolutive et difficile à maintenir. Elle prévoit de migrer l'application vers AWS et de la diviser en microservices. Quelle bonne pratique du framework AWS Well-Architected Framework l'entreprise suit-elle avec ce plan ?",
    "options": [
      "Intégrez les tests fonctionnels dans le cadre du déploiement AWS.",
      "Utilisez l’automatisation pour déployer les modifications.",
      "Déployez l’application sur plusieurs emplacements.",
      "Implémenter des dépendances faiblement couplées."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 25,
    "question": "Une entreprise possède un compte AWS. Elle souhaite auditer ses mots de passe et accéder aux informations de rotation des clés à des fins de conformité. Quel service ou outil AWS répondra à cette exigence ?",
    "options": [
      "IAM Access Analyzer",
      "AWS Artefact",
      "IAM Credential Report",
      "AWS Audit Manager"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 26,
    "question": "Une entreprise souhaite recevoir une notification lorsqu'un seuil de coût AWS spécifique est atteint. Quels services ou outils AWS peut-elle utiliser pour répondre à cette exigence ? (Choisissez deux réponses.)",
    "options": [
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Budgets",
      "AWS Cost Explorer",
      "Amazon CloudWatch",
      "Rapport sur les coûts et l'utilisation d'AWS"
    ],
    "correct": [
      1,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 27,
    "question": "Quel service ou ressource AWS fournit des réponses aux questions les plus fréquemment posées en matière de sécurité qu'AWS reçoit de ses utilisateurs ?",
    "options": [
      "AWS Artefact",
      "Amazon Connect",
      "Chatbot AWS",
      "Centre de connaissances AWS"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 28,
    "question": "Quelles tâches relèvent de la responsabilité du client, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.)",
    "options": [
      "Configurez le pare-feu du groupe de sécurité fourni par AWS.",
      "Classer les actifs de l'entreprise dans le cloud AWS.",
      "Déterminez les zones de disponibilité à utiliser pour les compartiments Amazon S3.",
      "Corrigez ou mettez à niveau Amazon DynamoDB.",
      "Sélectionnez les instances Amazon EC2 sur lesquelles exécuter AWS Lambda."
    ],
    "correct": [
      0,
      1
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 29,
    "question": "Lesquels des éléments suivants constituent les piliers du cadre AWS Well-Architected ? (Choisissez deux réponses.)",
    "options": [
      "Disponibilité",
      "Fiabilité",
      "Évolutivité",
      "Conception réactive ",
      "Excellence opérationnelle"
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 30,
    "question": "Quel service ou fonctionnalité AWS est utilisé pour envoyer des messages texte et des e-mails à partir d'applications distribuées ?",
    "options": [
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Email Service (Amazon SES)",
      "Alertes Amazon CloudWatch",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 31,
    "question": "Un utilisateur a besoin d'un accès programmatique aux ressources AWS via l'interface de ligne de commande AWS ou l'API AWS. Quelle option lui fournira l'accès approprié ?",
    "options": [
      "Amazon Inspector",
      "Clés d'accès",
      "Clés publiques SSH",
      "Clés AWS Key Management Service (AWS Key Management Service (AWS KMS))"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 32,
    "question": "Une entreprise exécute des milliers de simulations simultanées avec AWS Batch. Chaque simulation est sans état, tolérante aux pannes et dure jusqu'à 3 heures. Quel modèle de tarification permet à l'entreprise d'optimiser ses coûts et de répondre à ces exigences ?",
    "options": [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Instances dédiées"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 33,
    "question": "Que signifie le concept d'agilité dans le cloud computing AWS ? (Choisissez deux réponses.)",
    "options": [
      "La vitesse à laquelle les ressources AWS sont implémentées",
      "La vitesse à laquelle AWS crée de nouvelles régions AWS",
      "La capacité d'expérimenter rapidement",
      "L'élimination des capacités gaspillées", 
      "Le faible coût d'entrée dans le cloud computing"
    ],
    "correct": [
      0,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 34,
    "question": "Une entreprise doit bloquer les attaques par injection SQL. Quel service ou fonctionnalité AWS peut répondre à cette exigence ?",
    "options": [
      "AWS WAF",
      "AWS Shield",
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 35,
    "question": "Quel service ou fonctionnalité AWS identifie si un compartiment Amazon S3 ou un rôle IAM a été partagé avec une entité externe ?",
    "options": [
      "AWS Service Catalog",
      "AWS Systems Manager",
      "IAM Access Analyzer",
      "AWS Organizations"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 36,
    "question": "Un praticien du cloud doit obtenir des rapports de conformité AWS avant de migrer un environnement vers le cloud AWS. Comment générer ces rapports ?",
    "options": [
      "Contactez l’équipe de conformité AWS.",
      "Téléchargez les rapports depuis AWS Artifact.",
      "Ouvrez un dossier auprès du support AWS.",
      "Générez les rapports avec Amazon Macie."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 37,
    "question": "Une entreprise de commerce électronique a migré son infrastructure informatique d'un centre de données sur site vers le cloud AWS. Quel est le coût directement imputable à l'entreprise ?",
    "options": [
      "Coût des licences de logiciels d'application",
      "Coût de l'infrastructure matérielle sur AWS",
      "Coût de l'énergie pour les serveurs AWS",
      "Coût de la sécurité physique du centre de données AWS"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 38,
    "question": "Une entreprise met en place AWS Identity and Access Management (IAM) sur un compte AWS. Quelle recommandation est conforme aux bonnes pratiques de sécurité IAM ?",
    "options": [
      "Utilisez les clés d’accès de l’utilisateur root du compte pour les tâches administratives.",
      "Accordez des autorisations étendues afin que tous les employés de l’entreprise puissent accéder aux ressources dont ils ont besoin.",
      "Activez l’authentification multifacteur (MFA) pour plus de sécurité pendant le processus de connexion.",
      "Évitez la rotation des informations d’identification pour éviter les problèmes dans les applications de production."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 39,
    "question": "L'élasticité dans le cloud AWS fait référence à laquelle des propositions suivantes ? (Choisissez deux options.)",
    "options": [
      "À quelle vitesse une instance Amazon EC2 peut-elle être redémarrée ?",
      "La capacité d'adapter la taille des ressources à l'évolution de la demande",
      "La quantité maximale de RAM qu'une instance Amazon EC2 peut utiliser",
      "Le modèle de facturation à l'utilisation ",
      "La facilité avec laquelle les ressources peuvent être obtenues lorsqu'elles sont nécessaires"
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 40,
    "question": "Quel service permet aux clients d’auditer les appels API dans leurs comptes AWS ?",
    "options": [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS X-Ray"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 41,
    "question": "Quelle est la responsabilité du client lors de l’utilisation d’AWS Lambda selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Gestion du code dans la fonction Lambda",
      "Confirmer que le matériel fonctionne dans le centre de données",
      "Correction du système d'exploitation",
      "Arrêt des fonctions Lambda lorsqu'elles ne sont plus utilisées"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 42,
    "question": "Une entreprise dispose de 5 To de données stockées sur Amazon S3. Elle prévoit d'effectuer occasionnellement des requêtes sur ces données à des fins d'analyse. Quel service AWS devrait-elle utiliser pour exécuter ces requêtes de la manière la plus rentable ?",
    "options": [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon Kinesis",
      "Amazon RDS"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 43,
    "question": "Quel service AWS peut être utilisé sans frais supplémentaires ?",
    "options": [
      "Amazon SageMaker",
      "AWS Config",
      "AWS Organizations",
      "Amazon CloudWatch"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 44,
    "question": "Quelle capacité d’AWS Cloud Adoption Framework (AWS CAF) appartient à la perspective des personnes ?",
    "options": [
      "Architecture des données",
      "Gestion d'événements",
      "Maîtrise du cloud",
      "Partenariat stratégique"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 45,
    "question": "Une entreprise souhaite s'engager à l'avance à utiliser ses instances Amazon EC2 de production en échange d'une réduction du coût global. Quelles options tarifaires répondent à ces exigences avec le coût le plus bas ? (Choisissez deux réponses.)",
    "options": [
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances",
      "Savings Plans",
      "E. Dedicated Hosts"
    ],
    "correct": [
      2,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 46,
    "question": "Une entreprise souhaite migrer ses bases de données relationnelles locales vers le cloud AWS. Elle souhaite utiliser une infrastructure aussi proche que possible de son emplacement géographique actuel. Quel service ou ressource AWS doit-elle utiliser pour sélectionner sa zone de déploiement Amazon RDS ?",
    "options": [
      "Amazon Connect",
      "AWS Wavelength",
      "AWS Regions",
      "AWS Direct Connect"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 47,
    "question": "Une entreprise envisage d'utiliser le cloud AWS et doit estimer les coûts d'un projet avant de mettre en place l'infrastructure. Quel service ou fonctionnalité AWS peut être utilisé pour estimer les coûts avant le déploiement ?",
    "options": [
      "Offre gratuite AWS",
      "Calculateur de prix AWS",
      "Gestion de la facturation et des coûts AWS",
      "Rapport sur les coûts et l'utilisation d'AWS"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 48,
    "question": "Une entreprise développe une application qui doit diffuser des images et des vidéos dans le monde entier avec une latence minimale. Quelle approche peut-elle adopter pour y parvenir de manière rentable ?",
    "options": [
      "Diffusez le contenu via Amazon CloudFront.",
      "Stockez le contenu sur Amazon S3 et activez la réplication interrégionale S3.",
      "Implémentez un VPN sur plusieurs régions AWS.",
      "Diffusez le contenu via AWS PrivateLink."
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 49,
    "question": "Quelle option est un avantage des économies d’échelle basées sur les avantages du cloud computing ?",
    "options": [
      "La possibilité d'échanger des dépenses variables contre des dépenses fixes",
      "Vitesse et agilité accrues",
      "Coûts variables inférieurs aux coûts fixes",
      "Augmentation des coûts opérationnels dans les centres de données"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 50,
    "question": "Lequel des éléments suivants est un cadre de développement logiciel qu’une entreprise peut utiliser pour définir des ressources cloud sous forme de code et provisionner les ressources via AWS CloudFormation ?",
    "options": [
      "AWS CLI",
      "Centre de développement AWS",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS CodeStar"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 51,
    "question": "Une entreprise développe une application utilisant plusieurs services AWS. L'application doit utiliser des identifiants temporaires à privilèges limités pour s'authentifier auprès d'autres API AWS. Quel service ou fonctionnalité AWS l'entreprise doit-elle utiliser pour répondre à ces exigences d'authentification ?",
    "options": [
      "Passerelle API Amazon",
      "Utilisateurs IAM",
      "AWS Security Token Service (AWS STS)",
      "Profils d'instance IAM"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 52,
    "question": "Quel service AWS est un service de gestion de la posture de sécurité du cloud (CSPM) qui regroupe les alertes de divers services AWS et produits partenaires dans un format standardisé ?",
    "options": [
      "AWS Security Hub",
      "AWS Trusted Advisor",
      "Amazon EventBridge",
      "Amazon GuardDuty"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 53,
    "question": "Quel service AWS est toujours fourni gratuitement ?",
    "options": [
      "Amazon S3",
      "Gestion des identités et des accès AWS (IAM)",
      "Elastic Load Balancing",
      "AWS WAF"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 54,
    "question": "Afin de réduire ses coûts, une entreprise envisage de migrer une base de données NoSQL vers AWS. Quel service AWS est entièrement géré et peut adapter automatiquement sa capacité de débit pour répondre aux exigences de la base de données ?",
    "options": [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 55,
    "question": "Une entreprise utilise Amazon DynamoDB. Quelle tâche lui incombe, selon le modèle de responsabilité partagée d'AWS ?",
    "options": [
      "Corrigez le système d'exploitation.",
      "Provisionner les hôtes",
      "Gérer les autorisations d'accès à la base de données.",
      "Sécuriser le système d'exploitation."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 56,
    "question": "Une entreprise dispose d'un environnement AWS de test. Elle prévoit de tester une application dans AWS. Les tests applicatifs peuvent être interrompus et ne nécessitent pas d'exécution continue. Quelle option d'achat Amazon EC2 répondra le mieux à ces exigences ?",
    "options": [
      "On-Demand Instances",
      "Instances dédiées",
      "Spot Instances",
      "Reserved Instances"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 57,
    "question": "Quel service AWS offre aux utilisateurs la possibilité de découvrir et de protéger les données sensibles stockées dans les compartiments Amazon S3 ?",
    "options": [
      "Amazon Macie",
      "Amazon Detective",
      "Amazon GuardDuty",
      "IAM Access Analyzer"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 58,
    "question": "Lequel des services suivants peut être utilisé pour bloquer le trafic réseau vers une instance ? (Choisissez deux réponses.)",
    "options": [
      "Groupes de sécurité",
      "VPC Flow Logs",
      "Listes de contrôle d'accès réseau",
      "Amazon CloudWatch",
      "E. AWS CloudTrail"
    ],
    "correct": [
      0,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 59,
    "question": "Quel service AWS peut identifier quand une instance Amazon EC2 a été résiliée ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "AWS CloudTrail",
      "AWS Calcul Optimizer",
      "Amazon EventBridge"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 60,
    "question": "Laquelle des bases de données suivantes est entièrement gérée et compatible avec MySQL ?",
    "options": [
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 61,
    "question": "Quel service AWS prend en charge une architecture hybride qui offre aux utilisateurs la possibilité d’étendre l’infrastructure AWS, les services AWS, les API et les outils aux centres de données, aux environnements de colocation ou aux installations sur site ?",
    "options": [
      "AWS Snowmobile",
      "Zones locales AWS",
      "AWS Outposts",
      "AWS Fargate"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 62,
    "question": "Quel service AWS peut exécuter une base de données PostgreSQL gérée qui fournit le traitement des transactions en ligne (OLTP) ?",
    "options": [
      "Amazon DynamoDB",
      "Amazon Athena",
      "Amazon RDS",
      "Amazon EMR"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 63,
    "question": "Une entreprise souhaite fournir des bureaux virtuels et des applications Windows gérés à ses employés distants via des connexions réseau sécurisées. Quels services AWS peut-elle utiliser pour répondre à ces besoins ? (Choisissez deux réponses.)",
    "options": [
      "Amazon Connect",
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "AWS Site-to-Site VPN",  
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 64,
    "question": "Laquelle des bases de données suivantes est entièrement gérée et compatible avec MySQL ?",
    "options": [
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 65,
    "question": "Quel service AWS prend en charge une architecture hybride qui offre aux utilisateurs la possibilité d’étendre l’infrastructure AWS, les services AWS, les API et les outils aux centres de données, aux environnements de colocation ou aux installations sur site ?",
    "options": [
      "AWS Snowmobile",
      "AWS Local Zones",
      "AWS Outposts",
      "AWS Fargate"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 66,
    "question": "Quel service AWS peut exécuter une base de données PostgreSQL gérée qui fournit le traitement des transactions en ligne (OLTP) ?",
    "options": [
      "Amazon DynamoDB",
      "Amazon Athena",
      "Amazon RDS",
      "Amazon EMR"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 67,
    "question": "Une entreprise souhaite fournir des bureaux virtuels et des applications Windows gérés à ses employés distants via des connexions réseau sécurisées. Quels services AWS peut-elle utiliser pour répondre à ces besoins ? (Choisissez deux réponses.)",
    "options": [
      "Amazon Connect",
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "AWS Site-to-Site VPN", 
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 68,
    "question": "Quel service AWS fournit un accès en ligne de commande aux outils et ressources AWS directement à partir d’un navigateur Web ?",
    "options": [
      "AWS CloudHSM",
      "AWS CloudShell",
      "Amazon WorkSpaces",
      "Carte du cloud AWS"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 69,
    "question": "Un ingénieur réseau doit créer une architecture cloud hybride connectant ses réseaux locaux au cloud AWS via AWS Direct Connect. L'entreprise possède quelques VPC dans une seule région AWS et prévoit d'en multiplier le nombre à plusieurs centaines au fil du temps. Quel service ou fonctionnalité AWS l'ingénieur doit-il utiliser pour simplifier et faire évoluer cette connectivité à mesure que le nombre de VPC augmente ?",
    "options": [
      "Points de terminaison VPC",
      "Passerelle de transit AWS",
      "Amazon Route 53",
      "AWS Secrets Manager"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 70,
    "question": "Une entreprise souhaite évaluer son état de préparation opérationnelle. Elle souhaite également identifier et atténuer les risques opérationnels avant le lancement d'un nouveau produit. Quel plan de support AWS propose des conseils et une assistance pour ce type d'événement, sans frais supplémentaires ?",
    "options": [
      "AWS Business Support",
      "AWS Basic Support",
      "AWS Developer Support",
      "AWS Enterprise Support"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 71,
    "question": "Une entreprise souhaite établir un calendrier de rotation des identifiants des utilisateurs de la base de données. Quel service AWS prendra en charge cette exigence avec le MOINS de frais opérationnels ?",
    "options": [
      "AWS Systems Manager",
      "AWS Secrets Manager",
      "AWS License Manager",
      "AWS Services Managed" 
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 72,
    "question": "Quel service ou fonctionnalité AWS peut être utilisé pour créer une connexion privée entre une charge de travail sur site et une charge de travail AWS Cloud ?",
    "options": [
      "Amazon Route 53",
      "Amazon Macie",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 73,
    "question": "Quel service AWS est utilisé pour fournir le cryptage pour Amazon EBS ?",
    "options": [
      "AWS Certificate Manager (ACM)",
      "AWS Systems Manager",
      "AWS Key Management Service (AWS KMS)",
      "AWS Config"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 74,
    "question": "Une entreprise souhaite gérer ses ressources cloud AWS via une interface web. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Console de gestion AWS",
      "AWS CLI",
      "AWS SDK",
      "AWS Cloud9"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 75,
    "question": "Parmi les avantages suivants, lesquels offrent le Cloud AWS ? (Choisissez deux réponses.)",
    "options": [
      "Échangez les dépenses variables contre des dépenses en capital",
      "Économies d'échelle élevées",
      "Lancement mondial en quelques minutes",
      "Se concentrer sur la gestion de l'infrastructure matérielle",
      "Surprovisionnement pour garantir la capacité"
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 76,
    "question": "Quel avantage AWS Cloud démontre la capacité d’une architecture à résister aux pannes avec un temps d’arrêt minimal ?",
    "options": [
      "Agilité",
      "Élasticité",
      "Évolutivité",
      "Haute disponibilité"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 77,
    "question": "Un développeur doit maintenir une infrastructure d'environnement de développement et une infrastructure d'environnement de production reproductibles. Quel service AWS doit-il utiliser pour répondre à ces exigences ?",
    "options": [
      "Station terrestre AWS",
      "AWS Shield",
      "AWS IoT Device Defender",
      "AWS CloudFormation"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 78,
    "question": "Quelle tâche relève de la responsabilité du client, selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Maintenir la sécurité du cloud AWS.",
      "Configurer les pare-feu et les réseaux.",
      "Corrigez le système d’exploitation des instances Amazon RDS.",
      "Mettre en œuvre des contrôles physiques et environnementaux."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 79,
    "question": "Quel service AWS permet de fournir des applications hautement disponibles avec un basculement rapide pour les architectures multi-régions et multi-AZ ?",
    "options": [
      "AWS WAF",
      "AWS Global Accelerator",
      "AWS Shield",
      "AWS Direct Connect"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 80,
    "question": "Une entreprise possède un ensemble d'applications de commerce électronique. Ces applications doivent pouvoir s'échanger des messages. Quel service AWS répond à cette exigence ?",
    "options": [
      "AWS Auto Scaling",
      "Équilibrage de charge élastique",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Flux de données Amazon Kinesis"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 81,
    "question": "Quels sont les avantages de la facturation consolidée pour les services AWS Cloud ? (Choisissez deux réponses.)",
    "options": [
      "Remises sur volume",
      "Des frais supplémentaires minimes pour l'utilisation",
      "Une facture pour plusieurs comptes",
      "Options de paiement échelonné",
      "Création de budget personnalisé de coûts et d'utilisation"
    ],
    "correct": [
      0,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 82,
    "question": "Un utilisateur souhaite consulter tous les compartiments Amazon S3 avec leurs listes de contrôle d'accès et leurs stratégies dans la console S3. Quel service ou ressource AWS répond à cette exigence ?",
    "options": [
      "Points d'accès multirégionaux S3",
      "Objectif de stockage S3",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))",
      "Analyseur d'accès pour S3"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 83,
    "question": "Quelle est la meilleure ressource pour un utilisateur pour trouver des informations et des rapports liés à la conformité sur AWS ?",
    "options": [
      "AWS Artefact",
      "AWS MarketPlace",
      "Amazon Inspector",
      "Assistance AWS"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 84,
    "question": "Quel service AWS permet aux entreprises de déployer une application à proximité des utilisateurs finaux ?",
    "options": [
      "Amazon CloudFront",
      "AWS Auto Scaling",
      "AWS AppSync",
      "Amazon Route 53"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 85,
    "question": "Quel service ou fonctionnalité AWS améliore les performances du réseau en envoyant le trafic via l’infrastructure réseau mondiale AWS ?",
    "options": [
      "Tableau des itinéraires",
      "Passerelle de transit AWS",
      "AWS Global Accelerator",
      "Amazon VPC"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 86,
    "question": "Quel service AWS fournit un stockage d’objets hautement durable ?",
    "options": [
      "Amazon S3",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon FSx"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 87,
    "question": "Quelle responsabilité appartient à AWS lorsqu'une entreprise héberge ses bases de données sur des instances Amazon EC2 ?",
    "options": [
      "Sauvegardes de bases de données",
      "Correctifs logiciels de base de données",
      "Correctifs du système d'exploitation",
      "Installations de systèmes d'exploitation"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 88,
    "question": "Parmi les avantages suivants, lesquels sont liés au passage au cloud AWS ? (Choisissez deux réponses.)",
    "options": [
      "La possibilité de transférer la responsabilité de toute la sécurité à AWS.",
      "La possibilité d’utiliser le modèle de paiement à l’utilisation.",
      "La capacité d’avoir un contrôle total sur l’infrastructure physique.",
      "Vous n’aurez plus à deviner quelle capacité sera nécessaire.",
      "Ne vous souciez plus des contrôles d'accès des utilisateurs."
    ],
    "correct": [
      1,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 89,
    "question": "Quel service AWS est un service de stockage cloud hybride qui fournit aux utilisateurs sur site un accès à un stockage cloud pratiquement illimité ?",
    "options": [
      "AWS DataSync",
      "Amazon S3 Glacier",
      "AWS Storage Gateway",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 90,
    "question": "Une entreprise envisage de migrer vers AWS et souhaite estimer les coûts de ses cas d'utilisation AWS. Quel service ou outil AWS peut-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Calculateur de prix AWS",
      "Amazon CloudWatch",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 91,
    "question": "Quel outil un développeur doit-il utiliser pour intégrer les fonctionnalités du service AWS directement dans une application ?",
    "options": [
      "AWS SDK",
      "AWS CodeDeploy",
      "AWS Lambda",
      "AWS Batch"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 92,
    "question": "Lequel des principes de conception suivants est recommandé pour le framework AWS Well- Architected ?",
    "options": [
      "Réduisez les temps d’arrêt en effectuant des modifications d’infrastructure peu fréquentes et par incréments importants.",
      "Investissez du temps pour configurer l’infrastructure manuellement.",
      "Apprenez à vous améliorer à partir des échecs opérationnels.",
      "Utiliser une conception d’application monolithique pour la centralisation."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 93,
    "question": "L'utilisation d'AWS Identity and Access Management (IAM) pour accorder l'accès uniquement aux ressources nécessaires à l'exécution d'une tâche est un concept connu sous le nom de :",
    "options": [
      "accès restreint.",
      "accès selon les besoins.",
      "accès au moindre privilège.",
      "accès par jeton."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 94,
    "question": "Quel service ou outil AWS peut être utilisé pour configurer un pare-feu afin de contrôler le trafic entrant et sortant d'un sous-réseau Amazon VPC ?",
    "options": [
      "Groupe de sécurité",
      "AWS WAF",
      "Gestionnaire de pare-feu AWS",
      "Liste de contrôle d'accès réseau"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 95,
    "question": "Une entreprise souhaite exploiter un entrepôt de données pour analyser ses données sans gérer l'infrastructure de l'entrepôt. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Aurora",
      "Amazon Redshift Serverless",
      "AWS Lambda",
      "Amazon RDS"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 96,
    "question": "Comment le cloud computing AWS aide-t-il les entreprises à réduire leurs coûts ? (Choisissez deux options.)",
    "options": [
      "AWS facture les mêmes prix pour les services dans chaque région AWS.",
      "AWS permet d’ajuster la capacité à la demande.",
      "AWS propose des remises pour les instances Amazon EC2 qui restent inactives pendant plus d'une semaine.",
      "AWS ne facture pas les données envoyées depuis le cloud AWS vers Internet.",
      "AWS élimine de nombreux coûts liés à la construction et à la maintenance des centres de données sur site."
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 97,
    "question": "Une entreprise souhaite autoriser les utilisateurs d'un compte AWS à accéder aux ressources d'un autre compte AWS. Ces utilisateurs ne sont actuellement pas autorisés à accéder à ces ressources. Quel service AWS répond à cette exigence ?",
    "options": [
      "groupe IAM",
      "Rôle IAM",
      "Balise IAM",
      "IAM Access Analyzer"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 98,
    "question": "Quelle tâche incombe à AWS lors de l’utilisation des services AWS ?",
    "options": [
      "Gestion des autorisations des utilisateurs IAM",
      "Création de règles de groupe de sécurité pour l'accès sortant",
      "Maintien des contrôles physiques et environnementaux",
      "Application des correctifs du système d'exploitation Amazon EC2"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 99,
    "question": "Une entreprise souhaite automatiser le déploiement de son infrastructure grâce à l'infrastructure en tant que code (IaC). Elle souhaite faire évoluer ses piles de production afin de pouvoir les déployer dans plusieurs régions AWS. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS CloudFormation"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 100,
    "question": "Quelle option est une capacité de perspective de plate-forme AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Architecture des données",
      "Protection des données",
      "Gouvernance des données",
      "Science des données"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 101,
    "question": "Une entreprise exécute une charge de travail dans le cloud AWS. Quelle bonne pratique AWS garantit l'architecture la plus rentable pour cette charge de travail ?",
    "options": [
      "Accouplement lâche",
      "Auto Scaling",
      "Mise en cache",
      "Redondance"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 102,
    "question": "Une entreprise utilise un service tiers pour sauvegarder 10 To de données sur une bibliothèque de bandes. Le serveur de sauvegarde sur site manque d'espace. L'entreprise souhaite utiliser les services AWS pour les sauvegardes sans modifier ses workflows de sauvegarde existants. Quel service AWS doit-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "AWS Storage Gateway",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Lambda"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 103,
    "question": "Quel outil AWS donne aux utilisateurs la possibilité de planifier leur utilisation des services, les coûts des services et les réservations d’instances, et leur permet également de définir des alertes personnalisées lorsque leurs coûts ou leur utilisation dépassent les seuils établis ?",
    "options": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "Rapport sur les coûts et l'utilisation d'AWS",
      "Rapport d'instance réservée"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 104,
    "question": "Quelles tâches relèvent de la responsabilité du client, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.)",
    "options": [
      "Établir l’infrastructure mondiale.",
      "Effectuer le chiffrement des données côté client.",
      "Configurer les informations d’identification IAM.",
      "Emplacements de bordure sécurisés.",
      "Corriger les instances de base de données Amazon RDS."
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 105,
    "question": "Un développeur a été embauché par une grande entreprise et a besoin d'accréditations AWS. Quelles sont les bonnes pratiques de sécurité à suivre ? (Choisissez deux réponses.)",
    "options": [
      "Accordez au développeur l’accès uniquement aux ressources AWS nécessaires pour effectuer le travail.",
      "Partagez les informations d’identification de l’utilisateur racine du compte AWS avec le développeur.",
      "Ajoutez le développeur au groupe d’administrateurs dans AWS IAM.",
      "Configurez une politique de mot de passe qui garantit que le mot de passe du développeur ne peut pas être modifié.",
      "Assurez-vous que la politique de mot de passe du compte exige une longueur minimale."
    ],
    "correct": [
      0, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 106,
    "question": "Une entreprise possède plusieurs comptes AWS incluant des charges de travail de calcul ininterrompues. Elle souhaite bénéficier de remises sur la facturation en fonction de son utilisation des services AWS. Quelle fonctionnalité ou option d'achat AWS répondra à ces exigences ?",
    "options": [
      "Marquage des ressources",
      "Facturation consolidée",
      "Tarification à l'utilisation",
      "Spot Instances"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 107,
    "question": "Un utilisateur souhaite autoriser les applications exécutées sur une instance Amazon EC2 à appeler d'autres services AWS. L'accès accordé doit être sécurisé. Quel service ou fonctionnalité AWS utiliser ?",
    "options": [
      "Groupes de sécurité",
      "Gestionnaire de pare-feu AWS",
      "Rôles IAM",
      "Clés SSH des utilisateurs IAM"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 108,
    "question": "Une entreprise souhaite un serveur de fichiers Windows entièrement géré pour ses applications Windows. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon FSx",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon EMR"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 109,
    "question": "Une entreprise souhaite migrer ses charges de travail NFS sur site vers AWS. Quel type de passerelle de stockage AWS doit-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Passerelle de bande",
      "Passerelle de volume",
      "Passerelle de fichiers Amazon FSx",
      "AWS Storage Gateway (File Gateway)"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 110,
    "question": "Une entreprise doit suivre l'activité de ses comptes AWS et savoir quand un appel d'API est effectué sur ses ressources AWS. Quel outil ou service AWS peut être utilisé pour répondre à ces exigences ?",
    "options": [
      "Amazon CloudWatch",
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 111,
    "question": "Une entreprise possède une application ininterrompue fonctionnant sur des instances Amazon EC2. Cette application traite en permanence un arriéré de fichiers dans une file d'attente Amazon Simple Queue Service (Amazon SQS). Cette utilisation devrait continuer à croître pendant des années. Quel est le modèle d'achat d'instances EC2 le plus rentable pour répondre à ces besoins ?",
    "options": [
      "Spot Instances",
      "On-Demand Instances",
      "Savings Plans",
      "Dedicated Hosts"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 112,
    "question": "Une entreprise souhaite qu'un service AWS lui fournisse des recommandations de produits basées sur ses données clients. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Polly",
      "Amazon Personalize",
      "Amazon Comprehend",
      "Reconnaissance d'Amazon"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 113,
    "question": "Une entreprise planifie sa migration vers le cloud AWS. Elle identifie ses lacunes en matière de capacités en utilisant les perspectives du Cadre d'adoption du cloud AWS (AWS CAF). À quelle phase de la transformation cloud ces activités d'identification sont-elles associées ?",
    "options": [
      "Envisager",
      "Align",
      "Scale",
      "Launch"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 114,
    "question": "Une entreprise de médias sociaux souhaite protéger son application web contre les failles de sécurité courantes telles que les injections SQL et les scripts intersites. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon Inspector",
      "AWS WAF",
      "Amazon GuardDuty",
      "Amazon CloudWatch"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 115,
    "question": "Quel service AWS entièrement géré aide à la création, au test et à la gestion d’images Amazon EC2 personnalisées ?",
    "options": [
      "Générateur d'images EC2",
      "Image machine Amazon (AMI)",
      "Assistant de lancement AWS",
      "AWS Elastic Beanstalk"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 116,
    "question": "Une entreprise souhaite un processus automatisé pour analyser en continu ses instances Amazon EC2 à la recherche de vulnérabilités logicielles. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Detective",
      "Amazon Cognito"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 117,
    "question": "Une entreprise doit traiter des données une fois par semaine, ce qui prend généralement environ cinq heures. Quel service AWS doit-elle utiliser pour cette charge de travail ?",
    "options": [
      "AWS Lambda",
      "Amazon EC2",
      "AWS CodeDeploy",
      "AWS Wavelength"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 118,
    "question": "Quel service ou fonctionnalité AWS fournit des informations de journal sur le trafic entrant et sortant sur les interfaces réseau d'un VPC ?",
    "options": [
      "Journaux Amazon CloudWatch",
      "AWS CloudTrail",
      "VPC Flow Logs",
      "Gestion des identités et des accès AWS (IAM)"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 119,
    "question": "Une entreprise souhaite concevoir un système de stockage centralisé pour gérer les données de configuration et les mots de passe de ses applications métier critiques. Quel service ou fonctionnalité AWS répondra le mieux à ces exigences ?",
    "options": [
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS Config",
      "Amazon S3"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 120,
    "question": "Une entreprise envisage de déployer des conteneurs sur AWS. Elle souhaite contrôler entièrement les ressources de calcul qui hébergent les conteneurs. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "AWS Fargate",
      "Amazon EC2",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 121,
    "question": "Quel service ou fonctionnalité AWS permet aux utilisateurs de créer de nouveaux comptes AWS, de regrouper plusieurs comptes pour organiser les flux de travail et d’appliquer des politiques à des groupes de comptes ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "AWS Trusted Advisor",
      "AWS CloudFormation",
      "AWS Organizations"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 122,
    "question": "Une entreprise souhaite stocker et récupérer des fichiers dans Amazon S3 pour ses applications locales existantes, en utilisant des protocoles de système de fichiers standard. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Storage Gateway (File Gateway)",
      "AWS Transfer Family"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 123,
    "question": "Une entreprise souhaite bloquer les attaques par injection SQL. Quel service ou fonctionnalité AWS doit-elle utiliser pour répondre à cette exigence ?",
    "options": [
      "AWS WAF",
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité",
      "AWS Certificate Manager (ACM)"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 124,
    "question": "Une entreprise souhaite un outil unifié pour interagir de manière cohérente avec les services AWS. Quel service ou outil AWS répondra à ce besoin ?",
    "options": [
      "AWS CLI",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Cloud9",
      "Réseau privé virtuel AWS (AWS VPN)"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 125,
    "question": "Une entreprise doit évaluer son environnement AWS et formuler des recommandations de bonnes pratiques dans cinq domaines : coût, performance, limites de service, tolérance aux pannes et sécurité. Quel service AWS l'entreprise peut-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS Shield",
      "AWS WAF",
      "AWS Trusted Advisor",
      "AWS Service Catalog"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 126,
    "question": "Quelle perspective dans AWS Cloud Adoption Framework (AWS CAF) inclut des fonctionnalités de gestion de la configuration et de gestion des correctifs ?",
    "options": [
      "Plate-forme",
      "Opérations",
      "Sécurité",
      "Gouvernance"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 127,
    "question": "Une entreprise dispose d'une charge de calcul stable, prévisible et ininterrompue. Quelles options d'achat d'instances Amazon EC2 répondent le mieux à ces exigences ? (Choisissez deux options.)",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans",
      "Dedicated Hosts"
    ],
    "correct": [
      1,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 128,
    "question": "Quel modèle de tarification Amazon EC2 est le PLUS rentable pour une charge de travail ininterrompue qui s'exécute une fois par an pendant 24 heures ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Instances dédiées"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 129,
    "question": "Quelle option constitue une responsabilité partagée entre AWS et ses clients dans le cadre du modèle de responsabilité partagée AWS ?",
    "options": [
      "Configuration des systèmes d'exploitation des instances Amazon EC2",
      "Chiffrement côté serveur du système de fichiers d'application",
      "Gestion des correctifs",
      "Sécurité de l'infrastructure physique"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 130,
    "question": "Une entreprise souhaite migrer ses charges de travail sur site vers le cloud AWS. Elle souhaite répartir les charges de travail entre différents services afin de les refacturer. Quels services ou fonctionnalités AWS répondront à ces exigences ? (Choisissez deux réponses.)",
    "options": [
      "Groupes de placement",
      "Facturation consolidée",
      "Emplacements des bords",
      "AWS Config",
      "Plusieurs comptes AWS"
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 131,
    "question": "Quelle tâche relève de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Activez le chiffrement côté client pour les objets stockés dans Amazon S3.",
      "Configurez les politiques de sécurité IAM pour respecter le principe du moindre privilège.",
      "Corrigez le système d’exploitation invité sur une instance Amazon EC2.",
      "Appliquer les mises à jour à l'hyperviseur Nitro."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 132,
    "question": "Quelle option constitue un avantage de l’utilisation d’AWS pour le cloud computing ?",
    "options": [
      "Échangez les dépenses variables contre des dépenses fixes",
      "Tarification à l'utilisation",
      "Diminution de la vitesse et de l'agilité",
      "Dépenser de l'argent pour gérer et entretenir des centres de données"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 133,
    "question": "Quelle option est une capacité de perspective commerciale AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Évolution de la culture",
      "Gestion d'événements",
      "Monétisation des données",
      "Architecture de la plateforme"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 134,
    "question": "Une entreprise évalue son offre AWS Business Support afin de déterminer si elle répond toujours à ses besoins. Elle envisage de passer à AWS Enterprise Support. Quels avantages supplémentaires bénéficiera-t-elle de ce service ?",
    "options": [
      "Un ensemble complet de vérifications AWS Trusted Advisor",
      "Accès par téléphone, e-mail et chat aux ingénieurs du support cloud 24 heures sur 24, 7 jours sur 7",
      "Un responsable de compte technique (TAM) désigné pour aider au suivi et à l'optimisation",
      "Un examen consultatif et des conseils d'architecture pour les applications de l'entreprise"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 135,
    "question": "Quel modèle de tarification interrompra une instance Amazon EC2 en cours d’exécution si la capacité devient temporairement indisponible ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances standard",
      "Spot Instances",
      "Reserved Instances convertibles"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 138,
    "question": "Une entreprise évalue son offre AWS Business Support afin de déterminer si elle répond toujours à ses besoins. Elle envisage de passer à AWS Enterprise Support. Quels avantages supplémentaires bénéficiera-t-elle de ce service ?",
    "options": [
      "Un ensemble complet de vérifications AWS Trusted Advisor",
      "Accès par téléphone, e-mail et chat aux ingénieurs du support cloud 24 heures sur 24, 7 jours sur 7",
      "Un responsable de compte technique (TAM) désigné pour aider au suivi et à l'optimisation",
      "Un examen consultatif et des conseils d'architecture pour les applications de l'entreprise"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 139,
    "question": "Quel modèle de tarification interrompra une instance Amazon EC2 en cours d’exécution si la capacité devient temporairement indisponible ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances standard",
      "Spot Instances",
      "Reserved Instances convertibles"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 140,
    "question": "Quelles sont les options offertes par la perspective de sécurité d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.)",
    "options": [
      "Observabilité",
      "Gestion des incidents et des problèmes",
      "Réponse aux incidents",
      "Protection des infrastructures",
      "Disponibilité et continuité"
    ],
    "correct": [
      2,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 141,
    "question": "Une entreprise souhaite exécuter sa charge de travail sur des instances Amazon EC2 pendant plus d'un an. Cette charge de travail fonctionnera en continu. Quelle option offre un tarif horaire réduit par rapport au tarif horaire des instances à la demande ?",
    "options": [
      "Processeur AWS Graviton",
      "Dedicated Hosts",
      "EC2 Savings Plans",
      "Instances Amazon EC2 Auto Scaling"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 142,
    "question": "Quelle caractéristique du cloud AWS aide les utilisateurs à éliminer la capacité CPU sous- utilisée ?",
    "options": [
      "Agilité",
      "Élasticité",
      "Fiabilité",
      "Durabilité"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 143,
    "question": "Quels services AWS une entreprise peut-elle utiliser pour réaliser une architecture faiblement couplée ? (Choisissez deux réponses.)",
    "options": [
      "Amazon WorkSpaces",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Connect",
      "AWS Trusted Advisor",
      "AWS Step Functions"
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 144,
    "question": "Quel service AWS Cloud peut envoyer des alertes aux clients si les seuils de dépenses personnalisés sont dépassés ?",
    "options": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "Balises de répartition des coûts AWS",
      "AWS Organizations"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 145,
    "question": "Une entreprise envisage de migrer vers le cloud AWS. Elle souhaite utiliser le cadre d'adoption du cloud AWS (AWS CAF) pour définir et suivre les résultats opérationnels dans le cadre de sa transformation cloud. Quelle fonctionnalité de gouvernance du cadre d'adoption du cloud AWS CAF répondra à ces exigences ?",
    "options": [
      "Gestion des avantages sociaux",
      "Risk Management",
      "Application Portfolio Management",
      "Cloud Financial Management"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 146,
    "question": "Une entreprise doit transférer rapidement et en toute sécurité des fichiers sur de longues distances entre son client et un bucket Amazon S3. Quelle fonctionnalité S3 répondra à ce besoin ?",
    "options": [
      "Gestion des versions S3",
      "Accélération du transfert S3",
      "S3 ACL",
      "Amazon S3 Intelligent-Tiering"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 147,
    "question": "Une entreprise doit exécuter en continu une charge de travail expérimentale sur une instance Amazon EC2 et l'arrêter après 12 heures. Quelle option d'achat d'instance répondra le mieux à ce besoin ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Instances dédiées"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 148,
    "question": "Quelle phase du parcours de transformation cloud du AWS Cloud Adoption Framework (AWS CAF) vise à démontrer comment le cloud contribue à accélérer les résultats commerciaux ?",
    "options": [
      "Scale",
      "Envisager",
      "Align",
      "Launch"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 149,
    "question": "Quelle option relève de la responsabilité du client dans le cadre du modèle de responsabilité partagée AWS ?",
    "options": [
      "Maintenance du matériel sous-jacent des instances Amazon EC2",
      "Sécurité des données d'application",
      "Sécurité physique des centres de données",
      "Maintenance des composants VPC"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 150,
    "question": "Une entreprise souhaite que ses instances Amazon EC2 fonctionnent dans un environnement hautement disponible, même en cas de catastrophe naturelle dans une zone géographique donnée. Quelle approche permettra d'atteindre cet objectif ?",
    "options": [
      "Utilisez des instances EC2 dans plusieurs régions AWS.",
      "Utilisez des instances EC2 dans plusieurs emplacements Amazon CloudFront.",
      "Utilisez des instances EC2 dans plusieurs emplacements périphériques.",
      "Utilisez les instances EC2 dans les zones locales AWS."
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 151,
    "question": "Une entreprise souhaite moderniser et convertir une application monolithique en microservices. Elle souhaite migrer l'application vers AWS. Quelle stratégie de migration adopter ?",
    "options": [
      "Réhéberger",
      "Replateforme",
      "Rachat",
      "Refactor"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 152,
    "question": "Un administrateur système a créé un utilisateur IAM pour un développeur et lui a attribué une clé d'accès au lieu d'un nom d'utilisateur et d'un mot de passe. À quoi sert cette clé d'accès ?",
    "options": [
      "Pour accéder au compte AWS en tant qu'utilisateur root du compte AWS",
      "Pour accéder au compte AWS via la console de gestion AWS",
      "Pour accéder au compte AWS via une CLI",
      "Pour accéder à tous les comptes AWS d'une entreprise"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 153,
    "question": "Quelle option est un environnement composé d’un ou plusieurs centres de données ?",
    "options": [
      "Amazon CloudFront",
      "Zone de disponibilité",
      "VPC",
      "AWS Outposts"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 154,
    "question": "Une entreprise migre un centre de données sur site vers le cloud AWS. Elle doit migrer 50 pétaoctets de données de stockage de fichiers vers AWS avec le minimum de frais opérationnels. Quel service ou ressource AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS Snowmobile",
      "AWS Snowball Edge",
      "Échange de données AWS",
      "Service de migration de base de données AWS (AWS DMS)"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 155,
    "question": "Une entreprise possède une application nécessitant un matériel robuste. L'application doit être accessible aux étudiants utilisant des ordinateurs portables légers et économiques. Quel service AWS permettra à l'entreprise de déployer l'application sans investir dans une infrastructure back-end ou du matériel client haut de gamme ?",
    "options": [
      "Amazon AppStream 2.0",
      "AWS AppSync",
      "Amazon WorkLink",
      "AWS Elastic Beanstalk"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 156,
    "question": "Une entreprise souhaite interroger les journaux de son serveur pour mieux comprendre l'expérience de ses clients. Quel service AWS stockera ces données de la manière la plus rentable ?",
    "options": [
      "Amazon Aurora",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 157,
    "question": "Lequel des principes de conception suivants est recommandé pour l’architecture AWS Cloud ?",
    "options": [
      "Concevez des composants étroitement couplés.",
      "Créez un composant d’application unique capable de gérer toutes les fonctionnalités de l’application.",
      "Effectuez des modifications importantes sur moins d’itérations pour réduire les risques d’échec.",
      "Évitez l’architecture monolithique en segmentant les charges de travail."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 158,
    "question": "Quel service AWS aide les utilisateurs à auditer l’activité des API sur leur compte AWS ?",
    "options": [
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS WAF",
      "AWS Config"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 159,
    "question": "Quelle tâche relève de la responsabilité d’un client, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Gestion des systèmes d'exploitation invités",
      "Maintenance de la configuration des dispositifs d'infrastructure",
      "Gestion des systèmes d'exploitation hôtes et virtualisation",
      "Maintenance du logiciel qui alimente les zones de disponibilité"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 160,
    "question": "Une entreprise souhaite ajouter et supprimer automatiquement des instances Amazon EC2. Elle souhaite que ces instances s'adaptent dynamiquement aux variations de charge de travail. Quel service ou fonctionnalité répondra à ces exigences ?",
    "options": [
      "Amazon DynamoDB",
      "Instances Spot Amazon EC2",
      "AWS Snow Family",
      "Mise à l'échelle automatique d'Amazon EC2"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 161,
    "question": "Un utilisateur souhaite automatiser en toute sécurité la gestion et la rotation des identifiants partagés entre les applications, tout en minimisant le temps consacré à la gestion des tâches. Quel service ou fonctionnalité AWS peut-il utiliser pour y parvenir ?",
    "options": [
      "AWS CloudHSM",
      "Service de gestion des clés AWS (AWS Key Management Service (AWS KMS))",
      "AWS Secrets Manager",
      "Cryptage côté serveur"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 162,
    "question": "Quel service de sécurité reconnaît et classe automatiquement les données sensibles ou la propriété intellectuelle sur AWS ?",
    "options": [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Shield"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 163,
    "question": "Quelles actions constituent les meilleures pratiques pour un utilisateur root de compte AWS ? (Choisissez deux.)",
    "options": [
      "Partagez les informations d’identification de l’utilisateur root avec les membres de l’équipe.",
      "Créez plusieurs utilisateurs root pour le compte, séparés par environnement.",
      "Activez l’authentification multifacteur (MFA) sur l’utilisateur root.",
      "Créez un utilisateur IAM avec des privilèges d’administrateur pour les tâches administratives quotidiennes, au lieu d’utiliser l’utilisateur root. ",
      "Utilisez l’accès programmatique au lieu de l’utilisateur root et du mot de passe."
    ],
    "correct": [
      2,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 164,
    "question": "Une entreprise exécute une charge de travail critique sur une instance de base de données Amazon RDS. Elle a besoin d'une haute disponibilité avec un temps de récupération inférieur à 5 minutes. Quelle solution répondra à ces exigences ?",
    "options": [
      "Créez une réplique en lecture de l’instance de base de données.",
      "Créez un modèle de l’instance de base de données à l’aide d’AWS CloudFormation.",
      "Prenez régulièrement des instantanés de l'instance de base de données. Stockez-les dans Amazon S3.",
      "Modifiez l’instance de base de données pour qu’elle soit un déploiement multi-AZ."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 165,
    "question": "Une entreprise envisage de migrer son application vers AWS et de l'exécuter sur des instances Amazon EC2. L'application sera utilisée en continu pendant un an. Quelle option d'achat d'instance EC2 répondra le mieux à ces besoins ?",
    "options": [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 166,
    "question": "Une entreprise doit transférer des données entre un bucket Amazon S3 et une application sur site. Qui est responsable de la sécurité de ces données, selon le modèle de responsabilité partagée d'AWS ?",
    "options": [
      "L'entreprise",
      "AWS",
      "Fournisseur de pare-feu",
      "Partenaire AWS Marketplace"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 167,
    "question": "Quel pilier du cadre AWS Well-Architected fait référence à la capacité d’un système à se remettre des perturbations de l’infrastructure ou du service et à acquérir dynamiquement des ressources informatiques pour répondre à la demande ?",
    "options": [
      "Sécurité",
      "Fiabilité",
      "Efficacité des performances",
      "Optimisation des coûts"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 168,
    "question": "Une entreprise souhaite identifier les buckets Amazon S3 partagés avec un autre compte AWS. Quel service ou fonctionnalité AWS répondra à ces exigences ?",
    "options": [
      "Formation du lac AWS",
      "IAM Credential Report",
      "Amazon CloudWatch",
      "IAM Access Analyzer"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 169,
    "question": "Quel service AWS offre aux utilisateurs la possibilité de créer des tableaux de bord de business intelligence interactifs qui incluent des informations sur l’apprentissage automatique ?",
    "options": [
      "Amazon Athena",
      "Amazon Kendra",
      "Amazon QuickSight",
      "Amazon Redshift"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 170,
    "question": "Laquelle des propositions de valeur AWS suivantes décrit la capacité d’un utilisateur à faire évoluer son infrastructure en fonction de la demande ?",
    "options": [
      "Vitesse d'innovation",
      "Élasticité des ressources",
      "Architecture découplée",
      "Déploiement mondial"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 171,
    "question": "Quelle action constitue une bonne pratique de sécurité pour l’accès aux données sensibles stockées dans un compartiment Amazon S3 ?",
    "options": [
      "Activez la réplication interrégionale S3 (CRR) sur le compartiment S3.",
      "Utilisez les rôles IAM pour les applications qui nécessitent un accès au bucket S3.",
      "Configurez AWS WAF pour empêcher tout accès non autorisé au compartiment S3.",
      "Configurez Amazon GuardDuty pour empêcher tout accès non autorisé au compartiment S3."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 172,
    "question": "Une entreprise souhaite en savoir plus sur les avantages du cloud computing. Elle souhaite comprendre l'avantage opérationnel de l'agilité. Comment AWS offre-t-il cette agilité aux utilisateurs ?",
    "options": [
      "La capacité d'assurer une haute disponibilité en déployant des charges de travail dans plusieurs régions",
      "Un modèle de paiement à l'utilisation pour de nombreux services et ressources",
      "La possibilité de transférer la gestion de l'infrastructure vers le cloud AWS",
      "La capacité de provisionner et de déprovisionner des ressources rapidement avec un minimum d'effort"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 173,
    "question": "Une entreprise a besoin d'un portail utilisateur centralisé pour permettre aux utilisateurs de se connecter à des applications métier tierces prenant en charge SAML (Security Assertion Markup Language) 2.0. Quel service AWS répondra à cette exigence ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon Cognito",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))",
      "AWS CLI"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 174,
    "question": "Quel service AWS les utilisateurs doivent-ils utiliser pour en savoir plus sur la disponibilité et les opérations du service AWS ?",
    "options": [
      "Amazon EventBridge",
      "AWS Service Catalog",
      "AWS Control Tower",
      "AWS Health Dashboard"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 175,
    "question": "Quel service ou outil AWS peut être utilisé pour capturer des informations sur le trafic entrant et sortant dans un Amazon VPC ?",
    "options": [
      "VPC Flow Logs",
      "Amazon Inspector",
      "VPC Endpoint",
      "Passerelle NAT"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 176,
    "question": "De quoi le client est-il TOUJOURS responsable de la gestion, selon le modèle de responsabilité partagée d'AWS ?",
    "options": [
      "Licences de logiciels",
      "Réseautage",
      "Données clients",
      "Clés de chiffrement"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 177,
    "question": "Quel service AWS peut être utilisé pour récupérer des rapports de conformité à la demande ?",
    "options": [
      "AWS Secrets Manager",
      "AWS Artefact",
      "AWS Security Hub",
      "AWS Certificate Manager (ACM)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 178,
    "question": "Quel service AWS permet aux utilisateurs de vérifier les vulnérabilités sur les instances Amazon EC2 à l’aide de modèles d’évaluation prédéfinis ?",
    "options": [
      "AWS WAF",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Shield"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 179,
    "question": "Une entreprise envisage de migrer vers le cloud AWS. Elle collecte des informations sur son infrastructure sur site et a besoin d'informations telles que le nom d'hôte, l'adresse IP et l'adresse MAC. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS DataSync",
      "AWS Application Migration Service",
      "AWS Application Discovery Service",
      "Service de migration de base de données AWS (AWS DMS)"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 180,
    "question": "Quelle action contribuera à accroître la sécurité dans le cloud AWS ?",
    "options": [
      "Activer l’accès programmatique pour tous les utilisateurs IAM.",
      "Utilisez des utilisateurs IAM au lieu de rôles IAM pour déléguer des autorisations.",
      "Faites tourner les clés d’accès de manière récurrente.",
      "Utilisez des politiques en ligne au lieu de politiques gérées par le client."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 181,
    "question": "Une entreprise envisage de migrer ses applications vers le cloud AWS. Quel outil ou ensemble de ressources AWS doit-elle utiliser pour analyser et évaluer son état de préparation à la migration ?",
    "options": [
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Calculateur de prix AWS",
      "AWS Well-Architected Framework",
      "AWS Budgets"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 182,
    "question": "Laquelle des propositions suivantes décrit certaines des fonctionnalités principales d’Amazon S3 ?",
    "options": [
      "Amazon S3 est un service de stockage en blocs hautes performances conçu pour être utilisé avec Amazon EC2.",
      "Amazon S3 est un service de stockage d'objets qui offre des performances, une sécurité, une évolutivité et une disponibilité des données de haut niveau.",
      "Amazon S3 est un système de stockage de fichiers entièrement géré, hautement fiable et évolutif, accessible via le protocole SMB standard du secteur.",
      "Amazon S3 est un NFS élastique évolutif et entièrement géré à utiliser avec les services AWS Cloud et les ressources sur site."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 183,
    "question": "Quel avantage AWS est démontré par les services technologiques à la demande qui permettent aux entreprises de remplacer les dépenses fixes initiales par des dépenses variables ?",
    "options": [
      "Haute disponibilité",
      "Économies d'échelle",
      "Tarification à l'utilisation",
      "Portée mondiale"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 184,
    "question": "Quels services ou fonctionnalités AWS permettent aux utilisateurs de connecter des réseaux locaux à un VPC ? (Choisissez deux réponses.)",
    "options": [
      "VPN AWS",
      "Équilibrage de charge élastique",
      "AWS Direct Connect",
      "VPC Peering",      
      "Amazon CloudFront"
    ],
    "correct": [
      0,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 185,
    "question": "Un utilisateur doit déployer rapidement une base de données non relationnelle sur AWS. Il ne souhaite pas gérer le matériel sous-jacent ni le logiciel de base de données. Quel service AWS peut être utilisé pour y parvenir ?",
    "options": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 186,
    "question": "Quelles actions sont des exemples d'efforts d'une entreprise pour dimensionner ses ressources AWS afin de contrôler les coûts du cloud ? (Choisissez deux.)",
    "options": [
      "Passez d’Amazon RDS à Amazon DynamoDB pour prendre en charge les ensembles de données NoSQL.",
      "Basez la sélection des types d’instances Amazon EC2 sur les modèles d’utilisation passés.",
      "Utilisez les politiques de cycle de vie Amazon S3 pour déplacer les objets auxquels les utilisateurs accèdent rarement vers des niveaux de stockage moins coûteux.",
      "Utilisez des déploiements multi-AZ pour Amazon RDS.",
      "Remplacez les instances Amazon EC2 existantes par AWS Elastic Beanstalk."
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 187,
    "question": "Quel service ou fonctionnalité AWS une entreprise peut-elle utiliser pour appliquer des règles de sécurité à des instances Amazon EC2 spécifiques ?",
    "options": [
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité",
      "AWS Trusted Advisor",
      "AWS WAF"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 188,
    "question": "Quels principes de conception soutiennent le pilier fiabilité du cadre AWS Well-Architected ? (Choisissez deux réponses.)",
    "options": [
      "Effectuer des opérations sous forme de code.",
      "Activer la traçabilité.",
      "Adaptez-vous automatiquement pour répondre à la demande.",
      "Déployez des ressources à l’échelle mondiale pour améliorer le temps de réponse.",
      "Récupération automatique après une panne."
    ],
    "correct": [
      2, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 189,
    "question": "Une entreprise utilisant AWS doit transférer 2 To de données. Quel type de transfert de données serait gratuit pour l'entreprise ?",
    "options": [
      "Transfert de données entrantes depuis Internet",
      "Transfert de données sortant vers Internet",
      "Transfert de données entre les régions AWS",
      "Transfert de données entre les zones de disponibilité"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 190,
    "question": "Une entreprise souhaite créer des modèles réutilisables pour déployer plusieurs ressources AWS. Quel service ou fonctionnalité AWS peut-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "AWS MarketPlace",
      "Amazon machine Image (AMI)",
      "AWS CloudFormation",
      "AWS OpsWorks"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 191,
    "question": "Une entreprise développe une application nécessitant la capacité d'envoyer, de stocker et de recevoir des messages entre ses composants. Elle doit également traiter les messages selon  l'ordre FIFO (premier entré, premier sorti). Quel service AWS doit-elle utiliser ?",
    "options": [
      "AWS Step Functions",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Flux de données Amazon Kinesis",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 192,
    "question": "Quel service ou fonctionnalité AWS est un service pré-authentifié basé sur un navigateur qui peut être lancé directement depuis la console de gestion AWS ?",
    "options": [
      "API AWS",
      "AWS Lightsail",
      "AWS Cloud9",
      "AWS CloudShell"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 193,
    "question": "Une entreprise souhaite migrer sa base de données vers un service AWS managé compatible avec PostgreSQL. Quels services AWS répondront à ces exigences ? (Choisissez deux réponses.)",
    "options": [
      "Amazon Athena",
      "Amazon RDS",
      "Amazon EC2",
      "Amazon DynamoDB",
      "Amazon Aurora"
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 194,
    "question": "Une entreprise possède une flotte de cargos. Ces navires sont équipés de capteurs qui collectent des données en mer, là où la connexion internet est intermittente ou inexistante. L'entreprise doit collecter, formater et traiter ces données en mer, puis les transférer vers AWS. Quel service AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS IoT Core",
      "Amazon Lightsail",
      "AWS Storage Gateway",
      "AWS Snowball Edge"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 195,
    "question": "Une entreprise héberge une application sur plusieurs instances Amazon EC2. L'application utilise Amazon Simple Notification Service (Amazon SNS) pour envoyer des messages. Quel service ou fonctionnalité AWS autorisera l'application à accéder aux services AWS requis ?",
    "options": [
      "AWS Certificate Manager (ACM)",
      "Rôles IAM",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 196,
    "question": "Un utilisateur a une connaissance limitée des services AWS, mais souhaite déployer rapidement une application Node.js évolutive dans le cloud AWS. Quel service utiliser pour déployer l'application ?",
    "options": [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS OpsWorks"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 197,
    "question": "Une entreprise a besoin d'un réseau de diffusion de contenu (CDN) capable de fournir des données, des vidéos, des applications et des API sécurisées aux utilisateurs du monde entier, avec une faible latence et des vitesses de transfert élevées. Quel service AWS répond à ces exigences ?",
    "options": [
      "Amazon CloudFront",
      "Équilibrage de charge élastique",
      "Amazon S3",
      "Amazon Elastic Transcoder"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 198,
    "question": "Une entreprise doit utiliser un logiciel tiers pour gérer sa charge de travail sur AWS. Quel service ou fonctionnalité AWS peut-elle utiliser pour acheter ce logiciel ?",
    "options": [
      "Gestionnaire d'accès aux ressources AWS",
      "Services gérés AWS",
      "AWS License Manager",
      "AWS MarketPlace"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 199,
    "question": "Une entreprise a besoin d'un stockage de fichiers entièrement géré, hautement fiable et évolutif, accessible via le protocole SMB (Server Message Block). Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon S3",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon FSx for Windows File Server",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 200,
    "question": "Une entreprise doit configurer et gérer de manière centralisée des groupes de sécurité Amazon VPC sur plusieurs comptes AWS au sein d'une organisation dans AWS Organizations. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Gestionnaire de pare-feu AWS",
      "Amazon GuardDuty",
      "Amazon Detective",
      "AWS WAF"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 201,
    "question": "Quelle tâche relève de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Configurer la gestion des identités et des accès pour les applications.",
      "Gérez les options de cryptage pour les données stockées sur AWS.",
      "Configurer des groupes de sécurité pour les instances Amazon EC2.",
      "Maintenir le matériel physique de l'infrastructure."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 202,
    "question": "Une entreprise possède une instance Amazon EC2 sur un sous-réseau privé. Elle souhaite établir une connexion à Internet pour récupérer les mises à jour du système d'exploitation tout en empêchant le trafic Internet d'accéder à l'instance EC2. Quel service géré AWS permet cette connexion ?",
    "options": [
      "VPC Endpoint",
      "passerelle NAT",
      "Amazon PrivateLink",
      "VPC Peering"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 203,
    "question": "Quelles actions relèvent de la responsabilité d'AWS, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.)",
    "options": [
      "Sécurisation de la couche de virtualisation",
      "Correction du système d'exploitation sur les instances Amazon EC2",
      "Application d'une politique de mot de passe stricte pour les utilisateurs IAM",
      "Correction du système d'exploitation sur les instances Amazon RDS",
      "Configuration des groupes de sécurité et des ACL réseau"
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 204,
    "question": "Une entreprise stocke des données peu consultées dans le cloud AWS. Si elle doit accéder à ces données, celles-ci doivent être récupérées dans les 12 heures. Elle recherche une solution rentable pour le stockage par gigaoctet. Quelle classe de stockage Amazon S3 répondra à ces exigences ?",
    "options": [
      "Amazon S3 Standard",
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon S3 One Zone-IA",
      "Amazon S3 Standard - Accès peu fréquent (Amazon S3 Standard - IA)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 205,
    "question": "Quel service ou ressource AWS peut être utilisé pour identifier les services qui ont été utilisés par un utilisateur dans une plage de dates spécifiée ?",
    "options": [
      "Listes de contrôle d'accès (ACL) Amazon S3",
      "AWS Certificate Manager (ACM)",
      "Analyseur d'accès au réseau",
      "Analyseur d'accès AWS Identity and Access Management"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 206,
    "question": "Une entreprise doit faire appel à des consultants externes pour assurer la maintenance et le support de son environnement AWS et répondre à ses besoins métier. Quel service ou ressource AWS répondra à ces exigences ?",
    "options": [
      "Assistance AWS",
      "AWS Organizations",
      "AWS Service Catalog",
      "Réseau de partenaires AWS (APN)"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 207,
    "question": "Une entreprise souhaite créer des tableaux de bord Amazon QuickSight chaque semaine à partir de ses données de facturation. Quelle fonctionnalité ou quel outil AWS peut-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "Rapport sur les coûts et l'utilisation d'AWS",
      "Détection des anomalies de coût AWS"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 208,
    "question": "Une entreprise envisage de migrer ses sauvegardes de données vers le cloud AWS. Elle doit remplacer son stockage sur site par un stockage cloud, mais mis en cache localement. Quel service AWS répond à ces exigences ?",
    "options": [
      "AWS Storage Gateway",
      "AWS Snowcone",
      "AWS Backup",
      "Amazon Elastic File System (Amazon EFS)"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 209,
    "question": "Une entreprise doit organiser ses ressources et suivre les coûts AWS de manière détaillée. Elle doit catégoriser les coûts par service, environnement et application. Quelle solution répondra à ces exigences ?",
    "options": [
      "Accédez à la console AWS Cost Management pour organiser les ressources, définir un budget AWS et recevoir des notifications d'utilisation involontaire.",
      "Utilisez des balises pour organiser les ressources. Activez les balises d'allocation des coûts pour suivre les coûts AWS de manière détaillée.",
      "Créez des tableaux de bord Amazon CloudWatch pour organiser et suivre visuellement les coûts individuellement.",
      "Accédez au tableau de bord AWS Billing and Cost Management pour organiser et suivre la consommation des ressources à un niveau détaillé."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 210,
    "question": "Une entreprise doit planifier, programmer et exécuter des centaines de milliers de tâches informatiques sur AWS. Quel service AWS peut-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "AWS Step Functions",
      "AWS Service Catalog",
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Batch"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 211,
    "question": "Quels services ou fonctionnalités AWS offrent une haute disponibilité et une faible latence en permettant le basculement entre différentes régions AWS ? (Choisissez deux réponses.)",
    "options": [
      "Amazon Route 53",
      "Équilibreur de charge réseau",
      "Accélération du transfert Amazon S3",
      "AWS Global Accelerator",
      "Équilibreur de charge d'application"
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 212,
    "question": "Quelles capacités constituent les avantages du Cloud AWS ? (Choisissez deux réponses.)",
    "options": [
      "Échangez les dépenses variables contre des dépenses en capital.",
      "Déployez à l’échelle mondiale en quelques minutes.",
      "Planifiez la capacité avant les déploiements.",
      "Bénéficiez d’économies d’échelle.",
      "Réduisez les dépendances à la connectivité réseau."
    ],
    "correct": [
      1,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 213,
    "question": "Quel service de sécurité AWS protège les applications contre les attaques par déni de service distribué avec une détection permanente et des atténuations automatiques en ligne ?",
    "options": [
      "Amazon Inspector",
      "Pare-feu d'application Web AWS (AWS WAF)",
      "Équilibrage de charge élastique (ELB)",
      "AWS Shield"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 214,
    "question": "Quel service AWS permet aux utilisateurs de modéliser et de provisionner des ressources AWS à l’aide de langages de programmation courants ?",
    "options": [
      "AWS CloudFormation",
      "AWS CodePipeline",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS Systems Manager"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 215,
    "question": "Quel modèle de tarification d'instance Amazon EC2 peut offrir des remises allant jusqu'à 90 % ?",
    "options": [
      "Reserved Instances",
      "On-Demand Instances",
      "Dedicated Hosts",
      "Spot Instances"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 216,
    "question": "Lequel des éléments suivants agit comme un pare-feu au niveau de l’instance pour contrôler l’accès entrant et sortant ?",
    "options": [
      "Liste de contrôle d'accès au réseau",
      "Groupes de sécurité",
      "AWS Trusted Advisor",
      "Passerelles privées virtuelles"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 217,
    "question": "Une entreprise doit pouvoir développer, tester et lancer rapidement une application dans le cloud AWS. Quels avantages du cloud computing permettent de répondre à ces exigences ?",
    "options": [
      "Arrêtez de deviner la capacité",
      "Échangez les dépenses fixes contre des dépenses variables",
      "Réaliser des économies d'échelle",
      "Augmenter la vitesse et l'agilité"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 218,
    "question": "Une entreprise dispose d'équipes aux rôles et responsabilités variés. Les employés changent souvent d'équipe. L'entreprise doit gérer les autorisations des employés afin qu'elles soient adaptées à leurs responsabilités. Quelle ressource IAM l'entreprise doit-elle utiliser pour répondre à cette exigence avec un minimum de charge opérationnelle ?",
    "options": [
      "Groupes d'utilisateurs IAM",
      "Rôles IAM",
      "Profils d'instance IAM",
      "Politiques IAM pour les utilisateurs individuels"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 219,
    "question": "Quel service AWS une entreprise peut-elle utiliser pour stocker et crypter en toute sécurité les mots de passe d’une base de données ?",
    "options": [
      "AWS Shield",
      "AWS Secrets Manager",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon Cognito"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 220,
    "question": "Que peut utiliser un praticien du cloud pour récupérer les documents de sécurité et de conformité AWS et les soumettre comme preuve à un auditeur ou à un régulateur ?",
    "options": [
      "AWS Certificate Manager (ACM)",
      "AWS Systems Manager",
      "AWS Artefact",
      "Amazon Inspector"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 221,
    "question": "Quels types de chiffrement peuvent être utilisés pour protéger les objets au repos dans Amazon S3 ? (Choisissez deux réponses.)",
    "options": [
      "Chiffrement côté serveur avec clés de chiffrement gérées par Amazon S3 (SSE-S3)",
      "Chiffrement côté serveur avec clés gérées par AWS Key Management Service (AWS KMS) (SSE-KMS)",
      "TLS",
      "SSL",
      "Chiffrement transparent des données (TDE)"
    ],
    "correct": [
      0,
      1
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 222,
    "question": "Une entreprise souhaite intégrer son site de vente en ligne à ses identifiants de connexion aux réseaux sociaux. Quel service AWS peut-elle utiliser pour réaliser cette intégration ?",
    "options": [
      "Service d'annuaire AWS",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon Cognito",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 223,
    "question": "Quel service AWS est utilisé pour suivre, enregistrer et auditer les modifications de configuration apportées aux ressources AWS ?",
    "options": [
      "AWS Shield",
      "AWS Config",
      "AWS IAM",
      "Amazon Inspector"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 224,
    "question": "Un client exécute une instance Amazon Linux EC2 à la demande pendant 3 heures, 5 minutes et 6 secondes. Combien de temps sera facturé au client ?",
    "options": [
      "3 heures, 5 minutes",
      "3 heures, 5 minutes et 6 secondes",
      "3 heures, 6 minutes",
      "4 heures"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 225,
    "question": "Le site web d'une entreprise est victime d'attaques DDoS. Quel service AWS peut protéger le site web de l'entreprise contre ces attaques ?",
    "options": [
      "Gestionnaire d'accès aux ressources AWS",
      "AWS Amplify",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 226,
    "question": "Une entreprise souhaite une évaluation personnalisée de son environnement sur site actuel. Elle souhaite comprendre ses coûts d'exploitation prévisionnels dans le cloud AWS. Quel service ou outil AWS répondra à ces exigences ?",
    "options": [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Control Tower",
      "Évaluateur de migration"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 227,
    "question": "Une entreprise composée de plusieurs unités opérationnelles souhaite centraliser la gestion et la gouvernance de ses environnements cloud AWS. Elle souhaite automatiser la création de comptes AWS, appliquer des politiques de contrôle des services (SCP) et simplifier les processus de facturation. Quel service ou outil AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 228,
    "question": "Une entreprise héberge une application dans le cloud AWS. Elle souhaite vérifier le bon fonctionnement des services AWS sous-jacents et de l'infrastructure AWS générale. Quelle combinaison de services AWS l'entreprise peut-elle utiliser pour collecter les informations nécessaires ? (Choisissez deux réponses.)",
    "options": [
      "Tableau de bord de santé personnel AWS",
      "AWS Systems Manager",
      "AWS Trusted Advisor",
      "Tableau de bord de l'état du service AWS",
      "AWS Service Catalog"
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 229,
    "question": "Une entreprise doit migrer une base de données PostgreSQL de son site vers Amazon RDS. Quel service ou outil AWS doit-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Outil de préparation à l'adoption du cloud",
      "AWS Migration Hub",
      "Service de migration de base de données AWS (AWS DMS)",
      "AWS Application Migration Service"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 230,
    "question": "Quel concept de cloud est démontré à l’aide d’AWS Compute Optimizer ?",
    "options": [
      "Validation de sécurité",
      "Auto Scaling",
      "Élasticité",
      "Portée mondiale"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 231,
    "question": "Une entreprise héberge une grande quantité de données sur AWS. Elle souhaite déterminer si certaines de ces données doivent être considérées comme sensibles. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Inspector",
      "Amazon Macie",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon CloudWatch"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 232,
    "question": "Un utilisateur dispose d'une charge de travail avec état qui s'exécutera sur Amazon EC2 pendant les trois prochaines années. Quel est le modèle de tarification le plus rentable pour cette charge de travail ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Instances dédiées",
      "Spot Instances"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 233,
    "question": "Qui active le chiffrement des données au repos pour Amazon Elastic Block Store (Amazon EBS) ?",
    "options": [
      "Assistance AWS",
      "clients AWS",
      "Service de gestion des clés AWS (AWS Key Management Service (AWS KMS))",
      "AWS Trusted Advisor"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 234,
    "question": "Que peut accomplir un utilisateur en utilisant AWS CloudTrail ?",
    "options": [
      "Générer un rapport sur les informations d’identification des utilisateurs IAM.",
      "Enregistrez les appels API effectués vers les services AWS.",
      "Évaluez la conformité des configurations de ressources AWS avec les politiques et les directives.",
      "Assurez-vous que les instances Amazon EC2 sont corrigées avec les dernières mises à jour de sécurité."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 235,
    "question": "Une entreprise envisage d'héberger ses charges de travail sur AWS. Quel service AWS nécessite la mise à jour et l'application de correctifs au système d'exploitation invité ?",
    "options": [
      "Amazon DynamoDB",
      "Amazon S3",
      "Amazon EC2",
      "Amazon Aurora"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 236,
    "question": "Quel service ou fonctionnalité AWS recherchera et identifiera les ressources AWS partagées en externe ?",
    "options": [
      "Service Amazon OpenSearch",
      "AWS Control Tower",
      "IAM Access Analyzer",
      "AWS Fargate"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 237,
    "question": "Une entreprise migre ses charges de travail vers le cloud AWS. Elle doit conserver le contrôle total de la gestion des correctifs pour les systèmes d'exploitation invités qui hébergent ses applications. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Amazon DynamoDB",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 238,
    "question": "À quel niveau d'assistance les utilisateurs ont-ils accès à un concierge d'assistance ?",
    "options": [
      "Assistance de base",
      "Assistance aux développeurs",
      "Soutien aux entreprises",
      "Assistance aux entreprises"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 239,
    "question": "Quel service AWS une entreprise peut-elle utiliser pour concevoir et créer visuellement des applications sans serveur ?",
    "options": [
      "AWS Lambda",
      "AWS Batch",
      "AWS Application Composer",
      "AWS App Runner"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 240,
    "question": "Une entreprise souhaite migrer vers AWS et utiliser le même logiciel de sécurité qu'en local. Le fournisseur propose son logiciel de sécurité en tant que service sur AWS. Où l'entreprise peut-elle se procurer cette solution de sécurité ?",
    "options": [
      "Recherche de solutions partenaires AWS",
      "Centre de support AWS",
      "Console de gestion AWS",
      "AWS MarketPlace"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 241,
    "question": "Une entreprise a déployé une instance Amazon EC2. Quelle option relève de la responsabilité d'AWS dans le cadre du modèle de responsabilité partagée d'AWS ?",
    "options": [
      "Gestion et cryptage des données d'application",
      "Installation des mises à jour et des correctifs de sécurité du système d'exploitation invité",
      "Configuration des dispositifs d'infrastructure",
      "Configuration des groupes de sécurité sur chaque instance"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 242,
    "question": "Une entreprise souhaite migrer sa base de données PostgreSQL vers AWS. Elle n'utilise pas fréquemment cette base de données. Quel service ou ressource AWS répondra à ces exigences avec le MOINS de frais de gestion ?",
    "options": [
      "PostgreSQL sur Amazon EC2",
      "Amazon RDS pour PostgreSQL",
      "Édition compatible Amazon Aurora PostgreSQL",
      "Amazon Aurora sans serveur"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 243,
    "question": "Une entreprise utilise Amazon DynamoDB pour sa base de données applicative. Quelles tâches sont de la responsabilité d'AWS, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.)",
    "options": [
      "Classer les données.",
      "Configurer les autorisations d'accès.",
      "Gérer les options de cryptage.",
      "Fournir des points de terminaison publics pour stocker et récupérer des données.",
      "Gérer la couche infrastructure et le système d'exploitation."
    ],
    "correct": [
      3, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 244,
    "question": "Une entreprise souhaite créer une plateforme de commerce électronique accessible à l'échelle mondiale pour ses clients. Elle souhaite utiliser un service web DNS hautement disponible et évolutif pour connecter les utilisateurs à la plateforme. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon EC2",
      "Amazon VPC",
      "Amazon Route 53",
      "Amazon RDS"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 245,
    "question": "Quelle tâche de maintenance relève de la responsabilité du client, selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Connectivité physique entre les zones de disponibilité",
      "Maintenance des commutateurs réseau",
      "Mises à jour matérielles et correctifs du micrologiciel",
      "Mises à jour et correctifs de sécurité Amazon EC2"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 246,
    "question": "Une entreprise souhaite améliorer sa sécurité en analysant l'activité des utilisateurs via des appels d'API. Quel service AWS répondra à cette exigence ?",
    "options": [
      "AWS WAF",
      "Amazon Detective",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 247,
    "question": "Une entreprise bénéficiant du support AWS Enterprise lance une nouvelle version d'un produit populaire dans deux mois. Elle prévoit une forte augmentation du trafic sur son site web. Ce dernier est hébergé sur des instances Amazon EC2.  Quelles mesures l'entreprise doit-elle prendre pour évaluer sa capacité à évoluer en vue de ce lancement ?",
    "options": [
      "Remplacez les instances EC2 par des fonctions AWS Lambda.",
      "Utilisez la prise en charge d'AWS Infrastructure Event Management (IEM).",
      "Soumettez une demande sur AWS Marketplace pour surveiller l'événement.",
      "Consultez les rapports de couverture dans la console AWS Cost Management."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 248,
    "question": "Une entreprise souhaite déployer plusieurs charges de travail sur AWS. Chaque charge de travail est liée à une unité opérationnelle distincte. L'entreprise souhaite séparer et suivre les coûts de chaque unité opérationnelle. Quelle solution répondra à ces exigences avec le MOINS de frais opérationnels ?",
    "options": [
      "Utilisez AWS Organizations et créez un compte pour chaque unité commerciale.",
      "Utilisez une feuille de calcul pour contrôler les propriétaires et le coût de chaque ressource.",
      "Utilisez une table Amazon DynamoDB pour enregistrer les coûts de chaque unité commerciale.",
      "Utilisez la console de facturation AWS pour attribuer des propriétaires aux ressources et suivre les coûts."
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 249,
    "question": "Une entreprise souhaite un service de base de données chronologiques facilitant le stockage et l'analyse de milliards d'événements quotidiens. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Neptune",
      "Amazon Timestream",
      "Prévisions Amazon",
      "Amazon DocumentDB (with MongoDB compatibility)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 250,
    "question": "Quelle option est un contrôle partagé entre AWS et le client, selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Gestion de la configuration",
      "Contrôles physiques et environnementaux",
      "Authentification de l'intégrité des données",
      "Gestion des identités et des accès"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 251,
    "question": "Il arrive souvent qu'une entreprise n'utilise pas toute sa capacité Amazon EC2 actuelle pour exécuter des charges de travail sans état. Elle souhaite optimiser ses coûts EC2. Quel type d'instance EC2 répondra à ces exigences ?",
    "options": [
      "Spot Instances",
      "Instances dédiées",
      "Reserved Instances",
      "On-Demand Instances"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 252,
    "question": "Une entreprise souhaite stocker ses données sur Amazon S3. Elle y accède rarement et celles- ci peuvent être régénérées si nécessaire. Elle souhaite stocker ses données dans la classe de stockage la plus économique. Quelle classe de stockage S3 répondra à ce besoin ?",
    "options": [
      "Amazon S3 Standard",
      "Amazon S3 Intelligent-Tiering",
      "Amazon S3 Standard - Accès peu fréquent (Amazon S3 Standard - IA)",
      "Amazon S3 One Zone-IA"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 253,
    "question": "Une entreprise a migré ses charges de travail vers AWS. Elle souhaite adopter AWS à grande échelle et opérer de manière plus efficace et sécurisée. Quel service ou framework AWS devrait-elle utiliser pour son support opérationnel ?",
    "options": [
      "Assistance AWS",
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Services gérés AWS (AMS)",
      "AWS Well-Architected Framework"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 254,
    "question": "Une entreprise souhaite provisionner et gérer son infrastructure AWS en utilisant les langages de programmation courants TypeScript, Python, Java et .NET. Quel service AWS répondra à ce besoin ?",
    "options": [
      "AWS CodeBuild",
      "AWS CloudFormation",
      "AWS CLI",
      "AWS Cloud Development Kit (AWS CDK)"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 255,
    "question": "Quel modèle de tarification Amazon EC2 offre les PLUS d'économies pour un serveur de base de données toujours opérationnel et de taille adaptée, exécuté pour un projet qui durera 1 an ?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances convertibles",
      "Spot Instances",
      "Reserved Instances standard"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 256,
    "question": "Une entreprise possède une bibliothèque de bandes physiques pour stocker ses sauvegardes de données. L'espace disponible est insuffisant. L'entreprise doit étendre sa capacité au cloud AWS. Quel service AWS doit-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3",
      "AWS Storage Gateway"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 257,
    "question": "Une entreprise utilise l'offre gratuite AWS pour plusieurs services AWS d'une même application. Que se passera-t-il si la période d'utilisation de l'offre gratuite expire ou si l'utilisation de l'application dépasse les limites d'utilisation de l'offre gratuite ?",
    "options": [
      "L'entreprise sera facturée aux tarifs de service standard à la carte pour l'utilisation dépassant l'utilisation du niveau gratuit.",
      "Le support AWS contactera l'entreprise pour définir les frais de service standard.",
      "L'entreprise sera facturée pour les services consommés pendant la période de l'offre gratuite, ainsi que des frais supplémentaires pour la consommation de services après la période de l'offre gratuite.",
      "Le compte AWS de l'entreprise sera gelé et pourra être redémarré une fois un plan de paiement établi."
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 258,
    "question": "Une entreprise souhaite surveiller les performances de sa charge de travail. Elle souhaite s'assurer que les services cloud sont fournis à un niveau qui répond à ses besoins métier. Quelle approche du Cadre d'adoption du cloud AWS (AWS CAF) répond à ces exigences ?",
    "options": [
      "Entreprise",
      "Gouvernance",
      "Plate-forme",
      "Opérations"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 259,
    "question": "Une entreprise souhaite migrer ses applications vers le cloud AWS. Elle prévoit d'identifier et de prioriser les opportunités de transformation et d'évaluer son niveau de préparation au cloud AWS. Quel service ou outil AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Services gérés AWS (AMS)",
      "AWS Well-Architected Framework",
      "AWS Migration Hub"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 260,
    "question": "Une entreprise a besoin d'un service AWS fournissant une base claire de ce qu'elle exploite dans ses centres de données sur site. Elle a également besoin d'une estimation du coût d'exécution de ses charges de travail sur site dans le cloud AWS. Quel service ou outil AWS répondra à ces exigences ?",
    "options": [
      "AWS Calcul Optimizer",
      "AWS Cost Explorer",
      "Agent AWS Systems Manager (agent SSM)",
      "Évaluateur de migration"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 261,
    "question": "Une entreprise a acquis une autre société. Elle possède désormais deux comptes AWS. Quel service ou outil AWS peut-elle utiliser pour consolider la facturation de ces deux comptes ?",
    "options": [
      "AWS Systems Manager",
      "AWS Organizations",
      "AWS License Manager",
      "AWS Cost Explorer"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 262,
    "question": "Une entreprise souhaite configurer ses charges de travail pour qu'elles remplissent leurs fonctions prévues et se remettent rapidement d'une panne. Quel pilier du cadre AWS Well-Architected s'aligne sur ces objectifs ?",
    "options": [
      "Efficacité des performances",
      "Durabilité",
      "Fiabilité",
      "Sécurité"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 263,
    "question": "Lequel des services AWS suivants est géré et utilisé spécifiquement pour extraire, transformer et charger des données (ETL) ?",
    "options": [
      "Amazon Athena",
      "AWS Glue",
      "Amazon S3",
      "AWS Snowball Edge"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 264,
    "question": "Une entreprise souhaite migrer des pétaoctets de données de son centre de données local vers AWS. Elle ne souhaite pas utiliser de connexion Internet pour effectuer la migration. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS DataSync",
      "Amazon Connect",
      "AWS Snowmobile",
      "AWS Direct Connect"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 265,
    "question": "Une entreprise souhaite recevoir des alertes pour surveiller ses coûts d'exploitation globaux liés à son infrastructure cloud publique AWS. Quelle offre AWS répondra à ces exigences ?",
    "options": [
      "Amazon EventBridge",
      "Calculer les plans d'épargne",
      "AWS Budgets",
      "Évaluateur de migration"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 266,
    "question": "Comment l’équipe AWS Enterprise Support Concierge aide-t-elle les utilisateurs ?",
    "options": [
      "Soutenir le développement d'applications",
      "Fournir des conseils en matière d'architecture",
      "Répondre aux demandes de facturation et de compte",
      "Répondre aux questions concernant les cas d'assistance technique"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 267,
    "question": "Une entreprise souhaite exécuter une simulation pendant 3 ans sans interruption. Quelle option d'achat d'instance Amazon EC2 répondra le mieux à ces exigences au meilleur rapport qualité-prix ?",
    "options": [
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
      "On-Demand Instances"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 268,
    "question": "Quel service ou ressource AWS peut offrir des remises sur certains coûts de service AWS en échange d’un engagement de dépenses ?",
    "options": [
      "Amazon Detective",
      "Calculateur de prix AWS",
      "Savings Plans",
      "Assistance de base"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 269,
    "question": "Lesquels des éléments suivants constituent les piliers du cadre AWS Well-Architected ? (Choisissez deux réponses.)",
    "options": [
      "Haute disponibilité",
      "Efficacité des performances",
      "Optimisation des coûts",
      "Devenir mondial en quelques minutes",
      "Développement continu"
    ],
    "correct": [
      1, 2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 270,
    "question": "Une entreprise souhaite utiliser des instances Amazon EC2 pour proposer un site web statique à ses utilisateurs du monde entier. Elle doit minimiser la latence pour ses utilisateurs. Quelle solution répond à ces exigences ?",
    "options": [
      "Utilisez des instances EC2 dans plusieurs emplacements périphériques.",
      "Utilisez des instances EC2 dans la même zone de disponibilité mais dans différentes régions AWS.",
      "Utilisez Amazon CloudFront avec les instances EC2 configurées comme source.",
      "Utilisez des instances EC2 dans la même zone de disponibilité mais dans des comptes AWS différents."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 271,
    "question": "Une équipe de chercheurs va collecter des données dans des endroits isolés du monde entier. Nombreux d'entre eux ne disposent pas d'une connexion Internet. L'équipe doit collecter les données sur le terrain et les transférer ultérieurement vers le cloud AWS. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS Outposts",
      "AWS DataSync",
      "AWS Snow Family",
      "AWS Migration Hub"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 272,
    "question": "Parmi les avantages suivants, lesquels représentent pour une entreprise le transfert d'une charge de travail de production sur site vers AWS ? (Choisissez deux réponses.)",
    "options": [
      "AWS forme le personnel de l'entreprise à l'utilisation de tous les services AWS.",
      "AWS gère toute la sécurité dans le cloud.",
      "AWS propose une assistance gratuite de la part de gestionnaires de comptes techniques (TAM).",
      "AWS offre une haute disponibilité.", 
      "AWS offre des économies d’échelle."
    ],
    "correct": [
      3, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 273,
    "question": "Une entreprise a décidé d'adopter l'infrastructure Amazon EC2 et souhaite déployer divers services sans état pour une utilisation à court terme. Quel modèle de tarification EC2 est le plus rentable pour répondre à ces besoins ?",
    "options": [
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 274,
    "question": "Parmi les avantages suivants, lesquels sont offerts par AWS Trusted Advisor ? (Choisissez deux options.)",
    "options": [
      "Accès à Amazon Simple Queue Service (Amazon SQS)",
      "Recommandations d'optimisation des coûts",
      "Actualisation horaire des contrôles de limite de service",
      "Contrôles de sécurité",
      "Gestion des approbations AWS Identity and Access Management (IAM)"
    ],
    "correct": [
      1,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 275,
    "question": "Une entreprise souhaite réduire ses coûts en archivant les données auxquelles les utilisateurs finaux n'ont plus accès fréquemment. Quelle fonctionnalité d'Amazon S3 répond à ce besoin ?",
    "options": [
      "Gestion des versions S3",
      "Cycle de vie S3",
      "Verrouillage d'objet S3",
      "Inventaire S3"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 276,
    "question": "Quel avantage du cloud computing une entreprise applique-t-elle lorsqu'elle utilise les régions AWS pour augmenter la disponibilité des applications pour les utilisateurs dans différents pays ?",
    "options": [
      "Tarification à l'utilisation",
      "Prévision de capacité",
      "Économies d'échelle",
      "Portée mondiale"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 277,
    "question": "Une entreprise souhaite utiliser un service AWS pour collecter et traiter 10 To de données localement et les transférer vers AWS. La connectivité de l'entreprise est intermittente. Quel service AWS répondra à ces besoins ?",
    "options": [
      "Service de migration de base de données AWS (AWS DMS)",
      "AWS DataSync",
      "AWS Backup",
      "AWS Snowball Edge"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 278,
    "question": "Lequel des éléments suivants est un principe de conception du cadre AWS Well-Architected pour l’excellence opérationnelle dans le cloud AWS ?",
    "options": [
      "Devenez mondial en quelques minutes.",
      "Faites des changements fréquents, petits et réversibles.",
      "Mettre en œuvre une base solide de gestion des identités et des accès",
      "Arrêtez de dépenser de l’argent en infrastructure matérielle pour les opérations du centre de données."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 279,
    "question": "Quel est l’avantage d’utiliser l’informatique sans serveur AWS ?",
    "options": [
      "Le déploiement et la gestion des applications ne sont pas requis.",
      "La sécurité des applications sera entièrement gérée par AWS.",
      "La surveillance et la journalisation ne sont pas nécessaires.",
      "La gestion de l’infrastructure est confiée à AWS."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 280,
    "question": "Un développeur souhaite que les utilisateurs AWS puissent accéder aux services AWS à l'aide d'identifiants de sécurité temporaires. Quel service ou fonctionnalité AWS doit-il utiliser pour fournir ces identifiants ?",
    "options": [
      "Politiques IAM",
      "Groupes d'utilisateurs IAM",
      "AWS Security Token Service (AWS STS)",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 281,
    "question": "Une entreprise internationale souhaite utiliser un service de sécurité géré pour se protéger contre les attaques par injection SQL. Ce service doit également fournir des informations de journalisation détaillées sur l'accès à ses applications e-commerce. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Pare-feu réseau AWS",
      "Amazon RDS pour SQL Server",
      "Amazon GuardDuty",
      "AWS WAF"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 282,
    "question": "Une entreprise migre son serveur sur site vers une instance Amazon EC2. Le serveur doit rester actif en permanence pendant les 12 prochains mois. Quelle option tarifaire EC2 est la plus rentable pour la charge de travail de l'entreprise ?",
    "options": [
      "On-Demand Instances",
      "Dedicated Hosts",
      "Spot Instances",
      "Reserved Instances"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 283,
    "question": "Laquelle des responsabilités suivantes incombe au client dans le cadre du modèle de responsabilité partagée AWS ? (Choisissez deux options.)",
    "options": [
      "Maintenir la configuration des périphériques d'infrastructure.",
      "Maintenir les correctifs et les mises à jour au sein de l'infrastructure matérielle.",
      "Maintenir la configuration des systèmes d’exploitation et des applications invités.",
      "Gérer les décisions impliquant des options de cryptage. ",
      "Maintenir le matériel d'infrastructure."
    ],
    "correct": [
      2,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 284,
    "question": "Une entreprise souhaite vérifier si l'authentification multifacteur (MFA) est activée pour tous les utilisateurs de ses comptes AWS. Quel service ou ressource AWS répond à cette exigence ?",
    "options": [
      "Rapport sur les coûts et l'utilisation d'AWS",
      "Rapports d'identification IAM",
      "AWS Artefact",
      "Rapports Amazon CloudFront"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 285,
    "question": "Une entreprise utilise les services et outils de sécurité AWS. Elle a besoin d'un service pour gérer les alertes de sécurité et les organiser dans un tableau de bord unique. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Security Hub"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 286,
    "question": "Une entreprise souhaite exécuter efficacement ses charges de travail dans le cloud AWS, réduire ses frais de gestion et améliorer ses processus. Quel pilier du framework AWS Well-Architected répond à ces exigences ?",
    "options": [
      "Fiabilité",
      "Excellence opérationnelle",
      "Efficacité des performances",
      "Optimisation des coûts"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 287,
    "question": "Une entreprise utilise Amazon S3 pour stocker des enregistrements susceptibles de contenir des informations personnelles identifiables (IPI). Elle recherche une solution capable de surveiller tous les compartiments S3 à la recherche d'IPI et d'alerter immédiatement le personnel en cas de vulnérabilité. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon GuardDuty",
      "Amazon Detective",
      "Amazon Macie",
      "AWS Shield"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 288,
    "question": "Quel service AWS permet aux utilisateurs de télécharger des rapports de sécurité et de conformité sur l’infrastructure AWS à la demande ?",
    "options": [
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Artefact",
      "AWS Shield"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 289,
    "question": "Un auditeur externe a demandé à une entreprise de lui fournir la liste de tous ses utilisateurs IAM, y compris le statut de leurs identifiants et clés d'accès. Quelle est la manière la plus simple de fournir ces informations ?",
    "options": [
      "Créez un compte utilisateur IAM pour l’auditeur, en lui accordant des autorisations d’administrateur.",
      "Prenez une capture d'écran de la page de chaque utilisateur dans la console de gestion AWS, puis fournissez les captures d'écran à l'auditeur.",
      "Téléchargez le rapport d’accréditation IAM, puis fournissez-le à l’auditeur.",
      "Téléchargez le rapport AWS Trusted Advisor, puis fournissez-le à l’auditeur."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 290,
    "question": "Quelle tâche une entreprise peut-elle effectuer en utilisant des groupes de sécurité dans le cloud AWS ?",
    "options": [
      "Autoriser l’accès à une instance Amazon EC2 via un port spécifique uniquement.",
      "Refuser l’accès aux adresses IP malveillantes au niveau du sous-réseau.",
      "Protégez les données mises en cache par Amazon CloudFront.",
      "Appliquez un pare-feu sans état à une instance Amazon EC2."
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 291,
    "question": "Une entreprise prévoit d'exécuter une charge de travail gourmande en ressources de calcul utilisant des processeurs graphiques (GPU). Quel type d'instance Amazon EC2 doit-elle utiliser ?",
    "options": [
      "Calcul accéléré",
      "Calcul optimisé",
      "Stockage optimisé",
      "Usage général"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 292,
    "question": "Lesquelles des caractéristiques suivantes correspondent aux listes de contrôle d'accès réseau utilisées dans le cloud AWS ? (Choisissez deux options.)",
    "options": [
      "Ils sont apatrides.",
      "Ils sont avec état.",
      "Ils évaluent toutes les règles avant d’autoriser la circulation.",
      "Ils traitent les règles dans l'ordre, en commençant par la règle portant le numéro le plus bas, lorsqu'ils décident d'autoriser ou non le trafic.",
      "Ils opèrent au niveau de l’instance."
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 293,
    "question": "Quelles sont les fonctionnalités de la plateforme AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux réponses.)",
    "options": [
      "Gestion des performances et des capacités",
      "Ingénierie des données",
      "Intégration continue et livraison continue (CI/CD)",
      "Protection des infrastructures",
      "Gestion des changements et des versions"
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 294,
    "question": "Selon le modèle de responsabilité partagée d'AWS, le client est responsable de l'application des dernières mises à jour et correctifs de sécurité pour lesquels des éléments suivants ?",
    "options": [
      "Amazon DynamoDB",
      "Instances Amazon EC2",
      "Instances Amazon RDS",
      "Amazon S3"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 295,
    "question": "Quelle classe de stockage Amazon S3 est la plus rentable pour les modèles d’accès inconnus ?",
    "options": [
      "Amazon S3 Standard",
      "Amazon S3 Standard - Accès peu fréquent (Amazon S3 Standard - IA)",
      "Amazon S3 One Zone-IA",
      "Amazon S3 Intelligent-Tiering"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 296,
    "question": "Quelles sont les options offertes par la perspective de sécurité d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.)",
    "options": [
      "Observabilité",
      "Gestion des incidents et des problèmes",
      "Réponse aux incidents",
      "Protection des infrastructures",
      "Disponibilité et continuité"
    ],
    "correct": [
      2,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 297,
    "question": "Une entreprise dispose d'une politique IAM gérée qui n'accorde pas les autorisations nécessaires aux utilisateurs pour accomplir les tâches requises. Comment résoudre ce problème ?",
    "options": [
      "Activez AWS Shield Advanced.",
      "Créez une politique IAM personnalisée.",
      "Utilisez une règle gérée par un pare-feu d’application Web (WAF) tiers à partir d’AWS Marketplace.",
      "Utilisez AWS Key Management Service (AWS Key Management Service (AWS KMS)) pour créer une clé gérée par le client."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 298,
    "question": "Qui est responsable de la gestion de l’accès des utilisateurs IAM et des clés secrètes selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Les clés d'accès et les clés secrètes IAM sont statiques, il n'est donc pas nécessaire de les faire tourner.",
      "Le client est responsable de la rotation des clés.",
      "AWS fera tourner les clés chaque fois que nécessaire.",
      "L'équipe de support AWS effectuera une rotation des clés à la demande du client."
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 299,
    "question": "Une entreprise doit installer un pare-feu tiers préinstallé sur une instance Amazon EC2. Quel service ou fonctionnalité AWS peut offrir cette solution ?",
    "options": [
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité",
      "AWS MarketPlace",
      "AWS Trusted Advisor"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 300,
    "question": "Quel avantage d’AWS Cloud donne à une entreprise la possibilité de déployer rapidement des ressources cloud pour accéder aux infrastructures de calcul, de stockage et de base de données en quelques minutes ?",
    "options": [
      "Élasticité",
      "Économies de coûts",
      "Agilité",
      "Fiabilité"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 301,
    "question": "Laquelle des tâches suivantes relève entièrement de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Sensibilisation et formation à la sécurité",
      "Développement d'une politique de mot de passe IAM",
      "Correction du système d'exploitation invité",
      "Contrôles physiques et environnementaux"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 302,
    "question": "Laquelle des caractéristiques suivantes est celle de l’utilisateur racine du compte AWS ?",
    "options": [
      "L'utilisateur root est le seul utilisateur qui peut être configuré avec l'authentification multifacteur (MFA).",
      "L'utilisateur root est le seul utilisateur pouvant accéder à la console de gestion AWS.",
      "L'utilisateur root est la première identité de connexion disponible lors de la création d'un compte AWS.",
      "L'utilisateur root dispose d'un mot de passe qui ne peut pas être modifié."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 303,
    "question": "Une instance Amazon EC2 précédemment utilisée pour le développement est inaccessible et n'apparaît plus dans la console de gestion AWS. Quel service AWS doit être utilisé pour déterminer l'action ayant rendu cette instance EC2 inaccessible ?",
    "options": [
      "Journaux Amazon CloudWatch",
      "AWS Security Hub",
      "Amazon Inspector",
      "AWS CloudTraiI"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 304,
    "question": "Les développeurs d'applications d'une entreprise doivent provisionner et gérer rapidement les services AWS à l'aide de scripts. Quelle offre AWS devraient-ils utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS CLI",
      "AWS CodeBuild",
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Gestionnaire de sessions AWS Systems Manager"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 305,
    "question": "Une entreprise souhaite migrer des données non structurées vers AWS. Ces données doivent être transférées de manière sécurisée, avec un chiffrement en temps réel et une validation de bout en bout. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS Application Migration Service",
      "Amazon Elastic File System (Amazon EFS)",
      "AWS DataSync",
      "AWS Migration Hub"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 306,
    "question": "Une équipe de développement souhaite déployer plusieurs environnements de test pour une application de manière rapide et reproductible. Quel service AWS devrait-elle utiliser ?",
    "options": [
      "Amazon EC2",
      "AWS CloudFormation",
      "Amazon QuickSight",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 307,
    "question": "Une entreprise souhaite mettre en œuvre rapidement un pipeline d'intégration continue/livraison continue (CI/CD). Quel service AWS répondra à ce besoin ?",
    "options": [
      "AWS Config",
      "Amazon Cognito",
      "AWS DataSync",
      "AWS CodeStar"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 308,
    "question": "Quel modèle de déploiement AWS Cloud utilise AWS Outposts dans le cadre de l’infrastructure de déploiement d’applications ?",
    "options": [
      "Sur site",
      "Sans serveur",
      "Cloud natif",
      "Hybride"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 309,
    "question": "Lequel des services suivants est un service de base de données graphique entièrement géré sur AWS ?",
    "options": [
      "Amazon Aurora",
      "Amazon FSx",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 310,
    "question": "Quel service AWS un administrateur pourrait-il utiliser pour fournir des environnements de bureau à plusieurs employés ?",
    "options": [
      "AWS Organizations",
      "AWS Fargate",
      "AWS WAF",
      "AWS Workspaces"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 311,
    "question": "Quel service ou fonctionnalité AWS donne aux utilisateurs la possibilité de capturer des informations sur le trafic réseau dans un VPC ?",
    "options": [
      "VPC Flow Logs",
      "Amazon Inspector",
      "Tables de routage VPC",
      "AWS CloudTrail"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 312,
    "question": "Quel type de stockage AWS est éphémère et est supprimé lorsqu'une instance Amazon EC2 est arrêtée ou résiliée ?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Magasin d'instances Amazon EC2",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon S3"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 313,
    "question": "Une entreprise souhaite fournir un accès aux partages de fichiers Windows dans AWS depuis ses charges de travail sur site. Elle ne souhaite pas provisionner d'infrastructure ni d'applications supplémentaires dans son centre de données. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Passerelle de fichiers Amazon FSx",
      "AWS DataSync",
      "Amazon S3",
      "AWS Snow Family"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 314,
    "question": "Une entreprise souhaite un stockage durable pour son contenu statique et une infrastructure de stockage de données évolutive à l'infini au moindre coût. Quel service AWS choisir ?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3",
      "AWS Storage Gateway",
      "Amazon Elastic File System (Amazon EFS)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 315,
    "question": "Une entreprise de e-commerce souhaite utiliser Amazon EC2 Auto Scaling pour ajouter et supprimer des instances EC2 en fonction de l'utilisation du processeur. Quel service ou fonctionnalité AWS peut lancer une action Amazon EC2 Auto Scaling pour atteindre cet objectif ?",
    "options": [
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS Systems Manager",
      "Alarme Amazon CloudWatch"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 316,
    "question": "Une entreprise souhaite transformer ses effectifs en attirant et en formant des collaborateurs performants et à l'aise avec le numérique. Elle souhaite attirer une main-d'œuvre diversifiée et inclusive, dotée d'un équilibre approprié entre compétences techniques et non techniques. Quelle perspective du Cadre d'adoption du cloud AWS (AWS CAF) répondra à ces exigences ?",
    "options": [
      "Entreprise",
      "Personnes",
      "Plate-forme",
      "Opérations"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 317,
    "question": "Une entreprise souhaite migrer ses bases de données sur site vers des services de bases de données cloud gérés grâce à un processus de migration simplifié. Quel service ou outil AWS peut l'aider à répondre à ce besoin ?",
    "options": [
      "AWS Storage Gateway",
      "AWS Application Migration Service",
      "AWS DataSync",
      "Service de migration de base de données AWS (AWS DMS)"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 318,
    "question": "Une entreprise a besoin d'un serveur de fichiers entièrement géré prenant en charge nativement les charges de travail et les systèmes de fichiers Microsoft. Ce serveur doit également prendre en charge le protocole SMB. Quel service AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon FSx pour Lustre",
      "Amazon FSx for Windows File Server",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 319,
    "question": "Une entreprise stocke ses rapports mensuels dans un bucket Amazon S3. Elle exporte les données de ces rapports dans des fichiers CSV (valeurs séparées par des virgules). Un développeur souhaite créer une requête simple capable de lire tous ces fichiers et de générer un rapport récapitulatif. Quel service ou fonctionnalité AWS le développeur devrait-il utiliser pour répondre à ces exigences avec un minimum de frais opérationnels ?",
    "options": [
      "Amazon S3 Select",
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon EC2"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 320,
    "question": "Quelle fonctionnalité AWS fournit une plate-forme gratuite permettant aux utilisateurs AWS de rejoindre des groupes communautaires, de poser des questions, de trouver des réponses et de lire des articles générés par la communauté sur les meilleures pratiques ?",
    "options": [
      "Centre de connaissances AWS",
      "AWS re:Post",
      "AWS IQ",
      "Assistance AWS Enterprise"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 321,
    "question": "Une entreprise doit rechercher du texte dans des documents stockés sur Amazon S3. Quel service AWS répond à ces exigences ?",
    "options": [
      "Amazon Kendra",
      "Reconnaissance d'Amazon",
      "Amazon Polly",
      "Amazon Lex"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 322,
    "question": "Quels services AWS utilisent des emplacements périphériques mondiaux ? (Choisissez deux réponses.)",
    "options": [
      "AWS Fargate",
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS Wavelength",
      "Amazon VPC"
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 323,
    "question": "Un utilisateur a besoin d'une base de données relationnelle, mais ne dispose pas des ressources nécessaires pour gérer le matériel, la résilience et la réplication. Quelle option de service AWS répond à ses besoins ?",
    "options": [
      "Exécutez MySQL sur Amazon Elastic Container Service (Amazon ECS).",
      "Exécutez MySQL sur Amazon EC2.",
      "Choisissez Amazon RDS pour MySQL.",
      "Choisissez Amazon ElastiCache pour Redis."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 324,
    "question": "Une entreprise doit déployer ses applications dans le cloud AWS le plus rapidement possible. Elle doit également minimiser la complexité liée à la gestion des ressources AWS. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS Config",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "Amazon Personalize"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 325,
    "question": "Quel mécanisme permet aux développeurs d’accéder aux services AWS à partir du code de l’application ?",
    "options": [
      "AWS SDK",
      "Console de gestion AWS",
      "AWS CodePipeline",
      "AWS Config"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 326,
    "question": "Une entreprise migre vers le cloud AWS. Elle souhaite comprendre et identifier les erreurs de configuration de sécurité potentielles ou les comportements inattendus. Elle souhaite hiérarchiser les contrôles de protection nécessaires. Quelle fonctionnalité de sécurité du cadre d'adoption du cloud AWS (AWS CAF) répondra à ces exigences ?",
    "options": [
      "Gestion des identités et des accès",
      "Détection des menaces",
      "Ingénierie de plateforme",
      "Gestion de la disponibilité et de la continuité"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 327,
    "question": "Une entreprise souhaite établir une connexion réseau privée entre AWS et son réseau interne. Quel service ou fonctionnalité AWS répondra à ce besoin ?",
    "options": [
      "Amazon Connect",
      "Amazon Route 53",
      "AWS Direct Connect",
      "VPC Peering"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 328,
    "question": "Quels services ou fonctionnalités AWS permettent aux utilisateurs de créer une connexion réseau entre deux VPC ? (Choisissez deux réponses.)",
    "options": [
      "Points de terminaison VPC",
      "Amazon Route 53",
      "VPC Peering",
      "AWS Direct Connect",
      "Passerelle de transit AWS"
    ],
    "correct": [
      2, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 329,
    "question": "Quel service AWS convertit le texte en voix réalistes ?",
    "options": [
      "Amazon Transcribe",
      "Reconnaissance d'Amazon",
      "Amazon Polly",
      "Amazon Texttract"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 330,
    "question": "Une entreprise souhaite utiliser des piles d'applications pour exécuter une charge de travail dans le cloud AWS. Elle souhaite utiliser des instances préconfigurées. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon Lightsail",
      "Amazon Athena",
      "AWS Outposts",
      "Amazon EC2"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 331,
    "question": "Quels services AWS sont pris en charge par les plans d'épargne ? (Choisissez deux réponses.)",
    "options": [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon SageMaker",
      "Amazon Redshift",
      "Amazon DynamoDB"
    ],
    "correct": [
      0,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 332,
    "question": "Quel service ou outil AWS peut fournir des recommandations de dimensionnement pour les ressources Amazon EC2 sans frais supplémentaires ?",
    "options": [
      "AWS Well-Architected Framework",
      "Amazon CloudWatch",
      "AWS Cost Explorer",
      "Analyses Amazon S3"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 333,
    "question": "Une entreprise exploite un entrepôt de données de plusieurs pétaoctets pour analyser ses données. Elle recherche une solution qui ne nécessite pas de gestion manuelle du matériel et  des logiciels. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon DocumentDB (with MongoDB compatibility)",
      "Amazon Redshift",
      "Amazon Neptune",
      "Amazon ElastiCache"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 334,
    "question": "Une bibliothèque souhaite automatiser la classification des livres électroniques en fonction de leur contenu. Quel service AWS doit-elle utiliser pour répondre à cette exigence ?",
    "options": [
      "Amazon Redshift",
      "Amazon CloudSearch",
      "Amazon Comprehend",
      "Amazon Aurora"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 335,
    "question": "Quelle tâche relève de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Cryptage des données d'application",
      "Authentification des utilisateurs de l'application",
      "Protection de l'infrastructure physique du réseau",
      "Configuration des pare-feu"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 336,
    "question": "Quelles options sont recommandées pour la transformation du cloud dans le cadre du AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.)",
    "options": [
      "Phase de visualisation",
      "Phase d'alignement",
      "Phase d'évaluation",
      "Phase de mobilisation",
      "Phase de migration et de modernisation"
    ],
    "correct": [
      0,
      1
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 337,
    "question": "Une entreprise souhaite générer une liste d'utilisateurs IAM. Elle souhaite également consulter l'état des différents identifiants associés aux utilisateurs, tels que les mots de passe, les clés d'accès et les dispositifs d'authentification multifacteur (MFA). Quel service ou fonctionnalité AWS répondra à ces exigences ?",
    "options": [
      "IAM Credential Report",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))",
      "AWS Identity and Access Management Access Analyzer",
      "Rapport sur les coûts et l'utilisation d'AWS"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 338,
    "question": "Une entreprise conçoit ses charges de travail AWS de manière à ce que les composants puissent être mis à jour régulièrement et que les modifications puissent être apportées par petits incréments réversibles. Quel pilier du cadre AWS Well-Architected cette conception prend-elle en charge ?",
    "options": [
      "Sécurité",
      "Efficacité des performances",
      "Excellence opérationnelle",
      "Fiabilité"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 339,
    "question": "Une entreprise souhaite suivre les balises, les buckets et les préfixes de ses objets Amazon S3. Quelle fonctionnalité S3 répondra à ce besoin ?",
    "options": [
      "Rapport d'inventaire S3",
      "Cycle de vie S3",
      "Gestion des versions S3",
      "ACL S3"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 340,
    "question": "Une entreprise souhaite permettre à ses utilisateurs d'authentifier et d'autoriser plusieurs comptes AWS à l'aide d'un seul ensemble d'identifiants. Quel service ou ressource AWS répondra à cette exigence ?",
    "options": [
      "AWS Organizations",
      "Utilisateur IAM",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))",
      "AWS Control Tower"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 341,
    "question": "Une entreprise a créé une instance Amazon EC2. Elle souhaite contrôler le trafic réseau entrant et sortant au niveau de l'instance. Quelle ressource ou quel service AWS répondra à ce besoin ?",
    "options": [
      "AWS Shield",
      "Groupes de sécurité",
      "Analyseur d'accès au réseau",
      "Points de terminaison VPC"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 342,
    "question": "Une entreprise souhaite utiliser le cloud AWS pour déployer une application à l'échelle mondiale. Quel modèle d'architecture de déploiement doit-elle adopter pour répondre à ce besoin ?",
    "options": [
      "Multi-région",
      "Région unique",
      "Multi-AZ",
      "Single-AZ"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 343,
    "question": "Une entreprise souhaite une application web permettant d'interagir avec différents services AWS. Quel service ou ressource AWS répondra à ce besoin ?",
    "options": [
      "AWS CloudShell",
      "AWS MarketPlace",
      "Console de gestion AWS",
      "AWS CLI"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 344,
    "question": "Une entreprise migre ses applications sur site vers le cloud AWS. Elle souhaite s'assurer que les applications disposent uniquement des autorisations minimales nécessaires à l'exécution de toutes les opérations. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon CloudWatch",
      "Amazon Macie",
      "Amazon GuardDuty"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 345,
    "question": "Quelles sont les options offertes par la perspective de gouvernance d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.)",
    "options": [
      "Gestion des identités et des accès",
      "Cloud Financial Management",
      "Application Portfolio Management",
      "Innovation Management",
      "Product Management"
    ],
    "correct": [
      1,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 346,
    "question": "Quel service AWS fournit un emplacement unique pour suivre la progression des migrations d’applications ?",
    "options": [
      "AWS Application Discovery Service",
      "AWS Application Migration Service",
      "AWS Service Catalog",
      "AWS Migration Hub"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 347,
    "question": "Une entreprise a lancé une instance Amazon EC2 avec la dernière image machine Amazon Linux 2 (AMI). Quelles actions un administrateur système peut-il effectuer pour se connecter à l'instance EC2 ? (Choisissez deux réponses.)",
    "options": [
      "Utilisez EC2 Instance Connect.",
      "Utilisez une connexion RDP (Remote Desktop Protocol).",
      "Utilisez AWS Batch.",
      "Utilisez AWS Systems Manager Session Manager.",
      "Utilisez Amazon Connect."
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 348,
    "question": "Quel concept d’architecture décrit la capacité à déployer des ressources à la demande et à libérer des ressources lorsqu’elles ne sont plus nécessaires ?",
    "options": [
      "Haute disponibilité",
      "Architecture découplée",
      "Résilience",
      "Élasticité"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 349,
    "question": "Quelle tâche nécessite qu’un utilisateur se connecte en tant qu’utilisateur racine du compte AWS ?",
    "options": [
      "La suppression des utilisateurs IAM",
      "La suppression d'un compte AWS",
      "La création d'une organisation dans AWS Organizations",
      "La suppression des instances Amazon EC2"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 350,
    "question": "Que propose la classe de stockage Amazon S3 Intelligent-Tiering ?",
    "options": [
      "Flexibilité de paiement en réservant des capacités de stockage",
      "Conservation à long terme des données en copiant les données sur un volume Amazon Elastic Block Store (Amazon EBS) chiffré",
      "Économies de coûts automatiques en déplaçant les objets entre les niveaux en fonction des modifications du modèle d'accès",
      "Stockage sécurisé, durable et à moindre coût pour l'archivage des données"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 351,
    "question": "Une entreprise a besoin d'instances Amazon EC2 pour une charge de travail capable de supporter des interruptions. Quelle option d'achat d'instance EC2 répond à ce besoin et offre la plus forte réduction par rapport aux tarifs à la demande ?",
    "options": [
      "Spot Instances",
      "Reserved Instances convertibles",
      "Reserved Instances standard",
      "Dedicated Hosts"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 352,
    "question": "Une entreprise envisage de migrer vers le cloud AWS. Elle souhaite identifier des résultats opérationnels mesurables qui expliqueront la valeur de sa décision de migrer. À quelle phase de la transformation cloud ces activités sont-elles associées ?",
    "options": [
      "Envisager",
      "Align",
      "Scale",
      "Launch"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 353,
    "question": "Quel service ou composant AWS permet au trafic entrant provenant d’Internet d’accéder à un VPC ?",
    "options": [
      "Passerelle Internet",
      "Passerelle NAT",
      "AWS WAF",
      "VPC Peering"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 354,
    "question": "Quel service AWS les entreprises peuvent-elles utiliser pour créer une infrastructure à partir de code ?",
    "options": [
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "AWS Outposts",
      "AWS CodePipeline",
      "AWS CloudFormation"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 355,
    "question": "Quelle ligne directrice constitue un principe de conception bien architecturé pour la création d’applications cloud ?",
    "options": [
      "Gardez les données statiques plus proches des ressources de calcul.",
      "Fournir des ressources pour une capacité de pointe.",
      "Conception pour une récupération automatisée après une panne.",
      "Utiliser des composants étroitement couplés."
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 356,
    "question": "Une entreprise doit transférer 75 pétaoctets de données de ses centres de données locaux vers AWS. Quel service AWS devrait-elle utiliser pour répondre à ces besoins de la manière la plus rentable ?",
    "options": [
      "Stockage optimisé pour AWS Snowball Edge",
      "AWS Snowmobile",
      "AWS Direct Connect",
      "AWS Storage Gateway"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 357,
    "question": "Lesquels des éléments suivants constituent les piliers du cadre AWS Well-Architected ? (Choisissez deux réponses.)",
    "options": [
      "Évolutivité des ressources",
      "Efficacité des performances",
      "Élasticité du système",
      "Développement agile",
      "Excellence opérationnelle"
    ],
    "correct": [
      1, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 358,
    "question": "Une entreprise doit connecter son centre de données sur site au cloud AWS. Elle a besoin d'une connexion dédiée à faible latence et de performances réseau constantes. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "VPN géré par AWS"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 359,
    "question": "Quels principes de conception une entreprise devrait-elle appliquer aux charges de travail AWS Cloud pour maximiser la durabilité et minimiser l'impact environnemental ? (Choisissez deux réponses.)",
    "options": [
      "Maximisez l’utilisation des instances Amazon EC2.",
      "Minimisez l’utilisation des instances Amazon EC2.",
      "Minimiser l’utilisation des services gérés.",
      "Forcer les réinstallations fréquentes d'applications par les utilisateurs.",
      "Réduisez le besoin pour les utilisateurs de réinstaller des applications."
    ],
    "correct": [
      0, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 360,
    "question": "De quelles manières le cloud AWS offre-t-il un coût total de possession (TCO) des ressources informatiques inférieur à celui des centres de données sur site ? (Choisissez deux réponses.)",
    "options": [
      "AWS remplace les dépenses d’investissement initiales par des coûts à la carte.",
      "AWS est conçu pour une haute disponibilité, ce qui élimine les temps d’arrêt des utilisateurs.",
      "AWS élimine le besoin de personnel informatique sur site.",
      "AWS utilise des économies d’échelle pour réduire continuellement les prix.",
      "AWS propose un modèle de tarification unique pour les instances Amazon EC2."
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 361,
    "question": "Une entreprise souhaite déployer certaines de ses ressources dans le cloud AWS. Pour répondre aux exigences réglementaires, les données doivent rester locales et sur site. La latence entre AWS et les ressources de l'entreprise doit être faible. Quel service ou fonctionnalité AWS peut être utilisé pour répondre à ces exigences ?",
    "options": [
      "Zones locales AWS",
      "Zones de disponibilité",
      "AWS Outposts",
      "Zones de longueur d'onde AWS"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 362,
    "question": "Lesquels des services AWS suivants sont sans serveur ? (Choisissez deux réponses.)",
    "options": [
      "AWS Outposts",
      "Amazon EC2",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "AWS Fargate",
      "AWS Lambda"
    ],
    "correct": [
      3, 4
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 363,
    "question": "Lorsqu'un utilisateur souhaite utiliser ses licences logicielles existantes par socket, par cœur ou par machine virtuelle pour un serveur Microsoft Windows exécuté sur AWS, quel type d'instance Amazon EC2 est requis ?",
    "options": [
      "Spot Instances",
      "Instances dédiées",
      "Dedicated Hosts",
      "Reserved Instances"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 364,
    "question": "Un architecte de solutions doit gérer un parc d'instances Amazon EC2 afin de remplacer les instances défectueuses par de nouvelles. Quel service AWS doit-il utiliser ?",
    "options": [
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon GuardDuty",
      "AWS Shield",
      "AWS Auto Scaling"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 365,
    "question": "Quel service AWS fournit des applications sur site avec un accès à faible latence aux données stockées dans le cloud AWS ?",
    "options": [
      "Amazon CloudFront",
      "AWS Storage Gateway",
      "AWS Backup",
      "AWS DataSync"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 366,
    "question": "Que propose Amazon CloudFront ?",
    "options": [
      "Mise à l'échelle automatique de toutes les ressources pour alimenter une application à partir d'une seule interface unifiée",
      "Livraison sécurisée de données, de vidéos, d'applications et d'API aux utilisateurs du monde entier avec une faible latence",
      "Capacité à gérer directement le trafic à l'échelle mondiale via une variété de types de routage, y compris le routage basé sur la latence, le DNS géographique, la géoproximité et le round robin pondéré",
      "Répartition automatique du trafic d'application entrant sur plusieurs cibles, telles que les instances Amazon EC2, les conteneurs, les adresses IP et les fonctions AWS Lambda"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 367,
    "question": "Quel service AWS prend en charge le déploiement et la gestion des applications dans le cloud AWS ?",
    "options": [
      "Amazon CodeGuru",
      "AWS Fargate",
      "AWS CodeCommit",
      "AWS Elastic Beanstalk"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 368,
    "question": "Une entreprise souhaite intégrer le traitement automatique du langage naturel (TALN) à ses tableaux de bord de business intelligence (BI). Elle souhaite poser des questions et obtenir des réponses avec des visualisations pertinentes. Quel service ou outil AWS répondra à ces exigences ?",
    "options": [
      "Amazon Macie",
      "Amazon Rekognition Image",
      "Amazon QuickSight",
      "Amazon Lex"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 369,
    "question": "Quelle fonctionnalité ou classe de stockage Amazon S3 utilise le réseau principal AWS et les emplacements périphériques pour réduire les latences entre l'utilisateur final et Amazon S3 ?",
    "options": [
      "Réplication interrégionale S3",
      "Accélération du transfert S3",
      "Notifications d'événements S3",
      "Amazon S3 Standard - Accès peu fréquent (Amazon S3 Standard - IA)"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 370,
    "question": "Quel service AWS offre la possibilité d’héberger une base de données NoSQL dans le cloud AWS ?",
    "options": [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 371,
    "question": "Quel service AWS est une base de données relationnelle compatible avec MySQL et PostgreSQL ?",
    "options": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Neptune"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 372,
    "question": "Quel principe de conception d’architecture décrit la nécessité d’isoler les pannes entre les composants dépendants dans le cloud AWS ?",
    "options": [
      "Utilisez une conception monolithique.",
      "Conception pour l'automatisation.",
      "Concevoir pour les points de défaillance uniques.",
      "Composants à coupler de manière lâche."
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 373,
    "question": "Quel avantage du cloud computing donne à une entreprise la possibilité de déployer des applications auprès d’utilisateurs partout dans le monde via un réseau de régions AWS, de zones de disponibilité et d’emplacements périphériques ?",
    "options": [
      "Économie d'échelle",
      "Portée mondiale",
      "Agilité",
      "Haute disponibilité"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 374,
    "question": "Quel service AWS facilite la surveillance et le dépannage des journaux d’application et des ressources cloud ?",
    "options": [
      "Amazon EC2",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 375,
    "question": "Quel service AWS utilise AWS Compute Optimizer pour fournir des recommandations de dimensionnement basées sur les mesures de charge de travail ?",
    "options": [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon Lightsail",
      "AWS Step Functions"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 376,
    "question": "Quel service AWS aidera une entreprise à planifier une migration vers AWS en collectant les données de configuration, d’utilisation et de comportement des centres de données sur site ?",
    "options": [
      "Groupes de ressources AWS",
      "AWS Application Discovery Service",
      "AWS Service Catalog",
      "AWS Systems Manager"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 377,
    "question": "Quel service AWS utilise une combinaison d’éditeurs et d’abonnés ?",
    "options": [
      "AWS Lambda",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon CloudWatch",
      "AWS CloudFormation"
    ],
    "correct": [
      1
    ],
    "domain": "Général"
  },
  {
    "id": 378,
    "question": "Une entreprise en est aux premiers stades de la planification de sa migration vers AWS. Elle souhaite obtenir le coût total de possession mensuel estimé pour ses futures instances Amazon EC2 et le stockage associé. Quel service ou outil AWS doit-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Calculateur de prix AWS",
      "AWS Calcul Optimizer",
      "AWS Trusted Advisor",
      "AWS Application Migration Service"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 379,
    "question": "Quelle perspective dans le AWS Cloud Adoption Framework (AWS CAF) inclut une capacité pour une architecture de données et d’analyse bien conçue ?",
    "options": [
      "Sécurité",
      "Gouvernance",
      "Opérations",
      "Plate-forme"
    ],
    "correct": [
      3
    ],
    "domain": "Général"
  },
  {
    "id": 380,
    "question": "Quelles sont les options offertes par les fonctionnalités du point de vue des personnes d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.)",
    "options": [
      "Organizational Alignment",
      "Portfolio Management",
      "Conception de l'organisation",
      "Risk Management",
      "Développement d'applications modernes"
    ],
    "correct": [
      0,
      2
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 381,
    "question": "Une entreprise a besoin d'un pont entre la technologie et les activités pour évoluer vers une culture de croissance et d'apprentissage continus. Quelle perspective du Cadre d'adoption du cloud AWS (AWS CAF) sert de pont ?",
    "options": [
      "Personnes",
      "Gouvernance",
      "Opérations",
      "Sécurité"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 382,
    "question": "Quelle option relève de la responsabilité d’AWS dans le cadre du modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Sécurité des données d'application",
      "Gestion des correctifs pour les applications exécutées sur des instances Amazon EC2",
      "Gestion des correctifs de l'infrastructure sous-jacente pour les services gérés",
      "Gestion des identités et des accès aux applications"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 383,
    "question": "Quel service ou ressource AWS peut identifier et fournir des rapports sur les ressources IAM dans un compte AWS partagé avec un autre compte AWS ?",
    "options": [
      "IAM Credential Report",
      "AWS IAM Identity Center (AWS IAM Identity Center (AWS Single Sign-On))",
      "Analyseur d'accès AWS Identity and Access Management",
      "Groupe d'utilisateurs Amazon Cognito"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 384,
    "question": "Quel pilier du cadre AWS Well-Architected se concentre sur l’allocation structurée et rationalisée des ressources informatiques ?",
    "options": [
      "Fiabilité",
      "Excellence opérationnelle",
      "Efficacité des performances",
      "Durabilité"
    ],
    "correct": [
      2
    ],
    "domain": "Général"
  },
  {
    "id": 385,
    "question": "Quelles fonctionnalités d'AWS Cloud Adoption Framework (AWS CAF) appartiennent à la perspective de gouvernance ? (Choisissez deux options.)",
    "options": [
      "Project & Program Management",
      "Product Management",
      "Portfolio Management",
      "Risk Management",
      "Event Management"
    ],
    "correct": [
      0,
      3
    ],
    "domain": "Général",
    "maxAnswers": 2
  },
  {
    "id": 386,
    "question": "Une entreprise souhaite utiliser AWS Managed Services (AMS) pour son support opérationnel et souhaite comprendre son périmètre. Quelle fonctionnalité AMS répondra à ces exigences ?",
    "options": [
      "Zone d'atterrissage et gestion du réseau",
      "Développement d'applications clients",
      "Configuration du pipeline DevSecOps",
      "Surveillance des journaux d'application"
    ],
    "correct": [
      0
    ],
    "domain": "Général"
  },
  {
    "id": 1,
    "question": "Quelle perspective AWS CAF aide à aligner les investissements cloud avec les objectifs métiers ?",
    "options": ["Business", "People", "Security", "Operations"],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 2,
    "question": "Quelle perspective AWS CAF se concentre sur la culture, les compétences et la formation des équipes ?",
    "options": ["People", "Governance", "Platform", "Security"],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 3,
    "question": "Combien de piliers comporte le AWS Well‑Architected Framework ? (Choisissez une réponse)",
    "options": ["4", "5", "6", "7"],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 4,
    "question": "Le pilier 'Reliability' du Framework traite de :",
    "options": [
      "Protection des données",
      "Capacité à récupérer et à s'adapter aux charges",
      "Réduction des coûts",
      "Performance des requêtes"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 5,
    "question": "Quel pilier du Well‑Architected Framework met l'accent sur l'automatisation et l'amélioration continue des opérations ?",
    "options": ["Security", "Operational Excellence", "Performance Efficiency", "Cost Optimization"],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 6,
    "question": "Quel pilier AWS CAF traite de la gouvernance, conformité et gestion des risques ?",
    "options": ["Governance", "Platform", "Security", "People"],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 7,
    "question": "Le pilier 'Cost Optimization' du Framework vise à :",
    "options": [
      "Garantir la sécurité",
      "Minimiser les coûts et maximiser la valeur",
      "Optimiser les performances",
      "Améliorer la durabilité"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 8,
    "question": "Selon AWS CAF, la perspective Platform porte principalement sur :",
    "options": [
      "Les processus RH",
      "La fiabilité, l'automatisation et l'infrastructure",
      "La stratégie financière",
      "La gouvernance"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 9,
    "question": "Le pilier 'Performance Efficiency' se concentre sur :",
    "options": [
      "L'optimisation des coûts",
      "La performance à l'échelle",
      "La surveillance",
      "La sécurité"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 10,
    "question": "Quel pilier du Well‑Architected Framework s'occupe de la durabilité et de l'impact environnemental ?",
    "options": [
      "Operational Excellence",
      "Security",
      "Sustainability",
      "Reliability"
    ],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 21,
    "question": "Le pilier 'Operational Excellence' du AWS Well-Architected Framework se concentre sur :",
    "options": [
      "La gestion des coûts",
      "La sécurité des données",
      "La performance des applications",
      "La gestion efficace des opérations"
    ],
    "correct": [3],
    "domain": "CAFARCH"
  },
  {
    "id": 22,
    "question": "Quel est l'objectif principal du pilier 'Security' dans le AWS Well-Architected Framework ?",
    "options": [
      "Protéger les données et les systèmes",
      "Optimiser les coûts",
      "Améliorer la performance",
      "Assurer la durabilité"
    ],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 23,
    "question": "Le pilier 'Reliability' du AWS Well-Architected Framework se concentre sur :",
    "options": [
      "La gestion des coûts",
      "La performance des applications",
      "La capacité à se remettre des pannes",
      "La sécurité des données"
    ],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 24,
    "question": "Quel est l'objectif principal du pilier 'Performance Efficiency' dans le AWS Well-Architected Framework ?",
    "options": [
      "Optimiser les coûts",
      "Utiliser les ressources informatiques de manière efficace",
      "Assurer la sécurité des données",
      "Améliorer la résilience"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 25,
    "question": "Le pilier 'Cost Optimization' du AWS Well-Architected Framework se concentre sur :",
    "options": [
      "Réduire les coûts tout en maximisant la valeur",
      "Améliorer la performance",
      "Assurer la sécurité des données",
      "Augmenter la résilience"
    ],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 26,
    "question": "Quel est l'objectif principal du pilier 'Sustainability' dans le AWS Well-Architected Framework ?",
    "options": [
      "Réduire l'impact environnemental",
      "Optimiser les coûts",
      "Améliorer la performance",
      "Assurer la sécurité des données"
    ],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 27,
    "question": "Le pilier 'Operational Excellence' inclut la capacité à :",
    "options": [
      "Gérer les coûts",
      "Supporter le développement et exécuter les charges de travail efficacement",
      "Optimiser les performances",
      "Assurer la sécurité des données"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 28,
    "question": "Le pilier 'Security' inclut la capacité à :",
    "options": [
      "Protéger les données, les systèmes et les actifs",
      "Optimiser les coûts",
      "Améliorer la performance",
      "Assurer la durabilité"
    ],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 29,
    "question": "Le pilier 'Reliability' inclut la capacité à :",
    "options": [
      "Gérer les coûts",
      "Effectuer les charges de travail comme prévu",
      "Optimiser les performances",
      "Assurer la sécurité des données"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 30,
    "question": "Le pilier 'Performance Efficiency' inclut la capacité à :",
    "options": [
      "Utiliser les ressources informatiques efficacement",
      "Gérer les coûts",
      "Assurer la sécurité des données",
      "Augmenter la résilience"
    ],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 11,
    "question": "Laquelle des perspectives AWS CAF se concentre sur la gestion des risques et la conformité ?",
    "options": ["Business", "People", "Governance", "Platform"],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 12,
    "question": "Quel rôle la perspective 'People' du AWS CAF joue-t-elle dans l'adoption du cloud ?",
    "options": [
      "Automatiser les processus",
      "Former et structurer les équipes",
      "Gérer les coûts",
      "Assurer la sécurité"
    ],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 13,
    "question": "Laquelle des perspectives AWS CAF est responsable de la conception de l'infrastructure technique ?",
    "options": ["Governance", "Platform", "Security", "Operations"],
    "correct": [1],
    "domain": "CAFARCH"
  },
  {
    "id": 14,
    "question": "Selon AWS CAF, qui est principalement responsable de la perspective 'Governance' ?",
    "options": ["Les équipes de développement", "Les équipes de sécurité", "Les équipes de direction", "Les architectes cloud"],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 15,
    "question": "Laquelle des perspectives AWS CAF se concentre sur l'automatisation et l'efficacité opérationnelle ?",
    "options": ["People", "Governance", "Platform", "Operations"],
    "correct": [3],
    "domain": "CAFARCH"
  },
  {
    "id": 16,
    "question": "Quel est l'objectif principal de la perspective 'Business' du AWS CAF ?",
    "options": [
      "Aligner les investissements cloud avec les objectifs commerciaux",
      "Former les équipes",
      "Gérer l'infrastructure",
      "Assurer la sécurité des données"
    ],
    "correct": [0],
    "domain": "CAFARCH"
  },
  {
    "id": 17,
    "question": "La perspective 'Security' du AWS CAF se concentre sur :",
    "options": [
      "La gestion des risques",
      "La conformité réglementaire",
      "La protection des données et des systèmes",
      "La formation des employés"
    ],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 18,
    "question": "Quel est le rôle de la perspective 'Platform' dans le AWS CAF ?",
    "options": [
      "Gérer les finances",
      "Former les équipes",
      "Concevoir l'infrastructure technique",
      "Assurer la sécurité"
    ],
    "correct": [2],
    "domain": "CAFARCH"
  },
  {
    "id": 19,
    "question": "Laquelle des perspectives AWS CAF est responsable de la gestion des opérations quotidiennes ?",
    "options": ["Business", "People", "Governance", "Operations"],
    "correct": [3],
    "domain": "CAFARCH"
  },
  {
    "id": 20,
    "question": "Selon AWS CAF, qui est principalement responsable de la perspective 'People' ?",
    "options": ["Les équipes de développement", "Les équipes de sécurité", "Les équipes de direction", "Les équipes RH"],
    "correct": [3],
    "domain": "CAFARCH"
  },


  
]