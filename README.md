# Credit Card Generator / Interactive Card Details Form

A React web application replicating the Figma reference design for the interactive card details form.

## Features

- **Live Card Updates**: Real-time front and back card preview updates as user enters details.
- **Card Number Formatting**: Automatically spaces input in groups of 4 digits up to 16 digits.
- **Form Validation**: Strict client-side validation on Confirm for empty fields, format rules, lengths, and valid month/year/CVC values.
- **Inline Error Feedback**: Descriptive error messages below each invalid field.
- **Success State**: Completed confirmation screen with checkmark and Continue button.
- **Toast Notification**: Subtle feedback popup upon successful card addition.
- **Reset Flow**: Clicking Continue resets the form and preview back to placeholder states.
- **Responsive Layout**: Desktop split layout and mobile-optimized vertical stack.

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Running Tests
```bash
npm test -- --watchAll=false
```

### Production Build
```bash
npm run build
```

## Deployment

### Deploying to Netlify
1. Connect your repository to Netlify.
2. Set **Build command** to: `npm run build`
3. Set **Publish directory** to: `build`

### Deploying to Render
1. Create a new **Static Site** on Render.
2. Connect your Git repository.
3. Set **Build Command** to: `npm run build`
4. Set **Publish Directory** to: `build`
