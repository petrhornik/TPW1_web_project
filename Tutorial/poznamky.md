**General poznamky k tutorialu**

    - struktura
      - src -> hl. složka projektu
        - pages -> složka se samotnými stránkami
                - lze mít i složku s .md soubory a každý soubor reprezentuje samostatnou podstránku složky
        - styles -> složka pro .css soubory
        - components -> zde jsou definovány komponenty pro opakované použití
        - scripts -> pro .js soubory (nebo .ts)
        - layouts -> pro šablonové soubory skrze které se bude finální content a stránky renderovat

# Layout basics

<slot /> - určije mi místo kam se mi v layoutut bude vkládat content, který ve stránce do layoutu vkládám

- když chci do layoutu passnot specifickou proměnnou definuju ji do wrapperu jako HTML attribut
    -> ten následně importuju v layoutu stejně jako v komponentě pomocí Astro.props;
    -> viz.: index.astro a BaseLayout.astro

- layout lze vytvořit i .md souborům
  - vytvořím si layout s prom. frontmatter vytaženou s Astro.props
    - tento layout si pak naimportuju do .md souboru
    - frontmatter je objekt co v sobě obsahuje veškerá data z proměnných v --- v .md souboru

- frontmatter -> součást YAML pro formátování právě .md souborů

# Dynamický listing

  - na hromadné vykreslení odkazů na všechny položky v nějaké složce v /pages
    - v mém případě /posts lze použít import.meta.glob()
      - vrací Array objektů pro každý soubor v mé případě post (.md soubor)
      - bere celé soubory jako objekty do arraye (můžu si u každého vypsat celý content...)

# Dynamický routing

  - lze generovat více stánkem současně pomocí .astro souborů co exportují getStaticPaths()
    - fce. mi vrací array s routami na stránky, které budou všechny používat stejný template definovaný přávě v tom samém souboru

  - název použitý co dám v URL routě v prohlížeči míst [tag] se mi následně pomocí Astro.params dostane do onoho souboru a můžu s contentem manipulovat
    - steně jako raq.params v ExpressJS
    - do každé routy potom lze přidat opět propy jako do samostatných komponent a ty si následně v tempatu dole rozepsat viz.: [tag].astro

# Index page ve složce

  - když mám v /pages umístěnou složku s více soubory
    - dynamicky routing, posty (.md), apod.
  - můžu přidat index.astro a to se zobrazí, když v URL dám jen název složky bez pokračování

  - např.: když místo /tags/neco dám jen /tags tak se mi právě vyrenderuje index se vložce /tags a když neexistuje vátí se not found

  - jedná o feature ze static routeru co mi poskytuje Astro

# RSS feed integrace

  - Astro má vlastní package pro implementaci RSS fce. např. pro blogové weby
    - nejdřív vytvořím speciální .xml feed dokument přímo v pages
      - uvnitř je příkladový kód

    - následně musím přidat site parament do astro.config.mjs
    - hotovka

# Přidání iteraktivity pomocí UI frameworku

tip - v tutorialu se používá Preact (podobné klasickému Reactu)

  - UI framework přidám pomocí npx astro add ...
  - Klasika jako v Reactu -> tvořím interaktivní kompletně client side rendered komponenty
    - useState returns :P