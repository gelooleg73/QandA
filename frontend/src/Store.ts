import { QuestionData } from './QuestionsData';
import { Action } from 'redux';

interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[] | null;
  readonly postedResult?: QuestionData;
}
export interface AppState {
  readonly questions: QuestionsState;
}

export interface GotUnansweredQuestionsAction
  extends Action<'GotUnansweredQuestions'> {
  questions: QuestionData[];
}
export interface PostedQuestionAction extends Action<'PostedQuestion'> {
  result: QuestionData | undefined;
}

interface GettingUnansweredQuestionsAction
  extends Action<'GettingUnansweredQuestions'> {}

const initialQuestionState: QuestionsState = {
  loading: false,
  unanswered: null,
};

type QuestionsActions =
  | GettingUnansweredQuestionsAction
  | GotUnansweredQuestionsAction
  | PostedQuestionAction;
