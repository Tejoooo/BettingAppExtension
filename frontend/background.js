chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const targetSite = "www.google.com"; // 🔄 Change this to the website you want to track

    if (changeInfo.url && changeInfo.url.includes(targetSite)) {
        console.log("📡 Detected visit to:", changeInfo.url);

        fetch("http://127.0.0.1:5000/send-sms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ website: changeInfo.url })
        })
        .then(res => res.json())
        .then(data => {
            console.log("✅ Alert sent successfully:", data);
            chrome.notifications.create({
                type: "basic",
                title: "Alert Triggered",
                message: "SMS and call sent to parent for visiting: " + targetSite
            });
        })
        .catch(err => {
            console.error("❌ Failed to send alert:", err);
        });
    }
});
