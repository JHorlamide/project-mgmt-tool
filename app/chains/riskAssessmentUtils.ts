import { OpenAI, OpenAICallOptions } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChainValues } from "langchain/dist/schema";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { loadQAMapReduceChain } from "langchain/chains";
import { Document } from "langchain/dist/document";

class ProjectRiskAss {
  private readonly KEY_AREAS_QUERY = "What are the key areas of risk in the document?";
  private readonly RAG_STATUS_QUERY = "What would be the appropriate RAG (Red, Amber, Green) status based on the complexity of the project described in the document?";
  private readonly model: OpenAI;
  private readonly textSplitter: RecursiveCharacterTextSplitter;

  constructor(openAI: OpenAI, textSplitter: RecursiveCharacterTextSplitter) {
    this.model = openAI;
    this.textSplitter = textSplitter;
  }

  /**
   * Implement text summarization following LangChain.js documentation
   * Link: https://js.langchain.com/docs/modules/chains/popular/summarize
   * **/
  public async summarizeDoc(projectText: string) {
    try {
      const docs = await this.getDocuments(projectText);
      const chain = loadSummarizationChain(this.model, { type: "map_reduce" });
      return await chain.call({ input_documents: docs });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  /**
   * Implementation follows the LangChain.js documentation (Custom QA chain)
   * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
   * **/
  public async extractKeyAreasOfRisk(projectText: string): Promise<ChainValues> {
    try {
      const docs = await this.getDocuments(projectText);
      return await this.invokeMapReduceChain(docs, this.KEY_AREAS_QUERY);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  /**
   * Implementation follows the LangChain.js documentation (Custom QA chain)
   * Link: https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
   * **/
  public async determineRagStatus(projectText: string): Promise<ChainValues> {
    try {
      const docs = await this.getDocuments(projectText);
      return await this.invokeMapReduceChain(docs, this.RAG_STATUS_QUERY);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  private async getDocuments(projectText: string): Promise<Document<Record<string, any>>[]> {
    try {
      return await this.textSplitter.createDocuments([projectText]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  private async invokeMapReduceChain(docs: Document<Record<string, any>>[], query: string) {
    try {
      const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
      const retriever = vectorStore.asRetriever();
      const relevantDocs = await retriever.getRelevantDocuments(query);
      const mapReduceChain = loadQAMapReduceChain(this.model);

      return await mapReduceChain.invoke({
        question: query,
        input_documents: relevantDocs
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export const projectRiskAss = new ProjectRiskAss(
  new OpenAI({ temperature: 0 }),
  new RecursiveCharacterTextSplitter({ chunkSize: 400 })
);
