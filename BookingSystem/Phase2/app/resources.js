// ===============================
// 1) DOM references
// ===============================
const actions = document.getElementById("resourceActions");
const resourceNameContainer = document.getElementById("resourceNameContainer");
const resourceDescriptionContainer = document.getElementById("resourceDescriptionContainer");
//const resourceAvailableContainer = document.getElementById("resourceAvailableContainer");

// Example roles
const role = "admin"; // "reserver" | "admin"

// Will hold a reference to the Create button so we can enable/disable it
let createButton = null;

//resource name ja resource desciption tilan validointi
let resourceNameValid = false;
let resourceDescriptionValid = false;

// ===============================
// 2) Button creation helpers
// ===============================

const BUTTON_BASE_CLASSES =
  "w-full rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out";

const BUTTON_ENABLED_CLASSES =
  "bg-brand-primary text-white hover:bg-brand-dark/80 shadow-soft";

const BUTTON_DISABLED_CLASSES =
  "cursor-not-allowed opacity-50";

function addButton({ label, type = "button", value, classes = "" }) {
  const btn = document.createElement("button");
  btn.type = type;
  btn.textContent = label;
  btn.name = "action";
  if (value) btn.value = value;

  btn.className = `${BUTTON_BASE_CLASSES} ${classes}`.trim();

  actions.appendChild(btn);
  return btn;
}

function setButtonEnabled(btn, enabled) {
  if (!btn) return;

  btn.disabled = !enabled;

  // Keep disabled look in ONE place (here)
  btn.classList.toggle("cursor-not-allowed", !enabled);
  btn.classList.toggle("opacity-50", !enabled);

  // Optional: remove hover feel when disabled (recommended UX)
  if (!enabled) {
    btn.classList.remove("hover:bg-brand-dark/80");
  } else {
    // Only re-add if this button is supposed to have it
    // (for Create we know it is)
    if (btn.value === "create" || btn.textContent === "Create") {
      btn.classList.add("hover:bg-brand-dark/80");
    }
  }
}

function renderActionButtons(currentRole) {
  if (currentRole === "reserver") {
    createButton = addButton({
      label: "Create",
      type: "submit",
      classes: BUTTON_ENABLED_CLASSES,
    });
  }

  if (currentRole === "admin") {
    createButton = addButton({
      label: "Create",
      type: "submit",
      value: "create",
      classes: BUTTON_ENABLED_CLASSES,
    });

    updateButton = addButton({
      label: "Update",
      value: "update",
      classes: BUTTON_ENABLED_CLASSES,
    });

    deleteButton = addButton({
      label: "Delete",
      value: "delete",
      classes: BUTTON_ENABLED_CLASSES,
    });
  }

  // Default: Buttons are disabled until validation says it's OK
  setButtonEnabled(createButton, false);
  setButtonEnabled(updateButton, false);
  setButtonEnabled(deleteButton, false);
}

// ===============================
// 3) Input creation + validation
// ===============================
function createResourceNameInput(container) {
  const input = document.createElement("input");

  // Core attributes
  input.id = "resourceName";
  input.name = "resourceName";
  input.type = "text";
  input.placeholder = "e.g., Meeting Room A";

  // Base Tailwind styling (single source of truth)
  input.className = `
    mt-2 w-full rounded-2xl border border-black/10 bg-white
    px-4 py-3 text-sm outline-none
    focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30
    transition-all duration-200 ease-out
  `;

  container.appendChild(input);
  return input;
}


function isResourceNameValid(value) {
  const trimmed = value.trim();

  // Allowed: letters, numbers, Finnish letters, and space (based on your current regex)
  const allowedPattern = /^[a-zA-Z0-9äöåÄÖÅ ]+$/;

  const lengthValid = trimmed.length >= 5 && trimmed.length <= 30;
  const charactersValid = allowedPattern.test(trimmed);

  return lengthValid && charactersValid;
}

//Resource Description kohdan syötteen luonti
function createResourceDescriptionInput(container) {
 const textarea = document.createElement("textarea");

  // Core attributes
  textarea.id = "resourceDescription";
  textarea.name = "resourceDescription";
  textarea.placeholder = "e.g., Descripbe location or capacity etc";
  textarea.rows = 4;

  // Base Tailwind styling (single source of truth)
  textarea.className = `
    mt-2 w-full rounded-2xl border border-black/10 bg-white
    px-4 py-3 text-sm outline-none
    focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30
    transition-all duration-200 ease-out
  `;

  container.appendChild(textarea);
  return textarea;
}

// Resource Description validoinnin tarkistus
function isResourceDescriptionValid(value) {
  const trimmed = value.trim();

  // Allowed: letters, numbers, Finnish letters, and space (based on your current regex)
  const allowedPattern = /^[a-zA-Z0-9äöåÄÖÅ ]+$/;

  const lengthValid = trimmed.length >= 10 && trimmed.length <= 50;
  const charactersValid = allowedPattern.test(trimmed);

  return lengthValid && charactersValid;
}

/*Available syötteen luonti
function createResourceAvailableInput(container) {
  const checked = document.createElement("checked");

  // Core attributes
  checked.id = "resourceAvailable";
  checked.name = "resourceAvailable";

  container.appendChild(checked);
  return checked;
}
  
Resource availbility validoinnin tarkistus
function isResourceAvailableValid() {
  const checked = document.getElementById("resourceAvailable");
  return checked ? checked.checked : false;
}
  */

function setInputVisualState(input, state) {
  // Reset to neutral base state (remove only our own validation-related classes)
  input.classList.remove(
    "border-green-500",
    "bg-green-100",
    "focus:ring-green-500/30",
    "border-red-500",
    "bg-red-100",
    "focus:ring-red-500/30",
    "focus:border-brand-blue",
    "focus:ring-brand-blue/30"
  );

  // Ensure base focus style is present when neutral
  // (If we are valid/invalid, we override ring color but keep ring behavior)
  input.classList.add("focus:ring-2");

  if (state === "valid") {
    input.classList.add("border-green-500", "bg-green-100", "focus:ring-green-500/30");
  } else if (state === "invalid") {
    input.classList.add("border-red-500", "bg-red-100", "focus:ring-red-500/30");
  } else {
    // neutral: keep base border/bg; nothing else needed
  }
}

function attachResourceNameValidation(input) {
  const update = () => {
    const raw = input.value;
    if (raw.trim() === "") {
      setInputVisualState(input, "neutral");
      setButtonEnabled(createButton, false);
      return;
    }

    //const resourceNameValid = isResourceNameValid(raw);
    resourceNameValid = isResourceNameValid(raw);

    setInputVisualState(input, resourceNameValid ? "valid" : "invalid");
    setButtonEnabled(createButton, resourceNameValid && resourceDescriptionValid);
  };


  // Real-time validation
  input.addEventListener("input", update);

  // Initialize state on page load (Create disabled until valid)
  update();
}

//Resourse Description validoinnin kiinnitys textareaan
function attachResourceDescriptionValidation(textarea) {
  const update = () => {
    const raw = textarea.value;

    if (raw.trim() === "") {
      setInputVisualState(textarea, "neutral");
      setButtonEnabled(createButton, false);
      return;
    }

    //const resourceDescriptionValid = isResourceDescriptionValid(raw);
    resourceDescriptionValid = isResourceDescriptionValid(raw);

    setInputVisualState(textarea, resourceDescriptionValid ? "valid" : "invalid");
    setButtonEnabled(createButton, resourceNameValid && resourceDescriptionValid);
  };


  // Real-time validation
  textarea.addEventListener("input", update);

  // Initialize state on page load (Create disabled until valid)
  update();
}

/*
function attachResourceAvailableValidation(checked) {

  const valid = isResourceAvailableValid(raw);

  setInputVisualState(textarea, valid ? "valid" : "invalid");
    const ResourceValid = isResourceAvailableValid(resourceAvailableInput.checked);
    setButtonEnabled(createButton, valid && DescriptionValid && ResourceValid);
}
    */

// ===============================
// 4) Bootstrapping
// ===============================
renderActionButtons(role);

// Create + validate input
const resourceNameInput = createResourceNameInput(resourceNameContainer);
attachResourceNameValidation(resourceNameInput);

//luo ja validoi resourceDescription syöte
const resourceDescriptionInput = createResourceDescriptionInput(resourceDescriptionContainer);
attachResourceDescriptionValidation(resourceDescriptionInput);

/*
const resourceAvailableInput = createResourceAvailableInput(resourceAvailableContainer);
attachResourceAvailableValidation(resourceAvailableInput);
*/
