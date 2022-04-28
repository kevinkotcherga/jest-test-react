import React, { useState } from 'react'

const Printer = () => {
  const [content, setContent] = useState('');

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, content]);
    setContent('');
  }

  return (
    <div>
      <ul>
        {messages.map(message => (
          <li>{message}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='message'onChange={handleChange}/>
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  )
}

export default Printer
