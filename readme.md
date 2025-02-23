# Inscribe - Documentation Generator

<p align="center">
  <img src="extension/gitdoc/images/inscribe.png" alt="Inscribe Logo" width="128" height="128">
</p>

Inscribe is a powerful VS Code extension that automatically generates comprehensive documentation for your code. With just a few clicks, you can create well-structured documentation for individual files or entire projects, and keep it in sync with your codebase.

## Features

### 🎯 Multiple Documentation Templates
- **Standard Documentation**: Basic file documentation with summary, purpose, and components
- **API Documentation**: Detailed API docs with endpoints, requests, and responses
- **README Documentation**: Project README with installation, usage, and configuration
- **Architecture Documentation**: System architecture with components, data flow, and design

### 🔄 Smart Change Tracking
- Automatically tracks files changed since last documentation
- Option to update documentation only for changed files
- Clear visual indicators in status bar for pending changes

### 📦 Project-Wide Documentation
- Generate documentation for entire projects
- Create comprehensive project summaries
- Maintain consistent documentation structure

### 💾 GitHub Integration
- One-click documentation commit and push
- Automatic Git repository initialization
- Easy remote repository setup

## Getting Started

### Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Inscribe"
4. Click Install

## Usage

### Quick Access
- Status Bar Items:
  - 📚 **Inscribe**: Generate documentation
  - 🔄 **Sync**: Push documentation to GitHub
  - Number indicates changed files

### Keyboard Shortcuts
- `Ctrl+Alt+D` (Mac: `Cmd+Alt+D`): Generate project documentation
- `Ctrl+Alt+F` (Mac: `Cmd+Alt+F`): Document current file
- `Ctrl+Alt+L` (Mac: `Cmd+Alt+L`): Show changed files

### Documentation Generation

#### Single File
1. Open the file you want to document
2. Press `Ctrl+Alt+F` or click "Document Current File" in the Inscribe panel
3. Select documentation template
4. Documentation will be generated and saved in the `docs` folder

#### Entire Project
1. Open your project folder
2. Press `Ctrl+Alt+D` or click "Generate Project Documentation"
3. Select documentation template
4. Choose to document all files or only changed files
5. Documentation will be generated for all selected files

### View Documentation
- Open the Inscribe panel in the Activity Bar
- Browse all documentation files
- Click on any file to view its documentation
- Project summary provides a high-level overview

### GitHub Sync
1. Click the Sync button in the status bar
2. Enter a commit message
3. If repository isn't initialized:
   - Choose to initialize Git repository
   - Set up remote repository (optional)
4. Documentation will be committed and pushed

## Documentation Structure

```
project/
└── docs/
    ├── PROJECT_SUMMARY.md
    ├── file1.standard.md
    ├── file2.api.md
    ├── file3.architecture.md
    └── metadata/
        └── file_metadata.json
```

## Customization

### Excluded Folders
Configure which folders to exclude from documentation:
1. Open VS Code settings
2. Search for "Inscribe: Exclude Folders"
3. Add or remove folders from the list

### File Patterns
Configure which file patterns to exclude:
1. Open VS Code settings
2. Search for "Inscribe: Exclude Patterns"
3. Modify the pattern list

## Commands

Access all commands through the Command Palette (Ctrl+Shift+P):
- `Inscribe: Generate Project Documentation`
- `Inscribe: Document Current File`
- `Inscribe: Show Changed Files`
- `Inscribe: Sync Documentation to GitHub`
- `Inscribe: Reset Change Tracking`

## Troubleshooting

### Common Issues

1. **GitHub Sync Failed**
   - Verify Git is installed
   - Check repository permissions
   - Ensure remote repository is configured correctly

## Support

- [Report an Issue](https://github.com/Divyansh3021/inscribe/issues)
- [Documentation](https://github.com/Divyansh3021/inscribe/)
- [Feature Requests](https://github.com/Divyansh3021/inscribe/issues/new)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Google's Generative AI](https://ai.google.dev/)
- Inspired by the need for better documentation tooling
- Thanks to all our contributors

---