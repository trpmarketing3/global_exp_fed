
import { createContext, useMemo, useContext, useState } from 'react'

const GlobalContext = createContext(null)

export const GlobalProvider = ({ initialLocales, children }) => {
  const [locales, setLocales] = useState(initialLocales ?? [{"name":"English","short":"en"}])
  const [locale, setLocale] = useState({"name":"English","short":"en"})

  const value = useMemo(() => {
    return {
      locales,
      locale,
      setLocales,
      setLocale
    }
  }, [locales, locale])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return {
    ...context
  }
}
