const questions = [
    {
        question: "Qual discípulo andou sobre as águas com Jesus?",
        answers: [
            { text: "João", correct: false },
            { text: "Tiago", correct: false },
            { text: "Pedro", correct: true },
            { text: "André", correct: false }
        ],
        explanation: "Pedro foi o único discípulo que andou sobre as águas com Jesus, embora tenha começado a afundar quando duvidou (Mateus 14:29)."
    },
    {
        question: "Qual era a profissão de José, pai adotivo de Jesus?",
        answers: [
            { text: "Pescador", correct: false },
            { text: "Carpinteiro", correct: true },
            { text: "Pastor", correct: false },
            { text: "Comerciante", correct: false }
        ],
        explanation: "José era carpinteiro, profissão que também ensinou a Jesus (Mateus 13:55)."
    },
    {
        question: "Quantos filhos tinha Jó antes da provação?",
        answers: [
            { text: "Sete filhos e três filhas", correct: true },
            { text: "Três filhos e sete filhas", correct: false },
            { text: "Cinco filhos e cinco filhas", correct: false },
            { text: "Dez filhos", correct: false }
        ],
        explanation: "Jó tinha sete filhos e três filhas antes das provações (Jó 1:2)."
    },
    {
        question: "Qual profeta foi engolido por um grande peixe?",
        answers: [
            { text: "Jonas", correct: true },
            { text: "Elias", correct: false },
            { text: "Eliseu", correct: false },
            { text: "Jeremias", correct: false }
        ],
        explanation: "Jonas foi engolido por um grande peixe quando tentava fugir do chamado de Deus para pregar em Nínive (Jonas 1:17)."
    },
    {
        question: "Quem foi chamado 'amigo de Deus' nas escrituras?",
        answers: [
            { text: "Moisés", correct: false },
            { text: "Davi", correct: false },
            { text: "Abraão", correct: true },
            { text: "Salomão", correct: false }
        ],
        explanation: "Abraão foi chamado amigo de Deus por sua grande fé e obediência (Tiago 2:23)."
    },
    {
        question: "Qual foi o sinal da aliança de Deus com Noé?",
        answers: [
            { text: "Uma estrela", correct: false },
            { text: "O arco-íris", correct: true },
            { text: "Uma pomba", correct: false },
            { text: "Uma nuvem", correct: false }
        ],
        explanation: "O arco-íris foi estabelecido como sinal da aliança de Deus com Noé, prometendo nunca mais destruir a terra por dilúvio (Gênesis 9:13)."
    },
    {
        question: "Qual personagem bíblico teve sua força nos cabelos?",
        answers: [
            { text: "Davi", correct: false },
            { text: "Sansão", correct: true },
            { text: "Samuel", correct: false },
            { text: "Saul", correct: false }
        ],
        explanation: "Sansão tinha sua força sobrenatural em seus cabelos como parte de seu voto de nazireu (Juízes 16:17)."
    },
    {
        question: "Quantos anos Jesus viveu na terra?",
        answers: [
            { text: "30 anos", correct: false },
            { text: "33 anos", correct: true },
            { text: "35 anos", correct: false },
            { text: "40 anos", correct: false }
        ],
        explanation: "Jesus viveu aproximadamente 33 anos, iniciando seu ministério aos 30 e servindo por cerca de 3 anos."
    },
    {
        question: "Quem sucedeu Moisés na liderança de Israel?",
        answers: [
            { text: "Calebe", correct: false },
            { text: "Josué", correct: true },
            { text: "Arão", correct: false },
            { text: "Samuel", correct: false }
        ],
        explanation: "Josué foi escolhido por Deus para suceder Moisés e liderar o povo de Israel à Terra Prometida (Josué 1:1-2)."
    },
    {
        question: "Qual foi a primeira mulher juíza de Israel?",
        answers: [
            { text: "Rute", correct: false },
            { text: "Ester", correct: false },
            { text: "Débora", correct: true },
            { text: "Noemi", correct: false }
        ],
        explanation: "Débora foi uma profetisa e a única mulher juíza de Israel registrada na Bíblia (Juízes 4:4)."
    },
    {
        question: "Em qual monte Moisés recebeu os Dez Mandamentos?",
        answers: [
            { text: "Monte Sinai", correct: true },
            { text: "Monte Carmelo", correct: false },
            { text: "Monte das Oliveiras", correct: false },
            { text: "Monte Hebron", correct: false }
        ],
        explanation: "Moisés recebeu os Dez Mandamentos no Monte Sinai (Êxodo 19-20)."
    },
    {
        question: "Qual apóstolo era médico?",
        answers: [
            { text: "Marcos", correct: false },
            { text: "Lucas", correct: true },
            { text: "João", correct: false },
            { text: "Mateus", correct: false }
        ],
        explanation: "Lucas, o autor do terceiro evangelho e do livro de Atos, era médico (Colossenses 4:14)."
    },
    {
        question: "Qual era o nome do filho de Abraão com Sara?",
        answers: [
            { text: "Ismael", correct: false },
            { text: "Isaque", correct: true },
            { text: "Israel", correct: false },
            { text: "Esaú", correct: false }
        ],
        explanation: "Isaque foi o filho da promessa, nascido de Abraão e Sara em sua velhice (Gênesis 21:3)."
    },
    {
        question: "Qual cidade Jesus escolheu para seu primeiro milagre público?",
        answers: [
            { text: "Belém", correct: false },
            { text: "Jerusalém", correct: false },
            { text: "Caná", correct: true },
            { text: "Nazaré", correct: false }
        ],
        explanation: "Jesus realizou seu primeiro milagre público em Caná da Galileia, transformando água em vinho (João 2:11)."
    },
    {
        question: "Quem foi o primeiro mártir cristão?",
        answers: [
            { text: "Paulo", correct: false },
            { text: "Pedro", correct: false },
            { text: "Estêvão", correct: true },
            { text: "Tiago", correct: false }
        ],
        explanation: "Estêvão foi o primeiro mártir cristão, apedrejado por seu testemunho de fé (Atos 7:54-60)."
    },
    {
        question: "Qual era o nome original de Paulo antes de sua conversão?",
        answers: [
            { text: "Silas", correct: false },
            { text: "Saulo", correct: true },
            { text: "Simão", correct: false },
            { text: "Samuel", correct: false }
        ],
        explanation: "O nome original de Paulo era Saulo, que foi mudado após sua conversão no caminho para Damasco (Atos 13:9)."
    },
    {
        question: "Quantos anos durou a construção do Templo de Salomão?",
        answers: [
            { text: "3 anos", correct: false },
            { text: "5 anos", correct: false },
            { text: "7 anos", correct: true },
            { text: "10 anos", correct: false }
        ],
        explanation: "O Templo de Salomão levou 7 anos para ser construído (1 Reis 6:38)."
    },
    {
        question: "Quem foi levado ao céu em uma carruagem de fogo?",
        answers: [
            { text: "Elias", correct: true },
            { text: "Enoque", correct: false },
            { text: "Eliseu", correct: false },
            { text: "Moisés", correct: false }
        ],
        explanation: "Elias foi arrebatado ao céu em uma carruagem de fogo (2 Reis 2:11)."
    },
    {
        question: "Quantos livros tem a Bíblia no total?",
        answers: [
            { text: "66 livros", correct: true },
            { text: "73 livros", correct: false },
            { text: "65 livros", correct: false },
            { text: "70 livros", correct: false }
        ],
        explanation: "A Bíblia Protestante contém 66 livros no total: 39 no Antigo Testamento e 27 no Novo Testamento."
    },
    {
        question: "Qual foi a última palavra de Jesus na cruz?",
        answers: [
            { text: "Consumado é", correct: true },
            { text: "Pai, perdoa-lhes", correct: false },
            { text: "Tenho sede", correct: false },
            { text: "Deus meu, Deus meu", correct: false }
        ],
        explanation: "A última palavra de Jesus na cruz foi 'Consumado é' (João 19:30)."
    }
];
