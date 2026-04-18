#!/bin/bash

# Simple Interest Calculator

# Function to check if a value is a number
is_number() {
    [[ $1 =~ ^[0-9]+(\\.[0-9]+)?$ ]]
}

# Prompt for principal
read -p "Enter the principal amount: " principal
if ! is_number "$principal"; then
    echo "Error: Principal must be a numeric value."
    exit 1
fi

# Prompt for rate of interest
read -p "Enter the rate of interest: " rate
if ! is_number "$rate"; then
    echo "Error: Rate must be a numeric value."
    exit 1
fi

# Prompt for time period
read -p "Enter the time period (in years): " time
if ! is_number "$time"; then
    echo "Error: Time period must be a numeric value."
    exit 1
fi

# Calculate simple interest
simple_interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

# Output the result
echo "Simple Interest: \\$simple_interest"