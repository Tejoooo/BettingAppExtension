document.addEventListener("DOMContentLoaded", () => {
    const targetWebsite = "www.google.com"; 
    if (window.location.href.includes(targetWebsite)) {
        console.log("Target website visited. Sending alert...");

        fetch("http://127.0.0.1:5000/send-sms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                website: window.location.href
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Alert sent successfully:", data);
            alert("📢 Alert triggered: SMS and call sent to parent!");
        })
        .catch(error => {
            console.error("Error sending alert:", error);
            alert("❌ Failed to trigger alert.");
        });
    }
});
