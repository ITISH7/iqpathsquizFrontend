import axios from "axios";

export class Service {
  async GenerateThought() {
    try {
      return await axios.get("/user/thought");
    } catch (error) {
      console.log("Service :: GenerateThought :: error", error);
      throw error;
    }
  }
  async GetSubjects() {
    try {
      return await axios.get("/user/giveSubjects");
    } catch (error) {
      console.log("Service :: GetTopics :: error", error);
      throw error;
    }
  }

  async GetTopics(subjectName) {
    try {
      return await axios.post("/user/giveTopics", { subjectName });
    } catch (error) {
      console.log("Service :: GetTopics :: error", error);
      throw error;
    }
  }

  async GenerateSampleQuestions(subjectName) {
    try {
      return await axios.post("/user/sampleQuestions", {
        subjectName: subjectName,
      });
    } catch (error) {
      console.log("Service :: GenerateSampleQuestions :: error", error);
      throw error;
    }
  }
  
  async SaveSampleQuestions({ id, questionsId }) {
    try {
      return await axios.post("/user/one1", {
        id,
        questionsId,
      });
    } catch (error) {
      console.log("Service :: SaveSampleQuestions :: error", error);
      throw error;
    }
  }

  async GenerateTestQuestions({ subjectName, topicName }) {
    try {
      return await axios.post("/user/testFullSubject", {
        subjectName,
        topicName,
      });
    } catch (error) {
      console.log("Service :: GenerateTestQuestions :: error", error);
      throw error;
    }
  }

  async SubmitTest({ id, subjectName, questions, totalMarks, totalScore }) {
    console.log("test submit chala hai")
    try {
      const result = await axios.post("/user/acceptResult", {
        id,
        subjectName,
        questions,
        totalMarks,
        totalScore,
      });
      console.log("Service :: SubmitTest :: result", result);
      if (result) {
        return result;
      } else {
        throw new Error("Test submission failed");
      }
    } catch (error) {
      console.log("Service :: SubmitTest :: error", error);
      throw error;
    }
  }

  async GetSubjectResult(id, subjectName) {
    try {
      return await axios.post("/user/testDetailsByUserIndividually", {
        id,
        subjectName,
      });
    } catch (error) {
      console.log("Service :: GetTestResults :: error", error);
      throw error;
    }
  }

  async GetAllSubjectResult(id) {
    try {
      return await axios.post("/user/resultD", { id });
    } catch (error) {
      console.log("Service :: GetTestResults :: error", error);
      throw error;
    }
  }

  async GetDiffucltyWisePieCharts(id) {
    try {
      return await axios.post("/user/pieChart", { id });
    } catch (error) {
      console.log("Service :: GetDiffucltyWisePieCharts :: error", error);
      throw error;
    }
  }

  async SaveNotes({ userId, questionId, notes }) {
    try {
      return await axios.post("/user/enterNotes", {
        userId,
        questionId,
        notes
      });
    } catch (error) {
      console.log("Service :: SaveNotes :: error", error);
      throw error;
    }
  }

  async GetNotes({ userId, questionId }) {
    try {
      return await axios.post("/user/fetchNotes", {
        userId,
        questionId
      });
    } catch (error) {
      console.log("Service :: GetNotes :: error", error);
      throw error;
    }
  }

  async SampleQuestionSaveAndReview({ userId, questionId, subjectName, difficulty,  status }) {
    try {
      return await axios.post("/user/sampleQuestionSaveAndReview", {
        userId,
        questionId,
        subjectName,
        difficulty,
        status
      });
    } catch (error) {
      console.log("Service :: SampleQuestionSaveAndReview :: error", error);
      throw error;
    }
  }

  async CourseProgressGraph({ userId }) {
    try {
      return await axios.post("/user/barGraph", {
        userId
      });
    } catch (error) {
      console.log("Service :: CourseProgressGraph :: error", error);
      throw error;
    }
  }

   


}
