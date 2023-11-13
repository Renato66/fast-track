import dbConnection from "~/server/database/connection";

export type RankPostBody = {
  email: string;
  quizId: string;
  answers: string[];
  time: number;
};

export default defineEventHandler(async (event) => {
  const { email, quizId, answers, time } = (await readBody(
    event
  )) as RankPostBody;

  const score = await dbConnection.question.count({
    where: {
      quizId,
      answer: {
        in: answers,
      },
    },
  });

  await dbConnection.rank.create({
    data: {
      email,
      score,
      quizId,
      time,
    },
  });

  const [betterThen, total] = await dbConnection.$transaction([
    dbConnection.rank.count({
      where: {
        score,
        time: {
          lt: time,
        },
      },
      orderBy: [
        {
          score: "asc",
        },
        {
          time: "asc",
        },
      ],
    }),
    dbConnection.rank.count({
      where: {
        quizId,
      },
    }),
  ]);

  return {
    betterThenPercentage: Number(((betterThen / total) * 100).toFixed(2)),
    score,
  };
});
