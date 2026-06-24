---
name: multi-model-compare
description: Runs the same query across multiple AI models in parallel, displays each response in a comparison canvas, and applies senior-engineer evaluation so the user can pick the best outcome. Use when the user asks to compare models, wants multiple perspectives on a question, says "run this on different models," or wants to see alternative answers before choosing an approach.
---

# Multi-Model Compare

Run one query across multiple models, show results side by side in a canvas, add senior-engineer feedback on which fits best, then wait for the user to choose before implementing.

## When to Apply

- User asks to compare models or see different outcomes for the same question
- User wants multiple perspectives before committing to an approach
- User pairs this with `@senior-software-engineer` for implementation or architecture decisions
- User says "which model answer is better?" or "show me options from different models"

## Default Models

Run these three in parallel unless the user specifies others:

| Display name | Task `model` slug |
|--------------|-------------------|
| Composer 2.5 | `composer-2.5` |
| GPT Codex | `gpt-5.3-codex` |
| Claude Sonnet | `claude-4.6-sonnet-medium-thinking` |

For the full list of available slugs, see [models.md](models.md).

## Workflow

```
Task Progress:
- [ ] Step 1: Capture the query and context
- [ ] Step 2: Launch parallel model runs
- [ ] Step 3: Collect and normalize responses
- [ ] Step 4: Senior engineer evaluation
- [ ] Step 5: Build comparison canvas
- [ ] Step 6: User selects — then proceed
```

### Step 1: Capture the query and context

Extract from the user message:

- **Query**: The exact question or task each model should answer
- **Context**: Relevant constraints, codebase facts, and non-goals (pass these to every subagent)
- **Output expectation**: e.g. "2–3 solution options with trade-offs" when paired with senior-software-engineer

If the query is vague, clarify once before launching models. Do not launch with an ambiguous prompt.

### Step 2: Launch parallel model runs

Launch one `Task` subagent **per model** in a **single message** (parallel). Use `subagent_type: "generalPurpose"` and set the `model` field.

Each subagent prompt must be self-contained:

```markdown
Answer the following question. Do not use tools unless necessary to understand the codebase path mentioned.

## Question
[user's query]

## Context
[constraints, relevant code patterns, stack, non-goals]

## Output format
- Lead with a direct answer or recommendation
- If proposing solutions: provide 2–3 options with pros, cons, effort (S/M/L), and risk
- Keep the response complete and self-contained (the parent agent only sees your final message)
```

Set `run_in_background: false` so all results return before the next step.

### Step 3: Collect and normalize responses

For each model, record:

| Field | Value |
|-------|-------|
| `modelSlug` | Task model parameter used |
| `displayName` | Human-readable name from models.md |
| `response` | Full subagent response text |
| `summary` | 2–3 sentence distillation |

If a subagent fails or times out, note the error in the canvas — do not omit the slot.

### Step 4: Senior engineer evaluation

Apply the [senior-software-engineer](../senior-software-engineer/SKILL.md) lens to **each** model response. Read that skill if not already loaded.

For every response, assess:

| Criterion | What to check |
|-----------|---------------|
| **Fit** | Matches stated goal and constraints |
| **Codebase alignment** | Respects existing patterns (when context was provided) |
| **Trade-off quality** | Options are distinct; pros/cons are honest |
| **Practicality** | Effort and risk estimates are realistic |
| **Clarity** | Actionable without extra interpretation |

Produce a **Senior Engineer Verdict** section:

```markdown
## Senior Engineer Verdict

| Rank | Model | Best suited when | Main strength | Main weakness |
|------|-------|------------------|---------------|---------------|
| 1 | [name] | ... | ... | ... |
| 2 | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... |

**Recommended pick:** [Model name] — [1–2 sentences why]

**Choose differently if:** [conditions that would favor rank 2 or 3]
```

The verdict is advisory. The user makes the final choice.

### Step 5: Build comparison canvas

Create a `.canvas.tsx` file in the workspace canvases directory. Follow the [canvas skill](cursor://skill/canvas) for file location and SDK rules.

**Filename:** `model-compare-<short-topic>.canvas.tsx` (kebab-case)

**Layout:**

1. **Header** — query text (truncated if long) and model count
2. **Verdict callout** — recommended model from Step 4 (`Callout` with `tone: "info"`)
3. **Model cards** — one `Card` per model in a `Grid` or `Row`:
   - Header: display name + rank pill (e.g. `#1 Recommended`)
   - Body: summary + `CollapsibleSection` for full response
   - Footer: `Button` — "Choose this approach" using `useCanvasAction`:

```tsx
dispatch({
  type: "newComposerChat",
  userPrompt: "I choose the [Display Name] approach. Proceed with implementation.",
});
```

Embed all response text inline in the canvas data — no `fetch()`.

Also post a short chat summary: one line per model + link to open the canvas + ask the user to pick (via canvas button or reply).

### Step 6: User selects — then proceed

- **Do not implement** until the user picks a model's approach (or confirms the recommended one).
- When the user chooses, treat that model's response as the selected solution and continue with senior-software-engineer Step 5 (implement the chosen path only).
- If the user wants to blend ideas, ask them to name what to take from each — do not silently merge incompatible approaches.

## Trigger Phrases

Auto-apply when the user says variants of:

- "compare models"
- "run on different models"
- "multi-model"
- "what would different models suggest?"
- "show me multiple outcomes"

## Anti-Patterns

- Running models sequentially when parallel is possible
- Passing chat history by reference instead of explicit context in the subagent prompt
- Skipping senior engineer evaluation when engineering or architecture is involved
- Implementing before the user selects an approach
- Dumping three full responses into chat without a canvas
- Using model slugs not listed in models.md

## Additional Resources

- Available model slugs and display names: [models.md](models.md)
- Canvas layout reference: [canvas-layout.md](canvas-layout.md)
