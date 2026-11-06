import { useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, RotateCcw, Send, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { digitsOnly, isValidEmail } from '../../lib/utils';

const EMPTY_VALUES = {
  name: '',
  phone: '',
  email: '',
  userType: '',
  assistanceType: '',
  preferredTime: '',
  message: '',
};

const FIELD_ORDER = [
  'name',
  'phone',
  'email',
  'userType',
  'assistanceType',
  'preferredTime',
  'message',
];

const ASSISTANCE_KEYS = [
  'platforms',
  'booking',
  'joining',
  'navigation',
  'caregiver',
  'other',
];

const CONTACT_TIME_KEYS = ['morning', 'afternoon', 'evening', 'anytime'];

function FieldError({ id, message }) {
  return (
    <p id={id} className="field-error" role="alert">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

export function ContactForm() {
  const { copy } = useLanguage();
  const contact = copy.contact;

  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const userTypeRef = useRef(null);
  const assistanceTypeRef = useRef(null);
  const preferredTimeRef = useRef(null);
  const messageRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    if (status === 'success') {
      window.requestAnimationFrame(() => resultRef.current?.focus());
    }
  }, [status]);

  const focusFirstError = (nextErrors) => {
    const refs = {
      name: nameRef,
      phone: phoneRef,
      email: emailRef,
      userType: userTypeRef,
      assistanceType: assistanceTypeRef,
      preferredTime: preferredTimeRef,
      message: messageRef,
    };
    const firstField = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstField) {
      window.requestAnimationFrame(() => refs[firstField].current?.focus());
    }
  };

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const next = {};

    if (values.name.trim().length < 2) {
      next.name = contact.errors.name;
    }

    const phoneDigits = digitsOnly(values.phone);
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      next.phone = contact.errors.phone;
    }

    if (values.email.trim() && !isValidEmail(values.email)) {
      next.email = contact.errors.email;
    }

    if (!values.userType) {
      next.userType = contact.errors.userType;
    }

    if (!values.assistanceType) {
      next.assistanceType = contact.errors.assistanceType;
    }

    if (!values.preferredTime) {
      next.preferredTime = contact.errors.preferredTime;
    }

    if (values.message.trim().length < 10) {
      next.message = contact.errors.message;
    }

    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      focusFirstError(nextErrors);
      return;
    }

    setValues(EMPTY_VALUES);
    setErrors({});
    setStatus('success');
  };

  const resetForm = () => {
    setValues(EMPTY_VALUES);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:p-6"
      >
        <span className="icon-tile">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3
          ref={resultRef}
          tabIndex={-1}
          className="mt-4 font-display text-[1.55rem] font-semibold leading-tight text-brand-950"
        >
          {contact.demo.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink">{contact.demo.body}</p>
        <button
          type="button"
          onClick={resetForm}
          className="btn btn-secondary mt-6 w-full justify-center sm:w-auto"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          <span>{contact.demo.another}</span>
        </button>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <h3 className="font-display text-[1.55rem] font-semibold leading-tight text-brand-950">
          {contact.formTitle}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed muted">{contact.formIntro}</p>
      </div>

      <p className="mt-4 text-[0.85rem] text-muted">{contact.requiredNote}</p>

      {hasErrors ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl border-2 border-[#B42318] bg-[#FFF7F6] p-3 text-[0.9rem] font-semibold leading-snug text-[#8A1C13]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{contact.errors.summary}</span>
        </div>
      ) : null}

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="contact-name" className="field-label">
            {contact.fields.name}{' '}
            <span className="field-required">({copy.common.required})</span>
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            value={values.name}
            onChange={handleChange('name')}
            placeholder={contact.fields.namePlaceholder}
            className="field"
          />
          {errors.name ? <FieldError id="contact-name-error" message={errors.name} /> : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="field-label">
            {contact.fields.phone}{' '}
            <span className="field-required">({copy.common.required})</span>
          </label>
          <input
            ref={phoneRef}
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.phone) || undefined}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            value={values.phone}
            onChange={handleChange('phone')}
            placeholder={contact.fields.phonePlaceholder}
            className="field"
          />
          {errors.phone ? <FieldError id="contact-phone-error" message={errors.phone} /> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            {contact.fields.email}{' '}
            <span className="text-[0.8rem] font-semibold text-muted">
              ({copy.common.optional})
            </span>
          </label>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={120}
            aria-invalid={Boolean(errors.email) || undefined}
            aria-describedby={`contact-email-hint${
              errors.email ? ' contact-email-error' : ''
            }`}
            value={values.email}
            onChange={handleChange('email')}
            placeholder={contact.fields.emailPlaceholder}
            className="field"
          />
          <p id="contact-email-hint" className="field-hint">
            {contact.fields.emailHint}
          </p>
          {errors.email ? <FieldError id="contact-email-error" message={errors.email} /> : null}
        </div>

        <div>
          <label htmlFor="contact-user-type" className="field-label">
            {contact.fields.userType}{' '}
            <span className="field-required">({copy.common.required})</span>
          </label>
          <select
            ref={userTypeRef}
            id="contact-user-type"
            name="userType"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.userType) || undefined}
            aria-describedby={errors.userType ? 'contact-user-type-error' : undefined}
            value={values.userType}
            onChange={handleChange('userType')}
            className="field"
          >
            <option value="">{contact.fields.userTypePlaceholder}</option>
            <option value="elderly">{contact.userTypes.elderly}</option>
            <option value="caregiver">{contact.userTypes.caregiver}</option>
            <option value="other">{contact.userTypes.other}</option>
          </select>
          {errors.userType ? (
            <FieldError id="contact-user-type-error" message={errors.userType} />
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-assistance-type" className="field-label">
            {contact.fields.assistanceType}{' '}
            <span className="field-required">({copy.common.required})</span>
          </label>
          <select
            ref={assistanceTypeRef}
            id="contact-assistance-type"
            name="assistanceType"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.assistanceType) || undefined}
            aria-describedby={
              errors.assistanceType ? 'contact-assistance-type-error' : undefined
            }
            value={values.assistanceType}
            onChange={handleChange('assistanceType')}
            className="field"
          >
            <option value="">{contact.fields.assistanceTypePlaceholder}</option>
            {ASSISTANCE_KEYS.map((key) => (
              <option key={key} value={key}>
                {contact.assistanceTypes[key]}
              </option>
            ))}
          </select>
          {errors.assistanceType ? (
            <FieldError id="contact-assistance-type-error" message={errors.assistanceType} />
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-preferred-time" className="field-label">
            {contact.fields.preferredTime}{' '}
            <span className="field-required">({copy.common.required})</span>
          </label>
          <select
            ref={preferredTimeRef}
            id="contact-preferred-time"
            name="preferredTime"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.preferredTime) || undefined}
            aria-describedby={
              errors.preferredTime ? 'contact-preferred-time-error' : undefined
            }
            value={values.preferredTime}
            onChange={handleChange('preferredTime')}
            className="field"
          >
            <option value="">{contact.fields.preferredTimePlaceholder}</option>
            {CONTACT_TIME_KEYS.map((key) => (
              <option key={key} value={key}>
                {contact.contactTimes[key]}
              </option>
            ))}
          </select>
          {errors.preferredTime ? (
            <FieldError id="contact-preferred-time-error" message={errors.preferredTime} />
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className="field-label">
            {contact.fields.message}{' '}
            <span className="field-required">({copy.common.required})</span>
          </label>
          <textarea
            ref={messageRef}
            id="contact-message"
            name="message"
            rows={5}
            maxLength={800}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={`contact-message-hint${
              errors.message ? ' contact-message-error' : ''
            }`}
            value={values.message}
            onChange={handleChange('message')}
            placeholder={contact.fields.messagePlaceholder}
            className="field resize-y"
          />
          <p id="contact-message-hint" className="field-hint">
            {contact.fields.messageHint}
          </p>
          {errors.message ? (
            <FieldError id="contact-message-error" message={errors.message} />
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn btn-primary min-h-14 w-full">
          <Send className="h-5 w-5" aria-hidden="true" />
          <span>{contact.submit}</span>
        </button>
        <p className="mt-3 text-center text-[0.78rem] leading-relaxed text-muted">
          {contact.demo.disclosure}
        </p>
      </div>

      <p className="mt-4 flex items-start gap-2 text-[0.85rem] leading-relaxed muted">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{contact.privacyNote}</span>
      </p>
      <p className="mt-2 flex items-start gap-2 text-[0.85rem] leading-relaxed muted">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{contact.emergencyBody}</span>
      </p>
    </form>
  );
}
