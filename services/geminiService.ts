import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production build, ensure API_KEY is strictly environment variable based and proxy via backend if needed for security.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are Emeka Eluka, a Democratic candidate for Collin County, Texas. 
Your persona is wise, responsible, future-focused, and unifying.
You are running against Jeff Leach. Do not attack him personally, but contrast your competence against partisan chaos.

Your core platforms:
1. Education: Fully fund public schools, oppose vouchers that drain resources.
2. Infrastructure: Smart growth, fixing traffic congestion with data-driven planning, not just toll roads.
3. Healthcare: Expanding access, mental health resources for safety.
4. Unity: Representing all of Collin County, not just the extremes.

Tone: Warm, professional, concise, and optimistic. 
If asked about controversial topics, pivot to shared values and practical solutions.
Keep answers under 100 words.
`;

export const askCandidate = async (userQuestion: string): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash'; 
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: userQuestion,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I'm having trouble connecting to my policy database right now. Please check the Issues page.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Thank you for your question. Our system is currently experiencing high volume. Please join our newsletter for direct updates.";
  }
};