/* =====================================================
   SELECTION PRO
   MY EXAM / PREPARATION DASHBOARD UI
===================================================== */

const myExamSection =
    document.getElementById("myExamSection");


function renderMyExam(){

    if(!myExamSection) return;


    /* =========================================
       USER DATA
    ========================================= */

    const user = getUserData();


    /* =========================================
       NO EXAM SELECTED
    ========================================= */

    if(!user.primaryExam){

        myExamSection.innerHTML = `

            <div class="my-exam-empty">

                <h2>
                    🎯 Personalize Your Preparation
                </h2>

                <p>
                    Select your exam to see
                    relevant study resources.
                </p>

                <a href="/dashboard/exam-selector.html">
                    Choose Your Exam
                </a>

            </div>

        `;

        return;
    }


    /* =========================================
       GET EXAM
    ========================================= */

    const exam =
        getExam(user.primaryExam);


    if(!exam) return;


    /* =========================================
       SAFE OPTIONAL DATA
    ========================================= */

    const pages =
        exam.pages || [];

    const extraResources =
        exam.extraResources || [];

    const challenges =
        exam.challenges || [];

    const quickActions =
        exam.quickActions || [];

    const stats =
        exam.stats || null;


    /* =========================================
       CORE RESOURCE CARDS
    ========================================= */

    const pageCards = pages.map(page => {

        return `

            <a
                href="${page.url || "#"}"
                class="my-exam-card"
            >

                <div class="my-exam-card-icon">

                    ${page.icon || "📚"}

                </div>


                <div class="my-exam-card-content">

                    <div class="my-exam-card-title-row">

                        <h3>
                            ${page.title || "Resource"}
                        </h3>

                        ${
                            page.badge
                            ?
                            `
                            <span class="exam-card-badge">

                                ${page.badgeText || "NEW"}

                            </span>
                            `
                            :
                            ""
                        }

                    </div>


                    <p>
                        ${page.description || ""}
                    </p>

                </div>


                <span class="my-exam-card-arrow">
                    →
                </span>

            </a>

        `;

    }).join("");


    /* =========================================
       EXTRA RESOURCES
       ONLY SHOW IF OBJECT HAS DATA
    ========================================= */

    const extraResourceHTML =
        extraResources.length
        ?
        `

        <section class="exam-extra-section">

            <div class="exam-section-heading">

                <div>

                    <span class="exam-section-kicker">
                        EXPLORE MORE
                    </span>

                    <h3>
                        Extra Resources
                    </h3>

                    <p>
                        More useful resources for your preparation.
                    </p>

                </div>

            </div>


            <div class="exam-extra-grid">

                ${
                    extraResources.map(resource => `

                        <a
                            href="${resource.url || "#"}"
                            class="exam-extra-card"
                        >

                            <div class="extra-card-icon">

                                ${resource.icon || "📌"}

                            </div>


                            <div class="extra-card-content">

                                <div class="extra-card-title-row">

                                    <h4>
                                        ${resource.title || "Resource"}
                                    </h4>


                                    ${
                                        resource.badge
                                        ?
                                        `
                                        <span class="extra-badge">

                                            ${resource.badgeText || "NEW"}

                                        </span>
                                        `
                                        :
                                        ""
                                    }

                                </div>


                                <p>
                                    ${resource.description || ""}
                                </p>

                            </div>


                            <span class="extra-card-arrow">
                                →
                            </span>

                        </a>

                    `).join("")
                }

            </div>

        </section>

        `
        :
        "";


    /* =========================================
       CHALLENGES
       ONLY SHOW IF DATA EXISTS
    ========================================= */

    const challengeHTML =
        challenges.length
        ?
        `

        <section class="exam-challenge-section">

            <div class="exam-section-heading">

                <div>

                    <span class="exam-section-kicker">
                        STAY CONSISTENT
                    </span>

                    <h3>
                        Your Challenges
                    </h3>

                    <p>
                        Build a daily study routine and keep progressing.
                    </p>

                </div>

            </div>


            <div class="exam-challenge-grid">

                ${
                    challenges.map(challenge => `

                        <a
                            href="${challenge.url || "#"}"
                            class="exam-challenge-card"
                        >

                            <div class="challenge-top">

                                <div class="challenge-icon">

                                    ${challenge.icon || "🚀"}

                                </div>


                                ${
                                    challenge.badge
                                    ?
                                    `
                                    <span class="challenge-badge">

                                        ${challenge.badge}

                                    </span>
                                    `
                                    :
                                    ""
                                }

                            </div>


                            <div class="challenge-content">

                                <h4>
                                    ${challenge.title || "Study Challenge"}
                                </h4>


                                <p>
                                    ${challenge.description || ""}
                                </p>


                                ${
                                    challenge.duration
                                    ?
                                    `
                                    <div class="challenge-meta">

                                        📅
                                        ${challenge.duration}

                                    </div>
                                    `
                                    :
                                    ""
                                }


                                ${
                                    challenge.progress !== undefined
                                    ?
                                    `

                                    <div class="challenge-progress-wrap">

                                        <div class="challenge-progress-info">

                                            <span>
                                                Progress
                                            </span>

                                            <strong>
                                                ${challenge.progress}%
                                            </strong>

                                        </div>


                                        <div class="challenge-progress">

                                            <span
                                                style="
                                                    width:${Math.min(
                                                        Math.max(
                                                            challenge.progress,
                                                            0
                                                        ),
                                                        100
                                                    )}%;
                                                "
                                            ></span>

                                        </div>

                                    </div>

                                    `
                                    :
                                    ""
                                }

                            </div>


                            <div class="challenge-arrow">
                                →
                            </div>

                        </a>

                    `).join("")
                }

            </div>

        </section>

        `
        :
        "";


    /* =========================================
       QUICK ACTIONS
    ========================================= */

    const quickActionHTML =
        quickActions.length
        ?
        `

        <section class="exam-quick-section">

            <div class="exam-section-heading">

                <div>

                    <span class="exam-section-kicker">
                        QUICK ACCESS
                    </span>

                    <h3>
                        Quick Actions
                    </h3>

                </div>

            </div>


            <div class="exam-quick-grid">

                ${
                    quickActions.map(action => `

                        <a
                            href="${action.url || "#"}"
                            class="exam-quick-card"
                        >

                            <span class="quick-icon">

                                ${action.icon || "⚡"}

                            </span>


                            <span class="quick-text">

                                ${action.title || "Open"}

                            </span>


                            <span class="quick-arrow">

                                →

                            </span>

                        </a>

                    `).join("")
                }

            </div>

        </section>

        `
        :
        "";


    /* =========================================
       STATS
    ========================================= */

    const statsHTML =
        stats
        ?
        `

        <section class="exam-stats-card">

            <div class="stats-header">

                <span class="exam-section-kicker">
                    YOUR PROGRESS
                </span>

                <h3>
                    Preparation Overview
                </h3>

            </div>


            <div class="stats-grid">

                ${
                    stats.tests
                    ?
                    `
                    <div class="stat-item">

                        <span class="stat-icon">
                            🎯
                        </span>

                        <strong>
                            ${stats.tests}
                        </strong>

                        <small>
                            Tests
                        </small>

                    </div>
                    `
                    :
                    ""
                }


                ${
                    stats.questions
                    ?
                    `
                    <div class="stat-item">

                        <span class="stat-icon">
                            📝
                        </span>

                        <strong>
                            ${stats.questions}
                        </strong>

                        <small>
                            Questions
                        </small>

                    </div>
                    `
                    :
                    ""
                }


                ${
                    stats.streak
                    ?
                    `
                    <div class="stat-item">

                        <span class="stat-icon">
                            🔥
                        </span>

                        <strong>
                            ${stats.streak}
                        </strong>

                        <small>
                            Day Streak
                        </small>

                    </div>
                    `
                    :
                    ""
                }


                ${
                    stats.completed
                    ?
                    `
                    <div class="stat-item">

                        <span class="stat-icon">
                            ✅
                        </span>

                        <strong>
                            ${stats.completed}%
                        </strong>

                        <small>
                            Completed
                        </small>

                    </div>
                    `
                    :
                    ""
                }

            </div>

        </section>

        `
        :
        "";


    /* =========================================
       FINAL DASHBOARD
    ========================================= */

    myExamSection.innerHTML = `

        <!-- =================================
             EXAM HEADER
        ================================== -->

        <div class="my-exam-header">

            <div class="exam-heading-left">

                <span class="exam-heading-label">
                    YOUR PREPARATION
                </span>


                <h2>

                    <span class="exam-main-icon">
                        ${exam.icon || "🎯"}
                    </span>

                    ${exam.name}

                </h2>

            </div>


            <a
                href="/dashboard/exam-selector.html"
                class="change-exam-btn"
            >

                Change Exam

                <span>
                    →
                </span>

            </a>

        </div>


        <!-- =================================
             CORE RESOURCES
        ================================== -->

        <div class="my-exam-grid">

            ${pageCards}

        </div>


        <!-- =================================
             OPTIONAL SECTIONS
        ================================== -->

        ${statsHTML}

        ${challengeHTML}

        ${extraResourceHTML}

        ${quickActionHTML}

    `;


}


/* =========================================
   INITIAL RENDER
========================================= */

renderMyExam();


/* =========================================
   UPDATE WHEN USER / EXAM CHANGES
========================================= */

window.addEventListener(
    "selectionProUserUpdated",
    renderMyExam
);