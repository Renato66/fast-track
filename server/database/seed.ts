import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedQuiz() {
  const marvelList = [
    "7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D",
    "7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B",
    "52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F",
    "C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721",
    "2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360",
    "DB81FFA55537B7021F8656FF0BE79D5A5153EA25C2474A83BFAB6E714E81CB53",
    "7BD6265B65C2956ACCB44E13778A5A67DB2E7786DA88768654E1F53D1F44B907",
    "B44FE70953E3765853134FE4C632C4C25D51D1DDF5DCB4F4105B419D410FFE19",
    "59CBA35AB929C8A53706D0412754BD7A338BB37813D104DBEAF69444D5ABF79D",
    "FE9AA3E685B55B382DDBF77DA3E679DA343A70FC1308837D6E2296459E03F417",
    "9C5F8728CD265CD3C22B3F6356B2514F3C112D9B874D1553665C0855702B1BB3",
    "D7FDD68992FA1EA5F6B0B09D7C4D170908EF457ECEBE1808A170CBE8EA36F5FD",
    "EEE09E81171ED8EBF20FF8052920838990F9626F58211628B6D8DECBCD1389AB",
    "FA6235F6977391952DBBCDADF2B4A76CF712FBA11719A17EA58C2171DAC4641E",
    "3B909145E05EC6E0E3F3004B2BCECC74C39D0AE42DB64C81C5088160F636DA6E",
  ];
  const questions = [
    {
      question: "Who is known as the 'God of Thunder' in Marvel?",
      answer: "Thor",
      wrongAnswers: ["Loki", "Iron Man", "Captain America"],
    },
    {
      question: "What is the real name of Deadpool?",
      answer: "Wade Wilson",
      wrongAnswers: ["Peter Parker", "Logan", "Tony Stark"],
    },
    {
      question: "Which Infinity Stone is associated with the color green?",
      answer: "Time Stone",
      wrongAnswers: ["Power Stone", "Reality Stone", "Mind Stone"],
    },
    {
      question: "What is the name of Tony Stark's AI assistant?",
      answer: "J.A.R.V.I.S.",
      wrongAnswers: ["Friday", "Ultron", "Vision"],
    },
    {
      question: "Who is the arch-nemesis of the Black Panther?",
      answer: "Erik Killmonger",
      wrongAnswers: ["Ulysses Klaue", "M'Baku", "The Mandarin"],
    },
  ];
  await prisma.$transaction(
    marvelList.map((film) =>
      prisma.quiz.create({
        data: {
          name: film,
          questions: {
            createMany: {
              data: questions,
            },
          },
        },
      })
    )
  );
}

async function main() {
  await seedQuiz();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
