/* ============================================================
   MON TRAJET EN ESPAGNOL — données de contenu
   Structure multi-niveaux : LEVELS[] contient un tableau de niveaux,
   chacun avec ses propres MODULES (même forme que l'ancien système
   à un seul niveau).

   NIVEAU 1 (terminé) : 600 phrases, 3 modules x 200 phrases x 20
   leçons de 10, 15 points de grammaire.

   NIVEAU 2 (terminé) : même structure, vocabulaire un peu plus
   riche et phrases un peu plus complexes que le niveau 1.

   NIVEAU 3 (terminé) : niveau de langue plus avancé (B1-B2) :
   conditionnels, voix passive, subjonctif, discours indirect,
   tournures idiomatiques.
   ============================================================ */

const ICONS = {
  headphones:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0118 0v2"/><path d="M21 14a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a2 2 0 012-2h3v3z"/><path d="M3 14a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 00-2-2H3v3z"/></svg>',
  speaker:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>',
  repeat:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>'
};

/* ============================================================
   NIVEAU 1
   ============================================================ */

const level1Module1Lessons = [
  { title:"Bienvenue en Espagne", phrases:[
    {fr:"Bienvenue en Espagne !", es:"¡Bienvenido a España!"},
    {fr:"J'ai réservé une voiture.", es:"He reservado un coche."},
    {fr:"Voici mon passeport.", es:"Aquí tiene mi pasaporte."},
    {fr:"Combien de temps restez-vous ?", es:"¿Cuánto tiempo se queda?"},
    {fr:"Je reste deux semaines.", es:"Me quedo dos semanas."},
    {fr:"Où puis-je récupérer mes bagages ?", es:"¿Dónde puedo recoger mi equipaje?"},
    {fr:"Avez-vous quelque chose à déclarer ?", es:"¿Tiene algo que declarar?"},
    {fr:"Non, rien à déclarer.", es:"No, nada que declarar."},
    {fr:"Profitez de votre séjour !", es:"¡Disfrute de su estancia!"},
    {fr:"Merci, à vous aussi.", es:"Gracias, igualmente."}
  ]},
  { title:"Sur la route de Barcelone", phrases:[
    {fr:"On prend l'autoroute vers Valence ?", es:"¿Cogemos la autopista hacia Valencia?"},
    {fr:"Il faut faire le plein d'essence.", es:"Hay que llenar el depósito de gasolina."},
    {fr:"La prochaine station-service est loin ?", es:"¿Está lejos la próxima gasolinera?"},
    {fr:"Tournez à gauche après le rond-point.", es:"Gire a la izquierda después de la rotonda."},
    {fr:"La route longe la côte, c'est magnifique.", es:"La carretera bordea la costa, es preciosa."},
    {fr:"On roule vers le sud.", es:"Vamos conduciendo hacia el sur."},
    {fr:"Il y a un panneau \"bienvenue en Catalogne\".", es:"Hay un cartel que dice \"bienvenido a Cataluña\"."},
    {fr:"Les champs d'oliviers s'étendent à perte de vue.", es:"Los olivares se extienden hasta donde alcanza la vista."},
    {fr:"On s'arrête pour prendre une photo ?", es:"¿Paramos para hacer una foto?"},
    {fr:"Le coucher de soleil sur la mer est incroyable.", es:"La puesta de sol sobre el mar es increíble."}
  ]},
  { title:"Un bar à tapas", phrases:[
    {fr:"Une table pour deux, s'il vous plaît.", es:"Una mesa para dos, por favor."},
    {fr:"Qu'est-ce que vous recommandez ?", es:"¿Qué nos recomienda?"},
    {fr:"Je voudrais des tapas variées.", es:"Quisiera unas tapas variadas."},
    {fr:"Avec de l'huile d'olive, s'il vous plaît.", es:"Con aceite de oliva, por favor."},
    {fr:"Vous avez de la tortilla espagnole ?", es:"¿Tienen tortilla española?"},
    {fr:"L'addition, s'il vous plaît.", es:"La cuenta, por favor."},
    {fr:"C'est délicieux.", es:"Está delicioso."},
    {fr:"Je meurs de faim.", es:"Me muero de hambre."},
    {fr:"On partage une crème catalane ?", es:"¿Compartimos una crema catalana?"},
    {fr:"Le service était excellent.", es:"El servicio fue excelente."}
  ], tip:{
    title:"« Quisiera » : la forma educada de pedir algo",
    example:"Je voudrais des tapas variées. — <b>Quisiera</b> unas tapas variadas.",
    body:"« Quisiera » (de « querer ») es la forma más cortés de pedir algo, equivalente a « je voudrais » en francés. Es más educado que « quiero », igual que en francés « je voudrais » es más educado que « je veux »."
  }},
  { title:"L'Alhambra de Grenade", phrases:[
    {fr:"L'Alhambra est juste devant nous.", es:"La Alhambra está justo delante de nosotros."},
    {fr:"C'est plus grand que je ne l'imaginais.", es:"Es más grande de lo que imaginaba."},
    {fr:"Fais attention à la marche.", es:"Ten cuidado con el escalón."},
    {fr:"Il fait très chaud aujourd'hui.", es:"Hace mucho calor hoy."},
    {fr:"N'oublie pas de boire de l'eau.", es:"No olvides beber agua."},
    {fr:"On peut faire une visite guidée ?", es:"¿Podemos hacer una visita guiada?"},
    {fr:"La file d'attente est assez longue.", es:"La cola es bastante larga."},
    {fr:"Regarde ces jardins !", es:"¡Mira esos jardines!"},
    {fr:"Le ciel est complètement dégagé.", es:"El cielo está completamente despejado."},
    {fr:"Cet endroit est magique.", es:"Este lugar es mágico."}
  ]},
  { title:"Une nuit de flamenco", phrases:[
    {fr:"On s'installe au premier rang.", es:"Nos sentamos en primera fila."},
    {fr:"Peux-tu nous commander à boire ?", es:"¿Puedes pedirnos algo de beber?"},
    {fr:"Il commence à faire froid.", es:"Está empezando a hacer frío."},
    {fr:"Regarde comme ils dansent, c'est impressionnant.", es:"Mira cómo bailan, es impresionante."},
    {fr:"Le chanteur a une voix incroyable.", es:"El cantaor tiene una voz increíble."},
    {fr:"Raconte-moi comment le flamenco est né.", es:"Cuéntame cómo empezó el flamenco."},
    {fr:"On entend les applaudissements rythmés dans toute la salle.", es:"Se oyen las palmas por toda la sala."},
    {fr:"Ce voyage restera gravé dans ma mémoire.", es:"Este viaje quedará grabado en mi memoria."},
    {fr:"Demain, on continue vers Madrid.", es:"Mañana seguimos hacia Madrid."},
    {fr:"Bonne nuit, dors bien.", es:"Buenas noches, que duermas bien."}
  ]},
  { title:"Achats et shopping", phrases:[
    {fr:"Je cherche une pharmacie.", es:"Estoy buscando una farmacia."},
    {fr:"Avez-vous ceci en taille moyenne ?", es:"¿Tiene esto en talla media?"},
    {fr:"Puis-je l'essayer ?", es:"¿Puedo probármelo?"},
    {fr:"C'est en solde ?", es:"¿Está de rebajas?"},
    {fr:"Je prends celui-ci.", es:"Me quedo con este."},
    {fr:"Acceptez-vous les cartes de crédit ?", es:"¿Aceptan tarjetas de crédito?"},
    {fr:"Voici votre monnaie.", es:"Aquí tiene su cambio."},
    {fr:"Le magasin ferme à quelle heure ?", es:"¿A qué hora cierra la tienda?"},
    {fr:"Puis-je avoir un sac ?", es:"¿Me puede dar una bolsa?"},
    {fr:"Merci pour votre aide.", es:"Gracias por su ayuda."}
  ], tip:{
    title:"Hacer preguntas en español: no hace falta un auxiliar",
    example:"Avez-vous ceci en taille moyenne ? — <b>¿Tiene</b> esto en talla media?",
    body:"A diferencia del inglés (que usa « do/does »), en español basta con la entonación y los signos « ¿ ? » para formar una pregunta. No existe ningún auxiliar equivalente a « do »: « ¿Tiene esto?» se construye exactamente como « Tiene esto », solo cambia la entonación y la puntuación."
  }},
  { title:"Au téléphone", phrases:[
    {fr:"Allô, qui est à l'appareil ?", es:"¿Diga? ¿Quién habla?"},
    {fr:"Pouvez-vous patienter un instant ?", es:"¿Puede esperar un momento?"},
    {fr:"Je rappelle plus tard.", es:"Vuelvo a llamar más tarde."},
    {fr:"Vous avez fait un mauvais numéro.", es:"Se ha equivocado de número."},
    {fr:"Je n'ai plus de batterie.", es:"Se me ha acabado la batería."},
    {fr:"La ligne est mauvaise.", es:"Se oye mal."},
    {fr:"Pouvez-vous parler plus fort ?", es:"¿Puede hablar más alto?"},
    {fr:"Je vous envoie un message.", es:"Le mando un mensaje."},
    {fr:"Laissez un message après le bip.", es:"Deje un mensaje después de la señal."},
    {fr:"À plus tard !", es:"¡Hasta luego!"}
  ]},
  { title:"À l'hôtel", phrases:[
    {fr:"J'ai une réservation au nom de Dupont.", es:"Tengo una reserva a nombre de Dupont."},
    {fr:"Avez-vous une chambre avec vue ?", es:"¿Tiene una habitación con vistas?"},
    {fr:"Le petit-déjeuner est-il inclus ?", es:"¿Está incluido el desayuno?"},
    {fr:"À quelle heure est le check-out ?", es:"¿A qué hora es la salida?"},
    {fr:"Le Wi-Fi est-il gratuit ?", es:"¿El wifi es gratis?"},
    {fr:"Pouvez-vous appeler un taxi ?", es:"¿Puede llamar a un taxi?"},
    {fr:"Il y a un problème avec la climatisation.", es:"Hay un problema con el aire acondicionado."},
    {fr:"Pouvez-vous monter mes bagages ?", es:"¿Puede subir mi equipaje?"},
    {fr:"Je voudrais prolonger mon séjour.", es:"Quisiera prolongar mi estancia."},
    {fr:"Merci pour votre accueil.", es:"Gracias por su acogida."}
  ]},
  { title:"Petits imprévus", phrases:[
    {fr:"J'ai perdu mes clés.", es:"Se me han perdido las llaves."},
    {fr:"Ma valise n'est pas arrivée.", es:"Mi maleta no ha llegado."},
    {fr:"Je me suis trompé de route.", es:"Me he equivocado de camino."},
    {fr:"La voiture ne démarre pas.", es:"El coche no arranca."},
    {fr:"Il me faut un mécanicien.", es:"Necesito un mecánico."},
    {fr:"Où est le poste de police le plus proche ?", es:"¿Dónde está la comisaría más cercana?"},
    {fr:"J'ai besoin d'un médecin.", es:"Necesito un médico."},
    {fr:"Ce n'est pas grave.", es:"No es grave."},
    {fr:"Tout va s'arranger.", es:"Todo se va a arreglar."},
    {fr:"On trouvera une solution.", es:"Encontraremos una solución."}
  ], tip:{
    title:"La construcción « se me + verbo » para los imprevistos",
    example:"J'ai perdu mes clés. — <b>Se me han perdido</b> las llaves.",
    body:"En español, para hablar de algo que nos pasa sin querer (perder, romper, olvidar…), se usa a menudo « se me + verbo »: « se me han perdido las llaves » en vez de « he perdido mis llaves ». El objeto perdido se convierte en el sujeto de la frase. Esta forma suena mucho más natural que la traducción literal del francés."
  }},
  { title:"Bilan et petite conversation", phrases:[
    {fr:"Comment se passe ton séjour ?", es:"¿Qué tal va tu estancia?"},
    {fr:"Ça se passe très bien, merci.", es:"Va muy bien, gracias."},
    {fr:"Qu'est-ce que tu as préféré ?", es:"¿Qué es lo que más te ha gustado?"},
    {fr:"J'ai adoré l'Alhambra.", es:"Me encantó la Alhambra."},
    {fr:"On devrait revenir un jour.", es:"Deberíamos volver algún día."},
    {fr:"Je suis fatigué mais heureux.", es:"Estoy cansado pero feliz."},
    {fr:"C'était un super voyage.", es:"Fue un viaje genial."},
    {fr:"J'ai hâte de raconter ça à mes amis.", es:"Tengo ganas de contárselo a mis amigos."},
    {fr:"On se refait ça l'année prochaine ?", es:"¿Repetimos el año que viene?"},
    {fr:"Bravo, tu as terminé les leçons gratuites !", es:"¡Enhorabuena, has terminado las lecciones gratuitas!"}
  ]},
  { title:"Prendre le bus et le métro", phrases:[
    {fr:"Où est l'arrêt de bus le plus proche ?", es:"¿Dónde está la parada de autobús más cercana?"},
    {fr:"Ce bus va au centre-ville ?", es:"¿Este autobús va al centro?"},
    {fr:"Combien coûte un ticket ?", es:"¿Cuánto cuesta un billete?"},
    {fr:"Je dois changer de ligne ?", es:"¿Tengo que cambiar de línea?"},
    {fr:"C'est quoi, la prochaine station ?", es:"¿Cuál es la próxima estación?"},
    {fr:"Vous descendez ici ?", es:"¿Se baja usted aquí?"},
    {fr:"Le métro est bondé aux heures de pointe.", es:"El metro va abarrotado en hora punta."},
    {fr:"Il faut valider son ticket.", es:"Hay que validar el billete."},
    {fr:"J'ai raté ma correspondance.", es:"He perdido el transbordo."},
    {fr:"On y est presque.", es:"Ya casi hemos llegado."}
  ]},
  { title:"Louer un logement", phrases:[
    {fr:"Je cherche un appartement à louer.", es:"Estoy buscando un piso para alquilar."},
    {fr:"Combien coûte le loyer par mois ?", es:"¿Cuánto cuesta el alquiler al mes?"},
    {fr:"Les charges sont-elles incluses ?", es:"¿Están incluidos los gastos de comunidad?"},
    {fr:"Puis-je visiter cet après-midi ?", es:"¿Puedo visitarlo esta tarde?"},
    {fr:"Le quartier est-il calme ?", es:"¿Es tranquilo el barrio?"},
    {fr:"Y a-t-il un parking ?", es:"¿Hay aparcamiento?"},
    {fr:"Le bail dure combien de temps ?", es:"¿Cuánto dura el contrato de alquiler?"},
    {fr:"Je voudrais signer le contrat.", es:"Quisiera firmar el contrato."},
    {fr:"Quand puis-je emménager ?", es:"¿Cuándo puedo mudarme?"},
    {fr:"C'est exactement ce que je cherchais.", es:"Es exactamente lo que estaba buscando."}
  ]},
  { title:"Au travail", phrases:[
    {fr:"J'ai une réunion à dix heures.", es:"Tengo una reunión a las diez."},
    {fr:"Pouvez-vous m'envoyer le rapport ?", es:"¿Puede enviarme el informe?"},
    {fr:"Le projet avance bien.", es:"El proyecto avanza bien."},
    {fr:"Nous avons un délai serré.", es:"Tenemos un plazo muy ajustado."},
    {fr:"Je travaille de chez moi aujourd'hui.", es:"Hoy trabajo desde casa."},
    {fr:"Mon collègue est en congé.", es:"Mi compañero está de vacaciones."},
    {fr:"Pouvons-nous reporter la réunion ?", es:"¿Podemos aplazar la reunión?"},
    {fr:"J'ai terminé la présentation.", es:"He terminado la presentación."},
    {fr:"C'est une belle opportunité.", es:"Es una gran oportunidad."},
    {fr:"Bon travail aujourd'hui.", es:"Buen trabajo hoy."}
  ]},
  { title:"Chez le médecin", phrases:[
    {fr:"J'ai rendez-vous à quinze heures.", es:"Tengo cita a las tres de la tarde."},
    {fr:"Où avez-vous mal ?", es:"¿Dónde le duele?"},
    {fr:"J'ai mal à la tête depuis ce matin.", es:"Me duele la cabeza desde esta mañana."},
    {fr:"Êtes-vous allergique à un médicament ?", es:"¿Es usted alérgico a algún medicamento?"},
    {fr:"Prenez ce médicament deux fois par jour.", es:"Tome este medicamento dos veces al día."},
    {fr:"Ce n'est rien de grave.", es:"No es nada grave."},
    {fr:"Je me sens beaucoup mieux.", es:"Me siento mucho mejor."},
    {fr:"Vous devez vous reposer.", es:"Tiene que descansar."},
    {fr:"Voici votre ordonnance.", es:"Aquí tiene su receta."},
    {fr:"Prenez soin de vous.", es:"Cuídese."}
  ]},
  { title:"Faire du sport", phrases:[
    {fr:"Je vais courir tous les matins.", es:"Voy a correr todas las mañanas."},
    {fr:"Tu fais quel sport ?", es:"¿Qué deporte practicas?"},
    {fr:"On joue au tennis ce week-end ?", es:"¿Jugamos al tenis este fin de semana?"},
    {fr:"J'ai couru dix kilomètres hier.", es:"Ayer corrí diez kilómetros."},
    {fr:"Elle nage depuis son enfance.", es:"Lleva nadando desde que era niña."},
    {fr:"Je vais à la salle de sport après le travail.", es:"Voy al gimnasio después del trabajo."},
    {fr:"Il faut s'échauffer avant de commencer.", es:"Hay que calentar antes de empezar."},
    {fr:"Je suis épuisé après cet entraînement.", es:"Estoy agotado después de este entrenamiento."},
    {fr:"Continue, tu y es presque !", es:"¡Sigue, ya casi lo tienes!"},
    {fr:"Le sport me fait du bien.", es:"El deporte me sienta bien."}
  ], tip:{
    title:"« Llevar + gerundio » para expresar una duración",
    example:"Elle nage depuis son enfance. — <b>Lleva nadando</b> desde que era niña.",
    body:"Para decir que algo dura desde hace tiempo, el español usa a menudo « llevar + gerundio »: « lleva nadando desde pequeña ». Es una estructura muy natural y muy usada en el día a día, sin equivalente directo ni en francés ni en inglés."
  }},
  { title:"Parler de la météo", phrases:[
    {fr:"Quel temps fait-il aujourd'hui ?", es:"¿Qué tiempo hace hoy?"},
    {fr:"Il pleut depuis ce matin.", es:"Lleva lloviendo desde esta mañana."},
    {fr:"Le ciel est nuageux.", es:"El cielo está nublado."},
    {fr:"Il va faire beau demain.", es:"Mañana va a hacer buen tiempo."},
    {fr:"N'oublie pas ton parapluie.", es:"No olvides el paraguas."},
    {fr:"Il fait un froid glacial.", es:"Hace un frío glacial."},
    {fr:"La météo annonce de la neige.", es:"El pronóstico anuncia nieve."},
    {fr:"J'adore les journées ensoleillées.", es:"Me encantan los días soleados."},
    {fr:"Le vent souffle fort ce soir.", es:"El viento sopla fuerte esta noche."},
    {fr:"On dirait qu'un orage arrive.", es:"Parece que se acerca una tormenta."}
  ]},
  { title:"Inviter des amis", phrases:[
    {fr:"Tu es libre samedi soir ?", es:"¿Estás libre el sábado por la noche?"},
    {fr:"Ça te dit de venir dîner ?", es:"¿Te apetece venir a cenar?"},
    {fr:"J'organise une petite fête.", es:"Estoy organizando una pequeña fiesta."},
    {fr:"Amène qui tu veux.", es:"Trae a quien quieras."},
    {fr:"À quelle heure on se retrouve ?", es:"¿A qué hora quedamos?"},
    {fr:"J'ai hâte de te revoir.", es:"Tengo muchas ganas de volver a verte."},
    {fr:"Merci de m'avoir invité.", es:"Gracias por invitarme."},
    {fr:"On s'est bien amusés hier soir.", es:"Lo pasamos muy bien anoche."},
    {fr:"La prochaine fois, c'est chez moi.", es:"La próxima vez, en mi casa."},
    {fr:"Prends soin de toi et à bientôt.", es:"Cuídate y hasta pronto."}
  ]},
  { title:"Au restaurant, niveau 2", phrases:[
    {fr:"Avez-vous une table en terrasse ?", es:"¿Tiene una mesa en la terraza?"},
    {fr:"Quel est le plat du jour ?", es:"¿Cuál es el plato del día?"},
    {fr:"Je suis végétarien.", es:"Soy vegetariano."},
    {fr:"Sans gluten, si possible.", es:"Sin gluten, si es posible."},
    {fr:"Le plat était un peu trop salé.", es:"El plato estaba un poco salado."},
    {fr:"Pouvons-nous avoir plus de pain ?", es:"¿Nos puede traer más pan?"},
    {fr:"C'était un repas mémorable.", es:"Fue una comida memorable."},
    {fr:"Séparément ou ensemble, l'addition ?", es:"¿La cuenta por separado o junta?"},
    {fr:"Gardez la monnaie.", es:"Quédese con el cambio."},
    {fr:"On reviendra, c'est certain.", es:"Volveremos, seguro."}
  ]},
  { title:"Donner son avis", phrases:[
    {fr:"À mon avis, c'est une bonne idée.", es:"En mi opinión, es una buena idea."},
    {fr:"Je ne suis pas tout à fait d'accord.", es:"No estoy del todo de acuerdo."},
    {fr:"Ça dépend du point de vue.", es:"Depende del punto de vista."},
    {fr:"Tu as raison sur ce point.", es:"Tienes razón en eso."},
    {fr:"Honnêtement, je préfère l'autre option.", es:"Sinceramente, prefiero la otra opción."},
    {fr:"Ce n'est pas si simple.", es:"No es tan sencillo."},
    {fr:"Je comprends ton point de vue.", es:"Entiendo tu punto de vista."},
    {fr:"On devrait en discuter davantage.", es:"Deberíamos hablarlo más."},
    {fr:"Chacun voit midi à sa porte.", es:"Cada uno tiene su propia opinión."},
    {fr:"Au final, c'est toi qui décides.", es:"Al final, la decisión es tuya."}
  ]},
  { title:"Réserver des vacances", phrases:[
    {fr:"Je voudrais réserver un vol pour Londres.", es:"Quisiera reservar un vuelo a Londres."},
    {fr:"Quelle est la meilleure période pour y aller ?", es:"¿Cuál es la mejor época para ir?"},
    {fr:"L'hôtel est-il proche de la plage ?", es:"¿Está el hotel cerca de la playa?"},
    {fr:"Je préfère un vol direct.", es:"Prefiero un vuelo directo."},
    {fr:"Faut-il un visa pour ce pays ?", es:"¿Hace falta visado para este país?"},
    {fr:"Le séjour dure combien de temps ?", es:"¿Cuánto dura la estancia?"},
    {fr:"J'ai déjà fait ma valise.", es:"Ya he hecho la maleta."},
    {fr:"On part dans une semaine !", es:"¡Nos vamos dentro de una semana!"},
    {fr:"Ce voyage, je l'attends depuis longtemps.", es:"Llevo esperando este viaje desde hace mucho tiempo."},
    {fr:"Bienvenue dans la version complète de Mon Trajet en Espagnol !", es:"¡Bienvenido a la versión completa de Mi Viaje en Español!"}
  ], tip:{
    title:"« Desde » y « desde hace »: dos formas de expresar duración",
    example:"Ce voyage, je l'attends depuis longtemps. — Llevo esperando este viaje <b>desde hace</b> mucho tiempo.",
    body:"« Desde » señala el punto de partida en el tiempo (« desde el lunes », « desde la infancia »), mientras que « desde hace » señala una duración (« desde hace mucho tiempo », « desde hace tres años »). Es la misma distinción que « since » / « for » en inglés, pero con palabras distintas en español."
  }}
];

const level1Module2Lessons = [
  { title:"À l'aéroport (enregistrement)", phrases:[
    {fr:"Où est le comptoir d'enregistrement ?", es:"¿Dónde está el mostrador de facturación?"},
    {fr:"Voici mon billet et mon passeport.", es:"Aquí tiene mi billete y mi pasaporte."},
    {fr:"Combien de bagages puis-je enregistrer ?", es:"¿Cuántas maletas puedo facturar?"},
    {fr:"Ce sac est-il trop lourd ?", es:"¿Esta maleta pesa demasiado?"},
    {fr:"Je voudrais un siège côté couloir.", es:"Quisiera un asiento de pasillo."},
    {fr:"À quelle porte dois-je me rendre ?", es:"¿A qué puerta tengo que ir?"},
    {fr:"Le vol est-il à l'heure ?", es:"¿El vuelo va puntual?"},
    {fr:"L'embarquement commence à quelle heure ?", es:"¿A qué hora empieza el embarque?"},
    {fr:"J'ai un vol de correspondance à prendre.", es:"Tengo que coger un vuelo de conexión."},
    {fr:"Bon voyage !", es:"¡Buen viaje!"}
  ]},
  { title:"Passer la douane et la sécurité", phrases:[
    {fr:"Veuillez retirer vos chaussures.", es:"Por favor, quítese los zapatos."},
    {fr:"Videz vos poches, s'il vous plaît.", es:"Vacíe los bolsillos, por favor."},
    {fr:"Mettez votre ordinateur portable dans le bac.", es:"Ponga su ordenador portátil en la bandeja."},
    {fr:"Quel est le motif de votre visite ?", es:"¿Cuál es el motivo de su visita?"},
    {fr:"Je suis ici pour le tourisme.", es:"Estoy aquí de turismo."},
    {fr:"Où logerez-vous ?", es:"¿Dónde se va a alojar?"},
    {fr:"Voici mon billet retour.", es:"Aquí tiene mi billete de vuelta."},
    {fr:"Je n'ai rien à déclarer.", es:"No tengo nada que declarar."},
    {fr:"Puis-je passer maintenant ?", es:"¿Puedo pasar ya?"},
    {fr:"Merci, bon séjour.", es:"Gracias, que disfrute de su estancia."}
  ]},
  { title:"Dans l'avion", phrases:[
    {fr:"Excusez-moi, c'est ma place.", es:"Disculpe, este es mi asiento."},
    {fr:"Pouvez-vous m'aider avec mon bagage à main ?", es:"¿Puede ayudarme con mi equipaje de mano?"},
    {fr:"Voulez-vous quelque chose à boire ?", es:"¿Quiere algo de beber?"},
    {fr:"De l'eau, s'il vous plaît.", es:"Agua, por favor."},
    {fr:"Attachez votre ceinture.", es:"Abróchese el cinturón."},
    {fr:"Combien de temps dure le vol ?", es:"¿Cuánto dura el vuelo?"},
    {fr:"Je ne me sens pas très bien.", es:"No me siento muy bien."},
    {fr:"Avez-vous un sac pour le mal des transports ?", es:"¿Tiene una bolsa para el mareo?"},
    {fr:"Nous allons atterrir dans dix minutes.", es:"Vamos a aterrizar dentro de diez minutos."},
    {fr:"Merci d'avoir volé avec nous.", es:"Gracias por volar con nosotros."}
  ], tip:{
    title:"« Ir a + infinitivo » para el futuro próximo",
    example:"Nous allons atterrir dans dix minutes. — <b>Vamos a aterrizar</b> dentro de diez minutos.",
    body:"Buena noticia: esta estructura es casi idéntica al francés « aller + infinitif ». « Ir a + infinitivo » se usa para una acción prevista o a punto de ocurrir: « vamos a aterrizar », « va a llover »."
  }},
  { title:"Récupérer ses bagages", phrases:[
    {fr:"Où récupère-t-on les bagages ?", es:"¿Dónde se recoge el equipaje?"},
    {fr:"Mon sac n'est pas sorti.", es:"Mi maleta no ha salido."},
    {fr:"Il a été perdu, je crois.", es:"Creo que se ha perdido."},
    {fr:"Voici mon reçu de bagage.", es:"Aquí tiene mi recibo de equipaje."},
    {fr:"Où est la sortie ?", es:"¿Dónde está la salida?"},
    {fr:"Y a-t-il un bureau d'information touristique ?", es:"¿Hay una oficina de información turística?"},
    {fr:"Où puis-je trouver un chariot ?", es:"¿Dónde puedo encontrar un carrito?"},
    {fr:"La navette pour le centre-ville part d'où ?", es:"¿Desde dónde sale el autobús al centro?"},
    {fr:"J'ai hâte de découvrir la ville.", es:"Tengo ganas de descubrir la ciudad."},
    {fr:"Enfin arrivés !", es:"¡Por fin hemos llegado!"}
  ]},
  { title:"Prendre un taxi ou un VTC", phrases:[
    {fr:"Pouvez-vous m'emmener à cette adresse ?", es:"¿Puede llevarme a esta dirección?"},
    {fr:"Combien coûte la course ?", es:"¿Cuánto cuesta el trayecto?"},
    {fr:"C'est loin d'ici ?", es:"¿Está lejos de aquí?"},
    {fr:"Pouvez-vous allumer le compteur ?", es:"¿Puede poner el taxímetro?"},
    {fr:"Prenez le chemin le plus rapide, s'il vous plaît.", es:"Vaya por el camino más rápido, por favor."},
    {fr:"Pouvez-vous vous arrêter ici ?", es:"¿Puede parar aquí?"},
    {fr:"Gardez la monnaie.", es:"Quédese con el cambio."},
    {fr:"J'ai commandé une voiture.", es:"He pedido un coche."},
    {fr:"Le chauffeur arrive dans deux minutes.", es:"El conductor llega en dos minutos."},
    {fr:"Merci pour la course.", es:"Gracias por el viaje."}
  ]},
  { title:"Louer une voiture", phrases:[
    {fr:"Je voudrais louer une voiture pour trois jours.", es:"Quisiera alquilar un coche por tres días."},
    {fr:"Avez-vous un permis de conduire international ?", es:"¿Tiene un carné de conducir internacional?"},
    {fr:"L'assurance est-elle incluse ?", es:"¿Está incluido el seguro?"},
    {fr:"La voiture est-elle automatique ou manuelle ?", es:"¿El coche es automático o manual?"},
    {fr:"Le réservoir est-il plein ?", es:"¿El depósito está lleno?"},
    {fr:"Où dois-je rendre la voiture ?", es:"¿Dónde tengo que devolver el coche?"},
    {fr:"Que dois-je faire en cas d'accident ?", es:"¿Qué debo hacer en caso de accidente?"},
    {fr:"Le kilométrage est-il illimité ?", es:"¿El kilometraje es ilimitado?"},
    {fr:"Voici les clés.", es:"Aquí tiene las llaves."},
    {fr:"Bonne route !", es:"¡Buen viaje!"}
  ], tip:{
    title:"« Ser » y « estar »: dos verbos para « ser »",
    example:"La voiture est-elle automatique ou manuelle ? — ¿El coche <b>es</b> automático o manual?",
    body:"El español tiene dos verbos donde el francés solo tiene « être »: « ser » para características permanentes o esenciales (« el coche es automático ») y « estar » para estados temporales o la ubicación (« estoy cansado », « el coche está aquí »). Es una de las distinciones más importantes a dominar en español."
  }},
  { title:"Trouver son chemin", phrases:[
    {fr:"Excusez-moi, je suis perdu.", es:"Disculpe, estoy perdido."},
    {fr:"Comment puis-je aller au centre-ville ?", es:"¿Cómo puedo ir al centro?"},
    {fr:"Est-ce que c'est loin à pied ?", es:"¿Está lejos a pie?"},
    {fr:"Continuez tout droit.", es:"Siga todo recto."},
    {fr:"Tournez à droite au feu.", es:"Gire a la derecha en el semáforo."},
    {fr:"C'est juste après le pont.", es:"Está justo después del puente."},
    {fr:"Vous ne pouvez pas le rater.", es:"No tiene pérdida."},
    {fr:"Avez-vous un plan de la ville ?", es:"¿Tiene un plano de la ciudad?"},
    {fr:"Merci pour les indications.", es:"Gracias por las indicaciones."},
    {fr:"J'ai trouvé, merci !", es:"¡Ya lo he encontrado, gracias!"}
  ]},
  { title:"Prendre le train", phrases:[
    {fr:"Un billet pour Séville, s'il vous plaît.", es:"Un billete para Sevilla, por favor."},
    {fr:"Aller simple ou aller-retour ?", es:"¿Ida o ida y vuelta?"},
    {fr:"À quel quai part le train ?", es:"¿De qué andén sale el tren?"},
    {fr:"Le train a du retard.", es:"El tren lleva retraso."},
    {fr:"Est-ce que cette place est libre ?", es:"¿Está libre este asiento?"},
    {fr:"Où est la voiture-restaurant ?", es:"¿Dónde está el vagón restaurante?"},
    {fr:"Prochain arrêt, dans dix minutes.", es:"Próxima parada, en diez minutos."},
    {fr:"N'oubliez pas vos affaires.", es:"No olvide sus pertenencias."},
    {fr:"Le contrôleur vérifie les billets.", es:"El revisor está comprobando los billetes."},
    {fr:"Terminus, tout le monde descend.", es:"Fin de trayecto, todos deben bajar."}
  ]},
  { title:"À la gare routière", phrases:[
    {fr:"À quelle heure part le prochain bus ?", es:"¿A qué hora sale el próximo autobús?"},
    {fr:"Combien de temps dure le trajet ?", es:"¿Cuánto dura el trayecto?"},
    {fr:"Y a-t-il des arrêts en chemin ?", es:"¿Hay paradas por el camino?"},
    {fr:"Puis-je mettre ma valise en soute ?", es:"¿Puedo meter la maleta en el maletero?"},
    {fr:"Le bus est complet.", es:"El autobús está completo."},
    {fr:"Y a-t-il des toilettes à bord ?", es:"¿Hay baño a bordo?"},
    {fr:"Combien de temps dure la pause ?", es:"¿Cuánto dura la parada?"},
    {fr:"On arrive bientôt ?", es:"¿Llegamos pronto?"},
    {fr:"Le chauffeur est très sympathique.", es:"El conductor es muy simpático."},
    {fr:"Merci, bonne continuation.", es:"Gracias, que le vaya bien."}
  ], tip:{
    title:"« Hay »: una sola palabra para « il y a »",
    example:"Y a-t-il des toilettes à bord ? — ¿<b>Hay</b> baño a bordo?",
    body:"A diferencia del francés (« il y a ») y del inglés (« there is / there are »), el español usa una sola palabra invariable, « hay », tanto para el singular como para el plural: « hay un baño », « hay muchos turistas ». Nunca cambia de forma ni lleva artículo delante."
  }},
  { title:"Arriver à l'hôtel", phrases:[
    {fr:"Bonjour, j'ai une réservation.", es:"Hola, tengo una reserva."},
    {fr:"À quel nom, s'il vous plaît ?", es:"¿A qué nombre, por favor?"},
    {fr:"Puis-je voir une pièce d'identité ?", es:"¿Puedo ver un documento de identidad?"},
    {fr:"Voici votre clé de chambre.", es:"Aquí tiene la llave de su habitación."},
    {fr:"Votre chambre est au troisième étage.", es:"Su habitación está en el tercer piso."},
    {fr:"Où se trouve l'ascenseur ?", es:"¿Dónde está el ascensor?"},
    {fr:"Le service en chambre est disponible toute la nuit.", es:"El servicio de habitaciones está disponible toda la noche."},
    {fr:"Puis-je avoir un réveil demain matin ?", es:"¿Me pueden despertar mañana por la mañana?"},
    {fr:"Profitez de votre séjour parmi nous.", es:"Disfrute de su estancia con nosotros."},
    {fr:"Merci beaucoup, à bientôt.", es:"Muchas gracias, hasta pronto."}
  ]},
  { title:"Problèmes à l'hôtel", phrases:[
    {fr:"Il n'y a pas d'eau chaude.", es:"No hay agua caliente."},
    {fr:"La chambre n'est pas propre.", es:"La habitación no está limpia."},
    {fr:"Puis-je changer de chambre ?", es:"¿Puedo cambiar de habitación?"},
    {fr:"La climatisation ne fonctionne pas.", es:"El aire acondicionado no funciona."},
    {fr:"Il y a trop de bruit dans le couloir.", es:"Hay demasiado ruido en el pasillo."},
    {fr:"Pouvez-vous envoyer quelqu'un ?", es:"¿Puede enviar a alguien?"},
    {fr:"Je suis désolé pour le désagrément.", es:"Lamento las molestias."},
    {fr:"Nous allons résoudre ça rapidement.", es:"Vamos a solucionarlo rápidamente."},
    {fr:"Merci de votre compréhension.", es:"Gracias por su comprensión."},
    {fr:"Tout est réglé maintenant.", es:"Ya está todo solucionado."}
  ]},
  { title:"Visiter un musée", phrases:[
    {fr:"Un billet adulte, s'il vous plaît.", es:"Una entrada de adulto, por favor."},
    {fr:"Y a-t-il une réduction étudiant ?", es:"¿Hay descuento para estudiantes?"},
    {fr:"À quelle heure ferme le musée ?", es:"¿A qué hora cierra el museo?"},
    {fr:"Peut-on prendre des photos ?", es:"¿Se pueden hacer fotos?"},
    {fr:"Où se trouve l'exposition temporaire ?", es:"¿Dónde está la exposición temporal?"},
    {fr:"Avez-vous un audioguide en français ?", es:"¿Tienen audioguía en francés?"},
    {fr:"Cette œuvre est magnifique.", es:"Esta obra es preciosa."},
    {fr:"Il y a énormément à voir.", es:"Hay muchísimo que ver."},
    {fr:"On pourrait passer la journée ici.", es:"Podríamos pasar aquí todo el día."},
    {fr:"Merci pour la visite.", es:"Gracias por la visita."}
  ]},
  { title:"Faire du tourisme en ville", phrases:[
    {fr:"Quels sont les incontournables à voir ?", es:"¿Cuáles son las cosas que no hay que perderse?"},
    {fr:"Y a-t-il une visite guidée ?", es:"¿Hay una visita guiada?"},
    {fr:"Combien de temps dure la visite ?", es:"¿Cuánto dura la visita?"},
    {fr:"Ce quartier est très animé.", es:"Este barrio tiene mucho ambiente."},
    {fr:"On monte au sommet pour la vue ?", es:"¿Subimos a la cima para ver las vistas?"},
    {fr:"La vue d'ici est à couper le souffle.", es:"Las vistas desde aquí son impresionantes."},
    {fr:"Je pourrais rester ici des heures.", es:"Podría quedarme aquí horas."},
    {fr:"Il y a beaucoup de monde aujourd'hui.", es:"Hay mucha gente hoy."},
    {fr:"N'oublie pas de prendre une photo.", es:"No olvides hacer una foto."},
    {fr:"Cette ville est vraiment magnifique.", es:"Esta ciudad es realmente preciosa."}
  ]},
  { title:"Acheter des souvenirs", phrases:[
    {fr:"Je cherche un souvenir pour ma famille.", es:"Estoy buscando un recuerdo para mi familia."},
    {fr:"Combien coûte cette carte postale ?", es:"¿Cuánto cuesta esta postal?"},
    {fr:"Avez-vous quelque chose de typique de la région ?", es:"¿Tiene algo típico de la región?"},
    {fr:"C'est fait à la main ?", es:"¿Está hecho a mano?"},
    {fr:"Pouvez-vous l'emballer, s'il vous plaît ?", es:"¿Me lo puede envolver, por favor?"},
    {fr:"Je vais en prendre deux.", es:"Me voy a llevar dos."},
    {fr:"Est-ce que vous expédiez à l'étranger ?", es:"¿Hacen envíos al extranjero?"},
    {fr:"Ce marché est fantastique.", es:"Este mercado es fantástico."},
    {fr:"J'ai trouvé le cadeau parfait.", es:"He encontrado el regalo perfecto."},
    {fr:"Merci, bonne journée à vous aussi.", es:"Gracias, que tenga un buen día también."}
  ]},
  { title:"Réserver une excursion", phrases:[
    {fr:"Je voudrais réserver une excursion en bateau.", es:"Quisiera reservar una excursión en barco."},
    {fr:"À quelle heure est le départ ?", es:"¿A qué hora es la salida?"},
    {fr:"Le déjeuner est-il compris ?", es:"¿Está incluida la comida?"},
    {fr:"Combien de personnes participent ?", es:"¿Cuánta gente participa?"},
    {fr:"Faut-il réserver à l'avance ?", es:"¿Hay que reservar con antelación?"},
    {fr:"Où doit-on se retrouver ?", es:"¿Dónde hay que quedar?"},
    {fr:"Que se passe-t-il s'il pleut ?", es:"¿Qué pasa si llueve?"},
    {fr:"J'ai déjà réservé en ligne.", es:"Ya he reservado online."},
    {fr:"Cette excursion a été le meilleur moment du voyage.", es:"Esta excursión fue el mejor momento del viaje."},
    {fr:"Je la recommande vivement.", es:"La recomiendo totalmente."}
  ], tip:{
    title:"« Ya » con el pretérito perfecto",
    example:"J'ai déjà réservé en ligne. — <b>Ya</b> he reservado online.",
    body:"« Ya » (déjà) se coloca normalmente antes del verbo auxiliar « haber »: « ya he reservado », a diferencia del francés, donde « déjà » se intercala entre el auxiliar y el participio (« j'ai déjà réservé »). Subraya que algo se hizo antes de lo esperado."
  }},
  { title:"Changer de l'argent, à la banque", phrases:[
    {fr:"Où puis-je changer de l'argent ?", es:"¿Dónde puedo cambiar dinero?"},
    {fr:"Quel est le taux de change aujourd'hui ?", es:"¿Cuál es el tipo de cambio hoy?"},
    {fr:"Y a-t-il des frais de commission ?", es:"¿Hay comisión?"},
    {fr:"Je voudrais retirer de l'argent.", es:"Quisiera sacar dinero."},
    {fr:"Le distributeur ne fonctionne pas.", es:"El cajero no funciona."},
    {fr:"Acceptez-vous les chèques de voyage ?", es:"¿Aceptan cheques de viaje?"},
    {fr:"Puis-je payer par carte ici ?", es:"¿Puedo pagar con tarjeta aquí?"},
    {fr:"Ma carte a été refusée.", es:"Me han rechazado la tarjeta."},
    {fr:"Pouvez-vous vérifier avec la banque ?", es:"¿Puede comprobarlo con el banco?"},
    {fr:"Merci pour votre patience.", es:"Gracias por su paciencia."}
  ]},
  { title:"Urgences et sécurité en voyage", phrases:[
    {fr:"J'ai besoin d'aide, c'est urgent.", es:"Necesito ayuda, es urgente."},
    {fr:"Appelez une ambulance, s'il vous plaît.", es:"Llame a una ambulancia, por favor."},
    {fr:"On m'a volé mon sac.", es:"Me han robado el bolso."},
    {fr:"Où est le commissariat le plus proche ?", es:"¿Dónde está la comisaría más cercana?"},
    {fr:"J'ai perdu mon passeport.", es:"He perdido el pasaporte."},
    {fr:"Pouvez-vous contacter l'ambassade ?", es:"¿Puede contactar con la embajada?"},
    {fr:"Restez calme, tout va bien se passer.", es:"Mantenga la calma, todo va a salir bien."},
    {fr:"Avez-vous une assurance voyage ?", es:"¿Tiene seguro de viaje?"},
    {fr:"Merci de m'avoir aidé si vite.", es:"Gracias por ayudarme tan rápido."},
    {fr:"Je me sens en sécurité maintenant.", es:"Ahora me siento seguro."}
  ]},
  { title:"Rencontrer des gens en voyage", phrases:[
    {fr:"D'où viens-tu ?", es:"¿De dónde eres?"},
    {fr:"Je viens de France.", es:"Soy de Francia."},
    {fr:"C'est mon premier voyage ici.", es:"Este es mi primer viaje aquí."},
    {fr:"Qu'est-ce qui t'amène ici ?", es:"¿Qué te trae por aquí?"},
    {fr:"On pourrait voyager ensemble demain.", es:"Podríamos viajar juntos mañana."},
    {fr:"Tu as des recommandations ?", es:"¿Tienes alguna recomendación?"},
    {fr:"Restons en contact.", es:"Mantengamos el contacto."},
    {fr:"Voici mon numéro.", es:"Aquí tienes mi número."},
    {fr:"Ce fut un plaisir de te rencontrer.", es:"Fue un placer conocerte."},
    {fr:"Bon voyage à toi aussi.", es:"Buen viaje para ti también."}
  ]},
  { title:"Prendre l'avion retour", phrases:[
    {fr:"Je dois confirmer mon vol retour.", es:"Tengo que confirmar mi vuelo de vuelta."},
    {fr:"À quelle heure dois-je être à l'aéroport ?", es:"¿A qué hora tengo que estar en el aeropuerto?"},
    {fr:"Ai-je un excédent de bagage ?", es:"¿Llevo exceso de equipaje?"},
    {fr:"Puis-je changer la date de mon vol ?", es:"¿Puedo cambiar la fecha de mi vuelo?"},
    {fr:"Il y a des frais supplémentaires.", es:"Hay gastos adicionales."},
    {fr:"Mon vol a été annulé.", es:"Mi vuelo ha sido cancelado."},
    {fr:"Y a-t-il un autre vol aujourd'hui ?", es:"¿Hay otro vuelo hoy?"},
    {fr:"Je suis triste de partir.", es:"Me da pena irme."},
    {fr:"Ce voyage restera inoubliable.", es:"Este viaje será inolvidable."},
    {fr:"À la prochaine aventure.", es:"Hasta la próxima aventura."}
  ]},
  { title:"Bilan du voyage", phrases:[
    {fr:"Ce voyage a changé ma vision des choses.", es:"Este viaje ha cambiado mi forma de ver las cosas."},
    {fr:"J'ai rencontré des gens incroyables.", es:"He conocido a gente increíble."},
    {fr:"J'ai appris tellement de choses.", es:"He aprendido tantísimas cosas."},
    {fr:"Ce pays va me manquer.", es:"Voy a echar de menos este país."},
    {fr:"Je reviendrai, c'est certain.", es:"Volveré, seguro."},
    {fr:"Merci de m'avoir accompagné jusqu'ici.", es:"Gracias por acompañarme hasta aquí."},
    {fr:"On a vécu des moments incroyables ensemble.", es:"Hemos vivido momentos increíbles juntos."},
    {fr:"L'aventure ne fait que commencer.", es:"La aventura no ha hecho más que empezar."},
    {fr:"Prochaine destination : le module 3.", es:"Próximo destino: el módulo 3."},
    {fr:"Bravo, tu as terminé le module « En voyage » !", es:"¡Enhorabuena, has terminado el módulo «De viaje»!"}
  ], tip:{
    title:"Participios pasados irregulares",
    example:"Hemos visto cosas increíbles y hemos hecho nuevos amigos.",
    body:"Igual que en francés, muchos participios pasados españoles son irregulares: hecho (hacer), dicho (decir), visto (ver), puesto (poner), vuelto (volver), escrito (escribir), abierto (abrir). Hay que aprenderlos de memoria, ya que no siguen la regla de « -ado / -ido »."
  }}
];

const level1Module3Lessons = [
  { title:"Se présenter en détail", phrases:[
    {fr:"Je m'appelle Sarah, et toi ?", es:"Me llamo Sarah, ¿y tú?"},
    {fr:"J'ai vingt-huit ans.", es:"Tengo veintiocho años."},
    {fr:"Je viens d'une petite ville en France.", es:"Soy de un pueblo pequeño de Francia."},
    {fr:"J'habite ici depuis deux ans.", es:"Vivo aquí desde hace dos años."},
    {fr:"Je suis plutôt quelqu'un de discret.", es:"Soy bastante reservado."},
    {fr:"On dit que je suis très curieux.", es:"Dicen que soy muy curioso."},
    {fr:"J'apprends l'espagnol depuis quelques mois.", es:"Llevo unos meses aprendiendo español."},
    {fr:"Raconte-moi un peu qui tu es.", es:"Cuéntame un poco quién eres."},
    {fr:"C'est un plaisir de faire ta connaissance.", es:"Es un placer conocerte."},
    {fr:"J'espère qu'on se reverra bientôt.", es:"Espero que nos volvamos a ver pronto."}
  ]},
  { title:"Parler de sa famille", phrases:[
    {fr:"J'ai deux frères et une sœur.", es:"Tengo dos hermanos y una hermana."},
    {fr:"Je suis l'aîné de la famille.", es:"Soy el mayor de la familia."},
    {fr:"Mes parents habitent à la campagne.", es:"Mis padres viven en el campo."},
    {fr:"Ma sœur vient d'avoir un bébé.", es:"Mi hermana acaba de tener un bebé."},
    {fr:"Nous sommes très proches.", es:"Estamos muy unidos."},
    {fr:"On se voit tous les dimanches.", es:"Nos vemos todos los domingos."},
    {fr:"Mon grand-père me manque beaucoup.", es:"Echo mucho de menos a mi abuelo."},
    {fr:"As-tu des frères et sœurs ?", es:"¿Tienes hermanos?"},
    {fr:"Ma famille compte énormément pour moi.", es:"Mi familia es muy importante para mí."},
    {fr:"C'est compliqué mais on s'aime.", es:"Es complicado, pero nos queremos."}
  ]},
  { title:"Parler de son travail et ses études", phrases:[
    {fr:"Je travaille dans le marketing.", es:"Trabajo en marketing."},
    {fr:"J'étudie encore à l'université.", es:"Todavía estudio en la universidad."},
    {fr:"C'est le bureau de mon frère.", es:"Es la oficina de mi hermano."},
    {fr:"Mon travail me plaît beaucoup.", es:"Me gusta mucho mi trabajo."},
    {fr:"J'ai changé de carrière l'année dernière.", es:"Cambié de carrera el año pasado."},
    {fr:"C'est le projet de mon équipe.", es:"Es el proyecto de mi equipo."},
    {fr:"Je cherche un nouvel emploi.", es:"Estoy buscando un nuevo empleo."},
    {fr:"Les études de ma sœur sont exigeantes.", es:"Los estudios de mi hermana son exigentes."},
    {fr:"Je rêve de créer ma propre entreprise.", es:"Sueño con crear mi propia empresa."},
    {fr:"Ça te plaît, ce que tu fais ?", es:"¿Te gusta lo que haces?"}
  ], tip:{
    title:"En español no hay « 's »: se usa siempre « de »",
    example:"C'est le bureau de mon frère. — Es la oficina <b>de</b> mi hermano.",
    body:"El español, igual que el francés, no tiene una forma equivalente al « 's » inglés. La posesión se expresa siempre con « de »: « la oficina de mi hermano », « el coche de María ». En este punto, el español es más sencillo que el inglés."
  }},
  { title:"Parler de ses loisirs et passions", phrases:[
    {fr:"Qu'est-ce que tu aimes faire pendant ton temps libre ?", es:"¿Qué te gusta hacer en tu tiempo libre?"},
    {fr:"Je passe beaucoup de temps à lire.", es:"Paso mucho tiempo leyendo."},
    {fr:"J'ai commencé la photographie récemment.", es:"Hace poco empecé con la fotografía."},
    {fr:"J'adore cuisiner le week-end.", es:"Me encanta cocinar los fines de semana."},
    {fr:"Je joue de la guitare depuis dix ans.", es:"Llevo diez años tocando la guitarra."},
    {fr:"Ça me détend complètement.", es:"Me relaja totalmente."},
    {fr:"Tu devrais essayer, c'est génial.", es:"Deberías probarlo, es genial."},
    {fr:"Je n'ai jamais assez de temps pour tout.", es:"Nunca tengo tiempo suficiente para todo."},
    {fr:"C'est ma passion depuis toujours.", es:"Es mi pasión de toda la vida."},
    {fr:"On devrait s'y mettre ensemble.", es:"Deberíamos empezar juntos."}
  ]},
  { title:"Faire des compliments", phrases:[
    {fr:"Tu as l'air en pleine forme.", es:"Tienes muy buen aspecto."},
    {fr:"J'adore ta façon de voir les choses.", es:"Me encanta tu forma de ver las cosas."},
    {fr:"Tu cuisines vraiment très bien.", es:"Cocinas realmente muy bien."},
    {fr:"C'est une excellente idée.", es:"Es una idea excelente."},
    {fr:"Tu as beaucoup de talent.", es:"Tienes mucho talento."},
    {fr:"Ce que tu as fait est impressionnant.", es:"Lo que has hecho es impresionante."},
    {fr:"J'admire ta patience.", es:"Admiro tu paciencia."},
    {fr:"Tu m'inspires vraiment.", es:"Me inspiras de verdad."},
    {fr:"Merci, ça me touche beaucoup.", es:"Gracias, me emociona mucho."},
    {fr:"Tu le mérites amplement.", es:"Te lo mereces de sobra."}
  ]},
  { title:"Parler de ses goûts", phrases:[
    {fr:"Quel genre de musique tu écoutes ?", es:"¿Qué tipo de música escuchas?"},
    {fr:"Je préfère le jazz au rock.", es:"Prefiero el jazz al rock."},
    {fr:"Ce film est plus intéressant que l'autre.", es:"Esta película es más interesante que la otra."},
    {fr:"C'est le meilleur album qu'il ait sorti.", es:"Es el mejor álbum que ha sacado."},
    {fr:"Je trouve ce livre plus émouvant que le film.", es:"Me parece que el libro es más emotivo que la película."},
    {fr:"Elle chante mieux que moi.", es:"Ella canta mejor que yo."},
    {fr:"C'est plus calme ici que chez moi.", es:"Aquí se está más tranquilo que en mi casa."},
    {fr:"Tu as des recommandations à me faire ?", es:"¿Tienes alguna recomendación para mí?"},
    {fr:"On a des goûts assez similaires.", es:"Tenemos gustos bastante parecidos."},
    {fr:"Je vais l'ajouter à ma liste.", es:"Lo voy a añadir a mi lista."}
  ], tip:{
    title:"El comparativo: « más... que » / « menos... que »",
    example:"Elle chante mieux que moi. — Ella canta <b>mejor que</b> yo.",
    body:"El español forma el comparativo con « más + adjetivo/adverbio + que » (o « menos... que » para lo contrario): « más interesante que », « menos caro que ». Algunos comparativos son irregulares, como « mejor » (de bueno/bien) o « peor » (de malo/mal) — igual que en francés « meilleur »."
  }},
  { title:"Raconter sa journée", phrases:[
    {fr:"Comment s'est passée ta journée ?", es:"¿Qué tal tu día?"},
    {fr:"Je me suis levé tôt ce matin.", es:"Me he levantado temprano esta mañana."},
    {fr:"J'ai eu une journée assez chargée.", es:"He tenido un día bastante ajetreado."},
    {fr:"J'ai déjeuné avec un ami.", es:"He comido con un amigo."},
    {fr:"Le travail était plutôt calme aujourd'hui.", es:"El trabajo ha estado bastante tranquilo hoy."},
    {fr:"J'ai fait une petite sieste cet après-midi.", es:"He echado una siestecita esta tarde."},
    {fr:"Rien de spécial à signaler.", es:"Nada especial que contar."},
    {fr:"Ça a été une bonne journée dans l'ensemble.", es:"En general, ha sido un buen día."},
    {fr:"Et toi, quoi de neuf ?", es:"¿Y tú, qué hay de nuevo?"},
    {fr:"Je suis content que la journée soit finie.", es:"Me alegro de que el día haya terminado."}
  ]},
  { title:"Parler de ses projets d'avenir", phrases:[
    {fr:"Qu'est-ce que tu comptes faire l'année prochaine ?", es:"¿Qué piensas hacer el año que viene?"},
    {fr:"J'aimerais voyager davantage.", es:"Me gustaría viajar más."},
    {fr:"Je pense déménager bientôt.", es:"Estoy pensando en mudarme pronto."},
    {fr:"On prévoit de se marier au printemps.", es:"Tenemos pensado casarnos en primavera."},
    {fr:"J'espère décrocher ce poste.", es:"Espero conseguir ese puesto."},
    {fr:"Mes projets ne sont pas encore clairs.", es:"Mis planes todavía no están claros."},
    {fr:"Je vise à apprendre une nouvelle langue.", es:"Mi objetivo es aprender un idioma nuevo."},
    {fr:"On verra ce que l'avenir nous réserve.", es:"Ya veremos lo que nos depara el futuro."},
    {fr:"J'ai hâte de voir où tout ça va me mener.", es:"Tengo ganas de ver adónde me lleva todo esto."},
    {fr:"Une chose à la fois.", es:"Una cosa a la vez."}
  ]},
  { title:"Exprimer ses émotions", phrases:[
    {fr:"Je me sens un peu stressé aujourd'hui.", es:"Hoy me siento un poco estresado."},
    {fr:"Je suis vraiment content pour toi.", es:"Me alegro mucho por ti."},
    {fr:"Ça m'a rendu triste d'apprendre ça.", es:"Me puso triste enterarme de eso."},
    {fr:"Je suis nerveux avant l'entretien.", es:"Estoy nervioso antes de la entrevista."},
    {fr:"Tu ne devrais pas t'inquiéter autant.", es:"No deberías preocuparte tanto."},
    {fr:"Tu devrais en parler à quelqu'un.", es:"Deberías hablarlo con alguien."},
    {fr:"Ça va aller, je te le promets.", es:"Todo va a ir bien, te lo prometo."},
    {fr:"Je me sens beaucoup mieux maintenant.", es:"Ahora me siento mucho mejor."},
    {fr:"Merci de m'avoir écouté.", es:"Gracias por escucharme."},
    {fr:"Parler, ça fait toujours du bien.", es:"Hablar siempre sienta bien."}
  ], tip:{
    title:"« Deberías »: dar un consejo con delicadeza",
    example:"Tu devrais en parler à quelqu'un. — <b>Deberías</b> hablarlo con alguien.",
    body:"« Deberías » (condicional de « deber ») es la forma habitual de dar un consejo sin sonar autoritario, igual que « tu devrais » en francés o « you should » en inglés. Es mucho más suave que « debes », que suena a orden."
  }},
  { title:"Bilan de mi-parcours", phrases:[
    {fr:"On a couvert beaucoup de sujets ensemble.", es:"Hemos tratado muchos temas juntos."},
    {fr:"Tu te sens plus à l'aise en espagnol maintenant ?", es:"¿Te sientes más cómodo con el español ahora?"},
    {fr:"Je suis fier du chemin parcouru.", es:"Estoy orgulloso del camino recorrido."},
    {fr:"C'était un excellent entraînement jusqu'ici.", es:"Ha sido un entrenamiento excelente hasta ahora."},
    {fr:"Il reste encore beaucoup à apprendre.", es:"Todavía queda mucho por aprender."},
    {fr:"Continuons sur cette lancée.", es:"Sigamos con este impulso."},
    {fr:"La pratique régulière fait toute la différence.", es:"La práctica regular marca toda la diferencia."},
    {fr:"Bravo pour ta persévérance.", es:"Enhorabuena por tu constancia."},
    {fr:"La suite s'annonce passionnante.", es:"Lo que viene pinta apasionante."},
    {fr:"Prêt pour la deuxième moitié ?", es:"¿Listo para la segunda mitad?"}
  ]},
  { title:"Parler de la vie de couple et d'amitié", phrases:[
    {fr:"Comment t'es-tu rencontré avec ton copain ?", es:"¿Cómo conociste a tu novio?"},
    {fr:"On s'est rencontrés à l'université.", es:"Nos conocimos en la universidad."},
    {fr:"C'est un ami de longue date.", es:"Es un amigo de toda la vida."},
    {fr:"On se soutient toujours l'un l'autre.", es:"Siempre nos apoyamos el uno al otro."},
    {fr:"La confiance est essentielle dans une relation.", es:"La confianza es esencial en una relación."},
    {fr:"On a traversé des hauts et des bas.", es:"Hemos pasado por momentos buenos y malos."},
    {fr:"Elle est toujours là pour moi.", es:"Ella siempre está ahí para mí."},
    {fr:"C'est rare de trouver une amitié pareille.", es:"Es raro encontrar una amistad así."},
    {fr:"On se comprend sans même parler.", es:"Nos entendemos sin siquiera hablar."},
    {fr:"J'ai de la chance de l'avoir dans ma vie.", es:"Tengo suerte de tenerla en mi vida."}
  ]},
  { title:"Faire la conversation lors d'une fête", phrases:[
    {fr:"Belle soirée, non ?", es:"Bonita noche, ¿verdad?"},
    {fr:"Tu connais beaucoup de monde ici ?", es:"¿Conoces a mucha gente aquí?"},
    {fr:"Comment connais-tu l'hôte de la soirée ?", es:"¿Cómo conoces al anfitrión de la fiesta?"},
    {fr:"On travaille ensemble depuis un an.", es:"Llevamos un año trabajando juntos."},
    {fr:"La musique est super ce soir.", es:"La música está genial esta noche."},
    {fr:"Tu veux qu'on aille prendre l'air ?", es:"¿Quieres que salgamos a tomar el aire?"},
    {fr:"Ce gâteau a l'air délicieux.", es:"Esta tarta tiene una pinta deliciosa."},
    {fr:"Je ne connaissais personne en arrivant.", es:"No conocía a nadie cuando llegué."},
    {fr:"Je suis content d'être venu.", es:"Me alegro de haber venido."},
    {fr:"On garde contact après ce soir ?", es:"¿Seguimos en contacto después de esta noche?"}
  ]},
  { title:"Débattre poliment", phrases:[
    {fr:"Je comprends ton point de vue, mais je vois les choses différemment.", es:"Entiendo tu punto de vista, pero yo lo veo de otra manera."},
    {fr:"Ce n'est pas tout à fait comme ça que je le vois.", es:"No es exactamente así como yo lo veo."},
    {fr:"Tu marques un bon point, cependant...", es:"Tienes razón en algo, sin embargo..."},
    {fr:"Je ne suis pas totalement convaincu.", es:"No estoy del todo convencido."},
    {fr:"Est-ce qu'on pourrait envisager une autre option ?", es:"¿Podríamos considerar otra opción?"},
    {fr:"Je respecte ton opinion, même si je ne suis pas d'accord.", es:"Respeto tu opinión, aunque no esté de acuerdo."},
    {fr:"On n'est pas obligés d'être d'accord sur tout.", es:"No tenemos por qué estar de acuerdo en todo."},
    {fr:"C'est un sujet plus nuancé qu'il n'y paraît.", es:"Es un tema más matizado de lo que parece."},
    {fr:"Discutons-en calmement.", es:"Hablémoslo con calma."},
    {fr:"Merci d'avoir partagé ton avis.", es:"Gracias por compartir tu opinión."}
  ]},
  { title:"Raconter une anecdote drôle", phrases:[
    {fr:"Il m'est arrivé un truc hilarant hier.", es:"Ayer me pasó algo buenísimo."},
    {fr:"Tu ne vas jamais croire ce qui s'est passé.", es:"No te vas a creer lo que pasó."},
    {fr:"J'ai complètement raté mon entrée.", es:"La entrada me salió fatal."},
    {fr:"Tout le monde a éclaté de rire.", es:"Todo el mundo se echó a reír."},
    {fr:"J'étais tellement gêné sur le moment.", es:"Me dio muchísima vergüenza en ese momento."},
    {fr:"Avec le recul, c'est vraiment drôle.", es:"Visto con perspectiva, tiene mucha gracia."},
    {fr:"Ça me fait encore rire aujourd'hui.", es:"Todavía me hace reír hoy en día."},
    {fr:"Tu aurais dû voir ta tête.", es:"Tendrías que haber visto tu cara."},
    {fr:"On en rit encore avec mes amis.", es:"Todavía nos reímos de eso con mis amigos."},
    {fr:"Ce genre de moment, ça ne s'invente pas.", es:"Este tipo de momentos no se inventan."}
  ]},
  { title:"Parler de ses peurs et rêves", phrases:[
    {fr:"J'ai peur de parler en public.", es:"Tengo miedo de hablar en público."},
    {fr:"Mais j'essaie de sortir de ma zone de confort.", es:"Pero intento salir de mi zona de confort."},
    {fr:"Mon rêve serait de vivre à l'étranger.", es:"Mi sueño sería vivir en el extranjero."},
    {fr:"J'ai un peu peur de l'échec.", es:"Tengo un poco de miedo al fracaso."},
    {fr:"Donc je préfère avancer doucement.", es:"Así que prefiero avanzar despacio."},
    {fr:"Bien que ce soit effrayant, ça vaut le coup.", es:"Aunque dé miedo, vale la pena."},
    {fr:"Parce que la vie est trop courte pour hésiter.", es:"Porque la vida es demasiado corta para dudar."},
    {fr:"J'aimerais un jour écrire un livre.", es:"Me gustaría escribir un libro algún día."},
    {fr:"Tout le monde a des peurs, c'est normal.", es:"Todo el mundo tiene miedos, es normal."},
    {fr:"On avance malgré la peur.", es:"Avanzamos a pesar del miedo."}
  ], tip:{
    title:"Los conectores: « porque », « así que », « aunque »",
    example:"Bien que ce soit effrayant, ça vaut le coup. — <b>Aunque</b> dé miedo, vale la pena.",
    body:"« Porque » introduce una causa, « así que » (o « por eso ») introduce una consecuencia, y « aunque » introduce una concesión (algo que podría ser un obstáculo pero no lo es). Son conectores esenciales para construir frases más elaboradas en español."
  }},
  { title:"Réconforter quelqu'un", phrases:[
    {fr:"Je suis désolé, ça a l'air difficile.", es:"Lo siento, suena difícil."},
    {fr:"Je suis là pour toi, quoi qu'il arrive.", es:"Estoy aquí para ti, pase lo que pase."},
    {fr:"Ça va s'arranger avec le temps.", es:"Se va a arreglar con el tiempo."},
    {fr:"Tu n'es pas seul dans cette épreuve.", es:"No estás solo en esto."},
    {fr:"Prends le temps qu'il te faut.", es:"Tómate el tiempo que necesites."},
    {fr:"N'hésite pas à m'appeler si besoin.", es:"No dudes en llamarme si lo necesitas."},
    {fr:"Tu as le droit d'être triste.", es:"Tienes derecho a estar triste."},
    {fr:"Ça montre à quel point tu es fort.", es:"Eso demuestra lo fuerte que eres."},
    {fr:"On traversera ça ensemble.", es:"Pasaremos por esto juntos."},
    {fr:"Je pense fort à toi.", es:"Estoy pensando mucho en ti."}
  ]},
  { title:"Faire des excuses", phrases:[
    {fr:"Je suis vraiment désolé pour hier.", es:"Siento mucho lo de ayer."},
    {fr:"Je n'aurais pas dû dire ça.", es:"No debería haber dicho eso."},
    {fr:"Ce n'était pas mon intention de te blesser.", es:"No era mi intención hacerte daño."},
    {fr:"Peux-tu me pardonner ?", es:"¿Puedes perdonarme?"},
    {fr:"J'aurais dû t'écouter davantage.", es:"Debería haberte escuchado más."},
    {fr:"Je vais faire des efforts pour changer.", es:"Voy a esforzarme por cambiar."},
    {fr:"Merci de me donner une seconde chance.", es:"Gracias por darme una segunda oportunidad."},
    {fr:"C'est entièrement ma faute.", es:"Es completamente culpa mía."},
    {fr:"J'apprécie ta patience envers moi.", es:"Agradezco tu paciencia conmigo."},
    {fr:"On tourne la page ensemble.", es:"Pasamos página juntos."}
  ]},
  { title:"Féliciter quelqu'un", phrases:[
    {fr:"Félicitations pour ta promotion !", es:"¡Enhorabuena por tu ascenso!"},
    {fr:"Tu l'as tellement mérité.", es:"Te lo mereces muchísimo."},
    {fr:"Je suis fier de toi.", es:"Estoy orgulloso de ti."},
    {fr:"Tout ce travail a enfin payé.", es:"Todo ese trabajo por fin ha dado sus frutos."},
    {fr:"C'est une grande nouvelle !", es:"¡Es una gran noticia!"},
    {fr:"Tu as toujours cru en toi, et ça se voit.", es:"Siempre has creído en ti mismo, y se nota."},
    {fr:"On doit fêter ça !", es:"¡Tenemos que celebrarlo!"},
    {fr:"Je savais que tu réussirais.", es:"Sabía que lo conseguirías."},
    {fr:"Continue comme ça.", es:"Sigue así."},
    {fr:"Toutes mes félicitations.", es:"Mi más sincera enhorabuena."}
  ]},
  { title:"Parler de sujets d'actualité léger", phrases:[
    {fr:"Tu as suivi le match hier soir ?", es:"¿Viste el partido anoche?"},
    {fr:"Le film est sorti ce week-end.", es:"La película se estrenó este fin de semana."},
    {fr:"Tout le monde en parle en ce moment.", es:"Todo el mundo habla de eso ahora mismo."},
    {fr:"Je n'ai pas encore eu le temps de le voir.", es:"Todavía no he tenido tiempo de verla."},
    {fr:"Les critiques sont plutôt bonnes.", es:"Las críticas son bastante buenas."},
    {fr:"Qu'en penses-tu, toi ?", es:"¿Tú qué opinas?"},
    {fr:"Je reste assez neutre sur le sujet.", es:"Prefiero mantenerme neutral sobre el tema."},
    {fr:"Ça pourrait faire un bon sujet de conversation.", es:"Podría ser un buen tema de conversación."},
    {fr:"On en reparlera une fois que tu l'auras vu.", es:"Lo hablamos otra vez cuando la hayas visto."},
    {fr:"Passons à autre chose pour l'instant.", es:"Cambiemos de tema por ahora."}
  ]},
  { title:"Une conversation profonde entre amis", phrases:[
    {fr:"On ne se parle pas assez souvent comme ça, tu ne trouves pas ?", es:"No hablamos así de a menudo, ¿verdad?"},
    {fr:"Tu es quelqu'un d'important pour moi.", es:"Eres alguien importante para mí."},
    {fr:"On a beaucoup grandi tous les deux.", es:"Los dos hemos crecido mucho."},
    {fr:"La vie passe vite, non ?", es:"La vida pasa rápido, ¿no?"},
    {fr:"J'apprécie chaque moment passé avec toi.", es:"Valoro cada momento que paso contigo."},
    {fr:"Tu es fier de ce chemin parcouru, non ?", es:"Estás orgulloso del camino recorrido, ¿no?"},
    {fr:"On continuera cette aventure ensemble.", es:"Seguiremos esta aventura juntos."},
    {fr:"Merci d'avoir été là depuis le début.", es:"Gracias por estar ahí desde el principio."},
    {fr:"Les 600 phrases, on les a faites ensemble.", es:"Las 600 frases, las hemos hecho juntos."},
    {fr:"Félicitations, tu as terminé Mon Trajet en Espagnol !", es:"¡Enhorabuena, has terminado Mi Viaje en Español!"}
  ], tip:{
    title:"« ¿Verdad? » / « ¿No? »: el equivalente español de los « question tags »",
    example:"On ne se parle pas assez souvent comme ça, tu ne trouves pas ? — No hablamos así de a menudo, <b>¿verdad?</b>",
    body:"A diferencia del inglés, que cambia el « question tag » según el sujeto y el tiempo verbal (« isn't it? », « don't you? », « didn't she? »...), el español usa siempre la misma expresión invariable al final de la frase: « ¿verdad? » o « ¿no? ». Mucho más simple de aprender que en inglés."
  }}
];


const LEVEL1_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"Un road trip en Espagne pour démarrer, puis les phrases du quotidien.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Aéroport, hôtel, transports : de quoi se débrouiller partout.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Parler de soi, faire connaissance, échanger avec aisance.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module3Lessons
  }
];
const LEVEL1_FREE_LESSONS = { 1: 10, 2: 0, 3: 0 }; // seul le module 1 a des leçons gratuites

/* ============================================================
   NIVEAU 2
   ============================================================ */

const level2Module1Lessons = [
  { title:"Une matinée bien remplie", phrases:[
    {fr:"Je me suis réveillé plus tôt que d'habitude ce matin.", es:"Me he despertado más temprano de lo habitual esta mañana."},
    {fr:"J'ai pris un café rapide avant de partir.", es:"Me he tomado un café rápido antes de salir."},
    {fr:"Le bus était bondé, comme souvent le lundi.", es:"El autobús iba abarrotado, como suele pasar los lunes."},
    {fr:"J'ai failli rater ma correspondance.", es:"Por poco pierdo el transbordo."},
    {fr:"Heureusement, je suis arrivé à l'heure.", es:"Por suerte, he llegado puntual."},
    {fr:"La journée commence plutôt bien, finalement.", es:"Al final, el día empieza bastante bien."},
    {fr:"J'ai encore beaucoup de choses à faire avant midi.", es:"Todavía tengo muchas cosas que hacer antes del mediodía."},
    {fr:"Je vais essayer de tout finir à temps.", es:"Voy a intentar terminarlo todo a tiempo."},
    {fr:"Une matinée chargée, mais ça va.", es:"Una mañana ajetreada, pero bien."},
    {fr:"On verra comment se passe le reste de la journée.", es:"Ya veremos cómo va el resto del día."}
  ]},
  { title:"Prendre des nouvelles", phrases:[
    {fr:"Ça fait longtemps qu'on ne s'est pas parlé.", es:"Hace mucho que no hablamos."},
    {fr:"Comment vont les choses de ton côté ?", es:"¿Cómo van las cosas por tu lado?"},
    {fr:"Je pensais justement à toi récemment.", es:"Precisamente pensaba en ti hace poco."},
    {fr:"Avant, on se voyait beaucoup plus souvent.", es:"Antes nos veíamos mucho más a menudo."},
    {fr:"La vie est devenue tellement occupée.", es:"La vida se ha vuelto tan ajetreada."},
    {fr:"Il faudrait qu'on se retrouve un de ces jours.", es:"Deberíamos quedar uno de estos días."},
    {fr:"Je suis curieux de savoir ce que tu deviens.", es:"Tengo curiosidad por saber qué es de tu vida."},
    {fr:"Raconte-moi ce qui a changé depuis la dernière fois.", es:"Cuéntame qué ha cambiado desde la última vez."},
    {fr:"Ça me ferait vraiment plaisir de te revoir.", es:"Me haría mucha ilusión volver a verte."},
    {fr:"On se rappelle très vite, promis.", es:"Nos llamamos muy pronto, prometido."}
  ]},
  { title:"Organiser son emploi du temps", phrases:[
    {fr:"Je suis en train de revoir mon planning pour la semaine.", es:"Estoy revisando mi agenda de la semana."},
    {fr:"Je retrouve un ami samedi après-midi.", es:"Quedo con un amigo el sábado por la tarde."},
    {fr:"Ma sœur vient dîner mercredi soir.", es:"Mi hermana viene a cenar el miércoles por la noche."},
    {fr:"J'ai un rendez-vous important jeudi matin.", es:"Tengo una cita importante el jueves por la mañana."},
    {fr:"On part en week-end vendredi prochain.", es:"Nos vamos de fin de semana el próximo viernes."},
    {fr:"Il faut que je réorganise deux ou trois choses.", es:"Tengo que reorganizar un par de cosas."},
    {fr:"Ce mois-ci va être particulièrement chargé.", es:"Este mes va a ser especialmente ajetreado."},
    {fr:"Je préfère tout planifier à l'avance.", es:"Prefiero planificarlo todo con antelación."},
    {fr:"Comme ça, je ne suis jamais pris au dépourvu.", es:"Así nunca me pilla desprevenido."},
    {fr:"Voilà, mon emploi du temps est enfin prêt.", es:"Listo, mi horario ya está hecho."}
  ], tip:{
    title:"El presente para hablar de planes ya decididos",
    example:"Ma sœur vient dîner mercredi soir. — Mi hermana <b>viene</b> a cenar el miércoles.",
    body:"Al igual que en francés, el español usa a menudo el presente de indicativo para hablar de planes futuros ya decididos, sobre todo si hay una fecha u hora precisa: « viene el miércoles », « salimos a las ocho ». Suena más natural que el futuro simple en estos casos."
  }},
  { title:"Un imprévu au travail", phrases:[
    {fr:"Un problème est apparu juste avant la réunion.", es:"Surgió un problema justo antes de la reunión."},
    {fr:"Personne ne s'y attendait vraiment.", es:"Nadie se lo esperaba realmente."},
    {fr:"Il a fallu trouver une solution rapidement.", es:"Hubo que encontrar una solución rápidamente."},
    {fr:"Mon collègue m'a beaucoup aidé sur ce coup-là.", es:"Mi compañero me ayudó mucho con eso."},
    {fr:"On a réussi à régler ça avant la fin de la journée.", es:"Conseguimos solucionarlo antes de que acabara el día."},
    {fr:"Ce genre de situation arrive plus souvent qu'on ne le pense.", es:"Este tipo de situaciones pasa más a menudo de lo que pensamos."},
    {fr:"Ça demande de rester calme et de bien réfléchir.", es:"Requiere mantener la calma y pensar bien."},
    {fr:"Au final, on a même appris quelque chose.", es:"Al final, hasta hemos aprendido algo."},
    {fr:"La journée n'a pas été de tout repos.", es:"El día no ha sido nada tranquilo."},
    {fr:"Mais on s'en est bien sortis.", es:"Pero lo hemos resuelto bien."}
  ]},
  { title:"Cuisiner un repas ensemble", phrases:[
    {fr:"On a décidé de préparer le dîner ensemble ce soir.", es:"Hemos decidido preparar la cena juntos esta noche."},
    {fr:"Il manque un ou deux ingrédients dans le frigo.", es:"Faltan uno o dos ingredientes en la nevera."},
    {fr:"Pendant que tu coupes les légumes, je m'occupe de la sauce.", es:"Mientras cortas las verduras, yo me encargo de la salsa."},
    {fr:"Ça sent déjà très bon.", es:"Ya huele muy bien."},
    {fr:"Attention, ça risque de brûler si on ne surveille pas.", es:"Cuidado, se puede quemar si no lo vigilamos."},
    {fr:"Goûte pour voir si ça manque de sel.", es:"Prueba a ver si le falta sal."},
    {fr:"On devrait laisser mijoter encore un peu.", es:"Deberíamos dejarlo cocer a fuego lento un poco más."},
    {fr:"La table est mise, on peut passer à table.", es:"La mesa está puesta, podemos sentarnos a comer."},
    {fr:"C'est encore meilleur quand on cuisine à deux.", es:"Está aún mejor cuando se cocina entre dos."},
    {fr:"On recommence la semaine prochaine ?", es:"¿Repetimos la semana que viene?"}
  ]},
  { title:"Petits soucis techniques", phrases:[
    {fr:"Mon ordinateur a planté juste avant que je sauvegarde.", es:"Mi ordenador se bloqueó justo antes de que guardara."},
    {fr:"Je dois absolument le réparer avant demain.", es:"Tengo que repararlo antes de mañana sin falta."},
    {fr:"Il faut que je réinstalle le logiciel depuis le début.", es:"Tengo que reinstalar el programa desde cero."},
    {fr:"Tu dois redémarrer l'appareil pour que ça fonctionne.", es:"Tienes que reiniciar el aparato para que funcione."},
    {fr:"On ne doit jamais oublier de faire des sauvegardes régulières.", es:"Nunca hay que olvidarse de hacer copias de seguridad con regularidad."},
    {fr:"J'ai dû appeler le support technique.", es:"He tenido que llamar al soporte técnico."},
    {fr:"Ils m'ont dit que je devais mettre à jour le système.", es:"Me han dicho que tenía que actualizar el sistema."},
    {fr:"Heureusement, je n'ai pas dû tout recommencer.", es:"Por suerte, no he tenido que empezar de cero."},
    {fr:"Ces pépins techniques me font perdre un temps fou.", es:"Estos problemas técnicos me hacen perder muchísimo tiempo."},
    {fr:"La prochaine fois, je ferai plus attention.", es:"La próxima vez tendré más cuidado."}
  ], tip:{
    title:"La obligación: « tener que » y « deber »",
    example:"Je dois absolument le réparer avant demain. — <b>Tengo que</b> repararlo antes de mañana sin falta.",
    body:"« Tener que + infinitivo » expresa una obligación práctica o necesaria («tengo que repararlo»), mientras que « deber + infinitivo » expresa más bien un deber moral o una recomendación fuerte («debes cuidarte»). En el habla cotidiana, « tener que » es la forma más usada."
  }},
  { title:"Sortir en ville le soir", phrases:[
    {fr:"Ça te dit d'aller boire un verre après le travail ?", es:"¿Te apetece ir a tomar algo después del trabajo?"},
    {fr:"Il y a un nouveau bar qui vient d'ouvrir près d'ici.", es:"Hay un bar nuevo que acaba de abrir cerca de aquí."},
    {fr:"L'ambiance a l'air vraiment sympa.", es:"El ambiente tiene buena pinta."},
    {fr:"On pourrait aussi aller au cinéma à la place.", es:"También podríamos ir al cine en su lugar."},
    {fr:"Je n'ai pas vraiment de préférence, ça me va.", es:"No tengo preferencia, me vale cualquier cosa."},
    {fr:"Il faudrait réserver une table avant d'y aller.", es:"Habría que reservar mesa antes de ir."},
    {fr:"On se retrouve directement là-bas vers vingt heures ?", es:"¿Quedamos directamente allí sobre las ocho?"},
    {fr:"Prends un pull, il risque de faire frais plus tard.", es:"Coge un jersey, puede que refresque más tarde."},
    {fr:"J'ai hâte de voir tout le monde ce soir.", es:"Tengo ganas de ver a todo el mundo esta noche."},
    {fr:"Ça va être une bonne soirée.", es:"Va a ser una buena noche."}
  ]},
  { title:"Prendre soin de sa maison", phrases:[
    {fr:"Le week-end, je m'occupe souvent du ménage.", es:"Los fines de semana suelo encargarme de la limpieza."},
    {fr:"Il faudrait vraiment ranger le garage un jour.", es:"Habría que ordenar el garaje de una vez."},
    {fr:"J'ai repeint la chambre le mois dernier.", es:"Pinté la habitación el mes pasado."},
    {fr:"Le jardin a besoin d'être un peu entretenu.", es:"El jardín necesita un poco de mantenimiento."},
    {fr:"On devrait changer cette ampoule qui grille tout le temps.", es:"Deberíamos cambiar esa bombilla que se funde todo el rato."},
    {fr:"Prendre soin de sa maison demande du temps.", es:"Cuidar la casa lleva tiempo."},
    {fr:"Mais ça fait plaisir de voir le résultat.", es:"Pero da gusto ver el resultado."},
    {fr:"Chaque pièce a enfin sa place.", es:"Por fin cada cosa tiene su sitio."},
    {fr:"La maison est beaucoup plus agréable comme ça.", es:"La casa es mucho más agradable así."},
    {fr:"Encore quelques travaux et ce sera parfait.", es:"Con unos cuantos arreglos más quedará perfecta."}
  ]},
  { title:"Un souvenir d'enfance", phrases:[
    {fr:"Quand j'étais petit, j'habitais près de la mer.", es:"Cuando era pequeño, vivía cerca del mar."},
    {fr:"On allait à la plage presque tous les étés.", es:"Íbamos a la playa casi todos los veranos."},
    {fr:"Mes grands-parents nous racontaient toujours des histoires.", es:"Mis abuelos siempre nos contaban historias."},
    {fr:"Je jouais dehors du matin jusqu'au soir.", es:"Jugaba fuera de la mañana a la noche."},
    {fr:"Les journées me semblaient beaucoup plus longues à l'époque.", es:"Los días me parecían mucho más largos entonces."},
    {fr:"On n'avait pas de téléphone, et ça ne nous manquait pas.", es:"No teníamos teléfono, y no lo echábamos de menos."},
    {fr:"Ces souvenirs restent parmi mes préférés.", es:"Esos recuerdos siguen siendo de mis favoritos."},
    {fr:"Le temps passe vraiment très vite.", es:"El tiempo pasa de verdad muy rápido."},
    {fr:"Parfois, j'aimerais retrouver cette simplicité.", es:"A veces me gustaría recuperar esa sencillez."},
    {fr:"Mais je garde tout ça précieusement en mémoire.", es:"Pero guardo todo eso con mucho cariño en la memoria."}
  ], tip:{
    title:"El imperfecto para hablar de hábitos pasados",
    example:"On allait à la plage presque tous les étés. — <b>Íbamos</b> a la playa casi todos los veranos.",
    body:"Para describir una acción habitual o repetida en el pasado (lo que en inglés se expresa con « used to »), el español usa el pretérito imperfecto: « íbamos », « jugaba », « vivíamos ». Es uno de los tiempos más importantes para contar recuerdos de infancia."
  }},
  { title:"Bilan de la semaine, niveau 2", phrases:[
    {fr:"Cette semaine est passée à toute vitesse.", es:"Esta semana ha pasado volando."},
    {fr:"J'ai réussi à accomplir presque tout ce que je voulais.", es:"He conseguido hacer casi todo lo que quería."},
    {fr:"Certains jours ont été plus difficiles que d'autres.", es:"Algunos días han sido más difíciles que otros."},
    {fr:"Mais dans l'ensemble, je suis plutôt satisfait.", es:"Pero en general estoy bastante satisfecho."},
    {fr:"J'ai appris à mieux organiser mon temps.", es:"He aprendido a organizar mejor mi tiempo."},
    {fr:"Il reste encore quelques petites choses à régler.", es:"Todavía quedan un par de cosillas por resolver."},
    {fr:"Le week-end arrive à point nommé.", es:"El fin de semana llega en el momento justo."},
    {fr:"J'ai hâte de me reposer un peu.", es:"Tengo ganas de descansar un poco."},
    {fr:"Bravo, tu as terminé les dix premières leçons du niveau 2 !", es:"¡Enhorabuena, has terminado las diez primeras lecciones del nivel 2!"},
    {fr:"La suite t'attend dans la version complète.", es:"El resto te espera en la versión completa."}
  ]},
  { title:"Faire connaissance avec un voisin", phrases:[
    {fr:"On a un nouveau voisin depuis la semaine dernière.", es:"Tenemos un vecino nuevo desde la semana pasada."},
    {fr:"Il a l'air plutôt sympathique, au premier abord.", es:"Parece bastante simpático, a primera vista."},
    {fr:"Je suis allé me présenter hier soir.", es:"Fui a presentarme anoche."},
    {fr:"Il vient de s'installer dans le quartier.", es:"Acaba de instalarse en el barrio."},
    {fr:"On a discuté un bon moment sur le pas de la porte.", es:"Estuvimos charlando un buen rato en la puerta."},
    {fr:"Il travaille dans le même domaine que moi, apparemment.", es:"Por lo visto, trabaja en el mismo sector que yo."},
    {fr:"On s'est dit qu'on pourrait prendre un café un de ces jours.", es:"Quedamos en tomar un café uno de estos días."},
    {fr:"C'est toujours agréable de bien s'entendre avec ses voisins.", es:"Siempre es agradable llevarse bien con los vecinos."},
    {fr:"Le quartier me semble encore plus chaleureux qu'avant.", es:"El barrio me parece aún más acogedor que antes."},
    {fr:"J'espère qu'on deviendra bons amis.", es:"Espero que lleguemos a ser buenos amigos."}
  ]},
  { title:"Résoudre un désaccord", phrases:[
    {fr:"On n'était pas d'accord sur la façon de faire.", es:"No estábamos de acuerdo en cómo hacerlo."},
    {fr:"Le ton est un peu monté au début.", es:"Al principio se nos subió un poco el tono."},
    {fr:"Mais on a réussi à se calmer assez vite.", es:"Pero conseguimos calmarnos bastante rápido."},
    {fr:"Chacun a expliqué son point de vue calmement.", es:"Cada uno explicó su punto de vista con calma."},
    {fr:"Finalement, on a trouvé un compromis.", es:"Al final llegamos a un acuerdo."},
    {fr:"Ce n'était pas si grave, avec le recul.", es:"Visto con perspectiva, no era tan grave."},
    {fr:"Il vaut mieux en parler plutôt que d'ignorer le problème.", es:"Es mejor hablarlo que ignorar el problema."},
    {fr:"On en ressort même plus proches, je trouve.", es:"Creo que hasta hemos salido más unidos."},
    {fr:"Les désaccords font partie de toute relation.", es:"Los desacuerdos forman parte de cualquier relación."},
    {fr:"L'important, c'est de savoir se réconcilier.", es:"Lo importante es saber reconciliarse."}
  ]},
  { title:"Organiser une sortie entre amis", phrases:[
    {fr:"On essaie d'organiser quelque chose pour tout le groupe.", es:"Estamos intentando organizar algo para todo el grupo."},
    {fr:"Ce n'est pas facile de trouver une date qui convient à tous.", es:"No es fácil encontrar una fecha que le venga bien a todos."},
    {fr:"Certains préfèrent un dîner tranquille, d'autres une soirée dansante.", es:"Unos prefieren una cena tranquila, otros una noche de baile."},
    {fr:"On pourrait faire les deux, en fait.", es:"En realidad, podríamos hacer las dos cosas."},
    {fr:"Je m'occupe de réserver le restaurant.", es:"Yo me encargo de reservar el restaurante."},
    {fr:"Peux-tu prévenir les autres pour l'heure ?", es:"¿Puedes avisar a los demás de la hora?"},
    {fr:"Ce serait bien si tout le monde pouvait venir.", es:"Estaría bien que pudiera venir todo el mundo."},
    {fr:"On ne se retrouve pas assez souvent tous ensemble.", es:"No quedamos lo bastante a menudo todos juntos."},
    {fr:"Ça promet d'être une belle soirée.", es:"Promete ser una noche estupenda."},
    {fr:"J'ai hâte d'y être.", es:"Tengo muchas ganas de que llegue."}
  ]},
  { title:"S'occuper d'un animal de compagnie", phrases:[
    {fr:"On a adopté un chien il y a environ un mois.", es:"Adoptamos un perro hace casi un mes."},
    {fr:"Il faut le sortir au moins deux fois par jour.", es:"Hay que sacarlo al menos dos veces al día."},
    {fr:"Il a déjà appris quelques ordres de base.", es:"Ya ha aprendido algunas órdenes básicas."},
    {fr:"Il adore jouer dans le jardin pendant des heures.", es:"Le encanta jugar en el jardín durante horas."},
    {fr:"Parfois, il fait des bêtises quand on n'est pas là.", es:"A veces hace travesuras cuando no estamos."},
    {fr:"Mais on ne peut vraiment pas lui en vouloir.", es:"Pero la verdad es que no se le puede culpar."},
    {fr:"Prendre soin d'un animal demande beaucoup de patience.", es:"Cuidar de un animal requiere mucha paciencia."},
    {fr:"Ça change complètement notre routine du quotidien.", es:"Cambia completamente nuestra rutina diaria."},
    {fr:"Mais on ne pourrait plus s'en passer maintenant.", es:"Pero ahora ya no podríamos vivir sin él."},
    {fr:"Il fait vraiment partie de la famille.", es:"Es realmente parte de la familia."}
  ]},
  { title:"Réparer quelque chose soi-même", phrases:[
    {fr:"Le robinet fuit depuis quelques jours déjà.", es:"El grifo lleva unos días goteando."},
    {fr:"J'ai regardé quelques tutoriels avant de m'y mettre.", es:"Vi algunos tutoriales antes de ponerme con ello."},
    {fr:"C'est la réparation la plus simple que j'aie jamais faite.", es:"Es la reparación más sencilla que he hecho nunca."},
    {fr:"Cet outil-là est de loin le plus utile de la boîte.", es:"Esa herramienta es, de lejos, la más útil de la caja."},
    {fr:"C'était plus rapide que ce que je pensais.", es:"Fue más rápido de lo que pensaba."},
    {fr:"Le pire moment, c'était de trouver la bonne pièce.", es:"Lo peor fue encontrar la pieza adecuada."},
    {fr:"Au final, tout fonctionne parfaitement.", es:"Al final, todo funciona perfectamente."},
    {fr:"C'est la satisfaction la plus grande de faire les choses soi-même.", es:"Es la mayor satisfacción hacer las cosas uno mismo."},
    {fr:"Je me sens vraiment fier du résultat.", es:"Me siento realmente orgulloso del resultado."},
    {fr:"La prochaine réparation ne me fait plus du tout peur.", es:"La próxima reparación ya no me da ningún miedo."}
  ], tip:{
    title:"El superlativo: « el/la más... de »",
    example:"C'est la réparation la plus simple que j'aie jamais faite. — Es la reparación <b>más sencilla</b> que he hecho nunca.",
    body:"El superlativo español se forma con « el/la (+ sustantivo) + más/menos + adjetivo »: « el más fácil », « la más cara », « los más rápidos ». No existe una terminación especial como el « -est » inglés: siempre se usa « más » o « menos »."
  }},
  { title:"Gérer les tâches ménagères", phrases:[
    {fr:"On se partage les tâches ménagères depuis peu.", es:"Desde hace poco nos repartimos las tareas de la casa."},
    {fr:"Chacun a sa liste pour la semaine.", es:"Cada uno tiene su lista para la semana."},
    {fr:"Ça évite pas mal de discussions inutiles.", es:"Así evitamos bastantes discusiones innecesarias."},
    {fr:"La vaisselle, c'est plutôt mon rayon.", es:"Lo de fregar los platos es más cosa mía."},
    {fr:"Lui, il préfère s'occuper du linge.", es:"Él prefiere encargarse de la ropa."},
    {fr:"On essaie de rester justes l'un envers l'autre.", es:"Intentamos ser justos el uno con el otro."},
    {fr:"Ce n'est pas toujours équilibré, mais on s'ajuste.", es:"No siempre está equilibrado, pero nos vamos ajustando."},
    {fr:"Une maison bien organisée, c'est quand même plus agréable.", es:"Una casa bien organizada es mucho más agradable, la verdad."},
    {fr:"Ça demande un peu de communication au début.", es:"Al principio requiere un poco de comunicación."},
    {fr:"Mais au final, tout le monde y trouve son compte.", es:"Pero al final, todos salen ganando."}
  ]},
  { title:"Discuter de projets pour le week-end", phrases:[
    {fr:"Qu'est-ce que tu comptes faire ce week-end ?", es:"¿Qué piensas hacer este fin de semana?"},
    {fr:"Je n'ai encore rien décidé de précis.", es:"Todavía no he decidido nada en concreto."},
    {fr:"On pourrait faire une randonnée si le temps le permet.", es:"Podríamos hacer una excursión si el tiempo lo permite."},
    {fr:"Sinon, on reste tranquillement à la maison.", es:"Si no, nos quedamos tranquilamente en casa."},
    {fr:"J'aimerais bien essayer ce nouveau restaurant dont tout le monde parle.", es:"Me gustaría probar ese restaurante nuevo del que todo el mundo habla."},
    {fr:"On pourrait combiner les deux, en fait.", es:"En realidad, podríamos combinar las dos cosas."},
    {fr:"Il faudrait vérifier la météo avant de se décider.", es:"Habría que mirar el tiempo antes de decidirnos."},
    {fr:"Un week-end sans plan, ça a aussi son charme.", es:"Un fin de semana sin planes también tiene su encanto."},
    {fr:"On improvisera selon l'humeur du moment.", es:"Improvisaremos según el humor del momento."},
    {fr:"En tout cas, ça va faire du bien de se reposer.", es:"En cualquier caso, vendrá bien descansar."}
  ]},
  { title:"Faire du bénévolat", phrases:[
    {fr:"Je me suis inscrit comme bénévole dans une association locale.", es:"Me he apuntado como voluntario en una asociación local."},
    {fr:"On aide surtout des familles dans le besoin.", es:"Ayudamos sobre todo a familias necesitadas."},
    {fr:"Je donne un peu de mon temps chaque semaine.", es:"Dedico un poco de mi tiempo cada semana."},
    {fr:"Ça me fait sortir de mon quotidien habituel.", es:"Me saca de mi rutina habitual."},
    {fr:"J'ai rencontré des gens formidables grâce à ça.", es:"He conocido a gente estupenda gracias a esto."},
    {fr:"Ce n'est pas toujours facile, mais c'est très gratifiant.", es:"No siempre es fácil, pero es muy gratificante."},
    {fr:"On se sent utile, et ça compte énormément.", es:"Te sientes útil, y eso cuenta muchísimo."},
    {fr:"Je recommande vraiment cette expérience à tout le monde.", es:"Recomiendo de verdad esta experiencia a todo el mundo."},
    {fr:"Ça change complètement la manière de voir les choses.", es:"Cambia por completo la forma de ver las cosas."},
    {fr:"Je continuerai tant que je le pourrai.", es:"Seguiré mientras pueda."}
  ]},
  { title:"Parler de ses habitudes de santé", phrases:[
    {fr:"J'essaie de manger plus équilibré depuis quelque temps.", es:"Desde hace un tiempo intento comer de forma más equilibrada."},
    {fr:"Je bois beaucoup plus d'eau qu'avant.", es:"Bebo mucha más agua que antes."},
    {fr:"Je marche presque tous les jours, même un peu.", es:"Camino casi todos los días, aunque sea un poco."},
    {fr:"Le sommeil, c'est ce qui me manque le plus en ce moment.", es:"El sueño es lo que más me falta ahora mismo."},
    {fr:"Je me couche un peu trop tard, je le sais.", es:"Me acuesto un poco demasiado tarde, lo sé."},
    {fr:"J'essaie de réduire le sucre petit à petit.", es:"Intento reducir el azúcar poco a poco."},
    {fr:"Ce n'est pas toujours évident de tenir de bonnes habitudes.", es:"No siempre es fácil mantener buenos hábitos."},
    {fr:"Mais chaque petit progrès compte.", es:"Pero cada pequeño avance cuenta."},
    {fr:"Je me sens déjà un peu mieux qu'avant.", es:"Ya me siento un poco mejor que antes."},
    {fr:"L'objectif, c'est la régularité, pas la perfection.", es:"El objetivo es la constancia, no la perfección."}
  ]},
  { title:"Bilan complet du niveau 2 - module 1", phrases:[
    {fr:"On a couvert énormément de situations du quotidien.", es:"Hemos cubierto muchísimas situaciones del día a día."},
    {fr:"Le vocabulaire que tu as appris est déjà beaucoup plus riche.", es:"El vocabulario que has aprendido ya es mucho más rico."},
    {fr:"Les phrases que tu formules sonnent de plus en plus naturelles.", es:"Las frases que formas suenan cada vez más naturales."},
    {fr:"C'est exactement le genre de progrès qui compte vraiment.", es:"Es exactamente el tipo de progreso que de verdad importa."},
    {fr:"La personne qui pratique régulièrement progresse toujours plus vite.", es:"La persona que practica con regularidad siempre progresa más rápido."},
    {fr:"Les efforts que tu as fournis commencent à porter leurs fruits.", es:"Los esfuerzos que has hecho empiezan a dar sus frutos."},
    {fr:"Il reste encore deux modules passionnants à découvrir.", es:"Todavía quedan dos módulos apasionantes por descubrir."},
    {fr:"Continue sur cette lancée, tu es sur la bonne voie.", es:"Sigue así, vas por buen camino."},
    {fr:"Le module qui t'attend ensuite parle des voyages.", es:"El módulo que te espera a continuación trata sobre los viajes."},
    {fr:"Bravo, tu as terminé le module « Le quotidien » du niveau 2 !", es:"¡Enhorabuena, has terminado el módulo «El día a día» del nivel 2!"}
  ], tip:{
    title:"El pronombre relativo « que »: una sola palabra para todo",
    example:"Les efforts que tu as fournis commencent à porter leurs fruits. — Los esfuerzos <b>que</b> has hecho empiezan a dar sus frutos.",
    body:"A diferencia del inglés, que distingue « who » (personas), « which » (cosas) y « that » (ambos), el español usa casi siempre la misma palabra invariable « que » para personas y cosas: « la persona que conocí », « el libro que leí ». Mucho más simple que en inglés."
  }}
];

const level2Module2Lessons = [
 { title:"Préparer un road trip", phrases:[
    {fr:"On était en train de planifier l'itinéraire quand tu as appelé.", es:"Estábamos planificando el itinerario hacia Málaga cuando llamaste."},
    {fr:"Je préparais la voiture pendant que tu faisais les valises.", es:"Yo preparaba el coche mientras tú hacías las maletas."},
    {fr:"Il pleuvait quand on a quitté la maison.", es:"Llovía cuando salimos de casa."},
    {fr:"On roulait depuis deux heures quand on s'est arrêtés pour manger.", es:"Llevábamos dos horas conduciendo cuando paramos para comer."},
    {fr:"Le soleil se couchait pendant qu'on cherchait un endroit où dormir.", es:"El sol se ponía mientras buscábamos un sitio donde dormir."},
    {fr:"On écoutait de la musique tout le long du trajet.", es:"Escuchábamos música durante todo el trayecto."},
    {fr:"Je conduisais pendant que tu regardais la carte.", es:"Yo conducía mientras tú mirabas el mapa."},
    {fr:"Il faisait déjà nuit quand on est arrivés.", es:"Ya era de noche cuando llegamos."},
    {fr:"On ne s'attendait pas à autant de circulation.", es:"No esperábamos tanto tráfico."},
    {fr:"Malgré tout, le voyage a bien commencé.", es:"A pesar de todo, el viaje empezó bien."}
  ], tip:{
    title:"El pasado continuo: «estar» (imperfecto) + gerundio",
    example:"Llevábamos dos horas conduciendo cuando paramos. — <b>Llevábamos</b> dos horas <b>conduciendo</b> cuando paramos.",
    body:"Para describir una acción en curso en el pasado, a menudo interrumpida por otra, el español usa «estaba/estábamos + gerundio» («Estábamos planificando el itinerario») o la construcción «llevar + gerundio» para insistir en la duración. A diferencia del francés, el gerundio español termina en «-ando» o «-iendo»: «planificando», «conduciendo», «buscando»."
  }},
 { title:"Camper en pleine nature", phrases:[
    {fr:"On a monté la tente juste avant la tombée de la nuit.", es:"Montamos la tienda justo antes de que cayera la noche."},
    {fr:"S'il fait beau demain, on ira se baigner dans le lac.", es:"Si hace buen tiempo mañana, iremos a bañarnos al lago."},
    {fr:"Si le feu ne prend pas, on mangera froid.", es:"Si el fuego no prende, comeremos algo frío."},
    {fr:"On entendait les bruits de la forêt toute la nuit.", es:"Oíamos los ruidos del bosque toda la noche."},
    {fr:"Si tu as froid, prends mon sac de couchage en plus.", es:"Si tienes frío, coge también mi saco de dormir."},
    {fr:"On dormira à la belle étoile s'il ne pleut pas.", es:"Dormiremos al aire libre si no llueve."},
    {fr:"Le camping le plus proche est à une heure de marche.", es:"El camping más cercano está a una hora caminando."},
    {fr:"Si on part tôt, on évitera la chaleur.", es:"Si salimos temprano, evitaremos el calor."},
    {fr:"On a vu des étoiles comme jamais en ville.", es:"Vimos estrellas como nunca en la ciudad."},
    {fr:"C'était simple, mais vraiment mémorable.", es:"Fue sencillo, pero realmente memorable."}
  ], tip:{
    title:"La condicional real: «si» + presente, futuro",
    example:"Si hace buen tiempo mañana, iremos a bañarnos. — <b>Si</b> hace buen tiempo, <b>iremos</b>.",
    body:"Para hablar de una consecuencia probable en el futuro, el español usa «si» seguido del presente de indicativo, y el futuro (o un imperativo) en la segunda parte: «Si llueve, nos quedaremos en casa». A diferencia de otras lenguas, nunca se usa el futuro justo después de «si»."
  }},
 { title:"Un vol retardé", phrases:[
    {fr:"Pourriez-vous me dire pourquoi le vol est retardé ?", es:"¿Podría decirme por qué el vuelo a Palma de Mallorca está retrasado?"},
    {fr:"Je pourrais manquer ma correspondance à cause de ça.", es:"Podría perder mi conexión por culpa de esto."},
    {fr:"Pourrais-je avoir des nouvelles sur l'écran d'affichage ?", es:"¿Podría tener información en la pantalla de salidas?"},
    {fr:"On pourrait nous proposer un vol de remplacement.", es:"Podrían ofrecernos un vuelo alternativo."},
    {fr:"Je ne pouvais pas y croire quand j'ai vu l'annonce.", es:"No podía creérmelo cuando vi el anuncio."},
    {fr:"Pourriez-vous vérifier s'il y a un autre vol ce soir ?", es:"¿Podría comprobar si hay otro vuelo esta noche?"},
    {fr:"On pouvait au moins se détendre dans la salle d'attente.", es:"Al menos podíamos relajarnos en la sala de espera."},
    {fr:"Je pourrais essayer de réserver un hôtel, au cas où.", es:"Podría intentar reservar un hotel, por si acaso."},
    {fr:"Pourriez-vous m'indiquer où se trouve le comptoir d'information ?", es:"¿Podría indicarme dónde está el mostrador de información?"},
    {fr:"Finalement, on a pu embarquer deux heures plus tard.", es:"Al final, pudimos embarcar dos horas después."}
  ], tip:{
    title:"«Podría» para pedir algo con cortesía",
    example:"¿Podría decirme por qué el vuelo está retrasado? — <b>¿Podría</b> decirme...?",
    body:"«Podría» (condicional de «poder») sirve para formular una petición educada, igual que «pourriez-vous» en francés. Es más cortés que «¿puede...?»: «¿Podría ayudarme?» suena más amable que «¿Puede ayudarme?», sin dejar de ser muy natural en el habla cotidiana."
  }},
 { title:"Petit marché local", phrases:[
    {fr:"Il y a trop de monde pour qu'on puisse bien regarder.", es:"Hay demasiada gente en el mercado de Málaga como para poder mirar bien."},
    {fr:"Ce stand a assez de fruits pour toute la semaine.", es:"Este puesto tiene suficiente fruta para toda la semana."},
    {fr:"Je n'ai pas assez d'argent liquide sur moi.", es:"No llevo suficiente dinero en efectivo."},
    {fr:"Il reste quelques places où s'asseoir pour manger.", es:"Quedan algunos sitios donde sentarse a comer."},
    {fr:"On a acheté un peu de fromage et de pain frais.", es:"Compramos un poco de queso y pan fresco."},
    {fr:"Ce panier est trop lourd pour que je le porte seul.", es:"Esta cesta es demasiado pesada para que la lleve yo solo."},
    {fr:"Il y a assez de choix pour satisfaire tout le monde.", es:"Hay suficiente variedad para contentar a todos."},
    {fr:"On n'a pas assez de temps pour tout visiter.", es:"No tenemos suficiente tiempo para verlo todo."},
    {fr:"Quelques vendeurs parlaient un peu anglais.", es:"Algunos vendedores hablaban un poco de inglés."},
    {fr:"C'était bruyant, coloré, et plein de vie.", es:"Era ruidoso, colorido y lleno de vida."}
  ], tip:{
    title:"«Demasiado» y «suficiente»",
    example:"Esta cesta es demasiado pesada para que la lleve yo solo. — <b>Demasiado</b> pesada.",
    body:"«Demasiado» (trop) se coloca antes del adjetivo: «demasiado pesado», «demasiado caro». «Suficiente» (assez) puede ir antes o después del nombre: «suficiente fruta», «fruta suficiente». Ambos se combinan a menudo con «para» + infinitivo o «para que» + subjuntivo cuando cambia el sujeto."
  }},
 { title:"S'orienter sans réseau", phrases:[
    {fr:"Je n'avais plus de batterie et donc plus de carte.", es:"Se me había acabado la batería y, por tanto, el mapa."},
    {fr:"On avait déjà demandé notre chemin deux fois avant de se perdre.", es:"Ya habíamos preguntado el camino dos veces antes de perdernos."},
    {fr:"J'avais téléchargé une carte hors ligne, heureusement.", es:"Por suerte, había descargado un mapa sin conexión."},
    {fr:"Quand on est arrivés, le soleil avait déjà disparu.", es:"Cuando llegamos, el sol ya había desaparecido."},
    {fr:"Personne n'avait prévu qu'on n'aurait pas de réseau ici.", es:"Nadie había previsto que no tendríamos cobertura aquí."},
    {fr:"On avait préparé un plan papier, juste au cas où.", es:"Habíamos preparado un plano en papel, por si acaso."},
    {fr:"J'avais oublié à quel point se perdre peut être stressant.", es:"Había olvidado lo estresante que puede ser perderse."},
    {fr:"Une fois qu'on avait retrouvé la route principale, tout allait mieux.", es:"Una vez que habíamos encontrado la carretera principal, todo iba mejor."},
    {fr:"On n'avait jamais eu autant besoin d'un habitant du coin.", es:"Nunca habíamos necesitado tanto a un vecino del lugar."},
    {fr:"Heureusement, quelqu'un nous avait indiqué un raccourci.", es:"Por suerte, alguien nos había indicado un atajo."}
  ]},
 { title:"Attendre un bus qui n'arrive jamais", phrases:[
    {fr:"Le bus aurait dû passer il y a vingt minutes.", es:"El autobús debería haber pasado hace veinte minutos."},
    {fr:"Personne d'autre n'attendait à l'arrêt, ce qui n'était pas bon signe.", es:"Nadie más esperaba en la parada, lo cual no era buena señal."},
    {fr:"On a fini par demander à un passant ce qu'il se passait.", es:"Al final le preguntamos a un transeúnte qué pasaba."},
    {fr:"Apparemment, il y avait une grève ce jour-là.", es:"Al parecer, ese día había huelga."},
    {fr:"On a décidé de marcher plutôt que d'attendre plus longtemps.", es:"Decidimos caminar en lugar de seguir esperando."},
    {fr:"Ce n'était pas si loin, finalement.", es:"Al final no estaba tan lejos."},
    {fr:"On a découvert plein de petites rues sympas en chemin.", es:"Descubrimos muchas callecitas bonitas por el camino."},
    {fr:"Parfois, les imprévus mènent aux meilleures découvertes.", es:"A veces, los imprevistos llevan a los mejores descubrimientos."},
    {fr:"On est arrivés un peu en retard, mais de bonne humeur.", es:"Llegamos un poco tarde, pero de buen humor."},
    {fr:"La prochaine fois, on vérifiera les horaires à l'avance.", es:"La próxima vez comprobaremos los horarios con antelación."}
  ]},
 { title:"Louer un vélo pour la journée", phrases:[
    {fr:"Est-ce que je peux louer un vélo pour la journée entière ?", es:"¿Puedo alquilar una bicicleta para todo el día en Barcelona?"},
    {fr:"Le casque est-il compris dans le prix ?", es:"¿El casco está incluido en el precio?"},
    {fr:"Il faut le rendre avant quelle heure ?", es:"¿Hay que devolverla antes de qué hora?"},
    {fr:"Les freins avant me semblent un peu faibles.", es:"Los frenos delanteros me parecen un poco flojos."},
    {fr:"Vous auriez un plan des pistes cyclables ?", es:"¿Tendría un plano de los carriles bici?"},
    {fr:"On a roulé le long de la rivière presque toute la matinée.", es:"Pedaleamos a lo largo del paseo marítimo casi toda la mañana."},
    {fr:"La selle était un peu trop haute au départ.", es:"El sillín estaba un poco demasiado alto al principio."},
    {fr:"C'est un excellent moyen de découvrir la ville autrement.", es:"Es una forma excelente de descubrir la ciudad de otra manera."},
    {fr:"On s'est arrêtés plusieurs fois pour prendre des photos.", es:"Paramos varias veces para hacer fotos."},
    {fr:"Mes jambes vont s'en souvenir demain.", es:"Mis piernas se van a acordar mañana."}
  ]},
 { title:"Décalage horaire", phrases:[
    {fr:"Je n'arrive pas à m'endormir avant minuit, ici.", es:"No consigo dormirme antes de medianoche aquí."},
    {fr:"Mon corps pense encore qu'il est l'heure du déjeuner.", es:"Mi cuerpo todavía cree que es la hora de comer."},
    {fr:"Il vaut mieux rester éveillé jusqu'au soir le premier jour.", es:"Es mejor mantenerse despierto hasta la noche el primer día."},
    {fr:"Je me sens complètement décalé depuis qu'on est arrivés.", es:"Me siento completamente desajustado desde que llegamos."},
    {fr:"Boire beaucoup d'eau aide à récupérer plus vite.", es:"Beber mucha agua ayuda a recuperarse más rápido."},
    {fr:"J'ai dormi douze heures d'affilée la première nuit.", es:"Dormí doce horas de un tirón la primera noche."},
    {fr:"Ça prend en général deux ou trois jours pour s'adapter.", es:"Normalmente se tarda dos o tres días en adaptarse."},
    {fr:"Le café ne m'a même pas réveillé ce matin.", es:"El café ni siquiera me ha despertado esta mañana."},
    {fr:"Je me suis réveillé à quatre heures du matin, en pleine forme.", es:"Me desperté a las cuatro de la madrugada, en plena forma."},
    {fr:"Ça devrait aller mieux d'ici la fin de la semaine.", es:"Debería ir mejor de aquí a final de semana."}
  ]},
 { title:"Discuter avec un habitant du coin", phrases:[
    {fr:"Il m'a dit que ce quartier était très calme le soir.", es:"Me dijo que ese barrio era muy tranquilo por la noche."},
    {fr:"Elle a expliqué qu'il fallait réserver plusieurs jours à l'avance.", es:"Explicó que había que reservar con varios días de antelación."},
    {fr:"Il a dit qu'il vivait ici depuis toujours.", es:"Dijo que vivía aquí de toda la vida."},
    {fr:"Elle nous a conseillé d'éviter le centre pendant le week-end.", es:"Nos aconsejó evitar el centro durante el fin de semana."},
    {fr:"Il a mentionné un petit restaurant que les touristes ne connaissent pas.", es:"Mencionó un pequeño restaurante que los turistas no conocen."},
    {fr:"Elle a dit que le marché fermait plus tôt le dimanche.", es:"Dijo que el mercado cerraba más temprano el domingo."},
    {fr:"Il nous a demandé d'où on venait.", es:"Nos preguntó de dónde veníamos."},
    {fr:"Elle a promis de nous envoyer la liste des bonnes adresses.", es:"Prometió enviarnos la lista de buenas direcciones."},
    {fr:"Il a dit que les gens d'ici étaient plutôt accueillants.", es:"Dijo que la gente de aquí era bastante acogedora."},
    {fr:"C'était une des meilleures conversations de notre voyage.", es:"Fue una de las mejores conversaciones de nuestro viaje."}
  ], tip:{
    title:"El estilo indirecto (discurso referido)",
    example:"Dijo que vivía aquí de toda la vida. — Dijo que <b>vivía</b> aquí.",
    body:"Para contar lo que alguien dijo, se usa «dijo que» o «me contó que», y el verbo suele retroceder un tiempo: el presente pasa a imperfecto, y el pretérito perfecto o indefinido pasa a pluscuamperfecto. «Vivo aquí» se convierte en «Dijo que vivía aquí»."
  }},
 { title:"Négocier un prix", phrases:[
    {fr:"C'est un peu cher, vous pourriez faire un geste ?", es:"Es un poco caro, ¿podría hacerme un descuento?"},
    {fr:"Si j'en prends deux, vous me faites une réduction ?", es:"Si me llevo dos, ¿me hace una rebaja?"},
    {fr:"C'est mon dernier prix, je ne peux pas descendre plus bas.", es:"Es mi último precio, no puedo bajar más."},
    {fr:"On s'est mis d'accord sur un prix raisonnable.", es:"Llegamos a un acuerdo sobre un precio razonable."},
    {fr:"Vous l'auriez en une autre couleur, par hasard ?", es:"¿Lo tendría en otro color, por casualidad?"},
    {fr:"Je vais réfléchir et repasser peut-être plus tard.", es:"Voy a pensarlo y quizá vuelva más tarde."},
    {fr:"C'est à peu près le même prix que dans l'autre boutique.", es:"Es más o menos el mismo precio que en la otra tienda."},
    {fr:"Marchander fait partie du jeu, ici.", es:"Regatear forma parte del juego, aquí."},
    {fr:"Au final, on a eu un très bon prix.", es:"Al final conseguimos un muy buen precio."},
    {fr:"Le vendeur avait l'air plutôt satisfait aussi.", es:"El vendedor también parecía bastante satisfecho."}
  ]},
 { title:"Petits problèmes de voiture", phrases:[
    {fr:"La voiture a fait un bruit bizarre sur l'autoroute.", es:"El coche hizo un ruido raro en la autopista."},
    {fr:"On s'est arrêtés sur le bas-côté pour vérifier.", es:"Paramos en el arcén para comprobarlo."},
    {fr:"Le pneu avant gauche était complètement à plat.", es:"La rueda delantera izquierda estaba completamente pinchada."},
    {fr:"Heureusement, il y avait une roue de secours dans le coffre.", es:"Por suerte, había una rueda de repuesto en el maletero."},
    {fr:"On a appelé l'assistance pour qu'elle vienne nous aider.", es:"Llamamos a la asistencia en carretera para que viniera a ayudarnos."},
    {fr:"Le mécanicien est arrivé plus vite que prévu.", es:"El mecánico llegó más rápido de lo previsto."},
    {fr:"Ça nous a fait perdre presque deux heures.", es:"Nos hizo perder casi dos horas."},
    {fr:"On a dû changer nos plans pour l'après-midi.", es:"Tuvimos que cambiar nuestros planes para la tarde."},
    {fr:"Au moins, on était bien assurés pour ce genre de situation.", es:"Por lo menos estábamos bien asegurados para este tipo de situación."},
    {fr:"Le reste du trajet s'est passé sans problème.", es:"El resto del trayecto fue sin problemas."}
  ]},
 { title:"Voyager avec un budget serré", phrases:[
    {fr:"On essaie de dépenser le moins possible sur ce voyage.", es:"Intentamos gastar lo mínimo posible en este viaje."},
    {fr:"L'auberge de jeunesse était la moins chère des environs.", es:"El albergue era el más barato de la zona."},
    {fr:"On cuisine nous-mêmes pour économiser sur les repas.", es:"Cocinamos nosotros mismos para ahorrar en las comidas."},
    {fr:"Les transports en commun reviennent bien moins cher qu'un taxi.", es:"El transporte público sale mucho más barato que un taxi."},
    {fr:"On a trouvé pas mal d'activités gratuites dans le coin.", es:"Encontramos bastantes actividades gratuitas por la zona."},
    {fr:"Ce marché propose les prix les plus bas de la ville.", es:"Este mercado tiene los precios más bajos de la ciudad."},
    {fr:"On essaie de ne pas trop craquer sur les souvenirs.", es:"Intentamos no gastar demasiado en recuerdos."},
    {fr:"Voyager hors saison coûte vraiment moins cher.", es:"Viajar fuera de temporada sale realmente más barato."},
    {fr:"C'est le petit-déjeuner le plus copieux qu'on ait eu jusqu'ici.", es:"Es el desayuno más abundante que hemos tenido hasta ahora."},
    {fr:"Un petit budget n'empêche pas de passer un excellent voyage.", es:"Un presupuesto pequeño no impide disfrutar de un viaje excelente."}
  ]},
 { title:"Visiter en dehors des sentiers battus", phrases:[
    {fr:"On voulait éviter les endroits trop touristiques.", es:"Queríamos evitar los sitios demasiado turísticos."},
    {fr:"Ce village n'est même pas indiqué sur la plupart des cartes.", es:"Este pueblo ni siquiera aparece en la mayoría de los mapas."},
    {fr:"On a dû demander notre chemin plusieurs fois pour le trouver.", es:"Tuvimos que preguntar el camino varias veces para encontrarlo."},
    {fr:"Il n'y avait presque personne quand on est arrivés.", es:"Casi no había nadie cuando llegamos."},
    {fr:"Les habitants nous regardaient avec curiosité.", es:"Los vecinos nos miraban con curiosidad."},
    {fr:"On a eu l'impression de découvrir un vrai secret.", es:"Tuvimos la sensación de descubrir un verdadero secreto."},
    {fr:"Ce genre d'endroit vaut vraiment le détour.", es:"Este tipo de lugar realmente vale la pena."},
    {fr:"On a pris notre temps, sans horaire précis.", es:"Nos tomamos nuestro tiempo, sin horario fijo."},
    {fr:"C'était exactement le genre d'aventure qu'on cherchait.", es:"Era exactamente el tipo de aventura que buscábamos."},
    {fr:"On en reparlera encore dans des années.", es:"Seguiremos hablando de esto dentro de años."}
  ]},
 { title:"Faire face à une urgence médicale mineure", phrases:[
    {fr:"Je me suis fait une petite entorse en marchant.", es:"Me hice un pequeño esguince al caminar."},
    {fr:"Y a-t-il une pharmacie ouverte près d'ici ?", es:"¿Hay alguna farmacia abierta cerca de aquí?"},
    {fr:"Je n'ai pas d'allergie connue, rassurez-vous.", es:"No tengo alergias conocidas, no se preocupe."},
    {fr:"On m'a conseillé de surélever ma cheville et de la glacer.", es:"Me aconsejaron elevar el tobillo y poner hielo."},
    {fr:"L'infirmière a été très rassurante.", es:"La enfermera fue muy tranquilizadora."},
    {fr:"Heureusement, mon assurance voyage couvre ce genre de frais.", es:"Por suerte, mi seguro de viaje cubre este tipo de gastos."},
    {fr:"Ce n'était rien de grave, juste un peu douloureux.", es:"No era nada grave, solo un poco doloroso."},
    {fr:"Je marche avec une canne en attendant que ça passe.", es:"Camino con un bastón mientras se me pasa."},
    {fr:"Ça ne va pas m'empêcher de profiter du reste du voyage.", es:"Esto no me va a impedir disfrutar del resto del viaje."},
    {fr:"Mieux vaut prévenir que guérir, la prochaine fois je ferai attention.", es:"Más vale prevenir que curar, la próxima vez tendré cuidado."}
  ]},
 { title:"Photographier ses voyages", phrases:[
    {fr:"La lumière était parfaite juste avant le coucher du soleil.", es:"La luz era perfecta justo antes de la puesta de sol."},
    {fr:"J'ai pris des centaines de photos depuis le début du voyage.", es:"He hecho cientos de fotos desde que empezó el viaje."},
    {fr:"Celle-ci est sans doute ma préférée jusqu'à présent.", es:"Esta es sin duda mi favorita hasta ahora."},
    {fr:"Je préfère photographier les gens plutôt que les monuments.", es:"Prefiero fotografiar a la gente antes que los monumentos."},
    {fr:"Mon appareil est tombé en panne de batterie au pire moment.", es:"A mi cámara se le acabó la batería en el peor momento."},
    {fr:"J'ai failli rater le meilleur coucher de soleil du voyage.", es:"Casi me pierdo la mejor puesta de sol del viaje."},
    {fr:"Certains endroits sont encore plus beaux en vrai qu'en photo.", es:"Algunos lugares son aún más bonitos en persona que en foto."},
    {fr:"Je trierai toutes ces photos une fois rentré.", es:"Ordenaré todas estas fotos una vez que vuelva."},
    {fr:"Ces souvenirs valent bien plus que n'importe quel souvenir acheté.", es:"Estos recuerdos valen mucho más que cualquier souvenir comprado."},
    {fr:"J'ai hâte de tout partager avec mes proches.", es:"Tengo muchas ganas de compartirlo todo con mis seres queridos."}
  ]},
 { title:"Rentrer plus tard que prévu", phrases:[
    {fr:"On a décidé de prolonger notre séjour de quelques jours.", es:"Decidimos alargar nuestra estancia unos días."},
    {fr:"Le voyage nous plaisait tellement qu'on ne voulait pas rentrer.", es:"El viaje nos gustaba tanto que no queríamos volver."},
    {fr:"On a dû changer notre billet de retour.", es:"Tuvimos que cambiar nuestro billete de vuelta."},
    {fr:"Ça a coûté un peu plus cher, mais ça valait le coup.", es:"Costó un poco más caro, pero mereció la pena."},
    {fr:"On a prévenu notre famille qu'on rentrerait plus tard.", es:"Avisamos a nuestra familia de que volveríamos más tarde."},
    {fr:"Il nous restait encore tellement de choses à voir.", es:"Todavía nos quedaban tantas cosas por ver."},
    {fr:"Le travail peut attendre encore un peu.", es:"El trabajo puede esperar un poco más."},
    {fr:"On ne regrette absolument pas ce choix.", es:"No nos arrepentimos para nada de esta decisión."},
    {fr:"Ce genre de décision, on ne la prend pas tous les jours.", es:"Este tipo de decisión no se toma todos los días."},
    {fr:"Au final, ces quelques jours en plus ont tout changé.", es:"Al final, esos días de más lo cambiaron todo."}
  ]},
 { title:"Dire au revoir à des amis de voyage", phrases:[
    {fr:"On s'est rencontrés complètement par hasard, dans une auberge.", es:"Nos conocimos completamente por casualidad, en un albergue."},
    {fr:"On a voyagé ensemble pendant presque une semaine.", es:"Viajamos juntos durante casi una semana."},
    {fr:"C'est toujours difficile de dire au revoir après ça.", es:"Siempre es difícil despedirse después de eso."},
    {fr:"On a échangé nos coordonnées avant de se séparer.", es:"Nos intercambiamos los contactos antes de separarnos."},
    {fr:"Ils viennent d'un pays complètement différent du mien.", es:"Vienen de un país completamente diferente al mío."},
    {fr:"On a promis de se revoir un jour, quelque part.", es:"Prometimos volver a vernos algún día, en algún lugar."},
    {fr:"Ce genre de rencontre rend le voyage encore plus spécial.", es:"Este tipo de encuentro hace que el viaje sea aún más especial."},
    {fr:"On garde contact régulièrement depuis.", es:"Desde entonces seguimos en contacto regularmente."},
    {fr:"Ils nous ont même invités chez eux, un jour.", es:"Incluso nos invitaron a su casa, algún día."},
    {fr:"Ces amitiés improvisées sont souvent les plus belles.", es:"Estas amistades improvisadas suelen ser las más bonitas."}
  ]},
 { title:"S'adapter à la nourriture locale", phrases:[
    {fr:"On a goûté des plats qu'on n'avait jamais vus avant.", es:"Probamos platos que nunca habíamos visto antes."},
    {fr:"Certains plats étaient beaucoup plus épicés que ce à quoi on est habitués.", es:"Algunos platos estaban mucho más picantes de lo que estamos acostumbrados."},
    {fr:"Je ne savais pas du tout à quoi m'attendre.", es:"No tenía ni idea de qué esperar."},
    {fr:"Finalement, ça s'est avéré être l'un de mes plats préférés.", es:"Al final resultó ser uno de mis platos favoritos."},
    {fr:"On a appris à manger avec les mains, comme tout le monde ici.", es:"Aprendimos a comer con las manos, como todo el mundo aquí."},
    {fr:"Le serveur nous a expliqué ce qu'il y avait dans chaque plat.", es:"El camarero nos explicó qué llevaba cada plato."},
    {fr:"Certaines odeurs étaient un peu déroutantes au début.", es:"Algunos olores eran un poco desconcertantes al principio."},
    {fr:"On s'est vite habitués aux nouvelles saveurs.", es:"Nos acostumbramos rápido a los nuevos sabores."},
    {fr:"Manger local, c'est aussi une façon de découvrir la culture.", es:"Comer local es también una forma de descubrir la cultura."},
    {fr:"Je vais sûrement essayer de reproduire ce plat une fois chez moi.", es:"Seguramente intentaré reproducir este plato cuando esté en casa."}
  ]},
 { title:"Un changement de programme de dernière minute", phrases:[
    {fr:"Notre guide nous a prévenus que le site était fermé aujourd'hui.", es:"Nuestro guía nos avisó de que el lugar estaba cerrado hoy."},
    {fr:"On a dû revoir tout notre programme en quelques minutes.", es:"Tuvimos que replantear todo el programa en pocos minutos."},
    {fr:"Au final, on a trouvé une alternative encore meilleure.", es:"Al final encontramos una alternativa todavía mejor."},
    {fr:"Ce genre de changement fait partie du voyage, j'imagine.", es:"Supongo que este tipo de cambios forma parte del viaje."},
    {fr:"On a appris à ne pas trop s'attacher à nos plans.", es:"Aprendimos a no aferrarnos demasiado a los planes."},
    {fr:"L'improvisation nous a souvent réussi, en fin de compte.", es:"La improvisación nos ha salido bien muchas veces, en el fondo."},
    {fr:"On a fini la journée complètement différemment de ce qui était prévu.", es:"Acabamos el día de una forma completamente distinta a la prevista."},
    {fr:"Et honnêtement, c'était l'une de nos meilleures journées.", es:"Y, sinceramente, fue uno de nuestros mejores días."},
    {fr:"Ça nous a rappelé qu'il faut rester flexible en voyage.", es:"Nos recordó que hay que ser flexible cuando se viaja."},
    {fr:"On a hâte de voir ce que la suite nous réserve.", es:"Tenemos ganas de ver qué nos depara el resto del viaje."}
  ]},
 { title:"Bilan du module voyage", phrases:[
    {fr:"Ce voyage nous a appris à être plus flexibles.", es:"Este viaje nos ha enseñado a ser más flexibles."},
    {fr:"On a dû s'adapter à beaucoup d'imprévus, mais ça valait le coup.", es:"Tuvimos que adaptarnos a muchos imprevistos, pero mereció la pena."},
    {fr:"Chaque étape nous a appris quelque chose de différent.", es:"Cada etapa nos enseñó algo diferente."},
    {fr:"On a rencontré des gens qu'on n'oubliera jamais.", es:"Conocimos a personas que nunca olvidaremos."},
    {fr:"Certains imprévus se sont transformés en nos meilleurs souvenirs.", es:"Algunos imprevistos se convirtieron en nuestros mejores recuerdos."},
    {fr:"On revient avec beaucoup plus de confiance en nous.", es:"Volvemos con mucha más confianza en nosotros mismos."},
    {fr:"Ce vocabulaire va nous servir pour tous nos futurs voyages.", es:"Este vocabulario nos servirá para todos nuestros futuros viajes."},
    {fr:"Prochaine étape : le module « Conversation sociale ».", es:"Próxima etapa: el módulo «Conversación social»."},
    {fr:"Bravo, tu as terminé le module « En voyage » du niveau 2 !", es:"¡Enhorabuena, has terminado el módulo «De viaje» del nivel 2!"},
    {fr:"On se retrouve très vite pour la suite.", es:"Nos vemos muy pronto para seguir."}
  ]}
];

const level2Module3Lessons = [
 { title:"Aborder un inconnu lors d'un événement", phrases:[
    {fr:"Je ne crois pas qu'on se soit déjà rencontrés.", es:"Creo que no nos conocíamos todavía."},
    {fr:"Ça ne vous dérange pas si je me joins à vous ?", es:"¿Le importa si me uno a ustedes?"},
    {fr:"Qu'est-ce qui vous amène à cet événement ?", es:"¿Qué le trae a este evento?"},
    {fr:"Vous aimeriez peut-être qu'on échange nos coordonnées ?", es:"¿Le gustaría que intercambiáramos los contactos?"},
    {fr:"J'aimerais bien en savoir plus sur ce que vous faites.", es:"Me gustaría saber más sobre lo que hace."},
    {fr:"Vous voudriez boire quelque chose pendant qu'on discute ?", es:"¿Le apetecería tomar algo mientras charlamos?"},
    {fr:"Ça vous dirait de continuer cette conversation autour d'un café ?", es:"¿Le gustaría seguir esta conversación con un café?"},
    {fr:"J'aimerais vraiment rester en contact.", es:"Me gustaría mucho mantener el contacto."},
    {fr:"Vous aimeriez qu'on se revoie la semaine prochaine ?", es:"¿Le gustaría que nos volviéramos a ver la semana que viene?"},
    {fr:"Ravi d'avoir fait votre connaissance.", es:"Encantado de haberle conocido."}
  ], tip:{
    title:"«Me gustaría» para proponer algo con delicadeza",
    example:"Me gustaría saber más sobre lo que hace. — <b>Me gustaría</b> saber más.",
    body:"«Me gustaría» (condicional de «gustar») expresa un deseo o una propuesta de forma educada, más suave que «quiero»: «Me gustaría ayudarte» suena más cortés que «Quiero ayudarte». Se usa siempre seguido de un infinitivo: «me gustaría saber», «me gustaría que...» + subjuntivo."
  }},
 { title:"Donner son avis sur un sujet léger", phrases:[
    {fr:"À mon avis, les séries sont souvent mieux que les films en ce moment.", es:"En mi opinión, las series suelen ser mejores que las películas últimamente."},
    {fr:"Je pense que les réseaux sociaux ont du bon et du moins bon.", es:"Creo que las redes sociales tienen cosas buenas y otras no tanto."},
    {fr:"Personnellement, je trouve ça plutôt positif.", es:"Personalmente, lo veo bastante positivo."},
    {fr:"Je ne suis pas vraiment d'accord avec toi sur ce point.", es:"No estoy muy de acuerdo contigo en este punto."},
    {fr:"Moi aussi, je pense que c'est une bonne idée.", es:"Yo también pienso que es una buena idea."},
    {fr:"Moi non plus, je n'aime pas vraiment ça.", es:"Yo tampoco es que me guste mucho."},
    {fr:"C'est intéressant, je n'avais jamais vu les choses comme ça.", es:"Qué interesante, nunca lo había visto así."},
    {fr:"Chacun son avis, je suppose.", es:"Cada uno tiene su opinión, supongo."},
    {fr:"Tu as peut-être raison, finalement.", es:"A lo mejor tienes razón, después de todo."},
    {fr:"On pourrait en débattre pendant des heures.", es:"Podríamos debatir sobre esto durante horas."}
  ], tip:{
    title:"«Yo también» y «yo tampoco»",
    example:"Yo también pienso que es una buena idea. — <b>Yo también</b> pienso eso.",
    body:"Para decir «moi aussi» tras una frase afirmativa, el español simplemente usa «yo también»: «Yo también creo eso». Para decir «moi non plus» tras una frase negativa, se usa «yo tampoco»: «Yo tampoco estoy de acuerdo». A diferencia del inglés, no hace falta repetir el auxiliar."
  }},
 { title:"Parler de ses habitudes du matin", phrases:[
    {fr:"Je me lève généralement vers sept heures.", es:"Normalmente me levanto hacia las siete."},
    {fr:"Le weekend, j'ai tendance à faire la grasse matinée.", es:"Los fines de semana suelo dormir hasta tarde."},
    {fr:"Je ne peux pas commencer ma journée sans un café.", es:"No puedo empezar el día sin un café."},
    {fr:"Certaines personnes sont du matin, d'autres pas du tout.", es:"Algunas personas son madrugadoras, otras para nada."},
    {fr:"Je préfère me lever tôt pour avoir du temps pour moi.", es:"Prefiero levantarme temprano para tener tiempo para mí."},
    {fr:"Mes habitudes ont beaucoup changé depuis que je travaille de chez moi.", es:"Mis costumbres han cambiado mucho desde que trabajo desde casa."},
    {fr:"Je mets toujours plusieurs alarmes, juste au cas où.", es:"Siempre pongo varias alarmas, por si acaso."},
    {fr:"Rien ne vaut un bon petit-déjeuner pour bien commencer.", es:"No hay nada como un buen desayuno para empezar bien."},
    {fr:"Tu es plutôt du matin ou du soir ?", es:"¿Tú eres más de mañana o de noche?"},
    {fr:"Chacun son rythme, après tout.", es:"Cada uno tiene su ritmo, al final."}
  ]},
 { title:"Proposer son aide", phrases:[
    {fr:"Tu veux un coup de main pour porter ça ?", es:"¿Quieres una mano para llevar eso?"},
    {fr:"N'hésite pas à me demander si tu as besoin de quoi que ce soit.", es:"No dudes en pedirme lo que necesites."},
    {fr:"Je peux rester un peu plus tard si ça peut aider.", es:"Puedo quedarme un poco más si eso ayuda."},
    {fr:"Laisse-moi t'aider, ça ira plus vite à deux.", es:"Déjame ayudarte, irá más rápido entre dos."},
    {fr:"Préviens-moi si jamais la situation change.", es:"Avísame si la situación cambia."},
    {fr:"C'est vraiment gentil, mais ça va aller, merci.", es:"Es muy amable, pero no hace falta, gracias."},
    {fr:"Je serais ravi de t'accompagner si tu veux.", es:"Estaría encantado de acompañarte si quieres."},
    {fr:"Appelle-moi dès que tu en as besoin.", es:"Llámame en cuanto lo necesites."},
    {fr:"C'est toujours agréable de pouvoir compter sur quelqu'un.", es:"Siempre es agradable poder contar con alguien."},
    {fr:"Merci infiniment, ça me touche beaucoup.", es:"Muchísimas gracias, me conmueve de verdad."}
  ]},
 { title:"Exprimer un désaccord avec tact", phrases:[
    {fr:"Je vois ce que tu veux dire, mais je ne suis pas totalement d'accord.", es:"Entiendo lo que quieres decir, pero no estoy del todo de acuerdo."},
    {fr:"C'est un bon point, même si je le vois un peu différemment.", es:"Es un buen argumento, aunque yo lo veo un poco diferente."},
    {fr:"Je comprends ta position, mais laisse-moi t'expliquer la mienne.", es:"Comprendo tu postura, pero déjame explicarte la mía."},
    {fr:"Ce n'est peut-être pas tout à fait ce que je pense.", es:"Quizá no es exactamente lo que yo pienso."},
    {fr:"On pourrait voir les choses sous un autre angle.", es:"Podríamos ver las cosas desde otro ángulo."},
    {fr:"Je ne veux pas te contredire, mais j'ai un avis un peu différent.", es:"No quiero contradecirte, pero tengo una opinión algo distinta."},
    {fr:"Chacun a le droit d'avoir son opinion, après tout.", es:"Al final, cada uno tiene derecho a su opinión."},
    {fr:"On n'est pas obligés d'être d'accord sur tout.", es:"No tenemos por qué estar de acuerdo en todo."},
    {fr:"Je respecte totalement ton point de vue.", es:"Respeto totalmente tu punto de vista."},
    {fr:"On en reparlera une autre fois, ça ne presse pas.", es:"Ya lo hablaremos otro día, no hay prisa."}
  ]},
 { title:"Parler de ses souvenirs d'enfance", phrases:[
    {fr:"Quand j'étais petit, on passait tous les étés chez mes grands-parents.", es:"Cuando era pequeño, pasábamos todos los veranos en casa de mis abuelos."},
    {fr:"Je me souviens encore très bien de cette odeur.", es:"Todavía recuerdo muy bien ese olor."},
    {fr:"On avait l'habitude de jouer dehors jusqu'à la tombée de la nuit.", es:"Solíamos jugar fuera hasta que caía la noche."},
    {fr:"Ma grand-mère me racontait toujours la même histoire avant de dormir.", es:"Mi abuela siempre me contaba la misma historia antes de dormir."},
    {fr:"Ça me manque, cette époque sans trop de soucis.", es:"Echo de menos esa época sin demasiadas preocupaciones."},
    {fr:"Je revois encore très clairement cette maison dans ma tête.", es:"Todavía veo esa casa muy claramente en mi mente."},
    {fr:"On n'avait pas grand-chose, mais on était heureux.", es:"No teníamos gran cosa, pero éramos felices."},
    {fr:"Certains souvenirs restent gravés pour toujours.", es:"Algunos recuerdos quedan grabados para siempre."},
    {fr:"J'aimerais que mes enfants vivent des souvenirs aussi forts.", es:"Me gustaría que mis hijos vivieran recuerdos igual de intensos."},
    {fr:"Repenser à tout ça me rend vraiment nostalgique.", es:"Pensar en todo esto me pone muy nostálgico."}
  ], tip:{
    title:"«Solía» + infinitivo para los hábitos pasados",
    example:"Solíamos jugar fuera hasta que caía la noche. — <b>Solíamos</b> jugar fuera.",
    body:"«Soler» (en imperfecto: solía, solías, solíamos...) seguido de infinitivo describe un hábito del pasado que ya no es cierto hoy: «Solía vivir allí» (antes vivía allí, ya no). También se puede usar simplemente el imperfecto («jugábamos fuera»), pero «solía + infinitivo» insiste más en la idea de costumbre."
  }},
 { title:"Discuter des réseaux sociaux", phrases:[
    {fr:"Je passe sans doute un peu trop de temps sur mon téléphone.", es:"Seguramente paso demasiado tiempo con el móvil."},
    {fr:"Ça pourrait bien m'aider à rester en contact avec des gens que j'ai perdus de vue.", es:"Podría ayudarme a mantener el contacto con gente que he perdido de vista."},
    {fr:"Il se pourrait que je ferme mon compte un de ces jours.", es:"Puede que cierre mi cuenta cualquier día de estos."},
    {fr:"Certaines personnes pourraient se sentir dépassées par toutes ces notifications.", es:"Algunas personas podrían sentirse abrumadas por tantas notificaciones."},
    {fr:"Ça pourrait avoir du bon, si on l'utilise avec modération.", es:"Podría tener cosas buenas, si se usa con moderación."},
    {fr:"Il se peut que je sois un peu trop connecté, pour être honnête.", es:"Puede que esté un poco demasiado conectado, para ser sincero."},
    {fr:"Ça pourrait changer complètement la façon dont les gens communiquent.", es:"Podría cambiar por completo la forma en que la gente se comunica."},
    {fr:"On pourrait bien finir par passer plus de temps en ligne qu'en vrai.", es:"Podríamos acabar pasando más tiempo conectados que en persona."},
    {fr:"Ça pourrait valoir le coup de faire une pause de temps en temps.", es:"Podría merecer la pena desconectar de vez en cuando."},
    {fr:"Qui sait ce que ça deviendra dans dix ans.", es:"Quién sabe en qué se convertirá dentro de diez años."}
  ], tip:{
    title:"«Podría» y «puede que» para la posibilidad",
    example:"Puede que cierre mi cuenta un día. — <b>Puede que</b> cierre mi cuenta.",
    body:"«Podría» (condicional de «poder») expresa una posibilidad, igual que «pourrait»: «Podría llover». «Puede que», en cambio, va siempre seguido de subjuntivo: «Puede que llueva», «Puede que esté equivocado». Ambas formas son más dudosas que una afirmación directa con el futuro."
  }},
 { title:"Parler de ses objectifs personnels", phrases:[
    {fr:"Mon objectif cette année est d'apprendre une nouvelle langue.", es:"Mi objetivo este año es aprender un idioma nuevo."},
    {fr:"Je me suis fixé des étapes plus petites pour y arriver.", es:"Me he marcado etapas más pequeñas para conseguirlo."},
    {fr:"Ce n'est pas facile de rester motivé sur le long terme.", es:"No es fácil mantenerse motivado a largo plazo."},
    {fr:"J'essaie de faire un petit progrès chaque jour.", es:"Intento avanzar un poco cada día."},
    {fr:"Parfois, je doute un peu de moi-même.", es:"A veces dudo un poco de mí mismo."},
    {fr:"Mais je continue, même quand c'est difficile.", es:"Pero sigo adelante, incluso cuando es difícil."},
    {fr:"Avoir un objectif clair m'aide vraiment à avancer.", es:"Tener un objetivo claro me ayuda mucho a avanzar."},
    {fr:"J'aime bien célébrer les petites victoires au passage.", es:"Me gusta celebrar las pequeñas victorias por el camino."},
    {fr:"Ce qui compte, c'est de ne jamais abandonner complètement.", es:"Lo que importa es no rendirse del todo nunca."},
    {fr:"Dans un an, j'espère pouvoir regarder en arrière avec fierté.", es:"Dentro de un año, espero poder mirar atrás con orgullo."}
  ]},
 { title:"Faire un compliment et y répondre", phrases:[
    {fr:"J'adore vraiment la façon dont tu as organisé tout ça.", es:"Me encanta de verdad cómo has organizado todo esto."},
    {fr:"Tu as fait un travail remarquable, honnêtement.", es:"Has hecho un trabajo estupendo, de verdad."},
    {fr:"Oh, c'est gentil, merci beaucoup.", es:"Qué amable, muchas gracias."},
    {fr:"Ça me touche que tu l'aies remarqué.", es:"Me emociona que te hayas dado cuenta."},
    {fr:"Tu mérites vraiment ce compliment.", es:"Mereces de verdad ese cumplido."},
    {fr:"J'ai beaucoup appris en travaillant avec toi sur ce projet.", es:"He aprendido mucho trabajando contigo en este proyecto."},
    {fr:"C'est toi qui as fait le plus gros du travail, en réalité.", es:"En realidad, tú has hecho la mayor parte del trabajo."},
    {fr:"On forme une bonne équipe, je trouve.", es:"Creo que formamos un buen equipo."},
    {fr:"Merci, venant de toi, ça compte double.", es:"Gracias, viniendo de ti, eso vale el doble."},
    {fr:"J'espère qu'on retravaillera ensemble bientôt.", es:"Espero que volvamos a trabajar juntos pronto."}
  ]},
 { title:"Discuter d'un livre ou d'un film récent", phrases:[
    {fr:"Tu as lu quelque chose d'intéressant dernièrement ?", es:"¿Has leído algo interesante últimamente?"},
    {fr:"L'histoire m'a complètement surpris, je ne m'attendais pas à cette fin.", es:"La historia me sorprendió por completo, no esperaba ese final."},
    {fr:"Les personnages sont vraiment bien écrits, à mon avis.", es:"Los personajes están muy bien escritos, en mi opinión."},
    {fr:"Je n'ai pas réussi à le lâcher avant de l'avoir fini.", es:"No pude dejarlo hasta que lo terminé."},
    {fr:"Le film était bien, mais le livre est encore meilleur.", es:"La película estaba bien, pero el libro es todavía mejor."},
    {fr:"Je te le recommande vraiment si tu as un peu de temps.", es:"Te lo recomiendo de verdad si tienes algo de tiempo."},
    {fr:"Ce n'est pas vraiment mon genre d'habitude, mais j'ai adoré.", es:"Normalmente no es mi tipo de historia, pero me encantó."},
    {fr:"La fin m'a un peu déçu, pour être honnête.", es:"El final me decepcionó un poco, para ser sincero."},
    {fr:"Tu devrais vraiment y jeter un œil.", es:"Deberías echarle un vistazo, en serio."},
    {fr:"On pourrait en discuter davantage autour d'un café.", es:"Podríamos hablar más de ello con un café."}
  ]},
 { title:"Organiser une sortie entre amis", phrases:[
    {fr:"Ça vous dirait de se retrouver ce weekend ?", es:"¿Os apetece que nos juntemos este fin de semana?"},
    {fr:"On pourrait essayer ce nouveau restaurant dont tout le monde parle.", es:"Podríamos probar ese restaurante nuevo del que todo el mundo habla."},
    {fr:"Samedi m'arrange mieux que dimanche, personnellement.", es:"A mí me viene mejor el sábado que el domingo."},
    {fr:"Est-ce que ça convient à tout le monde ?", es:"¿Le viene bien a todo el mundo?"},
    {fr:"On peut toujours changer de date si besoin.", es:"Siempre podemos cambiar la fecha si hace falta."},
    {fr:"Je vais prévenir les autres pour voir ce qu'ils en pensent.", es:"Voy a avisar a los demás para ver qué opinan."},
    {fr:"On se retrouve directement là-bas ou on part ensemble ?", es:"¿Nos vemos directamente allí o salimos juntos?"},
    {fr:"N'oublie pas de nous confirmer ta présence.", es:"No olvides confirmarnos si vienes."},
    {fr:"J'ai vraiment hâte qu'on se retrouve tous.", es:"Tengo muchas ganas de que nos juntemos todos."},
    {fr:"Ça fait trop longtemps qu'on ne s'est pas tous vus.", es:"Hace demasiado tiempo que no nos vemos todos."}
  ]},
 { title:"Gérer un petit malentendu", phrases:[
    {fr:"Je crois qu'il y a eu un malentendu entre nous.", es:"Creo que ha habido un malentendido entre nosotros."},
    {fr:"Ce n'est pas du tout ce que je voulais dire.", es:"No era en absoluto lo que yo quería decir."},
    {fr:"Désolé si ça a pu sembler blessant, ce n'était pas mon intention.", es:"Siento si sonó hiriente, no era mi intención."},
    {fr:"Peut-être que je me suis mal exprimé.", es:"Quizá no me expliqué bien."},
    {fr:"Je pense qu'on a juste mal interprété les mots de l'autre.", es:"Creo que simplemente malinterpretamos las palabras del otro."},
    {fr:"Parlons-en calmement, ça vaut mieux.", es:"Hablémoslo con calma, es mejor."},
    {fr:"Je ne t'en veux absolument pas, ne t'inquiète pas.", es:"No te guardo ningún rencor, no te preocupes."},
    {fr:"Ça arrive à tout le monde de mal se comprendre parfois.", es:"A todo el mundo le pasa malentenderse alguna vez."},
    {fr:"Content qu'on ait pu clarifier tout ça.", es:"Me alegra que hayamos podido aclarar todo esto."},
    {fr:"Ça nous rapproche, en fin de compte.", es:"Al final, esto nos acerca más."}
  ]},
 { title:"Parler de ses traditions familiales", phrases:[
    {fr:"Chez nous, on se réunit toujours en famille le dimanche.", es:"En mi casa, siempre nos reunimos en familia el domingo."},
    {fr:"Cette tradition se transmet depuis plusieurs générations.", es:"Esta tradición se transmite desde hace varias generaciones."},
    {fr:"Chaque famille a ses propres petites habitudes.", es:"Cada familia tiene sus propias costumbres."},
    {fr:"On prépare toujours le même plat pour les grandes occasions.", es:"Siempre preparamos el mismo plato para las grandes ocasiones."},
    {fr:"Ça me rappelle beaucoup de souvenirs d'enfance.", es:"Me recuerda a muchos momentos de mi infancia."},
    {fr:"J'espère pouvoir continuer cette tradition avec mes propres enfants.", es:"Espero poder seguir esta tradición con mis propios hijos."},
    {fr:"Certaines traditions évoluent un peu au fil du temps.", es:"Algunas tradiciones cambian un poco con el tiempo."},
    {fr:"C'est ce genre de moment qui rapproche vraiment une famille.", es:"Son este tipo de momentos los que realmente unen a una familia."},
    {fr:"Vous avez des traditions particulières, dans votre famille ?", es:"¿Tenéis alguna tradición especial en vuestra familia?"},
    {fr:"J'adorerais en apprendre davantage sur les vôtres.", es:"Me encantaría saber más sobre las vuestras."}
  ]},
 { title:"Reprendre contact après longtemps", phrases:[
    {fr:"Ça fait une éternité qu'on ne s'est pas parlé !", es:"¡Hace una eternidad que no hablamos!"},
    {fr:"Qu'est-ce que tu deviens depuis tout ce temps ?", es:"¿Qué ha sido de ti en todo este tiempo?"},
    {fr:"Je pensais justement à toi l'autre jour.", es:"Precisamente pensé en ti el otro día."},
    {fr:"Tellement de choses ont changé depuis la dernière fois.", es:"Han cambiado tantas cosas desde la última vez."},
    {fr:"Il faut vraiment qu'on se raconte tout ça en détail.", es:"Tenemos que contarnos todo esto con detalle."},
    {fr:"On devrait essayer de se voir plus souvent, maintenant.", es:"Deberíamos intentar vernos más a menudo, ahora."},
    {fr:"Le temps passe tellement vite, c'est fou.", es:"El tiempo pasa tan rápido, es una locura."},
    {fr:"Ça me fait vraiment plaisir d'avoir de tes nouvelles.", es:"Me alegra muchísimo tener noticias tuyas."},
    {fr:"On ne devrait plus jamais se perdre de vue comme ça.", es:"No deberíamos volver a perdernos de vista así."},
    {fr:"Vivement notre prochaine rencontre.", es:"Con ganas de nuestro próximo encuentro."}
  ]},
 { title:"Exprimer sa gratitude", phrases:[
    {fr:"Je ne sais vraiment pas comment te remercier.", es:"De verdad no sé cómo darte las gracias."},
    {fr:"Ça a énormément compté pour moi, ce que tu as fait.", es:"Lo que hiciste significó muchísimo para mí."},
    {fr:"Je suis profondément reconnaissant pour ton soutien.", es:"Estoy profundamente agradecido por tu apoyo."},
    {fr:"Sans toi, je n'y serais jamais arrivé.", es:"Sin ti, nunca lo habría conseguido."},
    {fr:"Tu as toujours été là pour moi, et je ne l'oublie pas.", es:"Siempre has estado ahí para mí, y no lo olvido."},
    {fr:"Merci d'avoir pris le temps de m'écouter.", es:"Gracias por tomarte el tiempo de escucharme."},
    {fr:"J'aimerais pouvoir te rendre la pareille un jour.", es:"Me gustaría poder devolverte el favor algún día."},
    {fr:"Ça me touche vraiment, plus que tu ne l'imagines.", es:"Me conmueve de verdad, más de lo que te imaginas."},
    {fr:"Je me sens vraiment chanceux de t'avoir dans ma vie.", es:"Me siento muy afortunado de tenerte en mi vida."},
    {fr:"Merci du fond du cœur.", es:"Gracias de todo corazón."}
  ]},
 { title:"Parler de ses animaux de compagnie", phrases:[
    {fr:"On a adopté notre chien il y a presque trois ans.", es:"Adoptamos a nuestro perro hace casi tres años."},
    {fr:"Il nous a vraiment changé la vie, d'une belle façon.", es:"Nos ha cambiado la vida de verdad, de una forma bonita."},
    {fr:"Elle est un peu craintive avec les inconnus, au début.", es:"Al principio es un poco miedosa con los desconocidos."},
    {fr:"Il faut sortir le chien matin et soir, sans exception.", es:"Hay que sacar al perro por la mañana y por la noche, sin excepción."},
    {fr:"Mon chat passe littéralement sa vie à dormir.", es:"Mi gato se pasa literalmente la vida durmiendo."},
    {fr:"Avoir un animal demande beaucoup de responsabilité.", es:"Tener una mascota exige mucha responsabilidad."},
    {fr:"Il nous accueille toujours à la porte en rentrant.", es:"Siempre nos recibe en la puerta cuando volvemos."},
    {fr:"Elle fait vraiment partie de la famille, à présent.", es:"Ahora ella es realmente parte de la familia."},
    {fr:"Je ne pourrais plus imaginer la maison sans lui.", es:"Ya no podría imaginarme la casa sin él."},
    {fr:"Les animaux apportent tellement de joie au quotidien.", es:"Las mascotas aportan tanta alegría en el día a día."}
  ]},
 { title:"Discuter d'un choix de carrière", phrases:[
    {fr:"Je réfléchis sérieusement à changer de métier.", es:"Estoy pensando seriamente en cambiar de profesión."},
    {fr:"Ce n'est pas une décision facile à prendre.", es:"No es una decisión fácil de tomar."},
    {fr:"J'ai besoin de quelque chose qui ait plus de sens pour moi.", es:"Necesito algo que tenga más sentido para mí."},
    {fr:"Ma famille me soutient complètement dans ce choix.", es:"Mi familia me apoya totalmente en esta decisión."},
    {fr:"Ça implique pas mal de risques, je ne vais pas le nier.", es:"Implica bastantes riesgos, no voy a negarlo."},
    {fr:"Mais je pense que ça en vaut vraiment la peine.", es:"Pero creo que realmente merece la pena."},
    {fr:"Certains de mes amis ont fait le même choix avant moi.", es:"Algunos amigos tomaron la misma decisión antes que yo."},
    {fr:"Ils semblent beaucoup plus épanouis depuis.", es:"Desde entonces parecen mucho más realizados."},
    {fr:"J'ai encore besoin d'un peu de temps pour me décider.", es:"Todavía necesito algo de tiempo para decidirme."},
    {fr:"Quoi qu'il arrive, je sais que ça se passera bien.", es:"Pase lo que pase, sé que saldrá bien."}
  ]},
 { title:"Faire la paix après une dispute", phrases:[
    {fr:"On a eu des mots un peu durs hier, je le regrette.", es:"Ayer nos dijimos cosas un poco duras, lo siento."},
    {fr:"Je suis désolé pour ce que j'ai dit, ce n'était pas juste.", es:"Siento lo que dije, no fue justo."},
    {fr:"On était tous les deux fatigués, je crois.", es:"Creo que los dos estábamos cansados."},
    {fr:"Ça ne vaut vraiment pas la peine de se fâcher pour ça.", es:"De verdad no merece la pena enfadarse por esto."},
    {fr:"On devrait vraiment en reparler calmement.", es:"Deberíamos hablarlo con calma, de verdad."},
    {fr:"J'aimerais qu'on tourne la page ensemble.", es:"Me gustaría que pasáramos página juntos."},
    {fr:"Notre amitié compte bien plus que cette dispute.", es:"Nuestra amistad importa mucho más que esta discusión."},
    {fr:"Merci d'avoir fait le premier pas.", es:"Gracias por dar el primer paso."},
    {fr:"On en ressort même plus proches, je trouve.", es:"Creo que incluso salimos más unidos de esto."},
    {fr:"Content que tout soit rentré dans l'ordre.", es:"Me alegra que todo se haya arreglado."}
  ]},
 { title:"Parler de l'avenir et de ses incertitudes", phrases:[
    {fr:"Je ne sais pas encore ce que je ferai dans cinq ans.", es:"Todavía no sé qué haré dentro de cinco años."},
    {fr:"Est-ce que tu sais où tu aimerais vivre plus tard ?", es:"¿Sabes dónde te gustaría vivir más adelante?"},
    {fr:"Je me demande parfois si j'ai fait les bons choix.", es:"A veces me pregunto si he tomado las decisiones correctas."},
    {fr:"Personne ne sait vraiment de quoi demain sera fait.", es:"Nadie sabe realmente de qué estará hecho el mañana."},
    {fr:"Pourrais-tu me dire ce que toi, tu envisages pour l'avenir ?", es:"¿Podrías decirme si tú tienes algún plan para el futuro?"},
    {fr:"L'incertitude peut faire peur, mais aussi être excitante.", es:"La incertidumbre puede dar miedo, pero también ser emocionante."},
    {fr:"Je ne sais pas si je dois suivre mon instinct ou être plus raisonnable.", es:"No sé si debería seguir mi instinto o ser más prudente."},
    {fr:"On verra bien ce que la vie nous réserve.", es:"Ya veremos lo que nos depara la vida."},
    {fr:"J'essaie de rester ouvert à toutes les possibilités.", es:"Intento mantenerme abierto a todas las posibilidades."},
    {fr:"Au fond, personne n'a vraiment toutes les réponses.", es:"En el fondo, nadie tiene realmente todas las respuestas."}
  ], tip:{
    title:"La pregunta indirecta con «si» (= whether)",
    example:"No sé si debería seguir mi instinto. — No sé <b>si</b> debería...",
    body:"Para preguntar indirectamente algo que en una pregunta directa sería de sí o no, el español usa «si» (equivalente a «whether», no a «if» condicional): «No sé si vendrá», «Me pregunto si es buena idea». El verbo que sigue conserva el orden normal de la frase, sin inversión."
  }},
 { title:"Bilan du module conversation sociale", phrases:[
    {fr:"Ce module nous a appris à mieux exprimer nos émotions.", es:"Este módulo nos ha enseñado a expresar mejor nuestras emociones."},
    {fr:"On sait désormais engager une conversation avec plus d'aisance.", es:"Ahora sabemos iniciar una conversación con más soltura."},
    {fr:"Donner son avis, poliment, devient de plus en plus naturel.", es:"Dar nuestra opinión, con educación, cada vez resulta más natural."},
    {fr:"Ces expressions seront utiles dans énormément de situations.", es:"Estas expresiones serán útiles en muchísimas situaciones."},
    {fr:"Chaque conversation est une occasion de progresser un peu plus.", es:"Cada conversación es una oportunidad para progresar un poco más."},
    {fr:"N'hésite pas à revenir sur ces leçons autant de fois que nécessaire.", es:"No dudes en repasar estas lecciones tantas veces como necesites."},
    {fr:"Tu as fait énormément de chemin depuis le début du niveau 2.", es:"Has avanzado muchísimo desde el principio del nivel 2."},
    {fr:"Bravo, tu as terminé le module « Conversation sociale » du niveau 2 !", es:"¡Enhorabuena, has terminado el módulo «Conversación social» del nivel 2!"},
    {fr:"Le niveau 2 est maintenant complet dans son intégralité.", es:"El nivel 2 está ahora completo por entero."},
    {fr:"On se retrouve bientôt pour la suite de l'aventure.", es:"Nos vemos pronto para seguir con la aventura."}
  ]}
];


const LEVEL2_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"Les mêmes situations de vie qu'au niveau 1, en plus riche : de nouvelles scènes, un vocabulaire plus varié.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"De nouvelles aventures, un vocabulaire de voyage plus riche et des situations imprévues.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Exprime tes opinions, tes émotions et gère les petites situations sociales du quotidien avec plus d'aisance.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module3Lessons
  }
];
const LEVEL2_FREE_LESSONS = { 1: 3, 2: 0, 3: 0 }; // à partir du niveau 2, seulement 3 leçons gratuites

/* ============================================================
   NIVEAU 3
   ============================================================ */

const level3Module1Lessons = [
 { title:"Passer un entretien d'embauche", phrases:[
    {fr:"Si j'avais plus d'expérience, je postulerais à des postes plus élevés.", es:"Si tuviera más experiencia, solicitaría puestos más altos."},
    {fr:"Que ferais-tu si on t'offrait ce poste demain ?", es:"¿Qué harías si te ofrecieran este puesto mañana?"},
    {fr:"Si je décrochais cet emploi, je déménagerais sans hésiter.", es:"Si consiguiera este trabajo, me mudaría sin dudarlo."},
    {fr:"On me poserait sûrement des questions sur mes points faibles.", es:"Seguramente me harían preguntas sobre mis puntos débiles."},
    {fr:"Si j'étais le recruteur, je chercherais quelqu'un de motivé avant tout.", es:"Si yo fuera el reclutador, buscaría ante todo a alguien motivado."},
    {fr:"Je me sentirais plus confiant si j'avais mieux préparé mes réponses.", es:"Me sentiría más seguro si hubiera preparado mejor mis respuestas."},
    {fr:"S'ils me rappelaient aujourd'hui, je serais vraiment soulagé.", es:"Si me llamaran hoy, me quedaría muy aliviado."},
    {fr:"Je n'accepterais ce poste que si le salaire était correct.", es:"Solo aceptaría este puesto si el salario fuera adecuado."},
    {fr:"Si on me demandait pourquoi ce poste m'intéresse, je saurais quoi répondre.", es:"Si me preguntaran por qué me interesa este puesto, sabría qué responder."},
    {fr:"Avec un peu de chance, tout se passerait exactement comme prévu.", es:"Con un poco de suerte, todo saldría exactamente como estaba previsto."}
  ], tip:{
    title:"La oración condicional irreal: si + imperfecto de subjuntivo, condicional",
    example:"Si tuviera más experiencia, solicitaría puestos más altos. — <b>Si tuviera</b>, <b>solicitaría</b>.",
    body:"Para imaginar una situación hipotética o poco probable en el presente, el español usa «si» + imperfecto de subjuntivo (tuviera, fuera, pudiera...), seguido del condicional (solicitaría, sería, podría...). A diferencia del francés, nunca se usa el condicional justo después de «si»: se dice «si tuviera», no «si tendría»."
  }},
 { title:"Regretter une décision", phrases:[
    {fr:"J'aimerais avoir étudié une autre matière à l'université.", es:"Ojalá hubiera estudiado otra carrera en la universidad."},
    {fr:"Si seulement j'avais écouté mes parents à l'époque.", es:"Si hubiera escuchado a mis padres en aquella época."},
    {fr:"Elle regrette de ne pas avoir voyagé plus jeune.", es:"Ella lamenta no haber viajado cuando era más joven."},
    {fr:"J'aurais aimé prendre cette décision plus tôt.", es:"Me hubiera gustado tomar esta decisión antes."},
    {fr:"Si seulement on avait su à quel point ce serait difficile.", es:"Si hubiéramos sabido lo difícil que sería."},
    {fr:"Il aimerait avoir accepté cette offre, maintenant qu'il y repense.", es:"Le gustaría haber aceptado esa oferta, ahora que lo piensa."},
    {fr:"J'aurais préféré ne jamais démissionner de ce poste.", es:"Hubiera preferido no dimitir nunca de ese puesto."},
    {fr:"On ne peut pas changer le passé, mais on peut en tirer des leçons.", es:"No podemos cambiar el pasado, pero podemos aprender de él."},
    {fr:"Si seulement j'avais pris le temps d'y réfléchir davantage.", es:"Si hubiera dedicado más tiempo a pensarlo."},
    {fr:"Avec le recul, j'aurais fait les choses différemment.", es:"Visto en retrospectiva, habría hecho las cosas de otra manera."}
  ], tip:{
    title:"«Ojalá» + pluscuamperfecto de subjuntivo para el arrepentimiento",
    example:"Ojalá hubiera estudiado otra carrera. — <b>Ojalá hubiera estudiado</b>.",
    body:"Para lamentar algo que pasó (o no pasó) en el pasado, el español usa «ojalá» (o «si seulement») seguido del pluscuamperfecto de subjuntivo: «hubiera + participio»: «Ojalá hubiera sabido», «Ojalá no hubiera dicho eso». Es el equivalente exacto de «si seulement» en francés."
  }},
 { title:"Gérer son budget", phrases:[
    {fr:"Nos dépenses sont suivies automatiquement par cette application.", es:"Nuestros gastos son controlados automáticamente por esta aplicación."},
    {fr:"Le loyer est payé directement depuis mon compte chaque mois.", es:"El alquiler se paga directamente desde mi cuenta cada mes."},
    {fr:"Ce budget a été pensé pour durer toute l'année.", es:"Este presupuesto fue pensado para durar todo el año."},
    {fr:"Les factures sont généralement envoyées en début de mois.", es:"Las facturas suelen enviarse a principios de mes."},
    {fr:"Cet achat n'avait pas du tout été prévu dans le budget.", es:"Esta compra no estaba prevista en absoluto en el presupuesto."},
    {fr:"Une partie de nos économies est investie chaque trimestre.", es:"Una parte de nuestros ahorros se invierte cada trimestre."},
    {fr:"Ce genre de dépense devrait toujours être évité si possible.", es:"Este tipo de gasto debería evitarse siempre que sea posible."},
    {fr:"Le compte a été vérifié deux fois avant d'être validé.", es:"La cuenta fue revisada dos veces antes de validarse."},
    {fr:"Cette dette sera entièrement remboursée d'ici deux ans.", es:"Esta deuda quedará completamente pagada dentro de dos años."},
    {fr:"Rien n'est laissé au hasard quand il s'agit d'argent.", es:"No se deja nada al azar cuando se trata de dinero."}
  ], tip:{
    title:"La voz pasiva con «ser» y el «se» pasivo",
    example:"Nuestros gastos son controlados por esta aplicación. — Nuestros gastos <b>son controlados</b>.",
    body:"La voz pasiva pone el foco en la acción, no en quién la realiza. Con «ser»: sujeto + ser + participio (+ «por» + agente): «Las facturas son enviadas por el banco». El español usa a menudo, en su lugar, el «se» pasivo: «Las facturas se envían a principio de mes», más natural y frecuente en el habla cotidiana."
  }},
 { title:"Rénover sa maison", phrases:[
    {fr:"On travaille sur ce projet de rénovation depuis plusieurs mois maintenant.", es:"Llevamos varios meses trabajando en este proyecto de reforma."},
    {fr:"L'artisan répare la cuisine depuis le début de la semaine.", es:"El operario lleva arreglando la cocina desde principios de semana."},
    {fr:"On attend la livraison des meubles depuis trois semaines.", es:"Llevamos tres semanas esperando la entrega de los muebles."},
    {fr:"Je choisis les couleurs depuis des heures sans arriver à me décider.", es:"Llevo horas eligiendo los colores sin lograr decidirme."},
    {fr:"Les ouvriers travaillent sans interruption depuis ce matin.", es:"Los obreros llevan trabajando sin parar desde esta mañana."},
    {fr:"On économise pour ces travaux depuis plus d'un an.", es:"Llevamos más de un año ahorrando para estas obras."},
    {fr:"Le chantier traîne un peu plus que prévu, honnêtement.", es:"La obra se está alargando un poco más de lo previsto, sinceramente."},
    {fr:"On vit au milieu des cartons depuis le début des travaux.", es:"Llevamos viviendo entre cajas desde que empezaron las obras."},
    {fr:"Je rêve de cette nouvelle cuisine depuis si longtemps.", es:"Llevo tanto tiempo soñando con esta cocina nueva."},
    {fr:"Ça vaudra vraiment le coup, une fois terminé.", es:"Merecerá mucho la pena, una vez terminado."}
  ], tip:{
    title:"«Llevar + gerundio» para una acción que continúa",
    example:"Llevamos varios meses trabajando en este proyecto. — <b>Llevamos</b> varios meses <b>trabajando</b>.",
    body:"«Llevar + cantidad de tiempo + gerundio» describe una acción empezada en el pasado que todavía continúa, insistiendo en su duración: «Llevo una hora esperando» (= hace una hora que espero, y sigo esperando). Es la construcción española más natural donde el francés usaría «depuis» con el presente."
  }},
 { title:"S'organiser au quotidien", phrases:[
    {fr:"Je n'arrive jamais à me débarrasser de mes vieux papiers.", es:"Nunca consigo deshacerme de mis papeles viejos."},
    {fr:"Il faut vraiment que je m'occupe de ce dossier aujourd'hui.", es:"Realmente tengo que ocuparme de este expediente hoy."},
    {fr:"On a fini par se débrouiller sans aide extérieure.", es:"Al final nos las apañamos sin ayuda externa."},
    {fr:"Je remets toujours ça à plus tard, c'est un vrai problème.", es:"Siempre lo dejo para más tarde, es un problema de verdad."},
    {fr:"Il faut que je mette de côté un peu de temps chaque semaine.", es:"Tengo que reservar un poco de tiempo cada semana."},
    {fr:"On s'y est enfin mis sérieusement ce weekend.", es:"Por fin nos pusimos en serio este fin de semana."},
    {fr:"Je n'arrive pas à me motiver à ranger ce garage.", es:"No consigo motivarme para ordenar el garaje."},
    {fr:"Il a fallu que je m'en occupe moi-même, personne d'autre ne le ferait.", es:"Tuve que encargarme yo mismo, nadie más lo iba a hacer."},
    {fr:"On finit toujours par trouver une solution, d'une manière ou d'une autre.", es:"Siempre terminamos encontrando una solución, de una forma u otra."},
    {fr:"Ça fait du bien de se débarrasser de ce qu'on n'utilise plus.", es:"Sienta bien deshacerse de lo que ya no se usa."}
  ], tip:{
    title:"Verbos con preposición del día a día",
    example:"Nunca consigo deshacerme de mis papeles viejos. — Nunca consigo <b>deshacerme de</b> mis papeles.",
    body:"Igual que los «phrasal verbs» en inglés, el español tiene muchos verbos (a menudo pronominales) cuyo sentido cambia con la preposición: «deshacerse de» (se débarrasser de), «ocuparse de» (s'occuper de), «ponerse a» (se mettre à), «encargarse de» (prendre en charge), «acabar/terminar por» (finir par). Conviene aprenderlos como bloques enteros."
  }},
 { title:"Déclarer ses impôts", phrases:[
    {fr:"Ce formulaire doit être rempli avant la fin du mois.", es:"Este formulario debe rellenarse antes de fin de mes."},
    {fr:"Si j'avais commencé plus tôt, je ne serais pas aussi stressé maintenant.", es:"Si hubiera empezado antes, no estaría tan estresado ahora."},
    {fr:"Certains documents sont encore demandés par l'administration.", es:"La administración todavía solicita algunos documentos."},
    {fr:"J'aurais aimé comprendre ce système plus facilement.", es:"Me hubiera gustado entender este sistema más fácilmente."},
    {fr:"Ce genre de démarche est souvent compliqué sans aide.", es:"Este tipo de trámite suele ser complicado sin ayuda."},
    {fr:"On m'a recommandé de garder tous mes justificatifs.", es:"Me recomendaron guardar todos mis justificantes."},
    {fr:"Si tout était plus simple, les gens feraient moins d'erreurs.", es:"Si todo fuera más sencillo, la gente cometería menos errores."},
    {fr:"Cette déclaration est vérifiée automatiquement par le système.", es:"Esta declaración se verifica automáticamente por el sistema."},
    {fr:"Je m'en occupe depuis des heures et je ne suis toujours pas sûr.", es:"Llevo horas ocupándome de esto y todavía no estoy seguro."},
    {fr:"Au moins, c'est fait pour cette année.", es:"Al menos ya está hecho por este año."}
  ]},
 { title:"Faire du bénévolat", phrases:[
    {fr:"Je me suis engagé dans cette association il y a deux ans.", es:"Me comprometí con esta asociación hace dos años."},
    {fr:"On aide des familles dans le besoin chaque weekend.", es:"Ayudamos a familias necesitadas cada fin de semana."},
    {fr:"Ça m'apporte énormément, bien plus que je ne l'imaginais.", es:"Me aporta muchísimo, mucho más de lo que imaginaba."},
    {fr:"Les repas sont préparés par des bénévoles chaque matin.", es:"Las comidas las preparan voluntarios cada mañana."},
    {fr:"Si je n'avais pas essayé, je n'aurais jamais su à quel point ça me plairait.", es:"Si no lo hubiera probado, nunca habría sabido cuánto me gustaría."},
    {fr:"On collecte des dons depuis le début de l'année.", es:"Llevamos recogiendo donaciones desde principios de año."},
    {fr:"J'aimerais avoir plus de temps libre à y consacrer.", es:"Me gustaría tener más tiempo libre para dedicarle."},
    {fr:"Chaque petit geste compte énormément pour ces familles.", es:"Cada pequeño gesto cuenta muchísimo para estas familias."},
    {fr:"Je recommande vraiment à tout le monde d'essayer, au moins une fois.", es:"Recomiendo de verdad a todo el mundo que lo intente, al menos una vez."},
    {fr:"Ça change complètement la façon dont on voit les choses.", es:"Cambia por completo la forma en que uno ve las cosas."}
  ]},
 { title:"Résoudre un conflit au travail", phrases:[
    {fr:"Si on en avait parlé plus tôt, ça ne serait jamais allé aussi loin.", es:"Si lo hubiéramos hablado antes, nunca habría llegado tan lejos."},
    {fr:"Cette décision a été prise sans qu'on soit consultés.", es:"Esta decisión se tomó sin que nos consultaran."},
    {fr:"J'aurais préféré être mis au courant avant tout le monde.", es:"Hubiera preferido que me informaran antes que a los demás."},
    {fr:"On s'est finalement mis d'accord sur un compromis raisonnable.", es:"Al final llegamos a un acuerdo razonable."},
    {fr:"Le malentendu a été réglé lors d'une réunion la semaine dernière.", es:"El malentendido se resolvió en una reunión la semana pasada."},
    {fr:"Si j'étais toi, je laisserais tomber et passerais à autre chose.", es:"Si yo fuera tú, lo dejaría estar y pasaría a otra cosa."},
    {fr:"Cette tension est présente depuis plusieurs semaines maintenant.", es:"Esta tensión lleva presente varias semanas ya."},
    {fr:"J'aurais aimé que les choses se passent autrement.", es:"Me hubiera gustado que las cosas pasaran de otra manera."},
    {fr:"Au final, tout le monde a su rester professionnel.", es:"Al final, todos supieron mantener la profesionalidad."},
    {fr:"On en est sortis plus soudés qu'avant, je trouve.", es:"Creo que salimos de esto más unidos que antes."}
  ]},
 { title:"Équilibrer vie professionnelle et personnelle", phrases:[
    {fr:"Je travaille depuis chez moi deux jours par semaine maintenant.", es:"Ahora trabajo desde casa dos días a la semana."},
    {fr:"Si j'avais su plus tôt à quel point c'était important, j'aurais changé bien avant.", es:"Si hubiera sabido antes lo importante que era, habría cambiado mucho antes."},
    {fr:"Mes horaires ont été aménagés par mon employeur.", es:"Mi horario fue adaptado por mi empresa."},
    {fr:"On remarque enfin les effets positifs sur ma famille.", es:"Por fin se notan los efectos positivos en mi familia."},
    {fr:"J'aurais aimé apprendre à mieux déconnecter plus tôt dans ma carrière.", es:"Me hubiera gustado aprender a desconectar mejor antes en mi carrera."},
    {fr:"Cette nouvelle organisation a été mise en place il y a trois mois.", es:"Esta nueva organización se implantó hace tres meses."},
    {fr:"Je laisse tomber mon téléphone professionnel le weekend, désormais.", es:"Ahora dejo el móvil de trabajo de lado los fines de semana."},
    {fr:"Si ce changement n'avait pas eu lieu, je serais probablement épuisé aujourd'hui.", es:"Si este cambio no hubiera ocurrido, probablemente estaría agotado hoy."},
    {fr:"On consacre vraiment plus de temps à ce qui compte.", es:"Dedicamos de verdad más tiempo a lo que importa."},
    {fr:"Ce n'est jamais parfait, mais c'est bien mieux qu'avant.", es:"Nunca es perfecto, pero es mucho mejor que antes."}
  ]},
 { title:"Déménager dans une nouvelle ville", phrases:[
    {fr:"Si on n'avait pas pris ce risque, on ne l'aurait jamais su.", es:"Si no hubiéramos corrido ese riesgo, nunca lo habríamos sabido."},
    {fr:"Tous nos meubles ont été transportés par la même entreprise.", es:"Todos nuestros muebles fueron transportados por la misma empresa."},
    {fr:"Je cherche un nouvel appartement depuis plus d'un mois.", es:"Llevo más de un mes buscando un piso nuevo."},
    {fr:"J'aurais aimé connaître quelqu'un ici avant d'arriver.", es:"Me hubiera gustado conocer a alguien aquí antes de llegar."},
    {fr:"Cette ville a été entièrement transformée ces dernières années.", es:"Esta ciudad se ha transformado por completo en los últimos años."},
    {fr:"Si tout se passe bien, on s'installera définitivement ici.", es:"Si todo va bien, nos instalaremos aquí de forma definitiva."},
    {fr:"On s'habitue petit à petit à ce nouveau rythme de vie.", es:"Poco a poco nos acostumbramos a este nuevo ritmo de vida."},
    {fr:"J'essaie de me faire de nouveaux amis depuis notre arrivée.", es:"Intento hacer nuevos amigos desde que llegamos."},
    {fr:"Si j'avais hésité plus longtemps, l'opportunité serait passée.", es:"Si hubiera dudado más tiempo, la oportunidad habría pasado."},
    {fr:"Au final, on ne regrette absolument pas ce choix.", es:"Al final, no nos arrepentimos en absoluto de esta decisión."}
  ]},
 { title:"Apprendre une nouvelle compétence à l'âge adulte", phrases:[
    {fr:"Je prends des cours de poterie depuis le début de l'année.", es:"Llevo tomando clases de cerámica desde principios de año."},
    {fr:"Si j'avais commencé plus tôt, je serais sans doute bien meilleur aujourd'hui.", es:"Si hubiera empezado antes, probablemente sería mucho mejor hoy."},
    {fr:"Cette compétence n'est jamais trop tard à apprendre, j'imagine.", es:"Supongo que nunca es demasiado tarde para aprender esta habilidad."},
    {fr:"Mes progrès sont suivis chaque semaine par mon professeur.", es:"Mi profesor sigue mis progresos cada semana."},
    {fr:"J'aurais aimé essayer ça il y a des années.", es:"Me hubiera gustado probar esto hace años."},
    {fr:"On apprend énormément en se trompant, finalement.", es:"Al final, se aprende muchísimo equivocándose."},
    {fr:"Je m'entraîne depuis des semaines et je commence enfin à voir des résultats.", es:"Llevo semanas entrenando y por fin empiezo a ver resultados."},
    {fr:"Si on ne sort jamais de sa zone de confort, on n'apprend jamais rien.", es:"Si nunca se sale de la zona de confort, nunca se aprende nada."},
    {fr:"Ça demande beaucoup de patience, mais ça en vaut la peine.", es:"Requiere mucha paciencia, pero merece la pena."},
    {fr:"Je suis vraiment fier du chemin parcouru jusqu'ici.", es:"Estoy muy orgulloso del camino recorrido hasta aquí."}
  ]},
 { title:"Faire face à un voisin difficile", phrases:[
    {fr:"Ce bruit est entendu dans tout l'immeuble chaque soir.", es:"Ese ruido se oye en todo el edificio cada noche."},
    {fr:"Si j'avais su que ce serait si compliqué, j'aurais choisi un autre appartement.", es:"Si hubiera sabido que sería tan complicado, habría elegido otro piso."},
    {fr:"On essaie de rester polis, même quand c'est difficile.", es:"Intentamos mantener la educación, incluso cuando es difícil."},
    {fr:"Cette situation a été signalée au syndic la semaine dernière.", es:"Esta situación fue comunicada a la comunidad la semana pasada."},
    {fr:"J'aurais préféré régler ça directement avec lui, sans tiers.", es:"Hubiera preferido arreglarlo directamente con él, sin terceros."},
    {fr:"On supporte ce bruit depuis plusieurs mois maintenant.", es:"Llevamos aguantando este ruido varios meses ya."},
    {fr:"Si les choses ne changent pas, on devra agir autrement.", es:"Si las cosas no cambian, tendremos que actuar de otra manera."},
    {fr:"Une lettre officielle a finalement été envoyée par l'agence.", es:"Finalmente la agencia envió una carta oficial."},
    {fr:"On espère que ça va enfin se calmer un peu.", es:"Esperamos que por fin se calme un poco."},
    {fr:"Vivre en communauté demande parfois beaucoup de patience.", es:"Vivir en comunidad exige a veces mucha paciencia."}
  ]},
 { title:"Planifier un grand changement de vie", phrases:[
    {fr:"Si j'avais plus de certitudes, je me lancerais sans hésiter.", es:"Si tuviera más certezas, me lanzaría sin dudarlo."},
    {fr:"On y réfléchit sérieusement depuis le début de l'année.", es:"Llevamos pensándolo en serio desde principios de año."},
    {fr:"Ce genre de décision ne devrait jamais être prise à la légère.", es:"Este tipo de decisión nunca debería tomarse a la ligera."},
    {fr:"J'aurais aimé avoir ce courage bien plus tôt dans ma vie.", es:"Me hubiera gustado tener ese valor mucho antes en mi vida."},
    {fr:"Si tout se passe comme prévu, on changera complètement de vie l'année prochaine.", es:"Si todo va según lo previsto, cambiaremos de vida por completo el año que viene."},
    {fr:"Cette opportunité ne sera peut-être jamais revue.", es:"Quizá esta oportunidad no vuelva a presentarse nunca."},
    {fr:"On en parle avec nos proches depuis des semaines.", es:"Llevamos semanas hablándolo con nuestros allegados."},
    {fr:"Si on ne tente rien, on ne saura jamais ce qu'on aurait pu accomplir.", es:"Si no intentamos nada, nunca sabremos lo que habríamos podido lograr."},
    {fr:"Chaque grand changement a toujours commencé par une petite décision.", es:"Todo gran cambio siempre empezó con una pequeña decisión."},
    {fr:"On a enfin décidé de sauter le pas.", es:"Por fin decidimos dar el paso."}
  ]},
 { title:"Gérer le stress du quotidien", phrases:[
    {fr:"Je médite quelques minutes chaque matin depuis trois mois.", es:"Llevo tres meses meditando unos minutos cada mañana."},
    {fr:"Si je n'avais pas appris à ralentir, je serais sans doute épuisé.", es:"Si no hubiera aprendido a ir más despacio, probablemente estaría agotado."},
    {fr:"Ces techniques de respiration m'ont été recommandées par un ami.", es:"Estas técnicas de respiración me las recomendó un amigo."},
    {fr:"J'aurais aimé découvrir ça bien plus tôt.", es:"Me hubiera gustado descubrir esto mucho antes."},
    {fr:"On sous-estime souvent l'impact du stress sur la santé.", es:"A menudo se subestima el impacto del estrés en la salud."},
    {fr:"Je mets de côté un peu de temps pour moi chaque jour, désormais.", es:"Ahora reservo un poco de tiempo para mí cada día."},
    {fr:"Si j'avais continué comme avant, ça aurait fini par poser un vrai problème.", es:"Si hubiera seguido como antes, habría terminado siendo un problema de verdad."},
    {fr:"Certaines habitudes ont été complètement changées cette année.", es:"Algunos hábitos se cambiaron por completo este año."},
    {fr:"On apprend petit à petit à mieux gérer la pression.", es:"Poco a poco aprendemos a gestionar mejor la presión."},
    {fr:"Ça ne résout pas tout, mais ça aide vraiment énormément.", es:"No lo soluciona todo, pero ayuda muchísimo de verdad."}
  ]},
 { title:"Transmettre une compétence à quelqu'un", phrases:[
    {fr:"J'apprends à mon neveu à cuisiner depuis cet été.", es:"Llevo desde este verano enseñando a cocinar a mi sobrino."},
    {fr:"Si j'avais eu ce mentor plus tôt, j'aurais progressé bien plus vite.", es:"Si hubiera tenido este mentor antes, habría progresado mucho más rápido."},
    {fr:"Chaque erreur est expliquée calmement, sans jamais juger.", es:"Cada error se explica con calma, sin juzgar nunca."},
    {fr:"J'aurais aimé avoir quelqu'un pour me guider à son âge.", es:"Me hubiera gustado tener a alguien que me guiara a su edad."},
    {fr:"On apprend souvent autant en enseignant qu'en étant enseigné.", es:"A menudo se aprende tanto enseñando como siendo enseñado."},
    {fr:"Cette patience a été cultivée au fil de nombreuses années.", es:"Esta paciencia se ha cultivado a lo largo de muchos años."},
    {fr:"Si je n'expliquais pas les choses clairement, il se découragerait vite.", es:"Si no explicara las cosas con claridad, él se desanimaría rápido."},
    {fr:"Voir ses progrès me rend vraiment fier.", es:"Ver sus progresos me llena de orgullo."},
    {fr:"Transmettre ce qu'on sait, c'est aussi une façon de le faire perdurer.", es:"Transmitir lo que uno sabe es también una forma de hacerlo perdurar."},
    {fr:"J'espère qu'il transmettra ça à son tour, un jour.", es:"Espero que algún día él también lo transmita."}
  ]},
 { title:"Faire face à une démarche administrative", phrases:[
    {fr:"Ce document doit être signé en présence d'un officiel.", es:"Este documento debe firmarse en presencia de un funcionario."},
    {fr:"Si j'avais apporté tous les papiers du premier coup, ça aurait été réglé plus vite.", es:"Si hubiera traído todos los papeles la primera vez, se habría resuelto más rápido."},
    {fr:"On m'a demandé de revenir avec une pièce d'identité supplémentaire.", es:"Me pidieron volver con un documento de identidad adicional."},
    {fr:"J'aurais préféré faire tout ça en ligne, franchement.", es:"Francamente, hubiera preferido hacer todo esto en línea."},
    {fr:"Cette demande est traitée généralement sous quinze jours.", es:"Esta solicitud normalmente se tramita en quince días."},
    {fr:"On attend une réponse depuis presque un mois maintenant.", es:"Llevamos casi un mes esperando una respuesta."},
    {fr:"Si le système était plus simple, tout le monde gagnerait du temps.", es:"Si el sistema fuera más sencillo, todos ganarían tiempo."},
    {fr:"Le dossier a finalement été approuvé hier après-midi.", es:"El expediente finalmente se aprobó ayer por la tarde."},
    {fr:"Quel soulagement d'en avoir enfin terminé avec tout ça.", es:"Qué alivio haber terminado por fin con todo esto."},
    {fr:"On ne réalise jamais à quel point c'est compliqué avant de le vivre.", es:"Nunca se dan cuenta de lo complicado que es hasta que se vive."}
  ]},
 { title:"Repenser ses habitudes de consommation", phrases:[
    {fr:"J'achète beaucoup moins d'objets neufs depuis l'année dernière.", es:"Compro muchas menos cosas nuevas desde el año pasado."},
    {fr:"Si j'avais réfléchi avant, j'aurais économisé beaucoup d'argent.", es:"Si lo hubiera pensado antes, habría ahorrado mucho dinero."},
    {fr:"La plupart de mes vêtements sont désormais achetés d'occasion.", es:"La mayoría de mi ropa ahora se compra de segunda mano."},
    {fr:"J'aurais aimé adopter ces habitudes bien plus tôt.", es:"Me hubiera gustado adoptar estos hábitos mucho antes."},
    {fr:"On réfléchit à deux fois avant chaque achat, maintenant.", es:"Ahora nos lo pensamos dos veces antes de cada compra."},
    {fr:"Cette évolution a été progressive, pas du jour au lendemain.", es:"Este cambio fue progresivo, no de la noche a la mañana."},
    {fr:"Si tout le monde faisait un petit effort, ça changerait beaucoup de choses.", es:"Si todo el mundo hiciera un pequeño esfuerzo, cambiarían muchas cosas."},
    {fr:"On se sent beaucoup plus légers depuis qu'on a moins d'objets.", es:"Nos sentimos mucho más ligeros desde que tenemos menos cosas."},
    {fr:"Ce changement a aussi eu un bon impact sur notre budget.", es:"Este cambio también ha tenido un buen impacto en nuestro presupuesto."},
    {fr:"On ne reviendrait pas en arrière pour rien au monde.", es:"No volveríamos atrás por nada del mundo."}
  ]},
 { title:"Négocier une augmentation", phrases:[
    {fr:"Si je n'avais jamais demandé, je n'aurais jamais rien obtenu.", es:"Si nunca lo hubiera pedido, nunca habría conseguido nada."},
    {fr:"Ce chiffre a été calculé en fonction de mes résultats cette année.", es:"Esta cifra se calculó en función de mis resultados este año."},
    {fr:"J'aurais aimé aborder ce sujet bien plus tôt avec mon manager.", es:"Me hubiera gustado hablar de esto mucho antes con mi jefe."},
    {fr:"On m'a conseillé de préparer des exemples concrets avant d'y aller.", es:"Me aconsejaron preparar ejemplos concretos antes de ir."},
    {fr:"Si je n'obtiens pas de réponse claire, je reviendrai à la charge plus tard.", es:"Si no obtengo una respuesta clara, volveré a insistir más adelante."},
    {fr:"Cette demande a été prise très au sérieux par la direction.", es:"La dirección se tomó esta solicitud muy en serio."},
    {fr:"J'ai préparé cet entretien depuis plusieurs semaines.", es:"Llevo varias semanas preparando esta entrevista."},
    {fr:"Si j'avais plus confiance en moi, ce serait sans doute plus simple.", es:"Si tuviera más confianza en mí mismo, sin duda sería más fácil."},
    {fr:"On m'a enfin proposé une augmentation correcte.", es:"Por fin me ofrecieron un aumento decente."},
    {fr:"Tout ce travail de préparation a fini par payer.", es:"Todo ese trabajo de preparación finalmente dio resultado."}
  ]},
 { title:"S'adapter à un nouvel outil au travail", phrases:[
    {fr:"Ce logiciel est utilisé par toute l'équipe depuis le mois dernier.", es:"Todo el equipo utiliza este programa desde el mes pasado."},
    {fr:"Si on nous avait mieux formés, la transition aurait été plus simple.", es:"Si nos hubieran formado mejor, la transición habría sido más sencilla."},
    {fr:"J'apprends encore de nouvelles fonctionnalités chaque semaine.", es:"Todavía aprendo funciones nuevas cada semana."},
    {fr:"J'aurais aimé avoir ce genre d'outil bien plus tôt dans ma carrière.", es:"Me hubiera gustado tener esta herramienta mucho antes en mi carrera."},
    {fr:"Toutes les données ont été transférées sans aucun problème.", es:"Todos los datos se transfirieron sin ningún problema."},
    {fr:"Si quelque chose ne fonctionne pas, le support technique est très réactif.", es:"Si algo no funciona, el soporte técnico responde muy rápido."},
    {fr:"On s'habitue petit à petit à cette nouvelle façon de travailler.", es:"Poco a poco nos acostumbramos a esta nueva forma de trabajar."},
    {fr:"Ça nous fait gagner un temps précieux chaque jour, en réalité.", es:"En realidad, nos ahorra un tiempo valioso cada día."},
    {fr:"Certains collègues ont eu plus de mal à s'y habituer que d'autres.", es:"A algunos compañeros les costó más acostumbrarse que a otros."},
    {fr:"Avec le recul, ce changement était vraiment nécessaire.", es:"Visto con perspectiva, este cambio era realmente necesario."}
  ]},
 { title:"Bilan du module quotidien, niveau 3", phrases:[
    {fr:"Ce module nous a appris à parler de situations bien plus nuancées.", es:"Este módulo nos ha enseñado a hablar de situaciones mucho más matizadas."},
    {fr:"On sait désormais exprimer des regrets et des hypothèses avec aisance.", es:"Ahora sabemos expresar arrepentimientos e hipótesis con soltura."},
    {fr:"Ces structures demandent de la pratique, mais deviennent vite naturelles.", es:"Estas estructuras requieren práctica, pero enseguida resultan naturales."},
    {fr:"Chaque situation du quotidien devient une occasion de progresser.", es:"Cada situación cotidiana se convierte en una ocasión para progresar."},
    {fr:"Si tu es arrivé jusqu'ici, c'est que tu as fait d'énormes progrès.", es:"Si has llegado hasta aquí, es que has hecho enormes progresos."},
    {fr:"N'hésite pas à revenir sur ces leçons autant que nécessaire.", es:"No dudes en repasar estas lecciones tantas veces como necesites."},
    {fr:"Le niveau 3 commence vraiment à ressembler à de l'espagnol courant.", es:"El nivel 3 realmente empieza a parecerse al español fluido."},
    {fr:"Bravo, tu as terminé le module « Le quotidien » du niveau 3 !", es:"¡Enhorabuena, has terminado el módulo «La vida diaria» del nivel 3!"},
    {fr:"Deux autres modules t'attendent pour continuer sur ta lancée.", es:"Te esperan otros dos módulos para seguir avanzando."},
    {fr:"On se retrouve très vite pour la suite.", es:"Nos vemos muy pronto para continuar."}
  ]}
];

const level3Module2Lessons = [
 { title:"Un vol annulé à la dernière minute", phrases:[
    {fr:"Si j'avais vérifié mes mails plus tôt, je l'aurais su avant d'arriver à l'aéroport.", es:"Si hubiera revisado mis correos antes, lo habría sabido antes de llegar al aeropuerto."},
    {fr:"Le vol a été annulé sans aucune explication claire.", es:"El vuelo fue cancelado sin ninguna explicación clara."},
    {fr:"Si on n'avait pas une assurance voyage, on serait dans une situation bien pire.", es:"Si no tuviéramos un seguro de viaje, estaríamos en una situación mucho peor."},
    {fr:"Tous les passagers ont été redirigés vers un autre terminal.", es:"Todos los pasajeros fueron redirigidos a otra terminal."},
    {fr:"Debout dans cette file depuis des heures, je commençais à perdre patience.", es:"De pie en esta cola desde hacía horas, empezaba a perder la paciencia."},
    {fr:"Si j'avais réservé un vol plus tôt dans la journée, ça ne serait jamais arrivé.", es:"Si hubiera reservado un vuelo más temprano, esto nunca habría pasado."},
    {fr:"Un hôtel nous a finalement été proposé par la compagnie.", es:"Finalmente la compañía nos ofreció un hotel."},
    {fr:"Épuisés par cette longue attente, on a fini par accepter n'importe quelle solution.", es:"Agotados por esta larga espera, acabamos aceptando cualquier solución."},
    {fr:"Si tout s'était passé comme prévu, on serait déjà arrivés à destination.", es:"Si todo hubiera salido según lo previsto, ya habríamos llegado a nuestro destino."},
    {fr:"Au moins, une leçon a été apprise pour la prochaine fois.", es:"Al menos se aprendió una lección para la próxima vez."}
  ], tip:{
    title:"El condicional mixto: pluscuamperfecto de subjuntivo + condicional simple",
    example:"Si no hubiéramos tenido seguro de viaje, estaríamos en una situación mucho peor ahora. — Si <b>hubiéramos tenido</b>, <b>estaríamos</b>.",
    body:"El condicional mixto combina una condición pasada con una consecuencia en el presente: «si» + pluscuamperfecto de subjuntivo (hubiera + participio) describe el pasado, mientras el condicional simple (estaríamos, tendría) describe cómo sería la situación ahora. Es muy útil para enlazar un hecho pasado con sus efectos actuales."
  }},
 { title:"Visiter un site historique", phrases:[
    {fr:"Ce château a été construit il y a plus de six cents ans.", es:"Este castillo fue construido hace más de seiscientos años."},
    {fr:"Les ruines ont été découvertes par hasard au siècle dernier.", es:"Las ruinas fueron descubiertas por casualidad el siglo pasado."},
    {fr:"Debout devant ces vestiges, on ressentait vraiment le poids de l'histoire.", es:"De pie ante estos vestigios, sentíamos de verdad el peso de la historia."},
    {fr:"Cette fresque a été restaurée avec un soin incroyable.", es:"Este fresco fue restaurado con un cuidado increíble."},
    {fr:"Le site est visité chaque année par des millions de touristes.", es:"El yacimiento es visitado cada año por millones de turistas."},
    {fr:"Marchant dans ces anciennes rues, on imaginait facilement la vie d'autrefois.", es:"Caminando por estas calles antiguas de la Alcazaba de Málaga, imaginábamos fácilmente la vida de antaño."},
    {fr:"Certaines parties du monument n'ont jamais été entièrement expliquées.", es:"Algunas partes del monumento nunca han sido explicadas del todo."},
    {fr:"Ce genre de lieu ne laisse jamais indifférent.", es:"Este tipo de lugar nunca deja indiferente."},
    {fr:"Si peu de touristes visitaient ce coin-ci qu'on s'y sentait presque seuls.", es:"Visitaban esta zona tan pocos turistas que casi nos sentíamos solos."},
    {fr:"On en garde un souvenir qui ne s'effacera jamais vraiment.", es:"Nos queda un recuerdo que nunca se borrará del todo."}
  ], tip:{
    title:"El gerundio en posición inicial",
    example:"Caminando por estas calles antiguas, imaginábamos la vida de antaño. — <b>Caminando</b> por estas calles...",
    body:"El gerundio al principio de la frase sustituye a una proposición de tiempo o de causa, dando un estilo más fluido y literario: «Caminando por las calles, descubrimos...» en lugar de «Mientras caminábamos...». Es muy habitual en los relatos de viaje."
  }},
 { title:"Faire face à un vol de bagages", phrases:[
    {fr:"Mon sac avait été laissé sans surveillance à peine deux minutes.", es:"Mi bolso había quedado sin vigilancia apenas dos minutos."},
    {fr:"Si j'avais gardé un œil dessus, rien de tout ça ne serait arrivé.", es:"Si le hubiera echado un ojo, nada de esto habría pasado."},
    {fr:"Le vol a été signalé à la police locale dans l'heure.", es:"El robo se denunció a la policía local dentro de la hora."},
    {fr:"Debout face à l'officier, j'essayais de me souvenir de chaque détail.", es:"De pie frente al agente, intentaba recordar cada detalle."},
    {fr:"Heureusement, mes documents importants avaient été gardés sur moi.", es:"Por suerte, mis documentos importantes los llevaba encima."},
    {fr:"Si l'assurance ne couvrait pas ce genre d'incident, ce serait une vraie catastrophe.", es:"Si el seguro no cubriera este tipo de incidente, sería una verdadera catástrofe."},
    {fr:"Plusieurs autres touristes avaient apparemment vécu la même mésaventure.", es:"Al parecer, varios otros turistas habían vivido el mismo percance."},
    {fr:"Ça nous a appris à être bien plus vigilants désormais.", es:"Esto nos enseñó a ser mucho más precavidos desde entonces."},
    {fr:"Le reste du voyage a été géré sans l'équipement volé.", es:"El resto del viaje se gestionó sin el equipo robado."},
    {fr:"Au final, ce n'était qu'un objet, pas une vie gâchée.", es:"Al final, era solo un objeto, no una vida arruinada."}
  ]},
 { title:"S'immerger dans une culture très différente", phrases:[
    {fr:"Si on n'avait jamais quitté notre zone de confort, on n'aurait jamais compris ça.", es:"Si nunca hubiéramos salido de nuestra zona de confort, nunca habríamos entendido esto."},
    {fr:"Certaines coutumes locales nous ont été expliquées par notre hôte.", es:"Nuestro anfitrión nos explicó algunas costumbres locales."},
    {fr:"Assis par terre pour le repas, on se sentait un peu maladroits au début.", es:"Sentados en el suelo para comer, al principio nos sentíamos un poco torpes."},
    {fr:"Ce rituel est pratiqué dans cette région depuis des générations.", es:"Este ritual se practica en esta región desde hace generaciones."},
    {fr:"Si on avait jugé trop vite, on serait passés à côté de tellement de choses.", es:"Si hubiéramos juzgado demasiado rápido, nos habríamos perdido tantas cosas."},
    {fr:"Certains gestes ont dû être appris pour éviter d'offenser qui que ce soit.", es:"Tuvimos que aprender ciertos gestos para no ofender a nadie."},
    {fr:"Observant attentivement les habitants, on a fini par comprendre leurs habitudes.", es:"Observando con atención a los habitantes, acabamos entendiendo sus costumbres."},
    {fr:"Ce voyage nous a changés bien plus qu'on ne l'imaginait.", es:"Este viaje nos cambió mucho más de lo que imaginábamos."},
    {fr:"On a été accueillis avec une générosité qu'on n'oubliera jamais.", es:"Nos recibieron con una generosidad que nunca olvidaremos."},
    {fr:"Rentrer chez soi n'a jamais semblé aussi étrange qu'après ce voyage.", es:"Volver a casa nunca pareció tan extraño como después de este viaje."}
  ]},
 { title:"Gérer une situation d'urgence à l'étranger", phrases:[
    {fr:"Si on n'avait pas eu les numéros d'urgence sur nous, ça aurait été bien plus difficile.", es:"Si no hubiéramos tenido los números de emergencia encima, habría sido mucho más difícil."},
    {fr:"L'ambassade a été contactée dès que la situation est devenue claire.", es:"Se contactó con la embajada en cuanto la situación se aclaró."},
    {fr:"Assis dans la salle d'attente, on essayait de rester calmes malgré tout.", es:"Sentados en la sala de espera, intentábamos mantener la calma a pesar de todo."},
    {fr:"Cette procédure est généralement suivie dans ce genre de cas.", es:"Este procedimiento normalmente se sigue en este tipo de casos."},
    {fr:"Si personne ne parlait espagnol, on aurait vraiment été perdus.", es:"Si nadie hubiera hablado español, habríamos estado realmente perdidos."},
    {fr:"Heureusement, un interprète nous a été fourni assez rapidement.", es:"Por suerte, nos facilitaron un intérprete bastante rápido."},
    {fr:"Agissant vite, on a réussi à régler le problème en une journée.", es:"Actuando con rapidez, conseguimos resolver el problema en un día."},
    {fr:"Ce genre d'expérience teste vraiment les nerfs.", es:"Este tipo de experiencia pone los nervios a prueba de verdad."},
    {fr:"On en est ressortis avec encore plus de confiance en nous.", es:"Salimos de esto con todavía más confianza en nosotros mismos."},
    {fr:"Rarement un voyage ne nous a appris autant sur nous-mêmes.", es:"Pocas veces un viaje nos había enseñado tanto sobre nosotros mismos."}
  ], tip:{
    title:"La inversión estilística tras adverbios como «nunca», «jamás», «pocas veces»",
    example:"Pocas veces un viaje nos había enseñado tanto. — <b>Pocas veces</b> un viaje nos había enseñado tanto.",
    body:"Igual que en inglés, el español puede anteponer un adverbio negativo o restrictivo («nunca», «jamás», «pocas veces», «rara vez») al principio de la frase para dar más énfasis, sin necesidad de invertir sujeto y verbo como en inglés: «Jamás había visto algo así», «Pocas veces se ve tanta generosidad». Este estilo es más literario y se usa a menudo en los relatos."
  }},
 { title:"Choisir entre plusieurs destinations", phrases:[
    {fr:"Si j'avais plus de budget, j'irais directement en Asie du Sud-Est.", es:"Si tuviera más presupuesto, iría directamente a Barcelona y me quedaría un mes entero."},
    {fr:"Cette destination m'a été recommandée par plusieurs amis.", es:"Varios amigos me recomendaron este destino."},
    {fr:"Hésitant entre deux pays, j'ai fini par lancer une pièce.", es:"Dudando entre dos ciudades, al final acabé echándolo a cara o cruz."},
    {fr:"Si le climat n'était pas un facteur, ce choix serait bien plus simple.", es:"Si el clima no fuera un factor, esta elección sería mucho más sencilla."},
    {fr:"Chaque option a ses propres avantages et inconvénients.", es:"Cada opción tiene sus propias ventajas e inconvenientes."},
    {fr:"Les vols ont déjà été comparés sur plusieurs sites différents.", es:"Ya comparé los vuelos a Palma de Mallorca y a Málaga en varias webs distintas."},
    {fr:"Si l'argent n'était pas un problème, je visiterais tous ces endroits à la fois.", es:"Si el dinero no fuera un problema, visitaría todos estos lugares a la vez."},
    {fr:"Pesant le pour et le contre, j'ai enfin pris ma décision.", es:"Sopesando los pros y los contras, por fin tomé mi decisión."},
    {fr:"On ne peut jamais vraiment se tromper en voyageant, de toute façon.", es:"De todas formas, nunca se equivoca uno de verdad al viajar."},
    {fr:"Vivement la prochaine étape de ce périple.", es:"Con ganas de la próxima etapa de este periplo."}
  ]},
 { title:"Participer à un festival local", phrases:[
    {fr:"Si on n'avait pas vérifié le calendrier, on aurait complètement raté cet événement.", es:"Si no hubiéramos revisado el calendario, nos habríamos perdido este evento por completo."},
    {fr:"Ce festival est célébré ici depuis des siècles.", es:"Este festival se celebra aquí desde hace siglos."},
    {fr:"Entourés de couleurs et de musique, on s'est vite laissés emporter.", es:"Rodeados de colores y música, enseguida nos dejamos llevar."},
    {fr:"Certains costumes sont transmis de génération en génération.", es:"Algunos trajes se transmiten de generación en generación."},
    {fr:"Si on avait su à quel point c'était populaire, on serait arrivés bien plus tôt.", es:"Si hubiéramos sabido lo popular que era, habríamos llegado mucho antes."},
    {fr:"On nous a offert de la nourriture typique tout au long de la soirée.", es:"Nos ofrecieron comida típica durante toda la noche."},
    {fr:"Dansant au milieu de la foule, on s'est sentis complètement intégrés.", es:"Bailando en medio de la multitud, nos sentimos completamente integrados."},
    {fr:"Ce genre d'événement en dit long sur une culture.", es:"Este tipo de evento dice mucho sobre una cultura."},
    {fr:"Jamais on n'avait vu une telle énergie collective.", es:"Nunca habíamos visto una energía colectiva semejante."},
    {fr:"Ce souvenir restera gravé en nous pour très longtemps.", es:"Este recuerdo quedará grabado en nosotros durante mucho tiempo."}
  ]},
 { title:"Faire une randonnée exigeante", phrases:[
    {fr:"Si on n'avait pas aussi bien préparé notre équipement, on n'aurait jamais tenu.", es:"Si no hubiéramos preparado tan bien el equipo, nunca habríamos resistido."},
    {fr:"Le sentier avait été marqué seulement quelques années auparavant.", es:"El sendero había sido señalizado solo unos años antes."},
    {fr:"Grimpant depuis l'aube, on commençait vraiment à sentir la fatigue.", es:"Subiendo desde el amanecer, empezábamos a sentir el cansancio de verdad."},
    {fr:"Cette vue n'est accessible qu'après plusieurs heures d'effort.", es:"Esta vista solo es accesible tras varias horas de esfuerzo."},
    {fr:"Si la météo avait tourné, on aurait dû rebrousser chemin immédiatement.", es:"Si el tiempo hubiera cambiado, habríamos tenido que dar media vuelta de inmediato."},
    {fr:"Chaque pas semblait être récompensé par un paysage plus beau encore.", es:"Cada paso parecía premiado con un paisaje todavía más bonito."},
    {fr:"Essoufflés mais heureux, on a enfin atteint le sommet.", es:"Sin aliento pero felices, por fin llegamos a la cima."},
    {fr:"Rarement un effort physique n'a procuré une telle satisfaction.", es:"Pocas veces un esfuerzo físico nos había dado tanta satisfacción."},
    {fr:"Cette randonnée restera sans doute la plus dure de toute notre vie.", es:"Sin duda, esta ruta será la más dura de toda nuestra vida."},
    {fr:"On redescend fatigués, mais avec un sentiment d'accomplissement immense.", es:"Bajamos cansados, pero con una enorme sensación de logro."}
  ]},
 { title:"Se faire arnaquer et en tirer une leçon", phrases:[
    {fr:"Si j'avais été plus méfiant, je n'aurais jamais payé ce prix-là.", es:"Si hubiera sido más desconfiado, nunca habría pagado ese precio."},
    {fr:"Ce genre d'arnaque est malheureusement assez courant dans les zones touristiques.", es:"Este tipo de estafa, por desgracia, es bastante común en las zonas turísticas."},
    {fr:"Debout là, réalisant ce qui venait de se passer, je me sentais stupide.", es:"De pie allí, dándome cuenta de lo que acababa de pasar, me sentía estúpido."},
    {fr:"On m'avait pourtant prévenu de faire attention à ce genre de situation.", es:"Sin embargo, me habían avisado de que tuviera cuidado con este tipo de situación."},
    {fr:"Si je n'en avais pas parlé à d'autres voyageurs, je n'aurais jamais compris le piège.", es:"Si no lo hubiera comentado con otros viajeros, nunca habría entendido la trampa."},
    {fr:"Cette expérience, aussi désagréable soit-elle, m'a rendu plus prudent.", es:"Esta experiencia, por desagradable que sea, me ha vuelto más prudente."},
    {fr:"Ayant appris ma leçon, je vérifie désormais tout deux fois.", es:"Habiendo aprendido la lección, ahora lo compruebo todo dos veces."},
    {fr:"Ce genre de mésaventure arrive à presque tous les voyageurs un jour ou l'autre.", es:"Este tipo de percance le ocurre a casi todos los viajeros tarde o temprano."},
    {fr:"Au moins, ça ne m'a pas coûté une fortune.", es:"Al menos no me costó una fortuna."},
    {fr:"On en rit maintenant, mais sur le moment, ça n'avait rien de drôle.", es:"Ahora nos reímos de ello, pero en su momento no tenía nada de gracioso."}
  ]},
 { title:"Voyager seul pour la première fois", phrases:[
    {fr:"Si je n'avais jamais osé partir seul, je n'aurais jamais découvert cette force en moi.", es:"Si nunca me hubiera atrevido a viajar solo, nunca habría descubierto esa fuerza en mí."},
    {fr:"Ce voyage a été entièrement organisé par mes soins, du début à la fin.", es:"Este viaje lo organicé yo mismo por completo, de principio a fin."},
    {fr:"Marchant seul dans ces rues inconnues, j'ai ressenti une liberté incroyable.", es:"Caminando solo por estas calles desconocidas, sentí una libertad increíble."},
    {fr:"Chaque décision devait être prise sans l'avis de personne d'autre.", es:"Cada decisión había que tomarla sin la opinión de nadie más."},
    {fr:"Si j'avais eu peur, je serais probablement resté chez moi.", es:"Si hubiera tenido miedo, probablemente me habría quedado en casa."},
    {fr:"On rencontre des gens bien plus facilement quand on voyage seul.", es:"Se conoce a gente mucho más fácilmente cuando se viaja solo."},
    {fr:"Apprenant à me débrouiller seul, j'ai gagné une confiance que je n'avais jamais eue.", es:"Aprendiendo a apañármelas solo, gané una confianza que nunca había tenido."},
    {fr:"Jamais je ne m'étais senti aussi vivant qu'au cours de ce voyage.", es:"Nunca me había sentido tan vivo como durante este viaje."},
    {fr:"Ce genre d'expérience change durablement la façon dont on voit le monde.", es:"Este tipo de experiencia cambia de forma duradera la manera de ver el mundo."},
    {fr:"Je recommande ce voyage à quiconque hésite encore à se lancer.", es:"Recomiendo este viaje a quien todavía dude en lanzarse."}
  ]},
 { title:"Rentrer d'un long voyage", phrases:[
    {fr:"Si ce voyage n'avait duré qu'une semaine, rien de tout ça ne se serait passé.", es:"Si este viaje solo hubiera durado una semana, nada de esto habría pasado."},
    {fr:"Tant de souvenirs ont été accumulés en si peu de temps.", es:"Se acumularon tantos recuerdos en tan poco tiempo."},
    {fr:"Assis dans l'avion du retour, je réalisais à peine que c'était terminé.", es:"Sentado en el avión de vuelta, apenas me daba cuenta de que había terminado."},
    {fr:"Cette version de moi-même n'est plus tout à fait celle qui était partie.", es:"Esta versión de mí mismo ya no es del todo la que se marchó."},
    {fr:"Si je n'avais jamais quitté ma routine, je n'aurais jamais changé autant.", es:"Si nunca hubiera salido de mi rutina, nunca habría cambiado tanto."},
    {fr:"Certaines habitudes locales m'ont été si naturelles que j'ai du mal à les abandonner.", es:"Algunas costumbres locales me resultaron tan naturales que me cuesta dejarlas."},
    {fr:"Repensant à tout ce chemin parcouru, je me sens vraiment transformé.", es:"Pensando en todo el camino recorrido, me siento realmente transformado."},
    {fr:"Le décalage culturel au retour est presque plus fort que celui du départ.", es:"El choque cultural de vuelta es casi más fuerte que el de la ida."},
    {fr:"Ce voyage restera sans doute le tournant d'une bonne partie de ma vie.", es:"Sin duda, este viaje será el punto de inflexión de buena parte de mi vida."},
    {fr:"Déjà, une nouvelle destination me trotte dans la tête.", es:"Ya tengo un nuevo destino rondándome la cabeza."}
  ]},
 { title:"Partager son expérience de voyage avec des proches", phrases:[
    {fr:"Si je racontais tout en détail, on y passerait la nuit entière.", es:"Si lo contara todo con detalle, nos pasaríamos la noche entera."},
    {fr:"Ces photos ont été prises dans des endroits que je n'oublierai jamais.", es:"Estas fotos se tomaron en lugares que nunca olvidaré."},
    {fr:"Assis autour de la table, mes amis buvaient littéralement mes paroles.", es:"Sentados alrededor de la mesa, mis amigos literalmente bebían mis palabras."},
    {fr:"Certaines histoires semblent presque inventées tant elles sont incroyables.", es:"Algunas historias parecen casi inventadas de lo increíbles que son."},
    {fr:"Si on n'avait pas vécu ça nous-mêmes, on aurait du mal à y croire aussi.", es:"Si no lo hubiéramos vivido nosotros mismos, también nos costaría creerlo."},
    {fr:"Essayant de résumer trois mois de voyage, je ne savais même pas par où commencer.", es:"Intentando resumir tres meses de viaje, ni siquiera sabía por dónde empezar."},
    {fr:"Certains moments ne peuvent tout simplement pas être mis en mots.", es:"Algunos momentos simplemente no se pueden poner en palabras."},
    {fr:"Ils m'écoutaient comme s'ils vivaient l'aventure à travers moi.", es:"Me escuchaban como si vivieran la aventura a través de mí."},
    {fr:"Ce genre de conversation donne vraiment envie de repartir.", es:"Este tipo de conversación realmente da ganas de volver a irse de viaje."},
    {fr:"Je crois que je viens de leur donner, à eux aussi, l'envie de voyager.", es:"Creo que acabo de darles a ellos también las ganas de viajar."}
  ], tip:{
    title:"«Como si» + imperfecto de subjuntivo",
    example:"Me escuchaban como si vivieran la aventura a través de mí. — <b>Como si vivieran</b> la aventura.",
    body:"«Como si» (as if/as though) introduce una comparación o una impresión, y siempre va seguido del imperfecto (o pluscuamperfecto) de subjuntivo, incluso para hablar del presente: «Habla como si lo supiera todo», «Me miró como si hubiera visto un fantasma». Nunca se usa el indicativo después de «como si»."
  }},
 { title:"Louer un logement atypique", phrases:[
    {fr:"Si on avait réservé un hôtel classique, on n'aurait jamais vécu ça.", es:"Si hubiéramos reservado un hotel normal, nunca habríamos vivido esto."},
    {fr:"Cette cabane a été construite entièrement à la main par le propriétaire.", es:"Esta cabaña fue construida enteramente a mano por el propietario."},
    {fr:"Allongés sous les étoiles, on avait l'impression de dormir en plein ciel.", es:"Tumbados bajo las estrellas, teníamos la sensación de dormir a cielo abierto."},
    {fr:"Aucune électricité n'était disponible, ce qui rendait l'expérience encore plus authentique.", es:"No había electricidad disponible, lo que hacía la experiencia todavía más auténtica."},
    {fr:"Si le confort nous importait plus que l'originalité, on aurait fait un autre choix.", es:"Si la comodidad nos importara más que la originalidad, habríamos elegido otra cosa."},
    {fr:"L'eau était chauffée directement par un petit poêle à bois.", es:"El agua se calentaba directamente con una pequeña estufa de leña."},
    {fr:"Vivant comme ça, ne serait-ce que quelques jours, change vraiment la perspective.", es:"Vivir así, aunque solo sean unos días, cambia de verdad la perspectiva."},
    {fr:"Ce genre d'hébergement se réserve souvent des mois à l'avance.", es:"Este tipo de alojamiento suele reservarse con meses de antelación."},
    {fr:"Jamais un simple hôtel ne nous aurait offert un tel souvenir.", es:"Jamás un simple hotel nos habría dado un recuerdo así."},
    {fr:"On cherche déjà le prochain logement insolite pour notre prochain voyage.", es:"Ya estamos buscando el próximo alojamiento insólito para nuestro próximo viaje."}
  ]},
 { title:"Traverser une frontière terrestre", phrases:[
    {fr:"Si on n'avait pas tous nos papiers sur nous, on n'aurait jamais pu passer.", es:"Si no hubiéramos llevado todos nuestros papeles, nunca habríamos podido pasar."},
    {fr:"Ce poste-frontière est traversé par des milliers de personnes chaque jour.", es:"Por este paso fronterizo cruzan miles de personas cada día."},
    {fr:"Debout dans la file depuis des heures, on observait tout ce petit monde.", es:"De pie en la cola desde hacía horas, observábamos a toda esa gente."},
    {fr:"Certains documents ont dû être traduits avant notre arrivée.", es:"Algunos documentos tuvieron que traducirse antes de nuestra llegada."},
    {fr:"Si on avait choisi un autre point de passage, ça aurait sans doute été plus rapide.", es:"Si hubiéramos elegido otro paso, probablemente habría sido más rápido."},
    {fr:"Le changement d'ambiance de l'autre côté était presque immédiat.", es:"El cambio de ambiente al otro lado fue casi inmediato."},
    {fr:"Attendant patiemment notre tour, on a fini par sympathiser avec d'autres voyageurs.", es:"Esperando pacientemente nuestro turno, acabamos congeniando con otros viajeros."},
    {fr:"Ce genre de passage terrestre offre une perspective que l'avion ne donne jamais.", es:"Este tipo de paso por tierra ofrece una perspectiva que el avión nunca da."},
    {fr:"Rarement un simple tampon sur un passeport n'a semblé aussi symbolique.", es:"Pocas veces un simple sello en el pasaporte había parecido tan simbólico."},
    {fr:"On est officiellement dans un tout nouveau pays, et ça se sent immédiatement.", es:"Oficialmente estamos en un país completamente nuevo, y se nota de inmediato."}
  ]},
 { title:"Apprendre quelques mots de la langue locale", phrases:[
    {fr:"Si je n'avais appris que l'espagnol, je serais passé à côté de tant de choses.", es:"Si solo hubiera aprendido español, me habría perdido tantas cosas."},
    {fr:"Ces quelques phrases m'ont été enseignées par un ami avant le départ.", es:"Un amigo me enseñó estas pocas frases antes de salir."},
    {fr:"Essayant maladroitement de parler la langue, les gens souriaient immédiatement.", es:"Intentando torpemente hablar el idioma, la gente sonreía de inmediato."},
    {fr:"Ce simple effort est toujours perçu comme un signe de respect.", es:"Este simple esfuerzo siempre se percibe como una señal de respeto."},
    {fr:"Si je m'étais limité à ma langue maternelle, les échanges auraient été bien plus froids.", es:"Si me hubiera limitado a mi propio idioma, los intercambios habrían sido mucho más fríos."},
    {fr:"Certains mots sont plus difficiles à prononcer correctement que d'autres.", es:"Algunas palabras son más difíciles de pronunciar bien que otras."},
    {fr:"Riant de mes propres erreurs, j'ai fini par apprendre encore plus vite.", es:"Riéndome de mis propios errores, acabé aprendiendo todavía más rápido."},
    {fr:"Même quelques mots suffisent à transformer complètement une rencontre.", es:"Incluso unas pocas palabras bastan para transformar por completo un encuentro."},
    {fr:"Jamais je n'aurais cru qu'apprendre si peu pourrait changer autant de choses.", es:"Nunca habría creído que aprender tan poco pudiera cambiar tantas cosas."},
    {fr:"Je continue d'apprendre, même maintenant que je suis rentré.", es:"Sigo aprendiendo, incluso ahora que he vuelto."}
  ]},
 { title:"Organiser un voyage en groupe", phrases:[
    {fr:"Si on n'avait pas réparti les tâches, rien n'aurait jamais été organisé à temps.", es:"Si no hubiéramos repartido las tareas, nada se habría organizado a tiempo."},
    {fr:"Chaque détail a été discuté pendant des semaines avant le départ.", es:"Cada detalle se discutió durante semanas antes de salir."},
    {fr:"Essayant de satisfaire tout le monde, on a parfois dû faire des compromis.", es:"Intentando contentar a todos, a veces tuvimos que hacer concesiones."},
    {fr:"Les préférences de chacun ont été prises en compte autant que possible.", es:"Se tuvieron en cuenta las preferencias de cada uno en la medida de lo posible."},
    {fr:"Si on avait laissé une seule personne tout décider, ça aurait créé des tensions.", es:"Si hubiéramos dejado que una sola persona lo decidiera todo, habría creado tensiones."},
    {fr:"Voyager en groupe demande une organisation bien plus poussée qu'en solo.", es:"Viajar en grupo exige una organización mucho más minuciosa que viajar solo."},
    {fr:"Négociant chaque étape ensemble, on a fini par tous être satisfaits.", es:"Negociando juntos cada etapa, al final todos quedamos satisfechos."},
    {fr:"Ce genre d'aventure partagée crée des liens particulièrement forts.", es:"Este tipo de aventura compartida crea vínculos especialmente fuertes."},
    {fr:"Rarement un groupe aussi hétéroclite ne s'était aussi bien entendu.", es:"Pocas veces un grupo tan variopinto se había llevado tan bien."},
    {fr:"On parle déjà d'organiser le prochain voyage ensemble.", es:"Ya estamos hablando de organizar juntos el próximo viaje."}
  ]},
 { title:"Faire du bénévolat pendant un voyage", phrases:[
    {fr:"Si je n'avais pas cherché ce genre de programme, je n'aurais jamais vécu ça.", es:"Si no hubiera buscado este tipo de programa, nunca habría vivido esto."},
    {fr:"Cette école a été entièrement reconstruite grâce à des bénévoles internationaux.", es:"Esta escuela fue reconstruida por completo gracias a voluntarios internacionales."},
    {fr:"Travaillant aux côtés des habitants, j'ai appris bien plus que je n'ai enseigné.", es:"Trabajando junto a los habitantes, aprendí mucho más de lo que enseñé."},
    {fr:"Ces enfants ont été particulièrement touchés par notre présence, je crois.", es:"Creo que estos niños se vieron especialmente conmovidos por nuestra presencia."},
    {fr:"Si j'avais choisi un simple circuit touristique, je n'aurais jamais créé ces liens.", es:"Si hubiera elegido un simple circuito turístico, nunca habría creado estos vínculos."},
    {fr:"Ce genre d'expérience donne un sens complètement différent au mot « voyage ».", es:"Este tipo de experiencia da un sentido completamente distinto a la palabra «viaje»."},
    {fr:"Repartant de cet endroit, j'avais les larmes aux yeux.", es:"Al marcharme de ese lugar, tenía los ojos llenos de lágrimas."},
    {fr:"On garde contact avec certaines personnes rencontrées là-bas encore aujourd'hui.", es:"Todavía hoy seguimos en contacto con algunas personas que conocimos allí."},
    {fr:"Jamais un voyage ne m'avait rendu aussi humble.", es:"Nunca un viaje me había hecho tan humilde."},
    {fr:"Je recommencerai ce genre d'expérience à la première occasion.", es:"Repetiré este tipo de experiencia en la primera ocasión que tenga."}
  ]},
 { title:"Vivre un décalage culturel au retour", phrases:[
    {fr:"Si je n'avais pas vécu là-bas si longtemps, le retour aurait été bien plus facile.", es:"Si no hubiera vivido allí tanto tiempo, la vuelta habría sido mucho más fácil."},
    {fr:"Mes propres habitudes m'ont semblé étranges une fois rentré.", es:"Mis propias costumbres me parecieron extrañas una vez de vuelta."},
    {fr:"Marchant dans les rues de ma ville, tout me paraissait différent.", es:"Caminando por las calles de mi ciudad, todo me parecía diferente."},
    {fr:"Ce sentiment n'avait jamais été aussi fort lors d'un précédent voyage.", es:"Esta sensación nunca había sido tan fuerte en ningún viaje anterior."},
    {fr:"Si personne ne m'avait prévenu, je n'aurais jamais compris ce qui m'arrivait.", es:"Si nadie me hubiera avisado, nunca habría entendido lo que me pasaba."},
    {fr:"Certaines personnes ne comprenaient tout simplement pas ce que j'avais vécu.", es:"Algunas personas simplemente no entendían lo que yo había vivido."},
    {fr:"Essayant de retrouver mes repères, ça m'a pris bien plus de temps que prévu.", es:"Intentando recuperar mis referencias, me llevó mucho más tiempo del previsto."},
    {fr:"Ce genre de choc en dit long sur l'ampleur du voyage qu'on vient de vivre.", es:"Este tipo de choque dice mucho sobre la magnitud del viaje que se acaba de vivir."},
    {fr:"Jamais je n'aurais imaginé que revenir serait plus difficile que partir.", es:"Nunca habría imaginado que volver sería más difícil que irse."},
    {fr:"Avec le temps, les deux mondes ont fini par trouver leur équilibre en moi.", es:"Con el tiempo, los dos mundos acabaron encontrando su equilibrio dentro de mí."}
  ]},
 { title:"Préparer un très long voyage à l'avance", phrases:[
    {fr:"Si on n'avait pas commencé à préparer ce voyage un an à l'avance, on n'aurait jamais été prêts.", es:"Si no hubiéramos empezado a preparar este viaje un año antes, nunca habríamos estado listos."},
    {fr:"Chaque étape a été minutieusement planifiée avant notre départ.", es:"Cada etapa fue planificada minuciosamente antes de salir."},
    {fr:"Économisant chaque mois, on a fini par réunir le budget nécessaire.", es:"Ahorrando cada mes, acabamos reuniendo el presupuesto necesario."},
    {fr:"Certains vaccins ont dû être faits plusieurs semaines avant le départ.", es:"Algunas vacunas tuvieron que ponerse varias semanas antes de salir."},
    {fr:"Si on avait improvisé davantage, on aurait sans doute économisé du temps de préparation.", es:"Si hubiéramos improvisado más, seguramente habríamos ahorrado tiempo de preparación."},
    {fr:"Tout l'équipement a été testé plusieurs fois avant le grand départ.", es:"Todo el equipo fue probado varias veces antes del gran día."},
    {fr:"Rêvant de ce voyage depuis des années, le moment semblait presque irréel.", es:"Soñando con este viaje desde hacía años, el momento parecía casi irreal."},
    {fr:"Ce niveau de préparation nous a évité bien des mauvaises surprises.", es:"Este nivel de preparación nos evitó muchas malas sorpresas."},
    {fr:"Rarement un voyage n'avait été attendu avec autant d'impatience.", es:"Pocas veces se había esperado un viaje con tanta impaciencia."},
    {fr:"Le jour du départ est enfin arrivé, après tant de mois d'attente.", es:"Por fin llegó el día de la salida, tras tantos meses de espera."}
  ], tip:{
    title:"Perífrasis con gerundio: «seguir», «llevar», «ir + gerundio»",
    example:"Ahorrando cada mes, acabamos reuniendo el presupuesto. — <b>Ahorrando</b> cada mes, acabamos <b>reuniendo</b>.",
    body:"El español usa muchas construcciones con gerundio para matizar una acción: «seguir/continuar + gerundio» (continuidad), «llevar + gerundio» (duración), «ir + gerundio» (progresión gradual), «acabar/terminar + gerundio» (resultado final). Es un punto que suele costar a los francófonos, acostumbrados a usar más el infinitivo."
  }},
 { title:"Bilan du module voyage, niveau 3", phrases:[
    {fr:"Ce module nous a appris à raconter nos expériences avec plus de nuance.", es:"Este módulo nos ha enseñado a contar nuestras experiencias con más matices."},
    {fr:"Si on avait commencé ce niveau sans les deux précédents, ça aurait été bien plus difficile.", es:"Si hubiéramos empezado este nivel sin los dos anteriores, habría sido mucho más difícil."},
    {fr:"Ces structures complexes deviennent naturelles avec de la pratique régulière.", es:"Estas estructuras complejas se vuelven naturales con práctica regular."},
    {fr:"Chaque leçon nous rapproche un peu plus d'un espagnol vraiment fluide.", es:"Cada lección nos acerca un poco más a un español realmente fluido."},
    {fr:"Rarement un module n'aura couvert autant de situations de voyage réelles.", es:"Pocas veces un módulo habrá cubierto tantas situaciones de viaje reales."},
    {fr:"Si tu es arrivé jusqu'ici, continue, la fin est proche.", es:"Si has llegado hasta aquí, sigue así, el final está cerca."},
    {fr:"Ce vocabulaire te sera utile pour absolument tous tes futurs voyages.", es:"Este vocabulario te será útil para absolutamente todos tus futuros viajes."},
    {fr:"Bravo, tu as terminé le module « En voyage » du niveau 3 !", es:"¡Enhorabuena, has terminado el módulo «De viaje» del nivel 3!"},
    {fr:"Un dernier module t'attend pour achever ce niveau.", es:"Te queda un último módulo para completar este nivel."},
    {fr:"On se retrouve très vite pour la dernière ligne droite.", es:"Nos vemos muy pronto para el último tramo."}
  ]}
];

const level3Module3Lessons = [
 { title:"Donner un conseil avec nuance", phrases:[
    {fr:"Je suggère qu'elle réfléchisse encore un peu avant de décider.", es:"Sugiero que ella se lo piense un poco más antes de decidir."},
    {fr:"Il est important que chacun donne son avis librement.", es:"Es importante que cada uno dé su opinión libremente."},
    {fr:"Je recommande qu'il prenne un peu de recul sur la situation.", es:"Recomiendo que él tome algo de distancia con la situación."},
    {fr:"Il serait préférable qu'elle en parle directement avec lui.", es:"Sería preferible que ella hablara de esto directamente con él."},
    {fr:"On a proposé qu'il attende encore une semaine avant d'agir.", es:"Se propuso que esperara una semana más antes de actuar."},
    {fr:"Je conseillerais qu'on évite ce sujet pour l'instant.", es:"Aconsejaría que evitáramos este tema por ahora."},
    {fr:"Il vaudrait mieux que tout le monde soit présent à cette réunion.", es:"Sería mejor que todo el mundo estuviera presente en esta reunión."},
    {fr:"Je préférerais qu'elle vienne me voir avant de prendre une décision.", es:"Preferiría que viniera a verme antes de tomar una decisión."},
    {fr:"Il est essentiel que ce genre de discussion reste calme.", es:"Es esencial que este tipo de conversación se mantenga tranquila."},
    {fr:"Chacun est libre de suivre ce conseil ou non, bien sûr.", es:"Por supuesto, cada uno es libre de seguir este consejo o no."}
  ], tip:{
    title:"El subjuntivo tras «sugerir», «recomendar», «es importante que»",
    example:"Sugiero que ella se lo piense un poco más. — Sugiero que ella <b>se lo piense</b>.",
    body:"Después de verbos de sugerencia, consejo o voluntad («sugerir», «recomendar», «proponer», «aconsejar») o de expresiones como «es importante/esencial que», el español exige el subjuntivo en la oración subordinada: «Sugiero que lo haga», «Es importante que vengas». Es una estructura muy frecuente que no admite el indicativo."
  }},
 { title:"Rapporter une rumeur", phrases:[
    {fr:"On dit qu'il aurait démissionné la semaine dernière.", es:"Se dice que habría dimitido la semana pasada."},
    {fr:"Il paraît qu'elle déménage bientôt à l'étranger.", es:"Parece que se muda pronto al extranjero."},
    {fr:"On raconte que cette entreprise serait sur le point d'être rachetée.", es:"Se cuenta que esta empresa estaría a punto de ser comprada."},
    {fr:"Il semblerait que la situation ait beaucoup évolué récemment.", es:"Parece que la situación ha cambiado mucho últimamente."},
    {fr:"On prétend qu'il connaîtrait très bien le nouveau directeur.", es:"Se dice que conocería muy bien al nuevo director."},
    {fr:"Il se dit que des changements importants vont être annoncés.", es:"Se rumorea que se van a anunciar cambios importantes."},
    {fr:"Je n'ai aucune idée si cette rumeur est vraie ou non.", es:"No tengo ni idea de si este rumor es cierto o no."},
    {fr:"Ce genre d'information circule vite, qu'elle soit vraie ou fausse.", es:"Este tipo de información circula rápido, sea verdadera o falsa."},
    {fr:"Mieux vaut ne pas répéter ce qu'on n'a pas vérifié soi-même.", es:"Mejor no repetir lo que uno mismo no ha comprobado."},
    {fr:"On verra bien si tout ça se confirme dans les prochains jours.", es:"Ya veremos si todo esto se confirma en los próximos días."}
  ], tip:{
    title:"«Se dice que» / «se rumorea que» para contar un rumor",
    example:"Se dice que habría dimitido la semana pasada. — <b>Se dice que</b> habría dimitido.",
    body:"Para contar una información no confirmada, el español usa construcciones impersonales como «se dice que», «se rumorea que», «parece que», seguidas normalmente de indicativo o del condicional cuando se quiere marcar la incertidumbre: «Se dice que estaría en París». Esto evita afirmar algo como un hecho seguro."
  }},
 { title:"Exprimer un regret formel", phrases:[
    {fr:"N'eût été votre aide, je n'y serais jamais arrivé.", es:"De no haber sido por su ayuda, nunca lo habría logrado."},
    {fr:"Si j'avais su, j'aurais agi tout autrement.", es:"De haberlo sabido, habría actuado de un modo totalmente distinto."},
    {fr:"Eût-on pris cette décision plus tôt, tout aurait pu être évité.", es:"De haberse tomado esta decisión antes, todo se podría haber evitado."},
    {fr:"Ne serait-ce que pour cette raison, je regrette ce choix.", es:"Aunque solo fuera por esa razón, lamento esta decisión."},
    {fr:"Si seulement j'avais pris le temps d'y réfléchir davantage.", es:"Si solo hubiera dedicado más tiempo a pensarlo."},
    {fr:"Eussions-nous été prévenus, nous aurions pu nous préparer.", es:"De haber sido avisados, habríamos podido prepararnos."},
    {fr:"Ce regret me poursuivra sans doute pendant longtemps.", es:"Sin duda, este pesar me acompañará durante mucho tiempo."},
    {fr:"On ne peut malheureusement pas revenir en arrière.", es:"Por desgracia, no se puede volver atrás."},
    {fr:"Au moins, cette erreur nous aura appris quelque chose.", es:"Al menos este error nos habrá enseñado algo."},
    {fr:"Mieux vaut regarder vers l'avenir désormais.", es:"Más vale mirar hacia el futuro de ahora en adelante."}
  ], tip:{
    title:"«De haber + participio» como alternativa formal a «si hubiera»",
    example:"De haberlo sabido, habría actuado de otro modo. — <b>De haberlo sabido</b>, habría actuado distinto.",
    body:"En un registro formal o literario, el español puede sustituir «si hubiera + participio» por «de haber + participio»: «De haberlo sabido» en lugar de «Si lo hubiera sabido». Es una construcción más elegante y concisa, muy usada en textos escritos y discursos cuidados."
  }},
 { title:"Discuter d'un sujet sensible avec délicatesse", phrases:[
    {fr:"Je ne voudrais pas te mettre mal à l'aise en abordant ce sujet.", es:"No quisiera incomodarte al sacar este tema."},
    {fr:"Si ça ne te dérange pas, j'aimerais qu'on en parle calmement.", es:"Si no te molesta, me gustaría que lo habláramos con calma."},
    {fr:"Je comprendrais tout à fait que tu préfères ne pas en discuter.", es:"Entendería perfectamente que prefirieras no hablar de ello."},
    {fr:"Loin de moi l'idée de te juger pour ce choix.", es:"Ni se me pasa por la cabeza juzgarte por esta decisión."},
    {fr:"Je me permets d'aborder ce sujet par simple souci pour toi.", es:"Me permito sacar este tema solo por preocupación hacia ti."},
    {fr:"Si jamais tu as besoin d'en parler davantage, je suis là.", es:"Si alguna vez necesitas hablar más de esto, aquí estoy."},
    {fr:"Ce n'est en aucun cas une critique, juste une observation.", es:"Esto no es en absoluto una crítica, solo una observación."},
    {fr:"Prends tout le temps qu'il te faut pour y réfléchir.", es:"Tómate todo el tiempo que necesites para pensarlo."},
    {fr:"Je préfère aborder ce genre de sujet en privé plutôt qu'en public.", es:"Prefiero tratar este tipo de temas en privado antes que en público."},
    {fr:"Merci d'avoir été si ouvert avec moi là-dessus.", es:"Gracias por haber sido tan abierto conmigo sobre esto."}
  ]},
 { title:"Participer à un débat argumenté", phrases:[
    {fr:"S'il en était ainsi, on observerait des résultats bien différents.", es:"Si fuera así, observaríamos resultados muy diferentes."},
    {fr:"Loin d'être convaincu, je reste assez sceptique sur ce point.", es:"Lejos de estar convencido, sigo bastante escéptico en este punto."},
    {fr:"Ce que vous dites n'est pas sans fondement, je le reconnais.", es:"Lo que usted dice no carece de fundamento, lo reconozco."},
    {fr:"Permettez-moi de nuancer légèrement cette affirmation.", es:"Permítame matizar ligeramente esta afirmación."},
    {fr:"Fût-ce vrai, cela ne changerait rien à mon raisonnement.", es:"Aunque fuera cierto, eso no cambiaría nada mi razonamiento."},
    {fr:"Je rejoins votre avis sur certains points, mais pas sur tous.", es:"Comparto su opinión en algunos puntos, pero no en todos."},
    {fr:"Il convient de considérer également l'autre côté de la question.", es:"Conviene considerar también el otro lado de la cuestión."},
    {fr:"Cet argument mérite d'être approfondi davantage, à mon sens.", es:"En mi opinión, este argumento merece profundizarse más."},
    {fr:"Loin de moi l'idée de trancher définitivement ce débat.", es:"Ni se me ocurre pretender zanjar definitivamente este debate."},
    {fr:"Chacun repartira sans doute avec son opinion, et c'est très bien ainsi.", es:"Sin duda cada uno se irá con su propia opinión, y eso está muy bien."}
  ]},
 { title:"Décrire une personne avec précision", phrases:[
    {fr:"C'est quelqu'un qui, aussi discret soit-il, a une influence considérable.", es:"Es alguien que, por muy discreto que sea, tiene una influencia considerable."},
    {fr:"Elle est connue pour être d'une honnêteté à toute épreuve.", es:"Es conocida por tener una honestidad a toda prueba."},
    {fr:"Il a beau paraître sévère, c'est en réalité quelqu'un de très bienveillant.", es:"Aunque parezca severo, en realidad es alguien muy bondadoso."},
    {fr:"Rares sont les personnes aussi généreuses qu'elle.", es:"Son pocas las personas tan generosas como ella."},
    {fr:"On ne saurait trouver quelqu'un de plus fiable que lui.", es:"No se podría encontrar a alguien más fiable que él."},
    {fr:"Si imparfaite soit-elle, c'est quelqu'un que j'admire profondément.", es:"Por muy imperfecta que sea, es alguien a quien admiro profundamente."},
    {fr:"C'est le genre de personne qui marque durablement ceux qui la croisent.", es:"Es el tipo de persona que deja huella duradera en quien se la encuentra."},
    {fr:"Peu de gens savent à quel point il est sensible, en réalité.", es:"Poca gente sabe lo sensible que es en realidad."},
    {fr:"Elle a ce don rare de mettre tout le monde à l'aise instantanément.", es:"Tiene ese don tan raro de hacer sentir cómodo a todo el mundo al instante."},
    {fr:"Ce genre de qualités ne s'apprend pas, elles se cultivent avec le temps.", es:"Este tipo de cualidades no se aprende, se cultiva con el tiempo."}
  ], tip:{
    title:"«Por muy + adjetivo + que + subjuntivo» (concesión)",
    example:"Por muy imperfecta que sea, es alguien que admiro. — <b>Por muy imperfecta que sea</b>.",
    body:"Para expresar una concesión en un registro elegante («aussi... soit-il»), el español usa «por muy + adjetivo + que» seguido de subjuntivo: «Por muy cansado que esté, sigo trabajando», «Por muy raro que parezca...». Es una alternativa más enfática que «aunque», muy usada en un registro cuidado."
  }},
 { title:"Féliciter quelqu'un pour une réussite", phrases:[
    {fr:"Tous mes vœux de succès pour cette nouvelle étape de ta vie.", es:"Todos mis buenos deseos de éxito para esta nueva etapa de tu vida."},
    {fr:"C'est un accomplissement dont tu peux être fier, et à juste titre.", es:"Es un logro del que puedes estar orgulloso, y con toda razón."},
    {fr:"Rares sont ceux qui réussissent un tel exploit aussi jeunes.", es:"Son pocos los que logran una hazaña así siendo tan jóvenes."},
    {fr:"Je suis sincèrement impressionné par tout le chemin parcouru.", es:"Estoy sinceramente impresionado por todo el camino recorrido."},
    {fr:"Tu l'auras bien mérité, après tous ces efforts fournis.", es:"Te lo habrás merecido, después de todo este esfuerzo."},
    {fr:"Que cette réussite n'en annonce que d'autres encore plus belles.", es:"Que este éxito solo anuncie otros todavía más bonitos."},
    {fr:"Je lève mon verre à ta réussite, de tout cœur.", es:"Levanto mi copa por tu éxito, de todo corazón."},
    {fr:"Ton parcours est une véritable source d'inspiration pour nous tous.", es:"Tu trayectoria es una verdadera fuente de inspiración para todos nosotros."},
    {fr:"Tu as toutes les raisons du monde d'être fier aujourd'hui.", es:"Tienes todas las razones del mundo para estar orgulloso hoy."},
    {fr:"Félicitations, encore une fois, pour cette magnifique réussite.", es:"Enhorabuena, una vez más, por este magnífico logro."}
  ]},
 { title:"Consoler quelqu'un dans un moment difficile", phrases:[
    {fr:"Sache que je suis là pour toi, quoi qu'il arrive.", es:"Que sepas que estoy aquí para ti, pase lo que pase."},
    {fr:"Il n'y a pas de bonne façon de traverser ce genre d'épreuve.", es:"No hay una forma correcta de atravesar este tipo de pruebas."},
    {fr:"Prends tout le temps nécessaire, personne ne te presse.", es:"Tómate todo el tiempo que necesites, nadie te presiona."},
    {fr:"Aussi difficile que ce soit maintenant, ça finira par s'apaiser.", es:"Por muy difícil que sea ahora, al final se calmará."},
    {fr:"N'hésite jamais à m'appeler, de jour comme de nuit.", es:"Nunca dudes en llamarme, de día o de noche."},
    {fr:"Tu n'as pas à être fort tout le temps, ce n'est pas grave de craquer.", es:"No tienes que ser fuerte todo el tiempo, no pasa nada si te derrumbas."},
    {fr:"Chacun gère ce genre de situation à son propre rythme.", es:"Cada uno gestiona este tipo de situaciones a su propio ritmo."},
    {fr:"Ce que tu ressens est tout à fait normal, ne te juge pas.", es:"Lo que sientes es completamente normal, no te juzgues."},
    {fr:"On traversera ça ensemble, je ne te laisserai pas seul.", es:"Pasaremos por esto juntos, no te dejaré solo."},
    {fr:"Prends soin de toi, c'est tout ce qui compte pour l'instant.", es:"Cuídate, es lo único que importa por ahora."}
  ]},
 { title:"Animer une réunion de famille délicate", phrases:[
    {fr:"Proposons que chacun puisse s'exprimer sans être interrompu.", es:"Propongamos que cada uno pueda expresarse sin ser interrumpido."},
    {fr:"Il serait sage que nous évitions de raviver d'anciennes disputes.", es:"Sería sensato que evitáramos reabrir viejas disputas."},
    {fr:"Quoi qu'il soit décidé aujourd'hui, restons unis en tant que famille.", es:"Decidamos lo que decidamos hoy, sigamos unidos como familia."},
    {fr:"Fût-ce difficile, cette conversation devait absolument avoir lieu.", es:"Aunque fuera difícil, esta conversación tenía que suceder sin remedio."},
    {fr:"Il convient que chacun écoute l'autre avant de répondre.", es:"Conviene que cada uno escuche al otro antes de responder."},
    {fr:"On gagnerait à aborder ce sujet avec plus de calme.", es:"Ganaríamos abordando este tema con más calma."},
    {fr:"Rares sont les familles sans aucun désaccord, après tout.", es:"Al fin y al cabo, son pocas las familias sin ningún desacuerdo."},
    {fr:"Je suggère qu'on fasse une pause avant de reprendre cette discussion.", es:"Sugiero que hagamos una pausa antes de retomar esta conversación."},
    {fr:"Ce qui compte, c'est qu'on en ressorte plus soudés qu'avant.", es:"Lo que importa es que salgamos de esto más unidos que antes."},
    {fr:"Je suis fier de la façon dont cette famille gère ses différends.", es:"Estoy orgulloso de cómo esta familia gestiona sus diferencias."}
  ]},
 { title:"Partager une opinion impopulaire avec tact", phrases:[
    {fr:"Je sais que mon avis risque de ne pas plaire à tout le monde.", es:"Sé que mi opinión puede no gustarle a todo el mundo."},
    {fr:"Loin de vouloir provoquer qui que ce soit, je dis simplement ce que je pense.", es:"Lejos de querer provocar a nadie, simplemente digo lo que pienso."},
    {fr:"Aussi impopulaire que soit mon avis, je tiens à le partager honnêtement.", es:"Por muy impopular que sea mi opinión, quiero compartirla con honestidad."},
    {fr:"Je comprendrais que vous ne soyez pas d'accord avec moi sur ce point.", es:"Entendería que no estuvieran de acuerdo conmigo en este punto."},
    {fr:"Ce n'est que mon point de vue, et il n'engage que moi.", es:"No es más que mi punto de vista, y solo me compromete a mí."},
    {fr:"Permettez-moi d'exposer mon raisonnement avant qu'on me juge.", es:"Permítanme exponer mi razonamiento antes de que se me juzgue."},
    {fr:"Rares sont les opinions qui font l'unanimité, de toute façon.", es:"De todas formas, son pocas las opiniones que logran la unanimidad."},
    {fr:"Je préfère être honnête plutôt que de simplement plaire à tout le monde.", es:"Prefiero ser honesto antes que simplemente complacer a todos."},
    {fr:"Vous êtes évidemment libres de ne pas partager mon avis.", es:"Por supuesto, son libres de no compartir mi opinión."},
    {fr:"Merci en tout cas d'avoir écouté jusqu'au bout.", es:"En cualquier caso, gracias por escuchar hasta el final."}
  ]},
 { title:"Faire une demande délicate à un supérieur", phrases:[
    {fr:"Je me permets de vous solliciter pour une demande un peu particulière.", es:"Me permito dirigirme a usted con una petición algo particular."},
    {fr:"Seriez-vous disposé à envisager un aménagement de mes horaires ?", es:"¿Estaría dispuesto a considerar un ajuste de mi horario?"},
    {fr:"Je comprendrais tout à fait un refus de votre part.", es:"Entendería perfectamente una negativa por su parte."},
    {fr:"Si cela était possible, cela m'aiderait considérablement.", es:"Si eso fuera posible, me ayudaría considerablemente."},
    {fr:"Loin de vouloir abuser de votre bienveillance, je sollicite simplement un conseil.", es:"Lejos de querer abusar de su amabilidad, solo le pido consejo."},
    {fr:"Permettez-moi de vous exposer brièvement ma situation.", es:"Permítame exponerle brevemente mi situación."},
    {fr:"Quelle que soit votre décision, je vous en remercie par avance.", es:"Sea cual sea su decisión, se lo agradezco de antemano."},
    {fr:"Je reste naturellement à votre disposition pour en discuter davantage.", es:"Naturalmente, quedo a su disposición para hablar más de ello."},
    {fr:"Je vous suis reconnaissant d'avoir pris le temps de me lire.", es:"Le agradezco que se haya tomado el tiempo de leerme."},
    {fr:"Dans l'attente de votre retour, je vous souhaite une excellente journée.", es:"En espera de su respuesta, le deseo un excelente día."}
  ]},
 { title:"Réagir à une nouvelle inattendue", phrases:[
    {fr:"Je ne m'attendais absolument pas à une telle annonce.", es:"No me esperaba en absoluto un anuncio así."},
    {fr:"Ça m'a pris totalement de court, je dois l'avouer.", es:"Debo admitir que me pilló totalmente desprevenido."},
    {fr:"Aussi surprenant que cela puisse paraître, ça ne me déplaît pas.", es:"Por muy sorprendente que pueda parecer, no me disgusta."},
    {fr:"Laissez-moi un instant pour digérer cette information.", es:"Déjenme un momento para asimilar esta información."},
    {fr:"Je n'aurais jamais imaginé une chose pareille, honnêtement.", es:"Sinceramente, nunca habría imaginado algo así."},
    {fr:"Une fois la surprise passée, je trouve en fait ça plutôt positif.", es:"Una vez pasada la sorpresa, en realidad lo encuentro bastante positivo."},
    {fr:"Il me faudra sans doute un peu de temps pour m'y faire.", es:"Seguramente necesitaré algo de tiempo para acostumbrarme."},
    {fr:"Fût-elle inattendue, cette nouvelle ne change rien à notre amitié.", es:"Aunque sea inesperada, esta noticia no cambia nada nuestra amistad."},
    {fr:"Merci de m'en avoir parlé directement plutôt que je l'apprenne autrement.", es:"Gracias por contármelo directamente en vez de que me enterara de otra forma."},
    {fr:"On en reparlera plus calmement une fois que j'aurai digéré tout ça.", es:"Lo hablaremos con más calma una vez que lo haya asimilado todo."}
  ]},
 { title:"Reconnaître une erreur publiquement", phrases:[
    {fr:"Je tiens à reconnaître humblement m'être trompé sur ce point.", es:"Quiero reconocer humildemente que me equivoqué en este punto."},
    {fr:"Il m'arrive, comme à tout le monde, de me tromper.", es:"Me pasa, como a todo el mundo, equivocarme a veces."},
    {fr:"Loin de moi l'idée de minimiser l'impact de cette erreur.", es:"Ni se me ocurre minimizar el impacto de este error."},
    {fr:"J'assume pleinement la responsabilité de ce qui s'est passé.", es:"Asumo plenamente la responsabilidad de lo ocurrido."},
    {fr:"Ayant pris conscience de mon erreur, je m'engage à ne pas la reproduire.", es:"Habiendo tomado conciencia de mi error, me comprometo a no repetirlo."},
    {fr:"Il convient que je présente mes excuses à toutes les personnes concernées.", es:"Es justo que presente mis disculpas a todas las personas afectadas."},
    {fr:"Reconnaître ses torts n'est jamais facile, mais c'est nécessaire.", es:"Reconocer los propios errores nunca es fácil, pero es necesario."},
    {fr:"J'espère sincèrement que vous pourrez accepter mes excuses.", es:"Espero sinceramente que puedan aceptar mis disculpas."},
    {fr:"Je ferai tout mon possible pour regagner votre confiance.", es:"Haré todo lo posible por recuperar su confianza."},
    {fr:"Merci à ceux qui m'ont fait confiance malgré tout.", es:"Gracias a quienes confiaron en mí a pesar de todo."}
  ], tip:{
    title:"«Habiendo + participio» para una acción anterior",
    example:"Habiendo tomado conciencia de mi error, me comprometo a no repetirlo. — <b>Habiendo tomado</b> conciencia...",
    body:"«Habiendo + participio» al principio de la frase expresa una acción terminada antes de otra, de forma elegante y concisa: «Habiendo terminado el informe, se fue a casa». Es el equivalente condensado de «Después de haber terminado...» y pertenece a un registro más formal y literario."
  }},
 { title:"Discuter d'un sujet philosophique autour d'un café", phrases:[
    {fr:"Qu'est-ce que le bonheur signifie réellement, selon toi ?", es:"¿Qué significa realmente la felicidad, según tú?"},
    {fr:"Il me semble que la liberté totale n'existe nulle part vraiment.", es:"Me parece que la libertad total no existe realmente en ningún sitio."},
    {fr:"Serait-il juste de dire que le temps change tout, sauf nous-mêmes ?", es:"¿Sería justo decir que el tiempo lo cambia todo, excepto a nosotros mismos?"},
    {fr:"Je me demande souvent ce qui donne vraiment un sens à la vie.", es:"A menudo me pregunto qué le da realmente sentido a la vida."},
    {fr:"Fût-elle imparfaite, notre perception reste la seule réalité qu'on connaisse.", es:"Aunque sea imperfecta, nuestra percepción sigue siendo la única realidad que conocemos."},
    {fr:"Certains diraient que le bonheur se trouve dans les petites choses.", es:"Algunos dirían que la felicidad está en las pequeñas cosas."},
    {fr:"Ce genre de question n'a probablement pas de réponse unique.", es:"Este tipo de pregunta probablemente no tiene una única respuesta."},
    {fr:"Chacun construit sa propre vérité, en fin de compte.", es:"Al final, cada uno construye su propia verdad."},
    {fr:"Ces conversations me font réfléchir bien après qu'elles soient terminées.", es:"Estas conversaciones me hacen reflexionar mucho después de que terminan."},
    {fr:"On pourrait en discuter pendant des heures sans jamais s'ennuyer.", es:"Podríamos hablar de esto durante horas sin aburrirnos nunca."}
  ]},
 { title:"Encourager quelqu'un à persévérer", phrases:[
    {fr:"Ne laisse jamais un seul échec définir ta valeur.", es:"Nunca dejes que un solo fracaso defina tu valor."},
    {fr:"Aussi découragé que tu sois aujourd'hui, demain sera différent.", es:"Por muy desanimado que estés hoy, mañana será diferente."},
    {fr:"Rares sont ceux qui réussissent sans jamais connaître d'échec.", es:"Son pocos los que triunfan sin conocer nunca el fracaso."},
    {fr:"Je crois sincèrement en toi, plus que tu ne le penses.", es:"Creo sinceramente en ti, más de lo que piensas."},
    {fr:"Chaque obstacle que tu rencontres te rend plus fort, pas plus faible.", es:"Cada obstáculo que encuentras te hace más fuerte, no más débil."},
    {fr:"Fussent tes doutes nombreux, ta détermination l'a toujours emporté.", es:"Aunque tus dudas sean muchas, tu determinación siempre ha prevalecido."},
    {fr:"Continue, même quand tout semble aller contre toi.", es:"Sigue adelante, incluso cuando todo parezca ir en tu contra."},
    {fr:"Ce que tu construis prendra du temps, et c'est tout à fait normal.", es:"Lo que estás construyendo llevará tiempo, y es completamente normal."},
    {fr:"Je serai là à chaque étape, pour célébrer comme pour soutenir.", es:"Estaré ahí en cada etapa, tanto para celebrar como para apoyarte."},
    {fr:"N'abandonne jamais ce en quoi tu crois vraiment.", es:"Nunca abandones aquello en lo que de verdad crees."}
  ]},
 { title:"Négocier un désaccord de couple ou d'amitié", phrases:[
    {fr:"Il me semble important que nous écoutions chacun le point de vue de l'autre.", es:"Me parece importante que escuchemos cada uno el punto de vista del otro."},
    {fr:"Loin de vouloir avoir raison à tout prix, je cherche juste à comprendre.", es:"Lejos de querer tener razón a toda costa, solo busco comprender."},
    {fr:"Fussions-nous en désaccord, notre relation compte plus que cette dispute.", es:"Aunque estemos en desacuerdo, nuestra relación importa más que esta discusión."},
    {fr:"Je suggère que nous prenions chacun le temps d'y réfléchir séparément.", es:"Sugiero que cada uno se tome tiempo para pensarlo por separado."},
    {fr:"Ce que tu ressens est tout aussi valable que ce que je ressens.", es:"Lo que tú sientes es tan válido como lo que yo siento."},
    {fr:"Il conviendrait peut-être que nous reportions cette conversation à plus tard.", es:"Quizá convendría que posponiéramos esta conversación para más tarde."},
    {fr:"Aucun de nous deux n'a raison ou tort à cent pour cent, je pense.", es:"Creo que ninguno de los dos tiene razón o está equivocado al cien por cien."},
    {fr:"Je préfère que nous trouvions un terrain d'entente plutôt qu'un gagnant.", es:"Prefiero que encontremos un punto de acuerdo en vez de un ganador."},
    {fr:"Merci d'avoir eu la patience de m'écouter jusqu'au bout.", es:"Gracias por haber tenido la paciencia de escucharme hasta el final."},
    {fr:"On en ressort toujours plus forts, je crois, après ce genre de moment.", es:"Creo que siempre salimos más fuertes después de este tipo de momentos."}
  ]},
 { title:"Faire ses adieux à un collègue ou ami proche", phrases:[
    {fr:"Il me sera difficile d'imaginer ce lieu sans ta présence.", es:"Me resultará difícil imaginar este lugar sin tu presencia."},
    {fr:"Fût notre temps ensemble bref, il restera gravé en moi.", es:"Aunque nuestro tiempo juntos haya sido breve, quedará grabado en mí."},
    {fr:"Je garderai précieusement chaque souvenir partagé avec toi.", es:"Guardaré con cariño cada recuerdo compartido contigo."},
    {fr:"Que cette nouvelle étape t'apporte tout ce que tu mérites.", es:"Que esta nueva etapa te traiga todo lo que te mereces."},
    {fr:"Sache que la porte restera toujours ouverte, où que tu ailles.", es:"Que sepas que la puerta siempre estará abierta, donde sea que vayas."},
    {fr:"Rien ne remplacera jamais vraiment ces moments passés ensemble.", es:"Nada sustituirá nunca de verdad estos momentos vividos juntos."},
    {fr:"Ayant partagé tant de choses, je sais que la distance n'y changera rien.", es:"Habiendo compartido tantas cosas, sé que la distancia no cambiará nada."},
    {fr:"Je te souhaite sincèrement le meilleur pour ce qui t'attend.", es:"Te deseo sinceramente lo mejor para lo que te espera."},
    {fr:"Reste la personne que tu es, où que la vie te mène.", es:"Sigue siendo la persona que eres, dondequiera que te lleve la vida."},
    {fr:"Ce n'est qu'un au revoir, pas un adieu définitif.", es:"Esto es solo un hasta luego, no una despedida definitiva."}
  ]},
 { title:"Gérer un malentendu entre amis", phrases:[
    {fr:"Je crois qu'il y a eu un malentendu entre nous deux.", es:"Creo que ha habido un malentendido entre nosotros dos."},
    {fr:"Ce n'est absolument pas ce que je voulais dire, laisse-moi m'expliquer.", es:"No era en absoluto lo que quería decir, déjame explicarme."},
    {fr:"Loin de moi l'idée de te blesser avec cette remarque.", es:"Ni se me ocurrió herirte con ese comentario."},
    {fr:"Peut-être me suis-je mal exprimé, je vais reformuler.", es:"Quizá me expresé mal, voy a reformularlo."},
    {fr:"Je comprends que tu aies pu le prendre ainsi, mais ce n'était pas mon intention.", es:"Entiendo que lo hayas podido tomar así, pero no era mi intención."},
    {fr:"On devrait clarifier les choses avant que ça ne s'aggrave.", es:"Deberíamos aclarar las cosas antes de que esto se agrave."},
    {fr:"Aussi tendue soit la situation, je préfère qu'on en parle ouvertement.", es:"Por muy tensa que sea la situación, prefiero que lo hablemos abiertamente."},
    {fr:"Je suis désolé si mes mots t'ont blessé sans le vouloir.", es:"Siento si mis palabras te hirieron sin querer."},
    {fr:"Reprenons depuis le début, ça ira plus vite.", es:"Empecemos de nuevo desde el principio, irá más rápido."},
    {fr:"Je préfère toujours éclaircir les choses plutôt que de laisser s'installer un malaise.", es:"Siempre prefiero aclarar las cosas antes que dejar que se instale un malestar."}
  ]},
 { title:"Partager un souvenir marquant", phrases:[
    {fr:"Il y a des moments qui nous marquent pour le restant de notre vie.", es:"Hay momentos que nos marcan para el resto de la vida."},
    {fr:"Je me souviendrai toujours de ce jour-là, dans les moindres détails.", es:"Siempre recordaré aquel día, hasta el más mínimo detalle."},
    {fr:"Ayant vécu ça ensemble, nous partageons un lien particulier désormais.", es:"Habiendo vivido esto juntos, ahora compartimos un vínculo especial."},
    {fr:"C'est le genre de souvenir qui me fait sourire encore aujourd'hui.", es:"Es el tipo de recuerdo que todavía hoy me hace sonreír."},
    {fr:"Si improbable que cela ait pu paraître, c'est vraiment arrivé.", es:"Por improbable que pudiera parecer, realmente sucedió."},
    {fr:"Je repense souvent à cette époque avec beaucoup de tendresse.", es:"A menudo recuerdo esa época con mucha ternura."},
    {fr:"Ce souvenir reste gravé dans ma mémoire comme si c'était hier.", es:"Ese recuerdo sigue grabado en mi memoria como si fuera ayer."},
    {fr:"On en rira encore dans vingt ans, j'en suis certain.", es:"Estoy seguro de que todavía nos reiremos de esto dentro de veinte años."},
    {fr:"Certains moments valent bien plus que n'importe quel bien matériel.", es:"Algunos momentos valen mucho más que cualquier bien material."},
    {fr:"Merci d'avoir fait partie de ce souvenir avec moi.", es:"Gracias por haber formado parte de este recuerdo conmigo."}
  ]},
 { title:"Bilan du module conversation sociale, niveau 3", phrases:[
    {fr:"Ce dernier module nous a appris à manier des nuances très fines.", es:"Este último módulo nos ha enseñado a manejar matices muy finos."},
    {fr:"Rares sont les apprenants qui atteignent un tel niveau de précision.", es:"Son pocos los estudiantes que alcanzan tal nivel de precisión."},
    {fr:"Ces structures, aussi complexes soient-elles, deviendront naturelles avec le temps.", es:"Estas estructuras, por complejas que sean, se volverán naturales con el tiempo."},
    {fr:"Tu es désormais capable de t'exprimer avec une grande richesse de vocabulaire.", es:"Ahora eres capaz de expresarte con una gran riqueza de vocabulario."},
    {fr:"Ayant terminé ce niveau, tu maîtrises une large partie de l'espagnol courant.", es:"Habiendo terminado este nivel, dominas una gran parte del español corriente."},
    {fr:"Fût ce parcours long, chaque étape en valait vraiment la peine.", es:"Aunque este recorrido haya sido largo, cada etapa mereció realmente la pena."},
    {fr:"Félicitations pour être arrivé jusqu'à la toute fin de ce niveau 3.", es:"Enhorabuena por haber llegado hasta el final mismo de este nivel 3."},
    {fr:"Bravo, tu as terminé le module « Conversation sociale » du niveau 3 !", es:"¡Enhorabuena, has terminado el módulo «Conversación social» del nivel 3!"},
    {fr:"Les trois niveaux sont désormais entièrement terminés.", es:"Los tres niveles están ahora completamente terminados."},
    {fr:"Continue à pratiquer, l'espagnol fait désormais partie de toi.", es:"Sigue practicando, el español ya forma parte de ti."}
  ]}
];


const LEVEL3_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"Exprime-toi avec plus de nuance dans les situations de la vie de tous les jours : hypothèses, regrets, voix passive et tournures idiomatiques.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Raconte tes voyages avec un espagnol plus riche : conditions mixtes, inversions stylistiques et expressions imagées.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Maîtrise les nuances d'un espagnol soutenu pour les discussions délicates, les débats et les moments importants de la vie.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module3Lessons
  }
];
const LEVEL3_FREE_LESSONS = { 1: 3, 2: 0, 3: 0 }; // comme au niveau 2 : seulement 3 leçons gratuites dans le premier module

/* ============================================================
   NIVEAUX — chaque niveau a ses propres modules et ses propres
   leçons gratuites. MODULES et FREE_LESSONS_PER_MODULE pointent
   vers le niveau actif ; app.js les réassigne au changement de
   niveau (voir switchLevel()).
   ============================================================ */
const LEVELS = [
  { id:1, name:"Niveau 1", modules: LEVEL1_MODULES, freeLessonsPerModule: LEVEL1_FREE_LESSONS },
  { id:2, name:"Niveau 2", modules: LEVEL2_MODULES, freeLessonsPerModule: LEVEL2_FREE_LESSONS },
  { id:3, name:"Niveau 3", modules: LEVEL3_MODULES, freeLessonsPerModule: LEVEL3_FREE_LESSONS }
];

let MODULES = LEVELS[0].modules;
let FREE_LESSONS_PER_MODULE = LEVELS[0].freeLessonsPerModule;
