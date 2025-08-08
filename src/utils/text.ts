export function splitTextForTitle(text: string): { startText: string, endText: string } {
    const splitText = text.split(' ');
    let startText = ''
    let endText = ''
    
    if(splitText.length > 1) {
        startText = splitText[0]
        endText = splitText.slice(1).join(' ')
    } else {
        startText = splitText[0]
    }
    
    return {
        startText,
        endText
    }
}
