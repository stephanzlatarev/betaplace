// Ulf is following a lot of teams in his company and he needs to know about the important things without spending too much time in meetings and recordings
persona.ulf = YAML.parse(`

agenda:

  following:
    - topic: Kubernetes
    - topic: SAP Business Technology Platform
    - topic: Security

  watching:
    - topic: Security
    - topic: Programming Languages

  recommended:
    - topic: Data privacy
    - topic: Open source
    - topic: Cloud computing
    - topic: Observability

progress:
  - title: Critical Log4j vulnerability
    topic: Security
    details: A Log4j vulnerability allows malicious attackers to execute code remotely on any targeted computer
  - title: Gardener team releases open source project Landscaper
    topic: Kubernetes
    details: Landscaper provides the means to describe, install and maintain cloud-native landscapes.

calendar:
  - event: Sprint review
    host: Team Kube
    details: Demo of Kubernetes on Alibaba Cloud
    time: 14:00
    action: Watch

`);
