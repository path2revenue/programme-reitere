/**
 * ─────────────────────────────────────────────
 *  PROGRAMME RÉITÈRE — Imrane Dessai
 *  Le Slowpreneur Tech
 *  Config-driven landing page
 * ─────────────────────────────────────────────
 */

export const siteConfig = {

    /* ══════════════════════════════════════════
       META & SEO
       ══════════════════════════════════════════ */
    meta: {
        title: "Programme Réitère — Passe de Freelance à Solopreneur Tech | Imrane Dessai",
        description:
            "Découvre la méthode qui a aidé +250 freelances tech à travailler moins, kiffer plus, et ne jamais rogner sur leurs revenus. Trouve des clients directs, vends au projet et reprends le contrôle de ta vie.",
        keywords:
            "programme réitère, imrane dessai, slowpreneur tech, freelance tech, solopreneur, clients directs, prospection freelance, vendre au projet, TJM, formation freelance, accompagnement freelance",
        ogTitle: "Programme Réitère — De Freelance à Solopreneur Tech",
        ogDescription:
            "La méthode éprouvée pour attirer des clients récurrents, vendre au projet et travailler selon tes propres règles.",
        ogImage: "/og-reitere.jpg",
        favicon: "🔄",
        lang: "fr",
    },

    /* ══════════════════════════════════════════
       DESIGN SYSTEM
       ══════════════════════════════════════════ */
    design: {
        palette: "dark",
        fontHeading: "Inter",
        fontBody: "Inter",
        fontWeights: "400;500;600;700;800;900",
        borderRadius: "16px",
    },

    /* ══════════════════════════════════════════
       GLOBAL LINKS (used by Hero, Calendar, FinalCTA)
       ══════════════════════════════════════════ */
    links: {
        whatsapp: "https://wa.me/33XXXXXXXXX",
        bookingEmbed: "https://calendly.com/imranedessai/decouverte",
        bookingEmbedType: "calendly",
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
            { label: "Le Process", href: "#process" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Réserver un appel", href: "#rdv" },
    },

    /* ══════════════════════════════════════════
       HERO
       ══════════════════════════════════════════ */
    hero: {
        eyebrow: {
            text: "🔄 +250 freelances accompagnés",
            dot: true,
        },
        headline: "Arrête de subir le freelancing.",
        highlightedText: "Commence à le maîtriser.",
        headlineEnd: "",
        subheadline:
            "Tu es dev, data, devops ou tech lead freelance ? Tu en as marre des ESN, du TJM plafonné et de quémander des missions ?<br/>Le Programme Réitère t'aide à trouver des <strong>clients directs</strong>, vendre au projet et reprendre le contrôle de ta vie.",
        vslUrl: null,
        vslTitle: "Présentation Programme Réitère",
        ctas: [
            { text: "Je veux ma liberté →", href: "#rdv", style: "primary", arrow: false },
            { text: "Voir les résultats →", href: "#resultats", style: "secondary", arrow: false },
        ],
        stats: [
            { value: 250, suffix: "+", label: "Sessions de mentoring" },
            { value: 50, suffix: "%", label: "Temps de travail en moins" },
            { value: 0, suffix: "", label: "Intermédiaire" },
            { value: 100, suffix: "%", label: "Liberté de choix" },
        ],
        trustBadges: [
            "Méthode testée sur +250 freelances tech",
            "Accompagnement personnalisé 1:1",
            "Résultats en 60-90 jours",
        ],
    },

    /* ══════════════════════════════════════════
       SOCIAL PROOF (marquee)
       ══════════════════════════════════════════ */
    socialProof: {
        items: [
            "🔄 +250 sessions de mentoring réalisées",
            "⭐ Témoignages clients sur YouTube",
            "🚀 De freelance à solopreneur en 90 jours",
            "💰 Vente au projet, pas au TJM",
            "🎯 Clients directs, zéro intermédiaire",
            "📈 Revenus maintenus, temps divisé par 2",
        ],
    },

    /* ══════════════════════════════════════════
       PAIN POINTS
       — expects: eyebrow, headline, highlightedText, subtitle, items[].icon/title/description/stat
       ══════════════════════════════════════════ */
    painPoints: {
        eyebrow: "😤 Ça te parle ?",
        headline: "Tu reconnais",
        highlightedText: "cette situation",
        subtitle:
            "Si tu te retrouves dans au moins 2 de ces points, le Programme Réitère est fait pour toi.",
        items: [
            {
                icon: "🏢",
                title: "Salarié déguisé",
                description:
                    "Tu bosses en régie, tu fais tes heures comme un salarié, sauf que t'as pas les avantages. Tu es freelance que sur le papier.",
                stat: "72% des freelances tech",
            },
            {
                icon: "🔗",
                title: "Dépendant des intermédiaires",
                description:
                    "ESN, cabinets de recrutement, plateformes… Ils prennent leur marge et toi tu n'as aucun contact direct avec les décideurs.",
                stat: "Marge ESN : 30-50%",
            },
            {
                icon: "📉",
                title: "TJM plafonné",
                description:
                    "Tu vends ta journée, pas ta valeur. Résultat : ton revenu est limité par le nombre de jours que tu peux facturer.",
                stat: "Plafond = nb de jours",
            },
            {
                icon: "😰",
                title: "Peur du trou d'air",
                description:
                    "Entre deux missions, c'est la panique. Tu n'as pas de pipeline de clients, pas de visibilité.",
                stat: "0 visibilité à 3 mois",
            },
            {
                icon: "🏃",
                title: "Toujours en train de courir",
                description:
                    "Tu travailles autant qu'un salarié (voire plus) mais sans la sécurité. Tu rêvais de liberté, tu as juste changé de patron.",
                stat: "Liberté = illusion",
            },
            {
                icon: "🤐",
                title: "Pas de reconnaissance",
                description:
                    "Tu livres de la qualité, tu résous des problèmes complexes, mais tu restes une \"ressource\" interchangeable.",
                stat: "Ressource ≠ Partenaire",
            },
        ],
    },

    /* ══════════════════════════════════════════
       RESULTS
       — expects: eyebrow, headline, highlightedText, items[].metric/label/description/badge
       ══════════════════════════════════════════ */
    results: {
        eyebrow: "📊 RÉSULTATS RÉELS",
        headline: "Ce que nos freelances",
        highlightedText: "ont obtenu",
        subtitle:
            "Des résultats concrets, pas des promesses en l'air.",
        items: [
            {
                metric: "÷2",
                label: "Temps de travail",
                description: "Travaille 2x moins tout en maintenant le même revenu grâce à la vente au projet.",
                badge: "Liberté",
            },
            {
                metric: "250+",
                label: "Sessions de mentoring",
                description: "Plus de 250 sessions individuelles réalisées avec des freelances tech en France.",
                badge: "Expérience",
            },
            {
                metric: "0",
                label: "Intermédiaire nécessaire",
                description: "Nos freelances trouvent des clients directs, sans ESN, sans plateforme, sans commission.",
                badge: "Indépendance",
            },
            {
                metric: "100%",
                label: "Choix des projets",
                description: "Tu choisis tes clients, tes projets, ton rythme. Tu ne subis plus, tu décides.",
                badge: "Contrôle",
            },
        ],
    },

    /* ══════════════════════════════════════════
       VIDEO TESTIMONIALS
       — expects: eyebrow, headline, highlightedText, videos[].url/title/caption
       ══════════════════════════════════════════ */
    videoTestimonials: {
        eyebrow: "🎬 ILS TÉMOIGNENT",
        headline: "Ils sont passés par",
        highlightedText: "le Programme Réitère",
        subtitle:
            "Des freelances tech comme toi partagent leur expérience. Pas des acteurs — la vraie vie.",
        videos: [
            {
                url: "https://www.youtube.com/embed/VIDEO_ID_1",
                title: "De freelance à l'embauche de son 1er salarié",
                caption: "De freelance à l'embauche de son 1er salarié",
            },
            {
                url: "https://www.youtube.com/embed/VIDEO_ID_2",
                title: "Changer de mindset — De freelance à entrepreneur",
                caption: "Changer de mindset — De freelance à entrepreneur",
            },
            {
                url: "https://www.youtube.com/embed/VIDEO_ID_3",
                title: "Comment j'ai trouvé mes premiers clients directs",
                caption: "Comment j'ai trouvé mes premiers clients directs",
            },
        ],
    },

    /* ══════════════════════════════════════════
       SERVICES / WHAT'S INSIDE
       — expects: eyebrow, headline, highlightedText, headlineEnd, subtitle, items[].icon/title/description/badge/span
       ══════════════════════════════════════════ */
    services: {
        eyebrow: "🎯 LE PROGRAMME",
        headline: "Tout ce que tu obtiens avec",
        highlightedText: "Réitère",
        headlineEnd: "",
        subtitle:
            "Un accompagnement complet pour passer de freelance dépendant à solopreneur libre.",
        items: [
            {
                icon: "🧭",
                title: "Stratégie de positionnement",
                description:
                    "Définis ton offre, ta niche et ton message. Deviens un partenaire de confiance, pas une \"ressource\" de plus.",
                badge: "Fondation",
            },
            {
                icon: "🎯",
                title: "Prospection sans intermédiaire",
                description:
                    "Apprends à identifier et contacter les décideurs directement. Plus jamais dépendant d'une ESN.",
                badge: "Acquisition",
            },
            {
                icon: "💰",
                title: "Vente au projet",
                description:
                    "Abandonne le TJM. Apprends à packager et vendre tes services au projet avec des propositions qui closent.",
                badge: "Monétisation",
            },
            {
                icon: "🔄",
                title: "Clients récurrents",
                description:
                    "Crée un flux de missions récurrentes. Tes anciens clients deviennent tes meilleurs apporteurs d'affaires.",
                badge: "Pérennité",
            },
            {
                icon: "🧠",
                title: "Sessions de mentoring 1:1",
                description:
                    "Un accompagnement personnalisé avec Imrane. Pas de formation générique — un plan d'action adapté à ton profil.",
                badge: "Sur mesure",
                span: 2,
            },
            {
                icon: "📚",
                title: "Ressources & Templates",
                description:
                    "Accède à des templates de prospection, propositions commerciales, pricing et scripts éprouvés.",
                badge: "Outils",
            },
            {
                icon: "🤝",
                title: "Communauté privée",
                description:
                    "Rejoins un groupe de freelances tech ambitieux qui s'entraident et partagent des leads.",
                badge: "Réseau",
            },
        ],
    },

    /* ══════════════════════════════════════════
       PROCESS
       — expects: eyebrow, headline, highlightedText, steps[].number/title/description
       ══════════════════════════════════════════ */
    process: {
        eyebrow: "⚡ COMMENT ÇA MARCHE",
        headline: "Le parcours en",
        highlightedText: "4 étapes",
        subtitle:
            "De freelance qui subit à solopreneur qui choisit.",
        steps: [
            {
                number: 1,
                title: "Appel découverte (30 min)",
                description:
                    "On fait le point sur ta situation : revenus, charges, temps de travail, aspirations. On identifie ce qui te bloque.",
            },
            {
                number: 2,
                title: "Diagnostic & Plan d'action",
                description:
                    "On construit ton plan de bataille personnalisé : positionnement, offre, cibles, canaux de prospection.",
            },
            {
                number: 3,
                title: "Exécution accompagnée",
                description:
                    "Tu exécutes ton plan avec un accompagnement en mentoring 1:1. On ajuste en temps réel, on accélère ce qui marche.",
            },
            {
                number: 4,
                title: "Autonomie & Récurrence",
                description:
                    "Tu maîtrises le système. Tu as des clients directs, tu vends au projet, et tu choisis quand et avec qui tu travailles.",
            },
        ],
    },

    /* ══════════════════════════════════════════
       TESTIMONIALS (written carousel)
       — expects: eyebrow, headline, highlightedText, headlineEnd, items[].color/stars/quote/name/role
       ══════════════════════════════════════════ */
    testimonials: {
        eyebrow: "💬 TÉMOIGNAGES",
        headline: "Ce qu'ils",
        highlightedText: "en disent",
        headlineEnd: "",
        items: [
            {
                quote:
                    "Avant Réitère, je passais par des ESN et je subissais mes missions. Aujourd'hui je choisis mes clients, je vends au projet et je travaille 3 jours par semaine.",
                name: "Freelance accompagné",
                role: "Développeur Full-Stack → Solopreneur",
                stars: 5,
                color: "#00ff88",
            },
            {
                quote:
                    "J'ai embauché mon premier salarié grâce à la méthode d'Imrane. Passer du mindset freelance au mindset entrepreneur, c'est ça le vrai game changer.",
                name: "Freelance accompagné",
                role: "Freelance Tech → Fondateur d'agence",
                stars: 5,
                color: "#6366f1",
            },
            {
                quote:
                    "Le mentoring 1:1 change tout. Ce n'est pas une formation vidéo où tu es livré à toi-même. Imrane te challenge, te guide et t'aide à exécuter concrètement.",
                name: "Freelance accompagné",
                role: "Data Engineer → Solopreneur",
                stars: 5,
                color: "#f59e0b",
            },
            {
                quote:
                    "Je suis passé de 0 client direct à un pipe récurrent de missions. Le processus de prospection qu'on met en place est chirurgical.",
                name: "Freelance accompagné",
                role: "DevOps → Consultant indépendant",
                stars: 5,
                color: "#ef4444",
            },
        ],
    },

    /* ══════════════════════════════════════════
       HONESTY
       — expects: eyebrow, headline, highlightedText, paragraphs[], signature.name/role
       ══════════════════════════════════════════ */
    honesty: {
        eyebrow: "🤝 MON ENGAGEMENT",
        headline: "Un mot",
        highlightedText: "d'honnêteté",
        paragraphs: [
            "Je ne suis pas un gourou du business. Je suis un dev qui en avait marre d'être traité comme un pion. En télétravail, je bossais vite et bien, je finissais tôt et je profitais de ma famille. Tout le monde y gagnait. Mais on m'a demandé de revenir au bureau, de faire mes heures, quitte à ne rien faire pendant des heures.",
            "J'ai quitté le salariat, je suis devenu freelance, puis solopreneur. J'ai testé, échoué, itéré — et j'ai fini par trouver un système qui marche. Un système qui me permet de travailler moins, kiffer plus, sans jamais rogner sur mes revenus.",
            "Le Programme Réitère, c'est ce système. Pas une promesse miracle, pas un \"deviens riche en dormant\". C'est une méthode concrète, éprouvée sur +250 sessions. Si tu es sérieux et prêt à bosser, ça marche.",
        ],
        signature: {
            name: "Imrane Dessai",
            role: "Le Slowpreneur Tech",
        },
    },

    /* ══════════════════════════════════════════
       FAQ
       — expects: eyebrow, headline, items[].question/answer
       ══════════════════════════════════════════ */
    faq: {
        eyebrow: "❓ FAQ",
        headline: "Questions fréquentes",
        items: [
            {
                q: "C'est pour quel profil exactement ?",
                a:
                    "Le Programme Réitère est conçu pour les freelances tech seniors : développeurs, data engineers, devops, tech leads, architectes… Si tu as des compétences techniques solides mais que tu galères à trouver des clients directs ou à sortir du modèle TJM, c'est pour toi.",
            },
            {
                q: "Je suis encore salarié, ça peut m'aider ?",
                a:
                    "Oui, si tu es en transition vers le freelancing ou si tu envisages de te lancer. On construit ta stratégie avant même que tu quittes ton CDI pour que tu démarres avec un plan.",
            },
            {
                q: "C'est quoi la différence avec une formation en ligne classique ?",
                a:
                    "Réitère n'est pas une formation vidéo. C'est un accompagnement personnalisé avec du mentoring 1:1. On travaille sur TON cas, tes clients, ton marché.",
            },
            {
                q: "Combien de temps pour voir des résultats ?",
                a:
                    "La plupart des freelances accompagnés obtiennent leurs premiers clients directs en 60 à 90 jours. Ça dépend de ton implication et de ta niche technique.",
            },
            {
                q: "Je suis bon en technique mais nul en vente, c'est un problème ?",
                a:
                    "C'est exactement le profil type. On te donne les scripts, les templates et la méthode pas-à-pas. Tu n'as pas besoin d'être un commercial.",
            },
            {
                q: "L'appel découverte est-il gratuit ?",
                a:
                    "Oui, l'appel de 30 minutes est 100% gratuit et sans engagement. C'est un échange pour comprendre ta situation.",
            },
            {
                q: "Qu'est-ce qui se passe après le programme ?",
                a:
                    "Tu gardes l'accès à la communauté et aux ressources. L'objectif c'est que tu sois autonome. Une fois que tu maîtrises le système, tu n'as plus besoin de personne.",
            },
        ],
    },

    /* ══════════════════════════════════════════
       CALENDAR / BOOKING
       — expects: eyebrow, headline, highlightedText, subtitle, benefits[], whatsappCopy, whatsappLabel
       — also reads siteConfig.links.bookingEmbed/bookingEmbedType/whatsapp
       ══════════════════════════════════════════ */
    calendar: {
        eyebrow: "PRÊT À PASSER À L'ACTION ?",
        headline: "Réserve ton",
        highlightedText: "appel découverte",
        subtitle:
            "30 minutes. Gratuit. Sans engagement. On fait le point sur ta situation et on voit ensemble si Réitère peut t'aider.",
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
       — expects: eyebrow, headline, highlightedText, headlineEnd, subtitle, ctas[].text/href/style/icon/arrow, badges[]
       ══════════════════════════════════════════ */
    finalCTA: {
        eyebrow: "🚀 PASSE À L'ACTION",
        headline: "Chaque jour passé en régie est un jour de liberté perdu.",
        highlightedText: "Reprends le contrôle.",
        headlineEnd: "",
        subtitle:
            "Tu as les compétences. Il te manque juste la méthode pour en vivre selon tes propres règles.",
        ctas: [
            { text: "Réserver mon appel gratuit →", href: "#rdv", style: "primary", arrow: false },
            { text: "Voir les témoignages", href: "#temoignages", style: "secondary", arrow: false },
        ],
        badges: [
            "🔄 +250 sessions",
            "⚡ Résultats en 90 jours",
            "🤝 0 engagement",
            "💬 Appel gratuit",
        ],
    },

    /* ══════════════════════════════════════════
       FOOTER
       — expects: brand, tagline, links[].label/href, socials[].platform/url, legal
       ══════════════════════════════════════════ */
    footer: {
        brand: "Réitère",
        tagline: "Travailler moins, kiffer plus, sans jamais rogner sur tes revenus.",
        links: [
            { label: "YouTube", href: "https://www.youtube.com/@imranedessai" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/imranedessai/" },
            { label: "dessai.fr", href: "https://dessai.fr" },
        ],
        socials: [
            { platform: "YouTube", url: "https://www.youtube.com/@imranedessai" },
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/imranedessai/" },
        ],
        legal: "© 2024 Imrane Dessai — Le Slowpreneur Tech. Tous droits réservés.",
    },

    /* ══════════════════════════════════════════
       MERCI (Thank You Page)
       — expects: headline, highlightedText, subtitle, gift.badge/title/description/benefits/cta/footnote, backLink
       ══════════════════════════════════════════ */
    merci: {
        headline: "C'est noté",
        highlightedText: "à très vite ! 🔄",
        subtitle:
            "Ton appel découverte est réservé. En attendant, rejoins le groupe privé pour commencer à te familiariser avec la méthode Slowpreneur.",
        gift: {
            badge: "🎁 BONUS OFFERT",
            title: "Accès au groupe privé WhatsApp",
            description:
                "Rejoins la communauté de freelances tech qui s'entraident et partagent des leads.",
            benefits: [
                { icon: "💬", label: "Échanges privés" },
                { icon: "🎯", label: "Leads partagés" },
                { icon: "📚", label: "Ressources exclusives" },
            ],
            cta: {
                text: "Rejoindre le groupe WhatsApp",
                url: "https://chat.whatsapp.com/PLACEHOLDER",
                icon: "whatsapp",
            },
            footnote: "Groupe privé — Entrée gratuite et sans engagement.",
        },
        backLink: {
            text: "← Retour au site",
            url: "/",
        },
    },
};
