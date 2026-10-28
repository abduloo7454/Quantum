/*
  Topics for the Quantum Computing site.
  The first page builds its cards from this list, and the visual map
  (added later) will draw the same topics as nodes, with a line for
  every entry in "related".

  To add a topic: copy one block, give it a new id, and list the ids
  of the topics it connects to. "page" stays empty until that topic
  has its own page.
*/
const TOPICS = [
  {
    id: "qubits",
    title: "Qubits",
    summary: "The basic unit of quantum information. A qubit can be in a superposition of 0 and 1, and several qubits can be entangled.",
    related: [],
    page: "",
  },
  {
    id: "gates",
    title: "Quantum gates and circuits",
    summary: "Operations that change the state of qubits, combined into circuits that carry out a computation.",
    related: ["qubits"],
    page: "",
  },
  {
    id: "algorithms",
    title: "Quantum algorithms",
    summary: "Procedures such as Shor's factoring and Grover's search that use superposition and interference to solve some problems faster than the best known classical methods.",
    related: ["gates"],
    page: "",
  },
  {
    id: "qec",
    title: "Quantum error correction",
    summary: "Ways to protect quantum information from noise by spreading one logical qubit across many physical qubits.",
    related: ["qubits", "gates"],
    page: "",
  },
  {
    id: "qml",
    title: "Quantum machine learning",
    summary: "Learning models built from quantum circuits, and the open question of when they actually help.",
    related: ["gates", "algorithms"],
    page: "",
  },
];
