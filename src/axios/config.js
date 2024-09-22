import axios from "axios";

export class Service{

    async GenerateTestQuestions({subjectName, topicName}) {
       try {
        return await axios.post("/user/testFullSubject", {subjectName, topicName});
       } catch (error) {
            console.log("Service :: GenerateTestQuestions :: error", error);
            throw error;
        }
    }

    // async GenerateSampleQuestions({subjectName}) {
    //     try {
    //         return await axios.post("/user/sampleQuestions");
    //     } catch (error) {
    //         console.log("Service :: GenerateSampleQuestions :: error", error);
    //         throw error;
    //     }
    // }

    
    
    async SubmitTest({token, subjectName, topicName, questionsId, answerByUser, answerOfQuestion, markAlloted}) {
        try {
            const result = await axios.post("/user/acceptResult", {token, subjectName, topicName, questionsId, answerByUser, answerOfQuestion, markAlloted});
            if(result){
                return result;
            }
            else {
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

