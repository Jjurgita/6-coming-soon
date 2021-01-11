class Validator {
    static isValidName(name) {
        // ne tuscias tekstas
        const notEmptyString = Validator.notEmptyString(name);
        if (notEmptyString !== true) return notEmptyString;

        // tik abeceles raides
        const onlyAlphabet = Validator.onlyAlphabet(name);
        if (onlyAlphabet !== true) return onlyAlphabet;

        // tik pirma raide didzioji
        const onlyFirstLetterUppercase = Validator.onlyFirstLetterUppercase(name);
        if (onlyFirstLetterUppercase !== true) return onlyFirstLetterUppercase;

        return true;
    }

    static isValidEmail(email) {
        // ne tuscias tekstas
        const notEmptyString = Validator.notEmptyString(email);
        if (notEmptyString !== true) return notEmptyString;

        // ne trumpesnis nei 6 simboliai
        // tik 1 @ simbolis
        // pries @ turi buti nemaziau 1 simbolio
        // uz @ turi buti nemaziau 4 simboliu
        // apart @, gali buti tik: raides, skaiciai, taskas, minusas, underscore
        // domenu dalyje tik 1 taskas
        // lokalioj daly negali eiti keli [taskai, minusai, underscore] is eiles

        return true;
    }

    static isValidMessage(message) {
        // ne tuscias tekstas
        // nevirsyti 1000 simboliu

        return true;
    }

    static notEmptyString(text) {
        if (typeof text !== 'string') {
            return 'Turi buti tekstas.';
        }
        if (text === '') {
            return 'Turi buti ne tuscias tekstas.';
        }
        return true;
    }

    static onlyAlphabet(text) {
        const abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        return Validator.onlyAllowedSymbols(text, abc);
    }

    static onlyNumbers(text) {
        const abc = '7894561230';
        return Validator.onlyAllowedSymbols(text, abc);
    }

    static onlyAllowedSymbols(text, allowedSymbols) {
        for (let t of text) {
            let singleAllowedTextSymbol = false;
            for (let a of allowedSymbols) {
                if (a === t) {
                    singleAllowedTextSymbol = true;
                    break;
                }
            }
            // jei bent viena text raide yra neleistina, tai radom kritine klaida
            if (!singleAllowedTextSymbol) {
                return `Rastas neleistinas "${t}" simbolis.`;
            }
        }
        return true;
    }

    static onlyFirstLetterUppercase(text) {
        let lower = text.toLowerCase();
        let convert = lower[0].toUpperCase() + lower.slice(1);
        if (text !== convert) {
            return 'Pirmasis simbolis turi buti didzioji raide, o visi kiti - mazosios.';
        }

        return true;
    }
}

export { Validator }




/*

onlyAllowedSymbols(text, allowedSymbols)

text = 'aacdcdbb';  true
text = 'Aacdcdbb';  false
text = 'asdasd';    false
allowedSymbols = 'abcd';



*/