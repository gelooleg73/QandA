import React from 'react';
import { Page } from './Page';
import { Form } from './Form';
import { Field } from './Field';

//export const AskPage = () => <Page title="Ask a question" />;

//const AskPage = lazy(() => import('./AskPage'));

export const AskPage = () => (
  <Page title="Ask a Question">
    <Form submitCaption="Submit Your Question">
      <Field name="title" label="Title" />
      <Field name="content" label="Content" type="TextArea" />
    </Form>
  </Page>
);
export default AskPage;
