# Co-Working Space Shift & Time Tracker

## 📖 Description

This project is a browser-based time tracking app designed for co-working spaces. Built with **vanilla HTML**, **CSS**, and **JavaScript**, it lets users clock in and out, then view:

- The number of shifts taken per day
- The total hours worked each day
- A daily summary with key analytics

## 🚀 Features

1. **User Check-In / Check-Out**
   - "Check In" and "Check Out" buttons with enabled/disabled states.
   - Prevents duplicate check-ins.
2. **Shift Tracking**
   - Supports multiple shifts in a single day.
   - Records start time, end time, and computes duration per shift.
3. **Daily Summary & Analytics**
   - Displays the total number of shifts completed today.
   - Shows the total time worked today.
4. **Persistence**
   - Uses `localStorage` to save shift data across page reloads.
5. **Live Timer**
   - Real-time countdown showing elapsed time during an active shift.

## 🛠️ Tech Stack

- **HTML5** for semantic structure
- **CSS3** (Flexbox, CSS variables) for layout and theming
- **JavaScript (ES6+)** for core logic, Promises, and local storage

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/co-working-shift-tracker.git
   ```
2. Navigate into the project and open in your browser:
   ```bash
   cd co-working-shift-tracker
   open index.html
   ```

_No external dependencies or npm setup required._

## 💡 Usage

1. Click **Check In** to start a shift.
2. Observe the live timer updating every second.
3. Click **Check Out** to end the current shift.
4. View **History** to see all shifts recorded.
5. Check **Summary** for daily totals and analytics.

## 🤔 Considerations

- What happens if a user forgets to check out?
- How could you display or filter past shifts (e.g., yesterday’s)?
- How should sync failures be handled when persisting data?
- Could you integrate fetching and displaying a motivational quote?

## 🚧 Future Enhancements

- **Dark Mode** toggle using CSS custom properties.
- **CSV Export** of shift history for payroll reports.
- **SVG Charts** to visualize weekly work patterns.
- **Multi-User Support** via separate profiles in `localStorage`.

## 🤝 Contributing

Contributions are welcome! Please:

1. Open an issue to discuss new features or report bugs.
2. Fork the repo, make your changes, and submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
