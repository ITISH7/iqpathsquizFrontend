import axios from "axios";


export class Service{


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
            return await axios.post("/user/giveTopics", {subjectName});
        } catch (error) {
            console.log("Service :: GetTopics :: error", error);
            throw error;
        }
    }

    async GenerateTestQuestions({subjectName, topicName}) {
       try {
        return await axios.post("/user/testFullSubject", {subjectName, topicName});
       } catch (error) {
            console.log("Service :: GenerateTestQuestions :: error", error);
            throw error;
        }
    }

    async GenerateSampleQuestions(subjectName) {
        try {
            return await axios.post("/user/sampleQuestions", {subjectName: subjectName});
        } catch (error) {
            console.log("Service :: GenerateSampleQuestions :: error", error);
            throw error;
        }
    } 

    async GetAllSubjectResult(id) {
        try {
            return await axios.post("/user/resultD", {id});
        } catch (error) {
            console.log("Service :: GetTestResults :: error", error);
            throw error;
        }
    }
    async GetSubjectResult(id, subjectName) {
        try {
            return await axios.post("/user/testDetailsByUserIndividually", {id, subjectName});
        } catch (error) {
            console.log("Service :: GetTestResults :: error", error);
            throw error;
        }
    }

    
    async SubmitTest({ id, subjectName, questions, totalMarks, totalScore }) {
        try {

            const result = await axios.post("/user/acceptResult", { id, subjectName , questions, totalMarks, totalScore }, 
            );
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
    
    async GenerateThought() {
        try {
            return await axios.get("/user/thought");
        } catch (error) {
            console.log("Service :: GenerateThought :: error", error);
             throw error;
        }
     }

  

}

