// Quote Form JS - Multi-Step Form Logic
function initQuoteForm() {
  let currentStep = 1;
  const totalSteps = 3;
  const formNextBtn = document.getElementById('quote-next-btn');
  const formNextText = document.getElementById('quote-next-text');
  const formArrowIcon = document.getElementById('quote-arrow-icon');
  const stepIndicatorText = document.getElementById('step-indicator-text');
  
  const stepContainers = [
    document.getElementById('form-step-1'),
    document.getElementById('form-step-2'),
    document.getElementById('form-step-3')
  ];
  const stepProgressBarSegments = [
    document.getElementById('progress-seg-1'),
    document.getElementById('progress-seg-2'),
    document.getElementById('progress-seg-3')
  ];
  const stepLabels = [
    document.getElementById('label-step-1'),
    document.getElementById('label-step-2'),
    document.getElementById('label-step-3')
  ];

  function updateFormUI() {
    if (stepIndicatorText) stepIndicatorText.textContent = `Step ${currentStep} of ${totalSteps}`;
    stepContainers.forEach((c, i) => { if (c) c.classList.toggle('hidden', i + 1 !== currentStep); });
    stepProgressBarSegments.forEach((s, i) => {
      if (s) { s.classList.toggle('bg-primary', i < currentStep); s.classList.toggle('bg-gray-200', i >= currentStep); }
    });
    stepLabels.forEach((l, i) => {
      if (l) l.className = i + 1 === currentStep
        ? "text-[0.65rem] uppercase font-bold tracking-wider text-primary border-b-2 border-primary pb-1"
        : "text-[0.65rem] uppercase font-bold tracking-wider text-gray-400";
    });
    if (formNextText) {
      formNextText.textContent = currentStep === 3 ? "Get a Free Estimate" : "Next Step";
      formArrowIcon?.classList.toggle('hidden', currentStep === 3);
    }
  }

  if (formNextBtn) {
    formNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep < 3) { currentStep++; updateFormUI(); }
      else { alert('Quote submitted successfully! (Demo Mode)'); currentStep = 1; updateFormUI(); }
    });
  }
}
