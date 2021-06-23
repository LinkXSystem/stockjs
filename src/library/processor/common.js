const DefaultStandardUnit = 100;

function handleDataToStandardUnit(target, unit = DefaultStandardUnit) {
    return target / unit;
}

module.exports = {
    handleDataToStandardUnit
}