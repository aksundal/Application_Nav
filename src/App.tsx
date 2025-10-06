import './App.css'
import heroImage from "./assets/Profilbilde CV 1.jpg";
import { Heading, Tabs, Box, List, Accordion, Link } from '@navikt/ds-react'
import { ClockIcon } from '@navikt/aksel-icons';

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
      <Heading size="medium" className="subHeader"> Om Meg! </Heading>
      <section id="hero">
        <div id="hero-text">
          <Heading size="small">Vyrde rekrutteringsteamet i NAV,</Heading>
          <p>
            Eg studerer informasjonsteknologi med spesialisering i frontend- og mobilutvikling ved Høyskolen Kristiania, 
og blir ferdig våren 2026. Då eg såg utlysinga dykkar å kjende eg meg umiddelbart igjen i beskrivinga av kva dykk ser etter: 
ein nysgjerrig, samarbeidsorientert og engasjert utviklar som vil bidra til noko som faktisk betyr noko.
          </p>
        </div>
        <div id="hero-img" >
          <img src={heroImage}/>
        </div>
      </section>
      <Heading size="medium" className="ssub-header"> Min Erfaring! </Heading>
      <section id="experience">
        <Tabs defaultValue="Erfaring">
          <Tabs.List>
            <Tabs.Tab value="Erfaring" label="Erfaring" icon={<ClockIcon aria-hidden/>}/>
            <Tabs.Tab value="Ferdigheter" label="Ferdigheter" icon={<ClockIcon aria-hidden/>}/>
            <Tabs.Tab value="Prosjekter" label="Prosjekter" icon={<ClockIcon aria-hidden/>}/>
            <Tabs.Tab value="Utdanning" label="Utdanning" icon={<ClockIcon aria-hidden/>}/>
          </Tabs.List>
          <Tabs.Panel value="Erfaring">
            <Box width="100%" height="20rem" padding="space-16">
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
            <Box width="100%" height="20rem" padding="space-16">
              <List as="ul" className="info-liste">
                <List.Item>
                Tekniske: Java, Kotlin, Swift, Javascript/Typescript, React, React Native, C#, SQL, Unity
                </List.Item>
                <List.Item>
                  har full eller gradert uføretrygd, men ønsker å jobbe. Nav må ha vurdert om
                  andre arbeidsmarkedstiltak og virkemidler er aktuelle, eller
                </List.Item>
                <List.Item>
                  er en arbeidssøker med varig og vesentlig nedsatt arbeidsevne som kan bli
                  ansatt i en vanlig jobb.
                </List.Item>
              </List>
            </Box>
          </Tabs.Panel>
          <Tabs.Panel value="Prosjekter">
            <Box width="100%" height="20rem" padding="space-16">
              <List as="ul" className="info-liste">
                <List.Item>
                  står i fare for å miste jobben etter å ha vært sykmeldt helt eller delvis i
                  12 måneder,
                </List.Item>
                <List.Item>
                  har full eller gradert uføretrygd, men ønsker å jobbe. Nav må ha vurdert om
                  andre arbeidsmarkedstiltak og virkemidler er aktuelle, eller
                </List.Item>
                <List.Item>
                  er en arbeidssøker med varig og vesentlig nedsatt arbeidsevne som kan bli
                  ansatt i en vanlig jobb.
                </List.Item>
              </List>
            </Box>
          </Tabs.Panel>
          <Tabs.Panel value="Utdanning">
            <Box width="100%" height="20rem" padding="space-16">
              <List as="ul" className="info-liste">
                <List.Item>
                  står i fare for å miste jobben etter å ha vært sykmeldt helt eller delvis i
                  12 måneder,
                </List.Item>
                <List.Item>
                  har full eller gradert uføretrygd, men ønsker å jobbe. Nav må ha vurdert om
                  andre arbeidsmarkedstiltak og virkemidler er aktuelle, eller
                </List.Item>
                <List.Item>
                  er en arbeidssøker med varig og vesentlig nedsatt arbeidsevne som kan bli
                  ansatt i en vanlig jobb.
                </List.Item>
              </List>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </section>
      <Heading size='medium' className="sub-header"> Mine Hobbier! </Heading>
      <section id="hobbier">
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Innholdsproduksjon</Accordion.Header>
            <Accordion.Content>
              Elske å formidle historier gjennom foto, video og lyd. 
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>
              Matlaging
            </Accordion.Header>
            <Accordion.Content>
              Info om hobby 2
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Strikking</Accordion.Header>
            <Accordion.Content>Info om hobby 3</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
    </>
  )
}

export default App
