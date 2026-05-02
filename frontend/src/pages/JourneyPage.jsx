// ============================================================
// Interactive Voter Journey — 5-Step Checklist
// ============================================================

import { useState, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

function JourneyPage() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  // Use useMemo to get translated steps
  const stepsData = useMemo(() => {
    const rawSteps = t('journey.steps');
    if (!Array.isArray(rawSteps)) return [];
    
    // Add original IDs and icons back
    const icons = ['✅', '📝', '📄', '📍', '🗳️'];
    return rawSteps.map((step, index) => ({
      ...step,
      id: index + 1,
      icon: icons[index] || '🔹',
    }));
  }, [t]);

  const currentStep = stepsData.find((s) => s.id === activeStep);
  const progress = stepsData.length ? (completedSteps.size / stepsData.length) * 100 : 0;

  const handleNext = useCallback(() => {
    setCompletedSteps((prev) => new Set([...prev, activeStep]));
    if (activeStep < stepsData.length) {
      setActiveStep((prev) => prev + 1);
    }
  }, [activeStep, stepsData.length]);

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
          <h1 className="journey-title">{t('journey.headerTitle')}</h1>
          <p className="journey-subtitle">
            {t('journey.headerSubtitle')}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="journey-progress-wrapper">
          <div className="journey-progress-info">
            <span>{t('journey.progress')}</span>
            <span>{Math.round(progress)}% {t('journey.complete')}</span>
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
          {stepsData.map((step) => {
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
          {stepsData.length > 0 && (
            <div className="journey-steps-connector">
              <div
                className="journey-steps-connector-fill"
                style={{ width: `${((activeStep - 1) / (stepsData.length - 1)) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Active Step Content Card */}
        {currentStep && (
          <div className="journey-content-card" key={currentStep.id}>
            <div className="journey-content-header">
              <span className="journey-content-step-badge">
                {t('journey.stepOf').replace('{current}', currentStep.id).replace('{total}', stepsData.length)}
              </span>
              <h2 className="journey-content-title">{currentStep.heading}</h2>
              <p className="journey-content-desc">{currentStep.description}</p>
            </div>

            <div className="journey-checklist">
              {currentStep.checklist && currentStep.checklist.map((item, index) => (
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

            {currentStep.tip && (
              <div className="journey-tip">{currentStep.tip}</div>
            )}

            {/* Navigation Buttons */}
            <div className="journey-nav-buttons">
              <button
                className="btn-journey-back"
                onClick={handleBack}
                disabled={activeStep === 1}
                id="journey-back-btn"
              >
                {t('journey.back')}
              </button>
              <button
                className="btn-journey-next"
                onClick={handleNext}
                id="journey-next-btn"
              >
                {activeStep === stepsData.length ? t('journey.completeBtn') : t('journey.next')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default JourneyPage;
