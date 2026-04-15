import type { Question, ResultType } from './quizData';

export const QUESTIONS_FR: Question[] = [
  {q:"Quand une nouvelle idée te vient, quelle est ta première réaction ?",sub:"Choisis celle qui te parle le plus.",a:[
    {t:"V",text:"Je l'architecte mentalement en un système complet avant de faire quoi que ce soit",pts:"Orientation : systèmes et structure"},
    {t:"K",text:"Je la lance immédiatement — je pense en agissant, l'énergie c'est maintenant",pts:"Orientation : action et impulsion"},
    {t:"C",text:"J'en parle à quelqu'un — comprendre comment ça peut aider les autres m'allume",pts:"Orientation : personnes et relations"},
    {t:"D",text:"Je plonge dans une recherche profonde jusqu'à tout comprendre",pts:"Orientation : connaissance et profondeur"},
    {t:"S",text:"Ça dépend de mon cycle — parfois j'explose d'énergie, parfois j'ai besoin de silence",pts:"Orientation : énergie cyclique"}
  ]},
  {q:"Qu'est-ce qui te bloque le plus souvent dans ton travail ?",sub:"Sois honnête — c'est la question clé.",a:[
    {t:"V",text:"Je n'arrive pas à commencer si tout n'est pas parfait dans ma tête",pts:"Blocage : perfectionnisme paralysant"},
    {t:"K",text:"Je m'ennuie avant de finir — l'excitation disparaît quand la partie ennuyeuse arrive",pts:"Blocage : aversion à la ligne d'arrivée"},
    {t:"C",text:"Je finis toujours par m'occuper des problèmes des autres au lieu des miens",pts:"Blocage : frontières poreuses"},
    {t:"D",text:"Je sais tout mais je n'arrive pas à le communiquer simplement",pts:"Blocage : invisible sur le marché"},
    {t:"S",text:"Mes crashes d'énergie détruisent ce que j'ai construit pendant la phase haute",pts:"Blocage : gestion des cycles"}
  ]},
  {q:"Comment décrirais-tu ta relation avec l'énergie au travail ?",sub:"Pense aux 3 derniers mois.",a:[
    {t:"S",text:"Je fonctionne par phases : productivité extrême suivie de récupération totale",pts:"Schéma : cycles de haute amplitude"},
    {t:"D",text:"Quand je trouve quelque chose qui me passionne, je peux travailler 12 heures sans m'en rendre compte",pts:"Schéma : hyperfocus profond"},
    {t:"K",text:"L'énergie arrive par explosions — haute au début de chaque projet, puis s'estompe",pts:"Schéma : pics de dopamine"},
    {t:"V",text:"Je m'énergise en planifiant — l'exécution me vide",pts:"Schéma : vision oui, exécution non"},
    {t:"C",text:"L'énergie des autres me charge — les relations me nourrissent",pts:"Schéma : codépendance énergétique"}
  ]},
  {q:"En regardant les 12 derniers mois, qu'est-il arrivé à tes projets ?",sub:"Choisis la réponse la plus honnête.",a:[
    {t:"K",text:"J'ai commencé plein de trucs géniaux que je n'ai jamais finis",pts:"Schéma : série sans achèvement"},
    {t:"V",text:"J'ai passé beaucoup de temps à planifier — j'ai produit moins que je n'aurais voulu",pts:"Schéma : architecture sans construction"},
    {t:"C",text:"J'ai aidé les autres à construire leur vision plus que la mienne",pts:"Schéma : investir dans les autres"},
    {t:"D",text:"J'ai beaucoup approfondi mais j'ai du mal à transformer l'expertise en offre concrète",pts:"Schéma : expertise non monétisée"},
    {t:"S",text:"J'ai eu des périodes extraordinaires et des périodes de blocage total — forte discontinuité",pts:"Schéma : montagnes russes productives"}
  ]},
  {q:"Comment te relates-tu aux autres dans un contexte professionnel ?",sub:"Quelle phrase te décrit le mieux ?",a:[
    {t:"C",text:"Je perçois les besoins des autres avant qu'ils ne les expriment",pts:"Relation : empathie structurelle"},
    {t:"V",text:"Je préfère travailler seul·e — les collaborations ne comprennent souvent pas où je vais",pts:"Relation : solitude visionnaire"},
    {t:"D",text:"J'aime partager mes connaissances avec ceux qui sont genuinement intéressés",pts:"Relation : mentorat et transmission"},
    {t:"K",text:"J'adore le brainstorming — la partie exécution avec les autres me ralentit",pts:"Relation : étincelles collaboratives"},
    {t:"S",text:"Dans les phases hautes je suis magnétique — dans les phases basses j'ai besoin de m'isoler",pts:"Relation : alternance présence-retrait"}
  ]},
  {q:"Que disent le plus souvent les personnes qui te connaissent bien ?",sub:"Choisis le feedback le plus récurrent.",a:[
    {t:"V",text:"'Tu as toujours de grandes idées — mais tu ne les réalises jamais vraiment'",pts:"Feedback : vision sans exécution"},
    {t:"K",text:"'Tu es plein·e d'énergie et d'idées — mais tu ne finis jamais ce que tu commences'",pts:"Feedback : dispersion créative"},
    {t:"C",text:"'Tu fais tout pour tout le monde — mais tu ne prends jamais soin de toi'",pts:"Feedback : auto-sacrifice relationnel"},
    {t:"D",text:"'Tu es brillant·e — tu devrais te mettre plus en avant'",pts:"Feedback : talent invisible"},
    {t:"S",text:"'Quand tu es ON tu es inarrêtable — mais ensuite tu disparais pendant des semaines'",pts:"Feedback : cyclicité évidente"}
  ]},
  {q:"Quelle est ta relation avec l'argent et le pricing de ton travail ?",sub:"C'est souvent la question la plus difficile.",a:[
    {t:"D",text:"Je sais que mon travail vaut cher mais j'ai honte de demander des prix élevés",pts:"Blocage : syndrome de l'expert humble"},
    {t:"V",text:"J'ai du mal à monétiser — la vision est claire mais le produit concret non",pts:"Blocage : gap vision-produit"},
    {t:"C",text:"J'ai tendance à offrir trop pour trop peu — les clients deviennent presque des amis",pts:"Blocage : confusion valeur-relation"},
    {t:"K",text:"Je lance des offres impulsivement — pricing aléatoire, remises spontanées",pts:"Blocage : pricing réactif"},
    {t:"S",text:"Dans les périodes hautes je gagne bien — dans les périodes basses tout s'arrête",pts:"Blocage : revenu cyclique instable"}
  ]},
  {q:"Quand tu es dans ton état de performance maximale, que se passe-t-il ?",sub:"Décris le contexte qui te fait fonctionner au mieux.",a:[
    {t:"D",text:"J'explore quelque chose en profondeur — hyperfocus total et pure satisfaction",pts:"Pic : immersion totale"},
    {t:"V",text:"Je conçois un système complexe — mon esprit est cristallin et connecte tout",pts:"Pic : architecture systémique"},
    {t:"S",text:"Je suis dans la phase haute du cycle — énergie au sommet, idées fluides, exécution rapide",pts:"Pic : momentum cyclique"},
    {t:"C",text:"Je facilite quelque chose — amener les gens à collaborer, créer des synergies",pts:"Pic : catalyse relationnelle"},
    {t:"K",text:"Je commence quelque chose de nouveau — la phase de lancement est ma zone de génie",pts:"Pic : ignition créative"}
  ]},
  {q:"Quel est ton défi principal pour construire un business ?",sub:"Choisis celui qui sonne le plus vrai maintenant.",a:[
    {t:"K",text:"Passer de l'idée à l'offre concrète — et la maintenir dans le temps sans m'ennuyer",pts:"Défi : de l'idée au système stable"},
    {t:"V",text:"Simplifier assez pour communiquer clairement ce que j'offre",pts:"Défi : synthèse de la complexité"},
    {t:"C",text:"Construire quelque chose qui soit vraiment à moi — pas au service de la vision de quelqu'un d'autre",pts:"Défi : posséder ma propre vision"},
    {t:"D",text:"Me rendre visible et communiquer la vraie valeur de ce que je sais faire",pts:"Défi : marketing de l'expertise profonde"},
    {t:"S",text:"Construire un système qui fonctionne même quand je suis en phase basse",pts:"Défi : architecture anti-burnout"}
  ]},
  {q:"De quoi as-tu le plus besoin maintenant pour faire un saut ?",sub:"La dernière question — la plus importante.",a:[
    {t:"V",text:"Une méthode pour passer de la vision à l'action sans attendre la perfection",pts:"Besoin : pont vision-exécution"},
    {t:"K",text:"Un système qui m'aide à finir ce que je commence — et construire sur ce qui fonctionne",pts:"Besoin : achèvement structuré"},
    {t:"C",text:"Apprendre à mettre mes besoins au centre — construire quelque chose qui soit vraiment à moi",pts:"Besoin : centralité de soi"},
    {t:"D",text:"Visibilité et positionnement — pour que le marché sache enfin que j'existe",pts:"Besoin : émergence stratégique"},
    {t:"S",text:"Un système d'exploitation calibré sur mes cycles — qui fonctionne en phase haute et en phase basse",pts:"Besoin : système cyclique durable"}
  ]},
  {q:"Comment prends-tu habituellement les décisions importantes ?",sub:"Pense à la dernière grande décision que tu as prise.",a:[
    {t:"V",text:"Je cartographie chaque scénario possible et choisis le chemin stratégiquement optimal",pts:"Décision : cartographie stratégique"},
    {t:"K",text:"Je suis mon instinct — trop réfléchir tue le momentum",pts:"Décision : guidée par l'instinct"},
    {t:"C",text:"Je consulte d'abord mes personnes de confiance — leurs perspectives façonnent mon choix",pts:"Décision : input collectif"},
    {t:"D",text:"Je recherche extensivement jusqu'à ce que la réponse devienne indéniable",pts:"Décision : basée sur les preuves"},
    {t:"S",text:"Ça dépend de ma phase — dans les hautes je décide vite, dans les basses je me fige",pts:"Décision : dépendante de la phase"}
  ]},
  {q:"Comment gères-tu ton énergie au cours de la journée ?",sub:"Sois honnête sur tes schémas réels, pas les idéaux.",a:[
    {t:"S",text:"Mon énergie est imprévisible — je surfe la vague quand elle arrive et me repose quand elle s'écrase",pts:"Énergie : surfer la vague"},
    {t:"V",text:"Je planifie soigneusement le travail le plus créatif aux heures de pic et regroupe tout le reste",pts:"Énergie : optimisation structurée"},
    {t:"K",text:"Je poursuis ce qui m'excite — l'énergie suit l'intérêt, pas l'horloge",pts:"Énergie : guidée par l'excitation"},
    {t:"D",text:"Une fois que je suis plongé·e, rien ne peut casser mon focus — mais commencer est la partie difficile",pts:"Énergie : seuil d'activation"},
    {t:"C",text:"Je tire de l'énergie d'aider les autres — le travail solo me vide plus vite",pts:"Énergie : chargée relationnellement"}
  ]},
  {q:"Quand tu dois créer quelque chose de nouveau, à quoi ressemble ton processus ?",sub:"Pense à comment les idées deviennent réalité pour toi.",a:[
    {t:"K",text:"Je me lance et construis au fur et à mesure — la création se révèle en faisant",pts:"Créatif : création improvisée"},
    {t:"V",text:"J'ai besoin du tableau complet dans ma tête avant de toucher à quoi que ce soit",pts:"Créatif : pré-visualisation"},
    {t:"D",text:"J'étudie d'abord comment les autres ont fait, puis je construis quelque chose de plus profond",pts:"Créatif : informé par la recherche"},
    {t:"C",text:"Je co-crée mieux — faire rebondir les idées avec les autres améliore tout",pts:"Créatif : synthèse collaborative"},
    {t:"S",text:"Par bouffées d'inspiration intense que je capture avant qu'elles ne s'évanouissent",pts:"Créatif : capture d'inspiration"}
  ]}
];

export const RESULT_DATA_FR: Record<string, ResultType> = {
  V: {
    color: '#C8A84B', cd: 'rgba(200,168,75,.1)', cl: 'rgba(200,168,75,.25)',
    label: 'Type 01 · Architecte', name: 'Architecte Visionnaire',
    tagline: 'Construit des cathédrales dans l\'esprit. Les réalise avec le bon système.',
    tags: ['Pensée systémique', 'Vision complexe', 'Architecture stratégique'],
    intro: `Ton cerveau est un <strong>processeur de systèmes</strong>. Là où les autres voient le chaos, tu vois des architectures. Là où les autres voient des détails, tu vois des connexions. C'est ton superpouvoir rare — et aussi la source de ton blocage principal.`,
    desc: `Ce n'est pas que tu ne sais pas quoi faire. Ta vision est si complexe et complète qu'aucune exécution ne lui rend justice. Tu attends une perfection qui ne viendra jamais. En attendant, des gens avec 10 % de ta vision construisent des choses que tu avais imaginées il y a des années.<br><br>La solution n'est pas d'arrêter d'être architecte. C'est d'apprendre à construire <strong>des fondations avant des cathédrales</strong>. Un système d'exploitation calibré sur ton type te donne la méthode pour traduire la vision en action sans trahir la qualité que tu exiges.`,
    powers: [{name: 'Architecture systémique', sub: 'Tu vois des systèmes complets avant qu\'ils n\'existent'}, {name: 'Pensée stratégique', sub: 'Tu connectes des informations que les autres ne corrèlent jamais'}, {name: 'Qualité profonde', sub: 'Ton standard est rare sur le marché'}, {name: 'Vision à long terme', sub: 'Tu penses en années quand les autres pensent en semaines'}],
    blinds: [{name: 'Perfectionnisme paralysant', sub: 'La perfection est l\'ennemie du fait'}, {name: 'Déléguer est difficile', sub: 'Personne ne comprend la vision comme toi — mais ça t\'isole'}, {name: 'Produits concrets', sub: 'Le fossé entre architecture et vente est ton plus grand'}, {name: 'Terminer vs commencer', sub: 'Tu as commencé plus de choses que tu n\'en as terminé'}],
    scores: [{l: 'Vision', p: 95}, {l: 'Stratégie', p: 88}, {l: 'Exécution', p: 38}, {l: 'Communication', p: 52}, {l: 'Énergie', p: 64}],
    biz: `Le modèle le plus adapté pour toi est celui qui te positionne comme <strong>consultant·e stratégique ou architecte de systèmes</strong>. Ta valeur est dans la direction, le design, la vision. Tu dois te faire payer pour penser — et automatiser le faire.`,
    companion: {
      prompts: ['Quelle est la première action concrète que tu pourrais faire aujourd\'hui sans attendre la perfection ?', 'Identifie UN projet que tu pourrais terminer en 48 heures. Juste un.', 'Que se passerait-il si tu lançais la version parfaite à 80 % cette semaine ?'],
      mod1: 'Le cycle Vision → MVP → Itération', mod2: 'Comment communiquer la complexité simplement',
      week1: 'Diagnostic : où ta vision se bloque', week2: 'La méthode Bridge : de l\'idée au produit en 7 jours', week3: 'Positionnement et pricing pour l\'Architecte', week4: 'Système anti-perfectionnisme permanent'
    },
    reportItems: ['Comment construire un MVP de ta vision sans la trahir', 'Ton modèle de pricing d\'architecte', 'Comment communiquer la complexité au marché simplement', 'Les 3 déclencheurs de ton perfectionnisme — et comment les désactiver']
  },
  K: {
    color: '#F4C318', cd: 'rgba(244,195,24,.08)', cl: 'rgba(244,195,24,.25)',
    label: 'Type 02 · Chasseur', name: 'Chasseur d\'Étincelles',
    tagline: 'Le cerveau le plus créatif de la pièce. Avec le bon système, aussi le plus productif.',
    tags: ['Créativité explosive', 'Dopamine et lancement', 'Connexions latérales'],
    intro: `Ton cerveau fonctionne aux <strong>étincelles de dopamine</strong>. Chaque nouvelle idée est une ignition totale. Tu es capable de connexions créatives que la plupart des gens ne voient jamais.`,
    desc: `Tu n'as pas un problème d'idées. Tu en as plus en un jour que la plupart en un an. Le problème c'est que ton système nerveux est calibré sur les débuts — pas sur les fins. L'excitation du lancement est ta drogue. Le travail de maintenance est ton supplice.<br><br>Tu as probablement 10+ projets ouverts en ce moment. Et un cimetière d'idées brillantes qui n'ont jamais vu le marché.<br><br>La solution n'est pas de devenir une personne « disciplinée ». C'est de construire un <strong>système qui exploite les étincelles au lieu de les combattre</strong> — avec des sprints courts et des mécanismes d'achèvement automatiques.`,
    powers: [{name: 'Idéation explosive', sub: 'Tu génères des idées que les autres ne voient même pas de loin'}, {name: 'Créativité latérale', sub: 'Tu connectes des domaines que personne n\'avait liés avant'}, {name: 'Énergie de lancement', sub: 'Dans la phase de démarrage tu es inarrêtable et magnétique'}, {name: 'Adaptabilité rapide', sub: 'Tu changes de direction rapidement quand il le faut'}],
    blinds: [{name: '47 projets ouverts', sub: 'Le cimetière des bonnes idées inachevées'}, {name: 'Aversion à la ligne d\'arrivée', sub: '80 % fait vaut zéro sans les 20 % finaux'}, {name: 'Monétisation instable', sub: 'Pricing aléatoire, offres impulsives, aucun système'}, {name: 'Dispersion du focus', sub: 'Trop large, pas assez profond·e'}],
    scores: [{l: 'Créativité', p: 98}, {l: 'Lancement', p: 92}, {l: 'Achèvement', p: 22}, {l: 'Système', p: 31}, {l: 'Énergie', p: 78}],
    biz: `Le modèle pour toi c'est <strong>des sprints courts avec des outputs concrets</strong>. Produits digitaux rapides, cours intensifs, conseil créatif. Structure tout en 30-90 jours max. Ton business doit être anti-ennui by design.`,
    companion: {
      prompts: ['De tous tes projets ouverts, lequel — s\'il était fini — changerait le plus ta situation ?', 'Quel est le plus petit prochain pas possible pour ton projet principal ?', 'Qu\'est-ce que tu évites de terminer depuis le plus longtemps ?'],
      mod1: 'Sprint-Ship-Repeat : la méthode pour cerveaux à étincelles', mod2: 'Comment filtrer les 3 idées à finir (et abandonner le reste)',
      week1: 'Diagnostic : ton schéma de non-achèvement', week2: 'Sprints de 25 minutes : finir sans s\'ennuyer', week3: 'Monétisation stable pour le Chasseur', week4: 'Système anti-dispersion permanent'
    },
    reportItems: ['La méthode Sprint-Ship-Repeat pour ton type', 'Comment identifier les 3 idées à finir (et abandonner le reste)', 'Le système de pricing anti-impulsif pour le Chasseur', 'Comment construire un système qui fonctionne dans les parties ennuyeuses']
  },
  C: {
    color: '#A87CDC', cd: 'rgba(168,124,220,.1)', cl: 'rgba(168,124,220,.28)',
    label: 'Type 03 · Catalyseur', name: 'Connecteur Catalyseur',
    tagline: 'Le cœur de l\'écosystème. Il est temps de construire le tien.',
    tags: ['Intelligence émotionnelle', 'Construction de réseau', 'Vision pour les autres'],
    intro: `Ton cerveau est calibré sur les <strong>personnes</strong>. Tu perçois les besoins des autres avant qu'ils ne les expriment. Tu es le pont entre les visions et les personnes qui les réalisent.`,
    desc: `Tu as probablement aidé beaucoup de gens à construire leurs projets. Tu as été précieux·se pour tout le monde. Et pendant ce temps, ta vision attendait son tour.<br><br>Ce n'est pas juste de l'altruisme — c'est aussi un mécanisme d'évitement. Prendre soin des autres est plus sûr que de s'exposer avec son propre projet.<br><br>Mais tu as atteint un tournant. Ta capacité à connecter les gens et construire des réseaux est une <strong>compétence rare et précieuse sur le marché</strong> — si tu la mets au service de quelque chose qui t'appartient.`,
    powers: [{name: 'Intelligence émotionnelle', sub: 'Tu lis les salles et les gens avec une précision extraordinaire'}, {name: 'Construction de réseau', sub: 'Tu construis des relations qui durent et produisent des résultats'}, {name: 'Facilitation', sub: 'Tu amènes les gens à travailler ensemble fluidement'}, {name: 'Leadership humain', sub: 'Les gens te suivent parce qu\'ils se sentent compris'}],
    blinds: [{name: 'Frontières poreuses', sub: 'Les autres entrent dans ton espace et tu ne le fermes pas'}, {name: 'Auto-sacrifice', sub: 'Tu mets toujours tes besoins en dernier'}, {name: 'Ton business vs le leur', sub: 'Tu construis pour les autres mieux que pour toi'}, {name: 'Monétiser les connexions', sub: 'Tu as fait du networking gratuit pendant des années — il est temps de facturer'}],
    scores: [{l: 'Empathie', p: 96}, {l: 'Relations', p: 91}, {l: 'Business propre', p: 41}, {l: 'Frontières', p: 35}, {l: 'Visibilité', p: 58}],
    biz: `Ton modèle idéal est <strong>le conseil en réseau, le community building ou l'advisory</strong>. Vends ta capacité à connecter les gens et les visions. Ton produit c'est ton écosystème.`,
    companion: {
      prompts: ['Aujourd\'hui, qu\'as-tu fait pour TOI — pas pour quelqu\'un d\'autre ?', 'Identifie une relation professionnelle où tu donnes plus que tu ne reçois.', 'Quelle est la frontière la plus urgente à établir cette semaine ?'],
      mod1: 'Comment construire un business de connexions (et bien facturer)', mod2: 'Le framework frontières-valeur pour le Catalyseur',
      week1: 'Diagnostic : où tu investis ton énergie relationnelle', week2: 'De facilitateur·trice à protagoniste : construire pour toi', week3: 'Monétiser les connexions — pricing du Catalyseur', week4: 'Frontières saines et business propre en permanence'
    },
    reportItems: ['Comment construire un business de connexions et bien facturer', 'Le framework frontières-valeur pour le Catalyseur', 'Comment passer de facilitateur·trice des autres à star de ton propre show', 'Les 3 schémas d\'auto-sabotage relationnel']
  },
  D: {
    color: '#4DADA0', cd: 'rgba(77,173,160,.1)', cl: 'rgba(77,173,160,.28)',
    label: 'Type 04 · Plongeur', name: 'Plongeur Profond',
    tagline: 'Expertise de niveau master. Le marché attend juste de te découvrir.',
    tags: ['Hyperfocus', 'Expertise profonde', 'Savoir rare'],
    intro: `Ton cerveau <strong>plonge</strong>. Quand quelque chose te passionne, tu atteins des niveaux de compétence que la plupart ne touchent jamais. Tu es un·e expert·e rare et précieux·se.`,
    desc: `Le problème n'est pas ce que tu sais. Le marché ne le sait pas. Tu es si occupé·e à plonger en profondeur que tu n'as pas le temps — ou l'envie — de remonter à la surface et te rendre visible.<br><br>Il y a quelque chose de plus profond : simplifier ta connaissance ressemble à une traduction, un appauvrissement.<br><br>Mais la vérité c'est : le marché ne paie pas pour la complexité que toi seul·e comprends. Il paie pour des <strong>transformations que n'importe qui peut comprendre</strong>. Ton travail n'est pas de simplifier l'expertise — c'est de la traduire en résultats compréhensibles.`,
    powers: [{name: 'Hyperfocus productif', sub: 'En 4 heures tu produis ce que les autres font en semaines'}, {name: 'Expertise de niveau master', sub: 'Tu connais ton domaine à un niveau que peu atteignent'}, {name: 'Qualité absolue', sub: 'Ton standard est ta signature'}, {name: 'Solutions non évidentes', sub: 'Tu trouves des solutions que seuls les connaisseurs profonds peuvent voir'}],
    blinds: [{name: 'Invisibilité sur le marché', sub: 'Ton talent existe mais personne ne le sait'}, {name: 'Communication complexe', sub: 'Tu parles au niveau expert quand le marché veut de la simplicité'}, {name: 'Pricing de la valeur rare', sub: 'Tu vends probablement trop bon marché'}, {name: 'Remonter de l\'immersion', sub: 'La surface — là où se font les ventes — est inconfortable'}],
    scores: [{l: 'Expertise', p: 97}, {l: 'Profondeur', p: 93}, {l: 'Visibilité', p: 28}, {l: 'Marketing', p: 34}, {l: 'Communication', p: 45}],
    biz: `Ton modèle idéal est <strong>l'advisory haut de gamme, le conseil spécialisé ou les produits d'expertise profonde</strong>. Prix élevés. Peu de clients. Qualité maximale. Arrête de concurrencer sur le volume et commence sur la rareté.`,
    companion: {
      prompts: ['Explique ce que tu fais en UNE phrase que même des non-experts comprennent.', 'Qui a résolu un problème similaire avec moins d\'expertise ? Que peux-tu apprendre d\'eux ?', 'Quel est le résultat le plus spécifique qu\'obtient quelqu\'un en travaillant avec toi ?'],
      mod1: 'Comment te positionner comme expert·e rare (pas générique)', mod2: 'La méthode pour communiquer l\'expertise profonde simplement',
      week1: 'Diagnostic : le fossé entre expertise et visibilité', week2: 'Synthèse du savoir — du profond au compréhensible', week3: 'Positionnement et pricing pour le Plongeur', week4: 'Stratégie d\'émergence permanente'
    },
    reportItems: ['Comment te positionner comme expert·e rare (pas générique)', 'La méthode pour communiquer l\'expertise profonde simplement', 'La stratégie de pricing pour le Plongeur', 'Comment devenir visible sans te sentir vendeur·se']
  },
  S: {
    color: '#F4A24A', cd: 'rgba(244,162,74,.1)', cl: 'rgba(244,162,74,.28)',
    label: 'Type 05 · Bâtisseur', name: 'Bâtisseur de Tempêtes',
    tagline: 'Énergie cyclique. Avec le bon système, chaque cycle est plus puissant que le précédent.',
    tags: ['Énergie de haute amplitude', 'Cyclicité naturelle', 'Résilience profonde'],
    intro: `Ton cerveau a une <strong>onde d'amplitude extrêmement haute</strong>. Quand tu es en phase active, tu es inarrêtable. Quand le cycle descend, tout s'arrête. Ce n'est pas un défaut — c'est ta nature.`,
    desc: `Le système de productivité traditionnel est construit pour des cerveaux linéaires. Pour toi c'est une torture et un mensonge.<br><br>Dans ta phase haute tu produis 10 fois ce qu'une personne « normale » produit en un mois. Dans la phase basse tu as besoin de récupération, de silence, de reconstruction. Ce cycle est biologique et non-négociable.<br><br>Le problème n'est pas le cycle — c'est que tu n'as pas un <strong>système conçu pour l'habiter</strong>. Business construit seulement en phases hautes, communication arrêtée en phases basses, clients confus par ton irrégularité. La solution n'est pas de devenir régulier·ère. C'est de construire un business qui travaille avec ton rythme.`,
    powers: [{name: 'Pics de productivité extrême', sub: 'En phases hautes tu produis ce que les autres ne touchent jamais'}, {name: 'Résilience post-crash', sub: 'Chaque renaissance te porte plus haut que la précédente'}, {name: 'Vision amplifiée', sub: 'En phases hautes la clarté stratégique est totale'}, {name: 'Authenticité radicale', sub: 'L\'histoire de ton cycle est ton marketing le plus puissant'}],
    blinds: [{name: 'Revenu cyclique instable', sub: 'Les gains dépendent trop de la phase où tu te trouves'}, {name: 'Communication discontinue', sub: 'Tu disparais quand tu es en bas — les clients sont confus'}, {name: 'Burnout récurrent', sub: 'Sans systèmes anti-burnout, le schéma se répète'}, {name: 'Promesses de phase haute', sub: 'Tu promets depuis la phase haute, tu livres depuis la phase basse'}],
    scores: [{l: 'Output de pic', p: 98}, {l: 'Résilience', p: 85}, {l: 'Stabilité', p: 31}, {l: 'Système', p: 38}, {l: 'Durabilité', p: 42}],
    biz: `Ton modèle idéal est <strong>tout ce qui est automatisable, asynchrone et fonctionne même quand tu es hors ligne</strong>. Produits digitaux, cours à la demande, abonnements automatisés. Ton business doit tourner sans toi pendant les phases basses.`,
    companion: {
      prompts: ['Dans quelle phase du cycle es-tu aujourd\'hui ? (Haute / Moyenne / Basse) — et qu\'est-il approprié de faire AUJOURD\'HUI en fonction de cette phase ?', 'Quel système ou automatisation pourrais-tu activer cette semaine qui fonctionne même quand tu ne peux pas ?', 'Que dois-tu communiquer à tes clients pendant les phases basses pour maintenir la confiance ?'],
      mod1: 'Le framework cycle-business pour le Bâtisseur', mod2: 'Comment construire des automatisations qui fonctionnent en phases basses',
      week1: 'Diagnostic : cartographier ton cycle personnel', week2: 'Modèle de business anti-burnout — structure cyclique', week3: 'Revenu automatisé pour les phases basses', week4: 'Plan de durabilité et cycle permanent'
    },
    reportItems: ['Le framework cycle-business pour le Bâtisseur', 'Comment construire des automatisations pour les phases basses', 'Le plan anti-burnout spécifique à ton type', 'Comment communiquer la cyclicité aux clients (et la transformer en force)']
  }
};
