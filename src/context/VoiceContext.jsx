import { useCallback, useEffect, useRef, useState } from 'react';
import { VoiceContext } from './contexts';

export function VoiceProvider({ children }) {
  const [supported] = useState(
    () =>
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      typeof window.SpeechSynthesisUtterance === 'function',
  );
  const [status, setStatus] = useState('idle');
  const [activeText, setActiveText] = useState('');
  const utteranceRef = useRef(null);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setStatus('idle');
    setActiveText('');
  }, [supported]);

  const speak = useCallback(
    (text, lang = 'en') => {
      if (!supported || !text?.trim()) return;

      const synth = window.speechSynthesis;
      synth.cancel();

      const utterance = new window.SpeechSynthesisUtterance(text);
      const targetLang = lang === 'te' ? 'te-IN' : 'en-IN';
      utterance.lang = targetLang;
      utterance.rate = 0.92;
      utterance.pitch = 1;

      const languagePrefix = lang === 'te' ? 'te' : 'en';
      const voices = synth.getVoices();
      const preferredVoice =
        voices.find((voice) => voice.lang?.toLowerCase() === targetLang.toLowerCase()) ??
        voices.find((voice) => voice.lang?.toLowerCase().startsWith(languagePrefix));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => {
        if (utteranceRef.current === utterance) {
          utteranceRef.current = null;
          setStatus('idle');
          setActiveText('');
        }
      };

      utterance.onerror = () => {
        if (utteranceRef.current === utterance) {
          utteranceRef.current = null;
          setStatus('idle');
          setActiveText('');
        }
      };

      utteranceRef.current = utterance;
      setActiveText(text);
      setStatus('speaking');
      synth.speak(utterance);
    },
    [supported],
  );

  const pause = useCallback(() => {
    if (!supported) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setStatus('paused');
    }
  }, [supported]);

  const resume = useCallback(() => {
    if (!supported) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus('speaking');
    }
  }, [supported]);

  useEffect(() => {
    return () => {
      if (supported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [supported]);

  const value = {
    supported,
    status,
    activeText,
    isActive: status !== 'idle',
    isSpeaking: status === 'speaking',
    isPaused: status === 'paused',
    speak,
    stop,
    pause,
    resume,
  };

  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>;
}
