# Simple Interest Calculator

This project contains a simple interest calculator script written in Bash. The script computes simple interest based on user-provided values for principal amount, rate of interest, and time period.

## How to Run the Script

To run the `simple-interest.sh` script, follow these steps:
1. Open your terminal.
2. Navigate to the directory where the script is located.
3. Execute the script by running the command: `bash simple-interest.sh`

The script will prompt you to enter the following values:
- Principal amount
- Rate of interest (in %)
- Time (in years)

## Example Input/Output

**Input:**
```
Enter Principal Amount: 1000
Enter Rate of Interest: 5
Enter Time in Years: 2
```

**Output:**
```
Simple Interest: 100.00
```

## Note

The script uses `bc` for performing floating-point calculations, ensuring accurate results when dealing with decimal values.