"use client";

import languagesAndCodes from "./languagesAndCodes";
import { useEffect, useState } from "react";
import translate from "translate";
import SelectField from "../components/select-field/select-field";

translate.key = "AIzaSyA-LWuIlquldSBDqQWlgr3nJE8h3AMTDCE";

export default function TranslateMe() {
  const [selectedLanguageIndex, setLanguageIndex] = useState<number>(0);

  const options = languagesAndCodes.languages.map((language, index) => ({
    value: index.toString(), 
    label: language.lang,
  }));

  const handleChang = (selectedOption: any) => {
    setLanguageIndex(Number(selectedOption.value));
    localStorage.setItem("languageIndex", selectedOption.value);
    window.location.reload();
  };

  useEffect(() => {
    const languageIndex = localStorage.getItem("languageIndex");
    if (languageIndex) {
      setLanguageIndex(Number(languageIndex));
    }
  }, []);

  return (
    <div>
      <SelectField
        name="language"
        value={options[selectedLanguageIndex]}
        handleChange={handleChang}
        placeholder="Select Language"
        required={false}
        options={options}
        className="language"
      />
    </div>
  );
}

interface Language {
  lang: string;
  code: string;
}

export async function translateMyText(text = "") {
  const { languages } = languagesAndCodes;
  const langIndex = localStorage.getItem("languageIndex");

  let lang: Language | undefined;
  if (langIndex !== null) {
    const index = parseInt(langIndex, 10);
    lang = languages[index];
  }

  if (lang) {
    const result = await translate(text, lang.code);
    return result;
  } else {
    throw new Error("Language not found");
  }
}

export const useTranslate = (text: string) => {
  const [translatedText, setTranslatedText] = useState(text);

  const normalizeCase = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  useEffect(() => {
    translateMyText(text)
      .then(res => {
        setTranslatedText(normalizeCase(res));
      })
      .catch(err => console.log(err));
  }, [text]);

  return translatedText;
};

// export const useTranslate = (text: string) => {
//   const [translatedText, setTranslatedText] = useState('');

//   useEffect(() => {
//     let isMounted = true; 

//     const normalizeCase = (text: string) => {
//     return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//   };
//     translateMyText(text)
//       .then(res => {
//         if (isMounted) {
//           setTranslatedText(normalizeCase(res));
//         }
//       })
//       .catch(err => console.error(err));

//     return () => { isMounted = false; }; 
//   }, [text]);

//   return translatedText || text;
// };