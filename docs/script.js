// Language management
let currentLanguage = 'en';

// Translations embedded directly
const translations = {
    it: {
        'nav.about': 'Informazioni',
        'nav.gallery': 'Foto',
        'nav.restaurants': 'Locali',
        'nav.links': 'Link Utili',
        'nav.reviews': 'Recensioni',
        'nav.tips': 'Guida',
        'nav.contact': 'Contatti',
        'hero.title': 'Gaia Retreat Apartment',
        'hero.subtitle': 'Riomaggiore, Cinque Terre',
        'hero.cta': 'Scopri di più',
        'about.title': 'Benvenuto al Gaia Retreat',
        'about.description': 'Un rifugio esclusivo nel cuore di Riomaggiore, dove il mare diventa parte della vostra casa. Dal balcone privato potrete regalarvi ogni sera tramonti indimenticabili e la magia della Via dell\'Amore illuminata. Al mattino concedetevi una colazione lenta e silenziosa, guardando le prime barche passare proprio sotto di voi. La posizione è perfetta per scoprire le Cinque Terre a piedi e immergervi nell\'autentica atmosfera del borgo ligure.',
        'about.description-1': 'Un rifugio esclusivo nel cuore di Riomaggiore, dove il mare diventa parte della vostra casa.',
        'about.description-2': 'Dal balcone privato potrete regalarvi ogni sera tramonti indimenticabili e la magia della Via dell\'Amore illuminata. Al mattino concedetevi una colazione lenta e silenziosa, guardando le prime barche passare proprio sotto di voi.',
        'about.description-3': 'La posizione è perfetta per scoprire le Cinque Terre a piedi e immergervi nell\'autentica atmosfera del borgo ligure.',
        'about.booking': 'Prenota il tuo soggiorno',
        'features.comfortable': 'Confortevole',
        'features.location': 'Posizione ideale',
        'features.views': 'Viste mozzafiato',
        'features.authentic': 'Esperienza autentica',
        'gallery.title': 'Galleria Foto',
        'links.title': 'Link Utili per Esplorare le Cinque Terre',
        'links.howtoreach': 'Come arrivare?',
        'links.tickets': 'Cinque Terre Card',
        'links.ferries': 'Orari Battelli',
        'links.trails': 'Sentieri',
        'links.viadellAmore': 'Via dell\'Amore',
        'links.map': 'Mappa Interattiva',
        'links.parking1': 'Parcheggio La Spezia',
        'links.parking2': 'RioPark Riomaggiore',
        'restaurants.title': 'I Nostri Locali Preferiti',
        'restaurants.subtitle': 'Scopri le migliori esperienze culinarie nelle Cinque Terre',
        'tips.title': 'Consigli per i Viaggiatori',
        'tips.best-season': 'Miglior Periodo',
        'tips.best-season-desc': 'I mesi primaverili e di fine estate offrono il clima migliore e meno affollamento',
        'tips.what-to-pack': 'Cosa Portare',
        'tips.what-to-pack-desc': 'Scarpe comode, crema solare, borraccia e una giacca leggera per le serate',
        'tips.transportation': 'Trasporti',
        'tips.transportation-desc': 'La Cinque Terre Card include tutti i treni e autobus. Non è necessaria un\'auto, che sconsigliamo per raggiungere le Cinque Terre',
        'tips.local-cuisine': 'Cucina Locale',
        'tips.local-cuisine-desc': 'Trofie al pesto, spaghetti ai frutti di mare e focaccia sono i piatti must-try',
        'tips.hiking': 'Escursionismo',
        'tips.hiking-desc': 'I sentieri sono ben segnalati. Inizia presto per evitare le folle e il caldo',
        'tips.photography': 'Fotografia',
        'tips.photography-desc': 'I migliori tramonti si vedono dal nostro balcone privato e dalla Via dell\'Amore, così come le stelle nelle belle serate estive',
        'testimonials.title': 'Cosa Dicono gli Ospiti',
        'testimonials.subtitle': 'Leggi le esperienze di chi ha visitato Gaia Retreat',
        'contact.title': 'Contatti',
        'contact.reach': 'Come raggiungerci',
        'contact.location': 'Riomaggiore, Cinque Terre (SP), Italia',
        'contact.booking-info': 'PER PRENOTAZIONI, USA LA PIATTAFORMA AIRBNB',
        'contact.quick-links': 'Link Rapidi',
        'contact.guidebook': 'Guidebook Riomaggiore',
        'contact.restaurants': 'Ristoranti Consigliati',
        'contact.info-links': 'Informazioni Utili',
        'footer.copyright': '© 2024 Gaia Retreat Apartment. Tutti i diritti riservati.'
    },
    en: {
        'nav.about': 'Information',
        'nav.gallery': 'Photos',
        'nav.restaurants': 'Restaurants',
        'nav.links': 'Useful Links',
        'nav.reviews': 'Reviews',
        'nav.tips': 'Guide',
        'nav.contact': 'Contact',
        'hero.title': 'Gaia Retreat Apartment',
        'hero.subtitle': 'Riomaggiore, Cinque Terre',

        'hero.cta': 'Learn More',
        'about.title': 'Welcome to Gaia Retreat',
        'about.description': 'A welcoming retreat in the heart of Riomaggiore, perfect for discovering the beauty of Cinque Terre. This page provides all the useful information to plan your stay and live an authentic experience.',
        'about.description-1': "An exclusive retreat in the heart of Riomaggiore, where the sea becomes part of your home.",
        'about.description-2': "From the private balcony you can enjoy unforgettable sunsets every evening and the magic of the illuminated Via dell'Amore. In the morning, take a slow and quiet breakfast watching the first boats pass just below.",
        'about.description-3': "The location is perfect for exploring the Cinque Terre on foot and immersing yourself in the authentic atmosphere of the Ligurian village.",
        'about.booking': 'Book your stay',
        'features.comfortable': 'Comfortable',
        'features.location': 'Ideal Location',
        'features.views': 'Breathtaking Views',
        'features.authentic': 'Authentic Experience',
        'gallery.title': 'Photo Gallery',
        'links.title': 'Useful Links to Explore Cinque Terre',
        'links.howtoreach': 'How to Get There?',
        'links.tickets': 'Cinque Terre Card',
        'links.ferries': 'Ferry Schedule',
        'links.trails': 'Hiking Trails',
        'links.viadellAmore': 'Via dell\'Amore',
        'links.map': 'Interactive Map',
        'links.parking1': 'La Spezia Parking',
        'links.parking2': 'RioPark Riomaggiore',
        'restaurants.title': 'Our Favorite Restaurants',
        'restaurants.subtitle': 'Discover the best culinary experiences in Cinque Terre',
        'tips.title': 'Travel Tips',
        'tips.best-season': 'Best Time to Visit',
        'tips.best-season-desc': 'Spring and late summer months offer the best weather and fewer crowds',
        'tips.what-to-pack': 'What to Pack',
        'tips.what-to-pack-desc': 'Comfortable shoes, sunscreen, a water bottle and a light jacket for evenings',
        'tips.transportation': 'Transportation',
        'tips.transportation-desc': 'The Cinque Terre Card covers all trains and buses. No car needed — we recommend against driving to the Cinque Terre',
        'tips.local-cuisine': 'Local Cuisine',
        'tips.local-cuisine-desc': 'Trofie al pesto, seafood spaghetti, and focaccia are must-try dishes',
        'tips.hiking': 'Hiking',
        'tips.hiking-desc': 'Trails are well-marked. Start early to avoid crowds and heat',
        'tips.photography': 'Photography',
        'tips.photography-desc': "The best sunsets can be enjoyed from our private balcony and the Via dell'Amore, as well as the stars on beautiful summer evenings",
        'testimonials.title': 'What Guests Say',
        'testimonials.subtitle': 'Read the experiences of those who visited Gaia Retreat',
        'contact.title': 'Contact',
        'contact.reach': 'Get in Touch',
        'contact.location': 'Riomaggiore, Cinque Terre (SP), Italy',
        'contact.booking-info': 'For booking use the Airbnb platform',
        'contact.quick-links': 'Quick Links',
        'contact.guidebook': 'Riomaggiore Guidebook',
        'contact.restaurants': 'Recommended Restaurants',
        'contact.info-links': 'Useful Information',
        'footer.copyright': '© 2024 Gaia Retreat Apartment. All rights reserved.'
    },
    fr: {
        'nav.about': 'Informations',
        'nav.gallery': 'Photos',
        'nav.restaurants': 'Restaurants',
        'nav.links': 'Liens Utiles',
        'nav.reviews': 'Avis',
        'nav.tips': 'Guide',
        'nav.contact': 'Contact',
        'hero.title': 'Gaia Retreat Apartment',
        'hero.subtitle': 'Riomaggiore, Cinque Terre',

        'hero.cta': 'En Savoir Plus',
        'about.title': 'Bienvenue a Gaia Retreat',
        'about.description': 'Une retraite accueillante au coeur de Riomaggiore, parfaite pour decouvrir la beaute des Cinque Terre. Cette page fournit toutes les informations utiles pour planifier votre sejour et vivre une experience authentique.',
        'about.description-1': "Un refuge exclusif au cœur de Riomaggiore, où la mer fait partie de votre maison.",
        'about.description-2': "Depuis le balcon privé, profitez chaque soir de couchers de soleil inoubliables et de la magie de la Via dell'Amore illuminée. Le matin, savourez un petit-déjeuner lent et silencieux en regardant les premiers bateaux passer juste en dessous de vous.",
        'about.description-3': "L'emplacement est parfait pour découvrir les Cinque Terre à pied et vous immerger dans l'atmosphère authentique du village ligurien.",
        'about.booking': 'Reservez votre sejour',
        'features.comfortable': 'Confortable',
        'features.location': 'Localisation Ideale',
        'features.views': 'Vues Spectaculaires',
        'features.authentic': 'Experience Authentique',
        'gallery.title': 'Galerie Photos',
        'links.title': 'Liens Utiles pour Explorer Cinque Terre',
        'links.howtoreach': 'Comment y aller?',
        'links.tickets': 'Carte Cinque Terre',
        'links.ferries': 'Horaires des Ferries',
        'links.trails': 'Sentiers de Randonnee',
        'links.viadellAmore': 'Via dell\'Amore',
        'links.map': 'Carte Interactive',
        'links.parking1': 'Parking La Spezia',
        'links.parking2': 'RioPark Riomaggiore',
        'restaurants.title': 'Nos Restaurants Preferes',
        'restaurants.subtitle': 'Decouvrez les meilleures experiences culinaires aux Cinque Terre',
        'tips.title': 'Conseils pour les Voyageurs',
        'tips.best-season': 'Meilleure Periode',
        'tips.best-season-desc': "Le printemps et la fin de l'été offrent le meilleur climat et moins de foule",
        'tips.what-to-pack': 'Quoi Emporter',
        'tips.what-to-pack-desc': 'Chaussures confortables, crème solaire, une gourde et une veste légère pour les soirées',
        'tips.transportation': 'Transport',
        'tips.transportation-desc': 'La Carte Cinque Terre couvre tous les trains et bus. Voiture déconseillée pour rejoindre les Cinque Terre',
        'tips.local-cuisine': 'Cuisine Locale',
        'tips.local-cuisine-desc': 'Trofie au pesto, pates aux fruits de mer et focaccia sont des plats a essayer',
        'tips.hiking': 'Randonnee',
        'tips.hiking-desc': 'Les sentiers sont bien balises. Commencez tot pour eviter la foule et la chaleur',
        'tips.photography': 'Photographie',
        'tips.photography-desc': "Les plus beaux couchers de soleil se contemplent depuis notre balcon privé et la Via dell'Amore, ainsi que les étoiles lors des belles soirées estivales",
        'testimonials.title': 'Ce que Disent les Clients',
        'testimonials.subtitle': 'Lisez les experiences de ceux qui ont visite Gaia Retreat',
        'contact.title': 'Contact',
        'contact.reach': 'Nous Contacter',
        'contact.location': 'Riomaggiore, Cinque Terre (SP), Italie',
        'contact.booking-info': 'Pour les reservations et les demandes, utilisez la plateforme Airbnb',
        'contact.quick-links': 'Liens Rapides',
        'contact.guidebook': 'Guide Riomaggiore',
        'contact.restaurants': 'Restaurants Recommandes',
        'contact.info-links': 'Informations Utiles',
        'footer.copyright': '© 2024 Gaia Retreat Apartment. Tous droits reserves.'
    }
};

window.translations = translations;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupLanguageSwitcher();
    setupTabNavigation();
    setupHamburgerMenu();
});

/**
 * Initialize language from localStorage or default to English
 */
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && window.translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'en';
    }
    updateLanguage(currentLanguage);
}

/**
 * Update all translatable elements to selected language
 */
function updateLanguage(lang) {
    if (!window.translations[lang]) {
        console.warn(`Language ${lang} not found, using Italian`);
        lang = 'it';
    }

    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    console.log('Updating language to:', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(window.translations[lang], key);
        
        console.log(`Translating ${key}: ${translation}`);
        
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update language-specific links
    updateLanguageLinks(lang);

    // Update active language button
    updateActiveLanguageButton(lang);
}

/**
 * Get value from object by key
 */
function getNestedValue(obj, path) {
    return obj[path];
}

/**
 * Update links based on language
 */
function updateLanguageLinks(lang) {
    const linkMap = {
        'it': {
            'parco-nazionale': 'https://www.parconazionale5terre.it/arr.php',
            'via-amore-tickets': 'https://card.parconazionale5terre.it',
            'ferries': 'https://www.navigazionegolfodeipoeti.it/it/orari',
            'sentieri': 'https://www.parconazionale5terre.it/sentieri-outdoor.php',
            'via-amore': 'https://www.parconazionale5terre.it/pagina.php?id=480',
            'airbnb-booking': 'https://www.airbnb.it/rooms/1349419281125459428'
        },
        'en': {
            'parco-nazionale': 'https://www.parconazionale5terre.it/Earr.php',
            'via-amore-tickets': 'https://card.parconazionale5terre.it/en',
            'ferries': 'https://www.navigazionegolfodeipoeti.it/en/timetables',
            'sentieri': 'https://www.parconazionale5terre.it/Esentieri-outdoor.php',
            'via-amore': 'https://www.parconazionale5terre.it/page.php?id=478',
            'airbnb-booking': 'https://www.airbnb.com/rooms/1349419281125459428?source_impression_id=p3_1775856126_P3GxOgF-N9pNbcvy'
        },
        'fr': {
            'parco-nazionale': 'https://www.parconazionale5terre.it/Farr.php',
            'via-amore-tickets': 'https://card.parconazionale5terre.it/fr',
            'ferries': 'https://www.navigazionegolfodeipoeti.it/fr/horaires?_gl=1*1brb0yo*_up*MQ..*_ga*MTA0NTIwNjkyNC4xNzc1ODUzNDcw*_ga_D3X5S5YGY8*czE3NzU4NTM0NjkkbzEkZzAkdDE3NzU4NTM0NjkkajYwJGwwJGgxMjI0NjA4MDg4',
            'sentieri': 'https://www.parconazionale5terre.it/Fsentieri-outdoor.php',
            'via-amore': 'https://www.parconazionale5terre.it/page.php?id=478',
            'airbnb-booking': 'https://www.airbnb.fr/rooms/1349419281125459428?source_impression_id=p3_1775856126_P3GxOgF-N9pNbcvy'
        }
    };

    // Update links based on data-lang-link attribute
    document.querySelectorAll('[data-lang-link]').forEach(link => {
        const linkKey = link.getAttribute('data-lang-link');
        if (linkMap[lang] && linkMap[lang][linkKey]) {
            link.href = linkMap[lang][linkKey];
        }
    });
}

/**
 * Setup language switcher buttons
 */
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = button.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
}

/**
 * Update active state for language buttons
 */
function updateActiveLanguageButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

/**
 * Setup mobile hamburger menu
 */
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Show a specific section, hide all others
 */
function showSection(sectionId) {
    const validSections = ['about', 'gallery', 'useful-links', 'restaurants', 'travel-tips', 'testimonials', 'contact'];
    if (!validSections.includes(sectionId)) sectionId = 'about';

    // Hide all sections, show target
    document.querySelectorAll('.section').forEach(s => s.classList.remove('section--active'));
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('section--active');
        window.scrollTo(0, 0);
    }

    // Show hero only on home (about)
    const hero = document.querySelector('.hero');
    if (hero) hero.style.display = sectionId === 'about' ? '' : 'none';

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) link.classList.add('active');
    });

    // Update URL hash without scrolling
    history.replaceState(null, null, '#' + sectionId);
}

/**
 * Setup tab navigation — replaces smooth scroll
 */
function setupTabNavigation() {
    // Handle all anchor links pointing to sections
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const sectionId = this.getAttribute('href').slice(1);
            const validSections = ['about', 'gallery', 'useful-links', 'restaurants', 'travel-tips', 'testimonials', 'contact'];
            if (validSections.includes(sectionId)) {
                e.preventDefault();
                showSection(sectionId);
                // Close mobile menu if open
                const hamburger = document.getElementById('hamburger');
                const navMenu = document.getElementById('navMenu');
                if (hamburger) hamburger.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });

    // Brand title click → home
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.style.cursor = 'pointer';
        navBrand.addEventListener('click', () => showSection('about'));
    }

    // Read hash on load to show correct section
    const hash = window.location.hash.slice(1);
    const validSections = ['about', 'gallery', 'useful-links', 'restaurants', 'travel-tips', 'testimonials', 'contact'];
    showSection(validSections.includes(hash) ? hash : 'about');
}

// Utility: Log language stats for debugging
window.debugLanguages = () => {
    console.log('Current language:', currentLanguage);
    console.log('Available languages:', Object.keys(window.translations));
};
