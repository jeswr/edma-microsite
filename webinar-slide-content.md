# One copy of the truth — Launch Webinar · slide content

Content specification for rebuilding the launch-webinar deck in Google Slides.
Mirrors the reveal.js deck at `public/webinar/index.html` (18 slides), and follows
the **14 July 2026 runbook** and the public EDM Council event listing.

Each slide gives: **layout**, on-slide **content**, suggested **imagery**, and the
**speaker notes** to paste into the notes pane.

**Run of show (45 min):** Housekeeping (Savannah/Paragon, 2 min) · Welcome &
introductions (Emma Thwaites, ODI, 3–5 min, incl. brief ODI intro) · Introduction
to Solid (Jesse Wright, ODI, 10 min) · In conversation (Sir Tim Berners-Lee &
John Bruce, Inrupt, 20 min) · Audience Q&A (hosted by Emma, 10 min) · The Solid
Community of Practice (Jim Halcomb & Elisa Kendall, EDMA, 5 min). **Not recorded.**

House style: ODI blue `#072589`, mist background `#e0e5e9`, green `#21b24e`,
teal `#02b3b0`, orange `#ff6701`; Helvetica Neue / Arial; ODI logo bottom-left,
page number bottom-right. Image assets live in `public/webinar/img/` (referenced
with absolute `/webinar/img/…` paths in the deployed deck).

---

## Slide 1 — Title

**Layout:** Title slide. ODI logo top-right; decorative ODI "dot band" along the bottom.

- **Title:** One copy of the truth
- **Strapline (italic):** Sir Tim Berners-Lee on Solid and the future of enterprise data
- **Meta:** EDM Association + the Open Data Institute
- **Date line (bold):** 14 July 2026 · 10:00 am EST / 3:00 pm UK
- **Sub-line:** This session will not be recorded

**Notes:** On screen during housekeeping and Emma's welcome.

---

## Slide 2 — Agenda / run of show

**Layout:** Agenda list, vertically centred.

- **Kicker:** Run of show
- **Items:**
  1. Welcome & introductions — Emma Thwaites · Open Data Institute — 5 min
  2. Introduction to Solid — Jesse Wright · Open Data Institute — 10 min
  3. In conversation: Solid & the future of enterprise data — Sir Tim Berners-Lee & John Bruce · Inrupt — 20 min
  4. Audience Q&A — Hosted by Emma Thwaites — 10 min
  5. The Solid Community of Practice — Jim Halcomb & Elisa Kendall · EDM Association — 5 min
- **Footer:** 14 July 2026 · 10:00 am EST / 3:00 pm UK · not recorded · put your questions in the chat throughout

---

## Slide 3 — Meet the speakers

**Layout:** 3×2 grid of B&W headshots with blue caption blocks. Matches the six speakers on the public event page.

- **Kicker:** Emma Thwaites · welcome & introductions
- **Speakers:**
  - Emma Thwaites — Moderator · Strategic Advisor, Global Policy & Corporate Affairs, ODI
  - Sir Tim Berners-Lee — Inventor of the World Wide Web · Co-founder & CTO, Inrupt Inc.
  - John Bruce — Co-founder & CEO, Inrupt Inc.
  - Jesse Wright — Project Lead – Solid, Open Data Institute
  - Jim Halcomb — Chief Research & Development Officer, EDM Association
  - Elisa Kendall — Senior Ontologist, EDM Association

**Notes:** Emma introduces the panel quickly, then a brief word on the ODI, then hands to Jesse.

---

## Slide 4 — Steward of Solid (brief ODI)

**Layout:** Text left; a "Trusted by clients and partners" logo-wall panel on the right; a "Stewarding Solid · Since Oct 2024" lock-up (Solid logo) top-right; blue impact stat strip bottom-left.

- **Kicker:** Emma Thwaites · a brief word on the ODI
- **Heading:** Steward of Solid since 2024
- **Body:** ODI is a mission-driven non-profit, co-founded in 2012 by Sir Tim Berners-Lee and Sir Nigel Shadbolt, working towards an open, trustworthy data ecosystem. Since October 2024 it stewards Solid — standards at the W3C, codebases, and global community.
- **Top-right lock-up:** Solid logo + "Stewarding Solid · Since Oct 2024"
- **Logo wall:** "Trusted by clients and partners" — ODI clients/partners logos (`clients.png`)
- **Impact stats:** 60,000 trained · $395bn open-banking market by 2026 · 300 orgs supported

---

## Slide 5 — The Data Spectrum (full-bleed image)

**Layout:** Full-bleed image, no chrome.

- **Image:** The ODI Data Spectrum — from closed, through shared, to open data.

**Notes:** Emma's bridge into Solid — the shared middle is where Solid makes data practical.

---

## Slide 6 — Section divider: Introduction to Solid

- **Title:** Introduction to Solid
- **Sub:** What it is, the problem it solves, and a live demo
- **Who:** Jesse Wright · Project Lead – Solid, the ODI · 10 minutes

---

## Slide 7 — What is Solid

**Layout:** Text left; Pod network diagram + Solid logo top-right; a SMALL protocol-stack diagram with caption bottom-right.

- **Heading:** What is Solid
- **Body:**
  - Solid is an open-source **project**, open **standard**, and **movement** for a **user-centric data** storage system, originating from Sir Tim Berners-Lee's lab at MIT CSAIL.
  - Your data lives in a **Pod**; **AI agents and apps** read and write only **with permission**, breaking down data silos and keeping data under the control of whoever it describes.
  - The ODI stewards Solid's standards, codebases, and communities.
- **Small stack diagram caption:** Solid extends the existing web architecture
- **Imagery:** Pod network diagram, Solid logo, small web-protocol-stack graphic.

---

## Slide 8 — The problem

**Layout:** List left, "Walled Gardens" cartoon right, orange AI callout below the list.

- **Heading:** Every service keeps its own copy of your data
- **Body:** Collected, copied and secured many times over, yet rarely current, portable or under your control: silos and duplication · concentrated breach risk · vendor lock-in · coarse, all-or-nothing consent · identity re-proofed at every institution.
- **Bold line:** Solid fixes this at the root by decoupling data from applications.
- **Orange callout:** For trustworthy AI, agents need consented, attributable data under the user's control. Solid is the missing data layer.
- **Imagery:** "Walled Gardens", by David Simonds.

---

## Slide 9 — Live demo (Figma prototype)

**Layout:** "Live demo" flag; large framed image area filling the slide; footer credit.

- **Flag:** Live demo
- **Heading:** Solid in action — live walkthrough
- **Content:** Embedded screenshot/frame of **Tim Theys' Figma prototype** (`/webinar/img/figma-demo.png`), which Jesse walks through live. (Graceful placeholder until the image file is supplied.)
- **Footer:** Driven & narrated live by Jesse Wright

**Notes:** Jesse narrates a live walkthrough of the Figma prototype.

---

## Slide 10 — In conversation (fireside, holding slide)

- **Kicker:** In conversation · 20 minutes
- **Heading:** Solid & the future of enterprise data
- **Headshots:** Sir Tim Berners-Lee (Inventor of the World Wide Web · Co-founder & CTO, Inrupt) · John Bruce (Co-founder & CEO, Inrupt)
- **Footer:** On the table: what Solid is and why it was built · early deployments across government and healthcare · why it matters even more in the age of AI.

---

## Slide 11 — Audience Q&A

- **Kicker:** Audience Q&A · 10 minutes
- **Heading:** Your questions
- **Body:** Hosted by **Emma Thwaites**. Drop your questions in the chat — the moderator will bring them to the panel.
- **Footer:** On the panel: Sir Tim Berners-Lee · John Bruce

**Notes:** Seed questions in notes (to finalise) used only if participation is light.

---

## Slide 12 — Section divider: the Community of Practice

- **Title:** The Solid Community of Practice
- **Sub:** What it is, what we'll build, and how to take part
- **Who:** Jim Halcomb & Elisa Kendall · EDM Association · 5 minutes

---

## Slide 13 — What we're building (overview)

**Layout:** Lead paragraph + three coloured-tick blocks (the three focus areas, expanded on slides 14–16).

- **Kicker:** Jim Halcomb & Elisa Kendall
- **Heading:** Putting one copy of the truth into practice
- **Lead:** A community of practice — a neutral, vendor-independent group where finance, healthcare and government work alongside the people building Solid. Built on 300+ participants in the W3C Solid Community Group; every output MIT-licensed.
- **Blocks:** Real pilots per sector · Aligned to sector standards · Independent certification.

---

## Slide 14 — Focus A: Real pilots, in each sector

**Layout:** Three green-tick blocks.

- **Kicker:** Jim Halcomb & Elisa Kendall · focus A
- **Heading:** Real pilots, in each sector
- **Blocks:**
  - **Deployments, not slideware** — Demonstrable, end-to-end deployments, each written up as a reference implementation with a named champion, white paper and webinar.
  - **Finance first** — Verified lending data, reusable KYC/AML, and bank-provided identity. NatWest has piloted exactly this pattern.
  - **Then scale the pattern** — Healthcare and government follow, where duplication, re-proofing and custody cost just as much.

---

## Slide 15 — Focus B: Aligned to sector standards

**Layout:** Three teal-tick blocks.

- **Kicker:** Jim Halcomb & Elisa Kendall · focus B
- **Heading:** Aligned to the standards each sector already trusts
- **Blocks:**
  - **Connect trusted models** — Agree how Solid binds to the data models industries already rely on. We connect trusted ontologies; we don't invent new ones.
  - **Finance starts with FIBO** — Bind FIBO to Solid so a Pod's data means the same thing to every institution: semantic interoperability.
  - **Advertise data products** — Data-product description (DPROD-style) so a Pod can advertise what it holds and how to request access. Healthcare and government vocabularies come next.

---

## Slide 16 — Focus C: Certification

**Layout:** Three orange-tick blocks.

- **Kicker:** Jim Halcomb & Elisa Kendall · focus C
- **Heading:** A trusted, independent certification
- **Blocks:**
  - **A neutral mark** — A mark that a Solid service meets a sector's requirements, layered over cyber-security basics such as ISO 27001 and SBOM.
  - **Data controls plus sector rules** — The EDM Council's CDMC data-management controls, plus sector-specific requirements for regulated deployment.
  - **Risk-tiered assessment** — In the spirit of the EU AI Act: from self-assessment to independent verification. EDMA certifies, partners assess, the ODI approves the curriculum.

---

## Slide 17 — Get involved

**Layout:** Single call-to-action callout; supporting line; co-chair credits in the footer.

- **Kicker:** Jim Halcomb · get involved
- **Heading:** Shape how Solid transforms your sector
- **CTA (only):** Register via EDMConnect — hub.edmcouncil.org
- **Supporting line:** Registration is open to everyone; EDM Association membership is not required. Once registered, join the community calls and bring a pilot, standard-binding or certification use case when ready.
- **Footer:** **Co-chairs:** Jim Halcomb & Elisa Kendall (EDM Association) · Jacobus Geluk (agnos.ai) · Roberto Breitman, Stuart Coleman & Jesse Wright (ODI).

---

## Slide 18 — Thank you / join

**Layout:** Full blue background; decorative dot band along the bottom.

- **Heading:** Join the Solid Community of Practice
- **Links:** Register and join: hub.edmcouncil.org · Read more: edma-microsite.vercel.app
- **Footer:** Co-convened by the EDM Association and the Open Data Institute. This session was not recorded; slides and resources are on the microsite. All outputs published under the MIT licence.
