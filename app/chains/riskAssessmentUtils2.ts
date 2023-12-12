import { OpenAI, OpenAICallOptions } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter, SentenceSplitter } from "langchain/text_splitter";
import { ChainValues } from "langchain/dist/schema";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { loadQAMapReduceChain } from "langchain/chains";
import { Document } from "langchain/dist/document";

class ProjectRiskAss {
  private model: OpenAI<OpenAICallOptions>;
  private textSplitter: SentenceSplitter;

  constructor() {
    this.model = new OpenAI({ temperature: 0 });
    this.textSplitter = new SentenceSplitter();
  }

  /**
   * Implements text summarization following LangChain.js documentation
   * Link: https://js.langchain.com/docs/modules/chains/popular/summarize
   * **/
  public async summarizeDoc(projectText: string): Promise<ChainValues> {
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
      const QUERY = "What are the key areas of risk in the document?";
      const docs = await this.getDocuments(projectText);
      const relevantDocs = await this.getRelevantDocs(docs, QUERY);

      if (relevantDocs.length === 0) {
        console.warn("");
        return {};
      }

      const mapReduceChain = loadQAMapReduceChain(this.model);

      return await mapReduceChain.invoke({
        question: QUERY,
        input_documents: relevantDocs,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  private async getDocuments(projectText: string): Promise<Document<Record<string, any>>[]> {
    try {
      // Extract sentences from the text
      const sentences = this.textSplitter.createSentences(projectText);

      // Create documents from the sentences
      const docs = await Promise.all(
        sentences.map((sentence) => {
          return new Document({ text: sentence });
        })
      );

      return docs;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  private async getRelevantDocs(docs: Document<Record<string, any>>[], query: string): Promise<Document<Record<string, any>>[]> {
  }