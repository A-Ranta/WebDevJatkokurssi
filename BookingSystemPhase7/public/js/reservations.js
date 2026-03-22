// ===============================
// 0) Authorization
// ===============================

import { initAuthUI, getUserRole, requireAuthOrBlockPage, logout } from "./auth-ui.js";
initAuthUI();
if (!requireAuthOrBlockPage()) {

    throw new Error("Authentication required");
}

//initAuthUI();
window.logout = logout;

// CREATE
document.getElementById("reservationForm").addEventListener("submit",
    async (e) => {
        e.preventDefault();
        const data = {
            resourceId: Number(document.getElementById("resourceId").value),
            userId: Number(document.getElementById("userId").value),
            startTime: new Date(document.getElementById("startDate").value).toISOString(),
            endTime: new Date(document.getElementById("endDate").value).toISOString(),
            note: document.getElementById("reservationNote").value, status: document.querySelector('input[name="status"]:checked').value
        };

        const res = await fetch("/api/reservations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); alert(res.status === 201 ? "Created ✅" : "Error ❌");
    });

// UPDATE 
const updateButton = document.getElementById("updateButton");

if (updateButton) {
    updateButton.addEventListener("click", async () => {
        const id = document.getElementById("reservationId").value;

        if (!id) {
            alert("Select reservation first");
            return;
        }

        const data = {
            resourceId: Number(document.getElementById("resourceId").value),
            userId: Number(document.getElementById("userId").value),
            startTime: new Date(document.getElementById("startDate").value).toISOString(),
            endTime: new Date(document.getElementById("endDate").value).toISOString(), note:
                document.getElementById("reservationNote").value, status: document.querySelector('input[name="status"]:checked').value
        };

        await fetch("/api/reservations/${id}", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        alert("Updated ✅");
    });
}

// DELETE
document.getElementById("deleteButton").addEventListener("click",
    async () => {
        const id = document.getElementById("reservationId").value;

        if (!id) {
            alert("Select reservation first");
            return;
        }

        await fetch("/api/reservations / ${ id }", {
            method: "DELETE"
        });

        alert("Deleted 🗑️");
    });