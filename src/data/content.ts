export const personalInfo = {
  name: 'Krishan Singh',
  handle: 'SinghKrishan2611',
  role: 'Mobile Application Developer',
  email: 'er.krishansingh2611@gmail.com',
  phone: '7654635724',
  location: 'Hyderabad, India',
  logoName: 'Krishan/>',
  logoSub: 'Mobile Application Developer',
  focus: {
    title: 'Core Specialization',
    area: 'Offline-First & High Concurrency',
    description: 'Scaling mobile utility architectures to over 10 Lakh (1M+) concurrent users with 99.5%+ crash-free resilience, zero-latency sync, and custom native Platform Channels.'
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krishan-singh2611/' },
    { label: 'GitHub', href: 'https://github.com/SinghKrishan2611' },
    { label: 'Gmail', href: 'mailto:er.krishansingh2611@gmail.com' },
    { label: 'PlayStore', href: 'https://play.google.com/store/apps/details?id=com.mymeralco.online&hl=en_IN' }
  ]
}

// Animation Configurations
export const animationConfig = {
  statsDuration: 2000,
  socials: {
    layoutRadius: 250,
    maxConnectionDist: 320,
    maxSimultaneousGlows: 4,
    glowSpawnProbability: 0.03,
    baseLineOpacity: 0.08,
    mouseSegmentThreshold: 150,
    mouseGlowIntensity: 0.40,
    randomGlowIntensity: 0.45,
  }
}

export const heroPhrases = [
  '> Mobile Application Developer (7+ Years)',
  '> Flutter (Dart) & Native Android (Kotlin, Jetpack Compose)',
  '> Scaled Utility Ecosystems to Over 10 Lakh (1M+) Users',
  '> Maintaining 99.5%+ Crash-Free Production Metrics',
  '> Architecting Enterprise Offline-First Sync Engines',
  '> Clean Architecture · BLoC · MVVM · Dagger Hilt',
  '> Deep Hardware Integrations & Custom Platform Channels'
]

export const aboutContent = {
  bio: "Mobile Application Developer with 7+ years of deep engineering experience specializing in native Android (Kotlin, Jetpack Compose) and cross-platform Flutter (Dart) production systems. Proven expert in building high-performance, offline-first mobile architectures, maintaining 99.5%+ crash-free metrics, and scaling consumer utility platforms to over 10 Lakh concurrent users. Adept at managing custom Platform Channels, high-security local storage layers, complex GIS/GPS mappings, and optimizing heavy asynchronous data flows.",
  education: {
    degree: 'Master of Computer Applications (MCA) & BCA',
    major: 'Computer Applications & Mobile Architecture',
    institution: 'IGNOU',
    period: 'BCA, MCA'
  },
  stats: [
    { value: 7, label: 'Years Experience', suffix: '+' },
    { value: 10, label: 'Lakh+ Concurrent Users', suffix: 'L+' },
    { value: 99, label: 'Crash-Free Metric', suffix: '.5%+' },
    { value: 7, label: 'Play Store Key Apps', suffix: '+' }
  ]
}

export const skills = {
  'Native Android': ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'Android Jetpack', 'Coroutines', 'Room DB', 'WorkManager'],
  'Cross-Platform': ['Flutter', 'Dart', 'Platform Channels', 'BLoC Pattern', 'Provider', 'GetIt'],
  'Architecture & Patterns': ['Clean Architecture', 'MVVM', 'BLoC', 'MVC', 'Repository Pattern', 'Offline-First Engine', 'Modular Micro-Layouts'],
  'Data & Networking': ['Room Database', 'Sqflite', 'Firebase Ecosystem', 'Retrofit', 'Dio', 'REST APIs', 'Firebase RTDB', 'Firebase Firestore'],
  'Security & Storage': ['SSL / TLS Pinning', 'Secure Local Storage', 'Biometric Authentication', 'ProGuard / R8 Obfuscation', 'AES Encryption/Decryption'],
  'DI & Testing': ['Dagger Hilt', 'GetIt', 'Unit Testing', 'Mockito', 'Automated Regression Suites'],
  'AI & Next-Gen Tooling': ['Agentic AI Architecture', 'AI-Driven Development', 'Cursor IDE', 'LLM Prompt Engineering'],
  'DevOps & Collaboration': ['Firebase Crashlytics', 'CI/CD Pipelines', 'Fastlane', 'Git', 'GitHub', 'GitLab', 'Jira', 'Agile / Scrum'],
  'Mapping & Spatial': ['GPS Location Tracking', 'GIS APIs', 'Google Maps API', 'Offline Map Visualizations', 'Dynamic Geo-Questionnaires']
}

export const marqueeItems = [
  'Flutter', 'Kotlin', 'Jetpack Compose', 'Android SDK', 'Dart', 'BLoC', 'Clean Architecture', 'MVVM', 'Dagger Hilt', 'Room DB', 'Sqflite', 'Platform Channels', 'Firebase Crashlytics', 'Fastlane', 'Google Maps API', 'Retrofit', 'Dio'
]

export const experiences = [
  {
    role: 'Sr. Software Engineer',
    company: 'Asakta Electronics And Communication',
    period: 'April 2025 – Present',
    type: 'Hyderabad, India',
    bullets: [
      'Architected an enterprise, offline-first mobile synchronization engine utilizing cross-platform Flutter layers paired with custom native Android background worker services.',
      'Designed a zero-latency API-centric infrastructure leveraging Azure cloud and Firebase ecosystems, improving distributed real-time data sync speeds across hardware nodes by 25%.',
      'Instituted rigid clean-code architecture frameworks (BLoC, MVVM, Clean) and strict peer-review metrics across the mobile branch, reducing technical debt and production bug leaks by 30%.',
      'Leveraged next-gen development environments (Cursor/LLMs) to automate boilerplate code setup, reducing sprint cycle feature delivery timelines by 25%.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'iRESLab Inc.',
    period: 'March 2020 – January 2024',
    type: 'Noida, India',
    bullets: [
      'Directed the full-lifecycle development of secure, high-performance Android and Flutter applications deployed to thousands of concurrent active end-users.',
      'Engineered a comprehensive automated code-testing matrix (Unit testing, Mockito), driving up core application regression stability by 30%.',
      'Modularized design tokens and interface components into shared micro-layouts, cutting front-end layout engineering cycles down by 20% across multiple application suites.'
    ]
  },
  {
    role: 'Android Developer',
    company: 'MobileCoderz Technology',
    period: 'April 2018 – March 2020',
    type: 'Noida, India',
    bullets: [
      'Maintained an app crash-free metric above 99.5% by leveraging automated analytics and monitoring systems via Firebase Crashlytics to proactively resolve runtime anomalies.',
      'Built complex custom UI workflows and integrated secure Google, Facebook, Twitter, and LinkedIn federated social authentications.',
      'Partnered closely with product design leads to bridge the gap between abstract wireframes and visually captivating, high-performance mobile front-ends.'
    ]
  }
]

export const projects = [
  {
    title: 'My Meralco',
    stack: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Core Location', 'Secure Storage', 'Biometric'],
    year: '2024–Present',
    description: 'Scaled a high-impact utility platform to over 10 Lakh (1M+) concurrent users, deploying a single, production-ready Flutter and Dart codebase across native Android, iOS, and Web environments. Integrated secure payment processing gateways and localized REST APIs to facilitate automated 24/7 account access, bill presentment, and digital transaction flows. Engineered complex hardware camera integration and media storage access modules for compressed real-time photographic outage reports.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mymeralco.online&hl=en_IN' }
    ],
    terminal: '$ flutter run --flavor production -d mobile\n✓ Flutter engine initialized: BLoC state provider loaded\n✓ Scaled 10L+ (1M+) active concurrent users across Android, iOS & Web\n✓ Secure payment gateway & biometrics verified (0.4s response)'
  },
  {
    title: 'VCUBE',
    stack: ['Flutter', 'Dart', 'Dio', 'Clean Architecture', 'Firebase', 'GetIt'],
    year: '2024',
    description: 'Built an internal analytics and reporting application for SSEL (Shirdi Sai Electricals). Designed interactive dashboards, dynamic charts, and data tables displaying real-world telemetry analytics for authorized enterprise stakeholders.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.asakta.vcube&hl=en_IN' }
    ],
    terminal: '$ flutter build appbundle --dart-define=CLIENT=SSEL\n✓ Clean Architecture: Data, Domain, and Presentation layers linked\n✓ Interactive enterprise dashboards & telemetry charts initialized\n✓ Real-time Firebase sync online'
  },
  {
    title: 'Survey Pro',
    stack: ['Flutter', 'Dart', 'BLoC', 'Sqflite', 'Clean Architecture', 'DI', 'Firebase', 'GPS'],
    year: '2023–2024',
    description: 'Built a paperless field data collection and smart utility mapping application designed for power distribution surveys and smart meter replacements. Implemented highly accurate real-time GPS location tracking, offline-first data caching for remote rural operations, and interactive map visualizations.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.asakta.survey.app&hl=en_IN' }
    ],
    terminal: '$ flutter run -d gps_field_unit\n✓ Sqflite local persistence cache: 14,200 nodes stored offline\n✓ Real-time GPS differential tracking engaged (<1.2m precision)\n✓ Smart utility distribution mapping rendered'
  },
  {
    title: 'HyderaaSurvey',
    stack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'GetIt', 'Firebase', 'GPS Integration'],
    year: '2023',
    description: 'Developed a specialized mobile application for field officers under the Hyderabad Disaster Response and Asset Monitoring and Protection Agency (HYDRAA) to document geographical and hydrological features. Engineered secure dynamic questionnaire modules with built-in GPS verification and photo capture to eliminate manual data entry errors.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.pixelvide.hydra.survey&hl=en_IN' }
    ],
    terminal: '$ flutter build apk --release --dart-define=AGENCY=HYDRAA\n✓ HYDRAA Disaster Response & Hydrological inspection module ready\n✓ Dynamic multi-stage questionnaire + geotagged photos validated\n✓ Auto-sync to emergency operations center: OK'
  },
  {
    title: 'Survey Lite (CGIS Engine)',
    stack: ['Kotlin', 'Jetpack Compose', 'Room DB', 'MVVM', 'Dagger Hilt', 'Firebase', 'GIS APIs'],
    year: '2022–2023',
    description: 'Real-time utility mapping engine built with native Android and Jetpack Compose. Eliminated manual post-survey engineering report compilation time by 100% by designing a background worker architecture that instantly auto-generates formatted, print-ready validation documents.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.pixelvide.android.ssel.smartmeter.survey' }
    ],
    terminal: '$ ./gradlew assembleRelease\n✓ Jetpack Compose declarative UI tree mounted\n✓ Room DB GIS spatial indices optimized\n✓ Background WorkManager: eliminated 100% manual report compilation time'
  },
  {
    title: 'SHTALK (Voice Messaging App)',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase RTDB', 'Firebase Storage', 'Android SDK'],
    year: '2021–2022',
    description: 'Seamless voice messaging app enabling users to exchange audio messages quickly and privately with contacts. Designed an ultra-responsive, easy-to-use interface for seamless, private audio communications.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.pixelvide.voicechat.app&hl=en_IN' }
    ],
    terminal: '$ ./gradlew bundleRelease\n✓ Audio codec pipelines configured (Opus / AAC)\n✓ Firebase Realtime Database bi-directional socket connected\n✓ Private encrypted voice messaging channel streaming'
  },
  {
    title: 'Relevo',
    stack: ['Android', 'Java', 'Retrofit', 'Firebase', 'QR Core Engines', 'Google Maps API'],
    year: '2020–2021',
    description: 'Built an app empowering environmentally conscious users to reduce disposable packaging waste through borrowing and returning reusable dishware. Promoted sustainable lifestyles and community-driven impact through packaging savings and behavior tracking.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.relevoapp&hl=en_IN' }
    ],
    terminal: '$ ./gradlew testReleaseUnitTest\n✓ QR Code high-speed scan engine initialized\n✓ Google Maps API geofences synced for 500+ return stations\n✓ Environmental impact tracker metrics calculated'
  }
]

export const openSource = [
  {
    title: 'Flutter Native Platform Channel Boilerplate',
    stack: ['Flutter', 'Dart', 'Kotlin', 'Platform Channels', 'Android'],
    year: '2023–2024',
    description: 'High-performance architectural boilerplate for bi-directional communication between Flutter and Native Android (Kotlin). Optimized for low-latency hardware access, GPS streaming, and background worker threads.',
    links: [
      { label: 'Architecture', href: '#skills' }
    ],
    terminal: '$ flutter pub get\n✓ MethodChannel & EventChannel bindings initialized\n✓ Kotlin background thread communication active\n✓ Zero-copy serialization benchmarks: <1ms round-trip'
  },
  {
    title: 'Offline-First Mobile Sync Engine',
    stack: ['BLoC', 'Sqflite', 'Room DB', 'Clean Architecture', 'Rx'],
    year: '2022–2023',
    description: 'Reference architecture for field survey and enterprise utility applications operating under zero-connectivity rural zones with automated conflict resolution and delta sync when network returns.',
    links: [
      { label: 'Details', href: '#projects' }
    ],
    terminal: '$ dart run test/sync_engine_test.dart\n✓ 500 remote field survey mutations queued in offline mode\n✓ Cellular handshake established → delta sync dispatched\n✓ Conflict resolution: 100% automated consistency'
  }
]
