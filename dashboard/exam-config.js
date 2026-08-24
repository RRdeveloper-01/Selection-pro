/* =====================================================
   SELECTION PRO - EXAM CONFIGURATION
   Central Exam Mapping System
===================================================== */

const EXAM_CONFIG = {

    "ssc-cgl": {
        name: "SSC CGL",
        shortName: "CGL",
        category: "SSC",
        icon: "🎯",

        pages: [
            {
                title: "SSC CGL Exam Guide",
                description: "Syllabus, pattern, eligibility and complete exam information.",
                url: "/examinfo/ssc-cgl.html",
                icon: "📚",
                type: "guide"
            },

            {
                title: "SSC CGL Practice Tests",
                description: "Attempt SSC CGL online mock tests.",
                url: "/ssccgl.html",
                icon: "🎯",
                type: "mock"
            },

            {
                title: "SSC Current Affairs",
                description: "Daily current affairs for SSC examinations.",
                url: "/current-affairs/affairs-hub.html",
                icon: "📰",
                type: "current-affairs",
                badge:"badge-new"
            },

            {
                title: "SSC CGL Preparation Strategy",
                description: "Study strategy, preparation tips and useful resources.",
                url: "/ssccgl.html",
                icon: "🚀",
                type: "strategy"
            }
        ]
    },


    "ssc-chsl": {
        name: "SSC CHSL",
        shortName: "CHSL",
        category: "SSC",
        icon: "📖",

        pages: [
            {
                title: "SSC CHSL Exam Guide",
                description: "Complete SSC CHSL syllabus, pattern and exam information.",
                url: "#",
                icon: "📚",
                type: "guide"
            },

            

            {
                title: "SSC CHSL Practice Tests",
                description: "Practice online mock tests.",
                url: "/sscchsl.html",
                icon: "🎯",
                type: "mock"
            },
            {
                title: "Current Affairs",
                description: "access daily current affairs",
                url: "/current-affairs/affairs-hub.html",
                icon: "🎯",
                type: "News",
                badge:"badge-new"
            }
        ]
    },


    "upsc": {
        name: "UPSC",
        shortName: "UPSC",
        category: "UPSC",
        icon: "🏛️",

        pages: [
            {
                title: "UPSC Exam Guide",
                description: "Complete UPSC exam information and syllabus.",
                url: "/examinfo/upsc.html",
                icon: "📚",
                type: "guide"
            },
{
                title: "Current Affairs",
                description: "access daily current affairs",
                url: "/current-affairs/affairs-hub.html",
                icon: "🎯",
                type: "News",
                badge:"badge-new"
            },
            {
                title: "UPSC Previous Year Questions",
                description: "Practice UPSC previous year questions.",
                url: "#",
                icon: "📝",
                type: "pyq"
            },

            {
                title: "UPSC Mock Tests",
                description: "Practice UPSC mock tests online.",
                url: "#",
                icon: "🎯",
                type: "mock"
            }
        ]
    },


    "neet": {
        name: "NEET",
        shortName: "NEET",
        category: "Medical",
        icon: "🧬",

        pages: [
            {
                title: "NEET Exam Guide",
                description: "NEET syllabus, pattern and preparation information.",
                url: "/neet.html",
                icon: "📚",
                type: "guide"
            },

            {
                title: "NEET PYQs",
                description: "Practice NEET previous year questions.",
                url: "/neet.html",
                icon: "📝",
                type: "pyq"
            },

            {
                title: "NEET Mock Tests",
                description: "Practice NEET mock tests.",
                url: "/mock/neet_mock_test.html",
                icon: "🎯",
                type: "mock"
            },
            {
                title: "NEET Mock Tests hindi",
                description: "Practice NEET mock tests.",
                url: "/mock/neet_mock_test_hindi.html",
                icon: "🎯",
                type: "mock"
            }
        ]
    },


    "jee": {
        name: "JEE Main",
        shortName: "JEE",
        category: "Engineering",
        icon: "⚡",

        pages: [
            {
                title: "JEE Main Exam Guide",
                description: "JEE Main syllabus, pattern and important information.",
                url: "/jeemains.html",
                icon: "📚",
                type: "guide"
            },

            {
                title: "JEE Main PYQs",
                description: "Practice JEE Main previous year questions.",
                url: "/jeemains.html",
                icon: "📝",
                type: "pyq"
            },

            {
                title: "JEE Main Practice Tests",
                description: "Practice JEE Main online mock tests.",
                url: "/jee-mock.html",
                icon: "🎯",
                type: "mock"
            },
            {
                title: "JEE Mock Tests",
                description: "Practice JEE mock tests.",
                url: "/mock/jee_mock_test.html",
                icon: "🎯",
                type: "mock"
            },
            {
                title: "JEE Mock Tests hindi",
                description: "Practice JEE mock tests in hindi.",
                url: "/mock/jee_mains_mock_test_hindi.html",
                icon: "🎯",
                type: "mock"
            }
            
        ]
    },


    "banking": {
        name: "Banking Exams",
        shortName: "Banking",
        category: "Banking",
        icon: "🏦",

        pages: [
            {
                title: "Banking Exam Guide",
                description: "Banking exams syllabus, pattern and preparation.",
                url: "/banking.html",
                icon: "📚",
                type: "guide"
            },

            {
                title: "Banking PYQs",
                description: "Coming Soon",
                url: "#",
                icon: "📝",
                type: "pyq"
            },

            {
                title: "Banking Mock Tests",
                description: "Coming Soon",
                url: "#",
                icon: "🎯",
                type: "mock"
            }
        ]
    },


    "railway": {
        name: "Railway Exams",
        shortName: "Railway",
        category: "Railway",
        icon: "🚆",

        pages: [
            {
                title: "Railway Exam Guide",
                description: "Railway exam syllabus and preparation information.",
                url: "rrb.html",
                icon: "📚",
                type: "guide"
            },

            {
                title: "Railway PYQs",
                description: "Coming Soon",
                url: "#",
                icon: "📝",
                type: "pyq"
            },

            {
                title: "Railway Practice Tests",
                description: "Coming Soon",
                url: "#",
                icon: "🎯",
                type: "mock"
            }
        ]
    },


    "defence": {
        name: "Defence Exams",
        shortName: "Defence",
        category: "Defence",
        icon: "🛡️",

        pages: [
            {
                title: "Defence Exam Guide",
                description: "Coming Soon",
                url: "#",
                icon: "📚",
                type: "guide"
            },

            {
                title: "Defence PYQs",
                description: "Coming Soon",
                url: "#",
                icon: "📝",
                type: "pyq"
            },

            {
                title: "Defence Mock Tests",
                description: "Coming Soon",
                url: "#",
                icon: "🎯",
                type: "mock"
            }
        ]
    }

};