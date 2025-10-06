import './App.css'
import heroImage from "./assets/Profilbilde CV 1.jpg";
import { Heading, Tabs, Box, List, Accordion, Link } from '@navikt/ds-react'
import { ClockIcon, BookIcon, HatSchoolIcon, RulersIcon } from '@navikt/aksel-icons';
import GitHubLogo from "./assets/github-logo.svg";
import LinkedInLogo from "./assets/linkedin-logo.svg"

function App() {

  return (
    <>
      <nav id="header">
        <Heading size='xlarge'>Anne Kristin Villar Sundal sitt søknadsbrev</Heading>
        <div className='link-section'>
          <Link href="#hero">Om Meg</Link>
          <Link href="#experience">Min Erfaring</Link>
          <Link href="#hobbier">Mine Hobbier</Link>
        </div>
      </nav>
      <main id="main">
      <Heading size="large" className="sub-header"> Om Meg! </Heading>
      <section id="hero">
        <div id="hero-text">
          <Heading size="small">Vyrde rekrutteringsteamet i NAV,</Heading>
          <p>
            Eg studerer informasjonsteknologi med spesialisering i frontend- og mobilutvikling ved Høyskolen Kristiania, 
og blir ferdig våren 2026. Då eg såg utlysinga dykkar å kjende eg meg umiddelbart igjen i beskrivinga av kva dykk ser etter: 
ein nysgjerrig, samarbeidsorientert og engasjert utviklar som vil bidra til noko som faktisk betyr noko.
          </p>
          <div id="contact-container">
            <Link href="https://github.com/aksundal/"><img src={GitHubLogo} width="24" height="24"/></Link>
            <Link href="www.linkedin.com/in/anne-kristin-villar-sundal"><img src={LinkedInLogo} width="24" height="24"/></Link>
          </div>
        </div>
        <div id="hero-img" >
          <img src={heroImage}/>
        </div>
      </section>
      <Heading size="large" className="sub-header"> Min Erfaring! </Heading>
      <section id="experience">
        <Tabs defaultValue="Erfaring">
          <Tabs.List>
            <Tabs.Tab value="Erfaring" label="Erfaring" icon={<ClockIcon aria-hidden/>}/>
            <Tabs.Tab value="Ferdigheter" label="Ferdigheter" icon={<RulersIcon aria-hidden/>}/>
            <Tabs.Tab value="Prosjekter" label="Prosjekter" icon={<BookIcon aria-hidden/>}/>
            <Tabs.Tab value="Utdanning" label="Utdanning" icon={<HatSchoolIcon aria-hidden/>}/>
          </Tabs.List>
          <Tabs.Panel value="Erfaring">
            <Box className='tabs-box'>
            <List as="ul" className="info-liste">
                <List.Item>
                <b>Fullstack- og frontendprosjekt - </b>
                Utvikla fleire applikasjonar i Java, Kotlin, React og Javascript/TypeScript med fokus på universell utforming og smidig samarbeid. 
                Fikk solid erfaring med API-integrasjon, testing og strukturert kode.
                </List.Item>
                <List.Item>                
                <b>10 år med leiing og samarbeid i politikken - </b>
                Leidde team og prosjekt som lokallagsleiar, fylkesleiar og landsstyrerepresentant. 
                Erfaringa har gjort meg trygg i kommunikasjon, strategi og tverrfagleg samarbeid.
                </List.Item>
                <List.Item>
                   <b>Teknisk prosjektleiing og problemløysing - </b>
                Har hatt ansvar for planlegging, koordinering og teknisk gjennomføring av komplekse prosjekt. 
                Vant til å jobbe strukturert, ta initiativ og finnngar raskt under press.
                </List.Item>
              </List>
            </Box>
            
          </Tabs.Panel>
          <Tabs.Panel value="Ferdigheter">
            <Box className='tabs-box'>
              <List as="ul" className="info-liste">
                <List.Item>
                <b>Tekniske ferdigheter: </b>
                Java, Kotlin, Swift, Javascript/Typescript, React, React Native, C#, SQL, Unity, Figma, Git/Github, REST API, .NET, HTML5, CSS3, .NET
                </List.Item>
                <List.Item>
                  <b>Sosiale ferdigheter: </b>
                  God samarbeidsevne, sosial sommerfugl, omsorgsfull, elske å bli kjent med folk, målretta, sterkt arbeidsfokus.
                </List.Item>
              </List>
            </Box>
          </Tabs.Panel>
          <Tabs.Panel value="Prosjekter">
            <Box className='tabs-box'>
              <List as="ul" className="info-liste">
              <List.Item>
                <b>Dreams of Skyrim - Kreativt Webprosjekt Haust 2023/Høyskolen Kristiania, Oslo -  </b>
                Utvikle frontend-løysning med bruk av CSS3 og HTML5, fokus på strukturert kode og responsivt design. 
                <Link href="https://github.com/aksundal/Dreams-of-skyrim">Github</Link>
                </List.Item>
                <List.Item>
                <b>PawPal - Interaksjonsdesign Haust 2024/ Høyskolen Kristiania, Oslo -  </b>
                Innsikt i interaksjonsprosessen og utarbeid ein interaktiv High- Fidelity prototype i Figma. 
                Utforme ein applikasjon som oppfyller eit brukerbehov: brukere som eige hunder og leiter etter eit nettverk for å sosialisere seg sjølv og hunden sin.
                Sikre at applikasjonen, PawPal, oppfyller krava til universell utforming.
                <Link href="https://www.figma.com/proto/AOlRiELkcT76itOTuEGeoc/Pawpal?node-id=229-198&p=f&t=goGHe3lcU5UvYfup-1&scaling=scale-down&content-scaling=fixed&page-id=129%3A914&starting-point-node-id=229%3A198">Github</Link>
                </List.Item>
                <List.Item>
                <b>Python Programming Vår 2025/ Høyskolen Kristiania, Oslo -  </b>
                Arbeide med grunnleggande og noko vidaregåande Python teknikker.
                Fokus på datastruktur og logisk kode som oppfyller oppgåvekrava.
                <Link href="https://github.com/aksundal/PGR107---Python-Programming">Github</Link>
                </List.Item>
                <List.Item>
                <b>Objektorientert orientert programmering Vår 2025/ Høyskolen Kristiania, Oslo - </b>
                Backend-løysning med Java og MySQL.
                Utvikle applikasjon basert på OOP konseptene: Objekter, arv, polymorfi, inkapsling og abstraksjon.
                Lage ein applikasjon som fokusere på god kodestruktur, gjenbrukbar kode og god databehandling.
                <Link href="https://github.com/aksundal/PGR112-konteksamenV25">Github</Link>
                </List.Item>
                <List.Item>
                <b>Kryssplattform Haust 2025/ Høyskolen Kristiania, Oslo -  </b>
                Utvikle mobilaplikasjoner med rammeverka React Native og Expo. Fokus på felles kodebase som funke på tvers av plattformer.
                <Link href="https://github.com/aksundal/Kryssplattform-HK-H25">Github</Link>
                </List.Item>
                <List.Item>
                <b>IOS Programming Haust 2025/ Høyskolen Kristiania, Oslo -  </b>
                Programmering i Swift. Utvikling av iOS-applikasjoner med UI rammeverk SwiftUI og UIKit.
                <Link href="https://github.com/aksundal/PG5602">Github</Link>
                </List.Item>
              </List>
            </Box>
          </Tabs.Panel>
          <Tabs.Panel value="Utdanning">
            <Box className='tabs-box'>
              <List as="ul" className="info-liste">
                <List.Item>
                  <b>Høyskole Kristiania Bachelorgrad Informasjonsteknologi, August 2023 - Juni 2026 - </b>
                  Spesialisering: Frontend- og mobilutvikling
                </List.Item>
              </List>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </section>
      <Heading size='large' className="sub-header"> Mine Hobbier! </Heading>
      <section id="hobbier">
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Innholdsproduksjon</Accordion.Header>
            <Accordion.Content>
              Elske å formidle historier gjennom foto, video og lyd.
              Like å utforske korleis kreativitet kan kombinerast med teknologi.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>
              Matlaging
            </Accordion.Header>
            <Accordion.Content>
            Får energi av å lage god mat frå botnen av og eksperimentere med nye smakar. 
            Har gjennom vervet mitt lært mange nye matlagingstekniker.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Strikking</Accordion.Header>
            <Accordion.Content>Strikking gir meg ro og fokus. 
              Det handlar om tålmodigheit, mønster og å sjå eit prosjekt vekse fram frå maske til maske.</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
    <footer>
      <Heading size="large">Ta Kontakt!</Heading>
      <p>Dykk når meg på <span><Link href="www.linkedin.com/in/anne-kristin-villar-sundal">Linked In</Link></span> og <Link href="https://github.com/aksundal/">GitHub</Link>.</p>
    </footer>
    </>
  )
}

export default App
