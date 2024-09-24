import React, { useEffect } from 'react';
import { Service } from '../../axios/config';
import QuestionTopicDropDown from '../QuestionTopicDropDown/QuestionTopicDropDown';

function QuestionContainer() {  // Capitalized component name
  const [subjects, setSubjects] = React.useState([]);

  const service = new Service();

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    const response = await service.GetSubjects();
    const gotSubjects = response.data.data;
    setSubjects(gotSubjects);
    console.log('response:', response.data.data);
    return response;
  };

  return (
    <>
      {subjects && subjects.length > 0 && (
        subjects.map((subject, index) => (
          <QuestionTopicDropDown key={index} subjectName={subject.subjectName} />
        ))
      )}
    </>
  );
}

export default QuestionContainer;
