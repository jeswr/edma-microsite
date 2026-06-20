import Image from "next/image";

const EDM_CONNECT = "https://hub.edmcouncil.org/";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Why Solid", href: "#why-solid" },
  { label: "Who it's for", href: "#who" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Work programme", href: "#work" },
  { label: "Governance", href: "#governance" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/solid-emblem.svg"
            alt="Solid logo"
            width={34}
            height={31}
            priority
          />
          <span className="leading-tight">
            <span className="block font-bold text-navy text-[15px]">
              Solid Community of Practice
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-slate-500">
              EDM Association · Open Data Institute
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-edmblue"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={EDM_CONNECT}
          className="hidden sm:inline-flex items-center rounded-md bg-solid hover:bg-soliddark text-white text-sm font-semibold px-4 py-2 transition-colors"
        >
          Join the community
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-white"
      style={{
        background:
          "linear-gradient(135deg, #042e62 0%, #025394 55%, #36246b 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -right-24 -top-24 opacity-10 pointer-events-none select-none"
      >
        <Image src="/solid-emblem.svg" alt="" width={520} height={476} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">
          EDM Association · Community of Practice
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Solid Community of Practice
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-medium text-amber max-w-3xl">
          Making regulated data shareable, without losing control of it.
        </p>
        <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
          The EDM Association and the Open Data Institute are convening the
          community that will make{" "}
          <a
            href="https://solidproject.org/"
            className="underline decoration-teal underline-offset-4 hover:text-teal"
          >
            Solid
          </a>{" "}
          production-ready for finance, healthcare and government, with
          conformance anchored to CDMC and sector bindings built on assets such
          as FIBO. Join now to shape the rails your sector will run on.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={EDM_CONNECT}
            className="inline-flex items-center rounded-md bg-solid hover:bg-soliddark text-white font-semibold px-6 py-3 transition-colors"
          >
            Join via EDMConnect
          </a>
          <a
            href="#work"
            className="inline-flex items-center rounded-md border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3 transition-colors"
          >
            Explore the work programme
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-300">
          Participation is open: anyone can register on EDMConnect, not just
          EDM Association members. All outputs are published under the MIT
          licence.
        </p>
      </div>
    </section>
  );
}

const STATS = [
  { value: "300+", label: "participants in the W3C Solid Community Group" },
  { value: "3", label: "priority sectors: finance, healthcare, government" },
  { value: "2015", label: "Solid founded at MIT by Sir Tim Berners-Lee" },
  { value: "MIT", label: "open licence for every output of the community" },
];

function Stats() {
  return (
    <section className="bg-mist border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="text-3xl sm:text-4xl font-bold text-edmblue">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-solid mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy">{title}</h2>
      {lead && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">{lead}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="About the community"
          title="A two-way exchange between industry and the Solid project"
          lead="The Community of Practice pairs the data-management expertise of the EDM Association's members and partners with Solid's open, standards-based approach to giving people and organisations genuine control over their data. Industry brings the requirements, domain models and demand of regulated sectors; Solid brings a way to break down the silos, lock-in and duplication that hold those sectors back."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-edmblue">
              The EDM Association
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The global association elevating data management as a strategic
              business priority. EDMA convenes and sponsors the community,
              bringing its member and partner network, the{" "}
              <a
                href="https://spec.edmcouncil.org/fibo/"
                className="text-edmblue underline underline-offset-2"
              >
                FIBO
              </a>{" "}
              ontology, the{" "}
              <a
                href="https://edmcouncil.org/frameworks/cdmc/"
                className="text-edmblue underline underline-offset-2"
              >
                CDMC
              </a>{" "}
              framework, the EDMConnect platform, and the authority to engage
              regulators, standards bodies and commercial partners.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-edmblue">
              The Open Data Institute
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              <a
                href="https://theodi.org/"
                className="text-edmblue underline underline-offset-2"
              >
                The ODI
              </a>{" "}
              became{" "}
              <a
                href="https://solidproject.org/"
                className="text-edmblue underline underline-offset-2"
              >
                Solid
              </a>
              &apos;s steward in October 2024, bringing more than a decade of
              experience in responsible data innovation. Its stewardship
              ensures the infrastructure develops to benefit society, with
              governance that reflects community values and standards that
              enable global interoperability. The ODI maintains Solid&apos;s
              open-source foundations, is supporting the standardisation of
              parts of Solid technology in the{" "}
              <a
                href="https://www.w3.org/groups/wg/lws/"
                className="text-edmblue underline underline-offset-2"
              >
                Linked Web Storage
              </a>{" "}
              group, trains hundreds of new developers, and catalyses use-case
              pilots that demonstrate real impact.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-lg bg-mist p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-navy">What is Solid?</h3>
          <p className="mt-3 text-slate-700 leading-relaxed max-w-4xl">
            Solid is a privacy-by-design protocol built on standard web
            technologies. Rather than each application holding its own copy of
            a person&apos;s or organisation&apos;s data, Solid stores it in a{" "}
            <strong>Pod</strong>: a personal or organisational datastore with
            fine-grained access controls, so applications read and write only
            with permission. Because Pods use open, linked-data standards, the
            same data can be reused across applications without bespoke
            integration, and it stays under the control of the entity it
            describes. Solid was developed by{" "}
            <a
              href="https://www.w3.org/People/Berners-Lee/"
              className="text-edmblue underline underline-offset-2"
            >
              Sir Tim Berners-Lee
            </a>
            &apos;s research group at MIT, nurtured by a global community, and
            is standardised through the{" "}
            <a
              href="https://www.w3.org/community/solid/"
              className="text-edmblue underline underline-offset-2"
            >
              W3C Solid Community Group
            </a>{" "}
            and the{" "}
            <a
              href="https://www.w3.org/groups/wg/lws/"
              className="text-edmblue underline underline-offset-2"
            >
              Linked Web Storage Working Group
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    title: "Reduced data custody and breach exposure",
    body: "Organisations read data from the Pod instead of holding and securing their own copies, lowering cost, liability and compliance burden.",
  },
  {
    title: "Reusable verifiable credentials",
    body: "Already-proven identity and eligibility attributes are reused across sectors, cutting onboarding time and KYC/AML cost.",
  },
  {
    title: "A single, current source of truth",
    body: "Less reconciliation effort and stale-copy error; customers and citizens update their details once, not everywhere.",
  },
  {
    title: "Interoperability without lock-in",
    body: "An open W3C-track standard; semantic interoperability comes from the shared sector ontologies this group will define.",
  },
  {
    title: "New permissioned services and revenue",
    body: "Value-added services, such as bank-provided identity, built on user-controlled data.",
  },
  {
    title: "AI- and agent-ready data",
    body: "As AI agents develop, Solid keeps users in control: structured, consented, attributable data as a foundation for trustworthy AI.",
  },
  {
    title: "Regulatory future-proofing",
    body: "Demonstrable user control aligns with GDPR Article 20, the EU Data Act and the Digital Markets Act.",
  },
  {
    title: "Better customer experience",
    body: "Data that travels with people across platforms and providers, for more trustworthy digital experiences.",
  },
];

function WhySolid() {
  return (
    <section id="why-solid" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
          Why Solid
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl">
          The problem is structural: every service keeps its own copy of your
          data
        </h2>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl leading-relaxed">
          The same data is collected, copied and secured many times over, yet
          is rarely current, portable or under the control of the person or
          organisation it describes. The result: silos and duplication,
          concentrated breach risk, vendor lock-in, coarse consent, and
          identity re-proofed at every institution. Solid fixes this at the
          root by decoupling data from applications.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-lg bg-white/5 border border-white/10 p-6"
            >
              <h3 className="font-semibold text-teal">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-400 max-w-3xl">
          Real implementations prove the model works: the Flanders/
          <a
            href="https://athumi.eu/"
            className="text-teal underline underline-offset-2 hover:text-white"
          >
            athumi
          </a>{" "}
          citizen-data ecosystem,{" "}
          <a
            href="https://vito.be"
            className="text-teal underline underline-offset-2 hover:text-white"
          >
            VITO
          </a>
          &apos;s healthcare platform,{" "}
          <a
            href="https://graphmetrix.com"
            className="text-teal underline underline-offset-2 hover:text-white"
          >
            Graphmetrix
          </a>{" "}
          in US construction supply chains, and pilots with the BBC, the Bezos
          Earth Fund, NatWest Bank and Visa across media, sustainability,
          banking and commerce. Adoption is still early; assessing that
          readiness and closing the gaps is the remit of this community.
        </p>
      </div>
    </section>
  );
}

const AUDIENCES = [
  {
    role: "Anchor sponsors & sector champions",
    who: "Institutions in finance, healthcare or government ready to lead",
    hook: "Put your name on your sector's defining Solid pilot and steer it to your priorities.",
  },
  {
    role: "Infrastructure & hosting providers",
    who: "Cloud platforms, Solid server builders, managed-hosting and data-custody operators",
    hook: "Define the production baseline, or launch Pod hosting and regulated data custody as a new service line.",
  },
  {
    role: "Ontology & identifier stewards",
    who: "Standards bodies and stewards of domain ontologies, identifier schemes and terminologies",
    hook: "Hold the pen on the bindings and identifiers your whole sector will reference.",
  },
  {
    role: "Certification & assurance",
    who: "Assessors, auditors and advisory firms with data-governance and CDMC practices",
    hook: "Co-design the conformance scheme and extend your accreditation into a new Solid assessment line. Be first-accredited.",
  },
  {
    role: "Product vendors",
    who: "Data-management and governance software vendors",
    hook: "Ship a certified Solid-native product into the EDM Association's member shop window.",
  },
  {
    role: "Data-rich organisations",
    who: "Banks, insurers, care providers and public agencies on the demand side",
    hook: "Cut data-sharing friction now and give customers a real data wallet ahead of regulation.",
  },
];

function WhoItsFor() {
  return (
    <section id="who" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Who it's for"
          title="Every organisation has a role"
          lead="The community matches each organisation to a concrete role around real sector pilots: demand first, with supply, standards and assurance built around it. Wherever you sit in the data ecosystem, there is a seat at the table."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((a) => (
            <div
              key={a.role}
              className="rounded-lg bg-white border border-slate-200 p-6 shadow-sm flex flex-col"
            >
              <h3 className="text-lg font-bold text-navy">{a.role}</h3>
              <p className="mt-1 text-sm text-slate-500">{a.who}</p>
              <p className="mt-4 text-[15px] text-slate-700 leading-relaxed border-l-4 border-solid pl-4">
                {a.hook}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={EDM_CONNECT}
            className="inline-flex items-center rounded-md bg-edmblue hover:bg-navy text-white font-semibold px-6 py-3 transition-colors"
          >
            Take a role via EDMConnect
          </a>
          <p className="text-sm text-slate-600">
            Not sure where you fit? Join the open community call and we&apos;ll
            help you find out.
          </p>
        </div>
      </div>
    </section>
  );
}

const SECTORS = [
  {
    name: "Finance",
    accent: "var(--edm-blue)",
    intro:
      "Home of the EDM Association's roots and the FIBO community, and the first sector the community is proving Solid in.",
    cases: [
      {
        title: "Lending on verified, current data",
        body: "Loan and mortgage agreements modelled in FIBO and verified against the borrower's Pod let lenders read data at source instead of re-keyed, hard-to-verify copies.",
      },
      {
        title: "Reusable KYC/AML onboarding",
        body: "Verifiable credentials for identity, address and source of funds are proofed once and confirmed by signature check, cutting weeks of onboarding and significant compliance cost per client.",
      },
      {
        title: "Bank-provided identity services",
        body: "Banks issue credentials into a customer's Pod and let the customer present them to third parties, turning a compliance cost centre into a service line.",
      },
    ],
  },
  {
    name: "Healthcare",
    accent: "var(--edm-teal)",
    intro:
      "Among the most mature areas of Solid deployment, with real clinical data and real consent already in production pilots.",
    cases: [
      {
        title: "Patient-controlled records",
        body: (
          <>
            VITO&apos;s{" "}
            <a
              href="https://we-are-health.be"
              className="text-edmblue underline underline-offset-2"
            >
              WeAre
            </a>{" "}
            vaults in Flanders let patients share health data across providers
            and researchers; an NHS pilot in Greater Manchester used personal
            stores to improve dementia care.
          </>
        ),
      },
      {
        title: "Medication management",
        body: "A medication record in the patient's Pod, described with shared, standardised definitions, gives pharmacists, prescribers and hospitals one current view and fewer reconciliation errors.",
      },
      {
        title: "A governed home for consumer health data",
        body: "Readings from consumer devices that fall outside HIPAA gain a consented, governed home, addressing a gap regulators are actively grappling with.",
      },
    ],
  },
  {
    name: "Government",
    accent: "var(--edm-amber)",
    intro:
      "The clearest evidence yet that citizen-controlled data can operate as public infrastructure.",
    cases: [
      {
        title: "Citizen vaults and “tell us once”",
        body: (
          <>
            Flanders&apos; data utility{" "}
            <a
              href="https://athumi.eu/"
              className="text-edmblue underline underline-offset-2"
            >
              athumi
            </a>
            , built on Solid, is architected to serve ~6.5 million citizens,
            with live services including diploma sharing and online death
            registration.
          </>
        ),
      },
      {
        title: "Social services for vulnerable citizens",
        body: (
          <>
            A citizen-controlled Pod holds verified documents and releases only
            what each service needs: control and dignity for the data subject.{" "}
            <a
              href="https://www.codepdx.org/"
              className="text-edmblue underline underline-offset-2"
            >
              Code for PDX
            </a>
            &apos;s Solid wallet already helps people at risk of homelessness
            complete housing-assistance applications.
          </>
        ),
      },
      {
        title: "Less repeated admin",
        body: "UK residents spend roughly 56 hours a year on government admin. A government-backed vault lets citizens maintain core data once, with services reading it by permission.",
      },
    ],
  },
];

function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Sectors & use cases"
          title="Proving the value where the stakes are highest"
          lead="Finance, healthcare and government are the priorities because that is where the costs of the status quo are highest and where credible champions already sit. Demonstrating value there is the fastest route to wider adoption."
        />
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {SECTORS.map((s) => (
            <div
              key={s.name}
              className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col"
            >
              <div className="px-6 py-4" style={{ backgroundColor: s.accent }}>
                <h3 className="text-xl font-bold text-white">{s.name}</h3>
              </div>
              <div className="p-6 flex flex-col gap-5">
                <p className="text-sm text-slate-500 italic">{s.intro}</p>
                {s.cases.map((c) => (
                  <div key={c.title}>
                    <h4 className="font-semibold text-navy">{c.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          See the{" "}
          <a
            href="https://solidproject.org/"
            className="text-edmblue underline underline-offset-2"
          >
            Solid Project website
          </a>{" "}
          for deployed services and applications, and the ODI&apos;s{" "}
          <a
            href="https://solidproject.org/engagement"
            className="text-edmblue underline underline-offset-2"
          >
            visual walkthrough
          </a>{" "}
          of the Solid user experience.
        </p>
      </div>
    </section>
  );
}

const DELIVERABLES = [
  {
    title: "Use cases & reference implementations",
    body: "Demonstrable deployments showing Solid's value in each sector, with white papers and webinars detailing implementers' experience.",
  },
  {
    title: "Sector ontology bindings",
    body: "Recommendations for how established domain ontologies, identifier schemes and terminologies (FIBO and peers) bind to Solid in each sector, rather than inventing new ontologies.",
  },
  {
    title: "Security & functional requirements",
    body: "What a Solid service must do to be deployed in a given sector, including how providers satisfy cloud and data-management expectations such as CDMC.",
  },
  {
    title: "The Solid Certification",
    body: "A neutral, evidence-based mark certifying that a Solid server, application or identity provider meets a target sector's bar. It layers a recognised cyber-security baseline, CDMC data-control conformance and sector-specific requirements, with assurance tiered from self-assessment to independent verification.",
  },
  {
    title: "Solid–DPROD bindings for data products",
    body: "Recommendations for how DPROD (the EDM Council/EKGF profile of W3C DCAT) describes where the data products in a Pod live and how to request access.",
  },
  {
    title: "An open community platform",
    body: "A neutral home for the community, branded with the Solid identity and hosted on EDMConnect, with every output published under the MIT licence.",
  },
];

function WorkProgramme() {
  return (
    <section id="work" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Work programme"
          title="What the community will deliver"
          lead="The deliverables follow directly from the community's objectives: raise awareness and adoption, assess Solid's readiness, demonstrate value through real deployments, and develop the best practice and commercial understanding that adoption depends on."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((d, i) => (
            <div
              key={d.title}
              className="rounded-lg bg-white border border-slate-200 p-6 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-solid/10 text-solid font-bold text-sm">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{d.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHAIRS = [
  {
    name: "Jim Halcomb",
    org: "EDM Association",
    linkedin: "https://www.linkedin.com/in/jimhalcomb",
  },
  {
    name: "Jacobus Geluk",
    org: "agnos.ai",
    linkedin: "https://www.linkedin.com/in/jgeluk",
  },
  {
    name: "Roberto Breitman",
    org: "Open Data Institute",
    linkedin: "https://www.linkedin.com/in/roberto-s-k-breitman-07429a157",
  },
  {
    name: "Stuart Coleman",
    org: "Open Data Institute",
    linkedin: "https://www.linkedin.com/in/infonation",
  },
  {
    name: "Jesse Wright",
    org: "Open Data Institute",
    linkedin: "https://www.linkedin.com/in/jeswr",
  },
];

function Governance() {
  return (
    <section id="governance" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Governance"
          title="Open participation, consensus decisions"
          lead="The community starts as an open forum while the work is defined, then converts into a formal working group with defined work items and deliverables. Decisions are taken by consensus, facilitated by the co-chairs, with the EDM Association and the Open Data Institute providing overall stewardship."
        />
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-navy">Co-chairs</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {CHAIRS.map((c) => (
                <a
                  key={c.name}
                  href={c.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-md bg-mist px-4 py-3 border border-slate-200 hover:border-edmblue hover:bg-white transition-colors"
                >
                  <p className="font-semibold text-navy group-hover:text-edmblue inline-flex items-center gap-1.5">
                    {c.name}
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 fill-current text-slate-400 group-hover:text-edmblue"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </p>
                  <p className="text-sm text-slate-500">{c.org}</p>
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-600">
              FIBO and ontology leadership: Shaun Rolls and Elisa Kendall.
              Sector leads for finance, healthcare and government drive each
              workstream.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-navy">How we meet</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-solid shrink-0" />
                A standing bi-weekly community call, open to all participants.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-solid shrink-0" />
                Sector and project sub-groups on their own cadence as the work
                matures.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-solid shrink-0" />
                Webinars and working sessions around milestones, including
                showcases of what members have built.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-solid shrink-0" />
                Discussion and documents on EDMConnect; code and deliverables
                on GitHub under the MIT licence.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="scroll-mt-20 bg-mist border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Get involved"
          title="Shape the rails your sector will run on"
          lead="Join now to shape how Solid binds to your industry's standards, and be first in line when the market follows."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-3xl font-bold text-solid">1</p>
            <h3 className="mt-2 font-bold text-navy">Register on EDMConnect</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The community is hosted on the EDM Association&apos;s EDMConnect
              platform. Anyone can register; membership is not required.
            </p>
          </div>
          <div className="rounded-lg bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-3xl font-bold text-solid">2</p>
            <h3 className="mt-2 font-bold text-navy">
              Join the community call
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The bi-weekly call is open to all: hear from the W3C Solid
              Community Group, the Linked Web Storage Working Group and
              implementers across sectors.
            </p>
          </div>
          <div className="rounded-lg bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-3xl font-bold text-solid">3</p>
            <h3 className="mt-2 font-bold text-navy">
              Bring a use case or take a role
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Sponsor a sector pilot, build or host infrastructure, steward
              bindings, co-design the certification, or pilot Solid in your own
              organisation.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <a
            href={EDM_CONNECT}
            className="inline-flex items-center rounded-md bg-solid hover:bg-soliddark text-white font-semibold px-8 py-4 text-lg transition-colors"
          >
            Join the Solid Community of Practice
          </a>
        </div>
      </div>
    </section>
  );
}

const FOOTER_RESOURCES = [
  { label: "Solid Project", href: "https://solidproject.org/" },
  {
    label: "W3C Solid Community Group",
    href: "https://www.w3.org/community/solid/",
  },
  {
    label: "W3C Linked Web Storage Working Group",
    href: "https://www.w3.org/groups/wg/lws/",
  },
  { label: "FIBO", href: "https://spec.edmcouncil.org/fibo/" },
  { label: "CDMC", href: "https://edmcouncil.org/frameworks/cdmc/" },
  { label: "DPROD", href: "https://ekgf.github.io/dprod/" },
];

function Footer() {
  return (
    <footer className="bg-navy text-slate-300 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/solid-emblem.svg" alt="" width={30} height={27} />
            <p className="font-bold text-white">Solid Community of Practice</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Co-convened by the EDM Association and the Open Data Institute to
            grow the adoption of Solid specifications, tools and standards
            across industry data management, and to channel industry&apos;s
            expertise back into the Solid project.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white text-sm uppercase tracking-wider">
            Resources
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_RESOURCES.map((r) => (
              <li key={r.label}>
                <a href={r.href} className="hover:text-teal">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white text-sm uppercase tracking-wider">
            Conveners
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="https://edmcouncil.org/" className="hover:text-teal">
                EDM Association
              </a>
            </li>
            <li>
              <a href="https://theodi.org/" className="hover:text-teal">
                Open Data Institute
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-slate-400 flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            EDM Association &amp; Open Data Institute. Community outputs
            published under the MIT licence.
          </p>
          <p>FIBO is a trademark of EDM Association, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Stats />
      <About />
      <WhySolid />
      <WhoItsFor />
      <UseCases />
      <WorkProgramme />
      <Governance />
      <GetInvolved />
      <Footer />
    </main>
  );
}
