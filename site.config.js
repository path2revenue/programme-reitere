/**
 * ─────────────────────────────────────────────
 *  PROGRAMME RÉITÈRE
 *  Sors du salariat déguisé
 *  Config-driven landing page
 * ─────────────────────────────────────────────
 */

export const siteConfig = {

    /* ══════════════════════════════════════════
       META & SEO
       ══════════════════════════════════════════ */
    meta: {
        title: "Programme Réitère | Sors du salariat déguisé, deviens un vrai indépendant",
        description:
            "Découvre la méthode qui a aidé des freelances tech à retrouver leur liberté : agenda libre, full remote, et un système simple de 15 à 30 min/jour pour sécuriser tes revenus sans ESN ni intermédiaires.",
        keywords:
            "programme réitère, freelance tech, salarié déguisé, clients directs, prospection freelance, solopreneur, indépendant, ESN, accompagnement freelance, full remote, chef de projet, data, devops, designer",
        ogTitle: "Programme Réitère | Sors du salariat déguisé",
        ogDescription:
            "Retrouve ta liberté, choisis tes projets, et sécurise tes revenus avec un système simple. Sans ESN, sans intermédiaires.",
        ogImage: "/og-reitere.jpg",
        favicon: "🔄",
        lang: "fr",
    },

    /* ══════════════════════════════════════════
       DESIGN SYSTEM
       ══════════════════════════════════════════ */
    design: {
        palette: "default",
        fontHeading: "Playfair Display",
        fontBody: "Inter",
        fontWeights: "400;500;600;700;800;900",
        borderRadius: "8px",
    },

    /* ══════════════════════════════════════════
       GLOBAL LINKS (used by Hero, Calendar, FinalCTA)
       ══════════════════════════════════════════ */
    links: {
        whatsapp: "https://wa.me/33761941267?text=Salut%20!%20Je%20viens%20de%20la%20page%20R%C3%A9it%C3%A8re%20et%20j%E2%80%99aimerais%20en%20savoir%20plus%20sur%20le%20programme.",
        bookingEmbed: "https://api.leadconnectorhq.com/widget/booking/UM00K5oL0z1yE01Ugdlw",
        bookingEmbedType: "ghl",
    },

    /* ══════════════════════════════════════════
       SECTION ORDER
       ══════════════════════════════════════════ */
    sections: [
        "hero",
        "socialProof",
        "painPoints",
        "results",
        "videoTestimonials",
        "services",
        "process",
        "testimonials",
        "honesty",
        "faq",
        "calendar",
        "finalCTA",
    ],

    /* ══════════════════════════════════════════
       NAVBAR
       ══════════════════════════════════════════ */
    navbar: {
        logo: {
            emoji: "🔄",
            text: "Réitère",
        },
        links: [
            { label: "Le Programme", href: "#services" },
            { label: "Résultats", href: "#resultats" },
            { label: "Témoignages", href: "#temoignages" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Réserver un appel", href: "#rdv" },
    },

    /* ══════════════════════════════════════════
       HERO
       ══════════════════════════════════════════ */
    hero: {
        eyebrow: {
            text: "🔄 +250 sessions de mentoring réalisées",
            dot: true,
        },
        headline: "Sors du salariat déguisé.",
        highlightedText: "Deviens un vrai indépendant.",
        headlineEnd: "",
        subheadline:
            "Retrouve ta <strong>liberté</strong>, choisis tes projets, et sécurise tes revenus avec un <strong>système simple de 15 à 30 min/jour</strong>. Sans ESN, sans intermédiaires.",
        vslUrl: "https://www.youtube.com/embed/mMkcQPiuAm0",
        vslTitle: "L'atelier de 40 min : la méthode complète expliquée",
        ctas: [
            { text: "Je veux ma liberté →", href: "#rdv", style: "primary", arrow: false },
            { text: "Voir les témoignages →", href: "#temoignages", style: "secondary", arrow: false },
        ],
        stats: [
            { value: 250, suffix: "+", label: "Sessions de mentoring" },
            { value: 90, suffix: "j–6m", label: "Résultats concrets" },
            { value: 15, suffix: "min/j", label: "Système de prospection" },
            { value: 3, suffix: "", label: "Places / mois" },
        ],
        trustBadges: [
            "Méthode éprouvée sur +250 sessions",
            "Résultats concrets entre 90 jours et 6 mois",
            "3 places chaque mois",
        ],
    },

    /* ══════════════════════════════════════════
       SOCIAL PROOF (marquee)
       ══════════════════════════════════════════ */
    socialProof: {
        items: [
            "+250 sessions de mentoring réalisées",
            "Hassan a embauché son premier salarié",
            "Sébastien a cassé son plafond de verre",
            "Gaetan est passé au forfait",
            "Clients directs, zéro intermédiaire",
            "Vincent a signé une mission au forfait",
            "Oladele a changé son mindset pour toujours",
            "Rabah a vu que c'était faisable et pas si compliqué",
        ],
    },

    /* ══════════════════════════════════════════
       PAIN POINTS
       ══════════════════════════════════════════ */
    painPoints: {
        eyebrow: "TU TE RECONNAIS ?",
        headline: "Tu n'aimes plus être",
        highlightedText: "un salarié déguisé",
        subtitle:
            "Le vrai problème n'est pas que tu ne sais pas te vendre. C'est ta posture. Tu continues à te présenter comme une ressource.",
        items: [
            {
                icon: "building",
                title: "Dépendre d'un seul client",
                description:
                    "Subir les horaires, les contraintes, les réunions inutiles. Tu es freelance sur le papier, salarié dans les faits.",
                stat: "Salarié déguisé",
            },
            {
                icon: "moon",
                title: "Rester par sécurité",
                description:
                    "Bosser 8h par jour, t'ennuyer dans ta mission mais rester parce que tu as peur du vide.",
                stat: "Confort = piège",
            },
            {
                icon: "trending-down",
                title: "Peur de la coupure",
                description:
                    "Tu as peur d'une coupure budgétaire ou d'une fin de mission. Zéro visibilité à 3 mois.",
                stat: "0 visibilité",
            },
            {
                icon: "target",
                title: "Tu pourrais viser plus haut",
                description:
                    "Tu as un bon niveau technique. Mais tu vends ton temps, pas ton impact.",
                stat: "Temps ≠ Valeur",
            },
            {
                icon: "lock",
                title: "Tu ne sais pas faire autrement",
                description:
                    "Tu attends qu'on vienne te chercher. Tu reproduis la logique du salariat sous statut freelance.",
                stat: "Posture = problème",
            },
            {
                icon: "lightbulb",
                title: "Ce n'est pas ta faute",
                description:
                    "On ne t'a jamais appris à faire autrement. Personne ne t'a montré comment passer de ressource à partenaire.",
                stat: "La solution existe",
            },
        ],
    },

    /* ══════════════════════════════════════════
       RESULTS
       ══════════════════════════════════════════ */
    results: {
        eyebrow: "CE QUE TU PEUX ATTENDRE",
        headline: "Les résultats concrets",
        highlightedText: "du programme",
        subtitle:
            "Pas des promesses en 24h. Une compétence que tu gardes pour le long terme.",
        items: [
            {
                metric: "check-circle",
                label: "Un process clair",
                description: "Tu construis un système pour obtenir des réponses qualifiées de façon prévisible.",
                badge: "Système",
            },
            {
                metric: "handshake",
                label: "Premiers résultats concrets",
                description: "Résultats entre 90 jours et 6 mois. L'objectif : stabiliser et maîtriser la compétence pour le long terme.",
                badge: "Long terme",
            },
            {
                metric: "trending-up",
                label: "Revenus sécurisés",
                description: "Tu sécurises tes revenus sur plusieurs mois sans dépendre d'un seul contrat.",
                badge: "Stabilité",
            },
            {
                metric: "clock",
                label: "Le contrôle de ton temps",
                description: "Tu retrouves le contrôle sur ton planning, tes projets, et tu arrêtes de dépendre des ESN et des plateformes.",
                badge: "Liberté",
            },
        ],
    },

    /* ══════════════════════════════════════════
       VIDEO TESTIMONIALS
       ══════════════════════════════════════════ */
    videoTestimonials: {
        eyebrow: "ILS TÉMOIGNENT",
        headline: "Ils sont passés par",
        highlightedText: "le Programme Réitère",
        subtitle:
            "Des freelances tech comme toi partagent leur expérience. Pas des acteurs, la vraie vie.",
        videos: [
            {
                url: "https://www.youtube.com/embed/vFenmI3jdw8",
                title: "Hassan Suliman, Expert ERP Odoo",
                caption: "De freelance à l'embauche de son 1er salarié",
            },
            {
                url: "https://www.youtube.com/embed/zJDbWowOUaI",
                title: "Sébastien Roueche, Dev Fullstack Freelance",
                caption: "\"J'ai cassé le plafond de verre que j'avais\"",
            },
            {
                url: "https://www.youtube.com/embed/bD59mOQy2xs",
                title: "Vincent Chabot, Lead Dev Python",
                caption: "\"J'ai pu signer une mission au forfait\"",
            },
            {
                url: "https://www.youtube.com/embed/PJgiFUJ0F4o",
                title: "Mohamed-iadh Bani, Dev Fullstack & Data",
                caption: "\"Avec le réseau, fatalement on devient plus fort\"",
            },
            {
                url: "https://www.youtube.com/embed/oIRGEvhNY5M",
                title: "Oladele Oloruntimilehin, Cybersécurité",
                caption: "\"Ca a complètement changé mon mindset\"",
            },
            {
                url: "https://www.youtube.com/embed/OWdANMv9LNk",
                title: "Rabah Aoun, Data Engineer",
                caption: "\"Rien que pour le déclic, ça vaut le coup\"",
            },
            {
                url: "https://www.youtube.com/embed/Gw_3Ghj4Er8",
                title: "Gaetan Noël, Dev Symfony (+18 ans d'XP)",
                caption: "\"Passé au forfait plutôt qu'au TJM\"",
            },
        ],
    },

    /* ══════════════════════════════════════════
       SERVICES / WHAT'S INSIDE
       ══════════════════════════════════════════ */
    services: {
        eyebrow: "COMMENT RÉITÈRE TE FAIT SORTIR DU PIÈGE",
        headline: "Voici comment",
        highlightedText: "Réitère",
        headlineEnd: "te transforme",
        subtitle:
            "Un programme basé sur l'apprentissage actif. Dès le jour 1, on commence à faire des actions.",
        items: [
            {
                icon: "compass",
                title: "1. Clarifier ton offre",
                description:
                    "On part de ton expérience pour extraire les problèmes que tu sais résoudre. Tu crées une offre compréhensible, spécifique et non-comparable.",
                badge: "Fondation",
            },
            {
                icon: "shield",
                title: "2. Construire une posture solide",
                description:
                    "Tu arrêtes de parler compétences. Tu te présentes comme un partenaire, pas un exécutant. Plus besoin de négocier ton TJM et le full remote.",
                badge: "Posture",
            },
            {
                icon: "zap",
                title: "3. Ton système (15 à 30 min/jour)",
                description:
                    "Comment contacter les bonnes personnes, démarrer des conversations utiles, amener tes futurs clients en visio. Résultats concrets entre 90 jours et 6 mois.",
                badge: "Acquisition",
                span: 2,
            },
            {
                icon: "search",
                title: "Audit du CV Inversé",
                description:
                    "On bootstrape ton accompagnement en partant de ce que tu sais et ce que tu as déjà.",
                badge: "Bonus",
            },
            {
                icon: "calendar",
                title: "La Perm' Hebdo",
                description:
                    "Un live en mode mastermind, intelligence collective. Le mardi à 12h.",
                badge: "Bonus",
            },
            {
                icon: "pen-tool",
                title: "LinkedIn Post 101",
                description:
                    "Le guide pour écrire un post en 10 min tout en attirant tes clients.",
                badge: "Bonus",
            },
            {
                icon: "bot",
                title: "Au'tomate + Assistant IA",
                description:
                    "Les outils et tutos pour automatiser tes actions. Plus un assistant marketing IA. On est tech, pas marketeur.",
                badge: "Bonus",
            },
        ],
    },

    /* ══════════════════════════════════════════
       PROCESS
       ══════════════════════════════════════════ */
    process: {
        eyebrow: "LE PARCOURS",
        headline: "Les 3 piliers de",
        highlightedText: "ta transformation",
        subtitle:
            "La théorie vient soutenir les actions et les améliorer. Dès le jour 1, on passe à l'action.",
        steps: [
            {
                number: 1,
                title: "Clarifier ton offre",
                description:
                    "Partir de ton expérience, extraire les problèmes que tu sais résoudre et les types de clients à cibler. Créer une offre compréhensible, spécifique et non-comparable.",
            },
            {
                number: 2,
                title: "Construire une posture solide",
                description:
                    "Se présenter comme un partenaire, pas un exécutant. Gagner en confiance et arrêter de subir. Tu deviens un partenaire qu'on consulte et qu'on choisit.",
            },
            {
                number: 3,
                title: "Mettre en place ton système",
                description:
                    "15 à 30 min par jour. Contacter les bonnes personnes, démarrer des conversations utiles, amener tes futurs clients en visio avec la méthode du « guide ». Résultats concrets entre 90 jours et 6 mois.",
            },
        ],
    },

    /* ══════════════════════════════════════════
       TESTIMONIALS (written carousel)
       ══════════════════════════════════════════ */
    testimonials: {
        eyebrow: "TÉMOIGNAGES",
        headline: "Ce qu'ils",
        highlightedText: "en disent",
        headlineEnd: "",
        items: [
            {
                quote:
                    "Je suis parti du principe que si ça marche une fois, je continue. L'accompagnement a été rentable rapidement. J'ai gagné des mois. J'ai embauché mon premier employé grâce à l'activité générée.",
                name: "Hassan Suliman",
                role: "Expert ERP Odoo",
                stars: 5,
                color: "#00ff88",
            },
            {
                quote:
                    "J'ai réalisé que j'étais une entreprise, et que freelancing c'est du business. J'ai cassé le plafond de verre que j'avais. Tu perds pas de temps quand tu es accompagné, tu fais moins d'erreurs. Aujourd'hui je suis vraiment détendu, j'ai gagné en sérénité.",
                name: "Sébastien Roueche",
                role: "Développeur Fullstack Freelance",
                image: "/sebastien.webp",
                stars: 5,
                color: "#6366f1",
            },
            {
                quote:
                    "J'avais pas cette sensation de liberté. J'ai pu signer une mission au forfait. Oser aller voir les gens sur LinkedIn. Le fait de payer quelqu'un pour m'accompagner, je suis pas tout seul et je lui dois des comptes.",
                name: "Vincent Chabot",
                role: "Lead Développeur Python Freelance",
                image: "/vincent_chabot.webp",
                stars: 5,
                color: "#f59e0b",
            },
            {
                quote:
                    "J'étais un peu isolé. Il y a des recettes qui existent. J'ai trouvé une mission récemment à travers le programme, et avec le réseau… fatalement on devient plus fort.",
                name: "Mohamed-iadh Bani",
                role: "Dev Fullstack Freelance, Spécialiste Data",
                image: "/mohamed_iad.webp",
                stars: 5,
                color: "#ef4444",
            },
            {
                quote:
                    "J'avais des compétences mais je savais pas comment les monétiser. Ça a complètement changé mon mindset. Maintenant je vois mon métier comme étant un artisan.",
                name: "Oladele Oloruntimilehin",
                role: "Automatisation & Cybersécurité",
                image: "/oladele.webp",
                stars: 5,
                color: "#8b5cf6",
            },
            {
                quote:
                    "On se rend compte qu'on est limité par le modèle de la régie. Rien que le déclic de voir que c'est faisable, c'est pas si compliqué. Ca vaut le coup, ça nous fait changer de point de vue sur plein de choses.",
                name: "Rabah Aoun",
                role: "Data Engineer",
                image: "/rabah.webp",
                stars: 5,
                color: "#06b6d4",
            },
            {
                quote:
                    "Je suis passé à vendre du forfait plutôt que du TJM. Moi ce qui m'intéressait c'était récupérer du temps. Une fois qu'on a les bonnes méthodes, ça devient tout de suite beaucoup plus facile. Vaut mieux se faire accompagner par quelqu'un qui est déjà passé par là.",
                name: "Gaetan Noël",
                role: "Développeur Symfony, +18 ans d'XP",
                image: "/gaeten.webp",
                stars: 5,
                color: "#10b981",
            },
        ],
    },

    /* ══════════════════════════════════════════
       HONESTY
       ══════════════════════════════════════════ */
    honesty: {
        eyebrow: "L'HISTOIRE DERRIÈRE RÉITÈRE",
        headline: "Pourquoi",
        highlightedText: "ce programme existe",
        paragraphs: [
            "Imrane Dessai est freelance depuis 2021. Comme beaucoup, il croyait être indépendant… mais en réalité il était encore un salarié déguisé. Horaires imposés, dépendance à un seul client, aucune maîtrise de son avenir.",
            "À force d'expérimenter, il a compris qu'il ne s'agissait pas seulement de « trouver des clients ». Le vrai changement, c'est passer du statut de ressource interchangeable à celui de partenaire indispensable.",
            "En appliquant cette approche : temps de travail divisé par deux, revenus stables, du temps pour la famille et les projets. Aujourd'hui, il transmet cette méthode avec le Programme Réitère. Déjà plus de 250 sessions de mentoring réalisées.",
            "L'équipe Réitère t'accompagne de A à Z : du premier échange à la signature de ton premier client direct.",
        ],
        signature: {
            name: "L'équipe Réitère",
            role: "Accompagnement freelances tech",
        },
    },

    /* ══════════════════════════════════════════
       FAQ
       ══════════════════════════════════════════ */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions fréquentes",
        items: [
            {
                q: "J'ai besoin de plus d'info sur la méthode.",
                a:
                    "Ça tombe bien. On a un atelier de 40 min où on t'explique tout. Tu vas pouvoir vérifier que ça match avec ce que tu veux faire : https://youtu.be/mMkcQPiuAm0",
            },
            {
                q: "Je n'ai pas le temps.",
                a:
                    "Tu as 15 à 30 minutes par jour. Pas plus. C'est tout ce qu'il faut. Le programme est conçu pour s'intégrer dans ton planning déjà chargé.",
            },
            {
                q: "Je ne suis pas commercial.",
                a:
                    "Parfait. On ne fait pas du commercial. On crée des conversations entre pairs.",
            },
            {
                q: "Le marché est saturé.",
                a:
                    "Il ne l'est que pour ceux qui vendent leurs compétences. Pas pour ceux qui vendent une solution claire.",
            },
            {
                q: "Les entreprises travaillent seulement avec des ESN.",
                a:
                    "Faux. Les ESN adressent les grands comptes. Pas les milliers d'entreprises qui ont des problèmes concrets… et du budget.",
            },
            {
                q: "Je n'ai pas de réseau.",
                a:
                    "Tu en as un. Tu l'utilises juste mal. Et tu vas l'agrandir chaque jour avec la méthode.",
            },
            {
                q: "Je ne suis pas dev, est-ce que ça marche pour moi ?",
                a:
                    "Le programme est ouvert à tous les profils tech : développeurs, chefs de projet, designers, data engineers, profils IA, DevOps, industriels… Tous les profils tech qui veulent sortir du modèle classique.",
            },
            {
                q: "Je ne sais pas si ça s'applique à moi.",
                a:
                    "Philippe croyait que ce n'était pas possible de trouver une offre à partir de son expérience. Il a accepté de se laisser guider et on l'a fait en live : https://youtu.be/sdxDbWAqgk8",
            },
            {
                q: "Je suis prêt à investir mais pas trop non plus.",
                a:
                    "On ne propose pas de financement par CPF et on ne le fera probablement jamais. On veut travailler avec des gens sérieux qui investissent en eux-mêmes, comme ils le demanderont à leurs propres clients.",
            },
            {
                q: "J'ai déjà fait des messages de prospection, ça marche pas.",
                a:
                    "Ça veut dire que ce que TU as fait ne fonctionne pas. Pas que l'envoi de message ne fonctionne pas en général. Tu n'as pas les règles de base. C'était le cas d'Andy, on a travaillé ça ensemble : https://youtu.be/FgNS3_5NPK4",
            },
            {
                q: "C'est pour quel profil exactement ?",
                a:
                    "Pour les freelances tech confirmés ou seniors, en mission longue, qui veulent retrouver du temps pour eux et leurs proches, et arrêter de subir leur activité. Ce n'est pas fait pour ceux dans l'urgence de trouver une mission ou qui veulent juste amasser un max de thunes.",
            },
        ],
    },

    /* ══════════════════════════════════════════
       CALENDAR / BOOKING
       ══════════════════════════════════════════ */
    calendar: {
        eyebrow: "PRÊT À PASSER À L'ACTION ?",
        headline: "Réserve ton",
        highlightedText: "appel découverte",
        subtitle:
            "On voit ensemble où tu en es, ce qui te bloque, et si Réitère est fait pour toi. 3 places chaque mois.",
        benefits: [
            "Diagnostic personnalisé de ta situation",
            "Identification de tes blocages",
            "Plan d'action concret",
            "Zéro engagement",
        ],
        whatsappCopy: "Tu préfères discuter directement ?",
        whatsappLabel: "Contacter sur WhatsApp",
    },

    /* ══════════════════════════════════════════
       FINAL CTA
       ══════════════════════════════════════════ */
    finalCTA: {
        eyebrow: "3 PLACES CHAQUE MOIS",
        headline: "Tu peux continuer à subir. Ou tu peux",
        highlightedText: "reprendre le contrôle.",
        headlineEnd: "",
        subtitle:
            "Tu as les compétences. Il te manque juste la méthode pour en vivre selon tes propres règles.",
        ctas: [
            { text: "Réserver mon appel gratuit →", href: "#rdv", style: "primary", arrow: false },
            { text: "Voir les témoignages →", href: "#temoignages", style: "secondary", arrow: false },
        ],
        badges: [
            "+250 sessions",
            "Résultats en 90j–6 mois",
            "3 places / mois",
            "Appel gratuit",
        ],
    },

    /* ══════════════════════════════════════════
       FOOTER
       ══════════════════════════════════════════ */
    footer: {
        brand: "Réitère",
        tagline: "Sors du salariat déguisé. Deviens un vrai indépendant.",
        links: [
            { label: "YouTube", href: "https://www.youtube.com/@imranedessai" },
            { label: "Mentions légales", href: "/mentions-legales" },
        ],
        socials: [
            { platform: "YouTube", url: "https://www.youtube.com/@imranedessai" },
        ],
        legal: "© 2025 Réitère. Tous droits réservés.",
    },

    /* ══════════════════════════════════════════
       MERCI (Thank You Page)
       ══════════════════════════════════════════ */
    merci: {
        headline: "C'est noté",
        highlightedText: "à très vite !",
        subtitle:
            "Ton appel découverte est réservé. On se retrouve très bientôt pour faire le point sur ta situation.",
        gift: {
            badge: "EN ATTENDANT",
            title: "Les 5 croyances limitantes du freelance tech",
            description:
                "Découvre les 5 croyances qui t'empêchent de sortir du salariat déguisé. Regarde cette vidéo avant notre appel pour qu'on avance plus vite ensemble.",
            embedUrl: "https://www.youtube.com/embed/TbYu8Xl8Yl4",
            benefits: [
                { icon: "brain", label: "Les 5 blocages identifiés" },
                { icon: "unlock", label: "Comment les dépasser" },
                { icon: "lightbulb", label: "Exemples concrets" },
            ],
            footnote: "Les croyances qui te retiennent. Gratuit.",
        },
        backLink: {
            text: "← Retour au site",
            url: "/",
        },
    },
};
