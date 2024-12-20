const questions = [
    {
        question: "Quem construiu a arca?",
        answers: [
            { text: "Abraão", correct: false },
            { text: "Noé", correct: true },
            { text: "Moisés", correct: false },
            { text: "Davi", correct: false }
        ],
        explanation: "Foi Noé quem construiu a arca seguindo as instruções específicas de Deus. Esta história está em Gênesis 6-9."
    },
    {
        question: "Qual foi o primeiro milagre de Jesus?",
        answers: [
            { text: "Multiplicação dos pães", correct: false },
            { text: "Cura de um cego", correct: false },
            { text: "Transformar água em vinho", correct: true },
            { text: "Ressurreição de Lázaro", correct: false }
        ],
        explanation: "Jesus transformou água em vinho em um casamento em Caná da Galileia. Este milagre está registrado em João 2:1-11."
    },
    {
        question: "Quem foi jogado na cova dos leões?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "Paulo", correct: false },
            { text: "Pedro", correct: false },
            { text: "José", correct: false }
        ],
        explanation: "Daniel foi lançado na cova dos leões por continuar orando a Deus, mesmo após a proibição do rei. A história está em Daniel 6."
    },
    {
        question: "Quem negou Jesus três vezes?",
        answers: [
            { text: "João", correct: false },
            { text: "Tiago", correct: false },
            { text: "Pedro", correct: true },
            { text: "André", correct: false }
        ],
        explanation: "Pedro negou conhecer Jesus três vezes antes do galo cantar, conforme Jesus havia predito. Este evento está registrado em todos os quatro evangelhos."
    },
    {
        question: "Qual profeta foi arrebatado ao céu em um carro de fogo?",
        answers: [
            { text: "Elias", correct: true },
            { text: "Eliseu", correct: false },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false }
        ],
        explanation: "Elias foi arrebatado ao céu em um redemoinho, em um carro de fogo puxado por cavalos de fogo, conforme registrado em 2 Reis 2:11."
    },
    {
        question: "Em qual cidade Jesus nasceu?",
        answers: [
            { text: "Jerusalém", correct: false },
            { text: "Nazaré", correct: false },
            { text: "Belém", correct: true },
            { text: "Cafarnaum", correct: false }
        ],
        explanation: "Jesus nasceu em Belém da Judeia, cumprindo a profecia do Antigo Testamento em Miqueias 5:2."
    },
    {
        question: "Quem foi o pai de Salomão?",
        answers: [
            { text: "Saul", correct: false },
            { text: "Davi", correct: true },
            { text: "Josias", correct: false },
            { text: "Samuel", correct: false }
        ],
        explanation: "Salomão era filho do Rei Davi com Bate-Seba e se tornou o terceiro rei de Israel, sucessor de seu pai."
    },
    {
        question: "Qual foi a primeira mulher criada por Deus?",
        answers: [
            { text: "Maria", correct: false },
            { text: "Sara", correct: false },
            { text: "Eva", correct: true },
            { text: "Rute", correct: false }
        ],
        explanation: "Eva foi a primeira mulher, criada por Deus a partir da costela de Adão, conforme descrito em Gênesis 2:21-22."
    },
    {
        question: "Quais eram os nomes dos primeiros filhos de Adão e Eva?",
        answers: [
            { text: "Caim e Abel", correct: true },
            { text: "Jacó e Esaú", correct: false },
            { text: "Ismael e Isaque", correct: false },
            { text: "Sem e Cam", correct: false }
        ],
        explanation: "Caim e Abel foram os primeiros filhos de Adão e Eva. Caim era agricultor e Abel pastor de ovelhas, conforme Gênesis 4."
    },
    {
        question: "Quantos anos durou a construção da Arca de Noé?",
        answers: [
            { text: "40 anos", correct: false },
            { text: "100 anos", correct: true },
            { text: "20 anos", correct: false },
            { text: "70 anos", correct: false }
        ],
        explanation: "De acordo com Gênesis 5:32 e 7:6, Noé levou aproximadamente 100 anos para construir a arca, seguindo as instruções específicas de Deus."
    },
    {
        question: "Qual era o nome da mulher de Abraão?",
        answers: [
            { text: "Sara", correct: true },
            { text: "Raquel", correct: false },
            { text: "Rebeca", correct: false },
            { text: "Lia", correct: false }
        ],
        explanation: "Sara era a esposa de Abraão. Seu nome original era Sarai, mas Deus mudou para Sara (Gênesis 17:15)."
    },
    {
        question: "Quantos dias e noites Jesus jejuou no deserto?",
        answers: [
            { text: "20 dias", correct: false },
            { text: "30 dias", correct: false },
            { text: "40 dias", correct: true },
            { text: "50 dias", correct: false }
        ],
        explanation: "Jesus jejuou por 40 dias e 40 noites no deserto, onde foi tentado por Satanás (Mateus 4:1-2)."
    },
    {
        question: "Qual instrumento musical Davi tocava?",
        answers: [
            { text: "Harpa", correct: true },
            { text: "Flauta", correct: false },
            { text: "Tambor", correct: false },
            { text: "Trombeta", correct: false }
        ],
        explanation: "Davi tocava harpa para acalmar o rei Saul quando este era atormentado (1 Samuel 16:23)."
    },
    {
        question: "Quem era o mais forte dos juízes de Israel?",
        answers: [
            { text: "Gideão", correct: false },
            { text: "Sansão", correct: true },
            { text: "Débora", correct: false },
            { text: "Jefté", correct: false }
        ],
        explanation: "Sansão era conhecido por sua força sobrenatural, que vinha de seu cabelo nunca cortado (Juízes 13-16)."
    },
    {
        question: "Qual apóstolo era cobrador de impostos antes de seguir Jesus?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "João", correct: false },
            { text: "Mateus", correct: true },
            { text: "Filipe", correct: false }
        ],
        explanation: "Mateus (também chamado Levi) era cobrador de impostos antes de ser chamado por Jesus (Mateus 9:9)."
    },
    {
        question: "Qual era o nome do jardim onde Adão e Eva viviam?",
        answers: [
            { text: "Jardim do Éden", correct: true },
            { text: "Jardim da Vida", correct: false },
            { text: "Jardim Celestial", correct: false },
            { text: "Jardim Sagrado", correct: false }
        ],
        explanation: "O Jardim do Éden era o paraíso onde Adão e Eva viviam antes da queda (Gênesis 2:8)."
    },
    {
        question: "Quem foi o primeiro rei de Israel?",
        answers: [
            { text: "Davi", correct: false },
            { text: "Samuel", correct: false },
            { text: "Saul", correct: true },
            { text: "Salomão", correct: false }
        ],
        explanation: "Saul foi o primeiro rei de Israel, ungido pelo profeta Samuel (1 Samuel 10:1)."
    },
    {
        question: "Qual dos evangelhos foi escrito por um médico?",
        answers: [
            { text: "Mateus", correct: false },
            { text: "Marcos", correct: false },
            { text: "Lucas", correct: true },
            { text: "João", correct: false }
        ],
        explanation: "Lucas, que era médico, escreveu o terceiro evangelho e também o livro de Atos (Colossenses 4:14)."
    },
    {
        question: "Quantos dias Jesus permaneceu na terra após sua ressurreição?",
        answers: [
            { text: "30 dias", correct: false },
            { text: "40 dias", correct: true },
            { text: "50 dias", correct: false },
            { text: "60 dias", correct: false }
        ],
        explanation: "Jesus permaneceu na terra por 40 dias após sua ressurreição, antes de sua ascensão (Atos 1:3)."
    },
    {
        question: "Qual era o nome do sogro de Moisés?",
        answers: [
            { text: "Balaão", correct: false },
            { text: "Jetro", correct: true },
            { text: "Labão", correct: false },
            { text: "Anás", correct: false }
        ],
        explanation: "Jetro era o sogro de Moisés e sacerdote de Midiã (Êxodo 3:1)."
    }
];