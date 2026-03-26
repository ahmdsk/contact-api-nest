export function ok<T>(data: T, message?: string) {
  return {
    success: true,
    message: message ?? 'Success',
    data,
  };
}
