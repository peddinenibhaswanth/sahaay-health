import { useContext } from 'react';
import { VoiceContext } from '../context/contexts';

export function useVoice() {
  const context = useContext(VoiceContext);

  if (!context) {
    throw new Error('useVoice must be used inside a VoiceProvider');
  }

  return context;
}
