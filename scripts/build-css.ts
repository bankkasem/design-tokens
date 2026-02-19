import { resolve } from "path";

const tokensDir = resolve(import.meta.dir, "../tokens");
const outputDir = resolve(import.meta.dir, "../dist");

interface TokenValue {
  [key: string]: string | number | TokenValue;
}

function flattenTokens(obj: TokenValue, prefix: string = ""): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenTokens(value, newKey));
    } else {
      const valueStr = String(value);
      if (valueStr.match(/^[a-z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+)+$/)) {
        result[newKey] = `var(--${valueStr.replace(/\./g, "-")})`;
      } else {
        result[newKey] = valueStr;
      }
    }
  }

  return result;
}

async function generateCSS(): Promise<void> {
  const files = [
    "color.json",
    "z-index.json",
    "typography.json",
    "font-family.json",
    "button.json",
    "input.json",
    "badge.json",
    "card.json",
    "avatar.json",
    "status.json",
    "alert.json",
    "spacing.json",
    "border.json",
    "shadow.json",
  ];

  let cssContent = ":root {\n";

  for (const fileName of files) {
    const filePath = resolve(tokensDir, fileName);
    const bunFile = await Bun.file(filePath);
    const content = await bunFile.text();
    const tokens = JSON.parse(content) as TokenValue;
    const flattened = flattenTokens(tokens);

    for (const [key, value] of Object.entries(flattened)) {
      cssContent += `  --${key}: ${value};\n`;
    }
  }

  cssContent += "}\n";

  await Bun.write(resolve(outputDir, "tokens.css"), cssContent);
  console.log("✅ Generated dist/tokens.css");
}

generateCSS();