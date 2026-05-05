/* ============================================================
   SERVICES DATA
   Les 9 services définitifs de l'Agence Barthié
   Traduction bilingue (fr/en)
   ============================================================ */

export const services = [
  {
    id: 'privatisation',
    title: {
      fr: 'Privatisation de Lieux',
      en: 'Venue Privatization'
    },
    subtitle: {
      fr: 'Des lieux d\'exception pour des événements uniques.',
      en: 'Exceptional venues for unique events.'
    },
    description: {
      fr: 'Nous ouvrons les portes de lieux patrimoniaux et d\'espaces prestigieux pour accueillir vos événements. Chaque privatisation est pensée comme une expérience rare, où l\'histoire du lieu rencontre une organisation parfaitement orchestrée.',
      en: 'We open the doors of heritage sites and prestigious spaces to host your events. Every privatization is designed as a rare experience, where the history of the venue meets perfectly orchestrated organization.'
    },
    image: '/assets/images/services/privatisation.jpg',
    category: { fr: 'Événementiel', en: 'Events' }
  },
  {
    id: 'accompagnement',
    title: {
      fr: 'Accompagnement Client',
      en: 'Client Accompaniment'
    },
    subtitle: {
      fr: 'Une présence professionnelle, discrète et dédiée.',
      en: 'A professional, discreet, and dedicated presence.'
    },
    description: {
      fr: 'Notre équipe vous accompagne lors de vos déplacements et événements. Formés aux exigences des environnements haut de gamme, nous veillons au bon déroulement de votre séjour avec élégance, vigilance et un sens du service irréprochable.',
      en: 'Our team accompanies you during your travels and events. Trained in the demands of high-end environments, we ensure the smooth running of your stay with elegance, vigilance, and an impeccable sense of service.'
    },
    image: '/assets/images/services/accompagnement.jpg',
    category: { fr: 'Conciergerie', en: 'Concierge' }
  },
  {
    id: 'decoration',
    title: {
      fr: 'Décoration',
      en: 'Decoration'
    },
    subtitle: {
      fr: 'Des atmosphères conçues pour marquer les esprits.',
      en: 'Atmospheres designed to leave a lasting impression.'
    },
    description: {
      fr: 'Nous concevons la scénographie et la décoration de vos événements avec une attention portée aux moindres détails afin de créer une expérience visuelle élégante, harmonieuse et parfaitement orchestrée.',
      en: 'We design the scenography and decoration of your events with attention to the smallest detail to create an elegant, harmonious, and perfectly orchestrated visual experience.'
    },
    image: '/assets/images/services/decoration.jpg',
    category: { fr: 'Événementiel', en: 'Events' }
  },
  {
    id: 'bagages',
    title: {
      fr: 'Transfert de Bagages',
      en: 'Luggage Transfer'
    },
    subtitle: {
      fr: 'Voyagez l\'esprit libre, vos effets personnels en sécurité.',
      en: 'Travel with a free mind, your belongings safe.'
    },
    description: {
      fr: 'Nous organisons le transfert sécurisé de vos bagages. De la prise en charge à la livraison, chaque étape est gérée avec rigueur et discrétion afin de vous offrir un déplacement fluide sans contrainte logistique.',
      en: 'We organize the secure transfer of your luggage. From collection to delivery, each step is managed with rigor and discretion to offer you a smooth journey without logistical constraints.'
    },
    image: '/assets/images/services/bagages.jpg',
    category: { fr: 'Conciergerie', en: 'Concierge' }
  },
  {
    id: 'chauffeurs',
    title: {
      fr: 'Chauffeurs Privés',
      en: 'Private Chauffeurs'
    },
    subtitle: {
      fr: 'Des déplacements fluides, sécurisés et élégants.',
      en: 'Smooth, secure, and elegant travels.'
    },
    description: {
      fr: 'Profitez de notre flotte de véhicules haut de gamme avec chauffeurs expérimentés. Que ce soit pour un transfert aéroport, une mise à disposition journalière ou un événement, nous vous garantissons ponctualité et confort absolu.',
      en: 'Enjoy our fleet of high-end vehicles with experienced chauffeurs. Whether for an airport transfer, daily availability, or an event, we guarantee punctuality and absolute comfort.'
    },
    image: '/assets/images/services/chauffeurs.jpg',
    category: { fr: 'Conciergerie', en: 'Concierge' }
  },
  {
    id: 'dog-sitting',
    title: {
      fr: 'Dog Sitting',
      en: 'Dog Sitting'
    },
    subtitle: {
      fr: 'Une présence de confiance pour vos compagnons.',
      en: 'A trusted presence for your companions.'
    },
    description: {
      fr: 'Nous proposons des services de garde pour vos animaux de compagnie, assurés par des intervenants sélectionnés pour leur sérieux. Chaque prise en charge se fait avec attention et bienveillance pour vous offrir une tranquillité d\'esprit.',
      en: 'We offer pet sitting services, provided by professionals selected for their reliability. Each care is carried out with attention and kindness to offer you peace of mind.'
    },
    image: '/assets/images/services/dog-sitting.jpg',
    category: { fr: 'Conciergerie', en: 'Concierge' }
  },
  {
    id: 'catering',
    title: {
      fr: 'Catering',
      en: 'Catering'
    },
    subtitle: {
      fr: 'La gastronomie d\'exception pour vos réceptions.',
      en: 'Exceptional gastronomy for your receptions.'
    },
    description: {
      fr: 'Nos chefs partenaires créent des expériences culinaires raffinées pour sublimer vos événements. Entre créations signatures et maîtrise des saveurs, chaque prestation apporte une dimension conviviale et sophistiquée.',
      en: 'Our partner chefs create refined culinary experiences to enhance your events. Between signature creations and flavor mastery, each service brings a convivial and sophisticated dimension.'
    },
    image: '/assets/images/services/catering.jpg',
    category: { fr: 'Gastronomie', en: 'Gastronomy' }
  },
  {
    id: 'livraison',
    title: {
      fr: 'Livraison & Shopping',
      en: 'Delivery & Shopping'
    },
    subtitle: {
      fr: 'Répondre à toutes vos envies dans les meilleurs délais.',
      en: 'Fulfilling all your desires in the shortest time.'
    },
    description: {
      fr: 'Que vous ayez besoin d\'une livraison express, de faire réaliser vos achats de luxe ou de trouver un objet rare, notre service s\'occupe de tout avec la plus grande efficacité et discrétion.',
      en: 'Whether you need express delivery, luxury shopping done for you, or to find a rare item, our service takes care of everything with the utmost efficiency and discretion.'
    },
    image: '/assets/images/services/livraison.jpg',
    category: { fr: 'Conciergerie', en: 'Concierge' }
  },
  {
    id: 'picnic',
    title: {
      fr: 'Picnics de Luxe',
      en: 'Luxury Picnics'
    },
    subtitle: {
      fr: 'Une parenthèse bucolique et raffinée.',
      en: 'A bucolic and refined interlude.'
    },
    description: {
      fr: 'Nous organisons des Picnics haut de gamme dans des cadres idylliques. Profitez d\'un moment hors du temps avec une mise en scène élégante, un confort absolu et des mets d\'exception préparés pour vous.',
      en: 'We organize high-end picnics in idyllic settings. Enjoy a timeless moment with an elegant staging, absolute comfort, and exceptional dishes prepared for you.'
    },
    image: '/assets/images/services/picnic.jpg',
    category: { fr: 'Événementiel', en: 'Events' }
  }
];
