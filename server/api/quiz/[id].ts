import dbConnection from "~/server/database/connection";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const quiz = await dbConnection.quiz
    .findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            questions: true,
          },
        },
      },
    })
    .catch(() => {
      throw createError({
        statusCode: 400,
        statusMessage: "Quiz not found",
      });
    });

  return {
    title: `${quiz.name}`,
    description: `${quiz.name} quiz`,
    image: "/default.png",
  };
});
