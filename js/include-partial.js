function includePartial(path) {
    const request = new XMLHttpRequest();

    request.open('GET', path, false);
    request.send(null);

    if (request.status >= 200 && request.status < 300) {
        document.write(request.responseText);
        return;
    }

    document.write(`<!-- Failed to load partial: ${path} -->`);
    console.error(`Failed to load partial: ${path}`);
}