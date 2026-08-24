/* =====================================================
   SELECTION PRO - PERSONALIZATION ENGINE
===================================================== */

const STORAGE_KEY = "selectionProUser";

/* ---------------------------------------------
   USER DATA
--------------------------------------------- */

function getUserData() {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return {
            exams: [],
            primaryExam: null
        };
    }

    try {
        return JSON.parse(saved);
    } catch (error) {

        console.error("User data error:", error);

        return {
            exams: [],
            primaryExam: null
        };
    }
}


/* ---------------------------------------------
   SAVE USER DATA
--------------------------------------------- */

function saveUserData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    window.dispatchEvent(
        new CustomEvent("selectionProUserUpdated")
    );
}


/* ---------------------------------------------
   ADD EXAM
--------------------------------------------- */

function addExam(examId) {

    if (!EXAM_CONFIG[examId]) {
        console.warn("Unknown exam:", examId);
        return;
    }

    const user = getUserData();

    if (!user.exams.includes(examId)) {

        user.exams.push(examId);
    }

    if (!user.primaryExam) {

        user.primaryExam = examId;
    }

    saveUserData(user);
}


/* ---------------------------------------------
   REMOVE EXAM
--------------------------------------------- */

function removeExam(examId) {

    const user = getUserData();

    user.exams = user.exams.filter(
        id => id !== examId
    );

    if (user.primaryExam === examId) {

        user.primaryExam =
            user.exams.length > 0
                ? user.exams[0]
                : null;
    }

    saveUserData(user);
}


/* ---------------------------------------------
   SET PRIMARY EXAM
--------------------------------------------- */

function setPrimaryExam(examId) {

    const user = getUserData();

    if (!user.exams.includes(examId)) {

        user.exams.push(examId);
    }

    user.primaryExam = examId;

    saveUserData(user);
}


/* ---------------------------------------------
   GET PRIMARY EXAM
--------------------------------------------- */

function getPrimaryExam() {

    const user = getUserData();

    return user.primaryExam;
}


/* ---------------------------------------------
   GET EXAM DETAILS
--------------------------------------------- */

function getExam(examId) {

    return EXAM_CONFIG[examId] || null;
}


/* ---------------------------------------------
   GET USER EXAMS
--------------------------------------------- */

function getUserExams() {

    const user = getUserData();

    return user.exams
        .map(id => EXAM_CONFIG[id])
        .filter(Boolean);
}


/* ---------------------------------------------
   CHECK FIRST VISIT
--------------------------------------------- */

function needsExamSelection() {

    const user = getUserData();

    return user.exams.length === 0;
}


/* ---------------------------------------------
   OPTIONAL REDIRECT
--------------------------------------------- */

function requireExamSelection() {

    if (needsExamSelection()) {

        window.location.href =
            "/exam-selector.html";
    }
}