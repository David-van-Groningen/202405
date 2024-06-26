// Controleer of er een stad is meegegeven als command-line argument
if (process.argv.length < 3) {
    console.log('Geef een stad als argument mee.');
} else {
    // Vang de stad op die is meegegeven als argument
    const stad = process.argv[2];

    // Log de ingevoerde stad
    console.log(`De stad is ${stad}`);

    // Controleer of de ingevoerde stad Amsterdam is
    if (stad === 'Amsterdam') {
        console.log('Het is de hoofdstad van Nederland.');
    } else {
        console.log(`${stad} is niet de hoofdstad`);
    }
}