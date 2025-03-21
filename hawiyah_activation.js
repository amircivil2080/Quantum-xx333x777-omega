// کد فعال‌سازی پروتکل هاویه
function activateSystem() {
    document.getElementById('status').innerHTML = "🔍 Establishing Secure Link to Satellite Grid...";
    setTimeout(establishLink, 3000);
}

// شبیه‌سازی اتصال به شبکه ماهواره‌ای مخفی
function establishLink() {
    document.getElementById('status').innerHTML = "📡 Connection Established! Secure Uplink Active...";
    setTimeout(activateHawiyahProtocol, 4000);
}

// فعال‌سازی پروتکل مخفی هاویه
function activateHawiyahProtocol() {
    document.getElementById('status').innerHTML = "⚡️ Hawiyah Protocol Initiated! 🔥";
    
    // فعال‌سازی فرمان صوتی محرمانه
    setTimeout(() => {
        document.getElementById('status').innerHTML += "<p>🔊 Voice Command Detected! Confirming Activation...</p>";
        setTimeout(confirmActivation, 3000);
    }, 2000);
}

// تأیید فعال‌سازی سیستم نهایی
function confirmActivation() {
    document.getElementById('status').innerHTML += "<h2>💀 System Fully Armed - Awaiting Final Authorization! 💀</h2>";
    console.log("☣️ HAWIYAH PROTOCOL ONLINE! ☣️");
}
