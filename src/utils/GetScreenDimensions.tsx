interface Dimension {
    width: number
    height: number
}

export function getScreenDimensions(): Dimension {
    if (typeof window !== 'undefined') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    return {
        width: 0,
        height: 0
    }
}
