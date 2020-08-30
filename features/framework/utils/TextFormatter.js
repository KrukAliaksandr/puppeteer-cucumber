class TextFormatter {
    static toCamelCase(text, separator = " ") {
        return text.split(separator).map((item, index) => {
            if (index > 0) {
                return item.replace(item[0], item[0].toUpperCase());
            }
            return item;
        }).join("");
    }
}

module.exports = TextFormatter;