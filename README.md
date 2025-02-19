# GenX Reality

## Overview

GenX Reality is a project aimed at making Augmented Reality (AR) and Virtual Reality (VR) accessible and affordable for everyone. The project includes both client-side and server-side applications, as well as shared schemas and configurations.

## Features

- Client-side application built with React and TypeScript
- Server-side application built with Express and TypeScript
- Database migrations using Drizzle
- Tailwind CSS for styling
- React Query for data fetching and caching

## Development Environment Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/8harath/GenXReality.git
   cd GenXReality
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```sh
   DATABASE_URL=your_database_url
   ```

4. **Run database migrations:**
   ```sh
   npm run db:push
   ```

## Building and Running the Project

1. **Development mode:**
   ```sh
   npm run dev
   ```

2. **Production build:**
   ```sh
   npm run build
   ```

3. **Start the production server:**
   ```sh
   npm start
   ```

## Running Tests

(Currently, there are no tests available for this project. Please add tests as needed.)

## Contributing

We welcome contributions from the community. Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the standards of behavior we expect from our community.
