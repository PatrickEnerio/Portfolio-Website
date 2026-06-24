# Canvas Layout Reference

Minimal structure for model comparison canvases. Adapt content; keep the layout pattern.

```tsx
import {
  Button,
  Callout,
  Card,
  CardBody,
  CardHeader,
  CollapsibleSection,
  Grid,
  H1,
  H2,
  Pill,
  Stack,
  Text,
  useCanvasAction,
  useHostTheme,
} from "cursor/canvas";

type ModelResult = {
  slug: string;
  displayName: string;
  rank: number;
  recommended: boolean;
  summary: string;
  fullResponse: string;
  strength: string;
  weakness: string;
};

const QUERY = "..."; // inline user query
const RESULTS: ModelResult[] = [ /* inline from subagents */ ];
const VERDICT = "..."; // senior engineer recommendation text

export default function ModelCompareCanvas() {
  const theme = useHostTheme();
  const dispatch = useCanvasAction();

  return (
    <Stack gap={16}>
      <H1>Model comparison</H1>
      <Text color={theme.text.secondary}>{QUERY}</Text>

      <Callout tone="info" title="Senior engineer pick">
        {VERDICT}
      </Callout>

      <Grid columns={1} gap={12}>
        {RESULTS.map((r) => (
          <Card key={r.slug} variant="outline">
            <CardHeader
              title={r.displayName}
              trailing={
                r.recommended ? (
                  <Pill tone="accent">#1 Recommended</Pill>
                ) : (
                  <Pill tone="neutral">#{r.rank}</Pill>
                )
              }
            />
            <CardBody>
              <Stack gap={8}>
                <Text>{r.summary}</Text>
                <Text color={theme.text.secondary} size="sm">
                  Strength: {r.strength} · Weakness: {r.weakness}
                </Text>
                <CollapsibleSection title="Full response" defaultOpen={false}>
                  <Text style={{ whiteSpace: "pre-wrap" }}>{r.fullResponse}</Text>
                </CollapsibleSection>
                <Button
                  onClick={() =>
                    dispatch({
                      type: "newComposerChat",
                      userPrompt: `I choose the ${r.displayName} approach. Proceed with implementation.`,
                    })
                  }
                >
                  Choose this approach
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
}
```

Read `~/.cursor/skills-cursor/canvas/sdk/index.d.ts` for exact prop shapes before writing.
