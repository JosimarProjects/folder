import { GoogleGenAI } from "@google/genai";
import { FOLDER_CONTENT } from '../constants';

// Construct a system prompt based on the folder content
const SYSTEM_INSTRUCTION = `
Você é um assistente virtual especialista em Psicologia e Cinema, incorporado dentro de um folder digital sobre o filme "Viva - A Vida é uma Festa" (Coco).
Sua base de conhecimento é estritamente o conteúdo do folder abaixo.

CONTEÚDO DO FOLDER:
---
PÁGINA 1:
${FOLDER_CONTENT.page1.subHeader}
${FOLDER_CONTENT.page1.sections.map(s => `${s.title}: ${s.body}`).join('\n')}
Conclusão: ${FOLDER_CONTENT.page1.conclusion}
Rodapé: ${FOLDER_CONTENT.page1.footer}

PÁGINA 2:
${FOLDER_CONTENT.page2.sections.map(s => `${s.title}: ${s.body}`).join('\n')}
Resumo: ${FOLDER_CONTENT.page2.summary}
---

INSTRUÇÕES:
1. Responda às perguntas dos usuários relacionando os conceitos psicológicos (Psicanálise, Psicopatologia, Subjetividade) com os personagens (Miguel, Ernesto, Família).
2. Seja conciso, educado e use um tom acadêmico mas acessível.
3. Se a pergunta fugir totalmente do contexto do filme ou psicologia, gentilmente traga de volta ao tema do folder.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    initializeGemini();
    if (!aiClient) return "Erro: API Key não configurada.";
  }

  try {
    const model = aiClient!.models.getGenerativeModel({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await model.generateContent({
      contents: message
    });
    
    return response.text || "Não consegui analisar isso no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, tive um problema ao consultar o folder.";
  }
};