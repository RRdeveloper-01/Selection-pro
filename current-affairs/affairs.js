
        let caArticles = [];
        let selectedExam = 'all';
        let selectedCat = 'all';
        let selectedMonth = 'all';
        let currentVisibleLimit = 10;

        // Fetch articles from external JSON file
        async function loadArticles() {
            try {
                const response = await fetch("articles.json?v=1.1.4");
                caArticles = await response.json();
                renderCards();
            } catch (error) {
                console.error("Error loading JSON file:", error);
            }
        }

        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                const value = this.getAttribute('data-val');

                this.parentElement.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                if (type === 'exam') selectedExam = value;
                if (type === 'cat') selectedCat = value;
                if (type === 'month') selectedMonth = value;

                currentVisibleLimit = 10;
                renderCards();
            });
        });

        function renderCards() {
            const container = document.getElementById('cards-container');
            container.innerHTML = '';

            const filtered = caArticles.filter(item => {
                const examArr = item.exams.split(' ');
                const catArr = item.cats.split(' ');

                const matchExam = (selectedExam === 'all') || examArr.includes(selectedExam);
                const matchCat = (selectedCat === 'all') || catArr.includes(selectedCat);
                const matchMonth = (selectedMonth === 'all') || (item.month === selectedMonth);

                return matchExam && matchCat && matchMonth;
            });

            const noContentMsg = document.getElementById('no-content-msg');
            const loadMoreWrap = document.getElementById('load-more-wrap');

            if (filtered.length === 0) {
                noContentMsg.style.display = 'block';
                loadMoreWrap.style.display = 'none';
                return;
            }

            noContentMsg.style.display = 'none';

            const visibleArticles = filtered.slice(0, currentVisibleLimit);

            visibleArticles.forEach(item => {
                const cardHTML = `
                    <article class="ca-card">
                        <div class="card-top">
                            <span class="card-date"><i class="fa-regular fa-calendar"></i> ${item.date}</span>
                            <div class="card-tags"><span class="tag">All Exams</span><span class="tag">Daily CA</span></div>
                        </div>
<h2 class="card-title">${item.title || 'Daily Current Affairs - ' + item.date}</h2>
                        <p class="card-desc">Comprehensive daily news coverage, national & international updates, and key exam highlights.</p>
                        <a href="https://selectionpro.in/current-affairs/${item.file}" class="card-link">Explore Article <i class="fa-solid fa-arrow-right"></i></a>
                    </article>
                `;
                container.innerHTML += cardHTML;
            });

            if (filtered.length > currentVisibleLimit) {
                loadMoreWrap.style.display = 'block';
            } else {
                loadMoreWrap.style.display = 'none';
            }
        }

        function showNextBatch() {
            currentVisibleLimit += 10;
            renderCards();
        }

        document.addEventListener('DOMContentLoaded', loadArticles);
    