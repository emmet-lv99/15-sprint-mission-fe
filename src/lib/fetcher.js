const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

/**
 * Express 백엔드 서버와 통신하기 위한 공통 HTTP Fetcher 래퍼
 * @param {string} endpoint - API 엔드포인트 경로 (예: '/studies')
 * @param {RequestInit} [options={}] - fetch 옵션 (method, headers, body 등)
 */
export async function fetcher(endpoint, options = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const error = new Error(
      errorData.message || 'API 요청 중 에러가 발생했습니다.',
    );
    error.status = response.status;
    error.data = errorData;
    throw error;
  }

  return response.json();
}
