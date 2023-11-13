-- CreateTable
CREATE TABLE "Question" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "wrongAnswers" TEXT[],
    "quizId" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(256) NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uniqueQuizName" ON "Quiz"("name");

-- CreateIndex
CREATE INDEX "Quiz.name_index" ON "Quiz"("name");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
