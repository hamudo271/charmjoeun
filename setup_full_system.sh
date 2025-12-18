#!/bin/bash
set -e # Exit on error

echo "============================================"
echo "   Starting Automated Environment Setup"
echo "   (Homebrew, Node.js, Git, PostgreSQL)"
echo "============================================"

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "1. Installing Homebrew..."
    echo "   [IMPORTANT] You may be asked for your login password."
    echo "   Please type it and press ENTER if prompted."
    
    # Run Homebrew Installer
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Configure shell environment for Apple Silicon
    echo "   Configuring Homebrew in .zprofile..."
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
else
    echo "1. Homebrew is already installed."
fi

# Update Homebrew
echo "2. Updating Homebrew..."
brew update

# Install Packages
echo "3. Installing Git, Node.js, PostgreSQL..."
brew install git node postgresql

# Start Services
echo "4. Starting PostgreSQL service..."
brew services start postgresql

# Verify Versions
echo "============================================"
echo "   Verification:"
echo "   Git: $(git --version)"
echo "   Node: $(node --version)"
echo "   NPM: $(npm --version)"
echo "   Postgres: $(postgres --version)"
echo "============================================"
echo "   Setup Complete! You can now run 'npm run dev' safely."
