import { readdir, rename } from "fs/promises";
import { join } from "path";

for (const category of await readdir("Emojis")) {
  if (category.endsWith(".mjs")) continue;
  for (const emoji of await readdir(join("Emojis", category))) {
    const nfile = (emoji[0].toUpperCase() + emoji.slice(1).toLowerCase())
      .replace(/\bdark\b/, "Dark")
      .replace(/\bdefault\b/, "Default")
      .replace(/\blight\b/, "Light")
      .replace(/\bmedium\b/, "Medium")
      .replace(/\bmedium-dark\b/, "Medium-Dark")
      .replace(/\bmedium-light\b/, "Medium-Light");
    await rename(
      join("Emojis", category, emoji),
      join("Emojis", category, nfile)
    );
  }
}
