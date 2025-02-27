

export function getByPredicateString(predicate: string) {
    return `-ios predicate string: ${predicate}`
}

export function getByAccessibilityID(id: string) {
    return `~${id}`
}
export function getByType(className: string) {
    return `${className}`
}

export function getByXPath(xpath: string) {
    return `${xpath}`
}
