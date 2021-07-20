export const getEncodedText = (text: string): string => {
  // normalize withespaces
  const normalizedText = text.replace(/\s/g, ' ')
  return encodeURIComponent(normalizedText)
}
