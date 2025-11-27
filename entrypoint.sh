#!/bin/sh

# Replace placeholder with actual environment variable
if [ -n "$GEMINI_API_KEY" ]; then
  echo "Injecting GEMINI_API_KEY into config.js..."
  sed -i "s|__GEMINI_API_KEY__|${GEMINI_API_KEY}|g" /app/dist/config.js
else
  echo "WARNING: GEMINI_API_KEY not set!"
fi

# Start the server
echo "Starting server on port 8765..."
exec serve -s dist -l 8765
