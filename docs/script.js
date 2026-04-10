// Language management
let currentLanguage = 'en';

// Translations embedded directly
const translations = {
    it: {
        'nav.about': 'Informazioni',
        'nav.gallery': 'Foto',
        'nav.restaurants': 'Locali',
        'nav.links': 'Siti Utili',
        'nav.reviews': 'Recensioni',
        'nav.tips': 'Guida',
        'nav.contact': 'Contatti',
        'hero.title': 'Gaia Retreat Apartment',
        'hero.subtitle': 'Un\'esperienza indimenticabile a Riomaggiore, Cinque Terre',
        'hero.cta': 'Scopri di più',
        'about.title': 'Benvenuto a Gaia Retreat',
        'about.description': 'Un rifugio accogliente nel cuore di Riomaggiore, perfetto per scoprire la bellezza delle Cinque Terre. Questa pagina è stata pensata per fornire tutte le informazioni utili per pianificare il tuo soggiorno e vivere un\'esperienza autentica.',
        'about.booking': 'Prenota il tuo soggiorno:',
        'features.comfortable': 'Confortevole',
        'features.location': 'Posizione ideale',
        'features.views': 'Vedute mozzafiato',
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
        'tips.best-season-desc': 'Aprile a giugno e settembre a ottobre offrono il clima migliore e meno affollamento',
        'tips.what-to-pack': 'Cosa Portare',
        'tips.what-to-pack-desc': 'Scarpe comode, crema solare, repellente per insetti e una giacca leggera per le serate',
        'tips.transportation': 'Trasporti',
        'tips.transportation-desc': 'La Cinque Terre Card include tutti i treni e autobus. Non è necessaria un\'auto',
        'tips.local-cuisine': 'Cucina Locale',
        'tips.local-cuisine-desc': 'Trofie al pesto, spaghetti ai frutti di mare e focaccia sono i piatti must-try',
        'tips.hiking': 'Escursionismo',
        'tips.hiking-desc': 'I sentieri sono ben segnalati. Inizia presto per evitare le folle e il caldo',
        'tips.photography': 'Fotografia',
        'tips.photography-desc': 'I migliori tramonti si vedono da Manarola. Arriva presto per un buon posto',
        'testimonials.title': 'Cosa Dicono gli Ospiti',
        'testimonials.subtitle': 'Leggi le esperienze di chi ha visitato Gaia Retreat',
        'contact.title': 'Contatti',
        'contact.reach': 'Come raggiungerci',
        'contact.location': 'Riomaggiore, Cinque Terre (SP), Italia',
        'contact.booking-info': 'Per prenotazioni e domande, usa la piattaforma Airbnb',
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
        'hero.subtitle': 'An unforgettable experience in Riomaggiore, Cinque Terre',
        'hero.cta': 'Learn More',
        'about.title': 'Welcome to Gaia Retreat',
        'about.description': 'A welcoming retreat in the heart of Riomaggiore, perfect for discovering the beauty of Cinque Terre. This page provides all the useful information to plan your stay and live an authentic experience.',
        'about.booking': 'Book your stay:',
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
        'tips.best-season-desc': 'April to June and September to October offer the best weather and fewer crowds',
        'tips.what-to-pack': 'What to Pack',
        'tips.what-to-pack-desc': 'Comfortable shoes, sunscreen, insect repellent, and a light jacket for evenings',
        'tips.transportation': 'Transportation',
        'tips.transportation-desc': 'The Cinque Terre Card covers all trains and buses. No car needed',
        'tips.local-cuisine': 'Local Cuisine',
        'tips.local-cuisine-desc': 'Trofie al pesto, seafood spaghetti, and focaccia are must-try dishes',
        'tips.hiking': 'Hiking',
        'tips.hiking-desc': 'Trails are well-marked. Start early to avoid crowds and heat',
        'tips.photography': 'Photography',
        'tips.photography-desc': 'Best sunsets are from Manarola. Arrive early for a good spot',
        'testimonials.title': 'What Guests Say',
        'testimonials.subtitle': 'Read the experiences of those who visited Gaia Retreat',
        'contact.title': 'Contact',
        'contact.reach': 'Get in Touch',
        'contact.location': 'Riomaggiore, Cinque Terre (SP), Italy',
        'contact.booking-info': 'For bookings and inquiries, use the Airbnb platform',
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
        'hero.subtitle': 'Une experience inoubliable a Riomaggiore, Cinque Terre',
        'hero.cta': 'En Savoir Plus',
        'about.title': 'Bienvenue a Gaia Retreat',
        'about.description': 'Une retraite accueillante au coeur de Riomaggiore, parfaite pour decouvrir la beaute des Cinque Terre. Cette page fournit toutes les informations utiles pour planifier votre sejour et vivre une experience authentique.',
        'about.booking': 'Reservez votre sejour:',
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
        'tips.best-season-desc': 'Avril a juin et septembre a octobre offrent le meilleur temps et moins de foule',
        'tips.what-to-pack': 'Quoi Emporter',
        'tips.what-to-pack-desc': 'Chaussures confortables, creme solaire, repellent contre les insectes et une veste legere pour les soirees',
        'tips.transportation': 'Transport',
        'tips.transportation-desc': 'La Carte Cinque Terre couvre tous les trains et bus. Aucune voiture necessaire',
        'tips.local-cuisine': 'Cuisine Locale',
        'tips.local-cuisine-desc': 'Trofie au pesto, pates aux fruits de mer et focaccia sont des plats a essayer',
        'tips.hiking': 'Randonnee',
        'tips.hiking-desc': 'Les sentiers sont bien balises. Commencez tot pour eviter la foule et la chaleur',
        'tips.photography': 'Photographie',
        'tips.photography-desc': 'Les plus beaux couchers de soleil sont visibles depuis Manarola. Arrivez tot pour une bonne place',
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
    setupSmoothScroll();
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
 * Enhance smooth scrolling for navigation links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only prevent default if it's a valid anchor link
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add scroll animations for elements
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all gallery items and cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-item, .link-card, .restaurant-item, .tip-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/**
 * Mobile menu handling (if needed in future)
 */
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Could add mobile menu close logic here
        });
    });
}

// Utility: Log language stats for debugging
window.debugLanguages = () => {
    console.log('Current language:', currentLanguage);
    console.log('Available languages:', Object.keys(window.translations));
};
