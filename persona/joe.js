// Joe is interested in everyday stuff outside of an organization
persona.joe = YAML.parse(`

agenda:

  following:
    - topic: Space Exploration
    - topic: Climate Change
    - topic: COVID-19

  watching:
    - topic: Economy
    - topic: Education

  recommended:
    - topic: Sci-Fi Movies
    - topic: Crypto Currencies
    - topic: High Tech

progress:
  - title: SpaceX launches Falcon 9
    details: Falcon 9 is the first orbital class rocket capable of reflight
  - title: Blue Origin brought tourists to space
    details: Blue Origin brought the first official tourists to space

calendar:
  - event: Conference on James Webb Space Telescope
    host: NASA
    time: 14:00
    action: Watch

`);
