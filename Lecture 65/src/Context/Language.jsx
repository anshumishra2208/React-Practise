import { createContext, useState } from "react";

export let LanguageContext = createContext(null);
export function LanguageProvider({children}){
    const [lang,setLang] = useState("english")
    return <LanguageContext value={{lang,setLang}}>
        {children}
    </LanguageContext>
}
