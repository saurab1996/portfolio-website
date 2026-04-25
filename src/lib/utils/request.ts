import { API_URL } from "$lib/config";

type RequestOptions = {
  headers?: Record<string, string>;
};

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const message = await res.text().catch(() => `HTTP ${res.status}`);
    throw new ApiError(res.status, message);
  }
  return res.json() as Promise<T>;
}

function handleError(err: unknown): never {
  if (err instanceof ApiError) throw err;
  if (err instanceof TypeError)
    throw new ApiError(0, "Network error — check your connection");
  throw new ApiError(0, "An unexpected error occurred");
}

async function fetchRequest<T>(
  endpoint: string,
  init: RequestInit,
): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init.headers },
    });
    return await handleResponse<T>(res);
  } catch (err) {
    handleError(err);
  }
}

export const request = {
  get: <T>(endpoint: string, options: RequestOptions = {}) =>
    fetchRequest<T>(endpoint, { method: "GET", headers: options.headers }),

  post: <T>(endpoint: string, body: unknown, options: RequestOptions = {}) =>
    fetchRequest<T>(endpoint, {
      method: "POST",
      headers: options.headers,
      body: JSON.stringify(body),
    }),

  put: <T>(endpoint: string, body: unknown, options: RequestOptions = {}) =>
    fetchRequest<T>(endpoint, {
      method: "PUT",
      headers: options.headers,
      body: JSON.stringify(body),
    }),

  patch: <T>(endpoint: string, body: unknown, options: RequestOptions = {}) =>
    fetchRequest<T>(endpoint, {
      method: "PATCH",
      headers: options.headers,
      body: JSON.stringify(body),
    }),

  delete: <T>(endpoint: string, options: RequestOptions = {}) =>
    fetchRequest<T>(endpoint, { method: "DELETE", headers: options.headers }),
};
