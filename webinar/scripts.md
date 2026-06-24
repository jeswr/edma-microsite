# Webinar speaker scripts

Full talk track for the Solid Community of Practice launch webinar. These mirror the speaker notes embedded in `index.html` (press `S` in the deck for speaker view). Times are targets; trim to fit. On-screen text avoids em-dashes; these scripts use them for readability.

---

## 0 · MC welcome (~45s, while people join)
Good afternoon and welcome. Thank you for joining the launch of the Solid Community of Practice, co-convened by the EDM Association and the Open Data Institute. Over the next hour you'll hear what the community is, why finance, healthcare and government are the proving grounds, and a fireside conversation between John Bruce of Inrupt and Sir Tim Berners-Lee, the inventor of the web and the originator of Solid. Please drop questions in the chat throughout — we'll gather them for the panel. Let me hand over to Jim Halcomb of the EDM Association.

**Agenda slide (~30s):** Here's how the hour runs. Short introductions from each convener, a 7-minute tour of Solid with a live demo, then the main event — 30 minutes with John Bruce and Tim Berners-Lee. We close with the shape of the community and exactly how to join. Everything you'll see is published under the MIT licence, and participation is open to anyone, not just EDM Association members.

---

## 1 · Jim Halcomb — Intro to the EDM Association (4 min)

**Who we are (~2 min).** Thanks. I'm Jim Halcomb from the EDM Association. For those who don't know us: the EDM Association is the global body that elevates data management as a strategic business priority. Our members are the chief data officers, data architects and governance leaders inside the world's largest institutions — with our deepest roots in financial services.

We're best known for three things. First, FIBO — the Financial Industry Business Ontology — the open, shared vocabulary that lets financial institutions mean the same thing by the same term. Second, CDMC, the Cloud Data Management Capabilities framework, which is becoming the benchmark for how organisations demonstrate control over data in the cloud. And third, EDMConnect, the platform where our members and partners collaborate — and, as you'll hear, the neutral home for this new community.

What we bring to Solid is the demand side: the real requirements, the domain models, and the regulatory reality of finance, healthcare and government.

**Why we're convening this (~2 min).** So why is the EDM Association convening a community around Solid? Because the problem we all live with is structural. Every service — every bank, every hospital, every agency — keeps its own copy of the same data. That data gets collected, copied and secured over and over, and yet it's rarely current, rarely portable, and almost never genuinely under the control of the person or organisation it describes. That's cost, that's risk, and that's friction for every customer and citizen.

This community is a two-way exchange. Industry brings the requirements, the domain models like FIBO, and the demand of regulated sectors — plus the convening authority to bring regulators and standards bodies into the room. Solid brings a credible, open, standards-based way to break down those silos.

We sponsor and host the community; we don't own the answers. The work is done in the open, and every output is MIT-licensed. To tell you about our partner in this — the steward of Solid itself — let me hand to Louise Burke, CEO of the Open Data Institute.

---

## 2 · Louise Burke — Intro to the ODI (4 min)

**Vision & mission (~1 min).** Thank you, Jim. I'm Louise Burke, CEO of the Open Data Institute. Our vision is simple to state and hard to achieve: a world where data works for everyone. Our mission is to build open and trustworthy data ecosystems to get there. As my co-founder Sir Nigel Shadbolt puts it — without data, there is no AI. Everything we are living through right now runs on data, which makes how we steward it one of the defining questions of the decade.

**Leadership (~1 min).** The ODI was founded in 2012 by two people you'll recognise: Sir Tim Berners-Lee, who invented the World Wide Web, and Sir Nigel Shadbolt, one of the UK's leading AI academics. Tim is our President; Nigel is our Executive Chair; our research is led by Professor Elena Simperl. I mention the lineage because it matters for today: Solid came out of Tim's lab, and the ODI is the natural steward for it — the same people who gave the web its openness now stewarding the next layer of user control.

**Data spectrum (~1 min).** One idea that shapes everything we do is the Data Spectrum. Data isn't simply open or closed — it runs along a spectrum, from closed, through shared, to open. Most valuable data sits in the shared middle: it can't be fully open, but locking it away wastes its value. We work across the whole spectrum, and Solid is precisely how that shared middle becomes practical — data that moves between organisations while staying under the control of the person or organisation it describes.

**What we do (~1 min).** Practically, we're a mission-driven not-for-profit — about fifty people — and we work through five services: consultancy, training, policy and advocacy, research, and convening. We work with everyone from Microsoft and Google to national and regional governments, on data sharing, responsible stewardship, data ethics, privacy-enhancing technologies, and the data architectures that AI depends on. And since October 2024 we are the steward of Solid — its standards, its open-source codebases, and its global community.

**Our reach (~30s).** And this isn't theoretical — we've trained sixty thousand people, supported three hundred early-stage organisations, and we work with everyone from Microsoft and Google to Barclays, the BBC and the Gates Foundation, across the UK, Europe, the Americas and Asia-Pacific. So let me hand to Jesse and Matthieu to show you what Solid actually is.

---

## 3 · Jesse Wright & Matthieu Bosquet — Intro to Solid (7 min)

**What is Solid? — Jesse (~1.5 min).** Thanks Louise. I'm Jesse Wright, and I'm here with Matthieu Bosquet — we both work on Solid at the ODI. Let me give you the one-sentence version: Solid is an open standard for user-centric data and identity on the web.

Here's the shift. Today, every app you use keeps its own copy of your data. Solid inverts that. Your data lives in a Pod — think of it as a personal or organisational datastore — and applications read and write to it only with your permission, at the level of individual pieces of data. Because Pods use open, linked-data standards, the same data can be reused across many applications without custom integration, and it always stays under the control of whoever it describes. It's privacy by design, it's built entirely on standard web technology from Tim's group at MIT, and it's now stewarded by the ODI and standardised at the W3C.

**The problem — Matthieu (~1.5 min).** I'm Matthieu. Let me make the problem concrete, because it's the same five problems in every sector. One: silos and duplication — the same fact stored in dozens of places. Two: breach risk concentrates, because every copy is a target. Three: vendor lock-in, because your data is trapped in someone's product. Four: consent is coarse — it's all-or-nothing, take-it-or-leave-it. And five: your identity gets re-proven from scratch at every single institution you deal with.

Solid fixes all five at the root, by decoupling the data from the applications. The organisation reads the data it needs from the Pod, with permission, instead of holding and securing yet another copy. That means lower cost, lower liability, and — for the first time — a single, current source of truth that the data subject actually controls.

**Why now — Jesse (~1.5 min).** Why does this matter right now? Because of AI. As agents start to act on our behalf — booking, applying, negotiating — the urgent question becomes: what data are they acting on, and who controls it? If the answer is "a scraped, stale copy in someone's silo," that's neither safe nor trustworthy.

Solid gives agents structured, consented, attributable data, drawn from a source the user controls. The agent reads what it needs, with permission, instead of every service hoarding its own copy. So Solid isn't a relic of Web 2.0 debates — it's arguably the missing data layer for the agentic era. That's a big part of why this community is forming now.

**The standard — Matthieu (~1 min).** One slide on where this sits technically. Web 1.0 gave us HTTP, HTML and URLs — the document web. Web 2.0 added JavaScript and web APIs — the interactive web. Solid is the next layer: it adds the three things the web never standardised — a global single sign-on so you have one identity everywhere, fine-grained authorization so you control access per-resource, and a universal data API so any app can read and write your data in a standard way. Crucially, all of this is open, W3C-track standards. There's no proprietary chain, no lock-in. Now — rather than describe it, let's show you.

**Live demo — driven by Matthieu, narrated by Jesse (~1.5 min).** Four beats:
1. "I log in once, with a single web identity — that's the global SSO."
2. "Here I add some data in one app — say, a profile or a health record — and it's written to my Pod."
3. "Now I open a completely different app. Notice it already has the data — I didn't re-enter anything, and nobody built a custom integration. Same Pod, my permission."
4. "And the control is real: watch me grant access to just this one item, then revoke it — the second app instantly loses it."

> **Pre-flight checklist:** Pod server reachable · both apps logged out and reset · network/VPN stable · screen-share at readable zoom · backup slide ready. If the demo stalls for ~15s, say "let me show you the same flow as captured screenshots" and advance to the backup.

**Hand-off to fireside (MC).** That's Solid. Now to the conversation you came for.

---

## 4 · Fireside chat — John Bruce × Sir Tim Berners-Lee (30 min)
Holding slide only; unscripted. MC invites audience questions into the chat; a moderator curates and feeds them to John for the final portion. At time: "Thank you both. Let's turn to what we're actually building together."

---

## 5 · Overview of the Community of Practice (15 min)

### Roberto Breitman — scope & goals (~2.5 min, then work programme ~2.5 min)
Thanks. I'm Roberto Breitman, one of the co-chairs. Let me set out what this community actually is and what we're here to do. At its heart it's a two-way exchange: the EDM Association's members bring decades of data-management expertise and the demand of regulated industries; Solid brings an open, standards-based way to give people and organisations genuine control of their data. Industry brings the requirements; Solid brings the way to break down the silos.

We've deliberately picked three priority sectors — finance, healthcare and government — because that's where the cost of the status quo is highest and where credible champions already sit. We're building on an existing base of over 300 participants in the W3C Solid Community Group, and everything we produce is published under the MIT licence — no walled gardens.

We have four objectives: raise awareness and adoption; honestly assess how ready Solid is for each sector; demonstrate value through real deployments, not slideware; and develop the best-practice and commercial understanding that adoption actually depends on.

**Work programme.** Those objectives turn into six concrete deliverables. One: use cases and reference implementations — real, demonstrable deployments in each sector, written up so others can follow. Two: sector ontology bindings — recommendations for how established domain models like FIBO bind to Solid; note we're not inventing new ontologies, we're connecting the ones industries already trust. Three: security and functional requirements — what a Solid service must actually do to be deployable in a given sector, including cloud and data-management expectations like CDMC.

Four: the Solid Certification — a neutral, evidence-based mark that a Solid server, app or identity provider meets a sector's bar; it layers a recognised cyber-security baseline, CDMC data-control conformance, and sector-specific requirements, with assurance tiered from self-assessment up to independent verification. Five: Solid–DPROD bindings, so you can describe the data products inside a Pod and how to request access. And six: an open community platform — a neutral home on EDMConnect, with everything MIT-licensed.

Elisa will now go deeper on the bindings piece, and why finance is first. Elisa.

### Elisa Kendall — FIBO & financial services (~5 min)
Thank you, Roberto. I'm Elisa Kendall — I've spent much of my career on ontologies, and I co-lead the FIBO and ontology work here. I want to explain why FIBO is the bridge that makes this real for financial services, and why finance is the right first sector.

FIBO — the Financial Industry Business Ontology — is the result of years of work by the financial community to agree, precisely and machine-readably, what financial terms mean: what a loan is, what a legal entity is, what a counterparty is. The problem in finance has never been a shortage of data; it's that the same concept means subtly different things in every system, so data can't move without expensive, error-prone reconciliation.

Now connect that to Solid. Solid gives you the place to put data under the data subject's control, and a standard way to read and write it. But control without shared meaning isn't enough — two banks reading the same Pod still need to agree on what the fields mean. FIBO supplies exactly that shared meaning. So binding FIBO to Solid gives you semantic interoperability: data in a Pod that means the same thing to every institution that reads it. And critically, we are binding an ontology finance already trusts — we are not asking anyone to adopt something new.

Let me make it concrete with three use cases. First, lending: imagine a loan or mortgage agreement modelled in FIBO and verified against the borrower's own Pod. The lender reads current, verified data at source, instead of working from re-keyed, hard-to-verify copies. Second, KYC and AML onboarding: identity, address and source-of-funds verified once and held as verifiable credentials in the Pod; the next institution confirms them with a signature check, taking weeks and serious cost out of onboarding. Third, bank-provided identity: a bank issues credentials into the customer's Pod that the customer then presents to third parties — turning what is today a pure compliance cost centre into a new service line. NatWest has already piloted exactly this kind of customer-controlled flow on Solid.

This is why finance leads: the EDM Association's roots are here, FIBO is here, and the cost of the status quo is enormous. Prove it in finance and the path to healthcare and government opens up. Stuart will take that to the bottom line.

### Stuart Coleman — business value (~5 min)
Thanks, Elisa. I'm Stuart Coleman. Elisa's given you the how; I want to give you the why-it-pays, because this only scales if it makes commercial sense — and it does, in six ways.

First, you carry less data custody. Today every organisation holds and secures its own copy of customer data; with Solid you read what you need from the Pod, with permission. That's directly lower storage cost, lower liability, and a lighter compliance burden — every copy you don't hold is a breach you can't have. Second, reusable credentials: identity and eligibility attributes that are proven once and reused across services and even across sectors. That takes real time and real money out of onboarding and KYC/AML.

Third, a single, current source of truth. When the customer updates their details once — in their Pod — rather than in twenty places, you spend far less on reconciliation and you make fewer decisions on stale data. Fourth, interoperability without lock-in: this is an open, W3C-track standard, and the interoperability comes from shared sector ontologies this community defines — not from yet another bespoke integration project or a proprietary platform you can never leave.

Fifth — and this is the one that turns the conversation from cost to growth — new permissioned services and revenue. Once data is user-controlled, you can offer genuinely new value-added services on top of it; bank-provided identity is the obvious example, turning a cost centre into a product. And sixth, you future-proof: Solid gives you data that's structured, consented and attributable — the right foundation for trustworthy AI and AI agents — and demonstrable user control that aligns you with GDPR Article 20, the EU Data Act and the Digital Markets Act. You get ahead of regulation instead of scrambling after it.

So the business case is simple: cost out, risk down, and new revenue in — while doing right by your customers. The way to capture that is to be in the room while the rails are being laid. Let me hand back to tell you how.

---

## Close — Get involved (~1.5 min, MC / Roberto)
Here's how to take part — and the whole point is that you can. One: register on EDMConnect; anyone can, you do not need to be an EDM Association member. Two: join the bi-weekly community call, where you'll hear directly from the W3C Solid Community Group, the Linked Web Storage Working Group, and implementers across all three sectors. Three: bring a use case or take a role — sponsor a sector pilot, build or host infrastructure, steward the bindings, co-design the certification, or simply pilot Solid in your own organisation. Decisions are by consensus, facilitated by our co-chairs, with the EDM Association and the ODI providing stewardship. Wherever you sit in the data ecosystem, there is a seat at the table.

**Thank-you slide (~30s).** Thank you all for joining. The single most useful thing you can do next is register on EDMConnect at hub.edmcouncil.org and come to the next community call — and everything we covered today is on the microsite. Huge thanks to John and to Sir Tim, to all our speakers, and to you for being here at the start of this. We'll see you on the call.
