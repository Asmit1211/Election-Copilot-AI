// ============================================================
// AI Assistant — Glassmorphism Chat UI
// ============================================================
// Sends POST to http://localhost:5000/api/chat
// Prepends active language from LanguageContext to the payload.
// ============================================================

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

function AssistantPage() {
  const { language, t } = useLanguage();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize or reset chat on language change
  useEffect(() => {
    setMessages([
      {
        id: 1,
        role: 'ai',
        text: t('assistant.greeting'),
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      },
    ]);
  }, [t]);

  // Dynamic Suggestion Chips
  const suggestionChips = useMemo(() => [
    t('assistant.chips.nota'),
    t('assistant.chips.register'),
    t('assistant.chips.leaders'),
    t('assistant.chips.evm'),
  ], [t]);


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
        text: t('assistant.thinking'),
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
                text: t('assistant.fallbackError'),
                isLoading: false,
                time: now(),
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, [language, t]);

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
            <div className="assistant-header-name">{t('assistant.headerName')}</div>
            <div className="assistant-header-status">
              <span className="chat-status-dot" />
              {t('assistant.status')}
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
            {suggestionChips.map((chip) => (
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
              placeholder={t('assistant.inputPlaceholder')}
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
            {t('assistant.sendHint')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssistantPage;
