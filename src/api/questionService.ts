import { api } from "./api";
import type { Question, QuestionResponse } from "../types";
import { decodeHtml } from "../helpers/stringUtils";

async function getQuestions(count: number): Promise<Question[]> {
  const { data } = await api.get<QuestionResponse>(`/api.php?amount=${count}`);
  // Decode each field
  const decodedResults = data.results.map((q) => ({
    ...q,
    question: decodeHtml(q.question),
    category: decodeHtml(q.category),
    difficulty: decodeHtml(q.difficulty),
    correctAnswer: decodeHtml(q.correctAnswer),
    incorrectAnswers: q.incorrectAnswers.map((item) => decodeHtml(item)),
  }));

  return decodedResults;
}

export { getQuestions };
