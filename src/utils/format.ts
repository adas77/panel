export function formatPercent(percent: number): number {
    const X = 10
    return percent / X
}

export function formatDate(date: Date, polish: boolean, short?: boolean): string {
    const formatter = new Intl.DateTimeFormat(polish ? 'pl' : 'en-US', {
        day: short ? '2-digit' : 'numeric',
        month: short ? '2-digit' : 'long',
        year: short ? '2-digit' : 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: (polish) ? 'Europe/Warsaw' : 'America/Los_Angeles'
    });

    return formatter.format(date);
}