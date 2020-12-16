function isValidProgressBar(progress) {
    if (typeof progress !== 'object' ||
        progress === null ||
        Array.isArray(progress)) {
        return false;
    }

    if (!progress.title ||
        typeof progress.title !== 'string') {
        return false;
    }

    if (typeof progress.value !== 'number' ||
        progress.value < 0 ||
        progress.value > 100) {
        return false;
    }

    return true;
}

export { isValidProgressBar }