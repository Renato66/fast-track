import dbConnection from "~/server/database/connection";

export default defineEventHandler(async () => {
  const [quizzes, total] = await dbConnection.$transaction([
    dbConnection.quiz.findMany({
      take: 15,
    }),
    dbConnection.quiz.count(),
  ]);

  return {
    total,
    items: quizzes.map((quiz) => ({
      id: quiz.id,
      title: `${quiz.name}`,
      description: `${quiz.name} quiz`,
      image: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/${quiz.name}/scale?width=500&aspectRatio=0.71&format=jpeg`,
    })),
  };
});
