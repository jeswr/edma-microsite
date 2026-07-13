# Solid Webinar Content Proposal

Text-only approval draft for selected slides in `public/webinar/index.html`. This does not edit the deck.

Note: the requested co-chairs reorder was described as slide 16, but the co-chairs line is on the Get-involved slide, slide 17.

## Slide 8 - The Problem

**Current**

> Every service keeps its own copy of your data
>
> Collected, copied and secured many times over, yet rarely current, portable or under your control:
>
> - Silos and duplication
> - Concentrated breach risk
> - Vendor lock-in
> - Coarse, all-or-nothing consent
> - Identity re-proofed at every institution
>
> **Solid fixes this at the root by decoupling data from applications.**
>
> **For trustworthy AI, agents need consented, attributable data under the user's control.** Solid is the missing data layer.

**Proposed**

> Every service keeps its own copy of your data
>
> Today, each service collects and stores its own version of the same information. That creates five familiar problems:
>
> - Duplicate records that drift out of date
> - More copies for attackers to target
> - Lock-in when data is tied to one provider
> - Consent that is too broad or hard to change
> - Identity and eligibility checks repeated every time
>
> **Solid addresses this by separating data from applications.** Services read what they are allowed to use from the person's Pod, instead of keeping another copy.
>
> **As AI agents act for us, they need current data the person can still control.** Solid gives them a way to use that data with permission.

## Slide 14 - Focus A: Real Pilots, In Each Sector

**Current**

> **Deployments, not slideware**  
> Demonstrable, end-to-end deployments, each written up as a reference implementation with a named champion, white paper and webinar.
>
> **Finance first**  
> Verified lending data, reusable KYC/AML, and bank-provided identity. NatWest has piloted exactly this pattern.
>
> **Then scale the pattern**  
> Healthcare and government follow, where duplication, re-proofing and custody cost just as much.

**Proposed**

> **Real deployments**  
> End-to-end pilots that can be shown, tested and written up as reference implementations, with a named champion, short paper and webinar so others can follow.
>
> **Finance first**  
> Start with customer onboarding and lending decisions: data checked against the customer's own Pod, reusable identity and eligibility checks, and credentials issued by a bank that the customer can use elsewhere.
>
> **Then health and government**  
> Apply the same pattern where repeated checks and copied records create cost and risk, starting with practical services that can be demonstrated.

## Slide 15 - Focus B: Aligned To Trusted Sector Standards

**Current**

> **Connect trusted models**  
> Agree how Solid binds to the data models industries already rely on. We connect trusted ontologies; we do not invent new ones.
>
> **Finance starts with FIBO**  
> Bind **FIBO** to Solid so a Pod's data means the same thing to every institution: semantic interoperability.
>
> **Advertise data products**  
> Add data-product description, DPROD-style, so a Pod can advertise what it holds and how to request access. Healthcare and government vocabularies come next.

**Proposed**

> **Use trusted sector models**  
> Bind Solid to the data models each sector already uses, rather than asking organisations to adopt a new vocabulary.
>
> **Finance starts with FIBO**  
> Use FIBO first, so data in a Pod is understood the same way by every participating financial institution.
>
> **Describe what a Pod holds**  
> Let a Pod describe the data products it contains and how access should be requested. Health and government vocabularies follow the same approach.

## Slide 16 - Focus C: A Trusted, Independent Certification

**Current**

> **A neutral mark**  
> A mark that a Solid service meets a sector's requirements, layered over cyber-security basics such as ISO 27001 and SBOM.
>
> **Data controls plus sector rules**  
> Include the EDM Council's **CDMC** data-management controls, then add sector-specific requirements for regulated deployment.
>
> **Risk-tiered assessment**  
> In the spirit of the EU AI Act: from self-assessment to independent verification. EDMA certifies, partners assess, and the ODI approves the curriculum.

**Proposed**

> **Solid-CDMC guidance and certification**  
> Adapt the EDM Council's CDMC controls to Solid services, so Pod providers and application teams know what evidence is expected for governance, access control and operational readiness. A Solid-CDMC certification would confirm that a Solid service meets those adapted controls.
>
> **A neutral mark**  
> Set up a model to show that Solid services are fit for deployment in a particular sector, including security, conformance and sector-specific requirements.
>
> **Re-use EDMA's existing partner model**  
> Deliver assessment through EDMA's established authorised-partner model, with trained partners assessing Solid services against the Solid-CDMC guidance and EDMA overseeing the certification.

## Slide 17 - Get Involved Co-Chairs Line

**Current**

> **Co-chairs:** Jim Halcomb & Elisa Kendall (EDM Association) · Jacobus Geluk (agnos.ai) · Roberto Breitman, Stuart Coleman & Jesse Wright (ODI).

**Proposed**

> **Co-chairs:** Jim Halcomb & Elisa Kendall (EDM Association) · Roberto Breitman, Stuart Coleman & Jesse Wright (ODI) · Jacobus Geluk (agnos.ai).

## Other Wording Flags

- Slide 8: "Solid is the missing data layer" reads like positioning language. Use "a way for agents to use current data with the person's permission."
- Slide 14 notes: update the speaker notes to match the proposed plain-language finance wording, including the removal of named-bank references and spelled-out compliance acronyms.
- Slide 15: "semantic interoperability" and "DPROD-style" may be useful internally, but the slide can say "same meaning across institutions" and "describe what a Pod holds and how to request access."
- Slide 16: "in the spirit of the EU AI Act" and "Risk-tiered assessment" pull attention away from the Solid-CDMC and EDMA partner-model message. Replace with the proposed authorised-partner wording.
