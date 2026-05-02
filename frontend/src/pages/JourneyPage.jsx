// ============================================================
// Interactive Voter Journey — 5-Step Checklist
// ============================================================

import { useState, useCallback } from 'react';

const JOURNEY_STEPS = [
  {
    id: 1,
    icon: '✅',
    label: 'Eligibility',
    title: 'Check Your Eligibility',
    content: {
      heading: 'Am I eligible to vote?',
      description: 'Before you begin the voting process, make sure you meet all the eligibility criteria set by the Election Commission of India.',
      checklist: [
        { text: 'You must be an Indian citizen', detail: 'Persons of Indian Origin (PIO) or Overseas Citizens of India (OCI) are not eligible.' },
        { text: 'You must be 18 years or older', detail: 'Age is calculated as of January 1st of the year of electoral roll revision.' },
        { text: 'You must be a resident of the constituency', detail: 'You can only vote in the constituency where you are registered.' },
        { text: 'You must not be disqualified under any law', detail: 'Certain criminal convictions or unsound mind can disqualify a person.' },
      ],
      tip: '💡 Visit voters.eci.gov.in to check your eligibility online.',
    },
  },
  {
    id: 2,
    icon: '📝',
    label: 'Registration',
    title: 'Register as a Voter',
    content: {
      heading: 'How do I register?',
      description: 'Getting your name on the electoral roll is the first official step. You can register online or offline.',
      checklist: [
        { text: 'Online: Fill Form 6 at voters.eci.gov.in', detail: 'The Voter Portal lets you apply digitally with document uploads.' },
        { text: 'Offline: Visit your nearest Electoral Registration Office', detail: 'Contact the Booth Level Officer (BLO) in your area for assistance.' },
        { text: 'Download Voter Helpline App', detail: 'Available on Android & iOS — track your application status in real-time.' },
        { text: 'Processing time: 15–30 days', detail: 'After verification by the Electoral Registration Officer, your name appears on the roll.' },
      ],
      tip: '💡 You can also call the Election Commission Helpline at 1950 for assistance.',
    },
  },
  {
    id: 3,
    icon: '📄',
    label: 'Documents',
    title: 'Prepare Your Documents',
    content: {
      heading: 'What documents do I need?',
      description: 'Keep your documents ready for both registration and voting day. Here\'s your complete checklist.',
      checklist: [
        { text: 'Age Proof: Birth certificate, Class 10 marksheet, or passport', detail: 'Any government-issued document showing your date of birth.' },
        { text: 'Address Proof: Aadhaar card, utility bill, or rent agreement', detail: 'Must match the constituency where you want to register.' },
        { text: 'Passport-size photographs', detail: 'Recent color photographs with white background.' },
        { text: 'Voter ID (EPIC Card) for voting day', detail: 'If not available, you can use Aadhaar, Passport, DL, PAN, or any govt. photo ID.' },
      ],
      tip: '💡 Keep both originals and photocopies ready. Officials may ask for either.',
    },
  },
  {
    id: 4,
    icon: '📍',
    label: 'Find Booth',
    title: 'Locate Your Polling Booth',
    content: {
      heading: 'Where do I vote?',
      description: 'Every registered voter is assigned a specific polling booth. Here\'s how to find yours.',
      checklist: [
        { text: 'Use the Voter Portal: voters.eci.gov.in', detail: 'Go to "Know Your Polling Booth" section and enter your EPIC number.' },
        { text: 'Use the Voter Helpline App', detail: 'The app shows your booth location on a map with directions.' },
        { text: 'Call Helpline 1950', detail: 'Provide your voter ID number and they\'ll tell you your booth.' },
        { text: 'Check your Voter Slip', detail: 'Distributed by BLOs before elections — contains your booth address.' },
      ],
      tip: '💡 Visit your booth location a day before to know the exact spot and avoid last-minute confusion.',
    },
  },
  {
    id: 5,
    icon: '🗳️',
    label: 'Voting Day',
    title: 'Cast Your Vote',
    content: {
      heading: 'It\'s Voting Day!',
      description: 'The big day is here. Follow these steps to cast your vote smoothly and confidently.',
      checklist: [
        { text: 'Carry your Voter ID or valid photo ID', detail: 'Aadhaar, Passport, DL, PAN card — any one will work.' },
        { text: 'Reach your booth between 7 AM – 6 PM', detail: 'Timing may vary by region. Go early to avoid long queues.' },
        { text: 'Follow the voting process', detail: 'Queue → ID Check → Ink on finger → Enter booth → Press EVM button → Check VVPAT slip → Exit.' },
        { text: 'No phones inside the booth', detail: 'Mobile phones, cameras, and electronic devices are strictly prohibited.' },
      ],
      tip: '🎉 Congratulations on exercising your democratic right! Check results at results.eci.gov.in after counting day.',
    },
  },
];

function JourneyPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const currentStep = JOURNEY_STEPS.find((s) => s.id === activeStep);
  const progress = (completedSteps.size / JOURNEY_STEPS.length) * 100;

  const handleNext = useCallback(() => {
    setCompletedSteps((prev) => new Set([...prev, activeStep]));
    if (activeStep < JOURNEY_STEPS.length) {
      setActiveStep((prev) => prev + 1);
    }
  }, [activeStep]);

  const handleBack = useCallback(() => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  }, [activeStep]);

  const handleStepClick = useCallback((stepId) => {
    setActiveStep(stepId);
  }, []);

  return (
    <section className="journey-page" id="journey-page">
      <div className="journey-container">
        {/* Page Header */}
        <div className="journey-header">
          <h1 className="journey-title">Your Voter Journey</h1>
          <p className="journey-subtitle">
            Follow these 5 steps to become a confident, prepared voter
          </p>
        </div>

        {/* Progress Bar */}
        <div className="journey-progress-wrapper">
          <div className="journey-progress-info">
            <span>Progress</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="journey-progress-track">
            <div
              className="journey-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Horizontal Step Indicators */}
        <div className="journey-steps-bar">
          {JOURNEY_STEPS.map((step) => {
            const isCompleted = completedSteps.has(step.id);
            const isActive = step.id === activeStep;
            let statusClass = 'upcoming';
            if (isCompleted && !isActive) statusClass = 'completed';
            if (isActive) statusClass = 'active';

            return (
              <button
                key={step.id}
                className={`journey-step-indicator ${statusClass}`}
                onClick={() => handleStepClick(step.id)}
                id={`journey-step-${step.id}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div className="journey-step-circle">
                  {isCompleted && !isActive ? (
                    <span className="journey-step-check">✓</span>
                  ) : (
                    <span>{step.icon}</span>
                  )}
                </div>
                <span className="journey-step-label">{step.label}</span>
              </button>
            );
          })}
          {/* Connector lines */}
          <div className="journey-steps-connector">
            <div
              className="journey-steps-connector-fill"
              style={{ width: `${((activeStep - 1) / (JOURNEY_STEPS.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Active Step Content Card */}
        {currentStep && (
          <div className="journey-content-card" key={currentStep.id}>
            <div className="journey-content-header">
              <span className="journey-content-step-badge">
                Step {currentStep.id} of {JOURNEY_STEPS.length}
              </span>
              <h2 className="journey-content-title">{currentStep.content.heading}</h2>
              <p className="journey-content-desc">{currentStep.content.description}</p>
            </div>

            <div className="journey-checklist">
              {currentStep.content.checklist.map((item, index) => (
                <div className="journey-checklist-item" key={index}>
                  <div className="journey-checklist-icon">
                    {completedSteps.has(currentStep.id) ? '✅' : `${index + 1}`}
                  </div>
                  <div className="journey-checklist-text">
                    <div className="journey-checklist-main">{item.text}</div>
                    <div className="journey-checklist-detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {currentStep.content.tip && (
              <div className="journey-tip">{currentStep.content.tip}</div>
            )}

            {/* Navigation Buttons */}
            <div className="journey-nav-buttons">
              <button
                className="btn-journey-back"
                onClick={handleBack}
                disabled={activeStep === 1}
                id="journey-back-btn"
              >
                ← Back
              </button>
              <button
                className="btn-journey-next"
                onClick={handleNext}
                id="journey-next-btn"
              >
                {activeStep === JOURNEY_STEPS.length ? 'Complete ✓' : 'Next →'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default JourneyPage;
