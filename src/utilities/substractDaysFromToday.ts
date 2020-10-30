export function substractDaysFromToday(days: number) {
    let d = new Date() 
    d.setDate(d.getDate() - days)
    return d
}