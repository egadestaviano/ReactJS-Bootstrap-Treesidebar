# React Bootstrap Tree Sidebar

A responsive sidebar navigation component built with React and Bootstrap, featuring hierarchical menu items with collapsible sections.

## Features Added

### 1. Search Functionality
- Added search input to filter sidebar menu items
- Recursive search through all menu levels
- Real-time filtering as you type

### 2. Dark Mode Toggle
- Theme switching between light and dark modes
- Saves user preference to localStorage
- Respects OS-level dark mode preference
- Custom styling for all components in both themes

### 3. Breadcrumb Navigation
- Dynamic breadcrumb component
- Shows current navigation path
- Responsive design

### 4. Tree Checkbox Component
- Custom tree view with checkboxes
- Expandable/collapsible nodes
- Multi-level selection support
- Submit functionality to get selected items

### 5. Enhanced UI/UX
- Custom scrollbar styling
- Improved visual hierarchy
- Better responsive design
- Consistent styling across components

## Components

- `Sidebar`: Main navigation sidebar with search functionality
- `SidebarItem`: Individual menu items with collapsible children
- `NavbarComponents`: Top navigation bar with dark mode toggle
- `BreadcrumbNavigation`: Dynamic breadcrumb navigation
- `TreeCheckbox`: Custom tree view with checkboxes
- `db.js`: Menu data structure

## Installation

```bash
yarn install
```

## Usage

```bash
yarn dev
```

## Dependencies

- React 18
- React Bootstrap
- Bootstrap 5

## Features

- Responsive design
- Collapsible menu items
- Dark mode support
- Search functionality
- Tree view with checkboxes
- Breadcrumb navigation