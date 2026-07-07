# NUMBERS ARMY — Complete Launch Guide (Web + Google Play)

Written for a total beginner. Follow top to bottom. Your email on record: viralvideoshai@gmail.com.
Assumption: you are in **India** (adjust country-specific notes if not).

Legend: ✅ MY TASK = only you can do it (accounts, payments, identity). 🤖 CLAUDE = I do it in code when you say go.

---

## PHASE 1 — AUDIT (done)

Current state of the game:
- ✅ Single 100KB HTML file, zero downloaded assets (audio is synthesized) → loads in ~1s even on 3G. Only external dependency: Three.js from unpkg CDN (~600KB, cached). Before Play launch I will bundle Three.js INTO the file so the game works fully offline (required for a good TWA).
- ✅ Instanced crowd rendering (1 draw call for up to 420 units), auto low-end mode (reduces crowd/particles/resolution if FPS < 45), pixel-ratio cap → battery-friendly.
- ✅ Saves are checksummed (casual localStorage editing resets to defaults).
- ✅ Analytics events already fire (`run_start`, `run_end`, `rewarded_ad_shown`, `iap_purchase`) as console stubs — one function swap wires them to Firebase.
- ⚠️ Known limitations to fix before production: bundle Three.js locally; add a consent dialog for EEA ads (AdMob UMP does this for us); real ad/IAP SDKs are stubs by design.

## PHASE 2 — MONETIZATION (design ready, stubs in code)

| Feature | Status | How it earns |
|---|---|---|
| Interstitial ads | Stubbed (`showInterstitial`) | Paid per ~1000 views (eCPM ~$1–3 in India, $8–15 US). Shown every 3rd run only. |
| Rewarded ads | Stubbed (`showRewardedAd`) | Highest eCPM ($5–10 IN, $15–40 US). Players CHOOSE to watch → revive, 2× coins, luck boost. This will be your #1 earner. |
| Coins | Live | Not sold yet — the sink for upgrades/castle keeps players grinding (retention → more ad views). |
| Skins/characters | Live (4 colors) | Cosmetic IAP later; your generated skins.png shows the roadmap (ninja/wizard/knight...). |
| Remove interstitials | Stubbed ($2.99) | One-time IAP; converts annoyed players into payers. |
| Starter bundle | Stubbed ($1.99) | Classic first-purchase offer; cheap impulse buy. |
| Daily rewards / challenges | Live | Retention, not direct revenue — daily habit = daily ad impressions. |
| Battle pass / gems / premium | Not built | Skip for v1. Add battle pass only after you see 10k+ installs; gems (2nd currency) only with a server. |

Rule of thumb for hypercasual: **70–85% of revenue = rewarded + interstitial ads.** IAP is a bonus.

## PHASE 3 — EVERY ACCOUNT YOU NEED

### ✅ MY TASK — create these accounts (in this order)

1. **Google Play Console** — play.google.com/console → "Create developer account" (Personal).
   Why: publish Android apps. Cost: **$25 one-time** (card needed). Verification: government ID (Aadhaar/passport/DL) + sometimes a utility bill; D-U-N-S NOT needed for personal accounts. Time: 30 min signup + up to 1–2 weeks verification (usually 1–3 days). Mistakes to avoid: use a serious Gmail you'll keep forever (NOT a throwaway); your developer name is public; personal accounts created after Nov 2023 must run a 14-day/20-tester closed test before production — plan for this.
2. **Google AdMob** — admob.google.com → sign in with same Gmail.
   Why: the ad network that pays you. Cost: free. Verification: address PIN postcard (they mail a code when you reach $10 earned) + PAN for India tax info; payments via bank transfer when balance ≥ $100. Setup: create app → create 2 ad units: "Rewarded" and "Interstitial" → note the 3 IDs (App ID + 2 unit IDs) and send them to me. Mistakes: NEVER click your own ads / spam-test real ads (account ban) — use Google's test IDs during development (I handle that).
3. **Firebase** — console.firebase.google.com → "Add project" → name: numbers-army → enable Google Analytics when asked.
   Why: free analytics + crash reporting + push notifications later. Cost: free (Spark plan). Setup: Project settings → "Add app" → Web → copy the config snippet (apiKey, projectId...) and send it to me.
4. **GitHub** — github.com → free account.
   Why: stores the code; Vercel deploys from it automatically. Cost: free.
5. **Vercel** — vercel.com → "Continue with GitHub".
   Why: free web hosting with SSL + CDN; every git push auto-deploys. Cost: free (Hobby). Alternative: Cloudflare Pages (also fine; pick Vercel for simplicity).
6. **Domain registrar** (optional but recommended) — Cloudflare Registrar or Namecheap or GoDaddy India.
   Why: numbersarmy.com looks professional in the store listing + hosts your privacy policy. Cost: ~₹800–1,500/year (~$10–18). Without it, your free `numbers-army.vercel.app` URL works fine for launch — you can add the domain later.
7. **Payments (web IAP) — SKIP for v1.** On Android, Google Play Billing handles all purchases (no Stripe needed; Stripe payouts also need extra setup in India). The web version earns via ads only at first. Revisit Razorpay/Stripe only if the web version gets big.
8. Later (not blocking launch): Cloudflare (free, if you buy a domain, use their DNS), an email alias like support@yourdomain (Cloudflare Email Routing, free), UptimeRobot (free monitoring).

**Total cash needed to launch: $25 Play Console + optional ~₹1,000 domain. Everything else is free.**

## PHASE 4 — MASTER LAUNCH CHECKLIST

**Code (🤖 CLAUDE, on your go):**
☐ Bundle Three.js into the file (offline-capable) ☐ PWA manifest + service worker ☐ Wire Firebase Analytics (needs your config) ☐ Wire AdMob via UMP consent + test IDs (needs your 3 IDs) ☐ Wire Play Billing (in the TWA wrapper) ☐ Generate TWA Android project with Bubblewrap ☐ Build signed .aab ☐ Store screenshots from gameplay ☐ Feature graphic (1024×500) from your hero.png

**Owner (✅ MY TASK):**
☐ Save 4 images into assets/ ☐ Create Play Console ($25) ☐ Identity verification ☐ Create AdMob + 2 ad units → send IDs ☐ Create Firebase → send web config ☐ Create GitHub + Vercel ☐ (Optional) buy domain ☐ Put your legal name into the 5 legal pages (I can do it if you tell me the name) ☐ Recruit 20 testers (friends/family/WhatsApp group) for the mandatory 14-day closed test ☐ Fill Play Store listing texts (I draft them, you paste) ☐ Set prices for the 2 IAPs ☐ Data-safety form (I give you the exact answers) ☐ Content rating questionnaire (answers: no violence against realistic humans, no gambling with real money — the wager gate is virtual currency only, casual cartoon violence → typically rated Everyone/PEGI 3... answer honestly, I provide the exact answers) ☐ Internal test → Closed test (14 days) → Production rollout

## PHASE 5 — LEGAL PAGES (done ✅)

Created in `legal/`: privacy-policy.html, terms.html, refund-policy.html, cookie-policy.html, disclaimer.html.
They deploy with the site → your Play Console privacy-policy URL will be `https://YOUR-SITE/legal/privacy-policy.html`.
✅ MY TASK: tell me your legal name (or company name) and city/state so I can replace the [PLACEHOLDERS].

## PHASE 6 — DEPLOY THE WEB VERSION (do this first — it's 20 minutes)

1. ✅ Create GitHub + Vercel accounts (Phase 3, items 4–5).
2. 🤖 I initialize a git repo in `numbers-army/`, commit, and push (you'll authorize `gh` login once).
3. ✅ In Vercel: "Add New… → Project" → pick the `numbers-army` repo → Framework preset: "Other" → no build command → Deploy. Done: you get `https://numbers-army-xxxx.vercel.app` with SSL.
4. Every future improvement: I push → Vercel redeploys automatically in ~30s.
5. (Optional) Add your custom domain in Vercel → Settings → Domains → follow the 2 DNS records it shows.

## PHASE 7 — GOOGLE PLAY, SCREEN BY SCREEN

We ship the web game as a **TWA (Trusted Web Activity)** — a real Android app that renders your hosted game in fullscreen Chrome. Industry-standard for HTML5 games; no rewrite.

1. 🤖 I run **Bubblewrap** (Google's official tool) against your deployed URL → generates the Android project + signed `.aab` + the `assetlinks.json` file that must be hosted at `https://YOUR-SITE/.well-known/assetlinks.json` (I add it to the repo).
2. ✅ Play Console → "Create app": App name **Numbers Army**, default language English (India also fine), App/Game → **Game**, Free/Paid → **Free** (cannot change later!), declarations → accept.
3. ✅ Complete "Set up your app" checklist (Console shows it as a task list):
   - **Privacy policy**: paste your URL from Phase 6.
   - **App access**: "All functionality available without special access".
   - **Ads**: YES, contains ads.
   - **Content rating**: fill questionnaire (I supply exact answers when you're there).
   - **Target audience**: 13+ (do NOT tick "appeals to children" — avoids Families policy burden).
   - **Data safety**: with AdMob+Firebase → declare "Device or other IDs — collected, ads/analytics, not shared with user choice"; I give you the full grid.
4. ✅ "Test and release" → **Internal testing** → upload the `.aab` I built → add your own email as tester → install from the link → play it on your phone.
5. ✅ **Closed testing**: create track, add 20 testers, run **14 days** (mandatory for new personal accounts). Keep testers playing a bit every few days.
6. ✅ Apply for production → **Production release** → rollout 100%.
7. Store listing (I draft all copy): short description (80 chars), full description (4000), screenshots (min 2, I generate 4–8 from gameplay), app icon 512×512 (from your icon.png), feature graphic 1024×500 (from hero.png).
8. **Review times**: internal = minutes; first production review = usually 1–7 days. Rejections are almost always: broken privacy-policy URL, wrong data-safety form, or crashes on open — we'll have all three covered.

## PHASE 8 — MARKETING

**Positioning**: "The crowd runner where you can GAMBLE your army." The wager coin-flip is the shareable moment — every piece of content leads with it.

**ASO (Play Store)** — Title: `Numbers Army: Crowd Run 3D`. Keywords to weave into the description naturally: crowd runner, count masters, stickman army, math game, runner 3d, merge crowd, castle battle, gate runner. Update screenshots monthly based on which converts (Console shows conversion rate).

**SEO (web)** — the game page already has meta description; when you have a domain I add: OpenGraph tags, a simple landing section, and submit to Google Search Console (✅ you create the free account). Also submit the web game to portals that send real traffic: Poki, CrazyGames, GameDistribution, itch.io (✅ accounts are yours; submission builds are 🤖 mine).

**Social plan (first 30 days, all organic)**: 1 short-form video per day (YouTube Shorts + Instagram Reels + TikTok if available), same clip cross-posted. Best formats: near-death runs, huge jackpot flips, "0.01% chance" moments, boss fails. I can script them; you screen-record with your phone.

**100 content ideas** (batch-record; 10 categories × 10):
1–10 *Wager drama*: all-in at 999 army; 5 flips in a row; lost everything at the boss door; comeback from 1 soldier; jackpot ×5 mystery; "never take the 3rd wager"; flip win streak record; POV: 50/50 with 2000 army; the gasp sound compilation; wager vs safe lane A/B.
11–20 *Skill clips*: perfect boss no-damage; threading 3 moving gates; saw dodge at max speed; full green-gate run; ×2 streak entire level; cannon dodge montage; stomper juke; last-second gap switch; blindfold level 1; one-hand phone play.
21–30 *Fails*: army wiped by ÷2 at 4000; walked into the saw twice; picked -30 over ×3 (math fail); stomped 5 times straight; mystery gate betrayal; 1 soldier vs king; rage quit moments; "my brain during the wager gate".
31–40 *Progression*: level 1 → 15 speedrun; castle fully built; unlocking every skin; endless mode ep.1; beating yesterday's ghost; 7-day login streak; first 10k coins; upgrade priority guide; F2P vs booster comparison; max luck stat test.
41–50 *Challenges*: no-gate run; wager-only growth; never leave left lane; win with exactly 8 soldiers on stairs; ×5 stairs every level for a week; viewer-suggested handicaps (5 ideas); speedrun race vs friend.
51–60 *Educational hooks* ("math but fun"): why ×2 beats +50; expected value of the wager gate; the halving stairs math; how streak multiplier compounds; is the mystery gate +EV? (spreadsheet cameo); best-decision quiz clips (5).
61–70 *Memes/trends*: crowd runs to trending audio; "POV you're soldier #401"; boss king's POV; the gasp when wagering; skin tier list; ice canyon vs candy kingdom debate; put game clips behind "wait for it" hooks (4 variants).
71–80 *Behind the scenes*: "I built this with AI"; before/after the visual overhaul; how the crowd is 1 draw call; designing the 3 bosses; reading first Play reviews; revenue transparency ep.1; fixing a bug live; roadmap video.
81–90 *Community*: name the boss contest; vote next theme; ghost-score leaderboard callouts; duet/stitch fails from players; feature fan clips; Q&A; poll: hardest boss; birthday of the game.
91–100 *Launch beats*: teaser (3s wager flip); trailer (30s); "out now" post; first 100 installs thank-you; 1k installs milestone; week-1 stats; first 5-star review frame; "we hit the trending page"; update-1 changelog video; 30-day retrospective.

**Referral program** (later, needs backend): "invite a friend → both get 500 coins." Skip for v1.
**Influencers**: DM 20 small (10k–100k) hypercasual/mobile-gaming creators with a 15s clip + "free to feature, here's a promo build". Expect 1–2 replies per 20 — that's normal.

## PHASE 9 — ANALYTICS (what the numbers mean)

Firebase gives all of this free once wired:
- **Downloads/Installs**: store acquisitions (Play Console) — top of the funnel.
- **DAU / MAU**: daily/monthly active users. DAU÷MAU = "stickiness"; >20% is good for hypercasual.
- **Retention D1/D7/D30**: % of installers who return after 1/7/30 days. Hypercasual benchmarks: D1 ≥ 35% good, ≥ 45% great; D7 ≥ 10%. If D1 < 30%, we fix onboarding before spending a rupee on marketing.
- **Session length / sessions per user**: our target = 3+ sessions of 2–4 min daily (the daily bonus + challenge drive this).
- **Ad revenue / eCPM / impressions per DAU**: AdMob dashboard; target 2–4 rewarded views per DAU (they're optional AND attractive).
- **Conversion rate (IAP)**: buyers ÷ installs; hypercasual is 0.5–2%. ARPDAU (avg revenue per daily user) is your king metric: India ads-only ≈ $0.005–0.02; US ≈ $0.05–0.15.
- Dashboards: Firebase → Analytics (auto), Play Console → Statistics, AdMob → Home. I'll define the custom events funnel (run_start → boss_reached → run_won) once wired.

## PHASE 10 — SECURITY (honest scoping)

Done now: ✅ checksummed saves (stops casual cheating) · ✅ no secrets in code · ✅ input validated at boundaries · ✅ no server = nothing to hack.
At launch: TWA is served over HTTPS only; Play App Signing manages your release keys (Google holds them — tick "Use Play App Signing", it's the default).
Real talk: a client-only game can never be fully anti-cheat. That only matters when a REAL leaderboard exists — at that point we add a tiny server (Firebase Functions) that validates scores server-side (score ≤ theoretical max for level, run duration sanity). Until then, heavier anti-tamper is wasted effort.

## PHASE 11 — BUSINESS PLAN (conservative, honest)

Assumptions: organic + content marketing only, no paid UA, mixed IN/global installs, ARPDAU $0.012.
- Month 1: 3,000 installs, ~180 DAU avg → ~$60–80. Goal is NOT money: it's D1 retention data + reviews ≥ 4.3.
- Month 2–3: double down on what converted; 15,000 cumulative installs, 600 DAU → ~$200–300/mo. Add IAPs live, first payout ($100 AdMob threshold reached).
- Month 4–6: if D1 ≥ 40%: try $100–300 in Google Ads UA as an experiment; portals (Poki/CrazyGames) revenue-share for web. 50k installs, 2k DAU → $700–1,200/mo.
- Costs: $25 Play + ~₹1,000 domain + your time. Break-even: month 1–2.
- Kill/scale rule: if D1 < 30% after two content updates, park it and build game #2 with the same engine (this codebase is reusable — that's your real asset). If D7 > 12%, scale UA spend 2× monthly.
- KPI dashboard = 5 numbers checked weekly: installs, D1, D7, ARPDAU, crash-free rate (target >99.5%).

---

# CURRENT STATUS BOARDS

## RECORDED CREDENTIALS (ad unit IDs are public identifiers, not secrets)
- AdMob App ID: `ca-app-pub-2950345167992804~9401201076`
- Rewarded unit: `ca-app-pub-2950345167992804/3114958938`
- Interstitial unit: `ca-app-pub-2950345167992804/8638748352`
- Packaging decision: **Capacitor** native shell (not plain Bubblewrap TWA) because AdMob rewarded/interstitial require the native SDK. Plugin: `@capacitor-community/admob`. `AD_CONFIG.testing` in index.html MUST be set to `false` for the production build.

## SECTION A — THINGS THE OWNER MUST DO NOW
1. ✅ DONE — images in assets/ (renamed, optimized; originals in assets/source/).
2. ✅ DONE — Play Console created + verified.
3. ✅ DONE — AdMob app + 2 ad units (IDs recorded above).
4. ✅ DONE — Firebase Analytics wired and verified live (project: numbers-army, G-R8RBQ8X440).
5. **GitHub + Vercel accounts** (free, 10 min) → github.com "Sign up", then vercel.com "Continue with GitHub". ← NEXT BLOCKER
6. **Install Android Studio** (needed to build the Play Store .aab) → developer.android.com/studio → Download (~1.1GB, allow 30–60 min incl. SDK). Default settings all the way through; let it install the Android SDK when prompted.
7. Tell me your **legal name or company name + city** (for the legal pages).
8. Line up ~20 testers for the mandatory 14-day closed test.
9. (Optional) Buy a domain (~₹1,000/yr).

## SECTION B — THINGS CLAUDE WILL DO
- ✅ DONE: game audit/fixes, difficulty retune, shooting boss finale, ladder stairs, 9 engagement features, analytics events, checksummed saves, legal pages, asset integration + optimization, Three.js bundled locally (offline-ready), PWA manifest + service worker, **AdMob bridge wired with real unit IDs** (native in app, mock in browser, UMP consent flow included).
- ✅ DONE: Firebase Analytics wired (async CDN load, game never blocks on it, works offline/ad-blocked). Fixed a critical service-worker bug: the page is now network-first so game updates always reach players (was cache-first = players stuck on old versions forever).
- Blocked on A5: git init, push, connect Vercel deploy → live URL.
- Blocked on A6 + live URL: scaffold Capacitor Android project, install AdMob plugin, build signed .aab, store screenshots + feature graphic, store listing copy, data-safety + content-rating answers.
- Blocked on A7: fill legal-page placeholders.
