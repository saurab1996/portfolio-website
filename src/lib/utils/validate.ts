export const contactFormRules = {
  required: (value: string) =>
    !value.trim() ? 'This field is required' : undefined,

  minName: (value: string) =>
    value.trim().length < 2 ? 'Must be at least 2 characters' : undefined,

  minMessage: (value: string) =>
    value.trim().length < 10 ? 'Must be at least 10 characters' : undefined,

  email: (value: string) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? 'Invalid email address'
      : undefined,
};

export const validate =
  (...fns: ((v: string) => string | undefined)[]) =>
  (value: string) =>
    fns.map((fn) => fn(value)).find(Boolean);
