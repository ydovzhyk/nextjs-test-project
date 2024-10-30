"use client";

import { useTranslate } from './translating';

interface TranslatedTextProps {
  text: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ text }) => {
  const translatedText = useTranslate(text);
  return <>{translatedText}</>;
};

export default TranslatedText;