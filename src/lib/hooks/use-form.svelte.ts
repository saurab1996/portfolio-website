type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K]) => string | null;
};

type TouchedState<T> = {
  [K in keyof T]: boolean;
};

type ErrorState<T> = {
  [K in keyof T]: string | null;
};

export function useForm<T extends Record<string, string>>(
  initialValues: T,
  rules: ValidationRules<T>,
  onSubmit: (values: T) => Promise<void>,
) {
  let values = $state<T>({ ...initialValues });
  let touched = $state<TouchedState<T>>(
    Object.fromEntries(
      Object.keys(initialValues).map((k) => [k, false]),
    ) as TouchedState<T>,
  );
  let errors = $state<ErrorState<T>>(
    Object.fromEntries(
      Object.keys(initialValues).map((k) => [k, null]),
    ) as ErrorState<T>,
  );
  let state = $state({
    canSubmit: false,
    loading: false,
    error: null as string | null,
    submitted: false,
  });

  const touch = (field: keyof T) => {
    touched[field] = true;
  };

  $effect(() => {
    let allValid = true;
    for (const key in values) {
      const rule = rules[key];
      const result = rule ? rule(values[key]) : null;
      errors[key] = result;
      if (result !== null) allValid = false;
    }
    state.canSubmit = allValid;
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    state.error = null;
    state.loading = true;
    try {
      await onSubmit(values);
      state.submitted = true;
    } catch (err) {
      state.error =
        err instanceof Error ? err.message : 'Something went wrong.';
    } finally {
      state.loading = false;
    }
  };

  const reset = () => {
    Object.assign(values, { ...initialValues });
    Object.keys(initialValues).forEach((k) => {
      (touched as Record<string, boolean>)[k] = false;
    });
    state.submitted = false;
    state.error = null;
  };

  return {
    get values() {
      return values;
    },
    get touched() {
      return touched;
    },
    get errors() {
      return errors;
    },
    get state() {
      return state;
    },
    handleSubmit,
    touch,
    reset,
  };
}
