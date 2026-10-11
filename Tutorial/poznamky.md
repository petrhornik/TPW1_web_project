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