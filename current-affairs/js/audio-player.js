"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const synth = window.speechSynthesis;
    if (!("speechSynthesis" in window)) {
    alert("Your browser does not support audio playback.");
}

    let unlocked = false;
    let activeMode = "line";
    let sentences = [];
    let sentenceIndex = 0;
    let currentUtterance = null;
    let playbackSession = 0;

    const pageLanguage =
        document.documentElement.lang.toLowerCase();

    const isHindiPage = pageLanguage.startsWith("hi");

    let currentLanguage = isHindiPage ? "hi-IN" : "en-IN";

    const floatButton = document.createElement("button");

    floatButton.type = "button";
    floatButton.className = "audio-float-btn";
    floatButton.textContent = "🔊";
    floatButton.setAttribute("aria-label", "Open audio player");

    document.body.appendChild(floatButton);

    const modal = document.createElement("div");

    modal.className = "audio-modal";

    modal.innerHTML = `
        <section class="audio-panel"
                 role="dialog"
                 aria-modal="true"
                 aria-labelledby="audio-title">

            <button class="audio-close"
                    type="button"
                    aria-label="Close audio player">
                ×
            </button>

            <h2 id="audio-title">Selection Pro Audio</h2>

            <p class="audio-subtitle">
                Listen, learn and revise.
            </p>

            <div id="audio-access-area">

                <form class="audio-form" id="audio-key-form">

                    <label for="audio-key">
                        Enter Access Key
                    </label>

                    <input
                        id="audio-key"
                        type="text"
                        placeholder="Enter your access key"
                        autocomplete="off"
                        required
                    >

                    <button type="submit" class="primary-btn">
                        Unlock Audio
                    </button>

                </form>

                <button
                    type="button"
                    class="audio-secondary-btn"
                    id="get-audio-key">
                    Get Access Key on WhatsApp
                </button>

                <p class="audio-note">
                    Audio access requires a valid key.
                </p>

            </div>

            <div id="audio-player-area" hidden>

                <p id="audio-language-label">
                    Audio language:
                    ${isHindiPage ? "हिन्दी" : "Indian English"}
                </p>

                <button
                    type="button"
                    class="audio-mode-btn"
                    data-mode="line">

                    <strong>Highlight Line Audio</strong>

                    <span>
                        Listen one line at a time.
                    </span>
                </button>

                <button
                    type="button"
                    class="audio-mode-btn"
                    data-mode="full">

                    <strong>Full Details Audio</strong>

                    <span>
                        Listen to the complete news content.
                    </span>
                </button>

                <div class="audio-controls">

                    <button id="audio-play" type="button">
                        ▶ Play
                    </button>

                    <button id="audio-pause" type="button">
                        ⏸ Pause
                    </button>

                    <button id="audio-stop" type="button">
                        ■ Stop
                    </button>

                </div>

                <p
                    id="audio-status"
                    class="audio-status"
                    aria-live="polite">
                    Select an audio mode to begin.
                </p>

                <p class="audio-note">
                    Available voices depend on your device and browser.
                </p>

            </div>

        </section>
    `;

    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".audio-close");
    const keyForm = modal.querySelector("#audio-key-form");
    const keyInput = modal.querySelector("#audio-key");
    const accessArea = modal.querySelector("#audio-access-area");
    const playerArea = modal.querySelector("#audio-player-area");
    const status = modal.querySelector("#audio-status");

    const playButton = modal.querySelector("#audio-play");
    const pauseButton = modal.querySelector("#audio-pause");
    const stopButton = modal.querySelector("#audio-stop");

    function setStatus(message) {
        status.textContent = message;
    }

    function openModal() {
        modal.classList.add("is-open");
    }

    function closeModal() {
        modal.classList.remove("is-open");
    }

    /* Voice selection */

    function chooseVoice(language) {
    const voices = window.speechSynthesis.getVoices();

    if (!voices.length) {
        return null;
    }

    const lang = language.toLowerCase();

    // Prefer Indian Hindi voice on Hindi pages
    if (lang.startsWith("hi")) {
        return (
            voices.find(v => v.lang.toLowerCase() === "hi-in") ||
            voices.find(v => v.lang.toLowerCase().startsWith("hi-")) ||
            voices.find(v => v.lang.toLowerCase() === "hi") ||
            null
        );
    }

    // Prefer Indian English voice on English pages
    return (
        voices.find(v => v.lang.toLowerCase() === "en-in") ||
        voices.find(v => v.lang.toLowerCase().startsWith("en-")) ||
        voices.find(v => v.lang.toLowerCase() === "en") ||
        null
    );
}
    /* Read only the page's own content */

    function getReadableElements() {

        const selectors = [
            ".news-card .news-title",
            ".news-card .news-content h3",
            ".news-card .news-content p",
            ".news-card .news-content li",
            ".news-card .one-liner",
            ".news-card .static-gk h3",
            ".news-card .static-gk p",
            ".news-card .exam-fact",
            ".news-card .quick-revision li",
            ".quiz-card .quiz-question",
            ".quiz-card .question-text",
            ".quiz-card .quiz-options li"
        ];

        return [
            ...document.querySelectorAll(selectors.join(","))
        ].filter(element => {

            if (!element.textContent.trim()) return false;

            // Do not read content hidden from the user.
            if (element.closest("[hidden]")) return false;

            return true;
        });
    }

    function buildSentences() {

        return getReadableElements().map(element => ({
            element,
            text: element.innerText.trim()
        }));
    }

    function clearHighlights() {

        document.querySelectorAll(".audio-highlight")
            .forEach(element => {
                element.classList.remove("audio-highlight");
            });
    }

    function stopAudio(showMessage = true) {

        playbackSession++;

        if (synth) {
            synth.cancel();
        }

        currentUtterance = null;
        sentenceIndex = 0;

        clearHighlights();

        if (showMessage) {
            setStatus("Audio stopped.");
        }
    }

    function speakNext(session) {

    if (!unlocked || !synth) return;
    if (session !== playbackSession) return;

    if (sentenceIndex >= sentences.length) {
        currentUtterance = null;
        clearHighlights();
        setStatus("Audio completed.");
        return;
    }

    const item = sentences[sentenceIndex];

    if (!item.text || !item.text.trim()) {
        sentenceIndex++;
        speakNext(session);
        return;
    }

    clearHighlights();
    item.element.classList.add("audio-highlight");

    item.element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    const utterance = new SpeechSynthesisUtterance(item.text);

    utterance.lang = currentLanguage;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voice = chooseVoice(currentLanguage);

    if (voice) {
        utterance.voice = voice;
    }

    currentUtterance = utterance;

    utterance.onstart = () => {
        if (session !== playbackSession) return;

        setStatus(
            `Playing ${sentenceIndex + 1} of ${sentences.length}`
        );

        console.log(
            "Speech started:",
            utterance.lang,
            voice ? voice.name : "Default voice",
            item.text
        );
    };

    utterance.onend = () => {
        if (session !== playbackSession) return;
        if (currentUtterance !== utterance) return;

        currentUtterance = null;
        sentenceIndex++;

        if (activeMode === "line") {
            setStatus("Line completed. Press Play for the next line.");
        } else {
            speakNext(session);
        }
    };

    utterance.onerror = (event) => {
        if (session !== playbackSession) return;
        if (currentUtterance !== utterance) return;

        currentUtterance = null;

        console.error("Speech synthesis error:", event.error);

        setStatus(
            "Audio error: " + event.error +
            ". Check your phone's text-to-speech settings."
        );
    };

    // Ensure any previous playback is stopped.
    synth.cancel();

    // Keep the same session and start the new utterance.
    synth.speak(utterance);

    console.log("Speech queued:", item.text);
}
/* Modal events */

    floatButton.addEventListener("click", openModal);

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }
    });

    /* Audio modes */

    modal.querySelectorAll("[data-mode]").forEach(button => {

        button.addEventListener("click", () => {

            if (!unlocked) return;

            stopAudio(false);

            activeMode = button.dataset.mode;
            sentences = buildSentences();

            setStatus(
                activeMode === "line"
                    ? "Highlight Line Audio selected. Press Play."
                    : "Full Details Audio selected. Press Play."
            );
        });
    });

    /* Play */

    playButton.addEventListener("click", () => {

        if (!unlocked || !synth) {

            setStatus(
                "Audio is unavailable. Check browser support and access."
            );

            return;
        }

        if (synth.paused) {

            synth.resume();

            setStatus("Audio resumed.");

            return;
        }

        if (currentUtterance) return;

        if (!sentences.length) {
            sentences = buildSentences();
        }

        if (!sentences.length) {

            setStatus("No readable news content was found.");

            return;
        }

        if (sentenceIndex >= sentences.length) {
            sentenceIndex = 0;
        }

        speakNext(playbackSession);
    });

    /* Pause */

    pauseButton.addEventListener("click", () => {

        if (synth && synth.speaking && !synth.paused) {

            synth.pause();

            setStatus("Audio paused.");
        }
    });

    /* Stop */

    stopButton.addEventListener("click", () => {
        stopAudio(true);
    });

    /* Access key */

    keyForm.addEventListener("submit", async event => {

        event.preventDefault();

        const key = keyInput.value.trim();

        if (!key) {

            setStatus("Please enter an access key.");

            return;
        }

        setStatus("Checking access key...");

        const validator = window.SelectionProAudioAccess;

        if (
            !validator ||
            typeof validator.validateKey !== "function"
        ) {

            setStatus("Access verification is unavailable.");

            return;
        }

        try {

            const result = await validator.validateKey(key);

            if (!result || !result.valid) {

                setStatus(
                    result?.message ||
                    "Invalid access key. Please check and try again."
                );

                return;
            }

            unlocked = true;

            accessArea.hidden = true;
            playerArea.hidden = false;

            sentences = buildSentences();

            setStatus(
                "Access granted. Choose an audio mode and press Play."
            );

        } catch (error) {

            console.error("Audio access error:", error);

            setStatus(
                "Could not verify the access key. Please try again."
            );
        }
    });

    /* WhatsApp */

    modal.querySelector("#get-audio-key")
        .addEventListener("click", () => {

            const whatsappNumber = "918957940617";

            if (whatsappNumber.includes("X")) {

                setStatus(
                    "WhatsApp contact is not configured yet."
                );

                return;
            }

            const message = encodeURIComponent(
                "Hello Selection Pro! I want to get the Current Affairs Audio Access Key."
            );

            window.open(
                `https://wa.me/${whatsappNumber}?text=${message}`,
                "_blank",
                "noopener,noreferrer"
            );
        });

    /* Load available device voices */

    if (synth) {
        synth.getVoices();

        if ("onvoiceschanged" in synth) {
            synth.onvoiceschanged = () => {
                synth.getVoices();
            };
        }
    } else {
        floatButton.title =
            "Audio is not supported in this browser.";
    }

});