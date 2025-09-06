# Contributing to Hostar Clone

Thank you for your interest in contributing to Hostar Clone! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs
- Use the GitHub issue tracker
- Provide detailed information about the bug
- Include steps to reproduce the issue
- Add screenshots if applicable

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature in detail
- Explain why it would be useful
- Consider the impact on existing functionality

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Follow React best practices
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Component Structure
```jsx
// Import statements
import React from 'react';

// Component definition
const ComponentName = () => {
  // Hooks
  const [state, setState] = useState();
  
  // Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### File Naming
- Use PascalCase for component files: `MovieRow.jsx`
- Use camelCase for utility files: `authUtils.js`
- Use kebab-case for CSS files: `movie-row.css`

## 🧪 Testing

Before submitting your changes:
- Test the application locally
- Check for console errors
- Verify responsive design on different screen sizes
- Test authentication flow
- Ensure all features work as expected

## 📝 Commit Messages

Use clear and descriptive commit messages:
- `Add: new feature description`
- `Fix: bug description`
- `Update: component description`
- `Remove: deprecated feature`
- `Style: UI improvements`

## 🔍 Pull Request Guidelines

### Before Submitting
- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code
- [ ] Comments added for complex areas
- [ ] No console errors
- [ ] Responsive design maintained
- [ ] Authentication flow works

### PR Description
Include:
- Description of changes
- Screenshots (if UI changes)
- Testing instructions
- Any breaking changes

## 🐛 Bug Reports

When reporting bugs, include:
- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Clear, numbered steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Any error messages

## 💡 Feature Requests

For feature requests:
- **Use case**: Why is this feature needed?
- **Proposed solution**: How should it work?
- **Alternatives**: Other ways to solve the problem
- **Additional context**: Any other relevant information

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite Documentation](https://appwrite.io/docs)

## 🎯 Areas for Contribution

- **UI/UX Improvements**: Better animations, responsive design
- **Performance**: Code splitting, lazy loading
- **Accessibility**: ARIA labels, keyboard navigation
- **Testing**: Unit tests, integration tests
- **Documentation**: Code comments, setup guides
- **Features**: New movie categories, search functionality

## 📞 Getting Help

- Open an issue for questions
- Check existing issues first
- Join discussions in issues
- Follow the code of conduct

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

Thank you for contributing to Hostar Clone! 🎬
