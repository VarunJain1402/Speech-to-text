import { useState } from 'react'
import './App.css'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
function App () {

  const [text , setText] = useState('')
  const [isCopied, setCopied] = useClipboard({text})

  const listening = () => SpeechRecognition.startListening({ continuous: true })
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div className='App'>
      <div className='container'>
        <h2>Speech to text Converter</h2>
        <br />
        <p>
          React hook that cpnverts speech from the microphone to text and makes
          it available to your react components.
        </p>

        <div className='main-content'>{transcript}</div>

        <div className='btn--style'>
          <button onClick={()=>setCopied({transcript})}>
            Was it copied? {isCopied ? 'Yes! 👍' : 'Nope! 👎'}
          </button>
          <button onClick={listening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
