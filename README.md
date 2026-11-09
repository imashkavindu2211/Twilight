# Twilight — Couples' Shared Diary Web Application 🌙

> *"Twilight is the quietest hour of the day, when the sky catches breath and two souls share what cannot be rushed."*

A full-stack web application designed for couples to share daily private reflections with intimate rituals, blind entries, and explicit consent request-to-read workflows.

---

## 🔒 Crucial Security & Invariance Rules

1. **Two-Party Access Barrier (Waiting Room)**:
   - When a user starts a "New Journey", they receive a 6-character code and are placed into the **Waiting Room**.
   - The user cannot enter the main diary platform until their partner enters the code in "Join Journey".
   - **Only once the code is entered and both partners are connected are BOTH granted access to the site.**
2. **Absolute Immutability of Diary Entries**:
   - Once an entry for a specific day has been saved, it is **strictly permanent and impossible to edit or delete**.
   - Enforced both at the database level (Postgres immutability trigger & lack of `UPDATE`/`DELETE` RLS policies) and at the client level (read-only sealed view, disabled inputs, and validation checks).
3. **Privacy First (Blind Entries)**:
   - Entries remain completely invisible to the partner until an explicit access request is created and accepted.

---

## 🚀 Live Flow Walkthrough

1. **Register User 1**:
   - Enter your name and unique ID number (e.g. `101`).
2. **Start a New Journey**:
   - Click "Start New Journey" to generate a 6-character code (e.g. `TWIL7X`).
   - You are immediately moved to the **Waiting Room**. The platform remains locked while waiting for your partner.
3. **Register User 2 (Partner)**:
   - In another tab or browser window, partner registers (e.g. name + ID `102`).
   - Selects "Join a Journey" and enters the code `TWIL7X`.
4. **Sanctuary Unlocked**:
   - Both users are granted instant access to the daily dashboard.
5. **Daily Ritual & Sealing**:
   - Write your reflection and click **"Seal Tonight's Entry"**.
   - Once sealed, it becomes an immutable permanent entry.
   - The circular task ring updates (0% -> 50% -> 100%).
   - Request to read partner's blind entry, and accept requests from the notification bell.
