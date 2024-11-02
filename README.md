# To-Do List Application - Angular Project

## Overview

This project is a simple To-Do List application built using Angular. It allows users to view, add, complete, and remove to-dos. The project covers various Angular concepts such as data in components, arrays, events, and forms.

## Objectives

- Understand data binding in Angular components
- Learn to use arrays to manage a list of to-do items
- Use forms and events to handle user input and actions

## Features

### Phase 1: Display the Data
- Display a list of pre-defined to-do items.
- Implement a "Complete" button to mark items as complete (not functional yet).
- Implement an "X" button to remove to-do items (not functional yet).
- Use an Angular interface (`Todo`) to define the structure of a to-do item. Each to-do includes:
  - **task** (string): The task to complete.
  - **completed** (boolean): Whether the task has been completed.
  - **duration** (number): Estimated duration for the task in hours.
- Display "Complete" button only for items that are not completed.
- Use CSS to strike through completed items.

### Phase 2: Add, Complete, and Remove To-Dos
- Implement the "Complete" button to mark a to-do as complete.
- Implement the "X" button to remove a to-do item.
- Create a form to add new to-do items.
  - Includes input fields for task and duration.
- Additional challenges include adding a "priority" property, editing tasks, filtering the list, and displaying a congratulations message when all tasks are completed.

## Setup

### Prerequisites

To run this project, you will need:
- Node.js installed on your computer
- Angular CLI installed globally

### Installation

1. Clone the repository.
   ```sh
   git clone <repository-url>

   cd angular-todo-list

   npm install

   ng serve
   ```

### Usage
- Viewing To-Dos: Predefined to-dos will be displayed on page load.
- Adding To-Dos: Use the form at the bottom of the list to add a new to-do by providing the task description and estimated duration.
- Completing a Task: Click the "Complete" button to mark a task as complete.
- Removing a Task: Click the "X" button next to a task to remove it from the list.

### Technology Used
- Angular
- TypeScript
- HTML & CSS

### Extended Challenges
- Add a Priority property to each task
- Display congratulations when all items are complete.
- Implement task filtering to find specific tasks.
- Allow editing of existing tasks.

### Visual Design Guidelines
- Font: Open Sans, 300 weight.
- Body Background: Linear gradient (to right, #f857a6, #ff5858).
- Button Colors:
    - Complete button text/border: #ff69b4
    - Submit button background: #ff1493; text: white
- Box Background: White with box shadow (0px 0px 5px 0px rgba(0,0,0,0.75)).
- Priority Levels:
    - "High Priority": Crimson
    - "Low Priority": DarkGoldenrod
