"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineRagStatus = exports.extractKeyAreasOfRisk = exports.summarizeDoc = exports.projectRiskAss = void 0;
const openai_1 = require("langchain/llms/openai");
const chains_1 = require("langchain/chains");
const text_splitter_1 = require("langchain/text_splitter");
const openai_2 = require("langchain/embeddings/openai");
const hnswlib_1 = require("langchain/vectorstores/hnswlib");
const chains_2 = require("langchain/chains");
class ProjectRiskAss {
    /**
     * Implement text summarization following LangChain.js documentation
     * Link: https://js.langchain.com/docs/modules/chains/popular/summarize
     * **/
    async summarizeDoc(projectText) {
        try {
            const model = new openai_1.OpenAI({ temperature: 0 });
            const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 400 });
            const docs = await textSplitter.createDocuments([projectText]);
            const chain = (0, chains_1.loadSummarizationChain)(model, { type: "map_reduce" });
            return await chain.call({ input_documents: docs });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    /**
     * Implementation follows the LangChain.js documentation (Custom QA chain)
     * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
     * **/
    async extractKeyAreasOfRisk(projectText) {
        try {
            const QUERY = "What are  the key areas of risk in the document?";
            const model = new openai_1.OpenAI({});
            const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 1000 });
            const docs = await textSplitter.createDocuments([projectText]);
            const vectorStore = await hnswlib_1.HNSWLib.fromDocuments(docs, new openai_2.OpenAIEmbeddings());
            const retriever = vectorStore.asRetriever();
            const relevantDocs = await retriever.getRelevantDocuments(QUERY);
            const mapReduceChain = (0, chains_2.loadQAMapReduceChain)(model);
            return await mapReduceChain.invoke({
                question: QUERY,
                input_documents: relevantDocs,
            });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    /**
     * Implementation follows the LangChain.js documentation (Custom QA chain)
     * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
     * **/
    async determineRagStatus(projectText) {
        try {
            const QUERY = "What would be the appropriate RAG (Red, Amber, Green) status based on the complexity of the project described in the document?";
            const model = new openai_1.OpenAI({});
            const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 1000 });
            const docs = await textSplitter.createDocuments([projectText]);
            const vectorStore = await hnswlib_1.HNSWLib.fromDocuments(docs, new openai_2.OpenAIEmbeddings());
            const retriever = vectorStore.asRetriever();
            const relevantDocs = await retriever.getRelevantDocuments(QUERY);
            const mapReduceChain = (0, chains_2.loadQAMapReduceChain)(model);
            return await mapReduceChain.invoke({
                question: QUERY,
                input_documents: relevantDocs,
            });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.projectRiskAss = new ProjectRiskAss();
/**
 * Implement text summarization following LangChain.js documentation
 * Link: https://js.langchain.com/docs/modules/chains/popular/summarize
 * **/
const summarizeDoc = async (projectText) => {
    try {
        const model = new openai_1.OpenAI({ temperature: 0 });
        const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 400 });
        const docs = await textSplitter.createDocuments([projectText]);
        const chain = (0, chains_1.loadSummarizationChain)(model, { type: "map_reduce" });
        return await chain.call({ input_documents: docs });
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.summarizeDoc = summarizeDoc;
/**
 * Implementation follows the LangChain.js documentation (Custom QA chain)
 * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
 * **/
const extractKeyAreasOfRisk = async (projectText) => {
    try {
        const QUERY = "What are  the key areas of risk in the document?";
        const model = new openai_1.OpenAI({});
        const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 1000 });
        const docs = await textSplitter.createDocuments([projectText]);
        const vectorStore = await hnswlib_1.HNSWLib.fromDocuments(docs, new openai_2.OpenAIEmbeddings());
        const retriever = vectorStore.asRetriever();
        const relevantDocs = await retriever.getRelevantDocuments(QUERY);
        const mapReduceChain = (0, chains_2.loadQAMapReduceChain)(model);
        return await mapReduceChain.invoke({
            question: QUERY,
            input_documents: relevantDocs,
        });
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.extractKeyAreasOfRisk = extractKeyAreasOfRisk;
/**
 * Implementation follows the LangChain.js documentation (Custom QA chain)
 * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
 * **/
const determineRagStatus = async (projectText) => {
    try {
        const QUERY = "What would be the appropriate RAG (Red, Amber, Green) status based on the complexity of the project described in the document?";
        const model = new openai_1.OpenAI({});
        const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 1000 });
        const docs = await textSplitter.createDocuments([projectText]);
        const vectorStore = await hnswlib_1.HNSWLib.fromDocuments(docs, new openai_2.OpenAIEmbeddings());
        const retriever = vectorStore.asRetriever();
        const relevantDocs = await retriever.getRelevantDocuments(QUERY);
        const mapReduceChain = (0, chains_2.loadQAMapReduceChain)(model);
        return await mapReduceChain.invoke({
            question: QUERY,
            input_documents: relevantDocs,
        });
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.determineRagStatus = determineRagStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlza0Fzc2Vzc21lbnRVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jaGFpbnMvcmlza0Fzc2Vzc21lbnRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBK0M7QUFDL0MsNkNBQTBEO0FBQzFELDJEQUF5RTtBQUV6RSx3REFBK0Q7QUFDL0QsNERBQXlEO0FBQ3pELDZDQUF3RDtBQUV4RCxNQUFNLGNBQWM7SUFDbEI7OztVQUdNO0lBQ0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFtQjtRQUMzQyxJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFNLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QyxNQUFNLFlBQVksR0FBRyxJQUFJLDhDQUE4QixDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUUsTUFBTSxJQUFJLEdBQUcsTUFBTSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLEtBQUssR0FBRyxJQUFBLCtCQUFzQixFQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDcEQ7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRDs7O1VBR007SUFDQyxLQUFLLENBQUMscUJBQXFCLENBQUMsV0FBbUI7UUFDcEQsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLGtEQUFrRCxDQUFDO1lBRWpFLE1BQU0sS0FBSyxHQUFHLElBQUksZUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLE1BQU0s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