chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            func: () => window.__LS_DUMP__
        },
        (results) => {
            const output = document.getElementById("output");
            output.textContent = JSON.stringify(results[0].result, null, 2);
        }
    );
});
