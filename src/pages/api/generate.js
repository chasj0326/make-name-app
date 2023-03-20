import * as dotenv from 'dotenv';
const { Configuration, OpenAIApi } = require("openai");

dotenv.config({path:__dirname + '../../../.env'})


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function(req, res){ //request, response
  if(!configuration.apiKey){ //API Key ERROR 핸들링
    res.status(500).json({
      error:{
        message: "OpenAPI key not configured"
      }
    })
    return;
  }
  const command = req.body.command || '';
  try{
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: command,
      temperature: 0,
      max_tokens: 400,
      top_p: 1,
      best_of: 1,
    });
    res.status(200).json({result : response.data.choices[0].text })
  }
  catch(error){
    if(error.response){
      console.log(error(error.response.status, error.response.data));
      res.status(error.response.status).json(error.response.data);
    }
    else{
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error:{
          message: 'An error occured during your request'
        }
      })
    }
  }
}