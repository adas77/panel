import { useSelector } from "react-redux"

const useLang = () => {
    const [isPolish] = useSelector((s: GlobalState) => {
        return [s.isPolish]
    })

    const choose = (langs: string[]) => {
        return isPolish ? langs[1] : langs[0]
    }

    const lang =
    {

        widgets: choose(["Widgets", "Widgety"]),
        orders: choose(["Orders", "Zamówienia"]),
        quality: choose(["Quality", "Jakość"]),
        opinions: choose(["Opinions", "Opinie"]),
        rankings: choose(["Rankings", "Rankingi"]),
        charts: choose(["Charts", "Wykresy"]),
        advice: choose(["Advice", "Porady"]),

        login: choose(["Login", "Zaloguj"]),
        logout: choose(["Logout", "Wyloguj"]),

        unpaid: choose(["Unpaid", "Nieopłacone"]),
        unsent: choose(["Unsent", "Niewysłane"]),
        returns: choose(["Returns", "Zwroty"]),
        name: choose(["Name", "Imię"]),
        date: choose(["Date", "Data"]),

        newest: choose(["Newest", "Najnowsze"]),
        oldest: choose(["Oldest", "Najstarsze"]),
        positive: choose(["Positive", "Pozytywne"]),
        negative: choose(["Negative", "Negatywne"]),

        bar: choose(["Bar", "Słupkowy"]),
        linear: choose(["Linear", "Liniowy"]),
        day: choose(["Day", "Dzień"]),
        week: choose(["Week", "Tydzień"]),
        year: choose(["Year", "Rok"]),

        pageAlert: choose(["Page alert!", "Error Strony!"]),
        oops: choose(["Oops!", "Upss!"]),
        errorOccur: choose(["Sorry, an unexpected error has occurred.", "Przepraszamy, napotkano niespodziewany błąd"]),

    }

    return { lang }
}

export default useLang