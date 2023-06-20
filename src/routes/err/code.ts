export const CODE = {
  400: {
    title: "Bad Request",
    desc: "The server cannot process the request due to invalid syntax.",
  },
  401: {
    title: "Unauthorized",
    desc: "The request requires user authentication.",
  },
  403: {
    title: "Forbidden",
    desc: "The server understands the request, but the client doesn't have permission to access the requested resource.",
  },
  404: {
    title: "Not Found",
    desc: "The server cannot find the requested resource.",
  },
  405: {
    title: "Method Not Allowed",
    desc: "The method specified in the request is not allowed for the requested resource.",
  },
  408: {
    title: "Request Timeout",
    desc: "The server timed out waiting for the request.",
  },
  500: {
    title: "Internal Server Error",
    desc: "A generic error message indicating a server-side problem.",
  },
  502: {
    title: "Bad Gateway",
    desc: "The server acting as a gateway or proxy received an invalid response from the upstream server.",
  },
  503: {
    title: "Service Unavailable",
    desc: "The server is temporarily unable to handle the request due to maintenance or high load.",
  },
  504: {
    title: "Gateway Timeout",
    desc: "The server acting as a gateway or proxy did not receive a timely response from the upstream server.",
  },
  505: {
    title: "HTTP Version Not Supported",
    desc: "The server does not support the HTTP protocol version used in the request.",
  },
};

export function createErrorCode(code: keyof typeof CODE): string {
  if (code in CODE) {
    return `${code} - ${CODE[code].title}`;
  }

  return `${code}`;
}
