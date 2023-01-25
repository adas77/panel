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

        signIn: choose(["Sign in to your account", "Zaloguj się"]),
        signUp: choose(["Sign up", "Zarejestruj się"]),
        yourUsername: choose(["Your username", "Twój login"]),
        yourPass: choose(["Your password", "Twoje hasło"]),
        rememberMe: choose(["Remember me", "Pamiętaj mnie"]),
        forgotPass: choose(["Forgot password?", "Odzyskaj hasło"]),
        donHaveAccountYet: choose(["Don't have an account yet?", "Nie masz jeszcze konta?"]),
        passUsername: choose(["Write username", "Podaj login"]),
        passPass: choose(["Write password", "Podaj hasło"]),

        computer: choose(["Computer", "Komputer"]),
        phone: choose(["Phone", "Telefon"]),
        tv: choose(["TV", "Telewizor"]),
        headphones: choose(["Headphones", "Słuchawki"]),
        keyboard: choose(["Keyboard", "Klawiatura"]),

        currency: choose(["USD", "PLN"]),
        photo: choose(["Photo", "Zdjęcie"]),
        sold: choose(["Sold", "Sprzedane"]),
        turnOver: choose(["Turnover", "Obrót"]),
        views: choose(["Views", "Wyświetlenia"]),

        contentment: choose(["Contentment", "Zadowolenie"]),
        sortByTime: choose(["Sort by time", "Posortuj po czasie"]),
        search: choose(["Search", "Szukaj"]),
        searchBySurname: choose(["Search by surname", "Szukaj po nazwisku"]),

        veryBad: choose(["Very Bad", "SzukajBardzo źle"]),
        bad: choose(["Bad", "Źle"]),
        notBad: choose(["Not bad", "Nieźle"]),
        quiteGood: choose(["Quite Good", "Całkiem dobrze"]),
        veryGood: choose(["Very good", "Bardzo dobrze"]),
        excellent: choose(["Ecellent", "Spaniale"]),

        worstRanks: choose(["Your worst statistics / weight:", "Twoje najgorsze statystyki / waga:"]),
        mostPopular: choose(["Most Popular", "Najbardziej popularne"]),
        lessPopular: choose(["Less Popular", "Najmniej popularne"]),

        adviceAdvertTitle: choose(["Time for advertising", "Czas na reklamę"]),
        adviceBuyTitle: choose(["More goods", "Większa ilość towaru"]),
        adviceCurrTitle: choose(["Various currencies", "Różne waluty"]),
        adviceWorldTitle: choose(["Go out into the world", "Wyrusz w świat"]),


        adviceAdvert: choose(["To increase your customer base, you need wider publicity. Have you thought about starting a YouTube channel?", "Aby zwiększyć grono klientów potrzebujesz szerszego rozgłosu. Myślałeś nad założeniem kanału na Youtube?"]),
        adviceBuy: choose(["To get to a higher level, you need to trade more goods. Don't be afraid to take a chance!!", "Żeby wejść na wyższy poziom potrzebujesz obracać większą  ilością towaru. Nie bój się zaryzykować!!"]),
        adviceCurr: choose(["Maybe it's worth taking a risk and starting trading in new currencies? The Russian ruble is definitely a good idea!", "Może warto zaryzykować i zacząć handlować w nowych walutach? Rubel rosyjski to na pewno dobry pomysł!"]),
        adviceWorld: choose(["Maybe it's time to start trading on the foreign market? Even if you lose, you will gain valuable experience!", "Może pora zacząć handlować na rynku zagranicznym? Nawet jeśli stracisz to zdobędziesz cenne doświadczenie!"]),

        mostOrdersFrom: choose(["Most orders from", "Wszystkie zamówienia z"]),
        dynamicChanges: choose(["Dynamic changes in the market", "Dynamiczne zmiany na rynku"]),
        timeToInvest: choose(["Time to invest", "Czas na inwestycje"]),

    }

    return { lang }
}

export default useLang