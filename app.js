import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    temperature: 1,
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are Jarvis a smart review grader. Your task is to analyze given review and
          return the sentiment. Classify the review as positive, neutral or negative. you must
          return valid JSON response structure.
          example: {"sentiment": "Negative"}
        `,
      },
      {
        role: "user",
        content: `review:  These headphones arrived quickly and looks great. but left
        earcup stopped working after a week.
        Sentiment:`,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  console.log(completion.choices[0].message.content);
}

main();
