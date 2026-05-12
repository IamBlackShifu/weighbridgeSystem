const SESSION_KEY = "weighbridgeSession";

if (sessionStorage.getItem(SESSION_KEY)) {
  location.href = "app.html";
}

const byId = (id) => document.getElementById(id);

byId("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const session = {
    operator: byId("loginOperator").value.trim() || "Operator A",
    shift: byId("loginShift").value,
    bridge: byId("loginBridge").value,
    workstation: byId("loginWorkstation").value,
    startedAt: new Date().toISOString()
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  location.href = "app.html";
});
