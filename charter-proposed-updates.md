# Proposed updates to the EDMA Solid CoP Charter

Working from `Charter_Solid_02062026.docx` (v0.2/0.3 draft, 5 June 2026) and its nine embedded comments, plus the decisions recorded in the 25 June and 2 July ODI↔EDMA meeting notes. Each item gives the location, the current text, and **copyable replacement text**, and says which comment it resolves.

---

## 1. Remove DCAM from the charter for now — resolves comments 6 and 0 (and part of 5)

Jim flagged possible licensing issues (DCAM content may be member-only); Jesse proposed removing DCAM mentions and revisiting when certification work starts. Applying that decision touches six places:

**1a. §1.1 Background, the CDMC/DCAM paragraph.** Replace:

> The Cloud Data Management Capabilities (CDMC) framework and the Data Management Capability Assessment Model (DCAM) are data-management frameworks developed by the EDM Council and widely used in regulated industries. DCAM sets out the capabilities an organisation needs to manage data as an asset - across strategy, governance, architecture, quality and operations. CDMC defines the key controls required to manage sensitive data safely in cloud, multi-cloud and hybrid environments. Both are central to how this group will define what "good" looks like for Solid deployments (see Appendix C).

with:

> The Cloud Data Management Capabilities (CDMC) framework is a data-management framework developed by the EDM Council and widely used in regulated industries. CDMC defines the key controls required to manage sensitive data safely in cloud, multi-cloud and hybrid environments, and is central to how this group will define what "good" looks like for Solid deployments (see Appendix C). The group may draw on further EDM Council frameworks for organisational data-management maturity as the certification work develops, subject to the Council's licensing.

**1b. §1.1 "Relevance to CDMC and DCAM" paragraph.** Retitle and replace:

> **Relevance to CDMC:** a Pod is, in effect, a cloud datastore for sensitive data, so CDMC's controls apply directly to how a Solid service stores, classifies, protects and governs that data — and because the applications built on Solid are where domain-specific data is handled, those controls bind to applications and identity providers as much as to servers. Mapping CDMC onto Solid is a core work item for this group (Appendix C).

**1c. §2.1 EDMA contribution bullet.** Replace "the CDMC and DCAM frameworks that underpin the certification work (Appendix C);" with:

> the CDMC framework that underpins the certification work (Appendix C);

**1d. §4 Key Assumptions, second bullet.** Replace:

> The EDM Council agrees to the open publication of Solid-specific bindings of CDMC and DCAM (Appendix C).

with:

> The EDM Council agrees to the open publication of a Solid-specific binding of CDMC (Appendix C).

**1e. Appendix C.** Reduce the four-layer structure (C.3) to three named layers plus a signposted future layer, and drop C.5:

- In **C.3**, replace the "Solid-DCAM conformance" layer with:

  > **Organisational data-management maturity** — an assessment of the organisation building the service, principally application developers who handle domain-specific data. The framework for this layer will be agreed with the EDM Council when the certification work begins; it is intentionally not specified in this charter.

  and in the closing paragraph of C.3, replace "Solid-DCAM governs the data-management maturity of the organisation building it — above all, application developers;" with "the organisational layer governs the data-management maturity of the organisation building it — above all, application developers;".

- Delete **C.5 Solid-DCAM (sub-work-item)** entirely and renumber C.6–C.10 to C.5–C.9 (update cross-references in C.3 and E.5 accordingly).
- In **C.7 (now C.6) Conformance and assessment**, change the example claim to: "Solid Lending Application, conformant to Solid-CDMC Finance v1, independently verified."
- In **C.8 (now C.7)**, replace "the EDM Council, which owns CDMC and DCAM, on which the Solid-CDMC and Solid-DCAM bindings are derivative works" with "the EDM Council, which owns CDMC, on which the Solid-CDMC binding is a derivative work".
- In **C.9 (now C.8) Framework IP**, replace "CDMC and DCAM are EDM Council intellectual property; open publication of Solid-specific bindings requires" with "CDMC is EDM Council intellectual property; open publication of a Solid-specific binding requires".
- In **References**, delete the line "EDM Council — DCAM".

**1f. §2.2 (ODI contribution)** — no change needed; it mentions only the CDMC-for-Solid mapping.

Once applied, comments 6 and 0 can be resolved, and this also covers the DCAM half of comment 5.

---

## 2. Equitable value for members and technology partners — resolves comment 2

**§1.4 Target Deliverables, opening.** Replace:

> The group's deliverables follow directly from its objectives. They are:

with:

> The group's deliverables follow directly from its objectives. They are designed to generate value equitably for both EDMA members and technology partners: members gain deployment guidance, assurance and reference implementations for their sectors, while technology partners gain a clear conformance bar, sector requirements to build against, and a route to certified, procurable products. The deliverables are:

---

## 3. Technology partners and the governance level — resolves comment 3

Jesse's assumption (no technology partners at governance level) fits the charter's vendor-neutrality posture (§1.6, C.8). **§3.2, after the first sentence** ("The group is led by co-chairs drawn from the convening organisations, supported by sector leads..."), insert:

> Governance-level chairs are drawn from the convening organisations and the membership; technology partners contribute through the sector and project sub-groups rather than the governance level, preserving the group's vendor-neutral position (§1.6).

*(Flag for Jim to confirm before applying — this was an open question to him.)*

---

## 4. Meeting cadence — resolves comment 4

Jesse asked Jim whether EDMA CoPs have a standard cadence; the 25 June/2 July notes also delayed formal meetings to September. **§3.3, first sentence.** Replace:

> The forum meets bi-weekly, with a standing community call open to all participants.

with:

> The forum meets on a regular cadence set by the co-chairs and aligned with EDMA's usual Community of Practice rhythm — bi-weekly is proposed for the working phase, with a standing community call open to all participants. Regular meetings begin in September 2026, following the summer launch activities.

---

## 5. Key Assumptions refresh — resolves comment 5 (with 1d above)

Jesse asked for Jim's input on §4. Beyond the DCAM edit (1d), two assumptions can now be firmed up from the 2 July decisions:

**Add to §4:**

> Certification assessments are conducted by authorized partners, with EDMA issuing certifications as the neutral certifying body, preserving the ODI's neutrality as steward of the Solid standard.

*(This records the certification-model consensus of 2 July and aligns §4 with Appendix C.8.)*

---

## 6. Remove Appendix D from the shared charter — resolves comment 7

Jesse noted the engagement strategy is for the chairs' reference, not a widely shared charter. Proposal:

- **Delete Appendix D** (EDMA Member and Partner engagement strategy) from the charter. Its content already lives in the standalone *Solid CoP Engagement Strategy* and *Member & Technology-Partner Role Map* documents, which remain internal to the chairs.
- **Renumber Appendix E → Appendix D** and update the two references to "Appendix E" in §1.4 (the DPROD deliverable bullet) and anywhere else it appears.
- If a public trace is wanted, add a single line under §3.1: "Member recruitment and engagement are coordinated by the chairs under a separate internal engagement plan."

---

## 7. DPROD appendix — resolves comment 8

Comment 8 is informational (new deliverable from the DPROD working-group call); the deliverable is already reflected in §1.4 and Appendix E. **No text change needed** — resolve the comment once Jim has seen it.

## 8. Stuart's "welcome input" marker — resolves comment 1

Comment 1 invites input from Tim and John on the front matter; no text change to apply. Resolve once they've had the chance to look (the half-page summary being sent to them covers this).

---

## 9. Housekeeping fixes (no comment attached, recommended while editing)

**9a. §1.4 truncated note + typo.** The note ends mid-sentence. Replace:

> Note: This group is currently being set up as a Community of Practise whilst we onboard members. Work on most of these deliverables is likely to only begin in ernest once the group transitions to having a

with:

> Note: This group is currently being set up as a Community of Practice whilst we onboard members. Work on most of these deliverables is likely to begin in earnest only once the group transitions to a formal working group with defined work items and deliverables (§3.1, §3.4).

**9b. §3.4 timeline is stale** (June milestones have passed; the webinar date is now fixed). Replace the July rows onward with:

> | 14 July | Launch webinar with Sir Tim Berners-Lee. |
> | July | Talk from the Solid Community Group in the forum; talk from the Linked Web Storage Working Group in the forum. |
> | July–August | Prototype R&D; pre-launch member recruitment. |
> | August | First showcase webinar. |
> | September | Community of Practice formally launches; regular meetings begin; transition to Working Group with a timeline for producing the target deliverables. |

(and mark the June rows as complete or delete them).

**9c. §3.5 Tools — EDM Connect members-only note.** The 2 July meeting agreed the charter should reflect that the Data Architecture Management area is restricted to members. Replace the EDM Connect bullet with:

> EDM Connect — the EDMA community platform hosting membership, discussion and documents. Note that the Data Architecture Management (DAM) area on EDM Connect is restricted to EDMA members; the group's outputs themselves are published openly (§3.1).

**9d. §3.2 name fixes.** "Healthcare — Elfi Goesaert (VITO) and (Buzz O'Niel) EverBetter" → "Healthcare — Elfi Goesaert (VITO) and Buzz O'Niel (EverBetter)". In §3.4, "Marco [surname to confirm]" still needs confirming or removing.

**9e. B.3.1 typo.** "athumi - it's data utility company, built on Solid, is architected..." → "athumi, its data utility company, built on Solid, is architected..." (also respects the lower-case "athumi" branding).

**9f. Front matter.** Title page says "Version: 0.2 DRAFT" while Document History has a 0.3 row; after these edits, set the title page to "Version: 0.4 DRAFT", complete the 0.3 history row (02-06-2026, All, "Comment round"), and add a 0.4 row for this update. Fill or delete the empty Project Governance Details fields (Start Date: June 2026; Program Sponsor: EDM Association; End Date: ongoing / n/a for a CoP). Refresh the Table of Contents after renumbering (it currently lists "2.2 The FIBO Ontology" but the body has 2.2 ODI role and 2.3 FIBO).

---

## Comment-by-comment resolution map

| Comment | Author | Resolved by |
|---|---|---|
| 0 (DCAM reminder to Jim) | Jesse | Item 1; resolve after applying |
| 1 (welcome input, Tim/John) | Stuart | Item 8; resolve after the summary goes out |
| 2 (equitable value, deliverables) | Jesse | Item 2 |
| 3 (tech partners at governance level) | Jesse | Item 3 (Jim to confirm) |
| 4 (bi-weekly cadence) | Jesse | Item 4 (Jim to confirm EDMA norm) |
| 5 (Key Assumptions input) | Jesse | Items 1d + 5 |
| 6 (DCAM licensing) | Jesse | Item 1 |
| 7 (Appendix D too internal) | Jesse | Item 6 |
| 8 (DPROD new deliverable FYI) | Jesse | Item 7; resolve once Jim acks |
