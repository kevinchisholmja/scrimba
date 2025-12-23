# Application Requirements

- Build a basketball scorecard that tracks scores for two teams:
  "HOME" and "GUEST".
- The application must visually match the provided Figma design,
  particularly the layout and digital-style score display.
- Each team must have three buttons (+1, +2, +3).
- Clicking a button must increment the correct team’s score by
  the corresponding amount.
- The displayed score must update immediately after each interaction.

Optional Stretch Goals (not required):
- Add a "New Game" button to reset both scores to zero.
- Visually indicate which team is leading.
- Add additional counters (period, fouls) or a countdown timer.
*/

---

### Implementation Guidance (how to approach it)

Implementation Notes

1. Store the current score for each team in variables.
2. Use DOM methods to select:
   - Score display elements
   - All scoring buttons
3. Attach click event listeners to each button.
4. On click:
   - Update the corresponding score variable
   - Re-render the updated score to the DOM using textContent
