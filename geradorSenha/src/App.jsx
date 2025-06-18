
import { useState } from 'react'
import './app.css'
import Input from './components/input'
function App() {
  const [password, setpassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar! 📑")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  const passwordSize = showInput ? customSize : 8




  function generate() {
    const characters = "'1234567890-=qwertyuiop´[asdfghjklç~]\zxcvbnm,.;/QWERTYUIOP`{ASDFGHJKLÇ^}|ZXCVBNM<>:?!@#$%¨&*()_+"

    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setpassword(newPassword)
    setCopyText("Copiar! 📑")

  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }

  return (
    <div className='trx'>
      <h1>Gerador de senha</h1>
      <div>
        <label htmlFor="showInput" id='showInput'>customizar o tamanho:</label>
        <input type="checkbox" id='showInput'
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)} />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={customSize} setpasswordSize={setCustomSize} />

        </div>

      )}


      <div className='container-btn'>
        <button onClick={generate}>Gerar senha de {passwordSize} caracteres !</button>
        <button onClick={copyToClipboard}>{copyText}</button>
      </div>
      <div className='pass'>{password}</div>
    </div>
  )
}

export default App
