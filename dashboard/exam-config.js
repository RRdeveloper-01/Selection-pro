
const EXAM_CONFIG = {


    /* =================================================
       SSC CGL
    ================================================= */

    "ssc-cgl": {

        name: "SSC CGL",
        shortName: "CGL",
        category: "SSC",
        icon: "🎯",


        /* =============================================
           CORE RESOURCES
        ============================================= */

        pages: [

            {
                title: "SSC CGL Exam Guide",
                description:
                    "Syllabus, pattern, eligibility and complete exam information.",

                url: "/examinfo/ssc-cgl.html",

                icon: "📚",
                type: "guide"
            },


            {
                title: "SSC CGL Practice Tests",
                description:
                    "Attempt SSC CGL online mock tests.",

                url: "/ssccgl.html",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "SSC Current Affairs",
                description:
                    "Daily current affairs for SSC examinations.",

                url: "/current-affairs/affairs-hub.html",

                icon: "📰",
                type: "current-affairs",

                badge: "badge-new",
                badgeText: "NEW"
            },


            {
                title: "SSC CGL Preparation Strategy",
                description:
                    "Study strategy, preparation tips and useful resources.",

                url: "/ssccgl.html",

                icon: "🚀",
                type: "strategy"
            }

        ],
    quickActions: [

        {
            title: "Today's Test",
            url: "/ssccgl.html",
            icon: "🎯"
        },

        {
            title: "Today's Current Affairs",
            url: "/current-affairs/affairs-hub.html",
            icon: "📰"
        },

        {
            title: "Create Study Notes",
            url: "/tools/notes.html",
            icon: "📝"
        },

        {
            title: "5 Min Break",
            url: "/tools/game.html",
            icon: "🧠"
        }

    ]

    },


    /* =================================================
       SSC CHSL
    ================================================= */

    "ssc-chsl": {

        name: "SSC CHSL",
        shortName: "CHSL",
        category: "SSC",
        icon: "📖",


        pages: [

            {
                title: "SSC CHSL Exam Guide",

                description:
                    "Complete SSC CHSL syllabus, pattern and exam information.",

                url: "#",

                icon: "📚",
                type: "guide"
            },


            {
                title: "SSC CHSL Practice Tests",

                description:
                    "Practice online mock tests.",

                url: "/sscchsl.html",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "SSC Current Affairs",

                description:
                    "Daily current affairs for SSC examinations.",

                url: "/current-affairs/affairs-hub.html",

                icon: "📰",
                type: "current-affairs",

                badge: "badge-new",
                badgeText: "NEW"
            },


            {
                title: "SSC CHSL Preparation",

                description:
                    "Preparation strategy, tips and useful study resources.",

                url: "/sscchsl.html",

                icon: "🚀",
                type: "strategy"
            }

        ],

    quickActions: [

        {
            title: "Today's Test",
            url: "/sscchsl.html",
            icon: "🎯"
        },

        {
            title: "Today's Current Affairs",
            url: "/current-affairs/affairs-hub.html",
            icon: "📰"
        },

        {
            title: "Study Notes",
            url: "/tools/notes.html",
            icon: "📝"
        },

        {
            title: "5 Min Break",
            url: "/tools/game.html",
            icon: "🧠"
        }

    ]

    },


    /* =================================================
       UPSC
    ================================================= */

    "upsc": {

        name: "UPSC",
        shortName: "UPSC",
        category: "UPSC",
        icon: "🏛️",


        pages: [

            {
                title: "UPSC Exam Guide",

                description:
                    "Complete UPSC exam information and syllabus.",

                url: "/examinfo/upsc.html",

                icon: "📚",
                type: "guide"
            },


            {
                title: "UPSC Current Affairs",

                description:
                    "Daily current affairs and important national and international news.",

                url: "/current-affairs/affairs-hub.html",

                icon: "📰",
                type: "current-affairs",

                badge: "badge-new",
                badgeText: "NEW"
            }

        ]
,
    quickActions: [


        {
            title: "Today's Current Affairs",
            url: "/current-affairs/affairs-hub.html",
            icon: "📰"
        },

        {
            title: "Study Notes",
            url: "/tools/notes.html",
            icon: "📝"
        },

        {
            title: "5 Min Break",
            url: "/tools/game.html",
            icon: "🧠"
        }

    ]

    },


    /* =================================================
       NEET
    ================================================= */

    "neet": {

        name: "NEET",
        shortName: "NEET",
        category: "Medical",
        icon: "🧬",


        pages: [

            {
                title: "NEET Exam Guide",

                description:
                    "NEET syllabus, pattern and preparation information.",

                url: "/neet.html",

                icon: "📚",
                type: "guide"
            },


            {
                title: "NEET PYQs",

                description:
                    "Practice NEET previous year questions.",

                url: "/neet.html",

                icon: "📝",
                type: "pyq"
            },


            {
                title: "NEET Mock Tests",

                description:
                    "Practice NEET mock tests.",

                url: "/mock/neet_mock_test.html",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "NEET Mock Tests Hindi",

                description:
                    "Practice NEET mock tests in Hindi.",

                url: "/mock/neet_mock_test_hindi.html",

                icon: "🎯",
                type: "mock"
            }

        ],
        /* =================================
       QUICK ACTIONS
       OPTIONAL
    ================================= */

    quickActions: [

        {
            title: "Today's Test",
            url: "/neet.html",
            icon: "🎯"
        },

        {
            title: "Study Notes",
            url: "/tools/notes.html",
            icon: "📝"
        },

        {
            title: "5 Min Break",
            url: "/tools/game.html",
            icon: "🧠"
        }

    ]

    },


    /* =================================================
       JEE MAIN
    ================================================= */

    "jee": {

        name: "JEE Main",
        shortName: "JEE",
        category: "Engineering",
        icon: "⚡",

challenges: [

            {
                title: "100 Days JEE MAINS Revision Challenge",

                description:
                    "Daily chapter revision, study timetable and practice test.",

                url: "https://t.me/selectionprojee",

                icon: "🚀",

                badge: "COMING SOON",

                duration: "100 Days",

                progress: "Complete 100 members to start revision series",

                currentDay: 0,

                totalDays: 0,

                todayTest:
                    "https://t.me/selectionprojee",

                todaySchedule:
                    "https://t.me/selectionprojee"
            }

        ],
        pages: [

            {
                title: "JEE Main Exam Guide",

                description:
                    "JEE Main syllabus, pattern and important information.",

                url: "/jeemains.html#strategy",

                icon: "📚",
                type: "guide"
            },


            {
                title: "JEE Main PYQs",

                description:
                    "Practice JEE Main previous year questions.",

                url: "/jeemains.html#official-pyq",

                icon: "📝",
                type: "pyq"
            },


            {
                title: "JEE Main Practice Tests",

                description:
                    "Practice JEE Main online mock tests.",

                url: "/jeemains.html",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "JEE Mock Tests",

                description:
                    "Practice JEE mock tests.",

                url: "/mock/jee_mains_mock_test.html",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "JEE Mock Tests Hindi",

                description:
                    "Practice JEE Main mock tests in Hindi.",

                url: "/mock/jee_mains_mock_test_hindi.html",

                icon: "🎯",
                type: "mock"
            }

        ],
        
        /* =================================
       QUICK ACTIONS
       OPTIONAL
    ================================= */

    quickActions: [

        {
            title: "Today's Test",
            url: "/jeemains.html",
            icon: "🎯"
        },

        {
            title: "Study Notes",
            url: "/tools/notes.html",
            icon: "📝"
        },

        {
            title: "5 Min Break",
            url: "/tools/game.html",
            icon: "🧠"
        }

    ]

    },


    /* =================================================
       BANKING
    ================================================= */

    "banking": {

        name: "Banking Exams",
        shortName: "Banking",
        category: "Banking",
        icon: "🏦",


        pages: [

            {
                title: "Banking Exam Guide",

                description:
                    "Banking exams syllabus, pattern and preparation.",

                url: "/banking.html",

                icon: "📚",
                type: "guide"
            },


            {
                title: "Banking PYQs",

                description:
                    "Coming Soon",

                url: "#",

                icon: "📝",
                type: "pyq"
            },


            {
                title: "Banking Mock Tests",

                description:
                    "Coming Soon",

                url: "#",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "Banking Current Affairs",

                description:
                    "Daily current affairs useful for banking examinations.",

                url: "/current-affairs/affairs-hub.html",

                icon: "📰",
                type: "current-affairs",

                badge: "badge-new",
                badgeText: "NEW"
            }

        ]

    },


    /* =================================================
       RAILWAY
    ================================================= */

    "railway": {

        name: "Railway Exams",
        shortName: "Railway",
        category: "Railway",
        icon: "🚆",


        pages: [

            {
                title: "Railway Exam Guide",

                description:
                    "Railway exam syllabus and preparation information.",

                url: "/rrb.html",

                icon: "📚",
                type: "guide"
            },


            {
                title: "Railway PYQs",

                description:
                    "Coming Soon",

                url: "#",

                icon: "📝",
                type: "pyq"
            },


            {
                title: "Railway Practice Tests",

                description:
                    "Coming Soon",

                url: "#",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "Railway Current Affairs",

                description:
                    "Daily current affairs useful for railway examinations.",

                url: "/current-affairs/affairs-hub.html",

                icon: "📰",
                type: "current-affairs",

                badge: "badge-new",
                badgeText: "NEW"
            }

        ]

    },


    /* =================================================
       DEFENCE
    ================================================= */

    "defence": {

        name: "Defence Exams",
        shortName: "Defence",
        category: "Defence",
        icon: "🛡️",


        pages: [

            {
                title: "Defence Exam Guide",

                description:
                    "Coming Soon",

                url: "#",

                icon: "📚",
                type: "guide"
            },


            {
                title: "Defence PYQs",

                description:
                    "Coming Soon",

                url: "#",

                icon: "📝",
                type: "pyq"
            },


            {
                title: "Defence Mock Tests",

                description:
                    "Coming Soon",

                url: "#",

                icon: "🎯",
                type: "mock"
            },


            {
                title: "Defence Current Affairs",

                description:
                    "Daily current affairs useful for defence examinations.",

                url: "/current-affairs/affairs-hub.html",

                icon: "📰",
                type: "current-affairs",

                badge: "badge-new",
                badgeText: "NEW"
            }

        ]

    }

};