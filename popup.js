chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            func: () => window.LS_DUMP
        },
        (results) => {
            const output = document.getElementById("output");
            output.textContent = JSON.stringify(results[0].result, null, 2);
        }
    );
});
