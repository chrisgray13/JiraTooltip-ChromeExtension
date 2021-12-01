function initializeTextOption(optionKey, optionInputId) {
    let textOptionElement = document.getElementById(optionInputId);

    chrome.storage.sync.get([ optionKey ], (data) => {
        textOptionElement.value = data[optionKey] ?? "";
    });

    textOptionElement.onchange = function(event) {
        chrome.storage.sync.set({ [optionKey]: event.currentTarget.value });
    };
}

function initializeOptions() {

    initializeTextOption("jiraUrl", "jiraUrl");

    initializeTextOption("jiraApiKey", "jiraApiKey");

    initializeTextOption("jiraProjectIds", "jiraProjectIds");
}

initializeOptions();