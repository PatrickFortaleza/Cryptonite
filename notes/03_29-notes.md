- Since the requirements are all laid out for us, and the project plan is pretty robust, Our next discussion should revolve around picking:
  1. A technology stack
  2. the API we will use

Potential Technology Stack:

1. Database: MongoDB Cloud
2. Server: [Serverless] AWS Lambda, AWS API Gateway
3. Authentication: AWS Cognito + MongoDB
4. Client: React Native
5. API: CryptoCurrency

Gaps:

- Using Cognito + MongoDB
- What/How does the data flow between technologies?

- Concerns with technology stack

  1. Selecting a database for a react native application

- Concerns around the API:

  1. Difficulty of setting-up API and making requests
  2. Robustness of Data

- Extra notes:
  - Noone likes AWS (LOL) except Stefan
  - Patrick wants to do Front-End
  - AJ prefers the Back-End

What we need from External API

- Cryptocurrency Data:
  - Current Price of X Coin
  - Last Price of X Coin 24 hours ago
  - X Coin's Ticker symbol
  - X Coin's Coin title

What we need in our Internal DB

- User Data:
  - Tracks purchases of cryptocurrency
    - Book Value (Price that user purchased the coin)
    - Date of purchase (Coin)
    - Market Value (Current price of the coin)
    - Record daily value of coin price

1. ERD/Database Design
2. Lofi mockups
3. Test solution
4. Find API
