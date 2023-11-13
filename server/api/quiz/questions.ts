import dbConnection from "~/server/database/connection";
import shuffleArray from "~/server/api/utils/shuffleArray";

export type Question = {
  id: string;
  question: string;
  answers: string[];
};

export type QuestionsGetQuery = {
  quizId: string;
};

export default defineEventHandler(async (event): Promise<Question[]> => {
  const { quizId } = getQuery(event) as QuestionsGetQuery;
  const questions = await dbConnection.question
    .findMany({
      where: {
        quizId,
      },
    })
    .catch(() => {
      throw createError({
        statusCode: 400,
        statusMessage: "Questions not found",
      });
    });

  return questions.map(({ id, question, answer, wrongAnswers }) => ({
    id,
    question,
    answers: shuffleArray([answer, ...wrongAnswers]),
  }));
});
