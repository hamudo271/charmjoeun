#!/bin/bash

# Function to try running npm
try_run_npm() {
    local npm_path="$1"
    echo "Trying npm at: $npm_path"
    
    if [ -x "$npm_path" ]; then
        echo "Found npm! Installing dependencies..."
        "$npm_path" install
        if [ $? -eq 0 ]; then
             echo "Install successful. Starting server..."
             "$npm_path" run dev
             exit 0
        else
             echo "npm install failed."
        fi
    fi
}

# 1. Try PATH first (already tried, but good for completeness)
if command -v npm &> /dev/null; then
    try_run_npm "npm"
fi

# 2. Try Standard Homebrew (Apple Silicon)
if [ -f "/opt/homebrew/bin/npm" ]; then
    try_run_npm "/opt/homebrew/bin/npm"
fi

# 3. Try Standard Homebrew (Intel)
if [ -f "/usr/local/bin/npm" ]; then
    try_run_npm "/usr/local/bin/npm"
fi

# 4. Try NVM
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    echo "Loading NVM..."
    \. "$NVM_DIR/nvm.sh"
    if command -v npm &> /dev/null; then
        try_run_npm "npm"
    fi
fi

# 5. Try to find any node in .nvm versions
for d in "$HOME/.nvm/versions/node"/*; do
    if [ -d "$d" ]; then
        if [ -f "$d/bin/npm" ]; then
            try_run_npm "$d/bin/npm"
        fi
    fi
done

# 6. Try Volta
if [ -f "$HOME/.volta/bin/npm" ]; then
    try_run_npm "$HOME/.volta/bin/npm"
fi

echo "Could not find npm in any common locations."
exit 1
