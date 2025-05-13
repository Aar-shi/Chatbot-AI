import { useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown';



function Home() {

  const [count, setCount] = useState(0)
  const [responseText, setresponseText] = useState("");
  const [inputText, setinputText] = useState("");

  async function generateAnswer() {
    try {
      setresponseText("loading...");
      const response = await axios({
        url: "https://api.groq.com/openai/v1/chat/completions",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        data: {
          "model": "llama-3.3-70b-versatile",
          "messages": [{
            "role": "user",
            "content": inputText
          }]
        }
      })

      console.log(response.data.choices[0].message.content);
      const generatedText = response.data.choices[0].message.content;
      setresponseText(generatedText)

    }
    catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div  className='min-h-full w-full pt-10 bg-black'>
        <div className='text-6xl h-2/4 flex flex-col gap-20 justify-center items-center w-full  font-bold '>
          <p className='text-white'>ChatNova</p>
          <input type='text' className='text-[0.5em] h-1/6 p-4 rounded-xl'
          placeholder='How can I help you today??' onChange={(e) => setinputText(e.target.value)} value={inputText}></input>
          <button className='text-white border text-[0.3em] -mt-10 p-4 ' onClick={generateAnswer}>Generate</button>
          
      </div>
      <div className="response h-fit max-w-[100%] p-4 text-white ">
          {/* {responseText && <pre className='text-sm whitespace-pre-wrap break-words text-white'>{responseText}</pre>} */}
          <Markdown>{responseText}</Markdown>
      </div>
      
      
        <div className="response h-fit max-w-[90%] whitespace-pre-wrap break-words">
          
        </div>
      
       
      
    </div>
  
  )
}

export default Home
