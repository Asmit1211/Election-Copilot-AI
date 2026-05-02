// ============================================================
// Translations Dictionary
// ============================================================
// Stores global UI and suggestion strings for 5 languages:
// English, Hindi, Marathi, Telugu, Tamil.
// ============================================================

export const translations = {
  English: {
    navbar: {
      home: "Home",
      journey: "Journey",
      map: "Map",
      assistant: "AI Assistant",
      language: "Language",
    },
    footer: {
      text: "Election Copilot AI — Built for every citizen. 🇮🇳",
    },
    home: {
      poweredBy: "Powered by AI — Always Ready",
      title: "Election",
      titleGold: "Copilot AI",
      subtitle: "Your smart guide to the election process. Get personalized guidance on voter registration, polling locations, candidate info, and everything you need to make your vote count.",
      getStarted: "Get Started",
      talkToAI: "Talk to AI Assistant ↗",
      feature1Title: "Personalized",
      feature1Desc: "Tailored guidance based on your voter profile and location",
      feature2Title: "Instant Answers",
      feature2Desc: "AI-powered responses to all your election questions in seconds",
      feature3Title: "Private & Secure",
      feature3Desc: "Your data stays with you — no accounts, no tracking, always",
      trust1: "Non-partisan",
      trust2: "Open source",
      trust3: "No sign-up needed",
    },
    journey: {
      headerTitle: "Your Voter Journey",
      headerSubtitle: "Follow these 5 steps to become a confident, prepared voter",
      progress: "Progress",
      complete: "Complete",
      back: "← Back",
      next: "Next →",
      completeBtn: "Complete ✓",
      stepOf: "Step {current} of {total}",
      steps: [
        {
          label: 'Eligibility',
          title: 'Check Your Eligibility',
          heading: 'Am I eligible to vote?',
          description: 'Before you begin the voting process, make sure you meet all the eligibility criteria set by the Election Commission of India.',
          checklist: [
            { text: 'You must be an Indian citizen', detail: 'Persons of Indian Origin (PIO) or Overseas Citizens of India (OCI) are not eligible.' },
            { text: 'You must be 18 years or older', detail: 'Age is calculated as of January 1st of the year of electoral roll revision.' },
            { text: 'You must be a resident of the constituency', detail: 'You can only vote in the constituency where you are registered.' },
            { text: 'You must not be disqualified under any law', detail: 'Certain criminal convictions or unsound mind can disqualify a person.' },
          ],
          tip: '💡 Visit voters.eci.gov.in to check your eligibility online.',
        },
        {
          label: 'Registration',
          title: 'Register as a Voter',
          heading: 'How do I register?',
          description: 'Getting your name on the electoral roll is the first official step. You can register online or offline.',
          checklist: [
            { text: 'Online: Fill Form 6 at voters.eci.gov.in', detail: 'The Voter Portal lets you apply digitally with document uploads.' },
            { text: 'Offline: Visit your nearest Electoral Registration Office', detail: 'Contact the Booth Level Officer (BLO) in your area for assistance.' },
            { text: 'Download Voter Helpline App', detail: 'Available on Android & iOS — track your application status in real-time.' },
            { text: 'Processing time: 15–30 days', detail: 'After verification by the Electoral Registration Officer, your name appears on the roll.' },
          ],
          tip: '💡 You can also call the Election Commission Helpline at 1950 for assistance.',
        },
        {
          label: 'Documents',
          title: 'Prepare Your Documents',
          heading: 'What documents do I need?',
          description: "Keep your documents ready for both registration and voting day. Here's your complete checklist.",
          checklist: [
            { text: 'Age Proof: Birth certificate, Class 10 marksheet, or passport', detail: 'Any government-issued document showing your date of birth.' },
            { text: 'Address Proof: Aadhaar card, utility bill, or rent agreement', detail: 'Must match the constituency where you want to register.' },
            { text: 'Passport-size photographs', detail: 'Recent color photographs with white background.' },
            { text: 'Voter ID (EPIC Card) for voting day', detail: 'If not available, you can use Aadhaar, Passport, DL, PAN, or any govt. photo ID.' },
          ],
          tip: '💡 Keep both originals and photocopies ready. Officials may ask for either.',
        },
        {
          label: 'Find Booth',
          title: 'Locate Your Polling Booth',
          heading: 'Where do I vote?',
          description: "Every registered voter is assigned a specific polling booth. Here's how to find yours.",
          checklist: [
            { text: 'Use the Voter Portal: voters.eci.gov.in', detail: 'Go to "Know Your Polling Booth" section and enter your EPIC number.' },
            { text: 'Use the Voter Helpline App', detail: 'The app shows your booth location on a map with directions.' },
            { text: 'Call Helpline 1950', detail: "Provide your voter ID number and they'll tell you your booth." },
            { text: 'Check your Voter Slip', detail: 'Distributed by BLOs before elections — contains your booth address.' },
          ],
          tip: '💡 Visit your booth location a day before to know the exact spot and avoid last-minute confusion.',
        },
        {
          label: 'Voting Day',
          title: 'Cast Your Vote',
          heading: "It's Voting Day!",
          description: 'The big day is here. Follow these steps to cast your vote smoothly and confidently.',
          checklist: [
            { text: 'Carry your Voter ID or valid photo ID', detail: 'Aadhaar, Passport, DL, PAN card — any one will work.' },
            { text: 'Reach your booth between 7 AM – 6 PM', detail: 'Timing may vary by region. Go early to avoid long queues.' },
            { text: 'Follow the voting process', detail: 'Queue → ID Check → Ink on finger → Enter booth → Press EVM button → Check VVPAT slip → Exit.' },
            { text: 'No phones inside the booth', detail: 'Mobile phones, cameras, and electronic devices are strictly prohibited.' },
          ],
          tip: '🎉 Congratulations on exercising your democratic right! Check results at results.eci.gov.in after counting day.',
        },
      ],
    },
    map: {
      title: "India Election Map",
      subtitle: "Explore election results across states and union territories",
      toggleMap: "🗺️ Map",
      toggleCards: "📊 Cards",
      toggleLS: "Lok Sabha",
      toggleRS: "Rajya Sabha",
      winningParty: "Winning Party",
      seatsWon: "Seats Won",
      partyColors: "Party Colors",
      seats: "seats",
    },
    assistant: {
      headerName: "Election Copilot AI",
      status: "Online — Ready to help",
      greeting: "Hello! I'm your Election Copilot AI. Ask me anything about elections!",
      inputPlaceholder: "Ask me anything about elections...",
      sendHint: "Press Enter to send · AI responses are for guidance only",
      thinking: "Thinking... ⏳",
      fallbackError: "Network connection issue. Please check your internet or try again.",
      chips: {
        nota: "What is NOTA?",
        register: "How do I register as a voter?",
        leaders: "Who are the Parliament leaders?",
        evm: "Explain the EVM process",
      }
    }
  },
  Hindi: {
    navbar: { home: "होम", journey: "यात्रा", map: "नक्शा", assistant: "एआई सहायक", language: "भाषा" },
    footer: { text: "Election Copilot AI — हर नागरिक के लिए निर्मित। 🇮🇳" },
    home: {
      poweredBy: "एआई द्वारा संचालित — हमेशा तैयार", title: "Election", titleGold: "Copilot AI",
      subtitle: "चुनाव प्रक्रिया के लिए आपका स्मार्ट गाइड। मतदाता पंजीकरण, मतदान केंद्रों, उम्मीदवारों की जानकारी के लिए मार्गदर्शन प्राप्त करें।",
      getStarted: "शुरू करें", talkToAI: "एआई सहायक से बात करें ↗",
      feature1Title: "व्यक्तिगत", feature1Desc: "आपके मतदाता प्रोफाइल और स्थान के आधार पर अनुकूलित मार्गदर्शन",
      feature2Title: "तुरंत उत्तर", feature2Desc: "आपके सभी चुनाव संबंधी सवालों के एआई-संचालित उत्तर सेकंडों में",
      feature3Title: "निजी और सुरक्षित", feature3Desc: "आपका डेटा आपके पास रहता है — कोई अकाउंट नहीं, कोई ट्रैकिंग नहीं",
      trust1: "गैर-पक्षपाती", trust2: "ओपन सोर्स", trust3: "साइन-अप की आवश्यकता नहीं"
    },
    journey: {
      headerTitle: "आपकी मतदाता यात्रा", headerSubtitle: "एक तैयार मतदाता बनने के लिए इन 5 चरणों का पालन करें",
      progress: "प्रगति", complete: "पूर्ण", back: "← पीछे", next: "आगे →", completeBtn: "पूर्ण ✓", stepOf: "चरण {current} / {total}",
      steps: [
        { label: 'पात्रता', title: 'अपनी पात्रता जांचें', heading: 'क्या मैं वोट देने के लिए पात्र हूँ?', description: 'चुनाव आयोग द्वारा निर्धारित सभी पात्रता मानदंडों को पूरा करते हैं या नहीं जांचें।', checklist: [ { text: 'आपको एक भारतीय नागरिक होना चाहिए', detail: 'PIO या OCI पात्र नहीं हैं।' }, { text: 'उम्र 18 वर्ष या उससे अधिक होनी चाहिए', detail: 'उम्र की गणना 1 जनवरी के अनुसार की जाती है।' }, { text: 'निर्वाचन क्षेत्र का निवासी होना चाहिए', detail: 'आप केवल पंजीकृत निर्वाचन क्षेत्र में मतदान कर सकते हैं।' }, { text: 'अयोग्य नहीं ठहराया जाना चाहिए', detail: 'कुछ आपराधिक सजाएँ अयोग्य ठहरा सकती हैं।' } ], tip: '💡 अपनी पात्रता ऑनलाइन जांचने के लिए voters.eci.gov.in पर जाएँ।' },
        { label: 'पंजीकरण', title: 'मतदाता के रूप में पंजीकरण करें', heading: 'मैं पंजीकरण कैसे करूँ?', description: 'आप ऑनलाइन या ऑफलाइन पंजीकरण कर सकते हैं।', checklist: [ { text: 'ऑनलाइन: voters.eci.gov.in पर फॉर्म 6 भरें', detail: 'डिजिटल रूप से आवेदन करने की सुविधा।' }, { text: 'ऑफ़लाइन: निर्वाचक पंजीकरण अधिकारी के पास जाएँ', detail: 'सहायता के लिए BLO से संपर्क करें।' }, { text: 'वोटर हेल्पलाइन ऐप डाउनलोड करें', detail: 'अपने आवेदन की स्थिति ट्रैक करें।' }, { text: 'प्रसंस्करण का समय: 15–30 दिन', detail: 'सत्यापन के बाद नाम सूची में दिखाई देता है।' } ], tip: '💡 आप सहायता के लिए 1950 पर कॉल कर सकते हैं।' },
        { label: 'दस्तावेज़', title: 'अपने दस्तावेज़ तैयार करें', heading: 'मुझे किन दस्तावेज़ों की आवश्यकता है?', description: 'पंजीकरण और मतदान के दिन के लिए दस्तावेज़ तैयार रखें।', checklist: [ { text: 'आयु प्रमाण: जन्म प्रमाण पत्र, 10वीं मार्कशीट', detail: 'सरकार द्वारा जारी कोई भी दस्तावेज़।' }, { text: 'पता प्रमाण: आधार कार्ड, उपयोगिता बिल', detail: 'निर्वाचन क्षेत्र से मेल खाना चाहिए।' }, { text: 'पासपोर्ट आकार की तस्वीरें', detail: 'सफेद पृष्ठभूमि के साथ तस्वीरें।' }, { text: 'मतदान के लिए वोटर आईडी (EPIC)', detail: 'उपलब्ध नहीं है, तो आधार, पैन का उपयोग कर सकते हैं।' } ], tip: '💡 मूल और फोटोकॉपी दोनों तैयार रखें।' },
        { label: 'बूथ खोजें', title: 'अपना मतदान केंद्र खोजें', heading: 'मैं कहाँ वोट करूँ?', description: 'अपना मतदान केंद्र कैसे खोजें।', checklist: [ { text: 'voters.eci.gov.in का उपयोग करें', detail: '"अपना मतदान केंद्र जानें" में EPIC नंबर दर्ज करें।' }, { text: 'वोटर हेल्पलाइन ऐप का उपयोग करें', detail: 'मानचित्र पर बूथ का स्थान देखें।' }, { text: '1950 पर कॉल करें', detail: 'वोटर आईडी नंबर दें और बूथ जानें।' }, { text: 'अपनी वोटर स्लिप जांचें', detail: 'BLO द्वारा वितरित की जाती है।' } ], tip: '💡 भ्रम से बचने के लिए एक दिन पहले बूथ स्थान पर जाएँ।' },
        { label: 'मतदान का दिन', title: 'अपना वोट डालें', heading: 'यह मतदान का दिन है!', description: 'आत्मविश्वास से अपना वोट डालने के लिए चरणों का पालन करें।', checklist: [ { text: 'अपना वोटर आईडी या वैध फोटो आईडी रखें', detail: 'आधार, पैन कार्ड काम करेगा।' }, { text: 'सुबह 7 बजे से शाम 6 बजे के बीच पहुंचें', detail: 'जल्दी जाएँ।' }, { text: 'मतदान प्रक्रिया का पालन करें', detail: 'कतार → आईडी जांच → स्याही → मतदान → वीवीपैट जांच → बाहर।' }, { text: 'फोन की अनुमति नहीं है', detail: 'मोबाइल फोन सख्त वर्जित हैं।' } ], tip: '🎉 अपने लोकतांत्रिक अधिकार का प्रयोग करने पर बधाई! परिणाम results.eci.gov.in पर देखें।' }
      ]
    },
    map: {
      title: "भारत चुनाव मानचित्र", subtitle: "राज्यों और केंद्र शासित प्रदेशों में चुनाव परिणाम",
      toggleMap: "🗺️ नक्शा", toggleCards: "📊 कार्ड", toggleLS: "लोकसभा", toggleRS: "राज्यसभा",
      winningParty: "जीतने वाली पार्टी", seatsWon: "जीती गई सीटें", partyColors: "पार्टी के रंग", seats: "सीटें"
    },
    assistant: {
      headerName: "Election Copilot AI", status: "ऑनलाइन — मदद के लिए तैयार",
      greeting: "नमस्ते! मैं आपका Election Copilot AI हूँ। मुझसे चुनाव के बारे में कुछ भी पूछें!", inputPlaceholder: "चुनाव के बारे में कुछ भी पूछें...",
      sendHint: "भेजने के लिए Enter दबाएं · AI प्रतिक्रियाएं केवल मार्गदर्शन के लिए हैं", thinking: "सोच रहा हूँ... ⏳", fallbackError: "नेटवर्क समस्या। कृपया अपने इंटरनेट की जांच करें।",
      chips: { nota: "NOTA क्या है?", register: "मैं मतदाता के रूप में पंजीकरण कैसे करूँ?", leaders: "संसद के नेता कौन हैं?", evm: "EVM प्रक्रिया समझाएं" }
    }
  },
  Marathi: {
    navbar: { home: "होम", journey: "प्रवास", map: "नकाशा", assistant: "AI सहाय्यक", language: "भाषा" },
    footer: { text: "Election Copilot AI — प्रत्येक नागरिकासाठी. 🇮🇳" },
    home: {
      poweredBy: "AI द्वारे समर्थित — नेहमी तयार", title: "Election", titleGold: "Copilot AI",
      subtitle: "निवडणूक प्रक्रियेसाठी तुमचा स्मार्ट मार्गदर्शक. मतदार नोंदणी, मतदान केंद्रे, उमेदवार माहितीसाठी मार्गदर्शन मिळवा.",
      getStarted: "सुरू करा", talkToAI: "AI सहाय्यकाशी बोला ↗",
      feature1Title: "वैयक्तिकृत", feature1Desc: "तुमच्या मतदार प्रोफाइल आणि स्थानावर आधारित अनुकूल मार्गदर्शन",
      feature2Title: "त्वरित उत्तरे", feature2Desc: "तुमच्या सर्व निवडणूक प्रश्नांची AI-समर्थित उत्तरे सेकंदात",
      feature3Title: "खाजगी आणि सुरक्षित", feature3Desc: "तुमचा डेटा तुमच्याकडे राहतो — कोणतेही खाते नाही, ट्रॅकिंग नाही",
      trust1: "निःपक्षपाती", trust2: "ओपन सोर्स", trust3: "साइन-अप आवश्यक नाही"
    },
    journey: {
      headerTitle: "तुमचा मतदार प्रवास", headerSubtitle: "तयार मतदार होण्यासाठी या 5 पायऱ्या फॉलो करा",
      progress: "प्रगती", complete: "पूर्ण", back: "← मागे", next: "पुढे →", completeBtn: "पूर्ण ✓", stepOf: "पायरी {current} / {total}",
      steps: [
        { label: 'पात्रता', title: 'तुमची पात्रता तपासा', heading: 'मी मतदान करण्यास पात्र आहे का?', description: 'तुम्ही भारतीय निवडणूक आयोगाच्या निकषांची पूर्तता करता का ते तपासा.', checklist: [ { text: 'तुम्ही भारतीय नागरिक असले पाहिजे', detail: 'PIO किंवा OCI पात्र नाहीत.' }, { text: 'वय 18 वर्षे किंवा त्याहून अधिक असावे', detail: 'वय 1 जानेवारी रोजी मोजले जाते.' }, { text: 'मतदारसंघाचे रहिवासी असावेत', detail: 'नोंदणीकृत ठिकाणीच मतदान करू शकता.' }, { text: 'कायद्यानुसार अपात्र नसावे', detail: 'काही गुन्हेगारी शिक्षांमुळे अपात्रता येऊ शकते.' } ], tip: '💡 ऑनलाइन पात्रता तपासण्यासाठी voters.eci.gov.in ला भेट द्या.' },
        { label: 'नोंदणी', title: 'मतदार म्हणून नोंदणी करा', heading: 'नोंदणी कशी करावी?', description: 'तुम्ही ऑनलाइन किंवा ऑफलाइन नोंदणी करू शकता.', checklist: [ { text: 'ऑनलाइन: voters.eci.gov.in वर फॉर्म 6 भरा', detail: 'कागदपत्रांसह अर्ज करा.' }, { text: 'ऑफलाइन: निवडणूक नोंदणी अधिकाऱ्याला भेटा', detail: 'मदतीसाठी BLO शी संपर्क साधा.' }, { text: 'Voter Helpline App', detail: 'अर्जाची स्थिती ट्रॅक करा.' }, { text: 'प्रक्रिया वेळ: 15–30 दिवस', detail: 'सत्यापनानंतर नाव यादीत येते.' } ], tip: '💡 मदतीसाठी 1950 हेल्पलाइनवर कॉल करू शकता.' },
        { label: 'कागदपत्रे', title: 'तुमची कागदपत्रे तयार ठेवा', heading: 'कोणती कागदपत्रे आवश्यक आहेत?', description: 'नोंदणी आणि मतदानासाठी ही कागदपत्रे आवश्यक आहेत.', checklist: [ { text: 'वयाचा पुरावा: जन्म प्रमाणपत्र, 10वीची मार्कशीट', detail: 'कोणताही सरकारी दस्तऐवज.' }, { text: 'पत्त्याचा पुरावा: आधार, युटिलिटी बिल', detail: 'मतदारसंघाशी जुळले पाहिजे.' }, { text: 'पासपोर्ट आकाराचे फोटो', detail: 'पांढऱ्या पार्श्वभूमीसह अलीकडील फोटो.' }, { text: 'मतदानासाठी वोटर आयडी (EPIC)', detail: 'नसल्यास आधार, पॅन वापरू शकता.' } ], tip: '💡 मूळ आणि झेरॉक्स प्रती दोन्ही जवळ ठेवा.' },
        { label: 'केंद्रे शोधा', title: 'तुमचे मतदान केंद्र शोधा', heading: 'मी कुठे मतदान करू?', description: 'तुमचे मतदान केंद्र कसे शोधायचे ते येथे आहे.', checklist: [ { text: 'voters.eci.gov.in वापरा', detail: '"तुमचे मतदान केंद्र जाणून घ्या" मध्ये EPIC क्रमांक टाका.' }, { text: 'Voter Helpline App वापरा', detail: 'नकाशावर दिशा मिळवा.' }, { text: '1950 वर कॉल करा', detail: 'EPIC क्रमांक सांगून केंद्र जाणून घ्या.' }, { text: 'तुमची मतदार स्लिप तपासा', detail: 'निवडणुकीपूर्वी BLO कडून मिळते.' } ], tip: '💡 गोंधळ टाळण्यासाठी एक दिवस आधी केंद्राला भेट द्या.' },
        { label: 'मतदानाचा दिवस', title: 'तुमचे मत नोंदवा', heading: 'मतदानाचा दिवस!', description: 'आत्मविश्वासाने मतदान करण्यासाठी या पायऱ्या फॉलो करा.', checklist: [ { text: 'तुमचे ओळखपत्र सोबत ठेवा', detail: 'वोटर आयडी, आधार, पॅन कार्ड चालेल.' }, { text: 'सकाळी 7 ते संध्याकाळी 6 दरम्यान पोहोचा', detail: 'लवकर जा.' }, { text: 'प्रक्रियेचे पालन करा', detail: 'रांग → ओळख तपासणी → शाई → मतदान → VVPAT तपासणी → बाहेर.' }, { text: 'फोनला परवानगी नाही', detail: 'मोबाईल फोन सक्त निषिद्ध आहेत.' } ], tip: '🎉 मतदानाचा हक्क बजावल्याबद्दल अभिनंदन! निकाल results.eci.gov.in वर तपासा.' }
      ]
    },
    map: {
      title: "भारत निवडणूक नकाशा", subtitle: "राज्ये आणि केंद्रशासित प्रदेशांमधील निवडणूक निकाल",
      toggleMap: "🗺️ नकाशा", toggleCards: "📊 कार्ड्स", toggleLS: "लोकसभा", toggleRS: "राज्यसभा",
      winningParty: "विजयी पक्ष", seatsWon: "जिंकलेल्या जागा", partyColors: "पक्षाचे रंग", seats: "जागा"
    },
    assistant: {
      headerName: "Election Copilot AI", status: "ऑनलाइन — मदतीसाठी तयार",
      greeting: "नमस्कार! मी तुमचा Election Copilot AI आहे. मला निवडणुकीबद्दल काहीही विचारा!", inputPlaceholder: "निवडणुकीबद्दल काहीही विचारा...",
      sendHint: "पाठवण्यासाठी Enter दाबा · AI उत्तरे फक्त मार्गदर्शनासाठी आहेत", thinking: "विचार करत आहे... ⏳", fallbackError: "नेटवर्क समस्या. कृपया तुमचे इंटरनेट तपासा.",
      chips: { nota: "NOTA म्हणजे काय?", register: "मतदार म्हणून नोंदणी कशी करावी?", leaders: "संसदेचे नेते कोण आहेत?", evm: "EVM प्रक्रिया सांगा" }
    }
  },
  Telugu: {
    navbar: { home: "హోమ్", journey: "ప్రయాణం", map: "మ్యాప్", assistant: "AI అసిస్టెంట్", language: "భాష" },
    footer: { text: "Election Copilot AI — ప్రతి పౌరుడి కోసం. 🇮🇳" },
    home: {
      poweredBy: "AI ద్వారా ఆధారితం — ఎల్లప్పుడూ సిద్ధం", title: "Election", titleGold: "Copilot AI",
      subtitle: "ఎన్నికల ప్రక్రియకు మీ స్మార్ట్ గైడ్. ఓటరు నమోదు, పోలింగ్ కేంద్రాలు, అభ్యర్థుల సమాచారం గురించి తెలుసుకోండి.",
      getStarted: "ప్రారంభించండి", talkToAI: "AI అసిస్టెంట్‌తో మాట్లాడండి ↗",
      feature1Title: "వ్యక్తిగతీకరించబడినది", feature1Desc: "మీ ఓటరు ప్రొఫైల్ ఆధారంగా మార్గదర్శకత్వం",
      feature2Title: "తక్షణ సమాధానాలు", feature2Desc: "సెకన్లలో AI-ఆధారిత ప్రతిస్పందనలు",
      feature3Title: "ప్రైవేట్ & సురక్షితమైనది", feature3Desc: "మీ డేటా మీ వద్దే ఉంటుంది — ఖాతాలు లేవు, ట్రాకింగ్ లేదు",
      trust1: "పక్షపాతం లేనిది", trust2: "ఓపెన్ సోర్స్", trust3: "సైన్-అప్ అవసరం లేదు"
    },
    journey: {
      headerTitle: "మీ ఓటరు ప్రయాణం", headerSubtitle: "సన్నద్ధమైన ఓటరుగా మారడానికి ఈ 5 దశలను అనుసరించండి",
      progress: "పురోగతి", complete: "పూర్తయింది", back: "← వెనుకకు", next: "తర్వాత →", completeBtn: "పూర్తయింది ✓", stepOf: "దశ {current} / {total}",
      steps: [
        { label: 'అర్హత', title: 'మీ అర్హతను తనిఖీ చేయండి', heading: 'ఓటు వేయడానికి నాకు అర్హత ఉందా?', description: 'ఎన్నికల సంఘం నిర్ణయించిన అర్హత ప్రమాణాలను తనిఖీ చేయండి.', checklist: [ { text: 'మీరు భారతీయ పౌరుడిగా ఉండాలి', detail: 'PIO లేదా OCI అర్హులు కారు.' }, { text: 'వయస్సు 18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ ఉండాలి', detail: 'వయస్సు జనవరి 1 నాటికి లెక్కించబడుతుంది.' }, { text: 'నియోజకవర్గ నివాసి అయి ఉండాలి', detail: 'నమోదు చేసుకున్న చోట మాత్రమే ఓటు వేయగలరు.' }, { text: 'చట్టం ప్రకారం అనర్హులు కాకూడదు', detail: 'కొన్ని నేరాలకు అనర్హత ఉంటుంది.' } ], tip: '💡 అర్హతను ఆన్‌లైన్‌లో తనిఖీ చేయడానికి voters.eci.gov.in ని సందర్శించండి.' },
        { label: 'నమోదు', title: 'ఓటరుగా నమోదు చేసుకోండి', heading: 'నేను ఎలా నమోదు చేసుకోవాలి?', description: 'మీరు ఆన్‌లైన్ లేదా ఆఫ్‌లైన్‌లో నమోదు చేసుకోవచ్చు.', checklist: [ { text: 'ఆన్‌లైన్: voters.eci.gov.in లో ఫారమ్ 6 పూరించండి', detail: 'ఆన్‌లైన్‌లో దరఖాస్తు చేసుకోండి.' }, { text: 'ఆఫ్‌లైన్: ఎన్నికల రిజిస్ట్రేషన్ అధికారిని సందర్శించండి', detail: 'సహాయం కోసం BLO ను సంప్రదించండి.' }, { text: 'Voter Helpline App', detail: 'అప్లికేషన్ స్థితిని ట్రాక్ చేయండి.' }, { text: 'ప్రాసెసింగ్ సమయం: 15–30 రోజులు', detail: 'ధృవీకరణ తర్వాత పేరు జాబితాలో కనిపిస్తుంది.' } ], tip: '💡 సహాయం కోసం 1950 కి కాల్ చేయవచ్చు.' },
        { label: 'పత్రాలు', title: 'మీ పత్రాలను సిద్ధం చేసుకోండి', heading: 'నాకు ఏ పత్రాలు కావాలి?', description: 'నమోదు మరియు పోలింగ్ రోజు కోసం పత్రాలను సిద్ధంగా ఉంచుకోండి.', checklist: [ { text: 'వయస్సు రుజువు: జనన ధృవీకరణ పత్రం, 10వ తరగతి మార్క్‌షీట్', detail: 'ఏదైనా ప్రభుత్వ పత్రం.' }, { text: 'చిరునామా రుజువు: ఆధార్, యుటిలిటీ బిల్లు', detail: 'నియోజకవర్గానికి సరిపోలాలి.' }, { text: 'పాస్‌పోర్ట్ సైజు ఫోటోలు', detail: 'తెలుపు నేపథ్యంతో ఫోటోలు.' }, { text: 'ఓటింగ్ రోజు కోసం ఓటర్ ID (EPIC)', detail: 'లేకపోతే ఆధార్, పాన్ ఉపయోగించవచ్చు.' } ], tip: '💡 అసలైన మరియు జిరాక్స్ కాపీలు రెండింటినీ సిద్ధంగా ఉంచుకోండి.' },
        { label: 'బూత్ కనుగొనండి', title: 'మీ పోలింగ్ బూత్‌ను కనుగొనండి', heading: 'నేను ఎక్కడ ఓటు వేయాలి?', description: 'మీ పోలింగ్ బూత్‌ను ఎలా కనుగొనాలో ఇక్కడ ఉంది.', checklist: [ { text: 'voters.eci.gov.in ని ఉపయోగించండి', detail: '"మీ పోలింగ్ బూత్‌ను తెలుసుకోండి" లో EPIC నంబర్‌ను నమోదు చేయండి.' }, { text: 'Voter Helpline App ని ఉపయోగించండి', detail: 'మ్యాప్‌లో దిశలను పొందండి.' }, { text: '1950 కి కాల్ చేయండి', detail: 'EPIC నంబర్ చెప్పి తెలుసుకోండి.' }, { text: 'మీ ఓటర్ స్లిప్‌ను తనిఖీ చేయండి', detail: 'BLO ద్వారా ఇవ్వబడుతుంది.' } ], tip: '💡 గందరగోళాన్ని నివారించడానికి ఒక రోజు ముందుగానే బూత్‌ను సందర్శించండి.' },
        { label: 'పోలింగ్ రోజు', title: 'మీ ఓటు వేయండి', heading: 'ఇది పోలింగ్ రోజు!', description: 'నమ్మకంగా ఓటు వేయడానికి ఈ దశలను అనుసరించండి.', checklist: [ { text: 'మీ గుర్తింపు కార్డును తీసుకెళ్లండి', detail: 'ఓటర్ ID, ఆధార్, పాన్ కార్డ్ సరిపోతుంది.' }, { text: 'ఉదయం 7 నుండి సాయంత్రం 6 గంటల మధ్య చేరుకోండి', detail: 'ముందుగా వెళ్లండి.' }, { text: 'ప్రక్రియను అనుసరించండి', detail: 'క్యూ → ID తనిఖీ → సిరా → ఓటింగ్ → VVPAT తనిఖీ → నిష్క్రమణ.' }, { text: 'ఫోన్‌లు అనుమతించబడవు', detail: 'మొబైల్ ఫోన్‌లు నిషేధించబడ్డాయి.' } ], tip: '🎉 ఓటు హక్కును వినియోగించుకున్నందుకు అభినందనలు! ఫలితాలను results.eci.gov.in లో తనిఖీ చేయండి.' }
      ]
    },
    map: {
      title: "భారతదేశ ఎన్నికల మ్యాప్", subtitle: "రాష్ట్రాలు మరియు కేంద్రపాలిత ప్రాంతాలలో ఎన్నికల ఫలితాలు",
      toggleMap: "🗺️ మ్యాప్", toggleCards: "📊 కార్డ్‌లు", toggleLS: "లోక్ సభ", toggleRS: "రాజ్యసభ",
      winningParty: "గెలిచిన పార్టీ", seatsWon: "గెలిచిన సీట్లు", partyColors: "పార్టీ రంగులు", seats: "సీట్లు"
    },
    assistant: {
      headerName: "Election Copilot AI", status: "ఆన్‌లైన్ — సహాయం చేయడానికి సిద్ధంగా ఉంది",
      greeting: "నమస్కారం! నేను మీ Election Copilot AI ని. ఎన్నికల గురించి నన్ను ఏదైనా అడగండి!", inputPlaceholder: "ఎన్నికల గురించి ఏదైనా అడగండి...",
      sendHint: "పంపడానికి Enter నొక్కండి · AI సమాధానాలు మార్గదర్శకత్వం కోసం మాత్రమే", thinking: "ఆలోచిస్తోంది... ⏳", fallbackError: "నెట్‌వర్క్ సమస్య. దయచేసి మీ ఇంటర్నెట్‌ని తనిఖీ చేయండి.",
      chips: { nota: "NOTA అంటే ఏమిటి?", register: "నేను ఓటరుగా ఎలా నమోదు చేసుకోవాలి?", leaders: "పార్లమెంట్ నాయకులు ఎవరు?", evm: "EVM ప్రక్రియను వివరించండి" }
    }
  },
  Tamil: {
    navbar: { home: "முகப்பு", journey: "பயணம்", map: "வரைபடம்", assistant: "AI உதவியாளர்", language: "மொழி" },
    footer: { text: "Election Copilot AI — ஒவ்வொரு குடிமகனுக்காகவும். 🇮🇳" },
    home: {
      poweredBy: "AI ஆல் இயக்கப்படுகிறது — எப்போதும் தயார்", title: "Election", titleGold: "Copilot AI",
      subtitle: "தேர்தல் செயல்முறைக்கான உங்கள் ஸ்மார்ட் வழிகாட்டி. வாக்காளர் பதிவு, வாக்குச் சாவடிகள் பற்றிய தகவல்களைப் பெறுங்கள்.",
      getStarted: "தொடங்குங்கள்", talkToAI: "AI உதவியாளருடன் பேசுங்கள் ↗",
      feature1Title: "தனிப்பயனாக்கப்பட்டது", feature1Desc: "உங்கள் வாக்காளர் சுயவிவரத்தின் அடிப்படையில் வழிகாட்டுதல்",
      feature2Title: "உடனடி பதில்கள்", feature2Desc: "வினாடிகளில் AI-ஆதரவு பதில்கள்",
      feature3Title: "தனியார் மற்றும் பாதுகாப்பானது", feature3Desc: "உங்கள் தரவு உங்களிடமே இருக்கும் — கணக்குகள் இல்லை, கண்காணிப்பு இல்லை",
      trust1: "சார்பற்றது", trust2: "ஓப்பன் சோர்ஸ்", trust3: "பதிவு தேவையில்லை"
    },
    journey: {
      headerTitle: "உங்கள் வாக்காளர் பயணம்", headerSubtitle: "தயாரான வாக்காளராக மாற இந்த 5 படிகளைப் பின்பற்றவும்",
      progress: "முன்னேற்றம்", complete: "முடிந்தது", back: "← பின்னால்", next: "அடுத்து →", completeBtn: "முடிந்தது ✓", stepOf: "படி {current} / {total}",
      steps: [
        { label: 'தகுதி', title: 'உங்கள் தகுதியைச் சரிபார்க்கவும்', heading: 'நான் வாக்களிக்கத் தகுதியானவனா?', description: 'தேர்தல் ஆணையம் நிர்ணயித்துள்ள தகுதி அளவுகோல்களைச் சரிபார்க்கவும்.', checklist: [ { text: 'நீங்கள் இந்தியக் குடிமகனாக இருக்க வேண்டும்', detail: 'PIO அல்லது OCI தகுதியற்றவர்கள்.' }, { text: 'உங்களுக்கு 18 வயது அல்லது அதற்கு மேல் இருக்க வேண்டும்', detail: 'ஜனவரி 1 ஆம் தேதி நிலவரப்படி வயது கணக்கிடப்படுகிறது.' }, { text: 'தொகுதியின் குடியிருப்பாளராக இருக்க வேண்டும்', detail: 'பதிவு செய்யப்பட்ட தொகுதியில் மட்டுமே வாக்களிக்க முடியும்.' }, { text: 'சட்டத்தின் கீழ் தகுதியிழக்கக் கூடாது', detail: 'சில குற்றவியல் தண்டனைகள் தகுதியிழப்பை ஏற்படுத்தும்.' } ], tip: '💡 தகுதியைச் சரிபார்க்க voters.eci.gov.in ஐப் பார்வையிடவும்.' },
        { label: 'பதிவு', title: 'வாக்காளராக பதிவு செய்யவும்', heading: 'நான் எவ்வாறு பதிவு செய்வது?', description: 'நீங்கள் ஆன்லைனில் அல்லது ஆஃப்லைனில் பதிவு செய்யலாம்.', checklist: [ { text: 'ஆன்லைன்: voters.eci.gov.in இல் படிவம் 6 ஐ நிரப்பவும்', detail: 'டிஜிட்டல் முறையில் விண்ணப்பிக்கவும்.' }, { text: 'ஆஃப்லைன்: தேர்தல் பதிவு அதிகாரியைப் பார்வையிடவும்', detail: 'உதவிக்கு BLO ஐத் தொடர்பு கொள்ளவும்.' }, { text: 'Voter Helpline App', detail: 'விண்ணப்ப நிலையை அறியவும்.' }, { text: 'செயலாக்க நேரம்: 15–30 நாட்கள்', detail: 'சரிபார்ப்புக்குப் பிறகு பெயர் பட்டியலில் தோன்றும்.' } ], tip: '💡 உதவிக்கு 1950 ஐ அழைக்கலாம்.' },
        { label: 'ஆவணங்கள்', title: 'உங்கள் ஆவணங்களைத் தயாரிக்கவும்', heading: 'எனக்கு என்ன ஆவணங்கள் தேவை?', description: 'பதிவு மற்றும் வாக்குப்பதிவு நாளுக்கான ஆவணங்களை தயாராக வைத்திருக்கவும்.', checklist: [ { text: 'வயதுச் சான்று: பிறப்புச் சான்றிதழ், 10 ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்', detail: 'ஏதேனும் அரசு ஆவணம்.' }, { text: 'முகவரிச் சான்று: ஆதார், பயன்பாட்டு மசோதா', detail: 'தொகுதியுடன் பொருந்த வேண்டும்.' }, { text: 'பாஸ்போர்ட் அளவு புகைப்படங்கள்', detail: 'வெள்ளை பின்னணியுடன் புகைப்படங்கள்.' }, { text: 'வாக்குப்பதிவு நாளுக்கான வாக்காளர் அட்டை (EPIC)', detail: 'இல்லையென்றால் ஆதார், பான் பயன்படுத்தலாம்.' } ], tip: '💡 அசல் மற்றும் நகல் இரண்டையும் தயாராக வைத்திருக்கவும்.' },
        { label: 'சாவடியைக் கண்டறியவும்', title: 'உங்கள் வாக்குச் சாவடியைக் கண்டறியவும்', heading: 'நான் எங்கே வாக்களிப்பது?', description: 'உங்கள் வாக்குச் சாவடியை எவ்வாறு கண்டறிவது என்பது இங்கே.', checklist: [ { text: 'voters.eci.gov.in ஐப் பயன்படுத்தவும்', detail: '"உங்கள் வாக்குச் சாவடியை அறியுங்கள்" என்பதில் EPIC எண்ணை உள்ளிடவும்.' }, { text: 'Voter Helpline App ஐப் பயன்படுத்தவும்', detail: 'வரைபடத்தில் திசைகளைப் பெறுங்கள்.' }, { text: '1950 ஐ அழைக்கவும்', detail: 'EPIC எண்ணைச் சொல்லி சாவடியை அறியவும்.' }, { text: 'உங்கள் வாக்காளர் சீட்டைச் சரிபார்க்கவும்', detail: 'BLO களால் வழங்கப்படுகிறது.' } ], tip: '💡 குழப்பத்தைத் தவிர்க்க ஒரு நாள் முன்னதாக சாவடிக்குச் செல்லவும்.' },
        { label: 'வாக்குப்பதிவு நாள்', title: 'உங்கள் வாக்கைச் செலுத்துங்கள்', heading: 'இது வாக்குப்பதிவு நாள்!', description: 'நம்பிக்கையுடன் வாக்களிக்க இந்தப் படிகளைப் பின்பற்றவும்.', checklist: [ { text: 'உங்கள் அடையாள அட்டையை எடுத்துச் செல்லுங்கள்', detail: 'வாக்காளர் அடையாள அட்டை, ஆதார், பான் கார்டு போதும்.' }, { text: 'காலை 7 மணி முதல் மாலை 6 மணிக்குள் செல்லவும்', detail: 'சீக்கிரம் செல்லுங்கள்.' }, { text: 'செயல்முறையைப் பின்பற்றவும்', detail: 'வரிசை → ஐடி சரிபார்ப்பு → மை → வாக்களிப்பு → VVPAT சரிபார்ப்பு → வெளியேறு.' }, { text: 'போன்களுக்கு அனுமதி இல்லை', detail: 'மொபைல் போன்களுக்கு தடை விதிக்கப்பட்டுள்ளது.' } ], tip: '🎉 உங்கள் ஜனநாயக உரிமையைப் பயன்படுத்தியதற்கு வாழ்த்துக்கள்! முடிவுகளை results.eci.gov.in இல் சரிபார்க்கவும்.' }
      ]
    },
    map: {
      title: "இந்தியத் தேர்தல் வரைபடம்", subtitle: "மாநிலங்கள் மற்றும் யூனியன் பிரதேசங்களில் தேர்தல் முடிவுகள்",
      toggleMap: "🗺️ வரைபடம்", toggleCards: "📊 கார்டுகள்", toggleLS: "மக்களவை", toggleRS: "மாநிலங்களவை",
      winningParty: "வெற்றி பெற்ற கட்சி", seatsWon: "வென்ற இடங்கள்", partyColors: "கட்சி நிறங்கள்", seats: "இடங்கள்"
    },
    assistant: {
      headerName: "Election Copilot AI", status: "ஆன்லைன் — உதவத் தயார்",
      greeting: "வணக்கம்! நான் உங்கள் Election Copilot AI. தேர்தலைப் பற்றி எதையும் கேளுங்கள்!", inputPlaceholder: "தேர்தலைப் பற்றி எதையும் கேளுங்கள்...",
      sendHint: "அனுப்ப Enter ஐ அழுத்தவும் · AI பதில்கள் வழிகாட்டுதலுக்கு மட்டுமே", thinking: "யோசிக்கிறது... ⏳", fallbackError: "நெட்வொர்க் சிக்கல். உங்கள் இணையத்தைச் சரிபார்க்கவும்.",
      chips: { nota: "NOTA என்றால் என்ன?", register: "நான் எவ்வாறு வாக்காளராகப் பதிவு செய்வது?", leaders: "நாடாளுமன்றத் தலைவர்கள் யார்?", evm: "EVM செயல்முறையை விளக்குங்கள்" }
    }
  }
};
