import Link from 'next/link';
import { SITE } from '@/lib/site';
import { exams, totalQuestionCount } from '@/lib/content';
import { CA_TOPICS } from '@/data/ca-topics';

export default function Footer() {
  const total = totalQuestionCount();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <h2 style={{ fontSize: '1.15rem' }}>About Selection Pro</h2>
          <p>
            Selection Pro is an independent exam-preparation platform for Indian students. It offers free full-length practice tests with step-by-step
            explanations, chapter-wise mock tests for JEE, NEET and CUET, guidance on using previous year papers, a daily quiz, a mistake notebook that brings wrong
            answers back for revision and a syllabus tracker. Over {Math.floor(total / 100) * 100}+ practice questions are available today and the library keeps growing.
          </p>
          <p>
            Our content is written and reviewed for learning, not for copying. If you find an error, please <Link href="/contact">tell us</Link>
            {' '}and we will correct it. Read how we work in our <Link href="/editorial-policy">editorial policy</Link>.
          </p>
          <div className="social">
            <a href={SITE.youtube} target="_blank" rel="noopener noreferrer">▶ YouTube</a>
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer">✈ Telegram</a>
            <Link href="/support">❤ Support us</Link>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h3>Exams</h3>
            <ul>
              {exams.slice(0, 8).map((e) => (<li key={e.slug}><Link href={`/exam/${e.slug}`}>{e.name}</Link></li>))}
              <li><Link href="/exam">All exams</Link></li>
            </ul>
          </div>
          <div>
            <h3>Practice</h3>
            <ul>
              <li><Link href="/daily-quiz">Daily quiz</Link></li>
              <li><Link href="/mcq-trap">MCQ trap of the day</Link></li>
              <li><Link href="/mock-tests">Chapter-wise mock tests</Link></li>
              <li><Link href="/mock-tests/hindi">Hindi medium mock tests</Link></li>
              <li><Link href="/revision-series/jee-main">JEE daily revision</Link></li>
              <li><Link href="/mistake-notebook">Mistake notebook</Link></li>
              <li><Link href="/syllabus-tracker">Syllabus tracker</Link></li>
            </ul>
          </div>
          <div>
            <h3>Current affairs</h3>
            <ul>
              <li><Link href="/current-affairs/daily">Daily current affairs</Link></li>
              {CA_TOPICS.slice(0, 6).map((t) => (<li key={t.slug}><Link href={`/current-affairs/${t.slug}`}>{t.title}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3>Learn</h3>
            <ul>
              <li><Link href="/exam-guides">Exam guides</Link></li>
              <li><Link href="/guides">Preparation guides</Link></li>
              <li><Link href="/blog">Study blog</Link></li>
              <li><Link href="/scholarship">Scholarships</Link></li>
              <li><Link href="/resources">Official resources</Link></li>
              <li><Link href="/tools/notes-maker">Notes maker</Link></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/editorial-policy">Editorial policy</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms and conditions</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {SITE.founded} {SITE.name}. All rights reserved.</span>
          <span>
            Selection Pro is an independent platform and is not affiliated with any government body, exam-conducting authority or university.
            Exam names and logos belong to their respective owners. Always confirm dates, eligibility and patterns on the official notification.
          </span>
        </div>
      </div>
    </footer>
  );
}
