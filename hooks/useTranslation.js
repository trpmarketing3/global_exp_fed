import { useContext } from 'react'
import { GlobalContext } from '../global-context'

// Simple translation hook that returns the key as the translation
// You can extend this to support multiple languages later
export const useTranslations = (namespace = 'common') => {
  const { locale } = useContext(GlobalContext)
  
  return (key) => {
    // For now, just return the key as the translation
    // You can add actual translations here later
    return key
  }
}
