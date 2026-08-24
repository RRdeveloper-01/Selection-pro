/* =====================================================
   MY EXAM UI
===================================================== */

const myExamSection =
document.getElementById("myExamSection");


function renderMyExam(){

    if(!myExamSection) return;

    const user =
    getUserData();

    if(!user.primaryExam){

        myExamSection.innerHTML = `

            <div class="my-exam-empty">

                <h2>🎯 Personalize Your Preparation</h2>

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


    const exam =
    getExam(user.primaryExam);


    if(!exam) return;


    const pages =
    exam.pages;


    myExamSection.innerHTML = `

        <div class="my-exam-header">

            <div>

                <small>
                    YOUR PREPARATION
                </small>

                <h2>
                    ${exam.icon}
                    ${exam.name}
                </h2>

            </div>

            <a href="/dashboard/exam-selector.html">
                Change Exam
            </a>

        </div>


        <div class="my-exam-grid">

            ${pages.map(page => `

                <a
                    href="${page.url}"
                    class="my-exam-card"
                >

                    <span>
                        ${page.icon}
                    </span>

                    <div>

                        <h3>
                            ${page.title}
                        </h3>

                        <p>
                            ${page.description}
                        </p>

                    </div>

                </a>

            `).join("")}

        </div>

    `;
}


renderMyExam();


window.addEventListener(
    "selectionProUserUpdated",
    renderMyExam
);