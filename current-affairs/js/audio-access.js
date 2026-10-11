"use strict";

/*
 * Selection Pro Audio Access
 *
 * DEMO VERSION ONLY
 *
 * Keys stored in JavaScript are visible to visitors.
 * Expiry is checked by the visitor's browser and
 * is not secure against code modification.
 */

(() => {

    const ACCESS_KEYS = {
        "SP-DEMO-001": {
            expires: "2026-12-31T23:59:59+05:30"
        },

        "SP-DEMO-002": {
            expires: "2026-12-31T23:59:59+05:30"
        },

        "SP-DEMO-003": {
            expires: "2027-01-31T23:59:59+05:30"
        }
    };

    function validateKey(key) {

        if (typeof key !== "string" || !key.trim()) {
            return {
                valid: false,
                message: "Please enter an access key."
            };
        }

        const normalizedKey = key.trim().toUpperCase();
        const access = ACCESS_KEYS[normalizedKey];

        if (!access) {
            return {
                valid: false,
                message: "Invalid access key."
            };
        }

        const expiryTime = Date.parse(access.expires);

        if (!Number.isFinite(expiryTime)) {
            return {
                valid: false,
                message: "Access key configuration error."
            };
        }

        if (Date.now() > expiryTime) {
            return {
                valid: false,
                message: "This access key has expired."
            };
        }

        return {
            valid: true,
            message: "Access granted.",
            expires: access.expires
        };
    }

    window.SelectionProAudioAccess = {
        validateKey
    };

})();