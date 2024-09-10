const getBotResponse = (message) => {
    message = message.toLowerCase();

    if (message.includes("hello")) {
        return 'Hello! How can I assist you?';
    } else if (message.includes('bye') || message.includes('by')) {
        return 'Goodbye! Have a great day';
    } else if (message.includes('help')) {
        return 'Sure, how can I help you?';
    } else {
        return `You said: ${message}`;
    }
};

export { getBotResponse };
