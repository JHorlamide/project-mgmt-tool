import { OpenAI } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChainValues } from "langchain/dist/schema";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { loadQAMapReduceChain } from "langchain/chains";

/**
 * Implement text summarization following LangChain.js documentation
 * Link: https://js.langchain.com/docs/modules/chains/popular/summarize
 * **/
export const summarizeDoc = async (projectText: string) => {
  try {
    const model = new OpenAI({ temperature: 0 });
    const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 400 });
    const docs = await textSplitter.createDocuments([projectText]);
    const chain = loadSummarizationChain(model, { type: "map_reduce" });
    return await chain.call({ input_documents: docs });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 * Implementation follows the LangChain.js documentation (Custom QA chain)
 * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
 * **/
export const extractKeyAreasOfRisk = async (projectText: string): Promise<ChainValues> => {
  try {
    const QUERY = "What are  the key areas of risk in the document?";

    const model = new OpenAI({});
    const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
    const docs = await textSplitter.createDocuments([projectText]);

    const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
    const retriever = vectorStore.asRetriever();
    const relevantDocs = await retriever.getRelevantDocuments(QUERY);
    const mapReduceChain = loadQAMapReduceChain(model);

    return await mapReduceChain.invoke({
      question: QUERY,
      input_documents: relevantDocs,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 * Implementation follows the LangChain.js documentation (Custom QA chain)
 * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
 * **/
export const determineRagStatus = async (projectText: string): Promise<ChainValues> => {
  try {
    const QUERY = "What would be the appropriate RAG (Red, Amber, Green) status based on the complexity of the project described in the document?";

    const model = new OpenAI({});
    const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
    const docs = await textSplitter.createDocuments([projectText]);

    const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
    const retriever = vectorStore.asRetriever();
    const relevantDocs = await retriever.getRelevantDocuments(QUERY);
    const mapReduceChain = loadQAMapReduceChain(model);

    return await mapReduceChain.invoke({
      question: QUERY,
      input_documents: relevantDocs,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}