import type { CupidoQuestion, CupidoResultType } from './cupidoQuizData';

export const CUPIDO_QUESTIONS_FR: CupidoQuestion[] = [
  {q:"Quand tu rencontres quelqu'un qui t'attire, quelle est ta première réaction ?",sub:"Pense à ce que tu ressens vraiment — pas à ce que tu voudrais ressentir.",a:[
    {t:"P",text:"Je ressens une connexion profonde et je m'ouvre rapidement — presque trop",pts:"Attraction : ouverture immédiate"},
    {t:"I",text:"Je suis fasciné·e mais je garde mes distances — d'abord j'observe, puis je décide",pts:"Attraction : observation stratégique"},
    {t:"F",text:"L'attraction grandit quand je sens que je peux prendre soin de l'autre",pts:"Attraction : soin comme connexion"},
    {t:"L",text:"Je suis attiré·e par les gens qui stimulent mon esprit — la conversation est le vrai préliminaire",pts:"Attraction : intellect comme intimité"},
    {t:"S",text:"Je m'enflamme intensément mais je crains que ça finisse — je vis tout avec urgence",pts:"Attraction : intensité et peur"}
  ]},
  {q:"Comment vis-tu l'intimité émotionnelle dans tes relations ?",sub:"Il n'y a pas de bonne réponse — juste ta vérité.",a:[
    {t:"P",text:"L'intimité émotionnelle est ce que je recherche le plus — je veux être vraiment vu·e",pts:"Intimité : besoin d'être vu"},
    {t:"I",text:"J'apprécie l'intimité, mais parfois j'ai besoin de me retirer dans mon espace",pts:"Intimité : oscillation proximité-distance"},
    {t:"F",text:"Je la crée par des actions tangibles — cuisiner, organiser, résoudre des problèmes",pts:"Intimité : actes de service"},
    {t:"L",text:"Je la construis lentement, à travers des conversations profondes et du partage intellectuel",pts:"Intimité : construction lente et réflexive"},
    {t:"S",text:"Je la vis intensément quand elle est là, mais je crains qu'elle disparaisse soudainement",pts:"Intimité : intensité anxieuse"}
  ]},
  {q:"Que se passe-t-il quand tu sens ton/ta partenaire s'éloigner ?",sub:"Même si tu ne l'as jamais admis à voix haute.",a:[
    {t:"S",text:"Panique. Je cherche la réassurance, j'envoie des messages, j'ai besoin de savoir qu'il/elle est encore là",pts:"Distance : activation anxieuse"},
    {t:"I",text:"Je m'éloigne aussi. S'il/elle ne veut pas être proche, je trouve mon espace",pts:"Distance : retrait protecteur"},
    {t:"P",text:"J'essaie de comprendre ce que j'ai fait de mal — et je m'ouvre plus pour reconnecter",pts:"Distance : vulnérabilité comme pont"},
    {t:"F",text:"J'intensifie le soin — je fais plus, j'offre plus, je donne plus",pts:"Distance : soin comme compensation"},
    {t:"L",text:"J'analyse la situation rationnellement — j'essaie de comprendre le schéma avant de réagir",pts:"Distance : analyse avant émotion"}
  ]},
  {q:"Quel est ton plus grand besoin dans une relation ?",sub:"Le besoin sur lequel tu ne négocies jamais.",a:[
    {t:"P",text:"L'authenticité — je veux être complètement moi-même sans masques",pts:"Besoin : authenticité radicale"},
    {t:"I",text:"La liberté — aimer sans me perdre est non négociable",pts:"Besoin : autonomie en amour"},
    {t:"F",text:"La sécurité — savoir qu'on est une équipe, quoi qu'il arrive",pts:"Besoin : stabilité et partenariat"},
    {t:"L",text:"La stimulation — un esprit qui me défie et me fait grandir",pts:"Besoin : croissance intellectuelle partagée"},
    {t:"S",text:"La présence — sentir que l'autre est vraiment là, pas juste physiquement",pts:"Besoin : réassurance constante"}
  ]},
  {q:"Comment exprimes-tu l'amour au quotidien ?",sub:"Pas ce que tu dis — ce que tu fais.",a:[
    {t:"F",text:"Par des actions concrètes — j'organise, je cuisine, je m'occupe du pratique",pts:"Langage : service et dévouement"},
    {t:"P",text:"Avec des mots profonds et de la vulnérabilité — je dis ce que je ressens, même quand ça fait peur",pts:"Langage : mots et vérité"},
    {t:"S",text:"Avec intensité — quand j'aime, j'aime avec tout. Messages, attention, présence totale",pts:"Langage : dévotion totale"},
    {t:"L",text:"En partageant des idées, des livres, des conversations — mon amour passe par l'esprit",pts:"Langage : connexion mentale"},
    {t:"I",text:"En donnant de l'espace — je respecte le rythme de l'autre et demande le même pour moi",pts:"Langage : liberté comme cadeau"}
  ]},
  {q:"Quel est ton schéma dans tes relations passées ?",sub:"Le schéma qui se répète, même quand tu le vois venir.",a:[
    {t:"S",text:"Je tombe amoureux·se intensément, puis la peur de l'abandon sabote tout",pts:"Schéma : coup de foudre-sabotage"},
    {t:"I",text:"Je m'approche puis me retire — dès que ça devient trop intime, j'ai besoin d'air",pts:"Schéma : approche-retrait"},
    {t:"F",text:"Je donne tout jusqu'à n'avoir plus rien — puis je suis en colère de ne pas recevoir",pts:"Schéma : donner-épuiser-ressentir"},
    {t:"P",text:"Je m'ouvre trop tôt et me sens blessé·e par la vulnérabilité non réciproque",pts:"Schéma : ouverture-blessure"},
    {t:"L",text:"J'analyse la relation jusqu'à ce qu'elle devienne un objet d'étude plutôt qu'une expérience",pts:"Schéma : intellectualisation émotionnelle"}
  ]},
  {q:"Pendant une dispute avec ton/ta partenaire, que fais-tu ?",sub:"Sois honnête avec toi-même.",a:[
    {t:"L",text:"J'essaie de rationaliser — je présente des arguments logiques et cherche des solutions",pts:"Conflit : rationalisation"},
    {t:"P",text:"Je deviens vulnérable — j'exprime ce que je ressens vraiment, même si ça fait mal",pts:"Conflit : vulnérabilité comme arme"},
    {t:"S",text:"Je m'agite — j'ai peur que la dispute signifie la fin de tout",pts:"Conflit : catastrophisation"},
    {t:"I",text:"J'ai besoin d'espace — je me ferme jusqu'à pouvoir penser clairement",pts:"Conflit : fermeture protectrice"},
    {t:"F",text:"J'essaie de résoudre concrètement — 'qu'est-ce qu'on fait pour arranger ça ?'",pts:"Conflit : résolution pratique"}
  ]},
  {q:"Que te disent les personnes que tu as aimées ?",sub:"Le retour que tu as entendu plus d'une fois.",a:[
    {t:"P",text:"'Tu es trop intense — parfois je me sens submergé·e par ta profondeur'",pts:"Retour : trop de profondeur"},
    {t:"I",text:"'Tu es inatteignable — je ne sais jamais ce que tu ressens vraiment'",pts:"Retour : mur émotionnel"},
    {t:"F",text:"'Tu en fais trop pour moi — je n'ai jamais demandé tout ça'",pts:"Retour : soin excessif"},
    {t:"L",text:"'J'aimerais que tu ressentes plus et penses moins — tu me manques émotionnellement'",pts:"Retour : distance émotionnelle"},
    {t:"S",text:"'J'ai besoin d'espace — ton besoin de réassurance m'étouffe'",pts:"Retour : pression relationnelle"}
  ]},
  {q:"Quelle est ta plus grande peur en amour ?",sub:"Celle que tu ne dis jamais à voix haute.",a:[
    {t:"S",text:"Être abandonné·e — que l'autre parte sans prévenir",pts:"Peur : abandon"},
    {t:"I",text:"Me perdre — me dissoudre dans l'autre jusqu'à ne plus me reconnaître",pts:"Peur : perte d'identité"},
    {t:"P",text:"Ne pas suffire — que mon authenticité ne soit pas assez pour garder quelqu'un",pts:"Peur : inadéquation"},
    {t:"F",text:"Ne pas être réciproque — tout donner et ne rien recevoir en retour",pts:"Peur : non-réciprocité"},
    {t:"L",text:"L'ennui — que la connexion mentale s'estompe et qu'il ne reste que la routine",pts:"Peur : stagnation intellectuelle"}
  ]},
  {q:"Comment imagines-tu la relation idéale ?",sub:"Pas la parfaite — celle qui fonctionne pour toi.",a:[
    {t:"P",text:"Deux personnes authentiques qui se choisissent chaque jour — sans masques, sans jeux",pts:"Idéal : authenticité mutuelle"},
    {t:"I",text:"Deux vies pleines qui se choisissent librement — ensemble mais jamais dépendants",pts:"Idéal : liberté partagée"},
    {t:"F",text:"Un partenariat solide — construire une vie ensemble, jour après jour",pts:"Idéal : projet de vie partagé"},
    {t:"L",text:"Deux esprits qui se stimulent — une conversation infinie qui n'ennuie jamais",pts:"Idéal : stimulation perpétuelle"},
    {t:"S",text:"Un amour total et inconditionnel — savoir que quelqu'un sera toujours là, quoi qu'il arrive",pts:"Idéal : sécurité absolue"}
  ]},
  {q:"Qu'évites-tu dans ta vie amoureuse ?",sub:"La question la plus inconfortable — et la plus importante.",a:[
    {t:"I",text:"Que mon indépendance est aussi une défense — pour éviter de vraiment risquer la douleur",pts:"Évitement : protection déguisée en liberté"},
    {t:"S",text:"Que ma peur de l'abandon crée exactement ce que je crains",pts:"Évitement : prophétie auto-réalisatrice"},
    {t:"P",text:"Que m'ouvrir complètement signifie aussi accepter que je pourrais être blessé·e",pts:"Évitement : coût de la vulnérabilité"},
    {t:"F",text:"Que tout donner est aussi une façon de contrôler — pas vraiment d'aimer",pts:"Évitement : contrôle déguisé en soin"},
    {t:"L",text:"Qu'analyser les émotions est aussi une façon d'éviter de les ressentir",pts:"Évitement : pensée comme bouclier"}
  ]},
  {q:"De quoi as-tu le plus besoin maintenant pour transformer ta vie amoureuse ?",sub:"La dernière question — la plus importante.",a:[
    {t:"P",text:"Le courage d'être vulnérable sans attendre que l'autre me sauve",pts:"Besoin : vulnérabilité autonome"},
    {t:"I",text:"Apprendre que la proximité n'est pas une menace — et que je peux rester moi-même",pts:"Besoin : intimité sécure"},
    {t:"F",text:"Apprendre à recevoir — pas seulement donner. Et demander ce dont j'ai besoin",pts:"Besoin : réciprocité"},
    {t:"L",text:"Me permettre de ressentir — pas seulement comprendre. Passer de la tête au cœur",pts:"Besoin : intelligence émotionnelle"},
    {t:"S",text:"Construire une sécurité intérieure — ne pas la chercher seulement dans les bras de quelqu'un d'autre",pts:"Besoin : sécurité intérieure"}
  ]}
];

export const CUPIDO_RESULT_DATA_FR: Record<string, CupidoResultType> = {
  P: {
    color: '#C83B3B', cd: 'rgba(200,59,59,.1)', cl: 'rgba(200,59,59,.25)',
    label: 'Style 01 · Flamme', name: 'La Flamme Authentique',
    tagline: 'Aime avec tout. S\'ouvre avec courage. Transforme la vulnérabilité en force.',
    tags: ['Vulnérabilité courageuse', 'Authenticité radicale', 'Profondeur émotionnelle'],
    intro: `Ton cœur fonctionne en mode <strong>totalement ouvert</strong>. Tu aimes avec une profondeur que la plupart n'atteignent jamais. Ta vulnérabilité n'est pas une faiblesse — c'est ton superpouvoir le plus rare.`,
    desc: `Le problème n'est pas comment tu aimes. C'est que le monde n'est pas toujours prêt pour ton intensité. Tu t'ouvres complètement puis te blesses quand l'autre n'est pas au même niveau.<br><br>La solution n'est pas de te fermer. C'est d'apprendre à <strong>doser ta vulnérabilité</strong> — en t'ouvrant graduellement, avec les bonnes personnes, au bon rythme.`,
    powers: [{name: 'Profondeur émotionnelle', sub: 'Tu crées des connexions que la plupart ne touchent jamais'}, {name: 'Authenticité magnétique', sub: 'Ta vérité attire les bonnes personnes'}, {name: 'Courage d\'aimer', sub: 'Tu te montres quand les autres se cachent'}, {name: 'Empathie transformatrice', sub: 'Tu comprends les autres à un niveau que peu atteignent'}],
    blinds: [{name: 'Ouverture prématurée', sub: 'Tu t\'exposes trop tôt avec les mauvaises personnes'}, {name: 'Attentes de réciprocité', sub: 'Tu aimes à 100 % et attends pareil — immédiatement'}, {name: 'Blessures amplifiées', sub: 'Quand tu n\'es pas réciproque, la douleur est x10'}, {name: 'Vitesse vs profondeur', sub: 'La vraie intimité demande du temps — pas juste de l\'intensité'}],
    scores: [{l: 'Vulnérabilité', p: 96}, {l: 'Authenticité', p: 92}, {l: 'Protection', p: 34}, {l: 'Patience', p: 41}, {l: 'Résilience', p: 62}],
    rel: `Ton modèle de relation idéal est basé sur la <strong>vulnérabilité progressive</strong>. N'arrête pas de t'ouvrir — apprends à le faire graduellement.`,
    companion: {
      prompts: ["Tu t'es ouvert·e à quelqu'un aujourd'hui ? Comment as-tu dosé ta vulnérabilité ?", "Identifie un moment où ton authenticité a créé une connexion véritable.", "Quelle est la limite entre 'être authentique' et 'en attendre trop en retour' ?"],
      mod1: 'Vulnérabilité progressive : la méthode pour s\'ouvrir sans se brûler', mod2: 'Comment distinguer les personnes qui méritent ton ouverture',
      week1: 'Diagnostic : ton cycle ouverture-blessure-fermeture', week2: 'La méthode Gradient : doser la vulnérabilité sans la perdre',
      week3: 'Construire des relations authentiques qui résistent au temps', week4: 'Système de protection saine permanent'
    },
    reportItems: ['Ton cycle ouverture-blessure et comment le briser', 'La méthode Gradient pour doser la vulnérabilité', 'Comment reconnaître qui mérite ta profondeur', 'Les 3 signes que tu confonds vitesse et intimité']
  },
  I: {
    color: '#4A7FB5', cd: 'rgba(74,127,181,.1)', cl: 'rgba(74,127,181,.25)',
    label: 'Style 02 · Vent', name: 'Le Vent Libre',
    tagline: 'Aime sans chaînes. Protège son essence. Transforme la liberté en cadeau.',
    tags: ['Autonomie émotionnelle', 'Liberté comme valeur', 'Intimité sélective'],
    intro: `Ton cœur a un <strong>système de protection sophistiqué</strong>. Tu aimes profondément, mais seulement quand tu es sûr·e de ne pas te perdre.`,
    desc: `Le problème n'est pas que tu n'aimes pas. C'est que ton amour a besoin d'espace pour respirer. Quand l'autre se rapproche trop, ton instinct te dit de reculer.<br><br>La solution n'est pas de devenir plus « ouvert·e ». C'est de construire un type d'<strong>intimité qui inclut ton besoin d'espace</strong>.`,
    powers: [{name: 'Intégrité personnelle', sub: 'Tu ne te perds pas dans les relations — tu sais qui tu es'}, {name: 'Amour non dépendant', sub: 'Tu aimes par choix, pas par besoin'}, {name: 'Stabilité émotionnelle', sub: 'Tu ne réagis pas impulsivement — tu réfléchis d\'abord'}, {name: 'Qualité de présence', sub: 'Quand tu es là, tu es là à 100 %'}],
    blinds: [{name: 'Mur émotionnel', sub: 'L\'indépendance devient parfois une barrière'}, {name: 'Retrait automatique', sub: 'Tu te fermes quand tu devrais rester'}, {name: 'Communication froide', sub: 'L\'autre ne sait pas ce que tu ressens — parce que tu ne le dis pas'}, {name: 'Peur de la dépendance', sub: 'Tu évites l\'intimité profonde par peur de te perdre'}],
    scores: [{l: 'Indépendance', p: 95}, {l: 'Intégrité', p: 90}, {l: 'Ouverture', p: 36}, {l: 'Communication', p: 42}, {l: 'Intimité', p: 48}],
    rel: `Ton modèle de relation idéal est basé sur la <strong>liberté partagée</strong>. Deux personnes complètes qui se choisissent chaque jour sans se perdre.`,
    companion: {
      prompts: ["Aujourd'hui, quand tu as senti le besoin de te retirer, que se passait-il ?", "Quand as-tu exprimé une émotion vulnérable pour la dernière fois sans te protéger ?", "Que perds-tu quand tu te fermes — et que penses-tu protéger ?"],
      mod1: "Comment rester proche sans se perdre", mod2: 'Le framework intimité-liberté pour le Vent',
      week1: 'Diagnostic : où ton indépendance devient défense', week2: 'Intimité sécure : rester proche sans se perdre',
      week3: 'Communiquer ses émotions quand l\'instinct dit de se fermer', week4: 'Système d\'ouverture graduelle permanent'
    },
    reportItems: ["Comment distinguer protection saine et fuite de l'intimité", "Le framework pour rester proche sans se perdre", "Comment communiquer tes besoins d'espace sans blesser", "Les 3 moments où ton retrait sabote la connexion"]
  },
  F: {
    color: '#6B8E6B', cd: 'rgba(107,142,107,.1)', cl: 'rgba(107,142,107,.25)',
    label: 'Style 03 · Racine', name: 'La Racine Protectrice',
    tagline: 'Aime en construisant. Prend soin de tout. Transforme le dévouement en fondations.',
    tags: ['Soin actif', 'Partenariat solide', 'Dévouement constructif'],
    intro: `Ton cœur s'exprime à travers <strong>les mains et les actions</strong>. Pour toi, aimer c'est faire.`,
    desc: `Le problème n'est pas que tu donnes trop. C'est que tu donnes sans demander — jusqu'à l'épuisement.<br><br>La solution n'est pas d'arrêter de donner. C'est d'apprendre à <strong>recevoir avec la même facilité</strong> que tu donnes.`,
    powers: [{name: 'Dévouement authentique', sub: 'Quand tu aimes, tu construis quelque chose de concret et durable'}, {name: 'Fiabilité', sub: 'L\'autre sait qu\'il/elle peut compter sur toi — toujours'}, {name: 'Soin tangible', sub: 'Tu transformes l\'amour en actions qui améliorent la vie'}, {name: 'Vision de partenariat', sub: 'Tu penses en « nous » — tu construis pour deux'}],
    blinds: [{name: 'Donner sans recevoir', sub: 'La balance penche toujours de ton côté'}, {name: 'Soin comme contrôle', sub: '« Faire pour » est parfois une façon de contrôler'}, {name: 'Besoins invisibles', sub: 'Tes besoins sont toujours en bas de la liste'}, {name: 'Ressentiment accumulé', sub: 'Tu ne dis rien jusqu\'à exploser'}],
    scores: [{l: 'Dévouement', p: 97}, {l: 'Fiabilité', p: 94}, {l: 'Assertivité', p: 32}, {l: 'Recevoir', p: 28}, {l: 'Équilibre', p: 40}],
    rel: `Ton modèle idéal est un <strong>partenariat équilibré</strong> où donner et recevoir sont en harmonie.`,
    companion: {
      prompts: ["Aujourd'hui, quelqu'un a fait quelque chose pour TOI ? L'as-tu accepté sans résister ?", "Identifie un besoin que tu n'as jamais communiqué à ton/ta partenaire. Pourquoi ?", "Que se passerait-il si tu demandais de l'aide avant de t'épuiser ?"],
      mod1: 'Comment apprendre à recevoir (et pourquoi c\'est plus dur que donner)', mod2: 'Le framework besoins-frontières pour la Racine',
      week1: 'Diagnostic : l\'équilibre donner-recevoir dans ta vie', week2: 'Communiquer ses besoins avant le point de rupture',
      week3: 'Construire une vraie réciprocité dans les relations', week4: 'Système anti-burnout relationnel permanent'
    },
    reportItems: ['Comment construire une vraie réciprocité', 'Le framework pour communiquer tes besoins sans culpabilité', 'La différence entre soin authentique et soin-comme-contrôle', 'Les 3 signes que tu donnes trop (et comment t\'arrêter à temps)']
  },
  L: {
    color: '#9B7EB8', cd: 'rgba(155,126,184,.1)', cl: 'rgba(155,126,184,.25)',
    label: 'Style 04 · Étoile', name: 'L\'Étoile Pensante',
    tagline: 'Aime avec l\'esprit. Cherche la profondeur intellectuelle. Transforme la pensée en connexion.',
    tags: ['Intellect émotionnel', 'Conversation comme intimité', 'Analyse profonde'],
    intro: `Ton cœur passe par l'<strong>esprit</strong>. Pour toi, la vraie intimité c'est une conversation qui touche l'âme.`,
    desc: `Ce n'est pas que tu ne ressens pas. C'est que tu ressens à travers la pensée.<br><br>La solution n'est pas d'arrêter de penser. C'est d'apprendre à <strong>laisser les émotions arriver avant l'analyse</strong> — au moins parfois.`,
    powers: [{name: 'Profondeur conversationnelle', sub: 'Tes conversations créent une intimité vraie et durable'}, {name: 'Reconnaissance de schémas', sub: 'Tu vois les dynamiques relationnelles avec une rare clarté'}, {name: 'Croissance partagée', sub: 'Tu amènes l\'autre à penser plus profondément'}, {name: 'Stabilité réflexive', sub: 'Tu ne réagis pas impulsivement — tu réfléchis avant d\'agir'}],
    blinds: [{name: 'Distance émotionnelle', sub: 'L\'analyse remplace parfois le ressenti'}, {name: 'Intellectualisation', sub: 'Tu penses la relation au lieu de la vivre'}, {name: 'Difficulté avec la spontanéité', sub: 'L\'impulsivité émotionnelle te met mal à l\'aise'}, {name: 'Attentes cognitives', sub: 'Tu cherches une perfection logique dans quelque chose d\'illogique : l\'amour'}],
    scores: [{l: 'Intelligence', p: 96}, {l: 'Réflexion', p: 91}, {l: 'Spontanéité', p: 33}, {l: 'Émotion', p: 39}, {l: 'Présence', p: 48}],
    rel: `Ton modèle idéal est une <strong>connexion intellectuelle-émotionnelle</strong>. N'abandonne pas la profondeur mentale — apprends à la jumeler avec la profondeur émotionnelle.`,
    companion: {
      prompts: ["Aujourd'hui, quand tu as ressenti une émotion forte, l'as-tu exprimée ou analysée d'abord ?", "Quand as-tu dit « je t'aime » pour la dernière fois sans y réfléchir ?", "Que perds-tu quand tu analyses un moment au lieu de le vivre ?"],
      mod1: 'Comment passer de la tête au cœur (sans perdre l\'esprit)', mod2: 'Le framework émotion-réflexion pour l\'Étoile',
      week1: 'Diagnostic : où l\'analyse remplace le ressenti', week2: 'Présence émotionnelle : vivre le moment avant de le comprendre',
      week3: 'Communiquer avec le cœur quand le cerveau veut le contrôle', week4: 'Système d\'équilibre esprit-cœur permanent'
    },
    reportItems: ['Comment équilibrer analyse et spontanéité', 'Le framework pour exprimer les émotions sans perdre la profondeur', 'La différence entre comprendre une relation et la vivre', 'Les 3 moments où la pensée sabote la connexion']
  },
  S: {
    color: '#D4764E', cd: 'rgba(212,118,78,.1)', cl: 'rgba(212,118,78,.25)',
    label: "Style 05 · Vague", name: "La Vague Intense",
    tagline: 'Aime avec urgence. Ressent tout amplifié. Transforme la peur en profondeur.',
    tags: ["Intensité émotionnelle", "Peur de l'abandon", "Amour comme urgence"],
    intro: `Ton cœur vit au <strong>volume maximum</strong>. Quand tu aimes, tu aimes avec une intensité que peu connaissent. Ta peur de l'abandon n'est pas un défaut — c'est le signal de la profondeur de tes connexions.`,
    desc: `Le problème n'est pas que tu ressens trop. C'est que la peur que ça finisse te pousse à créer exactement ce que tu crains.<br><br>La solution n'est pas d'aimer moins. C'est de construire une <strong>sécurité intérieure</strong> — pour que l'amour de l'autre soit un cadeau, pas ta seule source de stabilité.`,
    powers: [{name: 'Intensité émotionnelle', sub: "Quand tu aimes, l'autre se sent vraiment aimé·e"}, {name: 'Présence totale', sub: "Tu es complètement là — pas à moitié"}, {name: 'Loyauté profonde', sub: 'Qui a ton cœur a tout de toi'}, {name: 'Empathie amplifiée', sub: "Tu ressens les émotions de l'autre comme les tiennes"}],
    blinds: [{name: "Peur de l'abandon", sub: 'Chaque silence devient un signal de danger'}, {name: 'Besoin de réassurance', sub: 'Tu as besoin d\'entendre « je suis là » trop souvent'}, {name: 'Prophétie auto-réalisatrice', sub: 'La peur que ça finisse crée la pression qui fait que ça finit'}, {name: 'Dépendance émotionnelle', sub: "Ta stabilité dépend trop de la présence de l'autre"}],
    scores: [{l: 'Intensité', p: 98}, {l: 'Présence', p: 89}, {l: 'Sécurité intérieure', p: 26}, {l: 'Indépendance', p: 31}, {l: 'Stabilité', p: 34}],
    rel: `Ton modèle idéal est basé sur la <strong>sécurité intérieure</strong>. N'arrête pas d'aimer intensément — apprends à le faire depuis un lieu de plénitude, pas de peur.`,
    companion: {
      prompts: ["Quel état émotionnel es-tu aujourd'hui ? (Sécure / Anxieux·se / Urgent·e) — et que peux-tu faire POUR TOI ?", "Quand as-tu cherché de la réassurance pour la dernière fois ? Que cherchais-tu vraiment ?", "Comment peux-tu te donner la sécurité que tu demandes à l'autre ?"],
      mod1: "Comment construire la sécurité intérieure (et arrêter de la chercher chez les autres)",
      mod2: "Le framework anti-anxiété relationnelle pour la Vague",
      week1: "Diagnostic : ta boucle peur-contrôle-abandon",
      week2: 'Sécurité intérieure : techniques d\'autorégulation quotidienne',
      week3: "Communiquer l'intensité sans étouffer",
      week4: 'Système anti-dépendance émotionnelle permanent'
    },
    reportItems: ["Comment briser la boucle peur-contrôle-abandon", "Le framework pour construire la sécurité intérieure", "La différence entre aimer intensément et dépendance émotionnelle", "Les 3 déclencheurs de ton anxiété relationnelle — et comment les désactiver"]
  }
};
