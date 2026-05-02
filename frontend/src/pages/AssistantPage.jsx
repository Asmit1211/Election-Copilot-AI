// ============================================================
// AI Assistant — Glassmorphism Chat UI
// ============================================================
// Sends POST to http://localhost:5000/api/chat
// Prepends active language from LanguageContext to the payload.
// ============================================================

import { useState, useCallback, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

const SUGGESTION_CHIPS = [
  'What is NOTA?',
  'How do I register as a voter?',
  'Who are the Parliament leaders?',
  'Explain the EVM process',
];

function AssistantPage() {
  const { language } = useLanguage();

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'ai',
      text: "Hello! I'm your Election Copilot AI. Ask me anything about elections!",
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = useCallback(async (text) => {
    const userMessage = text.trim();
    if (!userMessage) return;

    const now = () =>
      new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    // Add user message
    const userMsg = {
      id: Date.now(),
      role: 'user',
      text: userMessage,
      time: now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Add loading placeholder
    const loadingId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      {
        id: loadingId,
        role: 'ai',
        text: 'Thinking... ⏳',
        time: now(),
        isLoading: true,
      },
    ]);

    // Prepend language to message payload
    const messagePayload = `[Language: ${language}] ${userMessage}`;

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messagePayload,
          userRole: 'first-time',
          currentStep: 1,
        }),
      });

      const data = await response.json();
      let replyText = data.reply || 'Sorry, I could not process that request.';

      // Strip any [UPDATE_STEP: X] tags from the response
      replyText = replyText.replace(/\[UPDATE_STEP:\s*\d+\]/g, '').trim();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? { ...msg, text: replyText, isLoading: false, time: now() }
            : msg
        )
      );
    } catch (error) {
      console.error('❌ API Call Failed:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? {
                ...msg,
                text: 'Network connection issue. Please check your internet or try again.',
                isLoading: false,
                time: now(),
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  const handleSend = useCallback(() => {
    sendMessage(inputValue);
  }, [inputValue, sendMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleChipClick = useCallback(
    (chipText) => {
      sendMessage(chipText);
    },
    [sendMessage]
  );

  return (
    <section className="assistant-page" id="assistant-page">
      <div className="assistant-container">
        {/* Chat Header */}
        <div className="assistant-header">
          <div className="assistant-header-avatar">🤖</div>
          <div className="assistant-header-info">
            <div className="assistant-header-name">Election Copilot AI</div>
            <div className="assistant-header-status">
              <span className="chat-status-dot" />
              Online — Ready to help
            </div>
          </div>
          <div className="assistant-language-badge">
            🌐 {language}
          </div>
        </div>

        {/* Messages Area */}
        <div className="assistant-messages" id="assistant-messages">
          {messages.map((msg) => (
            <div
              className={`chat-bubble-wrapper ${msg.role}`}
              key={msg.id}
            >
              {msg.role === 'ai' && (
                <div className="chat-bubble-avatar">🤖</div>
              )}
              <div className={`chat-bubble ${msg.role}`}>
                <div className="chat-bubble-text">
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={j}>{part.slice(2, -2)}</strong>
                        ) : (
                          part
                        )
                      )}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
                <div className="chat-bubble-time">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="assistant-chips-wrapper">
          <div className="assistant-chips" id="assistant-chips">
            {SUGGESTION_CHIPS.map((chip) => (
              <button
                key={chip}
                className="assistant-chip"
                onClick={() => handleChipClick(chip)}
                disabled={isLoading}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="assistant-input-area" id="assistant-input-area">
          <div className="chat-input-wrapper">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask me anything about elections..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              id="assistant-input"
              aria-label="Type your message"
            />
            <button
              className="chat-send-btn"
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              id="assistant-send-btn"
              aria-label="Send message"
            >
              <span className="chat-send-icon">➤</span>
            </button>
          </div>
          <div className="chat-input-hint">
            Press Enter to send · AI responses are for guidance only
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssistantPage;
